using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.Security;

public partial class Login : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {

    }
    protected void LoginButton_Click(object sender, EventArgs e)
    {
        // Three valid username/password pairs: Scott/password, Jisun/password, and Sam/password.
        string[] users = { "Scott", "Jisun", "Sam" };
        string[] passwords = { "password", "password", "password" };
        for (int i = 0; i < users.Length; i++)
        {
            bool validUsername = (string.Compare(UserName.Text, users[i], true) == 0);
            bool validPassword = (string.Compare(Password.Text, passwords[i], false) == 0);
            if (validUsername && validPassword)
            {
                // TODO: Log in the user...
                // TODO: Redirect them to the appropriate page
                HttpCookie httpcookie = FormsAuthentication.GetAuthCookie(users[i], false);
                httpcookie.HttpOnly = true;
                FormsAuthentication.RedirectFromLoginPage(UserName.Text, RememberMe.Checked);                
                Response.Cookies.Add(httpcookie);
            }
        }
        // If we reach here, the user's credentials were invalid
        InvalidCredentialsMessage.Visible = true;
    }
}