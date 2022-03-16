import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEditLeadModal, setManualLeadfetch } from "../redux/crm/slice";
import InputBox from "./common/InputBox";
import Dropdown from "./common/Dropdown";
import Button from "./common/Button";
import { useForm } from "react-hook-form";

const LeadEdit = () => {
  const { editLeadModal, singleLeadData, singleLeadKey, manualLeadfetch } =
    useSelector((state) => state.crm);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    if (e.target.id === "bg") {
      dispatch(setEditLeadModal(false));
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleError = (errors) => {};
  const handleForm = async (data) => {
    const response = await fetch(
      `https://ic-crm-demo-api-default-rtdb.firebaseio.com/leads/${singleLeadKey}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response) {
      dispatch(setEditLeadModal(false));
      dispatch(setManualLeadfetch(!manualLeadfetch));
    }
  };
  const handleCancel = async (data) => {
    await fetch(
      `https://ic-crm-demo-api-default-rtdb.firebaseio.com/leads/${singleLeadKey}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await fetch(
      `https://ic-crm-demo-api-default-rtdb.firebaseio.com/cancelled/${singleLeadKey}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response) {
      dispatch(setEditLeadModal(false));
      dispatch(setManualLeadfetch(!manualLeadfetch));
    }
  };
  const handleSold = async (data) => {
    await fetch(
      `https://ic-crm-demo-api-default-rtdb.firebaseio.com/leads/${singleLeadKey}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const response = await fetch(
      `https://ic-crm-demo-api-default-rtdb.firebaseio.com/sold/${singleLeadKey}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response) {
      dispatch(setEditLeadModal(false));
      dispatch(setManualLeadfetch(!manualLeadfetch));
    }
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
    pinCode: {
      pattern: {
        value: /^[1-9][0-9]{5}$/g,
        message: "Enter valid pincode",
      },
    },
  };
  const countryList = ["india", "china", "USA"];
  useEffect(() => {
    reset({ ...singleLeadData });
  }, [singleLeadData]);
  return (
    <div
      onClick={handleClick}
      className={`${
        editLeadModal ? "" : "hidden"
      }fixed inset-0 overflow-hidden flex justify-center items-center`}
    >
      <div
        id="bg"
        className={`${
          editLeadModal ? "" : "hidden"
        } absolute inset-0 bg-black opacity-0`}
      />
      <div
        className={`${
          editLeadModal ? "" : "hidden"
        } absolute rounded-lg shadow  bg-gray-300 max-h-screen overflowYscroll w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12`}
      >
        <div
          onClick={() => dispatch(setEditLeadModal(false))}
          className="absolute w-6 h-6 top-2 right-2 bg-gray-50 rounded-full hover:bg-gray-200 hover:shadow-inner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="md:col-span-2 ">
          <div className="shadow bg-gray-100 sm:rounded-md">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-x-6 gap-y-3">
                <div className="col-span-6 sm:col-span-3">
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
                <div className="col-span-6 sm:col-span-3">
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
                <div className="col-span-6 sm:col-span-4">
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
                <div className="col-span-6 sm:col-span-3">
                  <Dropdown
                    register={register}
                    name="country"
                    label="Country"
                    optionList={countryList}
                  />
                  <div className="h-4"></div>
                </div>
                <div className="col-span-6 sm:col-span-3">
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
                <div className="col-span-6">
                  <InputBox
                    register={register}
                    name="streetAddress"
                    label={"Street Adress"}
                  />
                  <div className="h-4"></div>
                </div>
                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <InputBox register={register} name="city" label={"City"} />
                  <div className="h-4"></div>
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <InputBox register={register} name="state" label={"State"} />
                  <div className="h-4"></div>
                </div>
                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <InputBox
                    register={register}
                    required={registerOptions.pinCode}
                    name="pinCode"
                    label={"Pincode"}
                  />
                  <div className="h-4">
                    <small className="text-red-600 text-xs ">
                      {errors?.pinCode && errors.pinCode.message}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3  text-right sm:px-6 flex flex-col gap-y-2 sm:flex-row justify-between">
              <Button
                onClick={handleSubmit(handleCancel, handleError)}
                className="btn-delete"
              >
                Cancel Lead
              </Button>
              <Button
                onClick={handleSubmit(handleForm, handleError)}
                className="btn-form"
              >
                Update
              </Button>
              <Button
                onClick={handleSubmit(handleSold, handleError)}
                className="btn-cancel"
              >
                Move to Sold
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadEdit;
