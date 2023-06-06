namespace NewLotteryApp.Data
{
    public class DrawSeeder
    {
        private readonly LotteryDbContext _ctx;

        public DrawSeeder(LotteryDbContext ctx)
        {
            _ctx = ctx;
        }

        public void Seed()
        {
            try
            {
                _ctx.Database.EnsureCreated();
            }
            catch (Exception ex)
            {
                throw ex;
            }

            if (!_ctx.DrawHistory.Any())
            {

            }

        }
    }
}
