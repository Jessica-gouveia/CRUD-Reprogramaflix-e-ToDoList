const controller = require("../controllers/toDoControllers")
const express = require("express")
const router = express.Router()

router.get("/tarefa", controller.home)
router.get("/todos", controller.getAll)
router.get("/:id", controller.getById)

router.post("/cadastrar", controller.createTask)

router.delete("/:id", controller.deleteTask)

router.put("/:id", controller.replaceTask)

router.patch("/atualizar/:id", controller.updateAnything)






module.exports = router
