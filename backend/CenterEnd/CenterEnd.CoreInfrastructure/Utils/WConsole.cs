using System;

namespace CenterEnd.CoreInfrastructure.Utils;

public static class WConsole
{
    public static void PrintNormal(string message)
    {
        Console.ForegroundColor = ConsoleColor.White;
        Console.WriteLine($"\n{message}\n");
        Console.ResetColor();
    }

    public static void PrintFunction(string functionName)
    {
        Console.ForegroundColor = ConsoleColor.Yellow;
        Console.WriteLine($"\n{functionName}()\n");
        Console.ResetColor();
    }

    public static void PrintResponse(string response)
    {
        Console.ForegroundColor = ConsoleColor.Green;
        Console.WriteLine($"\n{response}\n");
        Console.ResetColor();
    }

    public static void PrintRequest(string request)
    {
        Console.ForegroundColor = ConsoleColor.Cyan;
        Console.WriteLine($"\n{request}\n");
        Console.ResetColor();
    }

    public static void PrintImportant(string message)
    {
        Console.ForegroundColor = ConsoleColor.Red;
        Console.WriteLine($"\n{message}\n");
        Console.ResetColor();
    }
}