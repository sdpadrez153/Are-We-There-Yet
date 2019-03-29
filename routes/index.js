const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// // API Routes
router.use("/api", apiRoutes);
// router.use("/api", require("./api"));
// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../app/build/index.html"));
});

module.exports = router;