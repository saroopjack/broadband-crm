import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTableRowModal } from "../redux/crm/slice";

const LeadCard = () => {
  const { singleLeadData, tableRowModal } = useSelector((state) => state.crm);
  console.log(singleLeadData);
  const dispatch = useDispatch();
  const cardRow = (name, value) => {
    // console.log("forloop", name, value);
    return (
      <>
        <div className="grid grid-cols-2 gap-3">
          <div className="w-full break-all">{name}</div>
          <div className="w-full break-all ">: {value}</div>
        </div>
      </>
    );
  };
  const handleClick = (e) => {
    if (e.target.id === "bg") {
      dispatch(setTableRowModal(false));
    }
  };
  const handleRowData = (singleLeadData) => {
    Object.keys(singleLeadData).map((oneKey, i) => {
      return <div key={i}>{singleLeadData[oneKey]}</div>;
    });

    // for (let key in singleLeadData) {
    //   console.log("forloop", key, singleLeadData[key]);
    // cardRow(key, singleLeadData[key]);
    // <>
    //   <div className="grid grid-cols-2 gap-3">
    //     <div className="w-full break-all">{key}</div>
    //     <div className="w-full break-all ">: {singleLeadData[key]}</div>
    //   </div>
    // </>;
  };

  return (
    <div
      onClick={handleClick}
      className={`${
        tableRowModal ? "" : "hidden"
      }fixed inset-0 overflow-hidden flex justify-center items-center`}
    >
      <div
        id="bg"
        className={`${
          tableRowModal ? "" : "hidden"
        } absolute inset-0 bg-black opacity-0`}
      />
      <div
        className={`${
          tableRowModal ? "" : "hidden"
        } absolute rounded-lg shadow bg-gray-300 p-4 w-11/12 `}
      >
        <div className="flex justify-between">
          <h1 className="text-lg font-medium">Lead Detail</h1>
          <div onClick={() => dispatch(setTableRowModal(false))}>
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
        <div className="py-4 grid gap-3">
          {/* {handleRowData(singleLeadData)} */}
          {Object.keys(singleLeadData).map((oneKey, i) => {
            return (
              <div key={oneKey} className="grid grid-cols-2 gap-3">
                <div className="w-full break-all">{oneKey}</div>
                <div className="w-full break-all ">
                  : {singleLeadData[oneKey]}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeadCard;
