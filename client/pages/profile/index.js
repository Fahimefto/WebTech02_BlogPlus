import Image from "next/image";
import Link from "next/link";
import pic from "../../public/profile.png";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
const UserDetails = () => {
  const [user, setUser] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const userCookie = Cookies.get("userName");
    setUser(userCookie);
    setUserName(Cookies.get("userID"));
  }, []);

  return (
    <section className=" py-20">
      <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div className="w-full lg:max-w-md">
              <h2 className="mb-4 text-3xl text-indigo-600 font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                {user}
              </h2>
              <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                You can only update your Username .
              </p>
              <ul>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    className="h-8 w-8 text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />{" "}
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  <span className="font-medium text-gray-500">
                    Username : {user}
                  </span>
                </li>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    className="h-8 w-8 text-indigo-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
                    <polyline points="3 7 12 13 21 7" />
                  </svg>
                  <span className="font-medium text-gray-500">
                    User ID: {userName}
                  </span>
                </li>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    className="h-8 w-8 text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    />{" "}
                    <line x1="12" y1="8" x2="12" y2="16" />{" "}
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                  <span className="font-medium text-gray-500">
                    <Link href="/create">Create A Blog</Link>
                  </span>
                </li>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <svg
                    class="h-8 w-8 text-indigo-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />{" "}
                    <line x1="8" y1="8" x2="12" y2="8" />{" "}
                    <line x1="8" y1="12" x2="12" y2="12" />{" "}
                    <line x1="8" y1="16" x2="12" y2="16" />
                  </svg>
                  <span className="font-medium text-gray-500">
                    <Link href="/profile/myblogs">My All Blogs</Link>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
            <div className="mx-auto sm:max-w-sm lg:max-w-full">
              <Image src={pic} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetails;
