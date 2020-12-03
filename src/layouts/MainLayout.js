import React from "react";
import Footer from "../components/Footer";
import Header from "./../components/Header";

function MainLayout({ children, user }) {
  return (
    <div>
      <Header user={user} />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}

export default MainLayout;
