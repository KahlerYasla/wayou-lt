using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;

public class DeleteDeckRequest
{
    [JsonPropertyName("deckId")]
    public required int DeckId { get; set; }
}
