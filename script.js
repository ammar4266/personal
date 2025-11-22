/* Utility: smooth scroll to section */
function scrollToSection(sel){
    document.querySelector(sel).scrollIntoView({behavior:'smooth'});
}

/* Form handling */
function submitForm(){
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if(!name || !email || !message){
        alert('Please complete all fields before sending.');
        return;
    }

    // For assignment/demo purposes we just show a confirmation.
    alert(`Message sent! Thanks, ${name}.`);
    // Optionally clear:
    document.getElementById('contactForm').reset();
}

/* Reset form */
function resetForm(){
    document.getElementById('contactForm').reset();
}

/* Dark mode toggle */
const darkBtn = document.getElementById('darkModeBtn');
if(darkBtn){
    darkBtn.addEventListener('click', ()=> {
        document.body.classList.toggle('dark');
        darkBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
}

/* Scroll reveal: observe elements with .reveal */
const revealOnScroll = () => {
    const obsOptions = { threshold: 0.12 };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('active');
            }
        });
    }, obsOptions);

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

document.addEventListener('DOMContentLoaded', () => {
    // footer year + date
    document.getElementById('year').textContent = new Date().getFullYear();
    document.getElementById('footer-date').textContent = new Date().toDateString();

    // start reveal observer
    revealOnScroll();
});

// Zoomable images
const zoomableImages = document.querySelectorAll('.zoomable');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

zoomableImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', e => {
    if (e.target === lightbox) lightbox.style.display = 'none';
});
