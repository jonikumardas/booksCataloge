import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import '../style/login.css'

const Login = () => {
  return (
    <div>
      <div className="login-box">
        <p className=" text-white font-bold text-3xl text-center">Log in </p>
        <form>
          <div className="user-box">
            <input type="text" name="" required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required />
            <label>Password</label>
          </div>
          <center>
            <button className="buton btn bg-slate-900 ">logIn</button>
            <span></span>
          </center>
        </form>
        <div className="social-message">
          <div className="line"></div>
          <p className="message text-white mt-3 navigete">Login with social accounts</p>
          <div className="line"></div>
        </div>   
        <div className="social-icons">
          <button aria-label="Log in with Google" className="icon mx-4 hover:shadow-xl">
            <FaFacebook />
          </button>
          <button aria-label="Log in with Twitter" className="icon mx-4 hover:shadow-xl">
          <FaGoogle />
          </button>
          <button aria-label="Log in with GitHub" className="icon mx-4 hover:shadow-xl">    <FaGithub /></button>
      
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
