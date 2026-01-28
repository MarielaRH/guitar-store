import "./Footer.css";
import { Divider } from "primereact/divider";
import Image from "../../Components/Image/Image";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-logo">
				<Link
					to="/"
					aria-label="Inicio - Marca">
					<Image
						src={logo}
						alt="Guitar Store - Inicio"
						width="120px"
					/>
				</Link>
				<nav className="footer-social">
					<ul>
						<li>
							<a
								href="https://facebook.com"
								aria-label="Facebook Guitar Store"
								target="_blank"
								rel="noopener noreferrer">
								<i
									className="pi pi-facebook"
									aria-hidden="true"
								/>
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com"
								aria-label="Twitter Guitar Store"
								target="_blank"
								rel="noopener noreferrer">
								<i
									className="pi pi-twitter"
									aria-hidden="true"
								/>
							</a>
						</li>
						<li>
							<a
								href="https://instagram.com"
								aria-label="Instagram Guitar Store"
								target="_blank"
								rel="noopener noreferrer">
								<i
									className="pi pi-instagram"
									aria-hidden="true"
								/>
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<Divider />
			<div className="footer-info">
				<section aria-labelledby="footer-contact">
					<h3 id="footer-contact">Contacto</h3>
					<address>
						<p>
							<a href="mailto:info@guitarstore.com">info@guitarstore.com</a>
						</p>
						<p>
							<a href="tel:+1234567890">+1 234 567 890</a>
						</p>
						<p>123 Guitar Street, Music City</p>
					</address>
				</section>

				<section aria-labelledby="footer-hours">
					<h3 id="footer-hours">Horario</h3>
					<ul>
						<li>Lunes a Viernes: 9:00 - 18:00</li>
						<li>Sábado: 10:00 - 14:00</li>
						<li>Domingo: Cerrado</li>
					</ul>
				</section>

				<section aria-labelledby="footer-navigation">
					<h3 id="footer-navigation">Guitar Store</h3>
					<nav aria-label="Main navigation">
						<ul>
							<li>
								<Link
									to="/products"
									aria-label="products page">
									Productos
								</Link>
							</li>
							<li>
								<Link
									to="/about-us"
									aria-label="about us page">
									Sobre Nosotros
								</Link>
							</li>
							<li>
								<Link
									to="/contact"
									aria-label="contact page">
									Contacto
								</Link>
							</li>
						</ul>
					</nav>
				</section>
			</div>
			<Divider />
			<div className="footer-copyright">
				<p>© 2026 Guitar Store. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
