import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function HomepageLayout({ children }) {
  return (
    <div className="fullHeight">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default HomepageLayout;
