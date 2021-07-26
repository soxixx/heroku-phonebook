const express = require('express')
const app = express()
const cors = require('cors')

var morgan = require('morgan')
// morgan('tiny')

morgan.token('req_body', function (req, res) {
    return JSON.stringify(req.body)}
)

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :req_body'))
app.use(cors())
app.use(express.static('build'))

const generateId = () => Math.floor(Math.random()*1000)
  
let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })
  
app.get('/api/persons', (req, res) => {
    res.json(persons)
  })

app.get('/info',(req,res) =>{
    res.send(`<div>Phonebook has info for ${persons.length} people 
    <div><p> ${new Date()}</p></div></div>`)
})

app.get('/api/persons/:id',(req,res) =>{
  const id = Number(req.params.id)
  const person = persons.find(one => one.id === id)

  if (person) {res.json(person)} 
  else {res.status(404).end()}
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(one => one.id !== id)
  
    res.status(204).end()
  })

app.post('/api/persons', (req, res) => {
    const body = req.body
    if (!body.name || !body.number) {
        return res.status(400).json({ 
        error: 'name or number missing' 
        })
    }
    const currentPerson = persons.find(person => person.name === body.name)
    if (null == currentPerson){
        const person = {
            name: body.name,
            number: body.number,
            id: generateId()
        }
        persons = persons.concat(person)
        res.json(person)
    }
    else{
      return res.status(400).json({ 
      error: 'name must be unique' 
      })
    }
})

app.put('/api/persons/:id',(req,res)=>{
  const id = Number(req.params.id)
  persons = persons.filter(one=>one.id !== id)
  const body = req.body
  const person = {
    name: body.name,
    number: body.number,
    id: body.id
  }
  persons = persons.concat(person)
  res.json(person)
})

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
  }
  
app.use(unknownEndpoint)
  

const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)