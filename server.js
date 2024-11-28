const express = require("express");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());
connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on PORT no ${PORT}`);
});

// route
app.use("/api/v1", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Login SignUp App</h1>");
});
