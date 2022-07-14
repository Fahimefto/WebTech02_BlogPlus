import Cookies from "js-cookie";
import Blogs from "../../components/Blogs";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../../hooks/useAuth";

const Myblogs = () => {
  const [username, setUsername] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const token = Cookies.get("authToken");
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const userid = parseInt(Cookies.get("userID"));
  useEffect(() => {
    if (isLoggedIn === undefined) {
      Router.push("/signin");
    }
    setUsername(Cookies.get("userName"));

    const url = "http://localhost:5000/api/profile/" + userid;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setBlogs(res.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <section className="text-indigo-600 ">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Blogs of - {username}
          </h2>

          <p className="mt-4 text-gray-800">Here is your all posted Blog</p>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {isLoggedIn &&
            blogs.map((blog) => (
              <div
                className="block p-8 transition border  border-indigo-800 shadow-xl rounded-xl hover:shadow-indi-500/10 hover:border-indi-500/10"
                key={blog.blog_id}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10 text-indigo-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>

                <h3 className="mt-4 text-xl font-bold text-indigo-600">
                  {blog.blog_tittle}
                </h3>

                <p className="mt-1 text-sm text-gray-800">
                  Author ID: {blog.user_id}
                </p>
                <p className="mt-1 text-md text-indigo-800">
                  <Link href={"/blogs/" + blog.blog_id}>
                    Click Here to Read
                  </Link>
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Myblogs;
