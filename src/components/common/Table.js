import React from "react";

const Table = ({ tableHeadingList, data, tableHeader }) => {
  return (
    <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="table-overflow-x   pt-6 ">
        <div className="py-2 px-4 bg-gray-400 flex justify-between">
          <h1>{tableHeader}</h1>
          <div className="flex gap-x-2 items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
        <table className="min-w-full">
          <thead className="bg-gray-200">
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
            {data?.map((person, i) => (
              <tr key={i} className="border-b">
                <td className="pl-6 py-4 whitespace-nowrap">{person.name}</td>
                <td className="pl-6 py-4 whitespace-nowrap">{person.email}</td>
                <td className="pl-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {person.phone}
                </td>
                <td className="pl-6 py-4  text-right text-sm font-medium">
                  <div className="text-gray-600 hover:text-gray-900 cursor-pointer">
                    Edit
                  </div>
                </td>
                <td className="pl-6 pr-6 py-4 text-right text-sm font-medium">
                  <div className="text-gray-600 hover:text-gray-900 cursor-pointer">
                    Delete
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
