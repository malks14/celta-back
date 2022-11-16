const db = require("../util/database")

module.exports = class User{
  constructor(id, name, lName, password, region, country) {
    this.id = id;
    this.name = name;
    this.lName = lName;
    this.password = password;
    this.region = region;
    this.country = country
  }

  save(){
    return db.execute(
      'INSERT INTO users (name, lName, password, region, country) VALUES (?, ?, ?, ?, ?)',
      [this.name, this.lName, this.password, this.region, this.country]
    );
  }
}