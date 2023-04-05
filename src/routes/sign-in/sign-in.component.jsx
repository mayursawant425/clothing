import { useState } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from "../../utils/firebase.util";
import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";
import "./sign-in.style.scss";

const defaultFormFields = {
  email: "",
  password: ""
}

const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }

  const resetForm = () => {
    setFormFields(defaultFormFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);

      resetForm();
    }
    catch (error) {
      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        alert("Invalid user credentials.")
      }
      else {
        alert("Something went wrong while creating user.");
      }
    }

  }

  return (
    <div className="sign-in-container">
      <h1>Sign In page</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="text"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className="buttons-container">
          <Button>Sign In</Button>
          <Button
            buttonType="google"
            type="button"
            onClick={signInWithGooglePopup}
          >Google Sign In</Button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;