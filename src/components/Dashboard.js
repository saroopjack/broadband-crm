import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashBoardCard from "./common/DashBoardCard";
import Loader from "./Loader";
import { setLoadingIndicator } from "../redux/crm/slice";

const Dashboard = () => {
  const { loadingIndicator } = useSelector((state) => state.crm);
  const dispatch = useDispatch();
  const [allData, setAllData] = useState();
  const fetchAllData = async () => {
    try {
      dispatch(setLoadingIndicator(true));
      const leads = fetch(
        "https://ic-crm-demo-api-default-rtdb.firebaseio.com/leads.json"
      );
      const cancelled = fetch(
        "https://ic-crm-demo-api-default-rtdb.firebaseio.com/cancelled.json"
      );
      const sold = fetch(
        "https://ic-crm-demo-api-default-rtdb.firebaseio.com/sold.json"
      );
      const deleted = fetch(
        "https://ic-crm-demo-api-default-rtdb.firebaseio.com/deletedLeads.json"
      );
      const leadsRes = await leads;
      const cancelledRes = await cancelled;
      const soldRes = await sold;
      const deletedRes = await deleted;

      const leadsData = leadsRes.json();
      const cancelledData = cancelledRes.json();
      const soldData = soldRes.json();
      const deletedData = deletedRes.json();
      setAllData({
        leads: await leadsData,
        cancelled: await cancelledData,
        sold: await soldData,
        deleted: await deletedData,
      });
      dispatch(setLoadingIndicator(false));
    } catch (e) {
      dispatch(setLoadingIndicator(false));
      console.log(e);
    }
  };

  useEffect(() => {
    fetchAllData();
    return () => {
      fetchAllData();
    };
  }, []);
  return (
    <>
      {loadingIndicator && <Loader />}
      <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          </div>
        </header>
        <main className="p-4 max-w-5xl mx-auto grid grid-cols-6 gap-4">
          <div className="col-span-6 sm:col-span-3">
            <DashBoardCard
              name="Active Leads"
              activeCount={allData && Object.keys(allData.leads).length}
            />
          </div>
          <div className="col-span-6 sm:col-span-3 ">
            <DashBoardCard
              name="Leads Sold"
              activeCount={allData && Object.keys(allData.cancelled).length}
            />
          </div>
          <div className="col-span-6 sm:col-span-3 ">
            <DashBoardCard
              name="Leads Cancelled"
              activeCount={allData && Object.keys(allData.sold).length}
            />
          </div>
          <div className="col-span-6 sm:col-span-3 ">
            <DashBoardCard
              name="Leads Deleted"
              activeCount={allData && Object.keys(allData.deleted).length}
            />
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
