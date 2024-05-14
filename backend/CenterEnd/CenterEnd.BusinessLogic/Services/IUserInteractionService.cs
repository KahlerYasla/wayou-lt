using CenterEnd.BusinessLogic.DTOs;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

namespace CenterEnd.BusinessLogic.Services;

public interface IUserInteractionService
{
    Task<BaseResponse<UserInteractionResponse>> UpdateOrCreateUserInteractionAsync(UserInteractionRequest request);
}
