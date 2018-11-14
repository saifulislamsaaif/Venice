using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class Order
    {
        public Order()
        {
            OrderDetails = new HashSet<OrderDetails>();
        }

        public long Id { get; set; }
        public long UserId { get; set; }
        public string InvoiceNumber { get; set; }
        public DateTime OrderDate { get; set; }
        public long? ShippingAddressId { get; set; }

        public Address ShippingAddress { get; set; }
        public ApplicationUser User { get; set; }
        public ICollection<OrderDetails> OrderDetails { get; set; }
    }
}
