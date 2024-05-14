using System.Text.Json.Serialization;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

public class GetPlaceByIdResponse
{
    [JsonPropertyName("place")]
    public required Place Place { get; set; }
}