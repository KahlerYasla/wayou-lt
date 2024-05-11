using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
public class GetDeckByIdRequest
{
    [JsonPropertyName("deckId")]
    public int DeckId { get; set; }
}
