using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.IO;

public partial class ReceiveOCRResult : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string OCRResult = HttpContext.Current.Request.Form["PDFAImageData"];
        string OCRResulttxt = HttpContext.Current.Request.Form["ExtractedTxt"];
        String Path = System.Web.HttpContext.Current.Request.MapPath(".") + "/UploadedImages/";
        if (!Directory.Exists(Path))
        {
            Directory.CreateDirectory(Path);
        }
        string outputFileName = Path + "PDFA_OCR.pdf";
        string outputtxtName = Path + "ExtractedTxt.txt";

        try
        {
            /*
                * Save the orignial PDF (image)
                * */
            HttpFileCollection files = HttpContext.Current.Request.Files;
            HttpPostedFile uploadfile = files["RemoteFile"];
            uploadfile.SaveAs(Path + uploadfile.FileName);
        }
        catch (Exception ex) { }
        try
        {
            /*
             * Save the extracted string
             * */
            StreamWriter sw1 = File.CreateText(outputtxtName);
            sw1.Write(OCRResulttxt);
            sw1.Close();
        }
        catch (Exception ex) { }
        byte[] binaryData;
        try
        {
            binaryData = Convert.FromBase64String(OCRResult);
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
}