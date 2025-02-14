const fs = require('fs');
const axios = require('axios');
const RSSParser = require('rss-parser');
const { RSS_URL, RSS_FILE_PATH } = require('../config/constants');

const parser = new RSSParser();

module.exports = {
  fetchAndSaveRSS: async () => {
    const response = await axios.get(RSS_URL);
    fs.writeFileSync(RSS_FILE_PATH, response.data);
  },

  readRSSFile: async () => {
    if (!fs.existsSync(RSS_FILE_PATH)) return null;
    const rawXML = fs.readFileSync(RSS_FILE_PATH, 'utf-8');
    return parser.parseString(rawXML);
  },

  searchItems: (feed, termo, limite) => {
    let results = feed.items;
    
    if (termo) {
      const termoLower = termo.toLowerCase();
      results = results.filter(item => 
        item.title.toLowerCase().includes(termoLower) ||
        (item.contentSnippet && item.contentSnippet.toLowerCase().includes(termoLower))
      );
    }
    
    return results.slice(0, limite);
  }
};