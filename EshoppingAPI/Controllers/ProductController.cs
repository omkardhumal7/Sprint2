using EshoppingAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EshoppingAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        EshoppingDBContext db;
        public ProductController(EshoppingDBContext _db)
        {
            db = _db;
        }
        [HttpGet]
        public IEnumerable<Product> GetProducts()
        {
            return db.Products;
        }
        [HttpPost]
        public String post([FromBody] Product tp)

        {
            //if (tp.IsActive == 1)
            //{
            //    db.SaveChanges();
            //}
            //else
            //    return "Product Not Found";

            db.Products.Add(tp);
            db.SaveChanges();
            return "Success";
        }
        [HttpPut]
        public string Put([FromBody] Product tblsample)
        {
            var tblsampleObj = db.Products.Where(x => x.Id == tblsample.Id);
            if (tblsampleObj != null)
            {
                db.Products.Update(tblsample);
                db.SaveChanges();
                return "Success";
            }

            return "Fail";
        }
    }
}