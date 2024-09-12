using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

public class DeletePlaceRequest
{
    [JsonPropertyName("placeId")]
    public required int PlaceID { get; set; }
}