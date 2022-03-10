import React from "react";
import InputBox from "../components/common/InputBox";
import Dropdown from "../components/common/Dropdown";
import Button from "../components/common/Button";

const LeadModal = () => {
  const countryList = ["india", "china", "USA"];
  return (
    <div
      className="fixed z-10 overflow-y-auto  top-0 w-full left-0 "
      id="modal"
    >
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0">
          <div
            id="modalClose"
            className="absolute inset-0 bg-gray-900 opacity-75"
          />
        </div>
        <div className="inline-block align-center bg-white rounded-lg text-left shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className=" md:col-span-2">
            <div className="shadow bg-gray-100 overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <InputBox label={"First name"} />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <InputBox label={"Last name"} />
                  </div>
                  <div className="col-span-6 sm:col-span-4">
                    <InputBox label={"Email Address"} />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <Dropdown label="Country" optionList={countryList} />
                  </div>
                  <div className="col-span-6">
                    <InputBox label={"Street Adress"} />
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <InputBox label={"City"} />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <InputBox label={"State"} />
                  </div>
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <InputBox label={"Pincode"} />
                  </div>
                </div>
              </div>
              <div className="px-4 py-3  text-right sm:px-6 flex justify-center">
                <Button className="btn-form">Submit</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadModal;
