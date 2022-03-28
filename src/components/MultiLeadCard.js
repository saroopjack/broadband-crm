import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMultiLeadModal } from "../redux/slices/crm";

const MultiLeadCard = () => {
  const dispatch = useDispatch();
  const { checkedArr, multiLeadModal, leads } = useSelector(
    (state) => state.crm
  );
  const handleClick = (e) => {
    if (e.target.id === "bg") {
      dispatch(setMultiLeadModal(false));
    }
  };
  const cardData = () => {
    return leads.map((obj, i) => {
      return checkedArr.map((key, i) => {
        console.log(obj[key]);
        return (
          <div className="grid grid-cols-2 gap-3" key={i}>
            <div className="w-full break-all">Name</div>
            <div className="w-full break-all ">
              : {`${obj[key].firstName} ${obj[key].lastName}`}
            </div>
          </div>
        );
      });
    });
  };
  return (
    <div
      onClick={handleClick}
      className={`${
        multiLeadModal ? "" : "hidden"
      }fixed inset-0 overflow-hidden flex justify-center items-center`}
    >
      <div
        id="bg"
        className={`${
          multiLeadModal ? "" : "hidden"
        } absolute inset-0 bg-black opacity-0`}
      />
      <div
        className={`${
          multiLeadModal ? "" : "hidden"
        } absolute rounded-lg shadow bg-gray-300 p-4 w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12`}
      >
        <div className="flex justify-between">
          <h1 className="text-lg font-medium">Multiple Lead Detail</h1>
          <div
            className="cursor-pointer"
            onClick={() => dispatch(setMultiLeadModal(false))}
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
        </div>
        <div className="py-4 grid gap-3">{cardData()}</div>
      </div>
    </div>
  );
};

export default MultiLeadCard;
