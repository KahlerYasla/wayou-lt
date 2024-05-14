using System.Security.Cryptography;

namespace CenterEnd.CoreInfrastructure.Tools;

public static class PasswordHasher
{
    private const int SaltSize = 16; // 128 bits
    private const int HashSize = 20; // 160 bits
    private const int Iterations = 10000;

    public static string HashPassword(string password)
    {
        byte[] salt;
#pragma warning disable SYSLIB0023 // Type or member is obsolete
        new RNGCryptoServiceProvider().GetBytes(salt = new byte[SaltSize]);
#pragma warning restore SYSLIB0023 // Type or member is obsolete

#pragma warning disable SYSLIB0041 // Type or member is obsolete
        var pbkdf2 = new Rfc2898DeriveBytes(password, salt, Iterations);
#pragma warning restore SYSLIB0041 // Type or member is obsolete
        byte[] hash = pbkdf2.GetBytes(HashSize);

        byte[] hashBytes = new byte[SaltSize + HashSize];
        Array.Copy(salt, 0, hashBytes, 0, SaltSize);
        Array.Copy(hash, 0, hashBytes, SaltSize, HashSize);

        string hashedPassword = Convert.ToBase64String(hashBytes);
        return hashedPassword;
    }

    public static bool VerifyPassword(string password, string hashedPassword)
    {
        byte[] hashBytes = Convert.FromBase64String(hashedPassword);

        byte[] salt = new byte[SaltSize];
        Array.Copy(hashBytes, 0, salt, 0, SaltSize);

#pragma warning disable SYSLIB0041 // Type or member is obsolete
        var pbkdf2 = new Rfc2898DeriveBytes(password, salt, Iterations);
#pragma warning restore SYSLIB0041 // Type or member is obsolete
        byte[] hash = pbkdf2.GetBytes(HashSize);

        for (int i = 0; i < HashSize; i++)
        {
            if (hashBytes[i + SaltSize] != hash[i])
            {
                return false;
            }
        }
        return true;
    }
}
