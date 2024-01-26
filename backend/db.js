const mongoose = require("mongoose")
// mongodb url

//.env
mongoose.connect(process.env.DB_HOST)

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}