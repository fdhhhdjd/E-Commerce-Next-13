import axios from 'axios';

const fetchAllCategory = async () => {
	const response = await axios.get('http://localhost:5000/initCategories');
	return response.data;
};

export { fetchAllCategory };
