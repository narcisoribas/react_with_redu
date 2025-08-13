import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { categoryService } from "./CategoryService";
import type { Category, CategoryState } from "./Category";
import type { PayloadAction } from "@reduxjs/toolkit";



const initialState: CategoryState = {
    categories: [],
    loading: false,
    status: 'idle',
    isError: false,
    isSuccess: false,
    message: null,
};



export const  fectchCategories = createAsyncThunk(
    'categories/fetchCategories',
    async(_, thunkAPI) => {
        try {
            const response = await categoryService.getCategories();
            return response.data
        } catch (error: any) {
            const message = error?.response?.data?.message || error.message || 'Failed to fetch categories';
            return thunkAPI.rejectWithValue(message);
        }
    }
);


export const createCategory = createAsyncThunk(
    'categories/createCategory',
    async(categoryData:Category, thunkAPI) => {
        try {
            const response = await categoryService.createCategory(categoryData);
            return response.data;
        } catch (error: any) {
            const message = error?.response?.data?.message || error.message || 'Failed to create category';
            return thunkAPI.rejectWithValue(message);
        }
    }
);


export const categorySlice = createSlice({
    name: 'categories',     
    initialState,
    reducers: {     
        reducer: (state) => {
            state.categories = [];
            state.loading = false;
            state.status = 'idle';
            state.isError = false;
            state.isSuccess = false;
            state.message = null;
        }   

    },

    extraReducers(builder) {
        builder
            .addCase(fectchCategories.pending, (state) => {
                state.loading = true;
            })
            .addCase(fectchCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
                state.loading = false;
                state.status = 'succeeded';
                state.categories = action.payload;
                state.isSuccess = true;
                state.isError = false;
                state.message = null;
            })
            .addCase(fectchCategories.rejected, (state, action: PayloadAction<unknown>) => {
                state.loading = false;
                state.status = 'failed';
                state.isError = true;
                state.message = typeof action.payload === 'string' ? action.payload : 'Failed to fetch categories';
            })
            .addCase(createCategory.pending, (state) => {
                state.loading = true;
            })
            .addCase(createCategory.fulfilled, (state, action: PayloadAction<Category>) => {
                state.loading = false;
                state.status = 'succeeded';
                state.categories.push(action.payload);
                state.isSuccess = true;
                state.isError = false;  
                state.message = 'Category created successfully';

            })
            .addCase(createCategory.rejected, (state, action: PayloadAction<unknown>) => {
                state.loading = false;
                state.status = 'failed';
                state.isError = true;
                state.message = typeof action.payload === 'string' ? action.payload : 'Failed to create category';
            });
    }   
})

export default categorySlice.reducer;
export const { reducer } = categorySlice.actions;


