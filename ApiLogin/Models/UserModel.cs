using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ApiLogin.Models
{
    public class UserModel
    {
        CarRental2Entities1 carRentalEntities=new CarRental2Entities1();

        public UserDetail ValidateUser(string email, string password)
        {
            return carRentalEntities.UserDetails.FirstOrDefault(x => x.EmailId == email && x.Password == password);
        }
    }
}