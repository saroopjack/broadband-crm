import React from "react";
import InputBox from "../common/InputBox";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { setLoadingIndicator, setUser } from "../../redux/slices/crm";
import Loader from "../Loader";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth();
  const { loadingIndicator } = useSelector((state) => state.crm);
  const handleError = (error) => {};
  const handleLogin = (data) => {
    const { email, password } = data;
    dispatch(setLoadingIndicator(true));
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch(setLoadingIndicator(false));
        dispatch(setUser(res.user.accessToken));
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        dispatch(setLoadingIndicator(false));
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("An error occured: ", errorCode, errorMessage);
      });
  };
  const registerOptions = {
    email: {
      required: "Email Id is required",
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Please enter a valid email",
      },
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 6,
        message: "Password must have at least 6 characters",
      },
    },
  };
  return (
    <>
      {loadingIndicator && <Loader />}
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
          <div className="mt-8 border rounded-md shadow-sm p-6 bg-slate-300">
            <div className="">
              <div>
                <InputBox
                  name="email"
                  register={register}
                  required={registerOptions.email}
                  label="Email Address"
                  inputStyle="input-login"
                />
                <div className="h-4">
                  <small className="text-red-600 text-xs ">
                    {errors?.email && errors.email.message}
                  </small>
                </div>
              </div>
              <div className="mt-4">
                <InputBox
                  name="password"
                  register={register}
                  required={registerOptions.password}
                  label="password"
                  type="password"
                  inputStyle="input-login"
                />
                <div className="h-4">
                  <small className="text-red-600 text-xs ">
                    {errors?.password && errors.password.message}
                  </small>
                </div>
              </div>
            </div>
            <div className=" mt-4">
              <Button
                type="submit"
                className="btn-login"
                onClick={handleSubmit(handleLogin, handleError)}
              >
                Log in
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
