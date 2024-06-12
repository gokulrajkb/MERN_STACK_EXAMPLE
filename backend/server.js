const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Todo = require('./models/Todo')

mongoose.connect('mongodb://mongo/todos',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

mongoose.connection.once('open', () => {
   console.log('mongodb connection established !') 
})

const app = express()
const PORT = 4000

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    Todo.find((err, todos) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
        }
    });
});

app.post('/create', (req, res) => {
    const todo = new Todo(req.body);
    todo.save().then((todo) => {
        res.json(todo);
    }).catch((err) => {
        console.log(err);
        res.status(500).send(err.message);
    })
})

app.get('/:id', (req, res) => {
    const id = req.params.id
    Todo.findById(id, (err, todo) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });
});

app.delete('/:id', (req, res) => {
    const id = req.params.id
    Todo.deleteOne({ _id: id }, (err, todo) => {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });
});

app.post('/:id', (req, res) => {
    const id = req.params.id
    Todo.findById(id, (err, todo) => {
        if (!todo) {
            res.status(500).send(err.message);
        } else {
            todo.text = req.body.text
            todo.save().then((todo) => {
                res.json(todo);
            }).catch((err) => {
                console.log(err);
                res.status(500).send(err.message);
            })
        }
    });
});

app.listen(PORT, () => {
    console.log(`Backend server is running on port : ${PORT}`)
})
