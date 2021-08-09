import React from "react";
import "./RegStyles.css";
import btnZalo from "../../assets/img/login/btn-Zalo.png";
import btnGoogle from "../../assets/img/login/btn-Google.png";
import btnFB from "../../assets/img/login/btn-FB.png";
import icon from "../../assets/img/login/group@2x.png";
import bg2 from "../../assets/icons/bg2.jpeg";
export default function Login() {
  return (
    <div className="signin--vertical">
      <div className="signin--wrapper">
        <img
          className="signin--header"
          src={icon}
          ng-click="backToHomepage(0)"
        />
        <div className="signin--message">
          <p>Đăng nhập để được nhiều ưu đãi, mua vé</p>
          <br />
          <p>và bảo mật thông tin!</p>
        </div>
        <div className="signin--button">
          <div className="fb-signin">
            <a className="signin-btn">
              <img className="signin-logo" src={btnFB} href="" />
            </a>
          </div>
          <div className="zl-signin">
            <a className="signin-btn">
              <img
                className="signin-logo"
                src={btnZalo}
                href="https://id.zalo.me/account/login?continue=https%3A%2F%2Foauth.zaloapp.com%2Fv3%2Fauth%3Fapp_id%3D714662308097449161%26redirect_uri%3Dhttps%3A%2F%2F123phim.zalopay.vn%2Flogin%26state%3Dmain.home"
              />
            </a>
          </div>
          <div className="gg-signin">
            <a className="signin-btn">
              <img
                className="signin-logo"
                src={btnGoogle}
                href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Ftix.vn%3Fid%3Dauth279104&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&client_id=394473856770-8tk1ott0tr0qm3q7fqaohbnav7jnjb9k.apps.googleusercontent.com&ss_domain=https%3A%2F%2Ftix.vn&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow"
              />
            </a>
          </div>
          <div className="signin-close" href="/home"></div>
        </div>
      </div>
    </div>
  );
}
