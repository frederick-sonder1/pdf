pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.7.107/build/pdf.worker.min.js"; // spécification de l'URL du script du worker PDF.js à utiliser.

const canvas = document.getElementById('pdfCanvas');                                                       // Récupération de l'élément pdfCcanvas de la modale
const pdfPath = 'new_document.pdf';                                                                                 // Chemin vers le fichier PDF

pdfjsLib.getDocument(pdfPath).promise.then(pdf => {                                                                 // Module de chargement du fichier PDF
    return pdf.getPage(1);                                                                                          // Récupération de la première page du PDF
}).then(page => {
    const scale = 1;                                                                                                // Définission de l'échelle pour le rendu de la page
    const viewport = page.getViewport({ scale });                                      // Dimensions de la page
    const context = canvas.getContext('2d');                                                                // Obtenir un contexte de rendu en 2D

    canvas.width = viewport.width;                                                                                  // Définission les dimensions du canvas
    canvas.height = viewport.height;                                                                                // Définission les dimensions du canvas

    const renderContext = {                                                                                         // Rendu de la page sur le canvas
        canvasContext: context,
        viewport: viewport
    };
    page.render(renderContext);
}).catch(error => {                                                                                                 // Retourne l'erreur si existante
    console.error('Une erreur est survenue lors du chargement du fichier PDF :', error);
});