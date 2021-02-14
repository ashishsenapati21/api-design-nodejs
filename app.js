require('dotenv').config()
const express = require("express");
const router = express.Router();
const indexRoutes = require("./routes/index.routes");

const app = express();

app.use(express.json());
app.use(router);

router.use('/', indexRoutes);

app.listen(process.env.PORT, () => { console.log("Server running at: "+ process.env.PORT) })

module.exports = router;