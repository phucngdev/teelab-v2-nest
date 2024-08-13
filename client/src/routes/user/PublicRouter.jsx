import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../../layouts/user/Header";
import Footer from "../../layouts/user/Footer";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import MessageButton from "../../components/user/message/MessageButton";

const PublicRouter = () => {
  const [user, setUser] = useState(() => {
    const userCookie = Cookies.get("AT") ? Cookies.get("AT") : null;
    const decoded = userCookie ? jwtDecode(userCookie) : "";
    return decoded;
  });

  return (
    <>
      <Header user={user} />
      <Outlet context={user} />
      <MessageButton user={user} />
      <Footer />
    </>
  );
};

export default PublicRouter;
