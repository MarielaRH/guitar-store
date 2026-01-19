import Card from "../../shared/Components/Card/Card";

import GridLayout from "../../shared/layouts/GridLayout/GridLayout";
import { guitarsByCategory } from "../../data/guitars";

const ProductsPage = () => {
	const { classic, modern } = guitarsByCategory;
	return (
		<main className="page-container">
			<p>Premiun Guitars</p>

			<GridLayout
				minItemWidth={200}
				gap={10}>
				{classic?.map((guitar) => (
					<Card
						imageUrl={guitar.image}
						key={guitar.title}
						price={guitar.price}
						rate={guitar.rate}
						subtitle={guitar.subtitle}
						title={guitar.title}
					/>
				))}
			</GridLayout>

			<p>Classical Guitars</p>
			<GridLayout
				minItemWidth={200}
				gap={10}>
				{modern?.map((guitar) => (
					<Card
						imageUrl={guitar.image}
						key={guitar.title}
						price={guitar.price}
						rate={guitar.rate}
						subtitle={guitar.subtitle}
						title={guitar.title}
					/>
				))}
			</GridLayout>
		</main>
	);
};

export default ProductsPage;
