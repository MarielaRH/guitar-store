import { Divider } from "primereact/divider";
import "./about-us-page.styles.css";
import { Button } from "primereact/button";
import { useNavigate } from "react-router";

const AboutUsPage = () => {
	const navigate = useNavigate();
	return (
		<main className="page-container about-container">
			<section className="about-title-container">
				<h1 className="about-title">About Guitar House</h1>
				<p className="about-description">
					Guitar House is a place for guitar lovers. We bring quality instruments for every style and level. We focus on
					quality, passion, and customer experience. Every guitar is chosen to meet real musicians’ needs.
				</p>
			</section>
			<div className="about-section">
				<section className="about-story">
					<h2>Our Story</h2>
					<p>
						Guitar House was founded with a simple goal: to connect musicians with guitars that inspire creativity and
						passion.
					</p>
				</section>

				<section className="about-values">
					<h2>Our Mission</h2>
					<p>To offer high-quality guitars with great sound, design, and value.</p>
				</section>

				<section className="about-mission">
					<h2>Our Vision</h2>
					<p>To become a trusted destination for guitar players around the world.</p>
				</section>
			</div>
			<Divider layout="horizontal" />
			<section className="about-offer">
				<h2>What We Offer</h2>
				<ul>
					<li>Electric and acoustic guitars</li>
					<li>
						<Divider layout="vertical" />
					</li>
					<li>Instruments for beginners and professionals</li>
					<li>
						<Divider layout="vertical" />
					</li>
					<li>Carefully selected designs and tones</li>
					<li>
						<Divider layout="vertical" />
					</li>
					<li>Reliable shipping and support</li>
				</ul>
			</section>

			<Divider layout="horizontal" />

			<section className="about-cta">
				<h2>Join the Guitar House Community</h2>
				<p>Discover your next guitar and start playing today.</p>
				<Button onClick={() => navigate("/shop")}>Shop Guitars</Button>
			</section>
		</main>
	);
};

export default AboutUsPage;
