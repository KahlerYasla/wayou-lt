using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using System.Linq.Expressions;

namespace CenterEnd.BusinessLogic.Services;
public class DeckManager(IGenericRepository<Deck> deckRepository, IGenericRepository<User> userRepository, IGenericRepository<Place> placeRepository) : IDeckService
{
    private readonly IGenericRepository<Deck> _deckRepository = deckRepository;
    private readonly IGenericRepository<User> _userRepository = userRepository;
    private readonly IGenericRepository<Place> _placeRepository = placeRepository;

    public async Task<CreateDeckResponse> CreateDeckAsync(CreateDeckRequest request)
    {
        User? user = await _userRepository.SingleOrDefaultAsync(u => u.Id == request.OwnerUserId) ?? null;
        List<Place>? places = [];

        foreach (var placeId in request.PlacesOfDeckByIds)
        {
            Place? place = await _placeRepository.SingleOrDefaultAsync(p => p.Id == placeId) ?? null;

            if (place != null)
            {
                places.Add(place);
            }
        }

        if (user == null)
        {
            return new CreateDeckResponse
            {
                Success = false,
                Message = "How the fuck did you get here without the user"
            };
        }

        Deck deck = new()
        {
            DeckName = request.Name,
            OwnerUser = user,
            PlacesOfDeck = places
        };

        await _deckRepository.AddAsync(deck);
        await _deckRepository.SaveChangesAsync();

        return new CreateDeckResponse
        {
            Success = true,
            Message = "Nailed it bitch!"
        };
    }

    public async Task<UpdateDeckResponse> UpdateDeckAsync(UpdateDeckRequest request)
    {
        Deck? deck = await _deckRepository.SingleOrDefaultAsync(d => d.Id == request.Id);

        if (deck == null)
        {
            return new UpdateDeckResponse
            {
                Success = false,
                Message = "The deckId can not be matched. Send me a vaild deckId Nigga!"
            };
        }

        deck.DeckName = request.Name ?? deck.DeckName;

        if (request.PlacesByIds == null) return new UpdateDeckResponse { Success = true };

        switch (request.WhatToDoWithPlaces)
        {
            case "append":
                {
                    List<Place> places = (await _placeRepository.FindAsync(x => request.PlacesByIds.Contains(x.Id))).ToList();
                    deck.PlacesOfDeck!.AddRange(places);

                    break;
                }
            case "remove":
                {
                    List<Place> places = (await _placeRepository.FindAsync(x => request.PlacesByIds.Contains(x.Id))).ToList();
                    deck.PlacesOfDeck!.RemoveAll(x => request.PlacesByIds.Contains(x.Id));
                    break;
                }
        }

        await _deckRepository.UpdateAsync(deck);
        await _deckRepository.SaveChangesAsync();

        return new UpdateDeckResponse { Success = true, };
    }

    public async Task<DeleteDeckResponse> DeleteDeckAsync(DeleteDeckRequest request)
    {
        var deck = await _deckRepository.SingleOrDefaultAsync(d => d.Id == request.DeckId);

        if (deck == null)
        {
            return new DeleteDeckResponse
            {
                Success = false,
                Message = "The deckId can not be matched. Send me a vaild deck"
            };
        }

        await _deckRepository.RemoveAsync(deck);
        await _deckRepository.SaveChangesAsync();

        return new DeleteDeckResponse
        {
            Success = true,
            Message = "Deck has been deleted"
        };
    }

    public async Task<GetAllDecksByUserIdResponse> GetAllDecksByUserIdAsync(int userId)
    {
        User? user = await _userRepository.SingleOrDefaultAsync(u => u.Id == userId);

        if (user == null)
        {
            return new GetAllDecksByUserIdResponse
            {
                Success = false,
                Message = "The userId can not be matched. Send me a vaild userId"
            };
        }

        List<Deck> decks = (await _deckRepository.FindAsync(d => d.OwnerUser == user)).ToList();

        if (decks == null)
        {
            return new GetAllDecksByUserIdResponse
            {
                Success = false,
                Message = "The user has no decks initialized in the database. It is a server error"
            };
        }

        return new GetAllDecksByUserIdResponse
        {
            DeckList = decks,
            Success = true
        };
    }

    public async Task<GetDeckByIdResponse> GetDeckByIdAsync(int deckId)
    {
        var deck = await _deckRepository.SingleOrDefaultAsync(d => d.Id == deckId);

        return new GetDeckByIdResponse
        {
            RequestedDeck = deck,
        };
    }
}
