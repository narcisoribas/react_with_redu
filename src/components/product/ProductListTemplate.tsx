import React, { useState, useEffect, use } from 'react';
import { useAppDispatch,useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../feactures/products/productSlice';
import type { Product } from '../../feactures/products/Product';
import ProductListSkeleton from '../loading/ProductListSkeleton';



// 3. Definimos a interface para as props do nosso componente.
//    Ele espera receber um array de produtos.
interface ProductListTemplateProps {
  products: Product[];
}

// 4. O componente em si. Ele é "burro", apenas recebe `products` e os exibe.
const ProductListTemplate: React.FC<ProductListTemplateProps> = ({ products }) => {

  
  // 5. Uma verificação para o caso de a lista estar vazia.
  if (!products || products.length === 0) {
    return <div style={{ textAlign: 'center', margin: '2rem' }}>Nenhum produto para exibir.</div>;
  }

  // 6. A renderização da lista, mapeando sobre os produtos recebidos via props.
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <h2>Lista de Produtos</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {products.map((product) => (
          <li 
            key={product.id} 
            style={{ 
              border: '1px solid #eee', 
              padding: '1rem', 
              marginBottom: '1rem', 
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.05)' 
            }}
          >
            <h3 style={{ marginTop: 0, color: '#333' }}>{product.name}</h3>
            <p style={{ color: '#666' }}>{product.description}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', color: '#555' }}>
              <span><strong>Preço:</strong> R$ {product.price.toFixed(2)}</span>
              <span><strong>Estoque:</strong> {product.stockQuantity} unidades</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// 7. Um componente "pai" de exemplo que usa o nosso template.
//    É aqui que passamos os dados falsos para o componente de listagem.
export const ProductListPage = () => {
  //const [products,setProducts] = useState<Product[]>([])
  const dispatch = useAppDispatch();
  const {isError,message,products, loading} = useAppSelector((state) => state.products);

  console.log(loading, 'Loading state from Redux');

  // 8. Usamos o hook useEffect para buscar os produtos quando o componente é montado.
  //    Isso simula uma chamada a uma API para obter os produtos.
  useEffect(() => { 
      dispatch(fetchProducts())     
  }, [dispatch]);

  
if(loading) {
    return <ProductListSkeleton />; 
  }

  if(isError) {
    return <div style={{ textAlign: 'center', margin: '2rem', color: 'red' }}>
      <h2>Erro ao carregar produtos</h2>
      <p>{message}</p>
      </div>;
      }

  return (
    <>
    <div>
        <header style={{ background: '#f8f9fa', padding: '1rem', textAlign: 'center', borderBottom: '1px solid #ddd' }}>
            <h1>Visualização da Lista de Produtos {message}</h1>
        </header>
        <main>
            <ProductListTemplate products={products} />
        </main>
    </div>
    </>
  )
}