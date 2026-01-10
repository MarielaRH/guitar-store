import { FC } from "react"

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  className?: string;
}

const Image: FC<ImageProps> = ({ src, alt, width, className }) => {
  return (
			<img
				src={src}
				alt={alt}
				style={{ width }}
				className={className}
			/>
		);
}

export default Image