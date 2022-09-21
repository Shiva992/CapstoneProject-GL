using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MVC.Models
{
    public  partial class CarsDetail
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Brand { get; set; }
        public string Description { get; set; }
        public Nullable<int> PricePerDay { get; set; }
        public string FuelType { get; set; }
        public Nullable<int> ModelYear { get; set; }

    }
}