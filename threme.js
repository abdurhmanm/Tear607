// التحقق من وجود ثيم محفوظ
function initTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    // تحديث حالة الزر إذا كان موجوداً في الصفحة
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.checked = currentTheme === 'dark';
    }
}

// تغيير الثيم
function toggleTheme(isDark) {
    const theme = isDark ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// تنفيذ عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initTheme);