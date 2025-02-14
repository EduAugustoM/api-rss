const output = document.getElementById('output');

async function atualizarRSS() {
  try {
    output.textContent = 'Atualizando RSS...';
    const response = await fetch('/extract-rss');
    output.textContent = await response.text();
    setTimeout(listarNoticias, 2000);
  } catch (error) {
    output.textContent = 'Erro: ' + error.message;
  }
}

async function listarNoticias() {
  try {
    output.innerHTML = '<p>Carregando notícias...</p>';

    const response = await fetch('/noticias');
    const data = await response.json();

    output.innerHTML = ''; // Limpa o conteúdo anterior

    // Verifica se há notícias
    if (!data.items || data.items.length === 0) {
      output.innerHTML = '<p class="sem-resultados">Nenhuma notícia encontrada</p>';
      return;
    }

    // Cria header com informações do feed
    const header = document.createElement('div');
    header.innerHTML = `
  <div class="feed-header">
    <h2>${data.titulo}</h2>
    ${data.descricao ? `<p class="feed-description">${data.descricao}</p>` : ''}
  </div>
`;
    output.appendChild(header);

    // Processa cada notícia
    data.items.forEach(noticia => {
      // Tratamento da descrição
      const descricao = noticia.descricao
        ? noticia.descricao.replace(/<\/?[^>]+(>|$)/g, "").split(/\. |\n/)[0] + '.'
        : 'Descrição não disponível';

      // Formatação de data
      const dataFormatada = noticia.data
        ? new Date(noticia.data).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
        : 'Data não disponível';

      const item = document.createElement('div');
      item.className = 'noticia-item';
      item.innerHTML = `
    <h3>${noticia.titulo}</h3>
    <p class="descricao">${descricao}</p>
    <div class="meta">
      <span class="data">${dataFormatada}</span>
    </div>
    <a href="${noticia.link}" target="_blank" class="leia-mais">Leia mais →</a>
    <hr>
  `;
      output.appendChild(item);
    });

  } catch (error) {
    output.innerHTML = `
  <div class="erro">
    <p>Erro ao carregar notícias:</p>
    <p>${error.message}</p>
  </div>
`;
  }
}

async function buscarNoticias() {
  try {
    const termo = document.getElementById('termo').value;
    const limite = document.getElementById('limite').value;

    output.innerHTML = '<p>Buscando...</p>'; // Feedback visual

    const response = await fetch(`/noticias/busca?termo=${encodeURIComponent(termo)}&limite=${limite}`);
    const data = await response.json();

    output.innerHTML = ''; // Limpa o conteúdo anterior

    // Verifica se há resultados
    if (data.quantidade === 0) {
      output.innerHTML = `<p class="sem-resultados">Nenhuma notícia encontrada para "${termo}"</p>`;
      return;
    }

    data.resultados.forEach(noticia => {
      // Tratamento da descrição
      const descricao = noticia.descricao
        ? noticia.descricao.replace(/<\/?[^>]+(>|$)/g, "").split(/\.|\n/)[0] + '.'
        : 'Descrição não disponível';

      // Formatação de data
      const dataFormatada = new Date(noticia.data).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      const item = document.createElement('div');
      item.className = 'noticia-item';
      item.innerHTML = `
    <h3>${noticia.titulo}</h3>
    <p class="descricao">${descricao}</p>
    <div class="meta">
      <span class="data">${dataFormatada}</span>
    </div>
    <a href="${noticia.link}" target="_blank" class="leia-mais">Leia mais →</a>
    <hr>
  `;
      output.appendChild(item);
    });

  } catch (error) {
    output.innerHTML = `<p class="erro">Erro na busca: ${error.message}</p>`;
  }
}

// Expõe as funções para o HTML (opcional, apenas se necessário)
window.atualizarRSS = atualizarRSS;
window.buscarNoticias = buscarNoticias;