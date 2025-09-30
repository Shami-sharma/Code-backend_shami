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

const githubData = {
  name : "shammi sharma",
  repo :"code-backend-shami",
};

app.get('/github', (req, res) => {
  res.json(githubData) 
})


app.listen(process.env.PORT || 3000, () => {
    console.log('Example app listening on port ${process.env.PORT || 3000}')
})
