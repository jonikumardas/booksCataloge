import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FaFacebook, FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from "react-toast";
const SocialLogin = () => {
  const handleGoogleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      toast(`Logged in as ${user.displayName}`);
    } catch (error) {
      toast(`Error: authintication failed`);
    }
  }

    const handleGitHubSignIn = async () => {
      const auth = getAuth();
      const provider = new GithubAuthProvider();
  
      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        toast(`Logged in as ${user.displayName}`);
      } catch (error) {
        toast(`Error: authintication failed`);
      }
    }
  return (
    <div className="social-icons">
      <button
        aria-label="Log in with Google"
        className="icon mx-4 hover:shadow-lime-500"
      >
        <FaFacebook />
      </button>
      <button
        onClick={handleGoogleSignIn}
        aria-label="Log in with Twitter"
        className="icon mx-4 hover:shadow-xl"
      >
        <FaGoogle />
      </button>
      <button onClick={handleGitHubSignIn}
        aria-label="Log in with GitHub"
        className="icon mx-4 hover:shadow-xl"
      >
        <FaGithub />
      </button>
    </div>
  );
};

export default SocialLogin;
