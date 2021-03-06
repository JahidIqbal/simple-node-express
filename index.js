const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())

const port = 5000;




app.get('/', (req, res) => {
    res.send('Wow I am excited to start node by jhankar bhai the mentor');
})

const users = [
    { id: 0, name: "shabana", email: "shabana@gmail.com", phone: "01735674834" },
    { id: 1, name: "sanjida ", email: "sanjida@gmail.com", phone: "01737934340" },
    { id: 2, name: "srabonti", email: "srabonti@gmail.com", phone: "01735674834" },
    { id: 3, name: "sonia", email: "sonia@gmail.com", phone: "01735674834" },
    { id: 4, name: "sushmita", email: "sushmita@gmail.com", phone: "01735674834" }
]


app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users);
    }

});

// app.Method 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("hitting the post ", req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'jackfruit', 'banana'])
})


app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('yummy yummy tok marka fazli');
})


app.listen(port, () => {
    console.log('Listening to port', port);
})