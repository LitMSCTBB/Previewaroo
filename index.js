//Classic set-up for
var express = require("express");
var app = express();
const port = process.env.PORT || 2818;
require("dotenv").config();
const cors = require("cors");
const jsonEncoded = express.json({ limit: "10MB" });

const fs = require("fs");

app.use(cors());

const api = fs
  .readdirSync("./api")
  .filter((file) => file.endsWith(".js"));

for (const file of api) {
  const execute = require(`./api/${file}`);

  app.post(
    `/api/${file.substring(0, file.length - 3)}`,
    jsonEncoded,
    (req, res) => {
      execute(req, res);
    }
  );
}

(async () => {

  if (process.env.PRODUCTION) {
    app.use(express.static(path.join(__dirname, "frontend/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
    });
  }
})();

app.listen(port, (_) => {
  console.log(`Listening at http://localhost:${port}`);
});
