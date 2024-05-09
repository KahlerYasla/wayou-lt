using System.Text.Json;

namespace CenterEnd.CoreInfrastructure.Utils;

/// <summary>
/// A static Tool class WEnvJson that has a function:
/// <para>string? GetEnvJson(string key) that returns the value of the key from the env.json file or null if the key is not found.</para>
/// </summary>
public static class WEnvJson
{
    public static string? GetEnvJson(string key, string path = "../config.json")
    {
        string configFile = File.ReadAllText(path);
        JsonDocument jsonDocument = JsonDocument.Parse(configFile);
        JsonElement root = jsonDocument.RootElement;
        JsonElement value = root.GetProperty(key);
        return value.GetString() ?? null;
    }
}
