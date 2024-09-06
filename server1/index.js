const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  if (req.query.message === "Hi") {
    return res.send("hello from server 1");
  } else {
    res.send('Send "Hi" as a message');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
