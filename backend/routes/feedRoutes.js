const express = require('express');  // Импортируем express
const axios = require('axios');     // Импортируем axios для работы с HTTP запросами
const xml2js = require('xml2js');   // Импортируем xml2js для парсинга XML

const router = express.Router();     // Создаем router

// Ваш код для маршрута
router.post('/import', async (req, res) => {
  try {
    const { feedUrl } = req.body;
    if (!feedUrl) {
      return res.status(400).json({ success: false, error: 'feedUrl is required' });
    }

    console.log('Fetching feed from:', feedUrl);
    
    const response = await axios.get(feedUrl);
    console.log('Feed fetched successfully, status code:', response.status);

    const parsed = await xml2js.parseStringPromise(response.data, { mergeAttrs: true });
    console.log('Parsed XML:', parsed);

    const offers = parsed.yml_catalog.shop[0].offers[0].offer;
    console.log('Offers extracted:', offers.length);

    // Логирование структуры одного объекта offer
    console.log('Example offer structure:', offers[0]);

    const products = offers.map(item => ({
      id: item.$?.id || 'unknown',  // Защищаемся от ошибки с отсутствующим id
      available: item.$?.available === 'true',
      name: item.name?.[0] || 'No name',
      price: item.price?.[0] || '0',
      categoryId: item.categoryId?.[0] || '0',
      image: item.picture?.[0] || 'No image',
      description: item.description?.[0] || 'No description'
    }));

    res.json({ success: true, count: products.length, products });
  } catch (error) {
    console.error('Feed import error:', error.message);
    res.status(500).json({ success: false, error: 'Failed to import feed', details: error.message });
  }
});
