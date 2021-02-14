const express = require("express");
const router = express.Router();
const indexRoutes = require("./routes/index.routes");

const app = express();

app.use(express.json());
app.use(router);

router.use('/', indexRoutes);

app.listen(5000, () => { console.log("Server running at: "+ 5000) })

module.exports = router;