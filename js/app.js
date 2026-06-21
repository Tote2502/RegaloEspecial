import config from './config.js';
import { navigateTo } from './router.js';
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});
function initApp() {
    setupLogin();
    injectLoveDeclaration();
    setupEmergencyButton();
    renderGallery();
    setupNavigation();
}
function setupLogin() {
    const loginBtn = document.getElementById('login-btn');
    const passwordInput = document.getElementById('password-input');
    const errorMsg = document.getElementById('login-error');
    const inputGroup = document.querySelector('.input-group');
    const handleLoginAttempt = () => {
        const rawValue = passwordInput.value;
        const cleanValue = rawValue.replace(/[^a-zA-Z0-9]/g, '');
        if (cleanValue === config.TARGET_DATE) {
            errorMsg.classList.add('hidden-smooth');
            inputGroup.classList.remove('shake');
            triggerSuccessHearts();
            setTimeout(() => {
                navigateTo('screen-portal');
            }, 800);
        } else {
            errorMsg.classList.remove('hidden-smooth');
            inputGroup.classList.remove('shake');
            void inputGroup.offsetWidth;
            inputGroup.classList.add('shake');
        }
    };
    loginBtn.addEventListener('click', handleLoginAttempt);
    passwordInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleLoginAttempt();
    });
}
function triggerSuccessHearts() {
    const container = document.getElementById('hearts-container');
    const numHearts = 15;
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        const leftPosition = Math.random() * 100;
        const delay = Math.random() * 0.5;
        heart.style.left = `${leftPosition}%`;
        heart.style.animationDelay = `${delay}s`;
        container.appendChild(heart);
        setTimeout(() => {
            if (container.contains(heart)) {
                heart.remove();
            }
        }, 3500);
    }
}
function injectLoveDeclaration() {
    const quantumText = document.getElementById('quantum-text');
    if (quantumText) {
        quantumText.innerHTML = config.LOVE_DECLARATION;
    }
}
function setupEmergencyButton() {
    const btn = document.getElementById('btn-emergency');
    const display = document.getElementById('reason-display');
    let lastIndex = -1;
    btn.addEventListener('click', () => {
        display.style.opacity = '0';
        setTimeout(() => {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * config.REASONS.length);
            } while (newIndex === lastIndex && config.REASONS.length > 1);
            lastIndex = newIndex;
            display.textContent = `"${config.REASONS[newIndex]}"`;
            display.style.opacity = '1';
        }, 300);
    });
}
function renderGallery() {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;
    let htmlBuffer = '';
    config.GALLERY_IMAGES.forEach((image) => {
        htmlBuffer += `
            <article class="photo-card">
                <div class="photo-wrapper">
                    <img src="${image.url}" alt="Recuerdo de nuestro amor" loading="lazy">
                </div>
                <div class="photo-caption">
                    ${image.caption}
                </div>
            </article>
        `;
    });
    grid.innerHTML = htmlBuffer;
}
function setupNavigation() {
    const navToAlbumBtn = document.getElementById('nav-to-album');
    const navToPortalBtn = document.getElementById('nav-to-portal');
    if (navToAlbumBtn) {
        navToAlbumBtn.addEventListener('click', () => {
            navigateTo('screen-album');
        });
    }
    if (navToPortalBtn) {
        navToPortalBtn.addEventListener('click', () => {
            navigateTo('screen-portal');
        });
    }
}
