import image1 from "../assets/guitarra_1.svg";
import image2 from "../assets/guitarra_2.svg";
import image3 from "../assets/guitarra_3.svg";
import image4 from "../assets/guitarra_4.svg";
import image5 from "../assets/guitarra_5.svg";
import image6 from "../assets/guitarra_6.svg";
import image7 from "../assets/guitarra_7.svg";
import image8 from "../assets/guitarra_8.svg";
import image9 from "../assets/guitarra_9.svg";
import image10 from "../assets/guitarra_10.svg";
import image11 from "../assets/guitarra_11.svg";
import image12 from "../assets/guitarra_12.svg";

export const guitarsByCategory = {
	classic: [
		{
			title: "Crimson Classic",
			subtitle: "Sonido cálido y sustain balanceado.",
			price: 699,
			rate: 4.6,
			image: image1,
		},
		{
			title: "Sunburst Vintage",
			subtitle: "Tono clásico con estilo retro.",
			price: 899,
			rate: 4.8,
			image: image3,
		},
		{
			title: "Gold Top Pro",
			subtitle: "Graves sólidos y ataque definido.",
			price: 949,
			rate: 4.7,
			image: image5,
		},
		{
			title: "Strato Classic Red",
			subtitle: "Brillante y expresiva.",
			price: 699,
			rate: 4.5,
			image: image8,
		},
		{
			title: "Blue Wave",
			subtitle: "Sonido limpio y cristalino.",
			price: 729,
			rate: 4.4,
			image: image9,
		},
		{
			title: "Amber Strat",
			subtitle: "Equilibrio perfecto para estudio.",
			price: 759,
			rate: 4.3,
			image: image10,
		},
	],

	modern: [
		{
			title: "Emerald Rock",
			subtitle: "Ideal para rock y blues moderno.",
			price: 749,
			rate: 4.2,
			image: image2,
		},
		{
			title: "Cherry Flame",
			subtitle: "Versátil y potente para escenarios.",
			price: 829,
			rate: 4.6,
			image: image4,
		},
		{
			title: "Red Devil SG",
			subtitle: "Ligera y agresiva en sonido.",
			price: 799,
			rate: 4.5,
			image: image6,
		},
		{
			title: "Scarlet Shred",
			subtitle: "Rápida y precisa para solos.",
			price: 899,
			rate: 4.7,
			image: image7,
		},
		{
			title: "Inferno Quilt",
			subtitle: "Alta ganancia y gran presencia.",
			price: 999,
			rate: 4.8,
			image: image11,
		},
		{
			title: "Midnight Black",
			subtitle: "Oscura, potente y elegante.",
			price: 849,
			rate: 4.4,
			image: image12,
		},
	],
} as const;
