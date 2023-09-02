const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const readlineSync = require("readline-sync");
const fs = require("fs");
const puppeteer = require("puppeteer");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      // nodeIntegration: true,
      // contextIsolation: false,
    },
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  // ipcMain.on("acao-imprimir", () => {
  //   print();
  // });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.handle("printPDF", async (event, contrato) => {
  // Código para gerar e imprimir o PDF
  console.log(event, contrato);
  // const printWindow = window.open("", "_blank");
  // printWindow.document.open();
  const contratoHtml = `
    <!DOCTYPE html>
    <html>
    <head>
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
    </head>
    <body>
      ${contrato}
    </body>
    </html>
  `;
  // printWindow.document.close();
  // printWindow.print();
  // printWindow.close();
  // Crie um arquivo HTML temporário
  fs.writeFileSync("temp.html", contratoHtml);

  // Use puppeteer para criar um PDF a partir do arquivo HTML
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("file://" + path.resolve("temp.html"), {
    waitUntil: "networkidle0",
  });
  await page.pdf({
    path: `${"teste"}.pdf`,
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  // Remova o arquivo HTML temporário
  fs.unlinkSync("temp.html");
});
