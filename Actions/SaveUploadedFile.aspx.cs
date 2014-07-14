using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

public partial class SaveUploadedFile : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        String strImageName;
        HttpFileCollection files = HttpContext.Current.Request.Files;
        String Path = System.Web.HttpContext.Current.Request.MapPath(".") + "/UploadedImages/";
        if (!Directory.Exists(Path))
        {
            Directory.CreateDirectory(Path);
        }
        for (int i = 0; i < files.Count; i++)
        {
            strImageName = files[i].FileName;
            files[i].SaveAs(Path + strImageName);
        }
        Byte[] fileData = null;
        using (var binaryReader = new BinaryReader(HttpContext.Current.Request.Files[0].InputStream))
        {
            fileData = binaryReader.ReadBytes(HttpContext.Current.Request.Files[0].ContentLength);
        }

        string fileDataStr = Convert.ToBase64String(fileData);
    }
}