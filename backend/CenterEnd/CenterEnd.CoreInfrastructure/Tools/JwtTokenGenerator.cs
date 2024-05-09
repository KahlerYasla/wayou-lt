using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using CenterEnd.CoreInfrastructure.Utils;
using Microsoft.IdentityModel.Tokens;

namespace CenterEnd.CoreInfrastructure.Tools;

public static class JwtTokenGenerator
{
    static TimeSpan TokenExpiration;

    public static string GenerateToken(string username, string email)
    {
        var secretRaw = WEnvJson.GetEnvJson("SecretKey")!;

        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.UTF8.GetBytes(secretRaw);

        TokenExpiration = TimeSpan.FromDays(int.Parse(WEnvJson.GetEnvJson("TokenExpiration")!));

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
            Audience = "temp",
            Issuer = "temp",
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.Sha256)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);

        return tokenHandler.WriteToken(token);
    }
}
