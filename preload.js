const readlineSync = require("readline-sync");
const fs = require("fs");
const puppeteer = require('puppeteer');
const path = require('path');
// import readlineSync from './node_modules/readline-sync/lib/readline-sync.js';
// import {fs} from './node_modules/fs-extra/lib/index.js';
// import puppeteer from './node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js';
// import path from './node_modules/path-type/index.js';

export default print = async () => {

  const contrato = `_____________________________________________________<br> TESTEMUNHAS`;
const contratoHtml = `
<!DOCTYPE html>
<html>
<head>
  <style>
  @page {
    margin: 94px;    /* Ajuste a margem superior */
    
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


  // Crie um arquivo HTML temporário
  fs.writeFileSync('temp.html', contratoHtml);

  // Use puppeteer para criar um PDF a partir do arquivo HTML
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve('temp.html'), { waitUntil: 'networkidle0' });
  await page.pdf({ path: `${"teste"}.pdf`, format: 'A4', printBackground: true });

  await browser.close();

  // Remova o arquivo HTML temporário
  fs.unlinkSync('temp.html');

};

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })

