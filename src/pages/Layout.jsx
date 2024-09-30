import React from "react";
import MyNav from "../components/MyNav";
import MyFooter from "../components/MyFooter";
import { Outlet } from "react-router";

const Layout = ({ userName, onLogout , cartCount}) => {
	return (
		<>
			<MyNav userName={userName} onLogout={onLogout} cartCount={cartCount} />
			<Outlet />
      <MyFooter />
		</>
	);
};

export default Layout;