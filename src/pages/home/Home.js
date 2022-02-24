import React from "react";
import TextBox from "../../components/common/TextBox";
import Button from "../../components/common/Button";

const Home = () => {
  return (
    <section className="bg-slate-300 h-screen">
      <div className="flex justify-center bg-slate-700 py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          />
        </svg>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-y-10 sm:gap-x-5 md:gap-x-20 lg:gap-x-40  items-center h-[calc(100%-5rem)]">
        <div className="bg-neutral-500 px-8 py-6 shadow rounded flex flex-col justify-center items-center">
          <h1 className="block text-center text-3xl font-bold pb-6">enquiry</h1>
          <TextBox
            name={"name : "}
            containerStyle={`flex my-2 justify-between min-w-full`}
          />
          <TextBox
            name={"number : "}
            containerStyle={`flex my-2 justify-between min-w-full`}
          />
          <TextBox
            name={"Email : "}
            containerStyle={`flex my-2 justify-between min-w-full`}
          />
          <Button
            containerStyle={`text-center py-2 `}
            buttonStyle={`bg-gray-800 text-white px-4 py-1 hover:bg-gray-300 hover:text-slate-900`}
          >
            Submit
          </Button>
        </div>
        <div className="bg-neutral-500 p-6 shadow rounded flex flex-col justify-center items-center">
          <h1 className="block text-center text-3xl font-bold pb-4">
            BroadBand
          </h1>
          <TextBox
            name={"Username : "}
            containerStyle={`flex my-2 justify-between min-w-full`}
          />
          <TextBox
            name={"Password : "}
            containerStyle={`flex my-2 justify-between min-w-full`}
          />
          <Button
            containerStyle={`text-center py-2 `}
            buttonStyle={`bg-gray-800 text-white px-4 py-1 hover:bg-gray-300 hover:text-slate-900`}
          >
            Login
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Home;
