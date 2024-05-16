
using System.Text.Json.Serialization;
using ProtoBuf;

namespace CenterEnd.BusinessLogic.DTOs;

[ProtoContract]
public class Configuration
{
    [JsonPropertyName("categories")]
    [ProtoMember(1)]
    public List<string>? Categories { get; set; }
    [JsonPropertyName("originYX")]
    [ProtoMember(2)]
    public string? OriginYX { get; set; }
    [JsonPropertyName("radius")]
    [ProtoMember(3)]
    public float Radius { get; set; }
    [JsonPropertyName("keywords")]
    [ProtoMember(4)]
    public List<string>? Keywords { get; set; }
    [JsonPropertyName("price_range")]
    [ProtoMember(5)]
    public string? PriceRange { get; set; }
}