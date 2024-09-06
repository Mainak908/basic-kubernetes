const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  if (req.query.message === "Hi") {
    return res.send("hello from server 2");
  } else {
    res.send('Send "Hi" as a message');
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
