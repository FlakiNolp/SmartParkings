using Microsoft.AspNetCore.Mvc;

namespace parkingapp.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
