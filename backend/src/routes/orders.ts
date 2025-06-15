
import express from 'express';
const router = express.Router();

// POST /api/orders
router.post('/', async (req, res) => {
  const { userId, total } = req.body;
  res.json({ orderId: 1, userId, total, status: 'pending' });
});

export default router;
