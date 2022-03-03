import React from "react";
import InputBox from "../common/InputBox";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";

const Home = () => {
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
            <form>
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
                  <Button
                    type="submit"
                    onClick={() => alert("Send Clicked")}
                    className="btn-form"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
