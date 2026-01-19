import { FC, ReactNode } from "react";

interface GridLayoutProps {
	/** ancho mínimo de cada item (ej. 220, 260) */
	minItemWidth?: number;
	gap?: number | string;
	children: ReactNode;
}

const GridLayout: FC<GridLayoutProps> = ({ minItemWidth = 240, gap = "1rem", children }) => {
	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}px, 1fr))`,
				gap,
			}}>
			{children}
		</div>
	);
};

export default GridLayout;
