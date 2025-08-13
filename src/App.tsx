import React, { useState } from "react"
import { useSelector } from "react-redux"

import ProductForm from "./components/product/ProductForm"
import { ProductListPage } from "./components/product/ProductListTemplate"
import { productSlice } from "./feactures/products/productSlice"

function App() {
  const [products, setProducts] = useState([])
  

  return (
   <div>
      <header style={{ background: '#f8f9fa', padding: '1rem', textAlign: 'center', borderBottom: '1px solid #ddd' }}>
        <h1>Gerenciador de Produtos com Redux</h1>
      </header>
      <main>
        {/* Formulário para adicionar novos produtos */}
        <ProductForm />

        {/* Linha divisória */}
        <hr style={{ maxWidth: '800px', margin: '2rem auto' }} />

        {/* Lista que busca e exibe os produtos do estado do Redux */}
        <ProductListPage/>
      </main>
    </div>
  )
}

export default App
