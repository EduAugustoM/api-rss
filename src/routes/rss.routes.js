const express = require('express');
const router = express.Router();
const rssController = require('../controllers/rss.controller');

router.get('/extract-rss', rssController.extractRSS);
router.get('/noticias', rssController.getNews);
router.get('/noticias/busca', rssController.searchNews);

module.exports = router;