
# Trabalho Final - Frontend React CRUD Produtos

Este projeto é um frontend em React (utilizando Vite) que realiza operações de CRUD (Criar, Ler, Atualizar, Excluir) para produtos, consumindo a API pública disponível em `https://apipw.leoproti.com.br/produtos`.

## Funcionalidades
- Listagem de produtos
- Cadastro de novo produto
- Edição de produto existente
- Exclusão de produto
- Interface moderna usando Material-UI (MUI)
- Controle de rotas com React Router

## Estrutura Esperada do Produto
```json
{
  "id": 0,
  "nome": "string",
  "preco": 0
}
```

## Tecnologias Utilizadas
- React
- Vite
- Material-UI (MUI)
- React Router DOM
- Axios

## Instalação

Instale as dependências principais (execute na pasta do projeto):

```bash
npm install
```

Se estiver começando do zero ou faltar alguma dependência, execute:

```bash
npm install react react-dom
npm install react-router-dom @mui/material @mui/icons-material @emotion/react @emotion/styled axios
npm install --save-dev vite @vitejs/plugin-react
```

## Como Rodar o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra `http://localhost:5173` no navegador.

## Estrutura de Pastas Sugerida

```
src/pages       — Páginas principais (Listar, Criar, Editar)
src/components  — Componentes reutilizáveis (Formulário, Tabela, etc.)
src/services    — Serviços para requisições HTTP (Axios)
src/routes      — Definição das rotas da aplicação
```

## Rotas da Aplicação

| Caminho       | Descrição                     |
| ------------- | -----------------------------|
| `/`           | Lista todos os produtos       |
| `/novo`       | Formulário para novo produto  |
| `/editar/:id` | Formulário para editar produto existente |

## Exemplos de Requisição para API

```js
// GET todos os produtos
axios.get("https://apipw.leoproti.com.br/produtos")

// POST novo produto
axios.post("https://apipw.leoproti.com.br/produtos", { nome: "Produto", preco: 10 })

// PUT atualizar produto
axios.put("https://apipw.leoproti.com.br/produtos/1", { nome: "Produto Atualizado", preco: 20 })

// DELETE remover produto
axios.delete("https://apipw.leoproti.com.br/produtos/1")
```

## Solução de Problemas com Dependências

Se aparecer erro de importação para alguma biblioteca, execute o comando correspondente:

- React Router DOM:

```bash
npm install react-router-dom
```

- Material-UI:

```bash
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
```

- Axios:

```bash
npm install axios
```

Após instalar as dependências que faltam, reinicie o servidor:

```bash
npm run dev
```

### Erro comum: "Failed to resolve import 'react-router-dom'"

Significa que o pacote `react-router-dom` não está instalado. Rode o comando acima para corrigir.

Repita para as outras dependências que faltar.

---

Siga as instruções acima para rodar e explorar o projeto!
