import Link from "next/link";
import background from "../assests/image/backround.jpg";

export default function Home() {
  return (
    <section className="bg-gray-50 min-h-[92vh]">
      <div className="max-w-screen-xl px-4 py-32 mx-auto lg:h- lg:items-center lg:flex">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl ">
            Blogplus+
            <strong className="font-extrabold text text-indigo-600 sm:block mt-5">
              a, Blog Sharing Site
            </strong>
          </h1>

          <p className="mt-4 sm:leading-relaxed sm:text-xl">
            To acces this site , you need to sign in first. If you don't have
            any account then register account by clicking sign up button.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a
              className="block w-full px-12 py-3 text-sm font-medium text-white bg-indigo-600 rounded shadow sm:w-auto active:bg-indigo-500 hover:bg-indigo-500 focus:outline-none focus:ring"
              href="/signin"
            >
              Sign in
            </a>

            <a
              className="block w-full px-12 py-3 text-sm font-medium text-indigo-600 rounded shadow sm:w-auto hover:text-indigo-700 active:text-indigo-500 focus:outline-none focus:ring"
              href="/signup"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
