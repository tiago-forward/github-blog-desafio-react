# Desafio React (Rocketseat) - Github Blog

## Tabela do Conteudo

<ul>
 <li><a href="#introdução">Introdução</a></li>
 <li><a href="#objetivo">Objetivo</a></li>
 <li><a href="#desafio">Desafio</a></li>
 <li><a href="#status">Status</a></li>
 <li><a href="#layout-do-projeto">Layoult do projeto</a></li>
 <li><a href="#curiosidade">Curiosidade</a></li>
 <li><a href="#tecnologias-e-bibliotecas-utilizadas">Tecnologias e bibliotecas</a></li>
 <li><a href="#instalando-e-executando-o-projeto">Instalação</a></li>
 <li><a href="#acessando-o-site">Acessando o site</a></li>
</ul>

## Introdução

Esse desafio faz parte do curso da [Rocketseat](https://app.rocketseat.com.br/cart/rocketseat-one?referral=tiago-forward&coupon=indicamgm&utm_source=platform&utm_medium=organic&utm_campaign=venda&utm_term=mgm&utm_content=indication-lp_one), ele serve para nos desafiarmos e nos preparar para o mercado de trabalho. Irei resolver esse desafio e compartilhar minha experiência.

<img src="./src/assets/Capa.png" alt="">

## Objetivo

Desenvolver uma aplicação que utilizará da API do GitHub para buscar issues de um repositório, dados do seu perfil e exibir elas como um blog, onde haverá:

    - Listagem do seu perfil com imagem, número de seguidores, nome e outras informações disponíveis pela API do GitHub; ✅
    - Listar e filtrar todas as issues do repositório com um pequeno resumo do conteúdo dela; ✅
    - Criar uma página para exibir um post (issue) completo; ✅

## Desafio

Durante o desenvolvimento desse projeto, pude reforçar em como utilizar o Axios para fazer as consultas da API do GitHub, onde foi realizado 3 tipos de busca, primeiro buscar os dados de usuário do perfil expondo na página principal, abaixo na mesma página, outra consulta a Api para exibir todas as issues do repositório, e por último, mais uma consulta, para expor em uma nova página os dados da issue que foi selecionada na primeira página.

## Status

Desafio concluído. 🥰

## Layout do projeto

<img src="./src/assets/github-blog-layout.gif" alt="Gif do layout descktop">
<!-- <img src="" alt="Gif do layout mobile"> -->

## Curiosidade

Serão abordados os conceitos abaixo para a resolução desse desafio:

- Estados
- Imutabilidade do estado
- Listas e chaves no ReactJS
- Propriedades
- Componentização

## Tecnologias e bibliotecas utilizadas

- HTML
- CSS
- JavaScript
- TypeScript
- React do Vite
- React-Hook-Form
- Axios
- Styled-Components
- React-Router-Dom
- React-Hook-Form / @hookform resolvers
- Zod
- Git

## Instalando e executando o projeto

1º - Clone o repositório do projeto em HTTPS ou SSH com sua SSH key;

HTTPS
```bash
  git clone   git clone https://github.com/tiago-forward/todo-list-desafio-react.git
```

SSH
```bash
  git clone git@github.com:tiago-forward/github-blog-desafio-react.git
```

Em sua máquina, crie uma nova pasta e execute o git, e em seguida cole um dos links acima.
<br>

2º - Entre no diretório do projeto na qual foi clonado;

```bash
  cd github-blog-desafio-react
```

3º - Execute o comando abaixo para instalar todas as dependências utilizadas;

```bash
  npm install
```

4º - Inicialize a aplicação para ver o código funcionando na web.

```bash
  npm run dev
```

## Acessando o site

Para acessar meu projeto online, acesse esse link : <a href="https://github-blog-desafio-react.vercel.app/" target="_blank">Desafio React (Rocketseat) - Github Blog</a>
