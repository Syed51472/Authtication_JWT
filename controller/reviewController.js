function reviewController(req, res) {
  console.log("Hitted");
  return res.status(200).send({ name: "Review Handler hitted" });
}

function updateHandler(req, res) {
  let { id } = req.params;
  console.log(id);
  return res.status(200).send({ name: "Update Handler hitted" });
}

module.exports = { reviewController, updateHandler };
