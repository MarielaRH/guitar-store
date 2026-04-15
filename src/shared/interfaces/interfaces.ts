export interface Guitar {
	id: number;
	title: string;
	subtitle: string;
	price: number;
	rate: number;
	image: string;
	itemId: string;
}

export interface CartItem extends Guitar {
	quantity: number;
}
