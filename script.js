// Sample destination data
const destinations = [
    {
        title: 'Santorini, Greece',
        description: 'Stunning white-washed buildings perched on cliffs overlooking the crystal-clear Aegean Sea. Experience breathtaking sunsets and traditional Greek culture.',
        image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=2000&auto=format&fit=crop',
        rating: 4.8
    },
    {
        title: 'Bali, Indonesia',
        description: 'Paradise island featuring ancient temples, lush rice terraces, pristine beaches, and vibrant cultural experiences.',
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop',
        rating: 4.7
    },
    {
        title: 'Machu Picchu, Peru',
        description: 'Ancient Incan citadel set high in the Andes Mountains. A marvel of engineering and one of the world\'s most fascinating archaeological sites.',
        image: 'https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=2000&auto=format&fit=crop',
        rating: 4.9
    },
    {
        title: 'Venice, Italy',
        description: 'Romantic city of canals, historic architecture, and timeless charm. Experience the unique culture of this floating city.',
        image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=2000&auto=format&fit=crop',
        rating: 4.6
    },
    {
        title: 'Maldives',
        description: 'Paradise on Earth with overwater bungalows, coral reefs, and crystal-clear turquoise waters perfect for luxury and relaxation.',
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2000&auto=format&fit=crop',
        rating: 4.9
    },
    {
        title: 'Swiss Alps',
        description: 'Majestic mountain peaks, pristine lakes, and charming villages. Perfect for both winter sports and summer hiking adventures.',
        image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2000&auto=format&fit=crop',
        rating: 4.8
    }
];

// Mobile detection
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

// Create neon blocks
function createNeonBlocks() {
    const neonBlocksContainer = document.createElement('div');
    neonBlocksContainer.className = 'neon-blocks';
    
    // Number of blocks to create
    const numBlocks = 15;
    
    for (let i = 0; i < numBlocks; i++) {
        const block = document.createElement('div');
        block.className = 'neon-block';
        
        // Random size between 20 and 100 pixels
        const size = Math.random() * 80 + 20;
        block.style.width = `${size}px`;
        block.style.height = `${size}px`;
        
        // Random position within hero section
        const top = Math.random() * 70 + 15; // Keep away from navbar
        const left = Math.random() * 90 + 5;
        block.style.top = `${top}%`;
        block.style.left = `${left}%`;
        
        // Random rotation
        const rotation = Math.random() * 360;
        block.style.transform = `rotate(${rotation}deg)`;
        
        // Random animation delay
        block.style.animationDelay = `${Math.random() * 2}s`;
        
        neonBlocksContainer.appendChild(block);
    }
    
    const heroSection = document.querySelector('.hero-section');
    heroSection.insertBefore(neonBlocksContainer, heroSection.firstChild);
}

// Create neon blocks for footer
function createFooterBlocks() {
    const footerBlocksContainer = document.createElement('div');
    footerBlocksContainer.className = 'neon-blocks';
    
    // Number of blocks for footer
    const numBlocks = 8;
    
    for (let i = 0; i < numBlocks; i++) {
        const block = document.createElement('div');
        block.className = 'neon-block';
        
        // Smaller size for footer blocks
        const size = Math.random() * 40 + 15;
        block.style.width = `${size}px`;
        block.style.height = `${size}px`;
        
        // Position within footer
        const top = Math.random() * 60 + 20;
        const left = Math.random() * 80 + 10;
        block.style.top = `${top}%`;
        block.style.left = `${left}%`;
        
        // Random rotation
        const rotation = Math.random() * 360;
        block.style.transform = `rotate(${rotation}deg)`;
        
        // Random animation delay
        block.style.animationDelay = `${Math.random() * 2}s`;
        
        footerBlocksContainer.appendChild(block);
    }
    
    const footer = document.querySelector('footer');
    footer.insertBefore(footerBlocksContainer, footer.firstChild);
}

// Create animated background elements
function createBackgroundElements() {
    const container = document.createElement('div');
    container.className = 'cyber-background';
    
    // Create floating elements
    for (let i = 0; i < 20; i++) {
        const element = document.createElement('div');
        element.className = 'cyber-element';
        
        // Random properties
        const size = Math.random() * 60 + 20;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;
        
        element.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${posX}%;
            top: ${posY}%;
            animation-delay: ${delay}s;
            animation-duration: ${duration}s;
        `;
        
        container.appendChild(element);
    }
    
    document.body.insertBefore(container, document.body.firstChild);
}

// Adjust animations for mobile
function adjustForMobile() {
    if (isMobile) {
        // Reduce number of background elements
        const backgroundElements = document.querySelectorAll('.cyber-element');
        backgroundElements.forEach((el, index) => {
            if (index > 10) el.remove(); // Keep only 10 elements on mobile
        });

        // Optimize animations
        document.querySelectorAll('.cyber-element').forEach(el => {
            el.style.animationDuration = '20s'; // Slower animations for better performance
        });

        // Disable spotlight effect
        const spotlight = document.querySelector('.spotlight');
        if (spotlight) spotlight.style.display = 'none';
    }
}

// Handle touch events for interactive elements
function initializeTouchEvents() {
    const interactiveElements = document.querySelectorAll('.card, .btn, .nav-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('touchstart', function(e) {
            this.classList.add('touch-active');
        });

        element.addEventListener('touchend', function(e) {
            this.classList.remove('touch-active');
        });
    });
}

// Smooth scroll for mobile
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                const navbarToggler = document.querySelector('.navbar-toggler');
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    navbarToggler.click();
                }
            }
        });
    });
}

// Populate destination cards
document.addEventListener('DOMContentLoaded', function() {
    createNeonBlocks();
    createFooterBlocks();
    createBackgroundElements();
    
    // Mobile optimizations
    adjustForMobile();
    initializeTouchEvents();
    initializeSmoothScroll();
    
    // Add glitch effect to headings
    const headings = document.querySelectorAll('h1, h2, h3');
    headings.forEach(heading => {
        heading.addEventListener('mouseover', function() {
            this.classList.add('glitch');
            setTimeout(() => this.classList.remove('glitch'), 1000);
        });
    });
    
    // Add hover effect to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.2)';
        });
        
        card.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 0 20px rgba(0, 255, 255, 0.05)';
        });
    });
    
    const destinationContainer = document.getElementById('destinationCards');
    
    destinations.forEach(destination => {
        const card = document.createElement('div');
        card.className = 'col-lg-4 col-md-6 mb-4';
        card.innerHTML = `
            <div class="card destination-card h-100">
                <div class="image-wrapper">
                    <img src="${destination.image}" class="card-img-top" alt="${destination.title}">
                    <div class="overlay">
                        <button class="btn btn-light neon-button">Explore Now</button>
                    </div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${destination.title}</h5>
                    <p class="card-text">${destination.description}</p>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <div class="rating">
                            <i class="bi bi-star-fill text-warning"></i>
                            <span class="ms-1">${destination.rating}</span>
                        </div>
                        <div class="location">
                            <i class="bi bi-geo-alt-fill text-primary"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
        destinationContainer.appendChild(card);
    });

    // Torch effect with trail
    const torch = document.querySelector('.torch');
    const trailPoints = [];
    const maxTrailPoints = 5;
    let lastX = 0;
    let lastY = 0;
    let isMoving = false;
    let timeoutId;

    // Create trail elements
    for (let i = 0; i < maxTrailPoints; i++) {
        const trail = document.createElement('div');
        trail.className = 'torch-trail';
        document.body.appendChild(trail);
        trailPoints.push({
            element: trail,
            x: 0,
            y: 0
        });
    }

    function updateTorch(e) {
        if (!isMoving) {
            isMoving = true;
            torch.style.display = 'block';
        }

        const currentX = e.pageX;
        const currentY = e.pageY;

        // Update main torch position
        torch.style.left = currentX + 'px';
        torch.style.top = currentY + 'px';

        // Update trail positions
        if (Math.abs(currentX - lastX) > 5 || Math.abs(currentY - lastY) > 5) {
            trailPoints.pop();
            const newTrail = {
                element: trailPoints[0].element,
                x: lastX,
                y: lastY
            };
            trailPoints.unshift(newTrail);

            // Update trail elements
            trailPoints.forEach((point, index) => {
                point.element.style.left = point.x + 'px';
                point.element.style.top = point.y + 'px';
                point.element.style.opacity = (1 - index / maxTrailPoints) * 0.3;
            });

            lastX = currentX;
            lastY = currentY;
        }

        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            isMoving = false;
            torch.style.display = 'none';
            trailPoints.forEach(point => {
                point.element.style.opacity = '0';
            });
        }, 100);
    }

    document.addEventListener('mousemove', updateTorch);

    // Spotlight effect
    const spotlight = document.querySelector('.spotlight-effect');
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let scrollY = window.scrollY;
    const ease = 0.3;

    // Handle touch events for mobile
    function handleTouch(e) {
        const touch = e.touches[0];
        const rect = document.documentElement.getBoundingClientRect();
        
        mouseX = touch.clientX - rect.left;
        mouseY = touch.clientY;
        scrollY = window.scrollY;

        // Get the element under the touch
        const elementUnderTouch = document.elementFromPoint(touch.clientX, touch.clientY);
        updateSpotlight(elementUnderTouch, touch.clientX, touch.clientY);
    }

    // Handle mouse events for desktop
    function handleMouse(e) {
        const rect = document.documentElement.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY;
        scrollY = window.scrollY;

        // Get the element under the cursor
        const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
        updateSpotlight(elementUnderCursor, e.clientX, e.clientY);
    }

    // Update spotlight visibility
    function updateSpotlight(element, clientX, clientY) {
        const isInHeroSection = heroSection.contains(element);
        const isInNavbar = navbar.contains(element);

        if (isInHeroSection && !isInNavbar) {
            spotlight.style.display = 'block';
            if (!isMobile) {
                document.body.style.cursor = 'none';
            }
        } else {
            spotlight.style.display = 'none';
            document.body.style.cursor = 'auto';
        }
    }

    // Smooth spotlight movement
    function animate() {
        const dx = mouseX - currentX;
        const dy = (mouseY + scrollY) - currentY;
        
        currentX += dx * ease;
        currentY += dy * ease;

        spotlight.style.setProperty('--x', `${currentX}px`);
        spotlight.style.setProperty('--y', `${currentY}px`);
        
        requestAnimationFrame(animate);
    }

    // Add event listeners based on device type
    if (isMobile) {
        document.addEventListener('touchstart', handleTouch);
        document.addEventListener('touchmove', handleTouch);
    } else {
        document.addEventListener('mousemove', handleMouse);
    }

    // Update on scroll for both mobile and desktop
    document.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        
        // Hide spotlight when scrolled past hero section
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        if (heroBottom < 0) {
            spotlight.style.display = 'none';
            document.body.style.cursor = 'auto';
        }
    });

    animate();
});

// Neon button color change
const neonColors = [
    '#03e9f4',  // cyan
    '#ff0080',  // pink
    '#7fff00',  // lime
    '#ff4500',  // orange red
    '#9400d3',  // purple
    '#00ff7f',  // spring green
    '#ff1493',  // deep pink
    '#00bfff'   // deep sky blue
];

document.querySelectorAll('.neon-button').forEach(button => {
    button.addEventListener('mouseenter', function() {
        const randomColor = neonColors[Math.floor(Math.random() * neonColors.length)];
        this.style.setProperty('--neon-color', randomColor);
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});
