using System.Text.Json.Serialization;
using CenterEnd.CoreInfrastructure.CommonDTOs;

namespace CenterEnd.GatewayApi.DTOs.Requests;

public class RecommendPlacesRequest
{
    [JsonPropertyName("user_id")]
    public int UserId { get; set; }
    [JsonPropertyName("configuration")]
    public Configuration? Configuration { get; set; }
}