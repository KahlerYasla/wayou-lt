using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs;

public class BaseResponse<T>(bool success, string message, T? data)
{
    [JsonPropertyName("data")]
    public T? Data { get; } = success ? data : default;
    [JsonPropertyName("success")]
    public bool Success { get; } = success;
    [JsonPropertyName("message")]
    public string Message { get; } = message;
}
