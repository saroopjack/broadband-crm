import React from "react";

const Table = ({ tableHeadingList, data, tableHeader }) => {
  const editData = (obj, key) => {
    console.log(key);
  };
  const tableRowData = (obj, key) => {
    console.log(obj, key);
  };
  return (
    <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="table-overflow-x pt-6 ">
        <table className="min-w-full">
          <thead className="bg-gray-300">
            <tr>
              {tableHeadingList?.map((heading, i) => {
                return (
                  <th
                    key={i}
                    scope="col"
                    className="pl-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  >
                    {heading}
                  </th>
                );
              })}
              <th className="relative px-6 py-3 ">
                <span className="hidden">Edit</span>
              </th>
              <th className="relative px-6 py-3 ">
                <span className="hidden">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-100">
            {data?.map((ele) => {
              const keys = Object.keys(ele);
              const tr = keys.map((key, i) => {
                return (
                  <tr
                    onClick={() => tableRowData(ele[key], key)}
                    key={i}
                    className="border-b"
                  >
                    <td className="pl-6 py-4 whitespace-nowrap">
                      {`${ele[key].firstName} ${ele[key].lastName}`}
                    </td>
                    <td className="pl-6 py-4 whitespace-nowrap">
                      {ele[key].emailId}
                    </td>
                    <td className="pl-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {ele[key].phoneNum}
                    </td>
                    <td className="pl-6 py-4  text-right text-sm font-medium">
                      <div
                        onClick={() => editData(ele[key], key)}
                        className="text-gray-600 hover:text-gray-900 cursor-pointer"
                      >
                        Edit
                      </div>
                    </td>
                    <td className="pl-6 pr-6 py-4 text-right text-sm font-medium">
                      <div className="text-gray-600 hover:text-gray-900 cursor-pointer">
                        Delete
                      </div>
                    </td>
                  </tr>
                );
              });
              return tr;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
