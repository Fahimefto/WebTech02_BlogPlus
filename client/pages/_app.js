import Navbar from "../components/Navbar";
import "../styles/globals.css";
import { AuthContext } from "../hooks/useAuth";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

function MyApp({ Component, pageProps }) {
  const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get("isLoggedIn"));

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Navbar />
      <Component {...pageProps} />
    </AuthContext.Provider>
  );
}

export default MyApp;
