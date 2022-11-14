
exports.postAddUser = (req, res, next) => {
  const name = req.body.name;
  const lname = req.body.lname;
  const password = req.body.password
  req.user
    .createUser({
      name,
      lname,
      password,
    })
    .then(result => {
      console.log(result);
      console.log('Created user');
    })
    .catch(err => {
      console.log(err);
    });
};
