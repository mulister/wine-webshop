using Data;
using Data.Objects;
using Data.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Linq;
using System.Threading.Tasks;
using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Http;

namespace Website.Controllers
{
  [ApiController]
  [Produces("application/json")]
  [Route("api/wines")]
  public class WinesController : Controller
  {
    //private readonly WebshopContext _webshopContext;
    //wineservice _wineservice;

    public WinesController(
      //WebshopContext webshopContext,
      )
    {
      //_webshopContext = webshopContext;
      //_wineService = wineService;
    }

    //[HttpGet]
    //public IActionResult Get()
    //{
    //  return Ok(_webshopContext.Wines.ToList());
    //}


    [HttpPost]
    public async Task<IActionResult> Create(Wine wine)
    {
      try
      {
        WebshopContext context = new WebshopContext();
        WineService wineService = new WineService(context);
        await wineService.Create(wine);

        return Ok();
      }
      catch (Exception ex)
      {
        return BadRequest($"Something went wrong adding a wine. {ex.Message} ");
      }
    }

    //private async Task TestImageAzureDownloadFromBlob()
    //{
    //  // Create a BlobServiceClient instance
    //  var blobServiceClient = new BlobServiceClient(new Uri("https://mystorageaccount.blob.core.windows.net"));

    //  // Create the container client
    //  var containerClient = blobServiceClient.GetBlobContainerClient("mycontainer");

    //  // Download the image blob
    //  try
    //  {
    //    var imageBlob = await containerClient.DownloadBlobAsync("myimage.png");
    //    var imageBytes = await imageBlob.ReadAllBytesAsync();

    //    // Save the image bytes to a file
    //    File.WriteAllBytes("image-copy.png", imageBytes);
    //  }
    //  catch (Exception ex)
    //  {
    //    // Handle the exception
    //  }
    //}

    //  public async Task<string> UploadImageToBlobAsync(IFormFile imageFile)
    //  {
    //    // Get Azure Storage Account connection string from configuration
    //    //string connectionString = _configuration.GetConnectionString("AzureStorageConnection");
    //    string connectionString = "Test";
    //    // Get a reference to the blob container
    //    string containerName = "your-container-name"; // Replace with your Azure Storage container name
    //    BlobContainerClient containerClient = new BlobContainerClient(connectionString, containerName);

    //    // Create the container if it doesn't exist
    //    await containerClient.CreateIfNotExistsAsync();

    //    // Generate a unique name for the blob
    //    string blobName = Guid.NewGuid().ToString() + Path.GetExtension(imageFile.FileName);

    //    // Get a reference to the blob
    //    BlobClient blobClient = containerClient.GetBlobClient(blobName);

    //    // Upload the image to the blob
    //    using (var stream = imageFile.OpenReadStream())
    //    {
    //      await blobClient.UploadAsync(stream, true);
    //    }

    //    // Return the URL of the uploaded image
    //    return blobClient.Uri.ToString();
    //  }

    //}
  }
}
