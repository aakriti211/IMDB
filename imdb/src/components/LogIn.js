import React from "react";
import GoogleLogin from "react-google-login";
import { ApplicationContext } from "./ApplicationProvider";
import { withRouter } from "react-router-dom";
import "../assets/css/Login.css";

const Login = props => {
  const value = React.useContext(ApplicationContext);

  const responseGoogle = response => {
    value.setUser(
      response.profileObj.givenName,
      response.profileObj.familyName,
      response.profileObj.email
    );
    props.history.push("/home");
  };

  return (
    <div style={{ backgroundColor: "snow", height: "1680px" }}>
      <GoogleLogin
        className="signInButton"
        clientId="484229567466-ku22ppugbo8me20eas80kv8grhaqhdhv.apps.googleusercontent.com"
        buttonText="Login Via Gmail"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={false}
      />

      {/* {value.firstName} */}
    </div>
  );
};

export default withRouter(Login);
