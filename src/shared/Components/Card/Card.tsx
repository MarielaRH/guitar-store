import { Button } from "primereact/button";
import { FC } from "react";
import { useCart } from "../../../contexts/CartContext";
import { Guitar } from "../../interfaces/interfaces";
import Image from "../Image/Image";
import "./Card.css";
import { useToast } from "../../../contexts/ToastContext";

interface CardProps {
	guitar: Guitar;
	className?: string;
}
const Card: FC<CardProps> = ({ className = "card", guitar }) => {
	const { addToCart } = useCart();
	const { showMessage } = useToast();

	const addItemToCart = () => {
		addToCart({ ...guitar, itemId: self.crypto.randomUUID() }, 1);
		showMessage("success", "", `${guitar.title} added to cart`);
	};

	return (
		<article className={className}>
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
				<div
					className="card-info-text"
					style={{ height: "100%" }}>
					<div className="card-info-text-group">
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
					onClick={addItemToCart}
				/>
			</div>
		</article>
	);
};

export default Card;
