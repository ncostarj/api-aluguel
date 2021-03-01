const { config } = require("./config/app");
require('./common/db').db(config);
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");

const app = express();
const port = config.app.port;
const routes = require("./routes/web").routes;
const cors = require("./middleware/cors");

app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors);
app.use("/api/v1", routes(router));

app.listen(port, () => {
  console.log(`API rodando em: http://localhost:${port}`);
  console.log();
});
