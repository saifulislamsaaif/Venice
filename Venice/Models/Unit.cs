using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class Unit
    {
        public Unit()
        {
            Product = new HashSet<Product>();
        }

        public long Id { get; set; }
        public string UnitName { get; set; }
        public int QuantiryPerUnit { get; set; }

        public ICollection<Product> Product { get; set; }
    }
}
