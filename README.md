<div align=center>
<img src="https://raw.githubusercontent.com/jgsneves/goStackModulo1Backend/master/gostack_rocketseat.png" />
</div>

# Back-end com NodeJS

Este repositório tem o objetivo de consolidar o conhecimento adquirido na aula "Back-end com NodeJS" do Módulo 01 do bootcamp GoStack da Rocketseat


## :memo: O que é este repo?

Basicamente é uma API escrita em NodeJS em que exploramos as principais requisições HTTP (GET, POST, PUT, DELETE) manipulando JSON que são projetos com a seguinte estrutura:

```js
{
	"id": hash,
	"title": "criar uma aplicação em react",
	"owner": "joão"
}
```
Aprendemos também a utilizar o framework Express para roteamento e utilização de Middlewares. Inclusive, aplicamos um Middleware que gerencia a utilização de um Route Param pelo usuário da API, tratando esse input e verificando se este é válido:

```js
function validateProjectId(request, response, next) {
    const {id} = request.params;

    if (!isUuid(id)) {
        return response.status(400).json({
            error: "Id de projeto inválido!"
        });
    }

    return next();
}
```

## :computer: Tecnologias empregadas:
- [Express](https://expressjs.com/);
- [Uuidv4 - gerador de hash aleatória](https://www.npmjs.com/package/uuidv4);
- [Node] (https://nodejs.org/en/);
- [Nodemon] (https://nodemon.io/);

## :nerd_face: Competências adquiridas:
- Conceitos API Rest: verbos HTTP (GET, POST, PUT, DELETE);
- HTTP Codes (100 - informational; 200 - sucess; 300 - redirect; 400 - client error; 500 - server error);
- Tipos de parâmetro:
1. Query Params: geralmente utilizados em requisições get (filtros e paginação);
2. Route Params: são passados na url com o uso de slash "/". Geralmente são utilizados em PUT/DELETE;
3. Request Body: é o corpo da requisição HTTP. Geralmente em formato JSON para utilizar o método POST;

