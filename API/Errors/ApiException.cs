using System;

namespace API.Errors;

public class ApiException(int statucCode, string message, string? details)
{
    public int StatucCode { get; set; } = statucCode;
    public string Message { get; set; } = message;
    public string? Details { get; set; } = details;
}
