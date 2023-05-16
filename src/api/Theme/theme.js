// 检查是否需要设置黑色主题
export const checkDarkTheme = () => {
    const uuid = localStorage.getItem('theme_uuid');
    if (uuid) {
        document.documentElement.classList.toggle('light');
    } else {
        document.documentElement.classList.toggle('dark');
    }
}