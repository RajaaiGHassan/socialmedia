// DRAG AND DROP FUNCTIONALITY
const draggables = document.querySelectorAll('.draggable');
const dropzones = document.querySelectorAll('.dropzone');

// Drag events
draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
    });
});

// Dropzone events
dropzones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
        zone.classList.add('hovered');
    });

    zone.addEventListener('dragleave', () => {
        zone.classList.remove('hovered');
    });

    zone.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        if (draggable && draggable.textContent === zone.dataset.label) {
            zone.textContent = draggable.textContent;
            zone.style.color = "#ffffff"; // White text
            zone.style.fontWeight = "bold"; // Bold text
            zone.style.textShadow = "2px 2px 4px rgba(0, 0, 0, 0.8), -2px -2px 4px rgba(0, 0, 0, 0.8)"; // Outline effect

            draggable.style.display = 'none'; // Hide label after placing
        } else {
            alert("Incorrect placement! Try again.");
        }
        zone.classList.remove('hovered');
    });
});

