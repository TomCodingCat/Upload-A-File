using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

public partial class Download : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.IsAuthenticated)
        {
            try
            {
                byte[] byFileData = File.ReadAllBytes(HttpContext.Current.Request.MapPath(".") + "/../ImagesToLoad/Desert.jpg");
                Response.Clear();
                Response.Buffer = true;
                Response.ContentType = "image/jpg";
                String fileNameEncode;
                fileNameEncode = HttpUtility.UrlEncode("Desert.jpg", System.Text.Encoding.UTF8);
                fileNameEncode = fileNameEncode.Replace("+", "%20");
                String appendedheader = "attachment;filename=" + fileNameEncode;
                Response.AppendHeader("Content-Disposition", appendedheader);
                Response.OutputStream.Write(byFileData, 0, byFileData.Length);
            }
            catch (Exception exc)
            {
                string strExc = exc.ToString();
                DateTime d1 = DateTime.Now;
                string logfilename = d1.Year.ToString() + d1.Month.ToString() + d1.Day.ToString() + d1.Hour.ToString() + d1.Minute.ToString() + d1.Second.ToString() + "log.txt";
                String strField1Path = HttpContext.Current.Request.MapPath(".") + "/" + logfilename;
                if (strField1Path != null)
                {
                    System.IO.StreamWriter sw1 = System.IO.File.CreateText(strField1Path);
                    sw1.Write(strExc);
                    sw1.Close();
                }
                Response.Flush();
                Response.Close();
            }
        }
        else
        {
            Response.Redirect("../SupportingFiles/LogInFirst.html");
        }
    }
}