const express = require("express");
const path = require("path");

app = express();

app.use("/js", express.static("./src/js"));
app.use("/css", express.static("./src/css"));
app.use("/images", express.static("./src/images"));
app.get("/", async (req, res) => {
  res.sendFile(path.join(__dirname + "/./src/index.html"));
});

app.listen(3000);
console.log("App on port 3000, https://localhost:3000/");
