const connectToMongo = require('./db');
const express = require('express');
const cors = require('cors'); // ✅ ADD THIS

const app = express();
const port = 5000;

connectToMongo();

app.use(cors()); // ✅ ADD THIS
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`✅ Rida's Notebook listening on port ${port}`);
});
