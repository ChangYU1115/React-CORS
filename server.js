import express from "express";

const app = express();

// 啟用 CORS
app.use(express.static("dist"));

app.get("/api/users", (req, res) => {
  res.send([
    {
      id: 1,
      name: "Wu",
      age: 30,
    },
    {
      id: 2,
      name: "Chang",
      age: 30,
    },
  ]);
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));
