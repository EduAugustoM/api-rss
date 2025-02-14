# Leitor de RSS do G1

Este projeto é um leitor de RSS que consome feeds do G1 e os disponibiliza em uma API construída com Node.js e Docker.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript para construir a API.
- **Express.js**: Framework para Node.js utilizado para criar as rotas da API.
- **Docker**: Para containerização e facilidade de deploy.
- **RSS Parser**: Biblioteca utilizada para parsear os feeds RSS.

## Estrutura do Projeto

```
api-rss/
├── node_modules/
├── public/
│   ├── js/
│   │   └── rss-utils.js
│   ├── styles/
│   │   └── styles.css
│   └── index.html
├── src/
│   ├── config/
│   │   └── constants.js
│   ├── controllers/
│   │   └── rss.controller.js
│   ├── routes/
│   │   └── rss.routes.js
│   └── services/
│       └── rss.service.js
├── .dockerignore
├── Dockerfile
├── index.js
├── package-lock.json
└── package.json
```

## Passos para Execução

### Pré-requisitos

- Docker instalado na máquina.
- Node.js instalado (opcional, caso queira rodar sem Docker).

### Executando com Docker

1. Clone o repositório:

   ```bash
   git clone https://github.com/eduaugustom/api-rss.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd api-rss
   ```

3. Construa a imagem Docker:

   ```bash
   docker build -t api-rss .
   ```

4. Execute o container:

   ```bash
   docker run -p 3000:3000 api-rss
   ```

5. A API estará disponível em `http://localhost:3000`.

### Executando sem Docker

1. Clone o repositório:

   ```bash
   git clone https://github.com/eduaugustom/api-rss.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd api-rss
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Inicie o servidor:

   ```bash
   npm start
   ```

5. A API estará disponível em `http://localhost:3000`.

## Autor

[Eduardo Augusto](https://github.com/eduaugustom)
