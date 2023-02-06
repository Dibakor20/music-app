import React from "react";
import Navbar from "./dashboard/Navbar";
import Sidebar from "./dashboard/Sidebar";

type LayoutProps = {
  children: React.ReactNode;
  handleSearchQuery?: CallableFunction;
};

const Layout = ({ children, handleSearchQuery }: LayoutProps) => {
  return (
    <>
      <div className="row">
        <div className="col-md-2 px-0">
          <Sidebar />
        </div>
        <div className="col-md-10 px-0">
          <Navbar handleSearchQuery={handleSearchQuery} />
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
