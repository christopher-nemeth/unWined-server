const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3000;
const knex = require('./connection')
const bodyParser = require('body-parser')
const morgan = require('morgan')

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors())

app.get('/users', (req, res) => {
  knex.from('users')
    .then(data => res.status(200).json({data}))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.get('/users/:id/', (request, response, next) => {
  return knex('users').innerJoin('wine', 'users.id', 'wine.users_id')
    .where('users.id', request.params.id)
    .then(user => {
      if (user) {
        return response.json(user)
      } else {
        return response.status(404).send({ message: 'User doesn\'t exist!' })
      }
    })
})

app.put('/users/:id', (req, res) => {
  knex.from('users')
    .where({ id: req.params.id })
    .update(req.body)
    .then(() => {
      knex.from('users')
        .then(data =>
          res.status(200).json({ data }))
    }
  )
.catch(error => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.post('/users', (req, res) => {
  knex.from('users')
    .insert(req.body)
    // .returning('*')
    .then(data => res.status(200).json({data}))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.delete('/users/:id', (req, res) => {
  knex.from('users')
    .where({ id: req.params.id })
    .del()
    .then(() => {
      knex.from('users')
        // .where({ id: req.params.id })
        .then(data =>
          res.status(200).json({ data }))
    }
  )
.catch(error => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.get('/wine', (req, res) => {
  knex.from('wine')
    .then(data => res.status(200).json({data}))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.get('/wine/:id', (req, res) => {
  knex.from('wine')
    .where({ id: req.params.id })
    .then(data => res.status(200).json({data}))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.put('/wine/:id', (req, res) => {
  knex.from('wine')
    .where({ id: req.params.id })
    .update(req.body)
    .then(() => {
      knex.from('wine')
        .then(data =>
          res.status(200).json({ data }))
    }
  )
.catch(error => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.post('/wine', (req, res) => {
  console.log(req.body)
  knex.from('wine')
    .insert(req.body)
    // .returning('*')
    .then(data => res.status(200).json({data}))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.delete('/wine/:id', (req, res) => {
  knex.from('wine')
    .where({ id: req.params.id })
    .del()
    .then(() => {
      knex.from('wine')
        // .where({ id: req.params.id })
        .then(data =>
          res.status(200).json({ data }))
    }
  )
.catch(error => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))