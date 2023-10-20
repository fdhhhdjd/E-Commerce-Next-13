import axios from 'axios';

const fetchAllCategory = async () => {
	const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/initCategories`);
	return response.data;
};
const fetchDetailCategory = async (categoryId: string) => {
	const response = await axios.get(`${process.env.NEXT_PUBLIC_URL}/initCategories/${categoryId}`);
	return response.data;
};

export { fetchAllCategory, fetchDetailCategory };
