import React from "react";
import Table from "./common/Table";

const Sold = () => {
  const tableHeadingList = ["Name", "E mail", "Phone"];
  return (
    <div className="min-h-full">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Sold</h1>
        </div>
      </header>
      <main>
        <Table tableHeader="Sold" tableHeadingList={tableHeadingList} />
      </main>
    </div>
  );
};

export default Sold;
