const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
// if the route is different from /api, send a message that the route is wrong
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
