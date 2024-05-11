using System.Text.Json.Serialization;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

public class GetDeckByIdResponse
{
    [JsonPropertyName("requestedDeck")]
    public Deck? RequestedDeck { get; set; }
}