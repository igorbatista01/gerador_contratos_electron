// const { ipcRenderer } = require("electron");
// const { printPDF } = require("./geradorContratoPdf");
// import { ipcRenderer } from "electron";
// import { printPDF } from "./geradorContratoPdf.js";
// const { ipcRenderer } = require("electron");
import { ipcRenderer } from "electron";

function imprimirContrato() {
  const contrato = `_____________________________________________________<br> TESTEMUNHAS`;
  ipcRenderer.invoke("printPDF", contrato);
}
// function imprimirContrato() {
//   const contrato = `_____________________________________________________<br> TESTEMUNHAS`;
//   printPDF(contrato);
// }

// const toggleForm = () => {
//   if (document.getElementById("formContrato").style.display === "block") {
//     document.getElementById("formContrato").style.display = "none";
//   } else document.getElementById("formContrato").style.display = "block";
//   // ipcRenderer.send("acao-imprimir");
// };
// document.getElementById("btnContrato").addEventListener("click", toggleForm);
document.getElementById("gerarPDF").addEventListener("click", imprimirContrato);
