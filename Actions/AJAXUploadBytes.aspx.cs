using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

public partial class AJAXUploadBytes : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        try
        {
            string imageName = HttpContext.Current.Request.Form["ImageName"];
            string imageData = HttpContext.Current.Request.Form["RemoteFile"];
            String Path = System.Web.HttpContext.Current.Request.MapPath(".") + "/UploadedImages/";
            if (!Directory.Exists(Path))
            {
                Directory.CreateDirectory(Path);
            }
            string outputFileName = Path + imageName;
            try
            {
                string[] bytestr;
                bytestr = imageData.Split(',');
                byte[] binaryData = new byte[bytestr.Length];
                for (int i = 0; i < bytestr.Length; i++)
                    binaryData[i] = Convert.ToByte(bytestr[i]);
                FileStream outFile;
                outFile = new System.IO.FileStream(outputFileName,
                                           System.IO.FileMode.Create,
                                           System.IO.FileAccess.Write);
                outFile.Write(binaryData, 0, binaryData.Length);
                outFile.Close();
            }
            catch (Exception ex) { }
        }
        catch (Exception exe) { }
    }
}