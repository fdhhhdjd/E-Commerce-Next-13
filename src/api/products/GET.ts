import axios from 'axios';

const fetchProducts = async (nameLike: string) => {
	const response = await axios.get('http://localhost:5000/initProducts', {
		params: {
			name_like: nameLike,
		},
	});
	return response.data;
};

const fetchAllProducts = async () => {
	const response = await axios.get('http://localhost:5000/initProducts');
	return response.data;
};

export { fetchProducts, fetchAllProducts };
