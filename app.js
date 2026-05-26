let i18nData = null;
let currentTab = 'bi'; 
const LANG_STORAGE_KEY = 'flavia_portfolio_lang';

function renderContent(lang, tab) {
    if (!i18nData || !i18nData[lang]) return;

    const data = i18nData[lang];
    const container = document.getElementById('experience-container');
    const fragment = document.createDocumentFragment();
    
    /* FIX: Changed data.experience to data.tabs to match your translations.json */
    const activeExperiences = data.tabs[tab] || [];

    activeExperiences.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'experience-card';
        card.innerHTML = `
            <div class="exp-year">${exp.year}</div>
            <div>
                <h3 class="exp-role">${exp.role} <span class="exp-company">(${exp.company})</span></h3>
                <p class="exp-description">${exp.description}</p>
            </div>
        `;
        fragment.appendChild(card);
    });

    container.innerHTML = '';
    container.appendChild(fragment);
}

function updateStaticTexts(lang) {
    const data = i18nData[lang];

    document.getElementById('profile-name').textContent = data.profile.name;
    document.getElementById('profile-title').textContent = data.profile.title;
    document.getElementById('section-title').textContent = data.section[currentTab].title;
    document.getElementById('section-subtitle').textContent = data.section[currentTab].subtitle;

    document.getElementById('btn-bi').textContent = data.menu.bi;
    document.getElementById('btn-translation').textContent = data.menu.translation;
    document.getElementById('btn-academia').textContent = data.menu.academia;
}

function setupTabs(langSelect) {
    const tabsMap = {
        'btn-bi': 'bi',
        'btn-translation': 'translation',
        'btn-academia': 'academia'
    };

    Object.keys(tabsMap).forEach(btnId => {
        const button = document.getElementById(btnId);
        if (!button) return;

        button.addEventListener('click', () => {
            Object.keys(tabsMap).forEach(id => document.getElementById(id)?.classList.remove('active'));
            button.classList.add('active');

            currentTab = tabsMap[btnId];
            const currentLang = langSelect.value;
            updateStaticTexts(currentLang);
            renderContent(currentLang, currentTab);
        });
    });
}

async function initI18n() {
    const langSelect = document.getElementById('lang-select');
    
    try {
        const response = await fetch('translations.json'); 
        i18nData = await response.json();

        let savedLang = localStorage.getItem(LANG_STORAGE_KEY);
        if (!savedLang || !i18nData[savedLang]) {
            savedLang = 'en'; 
            localStorage.setItem(LANG_STORAGE_KEY, savedLang);
        }

        langSelect.value = savedLang;

        setupTabs(langSelect);
        updateStaticTexts(savedLang);
        renderContent(savedLang, currentTab);

        langSelect.addEventListener('change', (e) => {
            const newLang = e.target.value;
            localStorage.setItem(LANG_STORAGE_KEY, newLang);
            updateStaticTexts(newLang);
            renderContent(newLang, currentTab);
        });

    } catch (error) {
        console.error("Error initializing localization data:", error);
    }
}

document.addEventListener('DOMContentLoaded', initI18n);
