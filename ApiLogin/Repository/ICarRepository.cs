using ApiLogin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ApiLogin.Repository
{
    public interface ICarRepository
    {
        IQueryable<CarsDetail> GetCarsDetails();
        CarsDetail GetCarsDetails(int id);
    }
}
