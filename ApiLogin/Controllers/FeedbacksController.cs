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
    public class FeedbacksController : ApiController //Database se interaction | Operations |
    {
        private CarRental2Entities1 db = new CarRental2Entities1();//db connect - new data ayega | 

        // GET: api/Feedbacks
        public IQueryable<Feedback> GetFeedbacks()//datatype - Query ko run krne ke liye 
        {
            return db.Feedbacks;//All data display with the help of this //no != id is passing here
        }
      // GET: api/Feedbacks/5
        [ResponseType(typeof(Feedback))]//ek id denge -> uska data response me dega //http response miljaega
        public IHttpActionResult GetFeedback(int id)//particular id ka data milega else return not found agar vo exist ni krti he
        {
            Feedback feedback = db.Feedbacks.Find(id);
            if (feedback == null)
            {
                return NotFound();
            }

            return Ok(feedback);//ok= status , TRUE
        }

        // PUT: api/Feedbacks/5
        [ResponseType(typeof(void))] //Insert ke liye put use krt ehn
        public IHttpActionResult PutFeedback(int id, Feedback feedback)//http- response
        {
            if (!ModelState.IsValid)//user input deraha he or agar vo valid he tbhi ye db me save krega else return badrequest
            {
                return BadRequest(ModelState);//404 errors 
            }

            if (id != feedback.Id)//exist krti h phle se
            {
                return BadRequest();
            }

            db.Entry(feedback).State = EntityState.Modified;//entry krdega database me if upar ki conditions false honge

            try
            {
                db.SaveChanges();//db me save krega
            }
            catch (DbUpdateConcurrencyException) // handling if there is any error
            {
                if (!FeedbackExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);//404 errors - status codes | success status code is = 200
        }
        [HttpPost]
        [Route("FeedbackCreate")]//api ke piche dalte hen route
        // POST: api/Feedbacks
        [ResponseType(typeof(Feedback))]
        public IHttpActionResult PostFeedback(Feedback feedback)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Feedbacks.Add(feedback);
            db.SaveChanges();

            return Ok(feedback.Id); ;
        }

        // DELETE: api/Feedbacks/5
        [ResponseType(typeof(Feedback))]
        public IHttpActionResult DeleteFeedback(int id)
        {
            Feedback feedback = db.Feedbacks.Find(id);
            if (feedback == null)
            {
                return NotFound();
            }

            db.Feedbacks.Remove(feedback);
            db.SaveChanges();

            return Ok(feedback);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FeedbackExists(int id)
        {
            return db.Feedbacks.Count(e => e.Id == id) > 0;
        }
    }
}