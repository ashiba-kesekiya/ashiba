/* JavaScript 邏輯保持不變，但 CSS 已經匹配了新主題 */
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // 切換手機版選單開關
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // 簡單的漢堡按鈕動畫效果 (變成 X)
        hamburger.classList.toggle('is-active');
        const bars = hamburger.querySelectorAll('.bar');
        if (hamburger.classList.contains('is-active')) {
            bars[0].style.transform = 'translateY(9px) rotate(45deg)'; /* 厚度改變，偏移量微調 */
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'translateY(-9px) rotate(-45deg)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });

    // 點擊導覽連結時，自動關閉手機版選單
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('is-active');
            
            // 恢復漢堡按鈕原本的樣貌
            const bars = hamburger.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });
});