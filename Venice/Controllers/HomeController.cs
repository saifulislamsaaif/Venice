using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Venice.Models;

namespace Venice.Controllers
{
    public class HomeController :Controller
    {
        private readonly VeniceDbContext _context;

        public HomeController(VeniceDbContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            var sss = _context.Areas.ToList();
            return View();
        }

        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
