import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import AppService from '../services/app.service';

const Login = () => {
    const router = useRouter();
  
    const callbackSteamLogin = () => {
      let urlParams = new URLSearchParams(router.query);
      let s = new AppService();
      s.makePost('login_steam', urlParams).then(res=>{
        let _user = res.data;
        s.setUser(_user);
        router.push("/play");
      });
    };

    const loginWithSteam = () => {
      const params = new URLSearchParams({
        'openid.ns'         : 'http://specs.openid.net/auth/2.0',
        'openid.mode'       : 'checkid_setup',
        'openid.return_to'  : "http://localhost:3000/login", // Esto es la url donde va a recibir los get params despues de iniciar sesion
        'openid.realm'      : "http://localhost:3000", // Esto es el origen de la peticion
        'openid.identity'   : 'http://specs.openid.net/auth/2.0/identifier_select',
        'openid.claimed_id' : 'http://specs.openid.net/auth/2.0/identifier_select',
      });

      //console.log(params.toString());
      location.href = 'https://steamcommunity.com/openid/login?' + params.toString();
    };

    if(router.query['openid.ns'])
      callbackSteamLogin();

    return (
        <>
            <div className='mode-play'>
            <div className="background-img">
            <div className="login-box">
                <h2 className="form-title"> Ingresa con </h2>
                <div className="login-buttons-f">
                    <div className="loginAcc googlebtn">
                        <span className="login-acc-icon google-icon-p"></span>
                    </div>
                    <div className="loginAcc facebookbtn">
                        <span className="login-acc-icon facebook-icon-p"></span>
                    </div>
                    <div className="loginAcc steambtn" onClick={loginWithSteam}>
                        <span className="login-acc-icon steam-icon-p"></span>
                    </div>
                </div>
                <h2 className="form-title"> o </h2>
                <form>
                    <div className="user-box">
                      <input type="text" name="" required="" />
                      <label>Usuario</label>
                    </div>
                    <div className="user-box">
                      <input type="password" name="" required="" />
                      <label>Contraseña</label>
                    </div>
                    <Link href='/play'>
                        <a>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Ingresar
                        </a>
                    </Link>
                  </form>
                <div className="flex-col-center">
                    <a className="link-create">Crear Cuenta</a>
                    <a className="link-passw">Olvidaste tu contraseña</a>
                </div>
                
            </div> 

        </div>
            </div>
            <style jsx>
                {`
                .mode-play {
                        height: 100vh;
                        overflow-y: hidden;
                    }
                    .background-img {
    background-image: url("/acct_creation_bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.login-box {
    background: rgba(237, 232, 232, 0.062);
    box-shadow: -25px 50px 40px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(50px);
    /* Note: backdrop-filter has minimal browser support */
    padding: 30px;
    width: 450px;
}

.form-title { 
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    margin: 0 0 30px;
}

.login-buttons-f {
  display: flex;
    justify-content: center;

}

.loginAcc {
  width: 72px;
  height: 48px;
  border-radius: 4px;
  background-color: #fff;
  padding: 12px 24px;
  margin-bottom: 25px;
    margin-left: 10px;
    margin-right: 10px;
}
.login-acc-icon {
  display: inline-block;
  height: 24px;
  width: 24px;
}

.google-icon-p {
  background: url(/icons/google.svg);
}

.facebookbtn {
  background-color: #1877f2;
}

.facebook-icon-p {
  background: url(/icons/facebook.svg);
}

.steambtn {
  background-color: #2f363d;
}
.steam-icon-p {
  background: url(/icons/steam.png);
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
  font-family: 'Poppins';
  
}
.login-box .user-box label {
  position: absolute;
  top:0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: .5s;
  font-family: 'Poppins';
}
/* #03e9f4 */

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #b727fe;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #b727fe;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: .5s;
  margin-top: 40px;
  letter-spacing: 4px;
  font-family: 'Poppins';
}

.login-box a:hover {
  background: #b727fe;
  color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 5px #b727fe,
              0 0 25px #2c62fe,
              0 0 50px #2c62fe,
              0 0 100px #2c62fe;
}

.login-box a span {
  position: absolute;
  display: block;
}

.login-box a span:nth-child(1) {
  top: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, #2c62fe);
  animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
  0% {
    left: -100%;
  }
  50%,100% {
    left: 100%;
  }
}

.login-box a span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg, transparent, #2c62fe);
  animation: btn-anim2 1s linear infinite;
  animation-delay: .25s
}

@keyframes btn-anim2 {
  0% {
    top: -100%;
  }
  50%,100% {
    top: 100%;
  }
}

.login-box a span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg, transparent, #2c62fe);
  animation: btn-anim3 1s linear infinite;
  animation-delay: .5s
}

@keyframes btn-anim3 {
  0% {
    right: -100%;
  }
  50%,100% {
    right: 100%;
  }
}

.login-box a span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg, transparent, #03e9f4);
  animation: btn-anim4 1s linear infinite;
  animation-delay: .75s
}

@keyframes btn-anim4 {
  0% {
    bottom: -100%;
  }
  50%,100% {
    bottom: 100%;
  }
}


    .flex-col-center {
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
        padding: 20px;
        gap: 10px;
    }
    .flex-col-center a {
        text-decoration: none;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        font-family: 'Poppins';
        font-style: normal;
        line-height: 24px;
        text-align: center;

    }

                `}
            </style>
        </>
    );
}

export default Login;
