import "./Header.css";
import { Button } from "primereact/button";
import Image from "../../Components/Image/Image";
import logo from "../../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import Cart from "../../Components/Cart/Cart";

const Header = () => {
	return (
		<header className="header">
			<div className="header-group">
				<Link
					to="/"
					aria-label="Inicio - Marca">
					<Image
						src={logo}
						alt="Guitar Store - Inicio"
						width="120px"
					/>
				</Link>
				<nav aria-label="Navegación principal">
					<ul className="header-links-list">
						<li>
							<NavLink
								className="header-link"
								to="/products">
								Products
							</NavLink>
						</li>
						<li>
							<NavLink
								className="header-link"
								to="/about-us">
								About Us
							</NavLink>
						</li>
						<li>
							<NavLink
								className="header-link"
								to="/contact">
								Contact
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>

			<Cart />
		</header>
	);
};

export default Header;
