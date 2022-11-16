
const bcrypt = require("bcryptjs");
const User = require('../models/user')


exports.postAddUser =  (req, res, next) => {
  const name = req.body.name;
  const lName = req.body.lName;
  const password = req.body.password
  const region = req.body.region;
  const country = req.body.country
  if (name === "" || lName === "" || password === "" || region === "" || country === "") {
    return res.status(400).json({ msg: "Debe llenar todos los campos" });
  }

  if (password.length < 6) {
    return res.status(400).json({ msg: "La contraseña es muy corta. Debe ser minimo 6 caracteres" });
  }
  bcrypt.hash(password, 12)
  .then((hashedPsw) => {
    const user = new User(null, name, lName, hashedPsw, region, country)
    return user.save()
  })
  .then(() => {
    return res.status(200).json({ msg: "Se ha creado el usuario" });
  }).catch(err => {
    console.log(err);
    return res.status(500).json({ msg: "No se puedo crear el usuario" });
  })

};
