using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

public class GetPlaceByIdRequest
{
    [JsonPropertyName("placeId")]
    public required int PlaceID { get; set; }
}