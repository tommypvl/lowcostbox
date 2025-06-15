
import express from 'express';
const router = express.Router();

// GET /api/products
router.get('/', async (req, res) => {
  res.json([{ id: 1, name: 'Тестовий товар', price: 199 }]);
});

export default router;
