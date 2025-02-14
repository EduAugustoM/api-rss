const rssService = require('../services/rss.service');

module.exports = {
  extractRSS: async (_, res) => {
    try {
      await rssService.fetchAndSaveRSS();
      res.send('Carregando RSS...');
    } catch (error) {
      console.error('Erro ao extrair RSS:', error);
      res.status(500).send('Erro ao atualizar o RSS');
    }
  },

  getNews: async (_, res) => {
    try {
      const feed = await rssService.readRSSFile();
      if (!feed) return res.status(404).json({ erro: 'Arquivo RSS não encontrado' });

      res.json({
        titulo: feed.title,
        descricao: feed.description,
        items: feed.items.map(item => ({
          titulo: item.title,
          link: item.link,
          descricao: item.contentSnippet,
          data: item.pubDate,
        }))
      });
    } catch (error) {
      console.error('Erro detalhado:', error);
      res.status(500).json({ erro: 'Erro ao processar RSS' });
    }
  },

  searchNews: async (req, res) => {
    try {
      const { termo, limite = 10 } = req.query;
      const feed = await rssService.readRSSFile();
      
      if (!feed) return res.status(404).json({ erro: 'Arquivo RSS não encontrado' });

      const resultados = rssService.searchItems(feed, termo, parseInt(limite));

      res.json({
        quantidade: resultados.length,
        resultados: resultados.map(item => ({
          titulo: item.title,
          link: item.link,
          descricao: item.contentSnippet,
          data: item.pubDate,
        }))
      });
    } catch (error) {
      console.error('Erro na busca:', error);
      res.status(500).json({ erro: 'Falha na busca' });
    }
  }
};