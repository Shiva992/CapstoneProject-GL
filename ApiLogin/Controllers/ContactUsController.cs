using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using ApiLogin.Models;

namespace ApiLogin.Controllers
{
    public class ContactUsController : ApiController
    {
        private CarRental2Entities1 db = new CarRental2Entities1 ();
        [HttpGet]
        [Route("ContactRead")]
        // GET: api/ContactUs
        public IQueryable<ContactU> GetContactUs()
        {
            return db.ContactUs;
        }
        [HttpGet]
        [Route("ContactReadById/{id}")]
        // GET: api/ContactUs/5
        [ResponseType(typeof(ContactU))]
        public IHttpActionResult GetContactU(int id)
        {
            ContactU contactU = db.ContactUs.Find(id);
            if (contactU == null)
            {
                return NotFound();
            }

            return Ok(contactU);
        }
       
        // PUT: api/ContactUs/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutContactU(int id, ContactU contactU)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != contactU.Id)
            {
                return BadRequest();
            }

            db.Entry(contactU).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ContactUExists(id))
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
        [Route("ContactCreate")]
        // POST: api/ContactUs
        [ResponseType(typeof(ContactU))]
        public IHttpActionResult PostContactU(ContactU contactU)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ContactUs.Add(contactU);
            db.SaveChanges();

            return Ok(contactU.Id);
        }
        [HttpDelete]
        [Route("ContactDelete/{id}")]
        // DELETE: api/ContactUs/5
        [ResponseType(typeof(ContactU))]
        public IHttpActionResult DeleteContactU(int id)
        {
            ContactU contactU = db.ContactUs.Find(id);
            if (contactU == null)
            {
                return NotFound();
            }

            db.ContactUs.Remove(contactU);
            db.SaveChanges();

            return Ok(contactU);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ContactUExists(int id)
        {
            return db.ContactUs.Count(e => e.Id == id) > 0;
        }
    }
}