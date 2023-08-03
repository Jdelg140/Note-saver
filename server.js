const express = require('express');

const apiRoutes = require('./routes/apiRoutes');
const homeRoutes= require('./routes/homeRoutes')

const PORT = process.env.port || 3001;

const app = express();


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', homeRoutes);





app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);