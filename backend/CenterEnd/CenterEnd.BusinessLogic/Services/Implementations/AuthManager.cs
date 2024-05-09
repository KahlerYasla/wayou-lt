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

        await _userRepository.Add(user);
        await _userRepository.SaveChanges();

        return new RegisterResponse
        {
            Token = JwtTokenGenerator.GenerateToken(user.Name, user.Email)
        };
    }
}