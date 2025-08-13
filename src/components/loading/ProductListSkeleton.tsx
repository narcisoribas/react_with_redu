
import Skeleton from './Skeleton';

// Este componente desenha o layout de UM item da lista com esqueletos
const SkeletonProductItem = () => (
  <div style={{
    border: '1px solid #eee',
    padding: '1rem',
    marginBottom: '1rem',
    borderRadius: '8px',
  }}>
    {/* Esqueleto para o título do produto */}
    <Skeleton width="60%" height={24} />

    {/* Esqueleto para a descrição */}
    <div style={{ marginTop: '1rem' }}>
      <Skeleton width="100%" height={16} />
      <div style={{ marginTop: '8px' }}>
        <Skeleton width="90%" height={16} />
      </div>
    </div>

    {/* Esqueleto para preço e estoque */}
    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
      <Skeleton width="100px" height={20} />
      <Skeleton width="120px" height={20} />
    </div>
  </div>
);

// Este componente renderiza VÁRIOS itens de esqueleto para preencher a tela
const ProductListSkeleton = () => {
  // Criamos um array com 3 itens para renderizar 3 esqueletos de produtos
  const skeletonItems = Array.from({ length: 3 }).map((_, index) => (
    <SkeletonProductItem key={index} />
  ));

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto' }}>
      <h2>Lista de Produtos</h2>
      {skeletonItems}
    </div>
  );
};

export default ProductListSkeleton;