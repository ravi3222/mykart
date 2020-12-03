import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function HomepageLayout({ children, user }) {
  return (
    <div className="fullHeight">
      <Header user={user} />
      {children}
      <Footer />
    </div>
  );
}

export default HomepageLayout;
