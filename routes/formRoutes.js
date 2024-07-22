const router = require("express").Router();
const {
  fetchForm,
  addForm,
  modifyForm,
  destroyForm,
} = require("../controllers/formController");

router.get("/fetch", fetchForm);
router.post("/add", addForm);
router.put("/modify/:id", modifyForm);
router.delete("/destroy/:id", destroyForm);

module.exports = router;
