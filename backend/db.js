const mongoose = require("mongoose")
// mongodb url
// mongodb+srv://admin:69oT1OQIs4rwFtBb@to-do-app-cluster.niwc4rd.mongodb.net/todos

//.env
mongoose.connect("mongodb+srv://admin:69oT1OQIs4rwFtBb@to-do-app-cluster.niwc4rd.mongodb.net/todos")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}