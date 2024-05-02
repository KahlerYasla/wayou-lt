using System.Text.Json.Serialization;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.GatewayApi.DTOs.Requests;

public class RecommendPlacesResponse
{
    [JsonPropertyName("places")]
    public List<Place>? Places { get; set; }
}
