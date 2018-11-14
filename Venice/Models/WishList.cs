using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class WishList
    {
        public long Id { get; set; }
        public long ProductId { get; set; }

        public Product Product { get; set; }
    }
}
