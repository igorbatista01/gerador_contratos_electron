const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  printPDF: (contrato) => {
    ipcRenderer.invoke("printPDF", contrato);
  },
});
