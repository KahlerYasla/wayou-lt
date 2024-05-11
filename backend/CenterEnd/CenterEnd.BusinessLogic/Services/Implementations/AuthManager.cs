using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using CenterEnd.CoreInfrastructure.Tools;
using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.Services;

public class AuthManager(IGenericRepository<User> userRepository) : IAuthService
{
    private readonly IGenericRepository<User> _userRepository = userRepository;

    public async Task<RegisterResponse> RegisterAsync(RegisterRequest request)
    {
        var user = new User
        {
            UserName = request.Username,
            Email = request.Email,
            Password = PasswordHasher.HashPassword(request.Password)
        };

        if (await _userRepository.SingleOrDefaultAsync(u => u.UserName == user.UserName) != null)
        {
            return new RegisterResponse
            {
                Token = "User already exists"
            };
        }

        await _userRepository.AddAsync(user);
        await _userRepository.SaveChangesAsync();

        return new RegisterResponse
        {
            Token = JwtTokenGenerator.GenerateToken(user.UserName, user.Email)
        };
    }

    public async Task<LoginResponse> LoginAsync(LoginRequest request)
    {
        User? user = await _userRepository.SingleOrDefaultAsync(u => u.UserName == request.Username) ?? null;

        if (user == null)
        {
            return new LoginResponse
            {
                Token = "User not found"
            };
        }

        if (!PasswordHasher.VerifyPassword(user.Password, request.Password))
        {
            return new LoginResponse
            {
                Token = "Invalid password"
            };
        }

        return new LoginResponse
        {
            Token = JwtTokenGenerator.GenerateToken(user.UserName, user.Email)
        };
    }

}