namespace BlazorPilot.Application.Extensions
{
    public static class HandlerExtensioncs
    {
        public static async Task<List<T>> ToList<T>(
            this IAsyncEnumerable<T> source, CancellationToken cancellationToken = default)
        {
            var result = new List<T>();
            await foreach (var item in source.WithCancellation(cancellationToken).ConfigureAwait(false))
                result.Add(item);

            return result;
        }

        public static string FullNameWithNamespace<T>(
           this T source) where T : class
        {
            Type sourceType = typeof(T);

            return sourceType.FullName;
        }
    }
}
