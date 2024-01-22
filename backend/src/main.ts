import express from 'express'

const app = express()
app.use(express.json())

app.get('/', function (req, res) {
  res.json({ message: 'Welcome!' })
})

const port = 3000
app.listen(port, () => {
  console.log(`🌍 Server running on port ${port}!`)
})
