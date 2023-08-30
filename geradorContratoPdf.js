// Não é necessário importar readline-sync, fs-extra ou path-type, pois eles não são usados diretamente no seu código.
import * as puppeteer from './node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js';

export default print = async () => {
  const contrato = `_____________________________________________________<br> TESTEMUNHAS`;
  const contratoHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        @page {
          margin: 94px;
        }
        body {
          font-family: Arial, sans-serif;
          font-size: 9pt;
          text-align: justify;
          line-height: 1.25;
        }
        h1 {
          font-size: 48pt;
          line-height: 2;
          height: calc(100vh - 94px);
          display: flex;
          flex-direction: column;
          flex-wrap: nowrap;
          justify-content: center;
          align-items: center;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <p>
        ${contrato}
      </p>
    </body>
    </html>
  `;

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(contratoHtml);
  
  // Use puppeteer para criar um PDF a partir do conteúdo da página
  await page.pdf({ path: `${"teste"}.pdf`, format: 'A4', printBackground: true });
  
  await browser.close();
};

// print();
