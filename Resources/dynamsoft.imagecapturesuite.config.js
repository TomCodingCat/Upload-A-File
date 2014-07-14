var _dwtParam = {
    'productKey': '',
    'containerID': 'dwtcontrolContainer',   //The ID of Dynamic Web TWAIN control div in HTML.This value is required.

    'isTrial': 'false',
    /*isTrial is used to judge whether Dynamic Web TWAIN control is trial or full. This value is optional.
    The default value is 'TRUE', which means the control is a trial one. The value of isTrial is 'TRUE' or 'FALSE'.
    */

    /*
    'version': '9,2',   
    The version of Dynamic Web TWAIN control, which is used to judge the version when downloading CAB.
    This value is optional. The default value is '9,2'.
    */

    /*
    'resourcesPath': 'Resources',   
    The relative path of MSI, CAB and PKG.
    This value is optional. The default value is 'Resources'.
    */

    /*  These are events. The name of 'OnPostAllTransfer' shouldn't be changed, but the name of 'Dynamsoft_OnPostAllTransfers' can be modified. 
    Please pay attention, the name of 'Dynamsoft_OnPostAllTransfers' and 'function Dynamsoft_OnPostAllTransfers()' event must be coincident.
    
    Events are as follows. You can choose one or many according to you needs.
    Once an event is added, you must make sure the corresponding function is defined in your code.
    For example, if you want to add the event OnPostTransfer, you need to:
        1. Uncomment the following line. (Remove "//")
            //'onPostTransfer':Dynamsoft_OnPostTransfer, 
        2. Define the callback funtion in your code
            function Dynamsoft_OnPostTransfer(){//your code when the event is triggered}
    */
    //'onAfterOperate': Dynamsoft_OnAfterOperate,
    //'onBeforeOperate': Dynamsoft_OnBeforeOperate,
    //'onOperateStatus': Dynamsoft_OnOperateStatus,
    //'onBitmapChanged': Dynamsoft_OnBitmapChanged,
    'onGetFilePath': Dynamsoft_OnGetFilePath,
    //'onImageAreaDeSelected': Dynamsoft_OnImageAreaDeSelected,
    //'onImageAreaSelected': Dynamsoft_OnImageAreaSelected,
    //'onMouseClick': Dynamsoft_OnMouseClick,
    //'onMouseDoubleClick': Dynamsoft_OnMouseDoubleClick,
    //'onMouseMove': Dynamsoft_OnMouseMove,
    //'onMouseRightClick': Dynamsoft_OnMouseRightClick,
    //'onPreAllTransfers': Dynamsoft_OnPreAllTransfers,
    //'onPreTransfer': Dynamsoft_OnPreTransfer,
    'onPostLoad': Dynamsoft_OnPostLoad,
    //'onPostTransfer': Dynamsoft_OnPostTransfer,
    //'onPostAllTransfers': Dynamsoft_OnPostAllTransfers,
    //'onSourceUIClose': Dynamsoft_OnSourceUIClose,
    //'onTopImageInTheViewChanged': Dynamsoft_OnTopImageInTheViewChanged,
    //'onTransferCancelled': Dynamsoft_OnTransferCancelled,
    //'onTransferError': Dynamsoft_OnTransferError,
    //'onInternetTransferPercentage': Dynamsoft_OnInternetTransferPercentage,
    //'onInternetTransferPercentageEx': Dynamsoft_OnInternetTransferPercentageEx,

    'width': 1,       //The width of Dynamic Web TWAIN control
    //This value is optional. The default value is '580'.



    'height': 1       //The height of  Dynamic Web TWAIN control
    //This value is optional. The default value is '600'.
};


var gImageCapture;
(function () {
    gImageCapture = new Dynamsoft.ImageCapture(_dwtParam);
})();

DWObject = gImageCapture.getInstance();