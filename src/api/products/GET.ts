//* LIB
import axios from 'axios';

const fetchProducts = async (nameLike: string) => {
	const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/initProducts`, {
		params: {
			name_like: nameLike,
		},
	});
	return response.data;
};

const fetchAllProducts = async (skip: unknown | null) => {
	console.info(skip);
	const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/initProducts`);
	return response.data;
};

const fetchDetailProducts = async (productId: number) => {
	const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/initProducts/${productId}`);
	return response.data;
};

export { fetchProducts, fetchAllProducts, fetchDetailProducts };
