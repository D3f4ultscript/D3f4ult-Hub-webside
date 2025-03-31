// Tab Switch Logic
const tabs = {
    home: document.getElementById('home-tab'),
    scripts: document.getElementById('scripts-tab'),
    getKey: document.getElementById('get-key-tab')
};

const contents = {
    home: document.getElementById('home-content'),
    scripts: document.getElementById('scripts-content'),
    getKey: document.getElementById('get-key-content')
};

// Function to switch tabs
function switchTab(activeTab) {
    // Remove active class from all contents
    Object.values(contents).forEach(content => {
        content.classList.remove('active');
    });
    
    // Add active class to selected content
    contents[activeTab].classList.add('active');
}

// Add click event listeners to tabs
Object.entries(tabs).forEach(([tabName, tabElement]) => {
    tabElement.addEventListener('click', () => switchTab(tabName));
});

// Set the default active tab
switchTab('home');

// Copy Script Function
function copyScript() {
    const scriptText = document.getElementById('script-text');
    scriptText.select();
    scriptText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    
    // Show feedback
    const copyBtn = document.getElementById('copy-btn');
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
        copyBtn.innerHTML = originalText;
    }, 2000);
}

// Key Generator Function
function startKeyGeneration() {
    const getKeyBtn = document.getElementById('get-key-btn');
    getKeyBtn.disabled = true;
    getKeyBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Please wait... 30s';

    // Countdown Timer
    let timer = 30;
    const interval = setInterval(() => {
        getKeyBtn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Please wait... ${timer}s`;
        timer--;
        
        if (timer < 0) {
            clearInterval(interval);
            getKeyBtn.innerHTML = '<i class="fas fa-key"></i> Get Key';
            getKeyBtn.disabled = false;
            showKeyPopup();
        }
    }, 1000);
}

// Show Key Popup
function showKeyPopup() {
    const popup = document.getElementById('key-popup');
    popup.style.display = 'block';
    popup.style.animation = 'fadeIn 0.3s ease-in-out';
}

// Close Popup Function
function closePopup() {
    const popup = document.getElementById('key-popup');
    popup.style.animation = 'fadeOut 0.3s ease-in-out';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
}

// Copy Key Function
function copyKey() {
    const keyInput = document.querySelector('#key-popup input');
    keyInput.select();
    document.execCommand('copy');
    
    // Show feedback
    const copyBtn = document.querySelector('#key-popup button');
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
        copyBtn.innerHTML = originalText;
    }, 2000);
}

// Close popup when clicking outside
window.addEventListener('click', (event) => {
    const popup = document.getElementById('key-popup');
    if (event.target === popup) {
        closePopup();
    }
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 