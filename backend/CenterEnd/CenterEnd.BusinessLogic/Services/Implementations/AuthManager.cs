using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.Services;

public class AuthManager(IGenericRepository<User> userRepository) : IAuthService
{
    private readonly IGenericRepository<User> _userRepository = userRepository;

    public async Task<AuthResponse> RegisterAsync(RegisterRequest request)
    {
        bool isUserExists = await _userRepository.Any(u => u.Email == request.Email);
        if (isUserExists)
        {
            return new AuthResponse { Message = "User with this email already exists" };
        }

        var newUser = new User
        {
            Name = request.Name,
            Email = request.Email,
            Password = BCrypt.Net.BCrypt.HashPassword(request.Password)
        };

        _userRepository.Add(newUser);

        _userRepository.SaveChanges();

        return new AuthResponse { Message = "User registered successfully" };
    }
}