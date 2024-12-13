require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const clothingRoutes = require("./routes/clothingRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/clothing", clothingRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
