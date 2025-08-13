import  { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import type {  PayloadAction } from "@reduxjs/toolkit";
import { productService } from "./productService";
import type { Product, ProductState } from "./Product";



const initialState: ProductState = {
    products: [],
    loading: false,
    status: null,
    isError: null,
    isSuccess: false,
    message: null,
};


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async(_, thunkAPI) => {
        try {
            const response = await productService.getProducts();
            return response.data; // Ensure only the data (Product[]) is returned
        } catch (error: any) {
            const message = error?.response?.data?.message || error.message || 'Failed to fetch products';
            return thunkAPI.rejectWithValue(message);
        }
    }
)


export const createProduct = createAsyncThunk(
    'products/createProduct',
    async (productData: Product, thunkAPI) => {
        try {
            const response = await productService.createProduct(productData);
            return response.data; // Ensure only the Product is returned
        } catch (error: any) {
            const message = error?.response?.data?.message || error.message || 'Failed to create product';
            return thunkAPI.rejectWithValue(message);
        }
    }
)


export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        reset: (state) => {
            state.products = [];
            state.loading = false;
            state.status = null;
            state.isError = null;
            state.isSuccess = false;
            state.message = null;
        },

    },

    extraReducers(builder) {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.loading = true;
            state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
            state.loading = false;
            state.status = 'succeeded';
            state.message = "Products fetched successfully";
            state.isSuccess = true;
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false;
            state.status = 'failed';
            state.isError = true;
            state.isSuccess = false;
            state.products = [];
            
            state.message = typeof action.payload === 'string'
                ? action.payload
                : 'Failed to fetch products';
        }).addCase(createProduct.pending, (state) => {
            state.loading = true;
            state.status = 'loading';
        })
        .addCase(createProduct.fulfilled, (state, action: PayloadAction<Product>) => {
            state.loading = false;
            state.status = 'succeeded';
            state.isSuccess = true;
            state.message = "Product created successfully";
            // Add the new product to the products array
            state.products.push(action.payload);
        })
        .addCase(createProduct.rejected, (state, action) => {   
            state.loading = false;
            state.status = 'failed';
            state.isError = true;
            state.isSuccess = false;
            state.message = typeof action.payload === 'string'
                ? action.payload
                : 'Failed to create product';
        } )      
    },
    
})


export default productSlice.reducer;
export const { reset } = productSlice.actions;