import React, { useState } from "react";
import InputBox from "../common/InputBox";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";

const Home = () => {
  const [leads, setLeads] = useState({
    firstName: "",
    lastName: "",
    phoneNum: "",
    emailId: "",
    streetAddress: "",
    country: "india",
    state: "",
    city: "",
    pinCode: "",
  });
  const getLeadData = (e) => {
    setLeads({ ...leads, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const { firstName, lastName, phoneNum } = leads;
    try {
      if (firstName && lastName && phoneNum) {
        const response = await fetch(
          "https://ic-crm-demo-api-default-rtdb.firebaseio.com/leads.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(leads),
          }
        );

        if (response) {
          setLeads({
            firstName: "",
            lastName: "",
            phoneNum: "",
            emailId: "",
            streetAddress: "",
            country: "",
            state: "",
            city: "",
            pinCode: "",
          });
        }
      } else {
        alert("enter name and phone number");
      }
    } catch (error) {
      console.log(error);
    }
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
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <InputBox
                      required="required"
                      name="firstName"
                      value={leads.firstName}
                      label={"First name"}
                      onChange={getLeadData}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <InputBox
                      name="lastName"
                      value={leads.lastName}
                      label={"Last name"}
                      onChange={getLeadData}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <InputBox
                      name="emailId"
                      value={leads.emailId}
                      label={"Email Address"}
                      onChange={getLeadData}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Dropdown
                      name="country"
                      value={leads.country}
                      label="Country"
                      optionList={countryList}
                      onChange={getLeadData}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <InputBox
                      name="phoneNum"
                      value={leads.phoneNum}
                      label={"Phone Number"}
                      onChange={getLeadData}
                    />
                  </div>
                  <div className="col-span-6">
                    <InputBox
                      name="streetAddress"
                      value={leads.streetAddress}
                      label={"Street Adress"}
                      onChange={getLeadData}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <InputBox
                      name="city"
                      value={leads.city}
                      label={"City"}
                      onChange={getLeadData}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <InputBox
                      name="state"
                      value={leads.state}
                      label={"State"}
                      onChange={getLeadData}
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <InputBox
                      name="pinCode"
                      value={leads.pinCode}
                      label={"Pincode"}
                      onChange={getLeadData}
                    />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3  text-right sm:px-6 flex justify-center">
                <Button onClick={handleSubmit} className="btn-form">
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
