import { Link } from "react-router-dom";
import "../style/login.css";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/Firebase";
import { ToastContainer, toast } from "react-toast";
import SocialLogin from "../components/ui/SocialLogin";
const Signup = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const hendleSignIn = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    const password1 = e.target.password.value;
    const confirm = e.target.confirm.value;
    if (password1 == confirm) {
      setPassword(password1);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          toast(`Regester successfull ${user.email}`);
          setEmail("");
          setPassword("");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage, errorCode);
        });
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="login-box">
        <p className=" text-white font-bold text-center text-3xl">Sign Up </p>
        <form onSubmit={hendleSignIn}>
          <div className="user-box">
            <input type="email" name="email" required />
            <label>User email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="confirm" required />
            <label>Confirm password</label>
          </div>
          <center>
            <button type="submit" className="buton btn bg-slate-900 ">
              Regester
            </button>
            <span></span>
          </center>
        </form>
        <div className="social-message">
          <div className="line"></div>
          <p className="message text-white mt-3 navigete">
            Register with social accounts
          </p>
          <div className="line"></div>
        </div>
       <SocialLogin></SocialLogin>
        <p className="signup text-white navigete">
          Already have an account?
          <Link to="/log-in" className="mx-2 p-1 buton font-bold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
