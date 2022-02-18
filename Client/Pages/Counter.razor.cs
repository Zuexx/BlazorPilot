using Microsoft.AspNetCore.Components;

namespace BlazorPilot.Client.Pages
{
    public partial class Counter : ComponentBase
    {
        private int _currentCount = 0;

        private void IncrementCount()
        {
            _currentCount++;
        }
    }
}
