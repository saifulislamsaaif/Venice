using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class Area
    {
        public Area()
        {
            Address = new HashSet<Address>();
        }

        public long Id { get; set; }
        public string AreaName { get; set; }

        public ICollection<Address> Address { get; set; }
    }
}
