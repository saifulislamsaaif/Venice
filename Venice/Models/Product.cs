using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class Product
    {
        public Product()
        {
            AddToCartProduct = new HashSet<AddToCartProduct>();
            History = new HashSet<History>();
            OrderDetails = new HashSet<OrderDetails>();
            PageContent = new HashSet<PageContent>();
            ProductImage = new HashSet<ProductImage>();
            Review = new HashSet<Review>();
            WishList = new HashSet<WishList>();
        }

        public long Id { get; set; }
        public string ProductName { get; set; }
        public long CategoryId { get; set; }
        public decimal Price { get; set; }
        public decimal PreviousPrice { get; set; }
        public decimal DiscountPrice { get; set; }
        public string ProductDetail { get; set; }
        public string AditionalInformation { get; set; }
        public int StockQuantiry { get; set; }
        public long UnitId { get; set; }
        public int MinStockQuantity { get; set; }
        public string ExternalLink { get; set; }
        public int? ExternalLinkHeight { get; set; }
        public int? ExternalLinkWeight { get; set; }

        public Unit Unit { get; set; }
        public ICollection<AddToCartProduct> AddToCartProduct { get; set; }
        public ICollection<History> History { get; set; }
        public ICollection<OrderDetails> OrderDetails { get; set; }
        public ICollection<PageContent> PageContent { get; set; }
        public ICollection<ProductImage> ProductImage { get; set; }
        public ICollection<Review> Review { get; set; }
        public ICollection<WishList> WishList { get; set; }
    }
}
