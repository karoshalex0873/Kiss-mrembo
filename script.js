const offerItems = document.querySelectorAll('.offer-item');

function showOffers() {
    offerItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, 1000 * index);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    showOffers();
});

// home page interction 
document.addEventListener('DOMContentLoaded', function() {
    const contentItems = document.querySelectorAll('.content-item');
    let currentIndex = 0;
    let animationTimeout;

    function animateContentItems() {
        const previousIndex = currentIndex === 0 ? contentItems.length - 1 : currentIndex - 1;

        // Hide previous item completely
        contentItems[previousIndex].style.opacity = '0';
        // contentItems[previousIndex].style.left = '-100%';
        contentItems[previousIndex].style.left = '100%'; // Move off-screen to the left

        // Bring current item into view
        contentItems[currentIndex].style.opacity = '1';
        contentItems[currentIndex].style.transform = 'translate(-50%, -50%)';
        contentItems[currentIndex].style.left = '50%'; // Center horizontally

        // Update currentIndex
        currentIndex = (currentIndex + 1) % contentItems.length;

        // Schedule next animation cycle after a delay
        animationTimeout = setTimeout(function() {
            // Continue animation
            animateContentItems();
        }, 3000); // Adjust the delay as needed
    }

    // Start the animation
    animateContentItems();

    // Stop animation when the window is resized
    window.addEventListener('resize', function() {
        clearTimeout(animationTimeout);
    });
});


