using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using CenterEnd.CoreInfrastructure.Utils;
using Microsoft.IdentityModel.Tokens;

namespace CenterEnd.CoreInfrastructure.Tools;

public static class JwtTokenResolver
{
    public static ClaimsPrincipal? ResolveToken(string token)
    {
        string secretRaw = WEnvJson.GetEnvJson("SecretKey")!;

        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.UTF8.GetBytes(secretRaw);

        var validationParameters = new TokenValidationParameters
        {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = true,
            ValidateAudience = true
        };

        try
        {
            var principal = tokenHandler.ValidateToken(token, validationParameters, out _);
            return principal;
        }
        catch (SecurityTokenException)
        {
            return null;
        }
    }

    public static string GetUsernameFromToken(string token)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var jwtToken = tokenHandler.ReadJwtToken(token);

        return jwtToken.Subject;
    }
}
