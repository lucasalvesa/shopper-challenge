# Projeto Shopper - Teste Técnico 🛒 🧾

Este é um projeto **Node.js + React** que permite aos usuários fazer o upload de um arquivo CSV, validar seus conteúdos e atualizar informações no banco de dados **MySQL**.

<div align="center">
  <video src="https://github.com/lucasalvesa/shopper-challenge/assets/85463742/a8e76b40-fc1e-48b9-8880-22efabb0d247" width="200" />
</div>

## Funcionalidades Principais

:white_check_mark:  Os usuários podem carregar um arquivo CSV.
<br/>:white_check_mark:  O sistema pode validar o arquivo CSV com base em regras de negócio predefinidas.
<br/>:white_check_mark:  Os produtos no arquivo CSV serão atualizados no banco de dados.

## Bibliotecas Utilizadas

No back-end foram adicionados os seguintes pacotes:
- **Express**: Utilizado para criar um servidor web e definir rotas para as funcionalidades do back-end.
- **Multer**: Gerencia o upload de arquivos no servidor.
- **MySQL2**: Biblioteca para interagir com um banco de dados MySQL.
- **dotenv**: Permite a configuração de variáveis de ambiente para armazenar informações sensíveis, como credenciais de banco de dados.
- **fast-csv**: Facilita a leitura e escrita de arquivos CSV.
- **fs**: Módulo nativo do Node.js para manipulação de arquivos no sistema de arquivos.

No front-end foi adicionado o pacote:
- **styled-components**: Uma biblioteca popular de estilo para React que permite escrever estilos CSS em JavaScript usando uma sintaxe elegante de tagged template literals.

## Como Iniciar o Projeto :computer:

### Back-end
1. Clone este repositório: `https://github.com/lucasalvesa/shopper-challenge`
2. Navegue até a pasta do projeto: `cd shopper-backend`
3. Instale as dependências: `npm install`
4. Dentro deste diretório (shopper-backend) crie um arquivo `.env` na raíz. Agora configure as variáveis de ambiente no arquivo com suas credenciais do banco de dados. Exemplo:
```env
MYSQL_HOST='127.0.0.1'
MYSQL_USER='root'
MYSQL_PASSWORD='password'
MYSQL_DATABASE='shopper_database'
```
5. Caso ainda não tenha o banco de dados pronto, pode acessar o arquivo `schema.sql`, copiar seu conteúdo e executá-lo de depois de rodar o comando `mysql` no seu terminal.
6. Abra outro terminal ainda dentro da pasta `shopper-backend` e execute `node app.js` para iniciar o servidor.
7. Este projoeto está configurado para rodar na porta `8080`.

### Front-end
1. Navegue até a pasta do projeto: `cd shopper-frontend`
3. Instale as dependências: `npm install` (e por segurança `yarn install`).
4. Abra outro terminal ainda dentro da pasta `shopper-frontend` e execute `npm start` para iniciar o o React.
5. Este projoeto está configurado para rodar na porta `3000`.

## Comentários

- Atualmente, o backend deste projeto está funcionando conforme o esperado e aceitando solicitações do Postman com sucesso. No entanto, estou ciente de que encontro adversidades ao enviar o arquivo CSV por meio da interface do React. 

- Fiz uma opção por não escolher vários pacotes React que poderiam ter (de certa forma) encurtado alguns processos, justamente por considerar que no ambiente de produção não é possível recorrer a quaisquer bibliotecas externas sempre que se assim o desejar.

- Credito à uma limitação de ambiente, a impossibilidade de entregar o projeto em TypeScript. Sempre que insisti em atualizar meu `react-scripts` eu recebia o retorno de que `react-scripts is up to date`. Porém, ao executar o comando `npx create-react-app --template typescript` ele me dizia que `the react-scripts version you're using is not compatible with the --template option.` E ao invés de usar `npx`, passei para o `yarn` e consegui fazer parte do desafio com TypeScript. Porém o projeto parou de rodar no meio do caminho.

- No mais adoraria ter a oportunidade conversar mais e me apresentar melhor para dizer o quão empolgado estou para fazer parte da equipe! 

