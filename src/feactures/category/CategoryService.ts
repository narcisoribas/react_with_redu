
import {api} from '../../utils/auth/api';
import type { Category } from './Category';


const createCategory = async (category: Category) => {
    const response = await api.post('categories', category);
    return response;
}

const getCategories = async () => {
    const response = await api.get('categories');
    return response;
}

const categoryService = {
    createCategory,
    getCategories,
};

export { categoryService };