using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class Review
    {
        public long Id { get; set; }
        public long UserId { get; set; }
        public long ProductId { get; set; }
        public DateTime Date { get; set; }
        public int Point { get; set; }
        public byte[] Description { get; set; }
        public bool IsApproved { get; set; }

        public Product Product { get; set; }
    }
}
