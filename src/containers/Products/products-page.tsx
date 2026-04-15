import Card from "../../shared/Components/Card/Card";

import GridLayout from "../../shared/layouts/GridLayout/GridLayout";
import { guitarsByCategory } from "../../data/guitars";

const ProductsPage = () => {
	const { classic, modern } = guitarsByCategory;
	return (
		<main className="page-container">
			<div>
				<p className="title-page">Premiun Guitars</p>
				<GridLayout
					minItemWidth={200}
					gap={10}>
					{classic?.map((guitar) => (
						<Card
							key={guitar.title}
							guitar={guitar}
						/>
					))}
				</GridLayout>

				<p className="title-page">Classical Guitars</p>
				<GridLayout
					minItemWidth={200}
					gap={10}>
					{modern?.map((guitar) => (
						<Card
							key={guitar.title}
							guitar={guitar}
						/>
					))}
				</GridLayout>
			</div>
		</main>
	);
};

export default ProductsPage;
