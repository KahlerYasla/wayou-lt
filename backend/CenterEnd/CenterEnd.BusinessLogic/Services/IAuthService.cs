using CenterEnd.BusinessLogic.DTOs;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

namespace CenterEnd.BusinessLogic.Services;

public interface IAuthService
{
    Task<BaseResponse<RegisterResponse>> RegisterAsync(RegisterRequest request);
    Task<BaseResponse<LoginResponse>> LoginAsync(LoginRequest request);
    // Task<SendEmailResponse> SendEmailAsync(SendEmailRequest request);
    // Task<VerifyWithCodeResponse> VerifyWithCodeAsync(VerifyWithCodeRequest request);
    // Task<RevokeTokenResponse> RevokeTokenAsync(RevokeTokenRequest request);
}
