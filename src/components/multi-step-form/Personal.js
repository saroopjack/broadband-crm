import React from "react";
import InputBox from "../common/InputBox";
import Button from "../common/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/slices/multiStep";
import {
  setEmailId,
  setFirstName,
  setLastName,
  setPhoneNum,
} from "../../redux/slices/formPersonalData";

const Personal = () => {
  const form = useSelector((state) => state.formPersonal);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: form });
  const handleError = (errors) => {};
  const handleNextBtn = (data) => {
    dispatch(setFirstName(data.firstName));
    dispatch(setLastName(data.lastName));
    dispatch(setEmailId(data.emailId));
    dispatch(setPhoneNum(data.phoneNum));
    dispatch(setPage(1));
  };
  const registerOptions = {
    firstName: {
      required: "FirstName is required",
      pattern: {
        value: /^[a-zA-Z]+$/g,
        message: "name can only be alphabets",
      },
    },
    lastName: {
      required: "LastName is required",
      pattern: {
        value: /^[a-zA-Z]+$/g,
        message: "name can only be alphabets",
      },
    },
    emailId: {
      required: "Email Id is required",
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Please enter a valid email",
      },
    },
    phoneNum: {
      required: "Phone Number is required",
      pattern: {
        value: /^[789]\d{9,9}$/g,
        message: "Please enter a valid phone number",
      },
    },
  };
  return (
    <div className="shadow bg-gray-100 overflow-hidden sm:rounded-md max-w-md mx-auto">
      <div className="px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-x-6 gap-y-3 ">
          <div className="col-span-6 ">
            <InputBox
              imp="*"
              register={register}
              name="firstName"
              label="First name"
              required={registerOptions.firstName}
            />
            <div className="h-4">
              <small className="text-red-600 text-xs ">
                {errors?.firstName && errors.firstName.message}
              </small>
            </div>
          </div>
          <div className="col-span-6 ">
            <InputBox
              register={register}
              name="lastName"
              imp="*"
              label="Last name"
              required={registerOptions.lastName}
            />
            <div className="h-4">
              <small className="text-red-600 text-xs ">
                {errors?.lastName && errors.lastName.message}
              </small>
            </div>
          </div>
          <div className="col-span-6 ">
            <InputBox
              register={register}
              name="emailId"
              label="Email Address"
              imp="*"
              required={registerOptions.emailId}
            />
            <div className="h-4">
              <small className="text-red-600 text-xs ">
                {errors?.emailId && errors.emailId.message}
              </small>
            </div>
          </div>

          <div className="col-span-6 ">
            <InputBox
              register={register}
              name="phoneNum"
              label={"Phone Number"}
              imp="*"
              required={registerOptions.phoneNum}
            />
            <div className="h-4">
              <small className="text-red-600 text-xs ">
                {errors?.phoneNum && errors.phoneNum.message}
              </small>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-3  text-right sm:px-6 flex justify-center">
        <Button onClick={handleSubmit(handleNextBtn)} className="btn-form">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Personal;
