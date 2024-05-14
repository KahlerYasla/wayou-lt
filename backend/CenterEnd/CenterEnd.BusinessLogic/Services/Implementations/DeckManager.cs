using CenterEnd.DataAccess.Generic;
using CenterEnd.Database.Entities.Concrete;
using CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
using CenterEnd.BusinessLogic.DTOs.Mobile.Responses;
using CenterEnd.BusinessLogic.DTOs;

namespace CenterEnd.BusinessLogic.Services;
public class DeckManager(IGenericRepository<Deck> deckRepository, IGenericRepository<User> userRepository, IGenericRepository<Place> placeRepository) : IDeckService
{
    private readonly IGenericRepository<Deck> _deckRepository = deckRepository;
    private readonly IGenericRepository<User> _userRepository = userRepository;
    private readonly IGenericRepository<Place> _placeRepository = placeRepository;
    //=======================================================================================================
    public async Task<BaseResponse<CreateDeckResponse>> CreateDeckAsync(CreateDeckRequest request)
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

        if (user == null) return new BaseResponse<CreateDeckResponse>(success: false, message: "The userId can not be matched. Send me a vaild userId", data: null);

        Deck deck = new() { DeckName = request.Name, OwnerUser = user, PlacesOfDeck = places };

        await _deckRepository.AddAsync(deck);
        await _deckRepository.SaveChangesAsync();

        return new BaseResponse<CreateDeckResponse>(success: true, message: "Deck has been created", data: null);
    }
    //=======================================================================================================
    public async Task<BaseResponse<UpdateDeckResponse>> UpdateDeckAsync(UpdateDeckRequest request)
    {
        Deck? deck = await _deckRepository.SingleOrDefaultAsync(d => d.Id == request.Id);

        if (deck == null) return new BaseResponse<UpdateDeckResponse>(success: false, message: "The deckId can not be matched. Send me a vaild deck", data: null);

        deck.DeckName = request.Name ?? deck.DeckName;

        if (request.PlacesByIds == null) return new BaseResponse<UpdateDeckResponse>(success: false, message: "The placesByIds can not be null. Send me a vaild placesByIds", data: null);

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

        return new BaseResponse<UpdateDeckResponse>(success: true, message: "Deck has been updated", data: null);
    }
    //=======================================================================================================
    public async Task<BaseResponse<DeleteDeckResponse>> DeleteDeckAsync(DeleteDeckRequest request)
    {
        var deck = await _deckRepository.SingleOrDefaultAsync(d => d.Id == request.DeckId);

        if (deck == null) return new BaseResponse<DeleteDeckResponse>(success: false, message: "The deckId can not be matched. Send me a vaild deckId", data: null);

        await _deckRepository.RemoveAsync(deck);
        await _deckRepository.SaveChangesAsync();

        return new BaseResponse<DeleteDeckResponse>(success: true, message: "Deck has been deleted", data: null);
    }
    //=======================================================================================================
    public async Task<BaseResponse<GetAllDecksByUserIdResponse>> GetAllDecksByUserIdAsync(int userId)
    {
        User? user = await _userRepository.SingleOrDefaultAsync(u => u.Id == userId);

        if (user == null) return new BaseResponse<GetAllDecksByUserIdResponse>(success: false, message: "The userId can not be matched. Send me a vaild userId", data: null);

        List<Deck> decks = (await _deckRepository.FindAsync(d => d.OwnerUser == user)).ToList();

        if (decks == null) return new BaseResponse<GetAllDecksByUserIdResponse>(success: false, message: "The userId can not be matched. Send me a vaild userId", data: null);

        GetAllDecksByUserIdResponse response = new() { DeckList = decks };

        return new BaseResponse<GetAllDecksByUserIdResponse>(success: true, message: "Decks has been fetched", data: response);
    }
    //=======================================================================================================
    public async Task<BaseResponse<GetDeckByIdResponse>> GetDeckByIdAsync(int deckId)
    {
        Deck? deck = await _deckRepository.SingleOrDefaultAsync(d => d.Id == deckId);

        GetDeckByIdResponse response = new() { RequestedDeck = deck };

        return deck == null ?
        new BaseResponse<GetDeckByIdResponse>(success: false, message: "The deckId can not be matched. Send me a vaild deckId", data: null)
        : new BaseResponse<GetDeckByIdResponse>(success: true, message: "Deck has been fetched", data: response);
    }
}
