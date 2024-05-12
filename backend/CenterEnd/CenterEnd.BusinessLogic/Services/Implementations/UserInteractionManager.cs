using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.Services;

public class UserInteractionManager(IGenericRepository<UserInteraction> userInteractionRepository) : IUserInteractionService
{
    private readonly IGenericRepository<UserInteraction> _userInteractionRepository = userInteractionRepository;

    public async Task<UserInteractionResponse> UpdateOrCreateUserInteractionAsync(UserInteractionRequest request)
    {
        var userInteraction = await _userInteractionRepository.SingleOrDefaultAsync(u => u.UserId == request.UserId && u.PlaceId == request.PlaceId) ?? null;

        if (userInteraction == null)
        {
            userInteraction = new UserInteraction
            {
                UserId = request.UserId,
                IsLikedNorPassed = request.IsLikedNorPassed,
                PlaceId = request.PlaceId
            };

            await _userInteractionRepository.AddAsync(userInteraction);
        }
        else
        {
            userInteraction.IsLikedNorPassed = request.IsLikedNorPassed;
        }

        await _userInteractionRepository.SaveChangesAsync();

        return new UserInteractionResponse
        {
            IsLikedNorPassed = userInteraction.IsLikedNorPassed
        };
    }
}