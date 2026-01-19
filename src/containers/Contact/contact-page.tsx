import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

const ContactPage = () => {
	return (
		<main className="page-container">
			<section className="contact-hero">
				<h1>Contact Guitar House</h1>
				<p>Have a question or need help choosing the right guitar? We’re here to help you.</p>
			</section>

			<section className="contact-info">
				<h2>Get in Touch</h2>
				<div className="info-item">
					<h3>Email</h3>
					<p>support@guitarhouse.com</p>
				</div>
				<div className="info-item">
					<h3>Phone</h3>
					<p>+1 (555) 123-4567</p>
				</div>
			</section>

			<section className="contact-form">
				<h2>Send Us a Message</h2>

				<form>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<InputText
							id="name"
							type="text"
							placeholder="Your name"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="email">Email</label>
						<InputText
							id="email"
							type="email"
							placeholder="Your email"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="subject">Subject</label>
						<InputText
							id="subject"
							type="text"
							placeholder="Message subject"
						/>
					</div>

					<div className="form-group">
						<label htmlFor="message">Message</label>
						<InputTextarea
							id="message"
							rows={5}
							placeholder="Write your message here..."></InputTextarea>
					</div>

					<Button type="submit">Send Message</Button>
				</form>
			</section>

			<section className="contact-support">
				<h2>Customer Support</h2>
				<p>Our team is available Monday to Friday to assist you with orders, shipping, and product questions.</p>
			</section>
		</main>
	);
};

export default ContactPage;
