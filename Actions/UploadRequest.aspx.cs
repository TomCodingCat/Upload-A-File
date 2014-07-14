using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class UploadRequest : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        string strNum = HttpContext.Current.Request["number"]; //both POST & GET work
        string responsestr = "Your input was " + strNum + ", not sure whether you used POST or GET";
        if(HttpContext.Current.Request.Form["number"] != null){
            strNum = HttpContext.Current.Request.Form["number"]; //only for POST
            responsestr = "Your input was " + strNum + " using Post";
        }
        Response.Write(responsestr);
    }
}
