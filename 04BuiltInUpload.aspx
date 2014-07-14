<%@ Page Language="C#" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<script runat="server">
    protected void UploadButton_Click(object sender, EventArgs e)
    {
        String Path = System.Web.HttpContext.Current.Request.MapPath(".") + "/Actions/UploadedImages/";
        if (FileUpload1.HasFile)
        {
            String fileName = FileUpload1.FileName;
            Path += fileName;
            FileUpload1.SaveAs(Path);
            UploadStatusLabel.Text = "Your file was saved as " + fileName;
        }
        else
        {
            UploadStatusLabel.Text = "You did not specify a file to upload.";
        }
    }
</script>
<html xmlns="http://www.w3.org/1999/xhtml">
<head id="Head1" runat="server">
    <title>FileUpload Example</title>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <h4>Select a file to upload:</h4>
            <asp:FileUpload ID="FileUpload1"
                runat="server"></asp:FileUpload>
            <br />
            <br />
            <asp:Button ID="UploadButton"
                Text="Upload file"
                OnClick="UploadButton_Click"
                runat="server"></asp:Button>
            <hr />
            <asp:Label ID="UploadStatusLabel"
                runat="server">
            </asp:Label>
        </div>
    </form>
</body>
</html>
