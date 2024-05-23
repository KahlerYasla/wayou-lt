using CenterEnd.BusinessLogic.DTOs;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using CenterEnd.CoreInfrastructure.Tools;
using CenterEnd.CoreInfrastructure.Utils;
using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.Services;

public class AuthManager(IGenericRepository<User> userRepository) : IAuthService
{
    private readonly IGenericRepository<User> _userRepository = userRepository;
    //=======================================================================================================
    public async Task<BaseResponse<RegisterResponse>> RegisterAsync(RegisterRequest request)
    {
        var user = new User
        {
            UserName = request.Username,
            Email = request.Email,
            Password = PasswordHasher.Hash(request.Password)
        };

        if (await _userRepository.SingleOrDefaultAsync(u => u.UserName == user.UserName) != null)
        {
            return new BaseResponse<RegisterResponse>(success: false, message: "Username already exists", data: null);
        }

        await _userRepository.AddAsync(user);
        await _userRepository.SaveChangesAsync();

        return new BaseResponse<RegisterResponse>(
            success: true, message: "User registered successfully",
            data: new RegisterResponse
            {
                Token = JwtTokenGenerator.GenerateToken(user.UserName, user.Email)
            }
        );
    }
    //=======================================================================================================
    public async Task<BaseResponse<LoginResponse>> LoginAsync(LoginRequest request)
    {
        User? user = await _userRepository.SingleOrDefaultAsync(u => u.UserName == request.Username) ?? null;

        if (user == null)
        {
            return new BaseResponse<LoginResponse>(success: false, message: "User not found", data: null);
        }

        WConsole.PrintNormal("checking password raw from database: " + user.Password);

        if (!PasswordHasher.Verify(request.Password, user.Password))
        {
            return new BaseResponse<LoginResponse>(success: false, message: "Invalid password", data: null);
        }

        return new BaseResponse<LoginResponse>(
            success: true, message: "User logged in successfully",
            data: new LoginResponse
            {
                Token = JwtTokenGenerator.GenerateToken(user.UserName, user.Email),
                UserId = user.Id
            }
        );
    }

}