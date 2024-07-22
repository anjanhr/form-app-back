const router = require("express").Router();

const formRoutes = require("./formRoutes");

router.use("/form", formRoutes);

module.exports = router;
