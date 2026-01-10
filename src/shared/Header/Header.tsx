import "./Header.css";
import logo from "../../assets/logo.svg";
import Image from "../Image/Image";
import { Button } from "primereact/button";

const Header = () => {
	return (
		<div className="header">
			<Image
				src={logo}
				alt="Logo"
				width="120px"
			/>
			<div className="header-links">
				<a href="#products">Products</a>
				<a href="#about">About Us</a>
				<a href="#contact">Contact</a>
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
