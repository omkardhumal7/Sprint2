using System;
using System.Collections.Generic;

#nullable disable

namespace EshoppingAPI.Models
{
    public partial class FinalOrder
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public int? Zip { get; set; }
        public string Email { get; set; }
        public string OrderName { get; set; }
        public decimal? OrderQuantity { get; set; }
        public decimal? OrderPrice { get; set; }
        public string UserName { get; set; }
    }
}
