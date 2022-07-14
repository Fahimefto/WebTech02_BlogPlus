const express = require("express");
const cors = require("cors");
const userRoutes = require("./users/routes");
const blogRoutes = require("./blog/routes");
const authRoutes = require("./auth/routes");
const profileRoutes = require("./profile/routes");
const cookieParser = require("cookie-parser");

const app = express();

//middleware

app.use(express.json());

app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("homepage running");
});

app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

app.listen(5000, () => {
  console.log("server is running on port 5001");
});
