import axios from 'axios';

const fetchAllCategory = async () => {
	const response = await axios.get('http://localhost:5000/initCategories');
	return response.data;
};
const fetchDetailCategory = async (categoryId: string) => {
	const response = await axios.get(`http://localhost:5000/initCategories/${categoryId}`);
	return response.data;
};

export { fetchAllCategory, fetchDetailCategory };
