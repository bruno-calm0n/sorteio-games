# Sorteio de Jogos

Um aplicativo React para sortear aleatoriamente um jogo entre uma lista pré-definida de títulos e manter um histórico dos sorteios.

## Funcionalidades

- Sorteio de um jogo aleatório a partir de um arquivo JSON (`games.json`).
- Histórico dos jogos sorteados, armazenado em memória e exibido em uma rota separada.
- Navegação entre tela de sorteio e tela de histórico usando React Router.
- Estilização com Styled-Components.
- Animações em Botão e resultado do sorteio.
- Ícones com Lucide-React.

## Tecnologias

- React.js
- React Router DOM
- Styled-Components
- Lucide-React (biblioteca de ícones)

## Instalação

1. Clone este repositório:

   ```bash
   [git clone https://seu-repositorio/sorteio-games.git](https://github.com/bruno-calm0n/sorteio-games.git)
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd sorteio-games
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

## Execução

Inicie o servidor de desenvolvimento:

```bash
npm start
```

O aplicativo estará disponível em `http://localhost:3000`.

## Rotas

- `/` - Tela de sorteio.
- `/history` - Tela de histórico dos jogos sorteados.

## Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento.
- `npm run build` - Gera build de produção.
- `npm test` - Executa testes (se configurados).

## Customização

- **Lista de jogos**: Edite o arquivo `games.json` para adicionar ou remover títulos.
- **Estilos**: Modifique `*.styles.js` para alterar cores, fontes e layouts.

## Licença

Este projeto está licenciado sob a licença MIT.
