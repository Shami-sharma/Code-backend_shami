require('dotenv').config()

const express = require('express')

const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req, res) => {
  res.send('code_shami')
})

app.get('/login', (req, res) => {
  res.send('<h1> plz login code with shami<h1>')
})

app.get('/youtube', (req, res) => {
  res.send("<h2> mr.golbel360</h2>") 
})

app.listen(Proces.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
