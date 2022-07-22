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
    public class MyOrderController : ControllerBase
    {
        EshoppingDBContext db;
        public MyOrderController(EshoppingDBContext _db)
        {
            db = _db;
        }
        [HttpGet]
        public IEnumerable<FinalOrder> GetMyOrders(string username)
        {
            return db.FinalOrders.Where(x=>x.UserName==username).ToList();
        }
        [HttpPost]
        public String post([FromBody] MyOrder tp)
        {
            db.MyOrders.Add(tp);
            db.SaveChanges();
            return "success";
        }
    }
}