using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics;

namespace Task.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        // POST api/values
        [HttpPost]
        public IActionResult Post(Values vals)
        {
            int modSize = (vals.Columns * vals.Rows < 10) ? 10 : 20;    
            return Ok(modSize);
        }
    }
    public class Values
    {
        public int Rows { get; set; }
        public int Columns { get; set; }
    }
}
