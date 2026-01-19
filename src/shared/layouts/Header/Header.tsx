import "./Header.css";
import { Button } from "primereact/button";
import Image from "../../Components/Image/Image";
import logo from "../../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
	const navigate = useNavigate();
	return (
		<div className="header">
			<Image
				src={logo}
				alt="Logo"
				width="120px"
			/>
			<div className="header-links">
				<a
					className="header-link"
					onClick={() => navigate("/products")}>
					Products
				</a>
				<a
					className="header-link"
					onClick={() => navigate("/about-us")}>
					About Us
				</a>
				<a
					className="header-link"
					onClick={() => navigate("/contact")}>
					Contact
				</a>
			</div>

			<Button
				icon="pi pi-shopping-cart"
				rounded
				text
				aria-label="Search"
			/>
		</div>
	);
};

export default Header;
