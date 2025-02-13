// Игровые переменные
let balance = 0;
let level = 1;
let clickValue = 1;
let clicksToNextLevel = 50;

// Управление страницами
const pages = {
    main: document.querySelector('.main-page'),
    white: document.getElementById('whitePage'),
    buy: document.getElementById('buyPage'),
    my: document.getElementById('myPage')
};

// Навигация: кнопка "+" (только для белой страницы)
document.getElementById('addBtn').addEventListener('click', () => {
    pages.main.style.display = 'none';
    pages.white.style.display = 'block';
    pages.buy.style.display = 'none';
    pages.my.style.display = 'none';
});

// Навигация: кнопка "←" (возврат на главную)
document.getElementById('backBtn').addEventListener('click', () => {
    pages.white.style.display = 'none';
    pages.buy.style.display = 'none';
    pages.my.style.display = 'none';
    pages.main.style.display = 'block';
});

// Кнопка "Купить предприятие"
document.getElementById('buyBtn').addEventListener('click', () => {
    pages.white.style.display = 'none';
    pages.buy.style.display = 'block';
});

// Кнопка "Мои предприятия"
document.getElementById('myBtn').addEventListener('click', () => {
    pages.white.style.display = 'none';
    pages.my.style.display = 'block';
});

// Логика кликов
document.getElementById('clickArea').addEventListener('click', () => {
    balance += clickValue;
    updateUI();
    if (balance >= clicksToNextLevel) levelUp();
});

function levelUp() {
    level++;
    clickValue *= 1.2;
    clicksToNextLevel = Math.floor(clicksToNextLevel * 2);
    updateUI();
}

function updateUI() {
    document.getElementById('balance').textContent = balance.toFixed(2);
    document.getElementById('level').textContent = level;
    document.getElementById('clickValue').textContent = clickValue.toFixed(2);
}

// Предотвращение прокрутки на мобильных устройствах
document.body.addEventListener('touchmove', function(e) {
    if (e.target.classList.contains('click-area')) {
        e.preventDefault();
    }
}, { passive: false });

// Обработка множественных кликов
let isCooldown = false;

document.getElementById('clickArea').addEventListener('click', (e) => {
    if (!isCooldown) {
        isCooldown = true;
        
        // Ваш код обработки клика (например, увеличение баланса)
        
        setTimeout(() => {
            isCooldown = false;
        }, 50); // Интервал между кликами (в миллисекундах)
    }
}, { passive: true }); // Оптимизация для мобильных устройств

// Инициализация
updateUI();
