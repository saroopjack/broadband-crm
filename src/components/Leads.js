import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLeads } from "../redux/crm/slice";
import Table from "./common/Table";
import Button from "../components/common/Button";

const Leads = () => {
  const dispatch = useDispatch();
  const { leads } = useSelector((state) => state.crm);
  const fetchData = async () => {
    const res = await fetch(
      "https://ic-crm-demo-api-default-rtdb.firebaseio.com/leads.json"
    );
    const data = await res.json();
    dispatch(setLeads([data]));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const tableHeadingList = ["Name", "E mail", "Phone"];
  return (
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
          tableHeadingList={tableHeadingList}
        />
      </main>
    </div>
  );
};

export default Leads;
