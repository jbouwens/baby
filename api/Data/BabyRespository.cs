public interface IBabyRepository{
    Task<List<BabyDto>> GetAll();
}

public class BabyRepository : IBabyRepository
{
    public async Task<List<BabyDto>> GetAll(){
        return TestData.GetTestBabies();
    }
}