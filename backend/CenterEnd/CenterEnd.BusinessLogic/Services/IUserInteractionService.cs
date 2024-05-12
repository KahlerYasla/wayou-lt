using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

namespace CenterEnd.BusinessLogic.Services;

public interface IUserInteractionService
{
    Task<UserInteractionResponse> UpdateOrCreateUserInteractionAsync(UserInteractionRequest request);
}
