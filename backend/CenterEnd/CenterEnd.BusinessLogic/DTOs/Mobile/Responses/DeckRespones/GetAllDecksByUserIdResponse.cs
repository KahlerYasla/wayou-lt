using System.Text.Json.Serialization;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Responses;

public class GetAllDecksByUserIdResponse
{
    [JsonPropertyName("deckList")]
    public List<Deck>? DeckList { get; set; }
    [JsonPropertyName("success")]
    public bool? Success { get; set; }
    [JsonPropertyName("message")]
    public string? Message { get; set; }
}
