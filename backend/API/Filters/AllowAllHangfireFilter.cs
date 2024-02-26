using Hangfire.Dashboard;

namespace API.Filters;

public class AllowAllHangfireFilter : IDashboardAuthorizationFilter
{
    public bool Authorize(DashboardContext context)
    {
        return true;
    }
}