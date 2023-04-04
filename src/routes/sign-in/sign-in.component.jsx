import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.util";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h2>Sign In page</h2>
      <button onClick={logGoogleUser}>Sign In with google popup</button>
    </div>
  );
}

export default SignIn;