const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const donations = [
  { name: "Amit", amount: 500, date: "2025-12-01" },
  { name: "Priya", amount: 1000, date: "2025-12-02" },
  { name: "Rahul", amount: 750, date: "2025-12-03" },
  { name: "Sneha", amount: 1200, date: "2025-12-04" }
];

app.get("/api/donations", (req, res) => {
  res.json(donations);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
