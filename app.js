const express = require('express');


const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const userRoutes  = require('./routes/user')

const app = express();


app.use('/users', userRoutes);

app.use(errorController.get404);


sequelize
  // .sync({ force: true })
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
