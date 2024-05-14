using CenterEnd.BusinessLogic.DTOs;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

namespace CenterEnd.BusinessLogic.Services;

public interface IDeckService
{
    Task<BaseResponse<CreateDeckResponse>> CreateDeckAsync(CreateDeckRequest request);
    Task<BaseResponse<UpdateDeckResponse>> UpdateDeckAsync(UpdateDeckRequest request);
    Task<BaseResponse<DeleteDeckResponse>> DeleteDeckAsync(DeleteDeckRequest request);
    Task<BaseResponse<GetAllDecksByUserIdResponse>> GetAllDecksByUserIdAsync(int userId);
    Task<BaseResponse<GetDeckByIdResponse>> GetDeckByIdAsync(int deckId);
}
