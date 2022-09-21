using ApiLogin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiLogin.Repository
{
    public class CarRepository : ICarRepository
    {
        CarRental2Entities1 db = new CarRental2Entities1();

        public IQueryable<CarsDetail> GetCarsDetails()
        {
            return db.CarsDetails;
        }

        public CarsDetail GetCarsDetails(int id)
        {
            return db.CarsDetails.Find(id);
        }
    }
}