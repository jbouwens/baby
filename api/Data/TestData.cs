public static class TestData
{
    public static List<BabyDto> GetTestBabies()
    {
        var babies = new List<BabyDto>()
        {
            new BabyDto(2),
            new BabyDto(3)
        };
        return babies;
    }
}