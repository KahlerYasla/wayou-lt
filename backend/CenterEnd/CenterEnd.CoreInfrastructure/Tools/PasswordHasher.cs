namespace CenterEnd.CoreInfrastructure.Tools.Implementations;

public static class PasswordHasher
{
    public static string HashPassword(string password)
    {
        var passwordHasher = new PasswordHasher<User>();
        return passwordHasher.HashPassword(null, password);
    }

    public static PasswordVerificationResult VerifyHashedPassword(string hashedPassword, string providedPassword)
    {
        var passwordHasher = new PasswordHasher<User>();
        return passwordHasher.VerifyHashedPassword(null, hashedPassword, providedPassword);
    }
}