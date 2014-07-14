using System;
using System.IO;
using System.Collections.Generic;
using System.Web;

public partial class AJAXUpload : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        String strExc = "";
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
            // Convert the Base64 UUEncoded input into binary output. 
            byte[] binaryData;
            try
            {
                binaryData = System.Convert.FromBase64String(imageData);
            }
            catch (System.ArgumentNullException)
            {
                System.Console.WriteLine("Base 64 string is null.");
                return;
            }
            catch (System.FormatException)
            {
                System.Console.WriteLine("Base 64 string length is not " +
                   "4 or is not an even multiple of 4.");
                return;
            }

            // Write out the decoded data.
            System.IO.FileStream outFile;
            try
            {
                outFile = new System.IO.FileStream(outputFileName,
                                           System.IO.FileMode.Create,
                                           System.IO.FileAccess.Write);
                outFile.Write(binaryData, 0, binaryData.Length);
                outFile.Close();
            }
            catch (System.Exception exp)
            {
                // Error creating stream or writing to it.
                System.Console.WriteLine("{0}", exp.Message);
            }
        }
        catch (Exception exc)
        {
            strExc = exc.ToString();
            String strField1Path = HttpContext.Current.Request.MapPath(".") + "/" + "log.txt";
            StreamWriter sw1 = File.CreateText(strField1Path);
            if (strField1Path != null)
            {
                sw1.Write(strExc);
                sw1.Close();
            }
            Response.Write(strExc);
        }
    }
}