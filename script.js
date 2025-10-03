// Простой скрипт только для анимаций
document.addEventListener('DOMContentLoaded', function() {
    // Анимации при загрузке
    const elements = ['.profile-section', '.social-section'];
    
    elements.forEach((selector, index) => {
        const element = document.querySelector(selector);
        if (element) {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        }
    });
    
    console.log('Сайт yyang загружен!');
});