import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../firebase/utils";
import AuthWrapper from "../AuthWrapper";
import Button from "../forms/Button";
import FormInput from "../forms/FormInput";
import "./styles.scss";

function EmailPassword() {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);

  const history = useHistory();

  const configAuthWrapper = {
    headline: "reset password",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    try {
      const config = {
        url: "http://localhost:3000/login",
      };

      await auth
        .sendPasswordResetEmail(email, config)
        .then(() => {
          history.push("/login");
        })
        .catch(() => {
          const err = ["Email not found. Please try again."];
          setErrors(err);
        });
    } catch (err) {}
  };

  return (
    <AuthWrapper {...configAuthWrapper}>
      <div className="formwrap">
        {errors.length > 0 && (
          <ul>
            {errors.map((error, index) => {
              return <li key={index}>{error}</li>;
            })}
          </ul>
        )}

        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Type an email id"
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button>Reset</Button>
        </form>
      </div>
    </AuthWrapper>
  );
}

export default EmailPassword;
