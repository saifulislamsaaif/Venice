using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Extensions.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Venice.Models;
using Venice.Utility;

namespace Venice.Controllers
{
    [Route("api/[controller]")]
    public class APIController:Controller
    {
        private  readonly VeniceDbContext _context;

        public APIController(VeniceDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task Add(Area item)
        {
            await _context.Areas.AddAsync(item);
            await _context.SaveChangesAsync();
        }

        [HttpGet("{id}", Name = "GetAreaById")]
        public async Task<Area> GetAreaById(int id)
        {
            return await _context.Areas.Where(it=>it.Id == id).FirstOrDefaultAsync();
        }

        [HttpGet]
        public async Task<IList<Area>> GetAllAreas(int id)
        {
            return await _context.Areas.ToListAsync();
        }

        [HttpGet]
        public IList<Area> GetPagedAreas(int currentPageNumber , int pageSize)
        {
            return _context.Areas.GetPaged(1,5).Results;
        }

    }
}
