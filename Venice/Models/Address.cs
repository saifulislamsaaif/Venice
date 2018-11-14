using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class Address
    {
        public Address()
        {
            ApplicationUser = new HashSet<ApplicationUser>();
            Order = new HashSet<Order>();
        }

        public long Id { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public long RegionId { get; set; }
        public long CityId { get; set; }
        public long AreaId { get; set; }
        public string Address1 { get; set; }

        public Area Area { get; set; }
        public City City { get; set; }
        public Region Region { get; set; }
        public ICollection<ApplicationUser> ApplicationUser { get; set; }
        public ICollection<Order> Order { get; set; }
    }
}
