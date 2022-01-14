using System.Net;

namespace BlazorPilot.Application.Errors
{
    internal class RestException : Exception
    {
        internal HttpStatusCode Code { get; }

        internal object? Errors { get; } = null;


        public RestException(HttpStatusCode code)
        {
            Code = code;            
        }

        public RestException(HttpStatusCode code, object? errors = null)
        {
            Code = code;
            Errors = errors;
        }
    }
}
