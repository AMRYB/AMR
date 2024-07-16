document.addEventListener('DOMContentLoaded', function () {
    // التحقق من وضع النظام
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark-mode');
    }

    // التحقق من لغة المتصفح
    const userLang = navigator.language || navigator.userLanguage;
    const welcomeMessage = document.getElementById('welcome-message');
    const additionalMessage = document.getElementById('additional-message');

    if (userLang.startsWith('ar')) {
        welcomeMessage.textContent = 'مرحبا بك';
        additionalMessage.textContent = 'أنت الآن في موقع الجامعة';
    } else {
        welcomeMessage.textContent = 'Hello';
        additionalMessage.textContent = 'You are now at the university website';
    }

    // عرض الرسالة الأولى ثم الثانية بتأثير fade
    setTimeout(() => {
        welcomeMessage.classList.add('fade-in');
    }, 200); // إضافة تأخير بسيط لضمان تحميل الصفحة بالكامل

    setTimeout(() => {
        welcomeMessage.classList.remove('fade-in');
        welcomeMessage.classList.add('fade-out');
        setTimeout(() => {
            welcomeMessage.style.display = 'none';
            additionalMessage.style.display = 'block';
            additionalMessage.classList.add('fade-in');
        }, 1100); // وقت لتأثير fade-out
    }, 2000); // عرض الرسالة الأولى لمدة 3 ثوانٍ

    // إخفاء رسالة الترحيب الثانية بتأثير fade-out
    setTimeout(() => {
        additionalMessage.classList.remove('fade-in');
        additionalMessage.classList.add('fade-out');
        setTimeout(() => {
            additionalMessage.style.display = 'none';
        }, 1500); // وقت لتأثير fade-out
    }, 9000); // عرض الرسالة الثانية لمدة 3 ثوانٍ

    // إخفاء شاشة الترحيب وعرض المحتوى بعد عرض الرسالتين
    setTimeout(() => {
        const welcomeScreen = document.getElementById('welcome-screen');
        const content = document.getElementById('content');
        welcomeScreen.style.display = 'none';
        content.style.display = 'block';
    }, 10500); // إضافة تأخير لضمان إخفاء رسالة الترحيب الثانية
});