using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

namespace CenterEnd.BusinessLogic.Services;

public interface IDeckService
{
    Task<CreateDeckResponse> CreateDeckAsync(CreateDeckRequest request);
    Task<UpdateDeckResponse> UpdateDeckAsync(UpdateDeckRequest request);
    Task<DeleteDeckResponse> DeleteDeckAsync(DeleteDeckRequest request);
    Task<GetAllDecksByUserIdResponse> GetAllDecksByUserIdAsync(int userId);
    Task<GetDeckByIdResponse> GetDeckByIdAsync(int deckId);
}
