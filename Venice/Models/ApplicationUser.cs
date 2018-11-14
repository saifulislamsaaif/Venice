using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class ApplicationUser
    {
        public ApplicationUser()
        {
            History = new HashSet<History>();
            Order = new HashSet<Order>();
            PageContent = new HashSet<PageContent>();
        }

        public long Id { get; set; }
        public string UserId { get; set; }
        public byte[] FirstName { get; set; }
        public byte[] LastName { get; set; }
        public string Gender { get; set; }
        public byte[] Email { get; set; }
        public long? AddressId { get; set; }
        public byte[] Phone { get; set; }
        public bool IsConfirmed { get; set; }
        public bool IsActive { get; set; }
        public bool IsAdmin { get; set; }

        public Address Address { get; set; }
        public ICollection<History> History { get; set; }
        public ICollection<Order> Order { get; set; }
        public ICollection<PageContent> PageContent { get; set; }
    }
}
