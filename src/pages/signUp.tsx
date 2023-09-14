import { Link } from "react-router-dom";
import "../style/login.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toast";
import SocialLogin from "../components/ui/SocialLogin";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast("Passwords do not match.");
      return;
    }
    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password);
      toast("Signup successful!");
      // Clear input fields by resetting state
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast("Error: User create failed");
    }
  };

  return (
    <div>
      <div className="login-box">
        <p className=" text-white font-bold text-center text-3xl">Sign Up</p>
        <form onSubmit={handleSignup}>
          <div className="user-box">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>User email</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <label>Confirm password</label>
          </div>
          <center>
            <button type="submit" className="buton btn bg-slate-900">
              Register
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
        <div className="my-3">
        <SocialLogin></SocialLogin>
        </div>
        
        <p className="signup text-white navigete">
          Already have an account?
          <Link to="/log-in" className="mx-2 p-1 buton font-bold">
            Log in
          </Link>
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;  


















