namespace API.BusinessLogic;

public class MissionNotFoundException : Exception
{
    public MissionNotFoundException(string missionSlug) : base($"Could not find mission with slug {missionSlug}")
    {
    }
}