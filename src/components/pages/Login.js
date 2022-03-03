import React, { useState } from "react";
import InputBox from "../common/InputBox";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("An error occured: ", errorCode, errorMessage);
      });
  };
  console.log(auth.currentUser);
  return (
    <>
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
              />
            </svg>
          </div>
          <form className="mt-8">
            <div className="rounded-md shadow-sm ">
              <div>
                <InputBox
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Email Address"
                  type="email"
                  required="required"
                  inputStyle="input-login"
                />
              </div>
              <div className="mt-4">
                <InputBox
                  value={password}
                  label="password"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  required="required"
                  inputStyle="input-login"
                />
              </div>
            </div>
            <div className=" mt-4">
              <Button type="submit" className="btn-login" onClick={handleLogin}>
                Log in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
