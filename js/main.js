// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const currentTheme = localStorage.getItem('theme') || 'dark';

document.documentElement.setAttribute('data-theme', currentTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });
}

// Reading progress bar for article pages
function initReadingProgress() {
    if (!document.querySelector('.article-content')) return;
    
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.style.width = '0%';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        progressBar.style.width = progress + '%';
    });
}

initReadingProgress();

// Console greeting
console.log('%c 新怡智健 ', 'background: #64d2ff; color: #0a0a0f; padding: 8px 16px; font-size: 16px; font-weight: bold; border-radius: 4px;');
console.log('%c欢迎来访我的数字花园 🌱', 'color: #9090a0; font-size: 14px;');
console.log('%c→ 这里记录着我的技术思考与生活随想', 'color: #606070; font-size: 12px;');
