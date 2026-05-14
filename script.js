@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500&display=swap');

:root {
    --pearl-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    --pearl-btn: rgba(255, 255, 255, 0.6);
    --text-color: #2d3436;
    --radius: 40px; 
    --font: 'Inter', sans-serif;
}

body {
    margin: 0;
    padding: 0;
    font-family: var(--font);
    background: var(--pearl-bg);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-color);
    overflow-x: hidden;
}

.container {
    text-align: center;
    width: 90%;
    max-width: 500px;
    padding: 2vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.profile-img {
    width: 22vmin;
    height: 22vmin;
    min-width: 100px;
    min-height: 100px;
    max-width: 150px;
    max-height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 2vh;
    border: 4px solid rgba(255, 255, 255, 0.5);
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.brand-main {
    font-weight: 200;
    letter-spacing: 6px;
    text-transform: uppercase;
    margin: 0 0 10px 0;
    font-size: clamp(1.4rem, 6vw, 2.2rem);
}

.brand-sub {
    text-transform: uppercase;
    letter-spacing: 5px;
    font-size: clamp(1rem, 4vw, 1.3rem);
    opacity: 0.8;
    margin: 0 0 15px 0;
    font-weight: 200;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    padding-bottom: 10px;
    width: 100%;
}

h1 {
    font-weight: 200;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 0 5px 0;
    font-size: clamp(1.1rem, 5vw, 1.6rem);
}

.subtitle {
    font-weight: 400;
    font-size: clamp(0.7rem, 2.5vw, 0.85rem);
    letter-spacing: 1px;
    margin-bottom: 3vh;
    opacity: 0.6;
}

.nav-links {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
}

.btn {
    text-decoration: none;
    color: var(--text-color);
    background: var(--pearl-btn);
    padding: clamp(12px, 2vh, 20px) 5%; 
    border-radius: var(--radius);
    border: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(15px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    transition: all 0.3s ease;
    font-weight: 500;
    font-size: clamp(0.8rem, 3vw, 0.95rem);
}

.btn:hover {
    transform: translateY(-2px);
    background: #fff;
}

.lang-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: var(--pearl-btn);
    border: 1px solid rgba(255,255,255,0.4);
    padding: 6px 12px;
    border-radius: 30px;
    cursor: pointer;
    font-family: var(--font);
    font-size: 0.7rem;
    z-index: 1000;
}

@media (max-height: 600px) {
    .container { padding: 10px 0; }
    .profile-img { width: 18vmin; height: 18vmin; }
    .subtitle { margin-bottom: 15px; }
}
