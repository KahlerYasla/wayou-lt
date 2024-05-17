
using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs;

public class Configuration
{
    [JsonPropertyName("categories")]
    public List<string>? Categories { get; set; }
    [JsonPropertyName("originYX")]
    public string? OriginYX { get; set; }
    [JsonPropertyName("radius")]
    public float Radius { get; set; }
    [JsonPropertyName("keywords")]
    public List<string>? Keywords { get; set; }
    [JsonPropertyName("priceRange")]
    public string? PriceRange { get; set; }
}