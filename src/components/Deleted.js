import React, { useEffect, useState } from "react";
import Table from "./common/Table";
import { useDispatch, useSelector } from "react-redux";
import { setDeleted, setLoadingIndicator } from "../redux/slices/crm";
import Loader from "./Loader";

const Deleted = () => {
  const { deleted, loadingIndicator } = useSelector((state) => state.crm);
  const dispatch = useDispatch();
  const fetchData = async () => {
    dispatch(setLoadingIndicator(true));
    const res = await fetch(
      "https://ic-crm-demo-api-default-rtdb.firebaseio.com/deletedLeads.json"
    );
    if (res) {
      dispatch(setLoadingIndicator(false));
    }
    const data = await res.json();
    dispatch(setDeleted([data]));
  };
  useEffect(() => {
    fetchData();
  }, []);
  const tableHeadingList = ["Name", "E mail", "Phone"];
  return (
    <>
      {loadingIndicator && <Loader />}
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Deleted</h1>
          </div>
        </header>
        <main>
          <Table
            data={deleted}
            tableHeader="Deleted"
            tableHeadingList={tableHeadingList}
          />
        </main>
      </div>
    </>
  );
};

export default Deleted;
