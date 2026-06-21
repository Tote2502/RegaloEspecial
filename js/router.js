
let currentScreenId = 'screen-login';
export const navigateTo = (targetScreenId) => {
    if (currentScreenId === targetScreenId) return;
    const currentScreen = document.getElementById(currentScreenId);
    const targetScreen = document.getElementById(targetScreenId);
    if (!currentScreen || !targetScreen) {
        console.error(`Error de enrutamiento: No se encontró la pantalla ${targetScreenId}`);
        return;
    }
    currentScreen.classList.add('hidden');
    setTimeout(() => {
        currentScreen.classList.add('d-none');
        currentScreen.classList.remove('active');
        targetScreen.classList.remove('d-none');
        void targetScreen.offsetWidth;
        targetScreen.classList.remove('hidden');
        targetScreen.classList.add('active');
        currentScreenId = targetScreenId;
        const scrollContent = targetScreen.querySelector('.content-scroll');
        if (scrollContent) {
            scrollContent.scrollTop = 0;
        }
    }, 500);
};
