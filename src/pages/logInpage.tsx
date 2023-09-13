import { Link } from "react-router-dom";
import "../style/login.css";
import SocialLogin from "../components/ui/SocialLogin";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/Firebase";
import { useState } from "react";
import { toast } from "react-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const hendleLogin = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast(`Log successfull ${user.email}`);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast(`error: ${errorMessage}`);
      });
  };
  return (
    <div>
      <div className="login-box">
        <p className=" text-white font-bold text-3xl text-center">Log in </p>
        <form onSubmit={hendleLogin}>
          <div className="user-box">
            <input type="text" name="email" required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <center>
            <button type="submit" className="buton btn bg-slate-900 ">logIn</button>
            <span></span>
          </center>
        </form>
        <div className="social-message">
          <div className="line"></div>
          <p className="message text-white mt-3 navigete">
            Login with social accounts
          </p>
          <div className="line"></div>
        </div>
        <div className="social-icons">
          <SocialLogin></SocialLogin>
        </div>
        <p className="signup text-white navigete">
          Don't have an account?
          <Link to="/sign-up" className="mx-2 p-1 buton font-bold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
