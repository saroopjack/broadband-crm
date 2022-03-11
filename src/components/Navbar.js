import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../components/common/Button";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/crm/slice";

const Navbar = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const navigate = useNavigate();
  let location = useLocation().pathname;
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("user signed out");
        dispatch(setUser(null));
        navigate("/login");
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div className="bg-slate-700">
      <div className="py-3 px-3 sm:px-6 max-w-7xl mx-auto flex justify-between items-center ">
        <div id="navimg" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
            />
          </svg>
        </div>
        <div
          id="navItems"
          className={`${
            location === "/" || location === "/login" ? "hidden" : "block"
          }`}
        >
          <ul className="flex flex-wrap gap-x-4 text-white">
            <Link to={"dashboard"} className="hover:scale-110 cursor-pointer">
              Dashboard
            </Link>
            <Link to={"leads"} className="hover:scale-110 cursor-pointer">
              Leads
            </Link>
            <Link to={"cancelled"} className="hover:scale-110 cursor-pointer">
              Cancelled
            </Link>
            <Link to={"sold"} className="hover:scale-110 cursor-pointer">
              Sold
            </Link>
            <Link to={"deleted"} className="hover:scale-110 cursor-pointer">
              Deleted
            </Link>
          </ul>
        </div>
        <div
          id="admin"
          className={`${
            location === "/" || location === "/login" ? "hidden" : "block"
          }`}
        >
          <Button
            onClick={handleSignOut}
            className={"font-bold text-white hover:text-gray-900"}
          >
            SignOut
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
