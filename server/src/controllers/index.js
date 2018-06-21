const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, "../../../dist", "index.html"));
});

router.use((req, res) => {
  res.status(404).json({
    errorMessage: "Page Not Found",
  });
});

router.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({
    errorMessage: "Internal Server Error"
  });
});

module.exports = router;