import { FC } from "react";
import Image from "../Image/Image";
import "./Card.css";
import { Button } from "primereact/button";

interface CardProps {
	guitar: {
		title: string;
		subtitle: string;
		price: number;
		rate: number;
		image: string;
	};
	className?: string;
}
const Card: FC<CardProps> = ({ className = "card", guitar }) => {
	return (
		<article className={className}>
			<p
				className="card-rating"
				aria-label={`Guitar rating: ${guitar.rate} out of 5`}>
				<i
					className="pi pi-star-fill"
					aria-hidden="true"
					style={{ color: "#f59e0b", fontSize: ".8rem" }}
				/>
				<span>{guitar.rate}</span>
			</p>
			<div className="card-container-image">
				<figure>
					<Image
						id="card-image"
						width="90px"
						src={guitar.image}
						alt={guitar.title}
					/>
				</figure>
			</div>
			<div className="card-info">
				<div className="card-info-text">
					<div className="card-info-price">
						<p className="price">
							<span
								className="price-symbol"
								aria-hidden="true">
								$
							</span>
							<span aria-label={`Price ${guitar.price} dollars`}>{guitar.price}</span>
						</p>
					</div>
					<h3
						className="card-title"
						id={`title-${guitar.title}`}>
						{guitar.title}
					</h3>
					<p className="card-subtitle">{guitar.subtitle}</p>
				</div>
				<Button
					style={{ width: "100%" }}
					type="button"
					icon="pi pi-shopping-cart"
					label="Add to cart"
					aria-label={`Add ${guitar.title} to cart`}
				/>
			</div>
		</article>
	);
};

export default Card;
