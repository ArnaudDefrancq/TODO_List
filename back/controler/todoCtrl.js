const Todo = require("../model/todo");

exports.getAllTodo = (req, res) => {
  Todo.find()
    .then((todo) => {
      res.status(200).json(todo);
    })
    .catch((e) =>
      res.status(400).json({ error: "Impossible de tout montrer", e })
    );
};

exports.getOneTodo = (req, res) => {
  Todo.findOne({ _id: req.params.id })
    .then((todo) => res.status(200).json(todo))
    .catch((e) => res.status(400).json({ error: "Todo non trouvé", e }));
};

exports.createTodo = (req, res) => {
  const todoObject = req.body;
  const todo = new Todo({
    ...todoObject,
  });
  todo
    .save()
    .then(() => res.status(200).json({ message: "Todo ajouté à la liste !" }))
    .catch((e) => res.status(400).json({ error: "Problème", e }));
};

exports.modifyTodo = (req, res) => {
  const newTodo = req.body;
  console.log(newTodo);

  Todo.findByIdAndUpdate({ _id: req.params.id }, { ...newTodo })
    .then(() => res.status(200).json({ message: "Todo modifier" }))
    .catch((e) => res.status(400).json({ error: "Todo non modifier", e }));
};

exports.deleteTodo = (req, res) => {
  Todo.findOneAndDelete({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Todo supprimé" }))
    .catch((e) => res.status(400).json({ error: "Todo non supprimé", e }));
};
