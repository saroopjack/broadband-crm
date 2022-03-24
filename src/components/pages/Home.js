import React from "react";
import Personal from "../multi-step-form/Personal";
import Address from "../multi-step-form/Address";
import { useSelector } from "react-redux";

const Home = () => {
  const { page } = useSelector((state) => state.multiStep);
  const formTitle = ["Personal Info", "Address"];
  return (
    <>
      <div className=" flex justify-center items-center">
        <div className="max-w-7xl md:px-8  md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1  flex flex-col justify-center items-center">
            <div className="px-4 text-left sm:px-0">
              <h3 className="text-xl font-medium leading-6 text-gray-900">
                Enquire Form
              </h3>
              <p className="mt-1 text-sm  text-gray-600">
                fill up the details to get more information from our
                representative
              </p>
            </div>
          </div>
          <div className="md:col-span-2">
            <h1 className="text-center text-2xl py-4 font-medium ">
              {formTitle[page]}
            </h1>
            {page === 0 ? <Personal /> : <Address />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
