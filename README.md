![image](https://github.com/user-attachments/assets/e91e11cd-7f29-446b-a04b-328dc938766e)

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
├── public/                  # Arquivos estáticos acessíveis publicamente
│   ├── js/                  # Scripts JavaScript do front-end
│   │   └── rss-utils.js     # Utilitários JavaScript para manipulação de RSS
│   ├── styles/              # Arquivos de estilo CSS
│   │   └── styles.css       # Estilos CSS para a interface do usuário
│   └── index.html           # Página HTML principal do front-end
├── src/                     # Código-fonte da aplicação
│   ├── config/              # Configurações globais da aplicação
│   │   └── constants.js     # Constantes utilizadas no projeto (ex: URLs, chaves, etc.)
│   ├── controllers/         # Controladores que lidam com a lógica das rotas
│   │   └── rss.controller.js # Controlador para manipulação de feeds RSS
│   ├── routes/              # Definição das rotas da API
│   │   └── rss.routes.js    # Rotas relacionadas ao RSS
│   └── services/            # Serviços que contêm a lógica de negócio
│       └── rss.service.js   # Serviço para buscar e processar feeds RSS
├── .dockerignore            # Arquivo que especifica quais arquivos ignorar ao construir a imagem Docker
├── Dockerfile               # Instruções para construir a imagem Docker
├── index.js                 # Ponto de entrada da aplicação (inicializa o servidor)
├── package-lock.json        # Arquivo gerado automaticamente com versões exatas das dependências
└── package.json             # Metadados do projeto e lista de dependências
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
