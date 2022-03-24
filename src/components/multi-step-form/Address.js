import React from "react";
import InputBox from "../common/InputBox";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/slices/multiStep";
import {
  setCity,
  setCountry,
  setPinCode,
  setState,
  setStreetAddress,
} from "../../redux/slices/formAddressData";
import {
  setEmailId,
  setFirstName,
  setLastName,
  setPhoneNum,
} from "../../redux/slices/formPersonalData";

const Address = () => {
  const form = useSelector((state) => state.formPersonal);
  const formAddress = useSelector((state) => state.formAddress);
  const formData = { ...form, ...formAddress };
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ defaultValues: formAddress });
  const registerOptions = {
    pinCode: {
      pattern: {
        value: /^[1-9][0-9]{5}$/g,
        message: "Enter valid pincode",
      },
    },
  };
  const handleSend = async (data) => {
    dispatch(setCountry(data.country));
    dispatch(setStreetAddress(data.streetAddress));
    dispatch(setCity(data.city));
    dispatch(setState(data.state));
    dispatch(setPinCode(data.pinCode));
    console.log(formData);
    try {
      const res = await fetch(
        "https://ic-crm-demo-api-default-rtdb.firebaseio.com/leads.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (res) {
        dispatch(setFirstName(""));
        dispatch(setLastName(""));
        dispatch(setEmailId(""));
        dispatch(setPhoneNum(""));
        dispatch(setCountry("india"));
        dispatch(setStreetAddress(""));
        dispatch(setCity(""));
        dispatch(setState(""));
        dispatch(setPinCode(""));
        dispatch(setPage(0));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const countryList = ["india", "china", "USA"];
  return (
    <div className="shadow bg-gray-100 overflow-hidden sm:rounded-md max-w-md mx-auto">
      <div className="px-4 py-5 sm:p-6">
        <div className="grid grid-cols-6 gap-x-6 gap-y-3 ">
          <div className="col-span-6 ">
            <Dropdown
              register={register}
              name="country"
              label="Country"
              optionList={countryList}
            />
            <div className="h-4"></div>
          </div>

          <div className="col-span-6">
            <InputBox
              register={register}
              name="streetAddress"
              label={"Street Adress"}
            />
            <div className="h-4"></div>
          </div>
          <div className="col-span-6 sm:col-span-6">
            <InputBox register={register} name="city" label={"City"} />
            <div className="h-4"></div>
          </div>
          <div className="col-span-6 ">
            <InputBox register={register} name="state" label={"State"} />
            <div className="h-4"></div>
          </div>
          <div className="col-span-6 ">
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
      <div className="px-4 py-3  text-right sm:px-6 flex justify-center gap-x-4">
        <Button
          onClick={() => {
            dispatch(setPage(0));
          }}
          className="btn-form"
        >
          Back
        </Button>
        <Button onClick={handleSubmit(handleSend)} className="btn-form">
          Send
        </Button>
      </div>
    </div>
  );
};

export default Address;
