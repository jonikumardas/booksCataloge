import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
const SocialLogin = () => {
    return (
        <div className="social-icons">
        <button
          aria-label="Log in with Google"
          className="icon mx-4 hover:shadow-xl"
        >
          <FaFacebook />
        </button>
        <button
          aria-label="Log in with Twitter"
          className="icon mx-4 hover:shadow-xl"
        >
          <FaGoogle />
        </button>
        <button
          aria-label="Log in with GitHub"
          className="icon mx-4 hover:shadow-xl"
        >
          {" "}
          <FaGithub />
        </button>
      </div>
    );
};

export default SocialLogin;