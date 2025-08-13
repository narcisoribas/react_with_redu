export interface Product {
    id?: string;
    name: string;
    description: string;
    price: number;
    category: string;
    stockQuantity: number;
    createdAt?: Date;
    updatedAt?: Date;   
}



export interface ProductState {
    products: Product[];
    loading: boolean;
    status :string| null
    isError: boolean | null;
    isSuccess: boolean;
    message: string | null;
}