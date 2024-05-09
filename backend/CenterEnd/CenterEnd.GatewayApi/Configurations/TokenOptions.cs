namespace CenterEnd.GatewayApi.Configurations;

public class TokenOptions
{
    public required string Audience { get; set; }
    public required string Issuer { get; set; }
    public int AccessTokenExpriation { get; set; }
    public required string SecretKey { get; set; }
}
