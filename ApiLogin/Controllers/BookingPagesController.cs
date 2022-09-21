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
    public class BookingPagesController : ApiController
    {
        private CarRental2Entities1 db = new CarRental2Entities1();
        [Route("BookingRead")]
        // GET: api/BookingPages
        public IQueryable<BookingPage> GetBookingPages()
        {
            return db.BookingPages;
        }
        [Route("BookingReadById/{id}")]
        // GET: api/BookingPages/5
        [ResponseType(typeof(BookingPage))]
        public IHttpActionResult GetBookingPage(int id)
        {
            BookingPage bookingPage = db.BookingPages.Find(id);
            if (bookingPage == null)
            {
                return NotFound();
            }

            return Ok(bookingPage);
        }

        // PUT: api/BookingPages/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutBookingPage(int id, BookingPage bookingPage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != bookingPage.Id)
            {
                return BadRequest();
            }

            db.Entry(bookingPage).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BookingPageExists(id))
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
        [Route("BookingCreate")]
        // POST: api/BookingPages
        [ResponseType(typeof(BookingPage))]
        public IHttpActionResult PostBookingPage(BookingPage bookingPage)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.BookingPages.Add(bookingPage);
            db.SaveChanges();

            return Ok(bookingPage.Id);
        }
        [Route("BookingDelete/{Id}")]
        // DELETE: api/BookingPages/5
        [ResponseType(typeof(BookingPage))]
        public IHttpActionResult DeleteBookingPage(int id)
        {
            BookingPage bookingPage = db.BookingPages.Find(id);
            if (bookingPage == null)
            {
                return NotFound();
            }

            db.BookingPages.Remove(bookingPage);
            db.SaveChanges();

            return Ok(bookingPage);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool BookingPageExists(int id)
        {
            return db.BookingPages.Count(e => e.Id == id) > 0;
        }
    }
}