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
    public class AreaAPIController:Controller
    {
        private  readonly VeniceDbContext _context;

        public AreaAPIController(VeniceDbContext context)
        {
            _context = context;
        }

        [HttpPost("[action]")]
        public async Task<string> Add([FromBody] Area item)
        {
            await _context.Areas.AddAsync(item);
            await _context.SaveChangesAsync();
            return "OK";
        }

        [HttpPost("[action]")]
        public async Task<bool> Delete([FromBody] Area item)
        {
             _context.Areas.Remove(item);
            await _context.SaveChangesAsync();
            return true;
        }

        [HttpGet("{id}", Name = "GetAreaById")]
        public async Task<Area> GetAreaById(int id)
        {
            return await _context.Areas.Where(it=>it.Id == id).FirstOrDefaultAsync();
        }

        [HttpGet("[action]")]
        public async Task<IList<Area>> GetAllAreas()
        {
            return await _context.Areas.ToListAsync();
        }

        [HttpGet("[action]")]
        public IList<Area> GetPagedAreas(int currentPageNumber , int pageSize)
        {
            return _context.Areas.GetPaged(currentPageNumber, pageSize).Results;
        }

    }
}
