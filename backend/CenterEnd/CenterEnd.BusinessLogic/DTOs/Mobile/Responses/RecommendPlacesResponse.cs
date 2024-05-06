using System.Text.Json.Serialization;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

public class RecommendPlacesResponse
{
    [JsonPropertyName("places")]
    public List<Place>? Places { get; set; }
}
