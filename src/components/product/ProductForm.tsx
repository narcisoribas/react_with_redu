import React, { useState,useEffect, use } from 'react';
import {useAppDispatch,useAppSelector} from '../../hooks/redux'
import { createProduct } from '../../feactures/products/productSlice';
import { fectchCategories } from '../../feactures/category/categorySlice';

// 1. Definimos uma interface para a forma dos dados do nosso formulário.
//    Isso garante que nosso estado sempre terá o formato correto.
interface ProductFormData {
  name: string;
  description: string;
  price: number;
  category: string;
  idCategory?: string; // Opcional, usado para associar o produto a uma categoria específica.
  stockQuantity: number;
}

// 2. Este é o nosso estado inicial, com valores padrão para cada campo.
const INITIAL_STATE: ProductFormData = {
  name: '',
  description: '',
  price: 0,
  category: '',
  idCategory: '',
  // 'idCategory' é usado para associar o produto a uma categoria específica.
  stockQuantity: 0,
};

const ProductForm = () => {
 
  const [formData, setFormData] = useState<ProductFormData>(INITIAL_STATE);
  const  { categories, isError,isSuccess,message,loading } = useAppSelector((state) => state.categories);

  // 4. Um handler de mudança GENÉRICO. Ele funciona para todos os inputs.
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;
   

    if (name === 'category') {
      const category = categories.find(cat => cat.id === value);
    
      // Se o campo for 'category', atualizamos o 'idCategory' com o valor selecionado.
      setFormData(prevState => ({
        ...prevState,
        category: category?.name || '',
        idCategory: value, // Aqui assumimos que o valor é o ID da categoria
      }));     
    }
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'number' ? Number(value) : value,
    }));
  };


  // 5. Usamos o hook `useAppDispatch` para obter a função de dispatch do Redux.
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Aqui, você pode despachar ações para buscar categorias ou outras informações necessárias.
    dispatch(fectchCategories());
  }, [dispatch]);

  // 5. O handler de submissão do formulário.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // Previne o comportamento padrão do formulário (que é recarregar a página).
    event.preventDefault();

    


    

    dispatch(createProduct(formData));

    if(!loading && isSuccess){
      alert(message || "Produto criado com sucesso!");
        setFormData(INITIAL_STATE);   
    } else if (!loading && isError) {
      alert(message); 
    }


 

    
  
  };

  // 6. A estrutura JSX do formulário.
  return (
    <div style={{ maxWidth: '500px', margin: '2rem auto', padding: '2rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Cadastro de Novo Produto</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="name">Nome do Produto:</label>
          <input
            type="text"
            id="name"
            name="name" // O 'name' DEVE corresponder à chave no estado `formData`
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          />
        </div>
        
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="description">Descrição:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', marginTop: '4px', minHeight: '80px' }}
          />
        </div>

        <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
                <label htmlFor="price">Preço:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                />
            </div>
            <div style={{ flex: 1 }}>
                <label htmlFor="stockQuantity">Quantidade em Estoque:</label>
                <input
                    type="number"
                    id="stockQuantity"
                    name="stockQuantity"
                    value={formData.stockQuantity}
                    onChange={handleChange}
                    required
                    style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                />
            </div>
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="category">Categoria:</label>
          <select
            id="category"    
            name="category"
            value={formData.category}  
            onChange={handleChange}      
            required
            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
          >
            <option value="">Selecione uma categoria</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" style={{ width: '100%', padding: '12px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Cadastrar Produto
        </button>
      </form>
    </div>
  );
};

export default ProductForm;