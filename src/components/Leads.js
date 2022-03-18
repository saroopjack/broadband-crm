import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setAddLeadModal,
  setDeleteLeadModal,
  setEditLeadModal,
  setLeads,
  setLoadingIndicator,
  setSingleLeadData,
  setSingleLeadKey,
  setTableRowModal,
} from "../redux/crm/slice";
import Table from "./common/Table";
import Button from "../components/common/Button";
import Loader from "../components/Loader";
import LeadCard from "./LeadCard";
import LeadDelete from "./LeadDelete";
import LeadEdit from "./LeadEdit";
import AddLead from "./AddLead";

const Leads = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const { leads, loadingIndicator, manualLeadfetch } = useSelector(
    (state) => state.crm
  );
  const fetchData = async () => {
    dispatch(setLoadingIndicator(true));
    const res = await fetch(
      "https://ic-crm-demo-api-default-rtdb.firebaseio.com/leads.json"
    );
    const data = await res.json();
    if (res) {
      dispatch(setLoadingIndicator(false));
    }
    dispatch(setLeads([data]));
  };
  useEffect(() => {
    fetchData();
  }, [manualLeadfetch]);

  const tableHeadingList = ["Name", "E mail", "Phone"];
  const tableRowModalHandler = (obj, key, modalState) => {
    dispatch(setSingleLeadData(obj));
    dispatch(setSingleLeadKey(key));
    dispatch(modalState(true));
  };
  const searchTermData = leads?.map((obj) => {
    const keys = Object.keys(obj).filter((key) =>
      `${obj[key].firstName} ${obj[key].lastName}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    const reduced = keys.reduce((acc, key) => {
      if (!acc[key]) {
        acc[key] = key;
      }
      if (acc[key]) {
        acc[key] = obj[key];
      }
      return acc;
    }, {});
    return reduced;
  });
  return (
    <>
      <LeadCard />
      <LeadDelete />
      <LeadEdit />
      <AddLead />
      {loadingIndicator && <Loader />}
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="flex gap-x-3 items-center">
              <div className="text-3xl font-bold text-gray-900">Leads</div>
              <input
                type="search"
                placeholder="Search By Name"
                className="py-1 px-2 border border-gray-500 rounded-md"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-x-2">
              <Button onClick={fetchData} className="btn-form">
                Refresh
              </Button>
              <Button
                onClick={() => dispatch(setAddLeadModal(true))}
                className="btn-form"
              >
                Add
              </Button>
            </div>
          </div>
        </header>
        <main>
          <Table
            data={searchTermData}
            tableHeader="Leads"
            tableRowClick={(obj, key) =>
              tableRowModalHandler(obj, key, setTableRowModal)
            }
            deleteData={(obj, key) =>
              tableRowModalHandler(obj, key, setDeleteLeadModal)
            }
            editData={(obj, key) =>
              tableRowModalHandler(obj, key, setEditLeadModal)
            }
            tableHeadingList={tableHeadingList}
          />
        </main>
      </div>
    </>
  );
};

export default Leads;
