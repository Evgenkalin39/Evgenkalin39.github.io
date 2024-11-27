// Дождёмся полной загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
    // Получаем все необходимые элементы
    const skillCards = document.querySelectorAll('.skill-card');
    const skillsFilter = document.getElementById('skills-filter');
    
    // Проверяем существование элемента фильтра перед добавлением слушателя
    if (skillsFilter) {
        skillsFilter.addEventListener('input', (e) => {
            const searchText = e.target.value.toLowerCase();
            
            // Фильтруем карточки навыков
            skillCards.forEach(card => {
                const skillTitle = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const skillDescription = card.querySelector('p')?.textContent.toLowerCase() || '';
                
                const isVisible = 
                    skillTitle.includes(searchText) || 
                    skillDescription.includes(searchText);
                
                card.style.display = isVisible ? 'block' : 'none';
            });
        });
    }
    
    // Добавляем анимации для карточек
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('skill-card--active');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('skill-card--active');
        });
    });
    
    // Функция для инициализации анимации появления карточек
    const initializeSkillCards = () => {
        skillCards.forEach((card, index) => {
            // Добавляем небольшую задержку для каждой следующей карточки
            setTimeout(() => {
                card.classList.add('skill-card--visible');
            }, index * 100);
        });
    };
    
    // Запускаем анимацию появления карточек
    initializeSkillCards();
});