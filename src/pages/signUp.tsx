import { Link } from 'react-router-dom';
import '../style/login.css'
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
const Signup = () => {
    return (
        <div>
        <div className="login-box">
          <p className=" text-white font-bold text-center text-3xl">Sign Up </p>
          <form>
            <div className="user-box">
              <input type="text" name="" required />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="password" name="" required />
              <label>Password</label>
            </div>
            <div className="user-box">
              <input type="password" name="confirm" required />
              <label>Confirm password</label>
            </div>
            <center>
              <button className="buton btn bg-slate-900 ">Regester</button>
              <span></span>
            </center>
          </form>
          <div className="social-message">
            <div className="line"></div>
            <p className="message text-white mt-3 navigete">Register with social accounts</p>
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