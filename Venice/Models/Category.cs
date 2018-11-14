using System;
using System.Collections.Generic;

namespace Venice.Models
{
    public partial class Category
    {
        public Category()
        {
            InverseParentCategory = new HashSet<Category>();
        }

        public long Id { get; set; }
        public string CategoryName { get; set; }
        public string CategoryDisplayName { get; set; }
        public long? ParentCategoryId { get; set; }

        public Category ParentCategory { get; set; }
        public ICollection<Category> InverseParentCategory { get; set; }
    }
}
