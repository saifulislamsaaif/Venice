using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class History
    {
        public long Id { get; set; }
        public long ProductId { get; set; }
        public long UserId { get; set; }
        public DateTime Date { get; set; }

        public Product Product { get; set; }
        public ApplicationUser User { get; set; }
    }
}
