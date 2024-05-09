using System.Text.Json;

namespace CenterEnd.CoreInfrastructure.Utils;

/// <summary>
/// A static Tool class WEnvJson that has a function:
/// <para>string? GetEnvJson(string key) that returns the value of the key from the env.json file or null if the key is not found.</para>
/// </summary>
public static class WEnvJson
{
    public static string? GetEnvJson(string key, string path = "../CenterEnd.CoreInfrastructure/config.json", string section = "TokenOptions")
    {
        string configFile = File.ReadAllText(path);
        JsonDocument jsonDocument = JsonDocument.Parse(configFile);
        JsonElement root = jsonDocument.RootElement;
        JsonElement sectionElement = root.GetProperty(section);
        JsonElement value = sectionElement.GetProperty(key);
        return value.GetString() ?? null;
    }
}
