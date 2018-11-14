using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class AddToCartProduct
    {
        public long Id { get; set; }
        public long AddToCartId { get; set; }
        public long ProductId { get; set; }
        public int Quantity { get; set; }

        public AddToCart AddToCart { get; set; }
        public Product Product { get; set; }
    }
}
