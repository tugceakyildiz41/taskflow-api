const express = require('express')
const taskRoutes = require('./routes/taskRoutes')
const logger = require('./middleware/logger')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
  res.json({ message: 'TaskFlow API çalışıyor' })
})

app.use('/tasks', taskRoutes)

app.listen(PORT, () => {
  console.log('Sunucu http://localhost:' + PORT + ' adresinde çalışıyor')
})