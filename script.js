// Performance optimizations
document.addEventListener('DOMContentLoaded', () => {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('loading' in HTMLImageElement.prototype) {
        lazyImages.forEach(img => {
            img.src = img.dataset.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const lazyLoadScript = document.createElement('script');
        lazyLoadScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
        document.body.appendChild(lazyLoadScript);
    }

    // Intersection Observer for animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.feature-card, .faq-item, .stat').forEach(el => {
        observer.observe(el);
    });

    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const timing = performance.timing;
            const pageLoad = timing.loadEventEnd - timing.navigationStart;
            console.log(`Page load time: ${pageLoad}ms`);
        });
    }

    // Service Worker registration
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
});

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScroll = debounce(() => {
    // Add your scroll-based functionality here
}, 100);

window.addEventListener('scroll', optimizedScroll, { passive: true });

// Cache DOM elements
const appStoreLink = document.querySelector('.app-store-link');
if (appStoreLink) {
    appStoreLink.addEventListener('click', (e) => {
        e.preventDefault();
        // Add analytics tracking here if needed
        window.location.href = appStoreLink.href;
    });
} 