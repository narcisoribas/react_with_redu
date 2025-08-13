
export interface Category {
      id?: string;
      name: string;
      description: string | null;
      image: string | null; 
      createdAt: string | null;
      updatedAt: string | null;
             
  }


  export interface CategoryState {
    categories: Category[]; 
    loading: boolean;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';    
    isError: boolean;
    isSuccess: boolean;
    message: string | null;
}