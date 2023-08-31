// const { ipcMain } = require("electron");
import { ipcMain } from "electron";

ipcMain.handle("printPDF", (contrato) => {
  // Código para gerar e imprimir o PDF
  const printWindow = window.open("", "_blank");
  printWindow.document.open();
  printWindow.document.write(`
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
  `);
  printWindow.document.close();
  printWindow.print();
  // printWindow.close();
});

// function printPDF(printContent) {
//   const printWindow = window.open("", "_blank");
//   printWindow.document.open();
//   printWindow.document.write(`
//     <!DOCTYPE html>
//     <html>
//     <head>
//       @page {
//         margin: 94px;

//       }
//       body {
//         font-family: Arial, sans-serif;
//         font-size: 9pt;
//         text-align: justify;
//         line-height: 1.25;
//       }
//       h1 {
//         font-size: 48pt;
//         line-height: 2;
//         height: calc(100vh - 94px);
//         display: flex;
//         flex-direction: column;
//         flex-wrap: nowrap;
//         justify-content: center;
//         align-items: center;
//         text-align: center;
//       }
//     </head>
//     <body>
//       ${printContent}
//     </body>
//     </html>
//   `);
//   printWindow.document.close();
//   printWindow.print();
//   // printWindow.close();
// }

// module.exports = {
//   printPDF,
// };

// export printPDF()
