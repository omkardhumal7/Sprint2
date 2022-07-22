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

    public class FinalOrderController : ControllerBase
    {
        EshoppingDBContext db;
        public FinalOrderController(EshoppingDBContext _db)
        {
            db = _db;
        }
        [HttpGet]
        public IEnumerable<FinalOrder> GetFinalOrder()
        {
            return db.FinalOrders;
        }
        [HttpPost]
        public string post([FromBody] FinalOrder ct)
        {
            db.FinalOrders.Add(ct);
            db.SaveChanges();
            return "Success";
        }
    }
}