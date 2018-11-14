using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class AddToCart
    {
        public AddToCart()
        {
            AddToCartProduct = new HashSet<AddToCartProduct>();
        }

        public long Id { get; set; }
        public long UserId { get; set; }

        public ICollection<AddToCartProduct> AddToCartProduct { get; set; }
    }
}
