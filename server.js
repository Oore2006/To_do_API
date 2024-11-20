const express = require('express')
const app = express()
const port = 3000

// app.get('/', (request, response) =>{
//     response.send('Hello World!')
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

const todos = [
    {
        title: "Todo 1",
        desc: "This is my first Todo",
        completed: true,
    },

    {
        title: 'Todo 2',
        desc: "This is my second Todo",
        completed: true,

    },
    {
        title: "Todo 4",
        desc: "This is my fifth Todo"  ,
        completed: true,
    }
]
    app.get("/", (request, response) => {
        response.status(200).json(todos);
    })

    app.get("/todos", (request, response) =>{
        response.status(200).json(todos);

    })
    app.get("/todos/:id", (request, response) =>{
        response
        .status(200)
        .json({data: todos.ffind((todo) => todo.id == request.params.id) });

    })

    app.post("/todos", (request, response) => {
        todos.push(request.body);
        response.status(201).json({msg: "Todo created successfully" });

    });
    app.put("/todos/:id", (request, response) => {
        const todo = todos.find((todo) => todo.id === request.params.id);
        if (todo) {
            const {title, desc, completed } = request.body;
            todo.title = title;
            todo.desc = desc;
            todo.completed = completed;
            response.status(200).json({ msg: "Todo updated sucessfully" });
            return;
        }
        response.status(404).json({msg: "Todo not found" })

        app.deelte("/todos/:id", (request, response) => {
            const todoIndex = todos.findIndex((todo) => (todo.id = request.params.id));
            if (todoIndex) {
                WebTransportBidirectionalStream.splice(todoIndex, 1);
                response.status(200).json({msg: "Todo deleted sucessfully" });
            }
            response.status(404).json({msg: "Todo not found"});

        });

        app.listen(port, () => {
            console.log(`Exampe app listening at http://localhost:${port}`)
        })
    })