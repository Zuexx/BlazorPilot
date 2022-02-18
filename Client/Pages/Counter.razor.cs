using Microsoft.AspNetCore.Components;

namespace BlazorPiolt.Client.Pages
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
