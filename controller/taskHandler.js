const db = require("../models");

const Task = db.tasks;

async function postHandler(req, res) {
  let { Title, details, status } = req.body;

  let isAvailable = await Task.findOne({
    where: {
      Title: Title,
    },
  });

  if (isAvailable) {
    return res.status(200).send({ message: "Task already exists." });
  } else {
    let newtask = await Task.create({
      Title: Title,
      details: details,
      status: status,
    });

    console.log("Hitted");
    return res.status(200).send({ name: "Task created successfully" });
  }
}

function getHandler(req, res) {
  console.log("Hitted");
  return res.status(200).send({ name: "Get Handler hitted" });
}

function putHandler(req, res) {
  console.log("Hitted");
  return res.status(200).send({ name: "Put Handler hitted" });
}

function deleteHandler(req, res) {
  console.log("Hitted");
  return res.status(200).send({ name: "Delete Handler hitted" });
}

module.exports = { postHandler, getHandler, putHandler, deleteHandler };
