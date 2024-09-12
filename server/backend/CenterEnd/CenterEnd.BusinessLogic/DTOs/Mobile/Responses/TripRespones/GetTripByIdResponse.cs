using System.Text.Json.Serialization;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

public class GetTripByIdResponse
{
    [JsonPropertyName("trip")]
    public Trip? Trip { get; set; }
}