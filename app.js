const express = require('express');
const bodyParser = require('body-parser')

const regionRoutes = require('./routes/region')
const userRoutes  = require('./routes/user')
const app = express();
app.use(bodyParser.json()); 


app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");

  next();
});
app.use('/api', regionRoutes)
app.use('/users', userRoutes)

app.listen(3000)