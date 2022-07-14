import Link from "next/link";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setIsLoggedIn(Cookies.get("isLoggedIn"));
  });
  const logoutHandler = async (e) => {
    Cookies.remove("isLoggedIn");
    Cookies.remove("authToken");
    Cookies.remove("userID");
    Cookies.remove("userName");
    Router.push("/");
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {isLoggedIn ? (
              <div>
                <li>
                  <Link href="/blogs">Blogs </Link>
                </li>
                <li>
                  <Link href="/profile">Profile </Link>
                </li>
                <li>
                  <Link href="/create">Create Blog</Link>
                </li>
                <li>
                  <Link href="/profile/myblogs">My Blogs </Link>
                </li>
                <li>
                  <button
                    class=" hover:bg-red-400 text-gray-900  py-2 px-4 rounded-full"
                    onClick={logoutHandler}
                  >
                    Log out
                  </button>
                </li>
              </div>
            ) : (
              <div>
                <li>
                  <Link href="/signin">Sign in </Link>
                </li>
                <li>
                  <Link href="/signup">Sign up </Link>
                </li>
              </div>
            )}
          </ul>
        </div>
        <div className="btn btn-ghost normal-case text-lg font-sans text-indigo-600 font-blod ">
          <Link href="/">BlogPlus+</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        {isLoggedIn ? (
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link href="/blogs">Blogs </Link>
            </li>
            <li>
              <Link href="/profile">Profile </Link>
            </li>
            <li>
              <Link href="/create">Create Blog </Link>
            </li>
            <li>
              <Link href="/profile/myblogs">My Blogs </Link>
            </li>
            <li>
              <button
                class=" hover:bg-red-400 text-gray-900  py-2 px-4 rounded-full"
                onClick={logoutHandler}
              >
                Log out
              </button>
            </li>
          </ul>
        ) : (
          <ul className="menu menu-horizontal p-0 ">
            <li>
              <Link href="/signin">Sign in </Link>
            </li>
            <li>
              <Link href="/signup">Sign up</Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
