import { Link } from "react-router-dom";
import "../style/login.css";
import SocialLogin from "../components/ui/SocialLogin";
import { useState } from "react";
import { ToastContainer, toast } from "react-toast";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      toast("Login successful!");
      // Clear input fields by resetting state
      setEmail("");
      setPassword("");
    } catch (FirebaseError) {
      console.log(FirebaseError);
      setEmail("");
      setPassword("");
      toast("Error:Make sure Your login info Valied",);
    }
  };
  return (
    <div>
      <div className="login-box">
        <p className=" text-white font-bold text-3xl text-center">Log in </p>
        <form onSubmit={handleLogin}>
          <div className="user-box">
            <input
              type="text"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <center>
            <button type="submit" className="buton btn bg-slate-900 ">
              logIn
            </button>
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
        <div className="social-icons my-3">
          <SocialLogin></SocialLogin>
        </div>
        <p className="signup text-white navigete">
          Don't have an account?
          <Link to="/sign-up" className="mx-2 p-1 buton font-bold">
            Sign up
          </Link>
        </p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
