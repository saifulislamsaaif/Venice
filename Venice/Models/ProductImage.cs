using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class ProductImage
    {
        public long Id { get; set; }
        public long ProductId { get; set; }
        public bool IsPrimaryImage { get; set; }
        public byte[] Data { get; set; }

        public Product Product { get; set; }
    }
}
