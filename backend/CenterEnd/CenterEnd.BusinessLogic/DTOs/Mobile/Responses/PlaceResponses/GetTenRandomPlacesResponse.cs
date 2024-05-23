using System.Text.Json.Serialization;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

public class GetTenRandomPlacesResponse
{
    [JsonPropertyName("placeList")]
    public required List<Place> PlaceList { get; set; }
}