import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteLeadModal, setManualLeadfetch } from "../redux/slices/crm";
import Button from "./common/Button";

const LeadDelete = () => {
  const dispatch = useDispatch();
  const { deleteLeadModal, singleLeadData, singleLeadKey, manualLeadfetch } =
    useSelector((state) => state.crm);
  const handleClick = (e) => {
    if (e.target.id === "bg") {
      dispatch(setDeleteLeadModal(false));
    }
  };
  const handleDelete = async () => {
    await fetch(
      `https://ic-crm-demo-api-default-rtdb.firebaseio.com/leads/${singleLeadKey}.json`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const res = await fetch(
      `https://ic-crm-demo-api-default-rtdb.firebaseio.com/deletedLeads/${singleLeadKey}.json`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(singleLeadData),
      }
    );
    if (res) {
      dispatch(setDeleteLeadModal(false));
      dispatch(setManualLeadfetch(!manualLeadfetch));
    }
  };
  return (
    <div
      onClick={handleClick}
      className={`${
        deleteLeadModal ? "" : "hidden"
      }fixed inset-0 overflow-hidden flex justify-center items-center`}
    >
      <div
        id="bg"
        className={`${
          deleteLeadModal ? "" : "hidden"
        } absolute inset-0 bg-black opacity-0`}
      />
      <div
        className={`${
          deleteLeadModal ? "" : "hidden"
        } absolute rounded-lg shadow bg-gray-300 p-4 w-11/12 sm:w-10/12 md:w-8/12 lg:w-7/12 max-w-xs`}
      >
        <div className="text-center font-semibold">
          <h1 className="text-xl py-4">Are you sure?</h1>
          <div className="py-4 flex gap-x-4 justify-center">
            <Button
              className="btn-cancel"
              onClick={() => dispatch(setDeleteLeadModal(false))}
            >
              Cancel
            </Button>
            <Button className="btn-delete" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDelete;
