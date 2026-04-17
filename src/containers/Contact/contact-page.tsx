import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import "./contact-page.styles.css";
import { FormEvent, useState } from "react";
import { useToast } from "../../contexts/ToastContext";
import { useForm } from "react-hook-form";

interface ContactForm {
	name: string;
	email: string;
	subject: string;
	message: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ContactPage = () => {
	const { showMessage } = useToast();
	const {
		register,
		handleSubmit,
		reset,
		formState: { isValid, errors, isSubmitting },
	} = useForm<ContactForm>({
		mode: "onChange",
	});

	const onSubmit = (data: ContactForm) => {
		showMessage("success", "Your message has been sent successfully", "");
		reset();
	};

	return (
		<main className="page-container contact-container">
			<section className="contact-title-container">
				<h1 className="contact-title">Contact Guitar House</h1>
				<p className="contact-description">
					Have a question or need help choosing the right guitar? We’re here to help you.
				</p>
			</section>

			<section className="contact-form">
				<h2>Send Us a Message</h2>

				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="form-group">
						<label htmlFor="name">Name</label>

						<InputText
							{...register("name", {
								required: "Name is required",
							})}
							id="name"
							type="text"
							placeholder="Your name"
						/>
						{errors.name && <p className="error-message">{errors.name.message}</p>}
					</div>

					<div className="form-group">
						<label htmlFor="email">Email</label>
						<InputText
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: emailRegex,
									message: "Please enter a valid email address",
								},
							})}
							id="email"
							type="email"
							placeholder="Your email"
						/>
						{errors.email && <p className="error-message">{errors.email.message}</p>}
					</div>

					<div className="form-group">
						<label htmlFor="subject">Subject</label>
						<InputText
							{...register("subject", {
								required: "Subject is required",
							})}
							id="subject"
							type="text"
							placeholder="Message subject"
						/>
						{errors.subject && <p className="error-message">{errors.subject.message}</p>}
					</div>

					<div className="form-group">
						<label htmlFor="message">Message</label>
						<InputTextarea
							{...register("message", {
								required: "Message is required",
							})}
							id="message"
							rows={5}
							placeholder="Write your message here..."
						/>
						{errors.message && <p className="error-message">{errors.message.message}</p>}
					</div>

					<Button
						disabled={!isValid}
						type="submit"
						label={"Send Message"}
						loading={isSubmitting}
					/>
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
