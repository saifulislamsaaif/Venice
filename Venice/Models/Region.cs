using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class Region
    {
        public Region()
        {
            Address = new HashSet<Address>();
        }

        public long Id { get; set; }
        public string RegionName { get; set; }

        public ICollection<Address> Address { get; set; }
    }
}
