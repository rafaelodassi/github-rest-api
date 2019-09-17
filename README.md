# GitHub REST API
Projeto que utiliza métodos da REST API do GitHub

## Link de publicação do projeto
[https://rafaelodassi.github.io/github-rest-api](https://rafaelodassi.github.io/github-rest-api)

## Principais tecnologias e ferramentas utilizadas

### ReactJS
Utilização do ReactJS (com HOOKS) na componentização de elementos DOM e controle de estado na interação do usuário com as telas

### React Router
Utilização do React Router para gerenciar as rotas virtuais de navegação, utilizando a técnica SPA (Single Page Application)

### Redux
Utilização do Redux para compartilhar e gerenciar as alterações de estado entre os componentes

### redux-saga
Utilização do redux-saga para gerenciar as centralizar as requisições HTTP

### reduxsauce
Utilização do reduxsauce para otimizar o uso do pattern ducks, a fim de deixar o uso do redux menos verboso e mais prático

### Webpack
Utilização do Webpack (já incluso no ReactJS) para utilizar as rotinas de build e fornecer os polyfill necessários para se trabalhar com ES6 em navegadores antigos e modernos

### SASS
Utilização do pré-processador SASS para ajudar na produtividade na escrita do CSS e também para estruturar as folhas de estilo de forma simples e escalável

### EditorConfig
Utilização do EditorConfig para manter uma padronização na formatação dos arquivos

### axios
Cliente HTTP baseado em promise para auxiliar na chamada das rotas de API

### Jest
Utilização do Jest para gerenciar a cobertura de testes unitários nos componentes

## Navegadores homologados
- Google Chrome;
- Mozilla Firefox;
- Microsoft Edge;
- Internet Explorer 11.

## Scripts

### Rodar em modo desenvolvimento
```sh
git clone git@github.com:rafaelodassi/github-rest-api.git
cd github-rest-api
npm install
npm start
```

### Gerar build
```sh
npm run build
```

### Fazer deploy no gh-pages do GitHub
```sh
npm run build
npm run deploy
```

<!-- ### Rodar testes
```sh
npm run test
``` -->