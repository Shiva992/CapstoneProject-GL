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
using ApiLogin.Repository;

namespace ApiLogin.Controllers
{
    public class CarsDetailsController : ApiController
    {
        private ICarRepository _carRepo;
        public CarsDetailsController(ICarRepository carRepository)
        {
            _carRepo = carRepository;   
        }
        private CarRental2Entities1 db = new CarRental2Entities1();
        [Route("ShowCars")]
        // GET: api/CarsDetails
        public IQueryable<CarsDetail> GetCarsDetails()
        {
            return _carRepo.GetCarsDetails();
        }
        [HttpGet]
        [Route("ShowCar/{id}")]
        // GET: api/CarsDetails/5
        [ResponseType(typeof(CarsDetail))]
        public IHttpActionResult GetCarsDetail(int id)
        {
            CarsDetail carsDetail = _carRepo.GetCarsDetails(id);
                /*db.CarsDetails.Find(id);*/
            if (carsDetail == null)
            {
                return NotFound();
            }

            return Ok(carsDetail);
        }
        [HttpPut]
        [Route("EditCar/{id}")]
        // PUT: api/CarsDetails/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCarsDetail(int id, CarsDetail carsDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != carsDetail.Id)
            {
                return BadRequest();
            }

            db.Entry(carsDetail).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarsDetailExists(id))
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
        [Route("CreateCar")]
        [HttpPost]
        // POST: api/CarsDetails
        [ResponseType(typeof(CarsDetail))]
        public IHttpActionResult PostCarsDetail(CarsDetail carsDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.CarsDetails.Add(carsDetail);
            db.SaveChanges();

            return Ok(carsDetail.Id);

        //return CreatedAtRoute("DefaultApi", new { id = carsDetail.Id }, carsDetail);
        }
        [HttpDelete]
        [Route("DeleteCar/{id}")]
        // DELETE: api/CarsDetails/5
        [ResponseType(typeof(CarsDetail))]
        public IHttpActionResult DeleteCarsDetail(int id)
        {
            CarsDetail carsDetail = db.CarsDetails.Find(id);
            if (carsDetail == null)
            {
                return NotFound();
            }

            db.CarsDetails.Remove(carsDetail);
            db.SaveChanges();

            return Ok(carsDetail);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CarsDetailExists(int id)
        {
            return db.CarsDetails.Count(e => e.Id == id) > 0;
        }
    }
}