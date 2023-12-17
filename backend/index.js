const express = require("express");
const cors = require("cors")
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "*",
    ],
    credentials: true,
    origin: true,
  })
);

const users = [
  {
    id: 1,
    name: "Abdul Rehman",
  },
  {
    id: 2,
    name: "Yahya",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.listen(3100);
