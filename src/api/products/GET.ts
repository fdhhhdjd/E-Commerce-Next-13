import axios from 'axios';

const fetchProducts = async (nameLike: string) => {
	const response = await axios.get('http://localhost:5000/initProducts', {
		params: {
			name_like: nameLike,
		},
	});
	return response.data;
};

const fetchAllProducts = async (skip: unknown | null) => {
	console.info(skip);
	const response = await axios.get('http://localhost:5000/initProducts');
	return response.data;
};

const fetchDetailProducts = async (productId: number) => {
	const response = await axios.get(`http://localhost:5000/initProducts/${productId}`);
	return response.data;
};

export { fetchProducts, fetchAllProducts, fetchDetailProducts };
