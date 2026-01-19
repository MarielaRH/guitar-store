import "./Layout.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<div className="scene">
			<Header />
			<div className="content">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
};

export default Layout;
