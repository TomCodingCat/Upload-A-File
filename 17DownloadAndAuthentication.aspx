<%@ Page Title="Download a File" Language="C#" MasterPageFile="~/Site.master" AutoEventWireup="true" %>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="Server">
    <link rel="stylesheet" href="Style/ICSUpload.css" />
    <div id="main">
        <div id="cookiestr" style="display: none;"><%=Request.Headers["Cookie"] %></div>
        <div id="dwtcontrolContainer">
        </div>
        <input id="btn" type="button" value="Download" onclick="DownloadFiles();" />
        <div id="response"></div>
        <ul id="image-list"></ul>
    </div>
    <script type="text/javascript" src="Resources/dynamsoft.imagecapturesuite.initiate.js"></script>
    <script type="text/javascript" src="Scripts/dynamsoft.download.js"></script>
    <script type="text/javascript" src="Resources/dynamsoft.imagecapturesuite.config.js"></script>
</asp:Content>
