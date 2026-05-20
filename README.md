# Conversor-de-Unidade

A aplicação permite converter valores entre diferentes categorias de medida, como peso, comprimento e temperatura.

Project URL: [URL projeto](https://github.com/DevYuriOliveira73/Conversor-de-Unidade)

## Tecnologias utilizadas

### Front-end

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

### Back-end

- Node.js
- Express

## Funcionalidades

- Conversão de unidades por categoria.
- Categorias disponíveis:
  - Peso
  - Comprimento
  - Temperatura
- Consumo de API no front-end usando Axios.
- Selects dinâmicos com base nas unidades retornadas pelo back-end.
- Exibição do resultado da conversão na própria tela.
- Opção para fechar/limpar o resultado exibido.

## Destaque técnico


Exemplo de rotas:

```txt
GET /weight
GET /length
GET /temperature
```

Essas rotas retornam as unidades suportadas para cada tipo de conversão.

Dessa forma, caso uma nova unidade de conversão seja adicionada no back-end, o front-end consegue refletir essa alteração automaticamente, sem necessidade de alterar manualmente os selects na interface.


## Estrutura do projeto

```txt
.
├── api
│   └── back-end da aplicação
│
├── frontend
│   └── front-end da aplicação
│
└── README.md
```


## Como rodar o projeto

Para executar o projeto completo, é necessário rodar o back-end e o front-end separadamente.

### 1. Instalar as dependências da API

Acesse a pasta da API:

```bash
cd api
```

Instale as dependências:

```bash
yarn install
```

Rode o back-end:

```bash
yarn dev
```

### 2. Instalar as dependências do front-end

Em outro terminal, acesse a pasta do front-end:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Rode o front-end:

```bash
npm run dev
```

O Vite irá informar no terminal a URL para acessar a aplicação, geralmente:

```txt
http://localhost:5173
```

## Exemplo de fluxo

1. O usuário escolhe uma categoria de conversão.
2. O front-end busca no back-end as unidades disponíveis para aquela categoria.
3. Os selects são preenchidos dinamicamente.
4. O usuário informa o valor, a unidade inicial e a unidade final.
5. O front-end envia os dados para a API.
6. A API calcula a conversão e retorna o resultado.
7. O resultado é exibido na tela.

## Objetivo do projeto

O objetivo do projeto é praticar a integração entre front-end e back-end, organização de services, consumo de API, manipulação de estados no React e criação de uma estrutura simples, mas flexível, para conversão de unidades.
