function theme() {
    const body = document.body;
    const themeIcon = document.getElementById('dl-ico');

    if (body.getAttribute('data-bs-theme') === 'light') {
        body.setAttribute('data-bs-theme', 'dark');
        if (themeIcon) {
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
        }
        localStorage.setItem('theme', 'dark');
    } else {
        body.setAttribute('data-bs-theme', 'light');
        if (themeIcon) {
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
        }
        localStorage.setItem('theme', 'light');
    }
}

const ThemeBtn = () => {

    return (
        <div>
            <button onClick={theme} className="btn-navbar">
                <i id="dl-ico" className="bi bi-moon-fill"></i>
            </button>
        </div>
    );
}

export default ThemeBtn;