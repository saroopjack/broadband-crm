import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "./Button";

const Table = ({
  tableHeadingList,
  data,
  tableRowClick,
  editData,
  deleteData,
}) => {
  let location = useLocation().pathname;
  const [newData, setNewData] = useState();
  const [page, setPage] = useState(0);
  const [singlePageData, setSinglePageData] = useState([]);
  const pagination = (data) => {
    const dataObj = data[0];
    const itemsPerPage = 4;
    const pages = Math.ceil(Object.keys(dataObj).length / itemsPerPage);
    const newData = Array.from({ length: pages }, (_, index) => {
      const start = index * itemsPerPage;
      for (let obj of data) {
        const objKeys = Object.keys(obj).slice(start, start + itemsPerPage);
        return [
          objKeys.reduce((acc, key) => {
            if (!acc[key]) {
              acc[key] = key;
            }
            if (acc[key]) {
              acc[key] = obj[key];
            }
            return acc;
          }, {}),
        ];
      }
    });
    return newData;
  };
  useEffect(() => {
    if (!newData) return;
    setSinglePageData(newData[page]);
  }, [newData, page]);
  useEffect(() => {
    if (data.length !== 0) {
      setNewData(pagination(data));
    }
  }, [data]);
  console.log(newData);
  const handlePaginateBtn = (index) => {
    setPage(index);
  };
  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > newData?.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = newData?.length - 1;
      }
      return prevPage;
    });
  };

  return (
    <>
      <div className="sm:px-6 py-6 lg:px-8 max-w-7xl mx-auto">
        <div className="table-overflow-x">
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
                <th
                  className={`${
                    location === "/leads" ? "" : "hidden"
                  } px-6 py-3 `}
                >
                  <span className="hidden">view</span>
                </th>
                <th
                  className={`${
                    location === "/leads" ? "" : "hidden"
                  } px-6 py-3 `}
                >
                  <span className="hidden">Edit</span>
                </th>
                <th
                  className={`${
                    location === "/leads" ? "" : "hidden"
                  } px-6 py-3 `}
                >
                  <span className="hidden">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-gray-100">
              {singlePageData?.map((ele) => {
                const keys = Object.keys(ele);
                const tr = keys.map((key, i) => {
                  return (
                    <tr key={i} className="border-b">
                      <td className="pl-6 py-3 whitespace-nowrap">
                        {`${ele[key].firstName} ${ele[key].lastName}`}
                      </td>
                      <td className="pl-6 py-3 whitespace-nowrap">
                        {ele[key].emailId}
                      </td>
                      <td className="pl-6 py-3 whitespace-nowrap text-sm text-gray-500">
                        {ele[key].phoneNum}
                      </td>
                      <td
                        className={`${
                          location === "/leads" ? "" : "hidden"
                        } pl-6 py-3  text-right text-sm font-medium`}
                      >
                        <div
                          onClick={() => tableRowClick(ele[key], key)}
                          className="text-gray-600 hover:text-gray-900 cursor-pointer"
                        >
                          view
                        </div>
                      </td>
                      <td
                        className={`${
                          location === "/leads" ? "" : "hidden"
                        } pl-6 py-3  text-right text-sm font-medium`}
                      >
                        <div
                          onClick={() => editData(ele[key], key)}
                          className="text-gray-600 hover:text-gray-900 cursor-pointer"
                        >
                          Edit
                        </div>
                      </td>
                      <td
                        className={`${
                          location === "/leads" ? "" : "hidden"
                        } pl-6 py-3 pr-6 text-right text-sm font-medium`}
                      >
                        <div
                          onClick={() => deleteData(ele[key], key)}
                          className="text-gray-600 hover:text-gray-900 cursor-pointer"
                        >
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
          {data.length && (
            <div className="min-w-full flex justify-center items-center  bg-gray-100 py-1">
              <Button className="pagination-next-prev-btn" onClick={prevPage}>
                Prev
              </Button>
              {newData?.map((obj, index) => {
                return (
                  <Button
                    onClick={() => handlePaginateBtn(index)}
                    key={index}
                    className={`pagination-btn ${
                      page === index ? "bg-gray-800" : "bg-slate-500"
                    }`}
                  >
                    {index + 1}
                  </Button>
                );
              })}
              <Button className="pagination-next-prev-btn" onClick={nextPage}>
                Next
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Table;
