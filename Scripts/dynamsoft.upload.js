function UploadFiles() {
    document.getElementById("response").innerHTML = "";
    setTimeout(function () {
        if (!DWObject.ShowFileDialog(false, "All files|*.*", 0, "", "", true, true, 0)) {
            document.getElementById("response").innerHTML = "Aborted";
        }
        else {//After uploading is done      
        }
    }, 100);
}


function Dynamsoft_OnBitmapChanged() {
    //
}
function Dynamsoft_OnGetFilePath(bSave, count, index, path, name) {
    document.getElementById("btn").value = "Processing...";
    fileName = path + "\\" + name;
    UploadFile(fileName, name);
    var fileextention = name.toLowerCase().substring(name.lastIndexOf("\.") + 1);
    if (fileextention == "pdf" || "bmp" || "jpg" || "tif" || "tiff" || "png") {
        try {
            if (fileextention == "pdf" ? DWObject.ConvertPDFToImage(fileName, 300) : DWObject.LoadImage(fileName)) {
                DWObject.SelectedImagesCount = 1;
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
            else {
                document.getElementById("response").innerHTML = "It seems some files can't be previewed";
            }
        }
        catch (e) { }
    }
    document.getElementById("btn").value = "Upload";
}
function UploadFile(localFilePath, fileName) {
    var _strServerName = location.hostname; //Demo: "www.dynamsoft.com";
    var _strPort = location.port == "" ? 80 : location.port; //Demo: 80;
    var _currentPathName = unescape(location.pathname); // get current PathName in plain ASCII
    var _currentPath = _currentPathName.substring(0, _currentPathName.lastIndexOf("/") + 1);
    var _strActionPage = _currentPath + "Actions/SaveUploadedFile.aspx";
    DWObject.HTTPPort = _strPort;
    DWObject.HTTPUploadThroughPostDirectly(
    _strServerName,
    localFilePath,
    _strActionPage,
    fileName);
    checkErrorString(fileName);
}
function checkErrorString(name) {
    if (DWObject.ErrorCode == 0) {
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
function Dynamsoft_OnPostLoad() { }