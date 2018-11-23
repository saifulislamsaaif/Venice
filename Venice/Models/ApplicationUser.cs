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
        public string Password { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Gender { get; set; }
        public string Email { get; set; }
        public long? AddressId { get; set; }
        public string Phone { get; set; }
        public bool IsConfirmed { get; set; }
        public bool IsActive { get; set; }
        public bool IsAdmin { get; set; }

        public Address Address { get; set; }
        public ICollection<History> History { get; set; }
        public ICollection<Order> Order { get; set; }
        public ICollection<PageContent> PageContent { get; set; }
    }
}
