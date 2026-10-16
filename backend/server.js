const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const messages = [{ id: 1, name: "checm008", text: "Hello from backend!" }];

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Atwork backend is running",
    endpoints: {
      messages: "/api/messages",
    },
  });
});

app.get("/api/messages", (req, res) => res.json(messages));

app.listen(3000, () => console.log("API running on http://localhost:3000"));
