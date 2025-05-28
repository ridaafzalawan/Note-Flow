const connectToMongo = require('./db')
const express = require('express')
const app = express()
const port = 5000
connectToMongo();

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('SignUp rida!')
//   })

  app.use('/api/auth' , require('./routes/auth'))
  app.use('/api/notes' , require('./routes/notes'))
app.listen(port, () => {
  console.log(`Rida's Notebook listening on port ${port}`)
})
