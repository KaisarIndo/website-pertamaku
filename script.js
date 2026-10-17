// --- 1. TOMBOL SAPA ---
const tombolSapa = document.getElementById('btnSapa');
const elemenPesan = document.getElementById('pesan');

tombolSapa.addEventListener('click', function() {
    elemenPesan.textContent = "Terima kasih sudah mengklik! Selamat belajar koding!";
});

// --- 2. FITUR DARK MODE DENGAN LOCALSTORAGE ---
const btnToggleTheme = document.getElementById('btnToggleTheme');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    btnToggleTheme.textContent = "☀️ Light Mode";
}

btnToggleTheme.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    const isDarkMode = document.body.classList.contains('dark-theme');

    if (isDarkMode) {
        btnToggleTheme.textContent = "☀️ Light Mode";
        localStorage.setItem('theme', 'dark');
    } else {
        btnToggleTheme.textContent = "🌙 Dark Mode";
        localStorage.setItem('theme', 'light');
    }
});

// --- 3. FITUR TOGGLE HAMBURGER MENU (MOBILE) ---
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});