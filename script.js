@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

:root {
    --pearl-bg: linear-gradient(135deg, #fbfaf7 0%, #f3ece4 35%, #e8f0f2 70%, #e9e4f0 100%);
    --btn-bg: rgba(255, 255, 255, 0.6);
    --btn-hover: rgba(255, 255, 255, 0.9);
    --text-dark: #2c3539;
    --border-color: rgba(44, 53, 57, 0.2);
    --radius-pill: 50px;
    --font: 'Inter', sans-serif;
    --pearl-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.04);
}

body {
    margin: 0;
    padding: 0;
    font-family: var(--font);
    background: var(--pearl-bg);
    background-attachment: fixed;
    min-height: 100vh;
    color: var(--text-dark);
    overflow-x: hidden;
}

.container {
    text-align: center;
    width: 90%;
    max-width: 500px;
    padding: 40px 20px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    box-sizing: border-box;
}

.menu-inner-content {
    text-align: center;
    width: 90%;
    max-width: 450px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 25px;
    border: 2px solid #ffffff;
    box-shadow: var(--pearl-shadow), 0 4px 10px rgba(0, 0, 0, 0.05);
}

.brand-main {
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 10px 0;
    font-size: clamp(1.5rem, 6vw, 2.2rem);
    color: var(--text-dark);
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.8);
}

.brand-sub {
    text-transform: uppercase;
    letter-spacing: 4px;
    font-size: 1.2rem;
    margin: 0 0 25px 0;
    font-weight: 700;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 10px;
    width: 100%;
}

h1 {
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 10px 0;
    font-size: clamp(1.2rem, 5vw, 1.8rem);
}

.subtitle {
    font-weight: 400;
    font-size: 1rem;
    margin-bottom: 35px;
    color: #5c676d;
    letter-spacing: 0.5px;
}

.nav-links {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
}

a.btn, .btn {
    display: block;
    text-decoration: none !important;
    color: var(--text-dark) !important;
    background: var(--btn-bg) !important;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    padding: 18px 30px;
    border-radius: var(--radius-pill);
    border: 1px solid rgba(255, 255, 255, 0.6);
    transition: all 0.3s ease-in-out;
    font-weight: 600;
    font-size: 1rem;
    box-shadow: var(--pearl-shadow), inset 0 1px 0 rgba(255, 255, 255, 0.4);
    box-sizing: border-box;
    cursor: pointer;
    width: 100%;
    font-family: var(--font);
    letter-spacing: 0.5px;
}

a.btn:hover, .btn:hover {
    background: var(--btn-hover) !important;
    border-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(31, 38, 135, 0.08);
}

.lang-btn {
    position: fixed;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    color: var(--text-dark);
    border: 1px solid rgba(255, 255, 255, 0.5);
    padding: 8px 18px;
    border-radius: var(--radius-pill);
    cursor: pointer;
    font-family: var(--font);
    font-weight: 600;
    font-size: 0.85rem;
    transition: all 0.2s ease-in-out;
    z-index: 9999;
    box-shadow: var(--pearl-shadow);
}

.lang-btn:hover {
    background: rgba(255, 255, 255, 0.8);
    transform: scale(1.03);
}

.split-wrapper {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

.menu-side {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: flex 0.6s cubic-bezier(0.25, 1, 0.5, 1);
    height: 100vh;
    z-index: 2;
}

.content-side {
    flex: 0;
    opacity: 0;
    visibility: hidden;
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border-left: 1px solid rgba(255, 255, 255, 0.4);
    transition: flex 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease, visibility 0.4s ease;
    height: 100vh;
    overflow-y: auto;
    position: relative;
    box-sizing: border-box;
}

.active-split .menu-side {
    flex: 0 0 25%;
}

.active-split .content-side {
    flex: 0 0 75%;
    opacity: 1;
    visibility: visible;
    padding: 80px 40px 40px 40px;
}

.tab-content {
    display: none;
    width: 100%;
}

.active-btn-highlight {
    background: rgba(255, 255, 255, 0.9) !important;
    border-color: rgba(44, 53, 57, 0.3) !important;
    transform: scale(1.01);
}

.close-panel-btn {
    position: absolute;
    top: 25px;
    left: 25px;
    background: none;
    border: none;
    font-size: 2.2rem;
    color: var(--text-dark);
    cursor: pointer;
    font-weight: 300;
    transition: transform 0.2s ease;
    z-index: 10;
    line-height: 1;
    opacity: 0.6;
}

.close-panel-btn:hover {
    transform: scale(1.1) rotate(90deg);
    opacity: 1;
}

.portfolio-container {
    width: 100%;
    max-width: 750px;
    margin: 0 auto;
}

.portfolio-container h2 {
    font-size: 1.8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0 0 30px 0;
    border-bottom: 2px solid var(--border-color);
    padding-bottom: 10px;
    color: var(--text-dark);
}

.portfolio-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;
}

.portfolio-item {
    background: rgba(255, 255, 255, 0.45);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    padding: 24px;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.5);
    box-shadow: var(--pearl-shadow);
}

.project-date {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 600;
    background-color: rgba(4c, 55, 59, 0.08);
    color: var(--text-dark);
    padding: 4px 12px;
    border-radius: 20px;
    margin-bottom: 10px;
    border: 1px solid rgba(255, 255, 255, 0.4);
}

.project-title {
    margin: 0 0 10px 0;
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--text-dark);
}

.project-desc {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
    color: #4a545a;
}

@media (max-width: 768px) {
    .split-wrapper {
        flex-direction: column;
    }
    
    .menu-side {
        height: auto;
        min-height: 100vh;
        padding: 40px 0;
    }

    .active-split .menu-side {
        flex: 0 0 35%;
        min-height: 35vh;
        height: 35vh;
        padding: 10px 0;
    }

    .active-split .content-side {
        flex: 0 0 65%;
        width: 100%;
        height: 65vh;
        border-left: none;
        border-top: 1px solid rgba(255, 255, 255, 0.4);
        padding: 60px 20px 20px 20px;
    }

    .close-panel-btn {
        top: 15px;
        left: auto;
        right: 20px;
        font-size: 1.8rem;
    }
}
