using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

namespace CenterEnd.BusinessLogic.Services;

public interface IAuthService
{
    Task<RegisterResponse> RegisterAsync(RegisterRequest request);
    Task<LoginResponse> LoginAsync(LoginRequest request);
    // Task<SendEmailResponse> SendEmailAsync(SendEmailRequest request);
    // Task<VerifyWithCodeResponse> VerifyWithCodeAsync(VerifyWithCodeRequest request);
    // Task<RevokeTokenResponse> RevokeTokenAsync(RevokeTokenRequest request);
}
