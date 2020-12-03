import React, { useState } from "react";
import Button from "../forms/Button";
import FormInput from "../forms/FormInput";
import { auth, signInWithGoogle } from "./../../firebase/utils";
import "./styles.scss";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);
      resetForm();
    } catch (err) {}
  };
  return (
    <div className="signin">
      <div className="wrap">
        <h2>SignIn</h2>

        <div className="formWrap">
          <form onSubmit={handleSubmit}>
            <FormInput
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button type="submit">Sign In😻</Button>

            {/* <span>OR</span> */}
            <div className="socialSignIn">
              <div className="row">
                <Button onClick={signInWithGoogle}>Sign in with Google</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
