
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

    public class CategoryController : ControllerBase
    {
        EshoppingDBContext db;
        public CategoryController(EshoppingDBContext _db)
        {
            db = _db;
        }
        [HttpGet]
        public IEnumerable<Category> GetCategory()
        {
            return db.Categories;
        }
        [HttpPost]
        public string post([FromBody] Category ct)
        {
            db.Categories.Add(ct);
            db.SaveChanges();
            return "Success";
        }
    }
}