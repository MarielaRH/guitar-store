const AboutUsPage = () => {
	return (
		<main className="page-container">
			<section className="about-hero">
				<h1>About Guitar House</h1>
				<p>Guitar House is a place for guitar lovers. We bring quality instruments for every style and level.</p>
			</section>

			<section className="about-story">
				<h2>Our Story</h2>
				<p>
					Guitar House was founded with a simple goal: to connect musicians with guitars that inspire creativity and passion.
				</p>
			</section>

			<section className="about-values">
				<div className="mission">
					<h3>Our Mission</h3>
					<p>To offer high-quality guitars with great sound, design, and value.</p>
				</div>

				<div className="vision">
					<h3>Our Vision</h3>
					<p>To become a trusted destination for guitar players around the world.</p>
				</div>
			</section>

			<section className="about-offer">
				<h2>What We Offer</h2>
				<ul>
					<li>Electric and acoustic guitars</li>
					<li>Instruments for beginners and professionals</li>
					<li>Carefully selected designs and tones</li>
					<li>Reliable shipping and support</li>
				</ul>
			</section>

			<section className="about-why">
				<h2>Why Guitar House</h2>
				<p>We focus on quality, passion, and customer experience. Every guitar is chosen to meet real musicians’ needs.</p>
			</section>

			<section className="about-cta">
				<h2>Join the Guitar House Community</h2>
				<p>Discover your next guitar and start playing today.</p>
				<a
					href="/shop"
					className="cta-button">
					Shop Guitars
				</a>
			</section>
		</main>
	);
};

export default AboutUsPage;
