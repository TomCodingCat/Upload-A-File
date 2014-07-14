using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

public partial class Uploads : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.IsAuthenticated)
        {
            try
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
            }
            catch
            {
            }
        }
        else
        {
            Response.Redirect("../SupportingFiles/LogInFirst.html");
        }
    }
}