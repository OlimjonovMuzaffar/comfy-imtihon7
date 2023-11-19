import React from "react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signUpWithGoogleAccount } from "../firebase/firebaseConfig";
import { NavLink } from "react-router-dom";

function Login() {
  const [modal, setModal] = useState(false);
  let [data, Setdata] = useState(null);

 


  const loginSignup = () => {
    signUpWithGoogleAccount()
      .then((result) => {
        if (result.operationType === 'signIn') {
            setModal(true)
        }

        console.log(result.operationType);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <div>
      <button onClick={loginSignup} className="btn-modal" id="nav_btn">
        Sign Up <FcGoogle className="google" />
      </button>

      {modal && (
        <div className="text-xl font-mono font-semibold">
          <h1>Muvaffaqiyatli ro'yhatdan o'tildi ✅</h1>
          <NavLink to='/'>
            <button className="button">Bosh Sahifaga</button>
          </NavLink>
        </div>
      )}
    </div>
  );
}

export default Login;
