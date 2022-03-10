import React from "react";
import InputBox from "../common/InputBox";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import { useForm } from "react-hook-form";

const Home = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const handleError = (errors) => {};
  const handleForm = async (data) => {
    try {
      const response = await fetch(
        "https://ic-crm-demo-api-default-rtdb.firebaseio.com/leads.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
    } catch (error) {
      console.log(error);
    }
    reset({
      ...data,
      firstName: "",
      lastName: "",
      emailId: "",
      phoneNum: "",
      country: "",
      city: "",
      state: "",
      streetAddress: "",
      pinCode: "",
    });
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
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="max-w-7xl md:px-8 mt-10 md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1  flex flex-col justify-center items-center">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-medium leading-6 text-gray-900">
                Enquire Form
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                fill up the details to get more information from our
                representative
              </p>
            </div>
          </div>
          <div className=" mt-5 md:mt-0 md:col-span-2">
            <div className="shadow bg-gray-100 overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-x-6 gap-y-3 ">
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
                    <InputBox
                      register={register}
                      name="state"
                      label={"State"}
                    />
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
              <div className="px-4 py-3  text-right sm:px-6 flex justify-center">
                <Button
                  onClick={handleSubmit(handleForm, handleError)}
                  className="btn-form"
                >
                  Send
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
