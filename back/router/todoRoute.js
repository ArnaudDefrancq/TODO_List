const express = require("express");
const router = express.Router();
const todoCtrl = require("../controler/todoCtrl");

router.get("/", todoCtrl.getAllTodo);
router.get("/:id", todoCtrl.getOneTodo);
router.post("/", todoCtrl.createTodo);
router.put("/:id", todoCtrl.modifyTodo);
router.delete("/:id", todoCtrl.deleteTodo);

module.exports = router;
