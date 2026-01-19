import { FC } from "react";

interface ImageProps {
	id?: string;
	src: string;
	alt: string;
	width?: string;
	className?: string;
}

const Image: FC<ImageProps> = ({ id, src, alt, width, className }) => {
	return (
		<img
			id={id}
			src={src}
			alt={alt}
			style={{ width }}
			className={className}
		/>
	);
};

export default Image;
