const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
    res.send('this is my first node and i  feel excited and i feel you')
})

const users = [
    { id: 0, name: "sabana", email: "sabana@gmail.com", phone: "9498098" },
    { id: 1, name: "suchorita", email: "suchorita@gmail.com", phone: "9498098" },
    { id: 2, name: "sonia", email: "sonia@gmail.com", phone: "9498098" },
    { id: 3, name: "sabnur", email: "sabnur@gmail.com", phone: "9498098" },
    { id: 4, name: "srabonti", email: "srabonti@gmail.com", phone: "9498098" },
    { id: 5, name: "sarkar", email: "sarkar@gmail.com", phone: "9498098" },
    { id: 6, name: "abdul", email: "abdul@gmail.com", phone: "9498098" },

]

// query parameter

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    res.send(users)
})


// app.method
app.post('/users', (req, res) => {
    const newUser = req.body
    newUser.id = users.length
    res.json(newUser)
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id
    const user = users[id]
    res.send(user)
})

app.get('/fruits/mangoes/fazle', (req, res) => {
    res.send('Yammi Yammi')
})

app.listen(port, () => {
    console.log('Running Successful', port);
})