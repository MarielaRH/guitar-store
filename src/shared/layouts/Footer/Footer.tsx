import "./Footer.css";
import { Divider } from "primereact/divider";
import Image from "../../Components/Image/Image";
import logo from "../../../assets/logo.svg";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-logo">
				<Image
					src={logo}
					alt="Logo"
					width="120px"
				/>
				<div className="footer-social">
					<i className="pi pi-facebook" />
					<i className="pi pi-twitter" />
					<i className="pi pi-instagram" />
				</div>
			</div>
			<Divider />
			<div className="footer-info">
				<div>
					<h3>Contacto</h3>
					<p>info@guitarstore.com</p>
					<p>+1 234 567 890</p>
					<p>+1 234 567 890</p>
				</div>

				<div>
					<h3>Horario</h3>
					<p>Lunes a Viernes: 9:00 - 18:00</p>
					<p>Sábado: 10:00 - 14:00</p>
					<p>Domingo: Cerrado</p>
				</div>

				<div>
					<h3>Guitar Store</h3>
					<p>Productos</p>
					<p>Sobre Nosotros</p>
					<p>Contacto</p>
				</div>
			</div>
			<Divider />
			<div className="footer-copyright">
				<p>© 2026 Guitar Store. All rights reserved.</p>
			</div>
		</div>
	);
};

export default Footer;
