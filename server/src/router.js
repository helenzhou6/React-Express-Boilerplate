const express = require("express");

const router = express.Router();

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