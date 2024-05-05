using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace CenterEnd.CoreInfrastructure.Tools;

public static class JwtTokenGenerator
{
    static TimeSpan TokenExpiration;

    public static string GenerateToken(string username, string email, string secretRaw, TimeSpan tokenExpiration)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.UTF8.GetBytes(secretRaw);
        TokenExpiration = tokenExpiration;

        var claims = new List<Claim>
            {
                new (JwtRegisteredClaimNames.Sub, username!),
                new (JwtRegisteredClaimNames.Email, email!),
                new (JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };

        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(claims),
            Expires = DateTime.UtcNow + TokenExpiration,
            Audience = "berkay_aslan",
            Issuer = "berkay_aslan",
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.Sha256)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(token);
    }
}
