const express = require("express");
const route = express.Router();
const userModel = require("./User");

route.post("/addUser", (req, res) => {
  const { name, login, password,voitureId } = req.body;
  console.log(req.body);
  const newUser = new userModel({
    name,
    login,
    password,
    voitureId,
  });
  newUser
    .save()
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

route.get("/getuser", (req, res) => {
  userModel
    .find().populate('voitureId')
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => res.status(500).json(err));
});

route.delete("/deleteuser/:voitureId", (req, res) => {
  userModel
  .findOneAndDelete({voitureId:req.params.voitureId})

    // .findByIdAndDelete({ _id: req.params.id })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

route.put("/updateuser", (req, res) => {
  const { _id, name, login, password } = req.body;
  userModel
    .findByIdAndUpdate(_id, { name, login, password })
    .then(() => {
      userModel
        .findById(_id)
        .then((user) => res.status(200).json(user))
        .catch((err) => res.status(400).json(err));
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = route;
