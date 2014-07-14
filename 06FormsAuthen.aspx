<%@ Page Title="Forms Authentication" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" %>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="Server">
    <div id="dwtcontrolContainer">
    </div>
    <input type="button" value="Acquire" onclick="AcquireImage();" />
    <input type="button" value="Upload" onclick="UploadImage();" />
    <script type="text/javascript" src="Resources/dynamsoft.webtwain.initiate.js"></script>
    <script type="text/javascript">
        function AcquireImage() {
            /*DWObject.BrokerProcessType = 1;
            DWObject.IfShowUI = false;
            DWObject.SelectSource();
            DWObject.OpenSource();
            */
            DWObject.IfShowFileDialog = true;
            DWObject.LoadImageEx("", 5);
        }
        function UploadImage() {
            var _strServerName = location.hostname; //Demo: "www.dynamsoft.com";
            var _strPort = location.port == "" ? 80 : location.port; //Demo: 80;
            var _currentPathName = unescape(location.pathname); 
            var _currentPath = _currentPathName.substring(0, _currentPathName.lastIndexOf("/") + 1);
            var _strActionPage = _currentPath + "Actions/FormsAuthenUploads.aspx";
            var _uploadfilename = "test.jpg";
            DWObject.HTTPPort = _strPort
            cookiee = '<%=Request.Headers["Cookie"] %>';
            DWObject.SetCookie(cookiee);
            DWObject.HTTPUploadThroughPost(
            _strServerName,
            0,
            _strActionPage,
            _uploadfilename);
            checkErrorString();
        }
        function checkErrorString() {
            if (DWObject.ErrorCode == 0) {
                return true;
            }
            if (DWObject.ErrorCode == -2115) //Cancel file dialog
                return true;
            else {
                if (DWObject.ErrorCode == -2003) {
                    var ErrorMessageWin = window.open("", "ErrorMessage", "height=500,width=750,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no");
                    ErrorMessageWin.document.writeln(DWObject.HTTPPostResponseString);
                }
                return false;
            }
        }
        function Dynamsoft_OnGetFilePath() { }
    </script>
    <script type="text/javascript" src="Resources/dynamsoft.webtwain.config.js"></script>
</asp:Content>

