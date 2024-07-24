
let currentIndex = 0;
const templatesPerPage = 10;

function showPreview(url) {
    const previewContainer = document.getElementById('previewContainer');
    const previewFrame = document.getElementById('previewFrame');
    previewFrame.src = url;
    previewContainer.style.display = 'flex';
}

function closePreview() {
    const previewContainer = document.getElementById('previewContainer');
    const previewFrame = document.getElementById('previewFrame');
    previewFrame.src = '';
    previewContainer.style.display = 'none';
}

function loadMoreTemplates() {
    fetch('templates.json')
        .then(response => response.json())
        .then(templates => {
            const templateContainer = document.getElementById('templateContainer');
            for (let i = currentIndex; i < currentIndex + templatesPerPage && i < templates.length; i++) {
                const template = templates[i];
                const templateDiv = document.createElement('div');
                templateDiv.className = 'template';
                templateDiv.onclick = () => showPreview(template.url);
                templateDiv.innerHTML = `
                    <img src="${template.src}" alt="${template.title}">
                    <h2>${template.title}</h2>
                `;
                templateContainer.appendChild(templateDiv);
            }
            currentIndex += templatesPerPage;
            if (currentIndex >= templates.length) {
                document.getElementById('loadMoreBtn').style.display = 'none';
            }
        })
        .catch(error => console.error('Error loading templates:', error));
}

function setIframeSize(size) {
    const previewFrame = document.getElementById('previewFrame');
    previewFrame.className = ''; // Reset any existing classes
    switch(size) {
        case 'desktop':
            previewFrame.classList.add('scaled-desktop');
            break;
        case 'tablet':
            previewFrame.classList.add('scaled-tablet');
            break;
        case 'mobile':
            previewFrame.classList.add('scaled-mobile');
            break;
        default:
            previewFrame.classList.add('scaled-desktop');
    }
}

// Cargar las primeras plantillas al inicio
document.addEventListener('DOMContentLoaded', loadMoreTemplates);
