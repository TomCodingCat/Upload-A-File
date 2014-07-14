
function DownloadFiles() {
    var _strServerName = location.hostname; //Demo: "www.dynamsoft.com";
    var _strPort = location.port == "" ? 80 : location.port; //Demo: 80;
    var _currentPathName = unescape(location.pathname); // get current PathName in plain ASCII
    var _currentPath = _currentPathName.substring(0, _currentPathName.lastIndexOf("/") + 1);
    var _strActionPage = _currentPath + "Actions/Download.aspx";
    DWObject.HTTPPort = _strPort;
    cookiee = document.getElementById("cookiestr").innerText;
    DWObject.SetCookie(cookiee);
    DWObject.HTTPDownloadThroughPost(
    _strServerName,
    _strActionPage,
    1);
    if (checkErrorString()) {
        function convertOne() {
            DWObject.SetSelectedImageIndex(0, 0);
            DWObject.GetSelectedImagesSize(1); //jpeg
            var imagedata = "data:image/jpeg;base64," + DWObject.SaveSelectedImagesToBase64Binary();
            showUploadedItem(imagedata, name);
            DWObject.RemoveImage(DWObject.CurrentImageIndexInBuffer);
            if (DWObject.HowManyImagesInBuffer > 0) {
                setTimeout(convertOne, 10);
            }
        }
        convertOne();
    }
}
function checkErrorString() {
    if (DWObject.ErrorCode == 0) {
        //        document.getElementById("response").innerHTML = "";
        return true;
    }
    if (DWObject.ErrorCode == -2115) //Cancel file dialog
        return true;
    else {
        if (DWObject.ErrorCode == -2003) {
            document.getElementById("response").innerHTML = DWObject.HTTPPostResponseString;
        }
        return false;
    }
}
//Preview
function showUploadedItem(source, name) {
    var list = document.getElementById("image-list"),
        li = document.createElement("li"),
        img = document.createElement("img"),
        txt = document.createElement("span");
    txt.innerHTML = name;
    img.src = source;
    li.appendChild(img);
    li.appendChild(txt);
    list.appendChild(li);
}

function Dynamsoft_OnGetFilePath() { }
function Dynamsoft_OnPostLoad(){}