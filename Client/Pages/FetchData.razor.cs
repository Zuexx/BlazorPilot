using Microsoft.AspNetCore.Components;
using BlazorPilot.Shared;
using System.Net.Http.Json;

namespace BlazorPilot.Client.Pages
{
    public partial class FetchData:ComponentBase
    {
        [Inject] private HttpClient Http { get; set; }

        private WeatherForecast[]? forecasts;

        protected override async Task OnInitializedAsync()
        {
            forecasts = await Http.GetFromJsonAsync<WeatherForecast[]>("WeatherForecast");
        }
    }
}
