using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.Services;

public class UserInteractionManager(
    IGenericRepository<UserInteraction> userInteractionRepository,
    IGenericRepository<User> userRepository,
    IGenericRepository<Place> placeRepository
 ) : IUserInteractionService
{
    private readonly IGenericRepository<UserInteraction> _userInteractionRepository = userInteractionRepository;
    private readonly IGenericRepository<User> _userRepository = userRepository;
    private readonly IGenericRepository<Place> _placeRepository = placeRepository;

    public async Task<UserInteractionResponse> UpdateOrCreateUserInteractionAsync(UserInteractionRequest request)
    {
        User? user = await _userRepository.GetByIdAsync(request.UserId);

        if (user == null)
        {
            return new UserInteractionResponse
            {
                Success = false,
                Message = "User not found"
            };
        }

        UserInteraction? userInteraction = user.UserInteraction;

        if (userInteraction == null)
        {
            userInteraction = new UserInteraction();
            await _userInteractionRepository.AddAsync(userInteraction);
        }

        if (request.IsLikedNorPassed) // Liked
        {
            Place? place = await _placeRepository.GetByIdAsync(request.PlaceId);

            if (place == null)
            {
                return new UserInteractionResponse
                {
                    Success = false,
                    Message = "Place with id:" + request.PlaceId + "not found"
                };
            }

            if (request.IsLikedNorPassed)
            {
                userInteraction.LikedPlaces!.Add(place);
            }
            else
            {
                userInteraction.PassedPlaces!.Add(place);
            }

            await _userInteractionRepository.UpdateAsync(userInteraction);
            return new UserInteractionResponse
            {
                Success = true
            };
        }
        else // Passed
        {
            Place? place = await _placeRepository.GetByIdAsync(request.PlaceId);

            if (place == null)
            {
                return new UserInteractionResponse
                {
                    Success = false,
                    Message = "Place with id:" + request.PlaceId + "not found"
                };
            }

            if (request.IsLikedNorPassed)
            {
                userInteraction.LikedPlaces!.Add(place);
            }
            else
            {
                userInteraction.PassedPlaces!.Add(place);
            }

            await _userInteractionRepository.UpdateAsync(userInteraction);
            return new UserInteractionResponse
            {
                Success = true
            };
        }
    }

}