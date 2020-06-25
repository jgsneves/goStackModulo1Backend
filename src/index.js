const express = require('express');
const cors = require('cors');
const {uuid, isUuid} = require('uuidv4');

const app = express();

app.use(cors()); //lib para proteger acesso ao backend.
app.use(express.json()); //o express vai interpretar json

const projects = [];

function logRequests(request, response, next) {
    //middleware
    const {method, url} = request;
    const logLabel = `[${method.toUpperCase()}] ${url}`;
    console.log(logLabel);

    return next();
}

function validateProjectId(request, response, next) {
    const {id} = request.params;

    if (!isUuid(id)) {
        return response.status(400).json({
            error: "Id de projeto inválido!"
        });
    }

    return next();
}

app.use(logRequests);

app.use('/projects/:id', validateProjectId);

app.get('/', (request, response) => {
    return response.json("bem vindo")
});

app.get('/projects', (request, response) => {
    const {title} = request.query;

    const results = title ? projects.filter(
        project => project.title.includes(title)
    ) : projects;

    return response.json( //respostas JSON sempre retornam ou um array ou
        //um objeto javascript
        results
    );
})

app.post('/projects', (request, response) => {
    const {title, owner} = request.body;
    const project = {id: uuid(), title, owner};
    projects.push(project);
    return response.json(project);
});

app.put('/projects/:id', (request, response) => {
    const {id} = request.params;
    const {title, owner} = request.body;

    const projectIndex = projects.findIndex(
        project => project.id === id
    );

    if (projectIndex < 0) {
        return response.status(400).json(
            {error: "Projeto não encontrado"}
        );
    }

    const project = {
        id,
        title,
        owner
    }

    projects[projectIndex] = project;

    return response.json(project);
});

app.delete('/projects/:id', (request, response) => {
    const {id} = request.params;
    const projectIndex = projects.findIndex(
        project => project.id === id
    );

    if (projectIndex < 0) {
        return response.status(400).json({
            error: "Projeto não encontrado"
        });
    }

    projects.splice(projectIndex, 1);

    return response.json({message: "Projeto deletado"});
});

app.listen(3333, () => {
    //função chamada automaticamente quando o server vai no ar
    console.log("Servidor Backend rodando...");
});