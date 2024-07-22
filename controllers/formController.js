const Form = require("../models/formModel");

const fetchForm = async (req, res) => {
  try {
    const data = await Form.find();
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const addForm = async (req, res) => {
  try {
    const body = req.body;
    const form = new Form(body);
    await form.save();
    res.status(201).json({ message: "Form added successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const modifyForm = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await Form.findByIdAndUpdate(id, body, { new: true });
    res.status(200).json(data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const destroyForm = async (req, res) => {
  try {
    const id = req.params.id;
    await Form.findByIdAndDelete(id);
    res.status(201).json({ message: "Form deleted successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  fetchForm,
  addForm,
  modifyForm,
  destroyForm,
};
