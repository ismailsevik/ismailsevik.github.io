const fs = require('fs');
const path = require('path');

const generateRSS = (dirPath) => {
  const files = fs.readdirSync(dirPath);
  const rssItems = [];

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    const content = fs.readFileSync(filePath, 'utf-8');

    // HTML içeriğini ayrıştırın ve RSS öğelerini oluşturun.

    const title = ...; // Sayfa başlığını ayıklayın.
    const description = ...; // Sayfa açıklamasını ayıklayın.
    const link = ...; // Sayfa bağlantısını ayıklayın.

    rssItems.push({
      title,
      description,
      link,
    });
  });

  // RSS xml oluşturun.

  const rssXml = `
    <rss version="2.0">
      <channel>
        <title>Siteniz Adı</title>
        <description>Siteniz Açıklaması</description>
        <link>https://www.siteniz.com</link>
        <item>
          ${rssItems.map((item) => `
            <title>${item.title}</title>
            <description>${item.description}</description>
            <link>${item.link}</link>
          `).join('')}
        </item>
      </channel>
    </rss>
  `;

  // rss.xml dosyasını oluşturun.

  fs.writeFileSync('./rss.xml', rssXml);
};

generateRSS('./public'); // Dizin yolunu ayarlayın.
