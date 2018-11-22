using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Venice.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Venice.Controllers
{
    public class ProductDetailController : Controller
    {
        [Route("uploader/upload")]
        public dynamic Upload(IFormCollection form)
        {
            try
            {
                Product product = MapFormCollectionToProduct(form);
                foreach (var file in form.Files)
                {
                    UploadFile(file);
                }
                return new { Success = true };
            }
            catch (Exception ex)
            {
                return new { Success = false, ex.Message };
            }
        }

        private static void UploadFile(IFormFile file)
        {
            if (file == null || file.Length == 0)
                throw new Exception("File is empty!");
            byte[] fileArray;
            using (var stream = file.OpenReadStream())
            using (var memoryStream = new MemoryStream())
            {
                stream.CopyTo(memoryStream);
                fileArray = memoryStream.ToArray();
            }
            //TODO: You can do it what you want with you file, I just skip this step
        }

        private static Product MapFormCollectionToProduct(IFormCollection form)
        {
            var product = new Product();
            string productDetail = "productDetail";
            string aditionalInformation = "aditionalInformation";
            string price = "price";
            if (form.Any())
            {
                if (form.Keys.Contains(productDetail))
                    product.ProductDetail = form[productDetail];
                if (form.Keys.Contains(aditionalInformation))
                    product.AditionalInformation = form[aditionalInformation];
                if (form.Keys.Contains(price))
                    product.Price = Convert.ToDecimal(form[price]);
            }
            return product;
        }
    }
}
