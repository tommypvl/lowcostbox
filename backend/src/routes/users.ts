
import express from 'express';
const router = express.Router();

// POST /api/users
router.post('/', async (req, res) => {
  const { telegramId, firstName } = req.body;
  res.json({ success: true, telegramId, firstName });
});

export default router;
