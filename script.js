window.addEventListener("load", function () {
    setTimeout(() => {
        const loaderWrapper = document.querySelector(".loader-wrapper");
        loaderWrapper.style.opacity = "0";
        setTimeout(() => {
            loaderWrapper.style.display = "none";
            document.querySelector(".content").style.display = "block";
        }, 1000);
    }, 1000);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic fog generation
function createFogElements() {
    const fogContainer = document.querySelector('.fog-container');
    const fogCount = 5; // Number of fog elements

    // Colors for fog layers
    const fogColors = [
        'rgba(61, 39, 111, 0.15)', // #3d276f
        'rgba(0, 29, 131, 0.15)',  // #001d83
        'rgba(57, 151, 127, 0.15)', // #39977f
        'rgba(4, 86, 134, 0.15)',  // #045686
    ];

    for (let i = 0; i < fogCount; i++) {
        const fog = document.createElement('div');
        fog.className = 'fog';

        // Random animation properties
        const duration = 25 + Math.random() * 15; // 25-40 seconds
        const delay = Math.random() * -30; // Random start position
        const height = 80 + Math.random() * 70; // 80-150% height
        const blur = 30 + Math.random() * 10; // 30-60px blur
        const opacity = 0.1 + Math.random() * 2; // 0.1-0.25 opacity
        const color = fogColors[i % fogColors.length]; // Cycle through colors

        fog.style.cssText = `
            animation: drift ${duration}s linear ${delay}s infinite;
            height: ${height}%;
            filter: blur(${blur}px);
            opacity: ${opacity};
            background: radial-gradient(ellipse at center,
                ${color} 0%,
                rgba(0, 0, 0, 0) 70%);
        `;

        fogContainer.appendChild(fog);
    }
}

// Initialize fog after page loads
window.addEventListener('load', () => {
    createFogElements();
});