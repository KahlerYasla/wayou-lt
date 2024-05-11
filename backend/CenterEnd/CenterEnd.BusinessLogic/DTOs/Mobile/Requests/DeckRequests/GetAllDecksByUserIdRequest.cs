using System.Text.Json.Serialization;
using CenterEnd.Database.Entities.Concrete;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests;
public class GetAllDecksByUserIdRequest
{
    [JsonPropertyName("userId")]
    public required int UserId { get; set; }
}