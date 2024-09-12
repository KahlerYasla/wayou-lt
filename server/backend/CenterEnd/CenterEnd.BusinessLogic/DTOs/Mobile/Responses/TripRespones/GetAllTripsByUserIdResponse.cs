using System.Text.Json.Serialization;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

public class GetAllTripsByUserIdResponse
{
    [JsonPropertyName("tripList")]
    public List<Trip>? Trips { get; set; }
}