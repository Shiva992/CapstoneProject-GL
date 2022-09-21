using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC.Models
{
    public partial class UserDetail
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string EmailId { get; set; }
        public Nullable<long> ContactNo { get; set; }
        public Nullable<bool> Gender { get; set; }
        public string City { get; set; }

        public string Password { get; set; }
        public string Roles { get; set; }
    }
}