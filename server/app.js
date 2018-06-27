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


app.get('/hikes', (req, res) => {
  knex.from('hikes')
    .then(data => res.status(200).json({data}))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.get('/hikes/:id', (req, res) => {
  knex.from('hikes')
    .where({ id: req.params.id })
    .then(data => res.status(200).json({data}))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.put('/hikes/:id', (req, res) => {
  knex.from('hikes')
    .where({ id: req.params.id })
    .update(req.body)
    .then(() => {
      knex.from('hikes')
        .then(data =>
          res.status(200).json({ data }))
    }
  )
.catch(error => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.post('/hikes', (req, res) => {
  knex.from('hikes')
    .insert(req.body)
    // .returning('*')
    .then(data => res.status(200).json({data}))
    .catch(error => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.delete('/hikes/:id', (req, res) => {
  knex.from('hikes')
    .where({ id: req.params.id })
    .del()
    .then(() => {
      knex.from('hikes')
        // .where({ id: req.params.id })
        .then(data =>
          res.status(200).json({ data }))
    }
  )
.catch(error => res.status(500).json({ error: error.message, stack: error.stack }))
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))