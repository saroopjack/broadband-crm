import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
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

const Leads = () => {
  const dispatch = useDispatch();
  const { leads, loadingIndicator } = useSelector((state) => state.crm);

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
  }, []);
  const tableHeadingList = ["Name", "E mail", "Phone"];
  const handleRowData = (obj, key) => {
    dispatch(setSingleLeadData(obj));
    dispatch(setSingleLeadKey(key));
    dispatch(setTableRowModal(true));
  };
  return (
    <>
      <LeadCard />
      {loadingIndicator && <Loader />}
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
            <div className="text-3xl font-bold text-gray-900">Leads</div>
            <div className="flex items-center gap-x-2">
              <Button onClick={fetchData} className="btn-form">
                Refresh
              </Button>
              <Button className="btn-form">Add</Button>
            </div>
          </div>
        </header>
        <main>
          <Table
            data={leads}
            tableHeader="Leads"
            tableRowClick={handleRowData}
            tableHeadingList={tableHeadingList}
          />
        </main>
      </div>
    </>
  );
};

export default Leads;
