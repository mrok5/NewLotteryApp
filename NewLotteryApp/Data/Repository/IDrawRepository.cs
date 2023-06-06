using NewLotteryApp.Data.Entities;

namespace NewLotteryApp.Data
{
    public interface IDrawRepository
    {
        DrawHistory Get(int id);
        IEnumerable<DrawHistory> GetDrawHistory();
        bool SaveDraw(DrawHistory draw);
        int[] DrawMethod();
    }
}
