using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ApiLogin.Models;

namespace ApiLogin.Controllers
{
    public class UserDetailsController : ApiController
    {
        private CarRental2Entities1 db = new CarRental2Entities1 ();

        [HttpGet]
        [Route("ShowAllUser")]
        // GET: api/UserDetails
        public IQueryable<UserDetail> GetUserDetails()
        {
            return db.UserDetails;
        }
        [Route("ShowUserById/{id}")]
        // GET: api/UserDetails/5
        [ResponseType(typeof(UserDetail))]
        public IHttpActionResult GetUserDetail(int id)
        {
            UserDetail userDetail = db.UserDetails.Find(id);
            if (userDetail == null)
            {
                return NotFound();
            }

            return Ok(userDetail);
        }
        [Route("EditUserById/{id}")]
        // PUT: api/UserDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutUserDetail(int id, UserDetail userDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != userDetail.Id)
            {
                return BadRequest();
            }

            db.Entry(userDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserDetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }
        [HttpPost]
        [Route("Register")]
        // POST: api/UserDetails
        [ResponseType(typeof(UserDetail))]
        public IHttpActionResult PostUserDetail(UserDetail userDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.UserDetails.Add(userDetail);
            db.SaveChanges();
            return Ok(userDetail.Id);
            //  return CreatedAtRoute("DefaultApi", new { id = userDetail.Id }, userDetail);
        }
        [HttpDelete]
        [Route("DeleteUser/{id}")]
        
        // DELETE: api/UserDetails/5
        [ResponseType(typeof(UserDetail))]
        public IHttpActionResult DeleteUserDetail(int id)
        {
            UserDetail userDetail = db.UserDetails.Find(id);
            if (userDetail == null)
            {
                return NotFound();
            }

            db.UserDetails.Remove(userDetail);
            db.SaveChanges();

            return Ok(userDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool UserDetailExists(int id)
        {
            return db.UserDetails.Count(e => e.Id == id) > 0;
        }
    }
}