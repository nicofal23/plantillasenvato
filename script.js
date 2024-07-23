function showPreview(url) {
    var modal = document.getElementById("previewModal");
    var iframe = document.getElementById("previewFrame");
    iframe.src = url;
    modal.style.display = "block";
}

function closePreview() {
    var modal = document.getElementById("previewModal");
    modal.style.display = "none";
    var iframe = document.getElementById("previewFrame");
    iframe.src = "";
}

function setIframeSize(device) {
    var iframe = document.getElementById("previewFrame");
    if (device === 'desktop') {
        iframe.style.width = '100%';
        iframe.style.height = '500px';
    } else if (device === 'tablet') {
        iframe.style.width = '768px';
        iframe.style.height = '1024px';
    } else if (device === 'mobile') {
        iframe.style.width = '375px';
        iframe.style.height = '667px';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Asegurando que el DOM está cargado antes de intentar acceder a los elementos.
    var buttons = document.querySelectorAll(".controls button");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            var device = this.getAttribute("data-device");
            setIframeSize(device);
        });
    });
});
