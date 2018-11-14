using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class City
    {
        public City()
        {
            Address = new HashSet<Address>();
        }

        public long Id { get; set; }
        public string CityName { get; set; }

        public ICollection<Address> Address { get; set; }
    }
}
