import React, { useState } from "react";
import { auth, handleUserProfile } from "../../firebase/utils";
import Button from "../forms/Button";
import FormInput from "../forms/FormInput";
import "./styles.scss";

function SignUp() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const resetForm = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      const err = ["Password Don't match"];
      setErrors(err);
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await handleUserProfile(user, { displayName });
      resetForm();
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="signup">
      <div className="wrap">
        <h2>Signup</h2>

        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return <li key={index}>{err}</li>;
            })}
          </ul>
        )}

        <div className="formWrap">
          <form onSubmit={handleFormSubmit}>
            {/* {displayName} */}
            <FormInput
              type="text"
              name="displayName"
              value={displayName}
              placeholder="Full Name"
              onChange={(e) => setDisplayName(e.target.value)}
            />
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
            <FormInput
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit">Register</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
