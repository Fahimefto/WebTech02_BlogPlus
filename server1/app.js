const express = require("express");
const userRoutes = require("./users/routes");
const blogRoutes = require("./blog/routes");
const authRoutes = require("./auth/routes");

const app = express();

//middleware

app.use(express.json());

app.get("/", (req, res) => {
  res.send("homepage running");
});

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
