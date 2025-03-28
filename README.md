Code-Connect

Um projeto feito com React + Vite + TypeScript, que consome uma API para exibir publicações em cards.

📌 Funcionalidades

✔️ Barra lateral (estática)
✔️ Campo de busca (sem funcionalidade)
✔️ Filtro com botão "Limpar Tudo" (sem funcionalidade)
✔️ Consumo de API com fetch e .then() para exibir publicações em cards


---

🚀 Como rodar o projeto

1. Clonar o repositório

git clone https://github.com/Nicolas7720/Code-Connect/
cd code-connect

2. Instalar as dependências

npm install

3. Rodar o projeto

npm run dev

O projeto estará disponível em http://localhost:5173/ 🚀


---

📂 Estrutura do Projeto

src/
│── components/
│   ├── Sidebar.tsx
│   ├── SearchInput.tsx
│   ├── Filter.tsx
│   ├── Card.tsx
│── pages/
│   ├── Home.tsx
│── types.ts
│── App.tsx
│── main.tsx
│── index.css
│── README.md


---

📦 Tecnologias utilizadas

React

Vite

TypeScript

Fetch API (para consumo de API)

Tailwind CSS (se estiver usando)



---

🔗 API utilizada

Os dados são carregados da API CodeConnect.

Endpoint usado:

https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes

Exemplo de requisição:

useEffect(() => {
  fetch("https://my-json-server.typicode.com/MonicaHillman/codeconnect-api/publicacoes")
    .then((response) => response.json())
    .then((data) => setPublicacoes(data))
    .catch((error) => console.error("Erro ao buscar publicações:", error));
}, []);


---

🛠️ Melhorias Futuras

🔹 Funcionalidade de busca
🔹 Filtro funcional
🔹 Responsividade aprimorada


---

📜 Licença

Este projeto está sob a licença MIT.
