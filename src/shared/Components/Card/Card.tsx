import { FC } from "react";
import Image from "../Image/Image";
import "./Card.css";
import { Button } from "primereact/button";

interface CardProps {
	className?: string;
	title: string;
	subtitle: string;
	imageUrl: string;
	rate: number;
	price: number;
}
const Card: FC<CardProps> = ({ className = "card", title, subtitle, imageUrl, rate, price }) => {
	return (
		<div className={className}>
			<p className="card-rating">
				<i
					className="pi pi-star-fill"
					style={{ color: "#f59e0b", fontSize: ".8rem" }}
				/>
				<span>{rate}</span>
			</p>
			<div className="card-container-image">
				<Image
					id="card-image"
					width="90px"
					src={imageUrl}
					alt={title}
				/>
			</div>
			<div className="card-info">
				<div className="card-info-text">
					<div className="card-info-price">
						<p className="price">
							<span className="price-symbol">$</span>
							{price}
						</p>
					</div>
					<h3 className="card-title">{title}</h3>
					<p className="card-subtitle">{subtitle}</p>
				</div>
				<Button
					style={{ width: "100%" }}
					type="button"
					icon="pi pi-shopping-cart"
					label="Add to cart"
				/>
			</div>
		</div>
	);
};

export default Card;
