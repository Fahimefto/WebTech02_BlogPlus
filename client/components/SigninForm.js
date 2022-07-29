import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router, { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../hooks/useAuth";

const SigninForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  if (isLoggedIn) {
    Router.push("/blogs");
  }
  const signinHandler = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/auth/login";
    try {
      const results = await axios.post(
        url,
        {
          user_email: email,
          user_password: password,
        },
        { withCredentials: "include" }
      );
      if (results.data.auth == true) {
        toast(results.data.message);
        setMessage(results.data.message);

        const token = results.data.token;
        const userId = results.data.userId;
        const userName = results.data.userName;
        Cookies.set("userID", userId);
        Cookies.set("authToken", token);
        Cookies.set("userName", userName);
        Cookies.set("isLoggedIn", true);

        Router.push("/blogs");
        setIsLoggedIn(true);
      } else {
        toast(results.data.message);
        setMessage(results.data.message);
      }
    } catch (error) {
      toast(error.message);
      setMessage(error.message);
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        toastStyle={{ backgroundColor: "cyan" }}
      />

      <div className="max-w-screen-xl  px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
            Sign in User Account
          </h1>

          <p className="max-w-md mx-auto mt-4 text-center text-gray-500">
            {message}
          </p>

          <form
            onSubmit={signinHandler}
            className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
          >
            <p className="text-lg font-medium">Sign in to your account</p>

            <div>
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>

              <div className="relative mt-1">
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>

              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />

                <span className="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg"
            >
              Sign in
            </button>

            <p className="text-sm text-center text-gray-500">
              No account?
              <Link className="underline" href="/signup">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SigninForm;
