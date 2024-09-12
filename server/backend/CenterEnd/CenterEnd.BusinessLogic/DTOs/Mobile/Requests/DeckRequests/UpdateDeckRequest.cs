using System.Text.Json.Serialization;

namespace CenterEnd.BusinessLogic.DTOs.Mobile.Requests
{
    public class UpdateDeckRequest
    {
        [JsonPropertyName("dekcId")]
        public required int Id { get; set; }
        [JsonPropertyName("name")]
        public string? Name { get; set; }
        [JsonPropertyName("placesByIds")]
        public List<int>? PlacesByIds { get; set; }
        [JsonPropertyName("whatToDoWithPlaces")]
        public string? WhatToDoWithPlaces { get; set; }
    }
}