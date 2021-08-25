const task = require("../models/tarefas.json")

const home = (request, response) => {
    response.status(200).send({
        "message": "Olá seja bem vinde a sua lista de tarefas!"
    })
}

const getAll = (request, response) => {
    response.status(200).send(task)
}

const getById = (request, response) => {
    const requiredId = request.params.id 
    const filteredId = task.find(task => task.id == requiredId)
    response.status(200).send(filteredId)
}

const createTask = (request, response) => {
    let requestedDescricao = request.body.descricao 
    let requestedNomeColaborador = request.body.nomeColaborador 

    const newTask = {
        "id": Math.random().toString(32).substr(2,6),
        "dataInclusao": new Date(),
        "concluido": false,
        "descricao": requestedDescricao,
        "nomeColaborador": requestedNomeColaborador


    }
    task.push(newTask)
    response.status(200).send({"message": "Tarefa criada com sucesso!!", newTask})
}

const deleteTask = (request, response) => {
    const requiredId = request.params.id 
    const filteredId = task.find(task.id == requiredId)
    const indice = task.indexOf(filteredId)
    task.splice(indice,1)
    response.status(200).send({
        "message": "Tarefa deletada com sucesso!", task
    })
}

const replaceTask = (request, response) => {
    let requiredId = request.params.id 
    let taskUpdated = request.body
    let filteredId = task.find(task => task.id == requiredId)

    let updateTask = {
        "id": filteredId,
        "dataInclusao": taskUpdated.dataInclusao,
        "concluido": taskUpdated.concluido,
        "descricao": taskUpdated.descricao,
        "nomeColaborador": taskUpdated.nomeColaborador
    }

    const indice = task.indexOf(filteredId)
    task.splice(indice,1,updateTask)

    response.status(200).send({"message": "Tarefa atualizada com sucesso!", updateTask})
}

const updateAnything = (request, response) => {
    let requestedId = request.params.id 
    let filteredId = task.find(task => task.id == requestedId)
    let update = request.body
    let keyList = Object.keys(update)

    keyList.forEach((key) => {
        filteredId[key] = update[key]
    })

    response.status(200).send({"message": "Informação atualizada com sucesso!", filteredId})
}

module.exports = {home, getAll, getById, createTask, deleteTask, replaceTask, updateAnything}