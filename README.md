# ⚛️ Aprendendo Redux Moderno com React e TypeScript
### Um Guia Prático e Interativo para Gerenciamento de Estado

Bem-vindo! Este projeto não é apenas uma aplicação funcional, mas sim um **recurso de aprendizado prático** criado para ensinar como trabalhar com Redux da maneira moderna, utilizando **Redux Toolkit** e **TypeScript**.

O objetivo é desmistificar o gerenciamento de estado assíncrono, mostrando um padrão claro e escalável que você pode aplicar em seus próprios projetos.

## 🎓 O Que Você Vai Aprender?

Ao explorar este código, você entenderá na prática:

-   ✅ **O Fluxo de Dados Unidirecional:** Como uma ação do usuário na interface viaja através do sistema e atualiza a UI de forma previsível.
-   ✅ **Estrutura de um "Slice":** Como organizar sua lógica de estado, reducers e ações de forma coesa com `createSlice`.
-   ✅ **Lidar com Ações Assíncronas:** A forma correta de fazer chamadas de API usando `createAsyncThunk` e gerenciar os estados de loading, sucesso e erro.
-   ✅ **Separação de Responsabilidades:** Por que isolar a lógica da API (`Service`) da lógica de estado (`Slice`) e da lógica de UI (`Component`) é crucial.
-   ✅ **Hooks Tipados:** Como criar versões inteligentes do `useDispatch` e `useSelector` para ter autocompletar e segurança de tipos em toda a aplicação.
-   ✅ **Atualização em Tempo Real:** Como a UI reage e é atualizada instantaneamente após uma operação bem-sucedida, sem recarregar a página.
-   ✅ **UI Otimista (Skeleton Loading):** Como melhorar a experiência do usuário com animações de esqueleto durante o carregamento de dados.

## 🛠️ Tecnologias Utilizadas

*   **React:** Biblioteca para construção da interface de usuário.
*   **TypeScript:** Adiciona tipagem estática para um código mais seguro e robusto.
*   **Redux Toolkit:** A forma oficial e recomendada para escrever lógica Redux. Simplifica a configuração e reduz o código repetitivo.
*   **React-Redux:** A ponte que conecta seus componentes React à store do Redux.
*   **Axios:** Cliente HTTP para fazer as requisições à nossa API simulada.
*   **JSON Server:** Ferramenta para criar uma API RESTful completa em segundos a partir de um arquivo JSON.

## 🚀 Configuração e Execução

Para explorar o projeto, siga os passos abaixo. É essencial ter o [Node.js](https://nodejs.org/) instalado.

**1. Clone o Repositório**
```bash
git clone https://github.com/narcisoribas/react_with_redu.git

