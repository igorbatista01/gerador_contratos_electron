import gerarPdf from './geradorContratoPdf.js';
const toggleForm = () => {
    gerarPdf();
    if (document.getElementById('formContrato').style.display === 'block') {
        document.getElementById('formContrato').style.display = 'none';
    } else
        document.getElementById('formContrato').style.display = 'block';
}
document.getElementById('btnContrato').addEventListener('click', toggleForm);

// gerarPdf(); // Chama a função importada do outro arquivo
