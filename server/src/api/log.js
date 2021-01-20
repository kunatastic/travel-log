const express = require("express");
const router = express.Router();
const loginSchema = require("../models/loginSchema");

router.get("/", async (req, res, next) => {
  try {
    const entries = await loginSchema.find();
    res.json(entries);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  console.log(req.body);
  try {
    const logEntry = new loginSchema(req.body);
    const createdEntry = await logEntry.save();
    res.json(createdEntry);
  } catch (error) {
    // console.log(error.name);
    if (error.name === "ValidationError") res.status(422);
    next(error);
  }
});
module.exports = router;
