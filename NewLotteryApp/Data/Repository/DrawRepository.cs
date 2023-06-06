using NewLotteryApp.Data.Entities;

namespace NewLotteryApp.Data
{
    public class DrawRepository : IDrawRepository
    {
        private readonly LotteryDbContext _ctx;
        private const int Min = 1;
        private const int Max = 50;
        private const int DrawNumber = 5;
        public DrawRepository(LotteryDbContext ctx)
        {
            _ctx = ctx;
        }

        public int[] DrawMethod()
        {
            var drawArray = new int[DrawNumber];

            for (var i = 0; i < DrawNumber; i++)
            {
                var draw = new Random().Next(Min, Max);

                while (drawArray.Contains(draw))
                {
                    draw = new Random().Next(Min, Max);
                }

                drawArray[i] = draw;
            }

            return drawArray;
        }

        public DrawHistory Get(int id)
        {
            return _ctx.DrawHistory.Where(x => x.Id == id).FirstOrDefault();
        }

        public IEnumerable<DrawHistory> GetDrawHistory()
        {
            return _ctx.DrawHistory.OrderBy(x => x.DrawDateTime).ToList();
        }

        public bool SaveDraw(DrawHistory draw)
        {
            try
            {
                _ctx.DrawHistory.Add(draw);
                return _ctx.SaveChanges() > 0;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
