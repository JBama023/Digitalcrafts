import React from "react";
import { Link } from "react-router-dom";
import { SidebarContainer } from "../styledComponents/SidebarStyle";
export default function Sidebar(props) {
  const viewSidebar = props.viewSidebar;
  return (
    <>
      {viewSidebar ? (
        <SidebarContainer>
          <Link to="/">
            <p>Home</p>
          </Link>
          <Link to="/dashboard">
            <p>Dashboard</p>
          </Link>
          <Link to="/form">
            <p>Form</p>
          </Link>
        </SidebarContainer>
      ) : (
        <></>
      )}
    </>
  );
}
