import type { Product } from './Product';
import { api } from '../../utils/auth/api';



const createProduct = async (product: Product) => {
    const response = api.post('products', product);
    return response;
}


const getProducts = async()=>{
    const response = await api.get('products');
    return response;
}



const productService = {
    createProduct,  
    getProducts,
};

export { productService };
