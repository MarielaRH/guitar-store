import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";
const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
    <div className="scene">
				<Header />
				<div className="content">{children}</div>
				<Footer />
		</div>
	);
};

export default Layout;
