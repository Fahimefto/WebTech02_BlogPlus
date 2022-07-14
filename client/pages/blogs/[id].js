import { useRouter } from "next/router";
import Router from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const token = Cookies.get("authToken");
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  useEffect(() => {
    if (id) {
      const url = "http://localhost:5000/api/blogs/" + id;
      console.log(url);
      axios
        .get(url, {
          headers: {
            auth: token,
          },
        })
        .then((res) => {
          setBlogs(res.data);
        })
        .catch((error) => console.log(error.message));
    }
  }, [id]);
  return (
    <section className="flex items-center justify-center py-10 text-white bg-white sm:py-16 md:py-24 lg:py-32">
      {blogs.map((blog) => (
        <div className="relative max-w-3xl px-10 text-center text-white auto lg:px-0">
          {" "}
          key={blog.blog_id}
          <div className="flex flex-col w-full md:flex-row">
            <div className="flex justify-content">
              <h1 className="text-left text-indigo-500 font-bold text-3xl">
                {blog.blog_tittle}
              </h1>
            </div>

            <div className="relative top-0 right-0  mt-5 md:-mt-5 md:absolute md:h-96"></div>
          </div>
          <div className="my-5 border-b border-gray-300 lg:my-24"></div>
          <h2 className="text-left text-gray-500 xl:text-xl">
            {blog.blog_post}
          </h2>
        </div>
      ))}
    </section>
  );
};

export default Details;
