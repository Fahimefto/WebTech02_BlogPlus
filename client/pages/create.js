import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import pic from "../public/profile.png";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router, { useRouter } from "next/router";

const CreateBlog = () => {
  const [tittle, setTittle] = useState("");
  const [body, setBody] = useState("");
  const [userID, setUserID] = useState("");
  const [token, setToken] = useState("");
  useEffect(() => {
    setUserID(Cookies.get("userID"));

    setToken(Cookies.get("authToken"));
  }, []);

  const createPost = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/api/blogs/";
    try {
      const results = await axios.post(
        url,

        {
          user_id: userID,
          blog_tittle: tittle,
          blog_post: body,
        },
        {
          headers: {
            auth: token,
          },
        }
      );
      if (results.data.success === true) {
        console.log(results.data.message);
        toast(results.data.message);
        Router.push("/profile/myblogs");
      }
    } catch (error) {
      console.log(error.message);
      toast(error.message);
    }
  };
  return (
    <>
      <section className="py-20 ">
        <ToastContainer
          position="top-center"
          autoClose={3000}
          toastStyle={{ backgroundColor: "cyan" }}
        />
        <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div className="w-full lg:max-w-md">
                <h2 className="mb-4 text-3xl text-indigo-600 font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                  Create A Blog
                </h2>
                <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                  Please Fill Up the all boxes
                </p>
                <ul>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <form onSubmit={createPost}>
                      <div className="tasksInput mb-5 border-spacing-1">
                        <input
                          placeholder="Tittle"
                          type="text"
                          className="input input-bordered input-primary w-full max-w-xs "
                          value={tittle}
                          onChange={(e) => setTittle(e.target.value)}
                        />
                      </div>
                      <input
                        placeholder="Description"
                        type="text"
                        className="input input-bordered input-primary w-full max-w-xs"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                      />
                      <button class="btn btn-primary mt-8" type="submit">
                        Post
                      </button>
                    </form>
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
    </>
  );
};

export default CreateBlog;
