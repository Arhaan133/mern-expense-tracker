const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");

// POST /api/expenses
router.post('/', async (req, res) => {
  console.log('Received POST request to /api/expenses'); // 👈 Add this line
  try {
    const newExpense = new Expense(req.body);
    const savedExpense = await newExpense.save();
    res.status(201).json(savedExpense);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to save expense' });
  }
});


// GET /api/expenses
router.get("/", async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
