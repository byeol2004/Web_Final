document.addEventListener("DOMContentLoaded", function() {
    fetch('gallery.php') // Ensure the path is correct
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            console.error(data.error);
            return;
        }

        // Select the container where gallery items will be displayed
        const galleryContainer = document.querySelector('main');

        // Clear out existing gallery sections
        galleryContainer.innerHTML = '';

        // Group images by upload date
        const groupedImages = data.reduce((acc, item) => {
            const date = new Date(item.upload_date).toDateString();
            if (!acc[date]) {
                acc[date] = [];
            }
            acc[date].push(item);
            return acc;
        }, {});

        // Iterate through grouped images and display them in sections
        for (const [date, images] of Object.entries(groupedImages)) {
            const section = document.createElement('section');
            section.classList.add('gallery-date');

            section.innerHTML = `
                <h2>Uploaded on: ${date}</h2>
                <div class="gallery-grid">
                ${images.map(image => `
                    <div class="gallery-item">
                        <img src="${image.image_url}" alt="Gallery Image">
                        <div class="overlay">
                            <i class="fas fa-heart"></i>
                        </div>
                        <div class="image-info">
                            <p>Uploaded on: ${date}</p>
                        </div>
                    </div>
                `).join('')}
                </div>
            `;

            galleryContainer.appendChild(section);
        }
    })
    .catch(error => console.error('Error fetching gallery data:', error));
});
