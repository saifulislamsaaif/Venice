using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class PageContent
    {
        public long Id { get; set; }
        public string ContentDetail { get; set; }
        public long? ProductId { get; set; }
        public long? UserId { get; set; }

        public Product Product { get; set; }
        public ApplicationUser User { get; set; }
    }
}
