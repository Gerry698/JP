document.addEventListener('DOMContentLoaded', function () {

    // Open Modal
    document.querySelectorAll('.photo').forEach(photo => {
        photo.addEventListener('click', function() {
            const src = this.style.backgroundImage.slice(4, -1).replace(/"/g, "");
            document.querySelector('.modal-content img').src = src;
            
            const modal = document.querySelector('.modal');
            modal.style.display = 'block';
            modal.style.opacity = '0';
            
            // This double requestAnimationFrame is a trick to ensure
            // that the browser has time to apply the display: block style
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    modal.style.opacity = '1';
                });
            });
        });
    });

    // Close Modal
    document.querySelector('.modal').addEventListener('click', function() {
        const modal = document.querySelector('.modal');
        modal.style.opacity = '0';
        
        // Wait for the transition to finish, then hide the modal
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500); // Match this duration to your CSS transition duration
    });

    // Add more event listeners as necessary for other elements

});

