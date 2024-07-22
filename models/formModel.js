const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const fieldSchema = new Schema(
  {
    id: { type: Number, required: true },
    type: { type: String, required: true },
    label: { type: String, required: true },
    placeholder: { type: String, required: true },
  },
  { _id: false }
);

const formSchema = new Schema({
  title: { type: String, required: true },
  fields: [fieldSchema],
});

const Form = model("Form", formSchema);

module.exports = Form;
