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
            Name = request.Username,
            Email = request.Email,
            Password = PasswordHasher.HashPassword(request.Password)
        };

        await _userRepository.AddAsync(user);
        await _userRepository.SaveChangesAsync();

        return new RegisterResponse
        {
            Token = JwtTokenGenerator.GenerateToken(user.Name, user.Email)
        };
    }

    public async Task<LoginResponse> LoginAsync(LoginRequest request)
    {
        User? user = await _userRepository.SingleOrDefaultAsync(u => u.Name == request.Username) ?? null;

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
            Token = JwtTokenGenerator.GenerateToken(user.Name, user.Email)
        };
    }

}