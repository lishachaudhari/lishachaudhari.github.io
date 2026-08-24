//=======================
//Visit Button on Headers
//=======================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    // Toggle the 'fa-xmark' icon when clicked (swaps hamburger to 'X')
    menuIcon.classList.toggle('fa-xmark');
    // Toggle the 'active' class on your navigation menu
    navbar.classList.toggle('active');
});




const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        contents.forEach(content => content.classList.remove("active"));

        button.classList.add("active");

        const target = document.getElementById(button.dataset.tab);
        target.classList.add("active");
    });
});

function openModal() {
    document.getElementById('detailsModal').classList.add('active');
}

function closeModal() {
    document.getElementById('detailsModal').classList.remove('active');
}

function closeModalOnOutsideClick(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal();
    }
}

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

function closeModalOnOutsideClick(e, modalId) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal(modalId);
    }
}


// Open specified modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevents background scrolling
    }
}

// Close specified modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restores scrolling
    }
}

// Close modal when clicking outside the card
function closeModalOnOutsideClick(e, modalId) {
    if (e.target.classList.contains('modal-overlay')) {
        closeModal(modalId);
    }
}

// Close active modal when pressing ESC key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Smooth reveal animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const columns = document.querySelectorAll('.details-split-grid .column');
    columns.forEach((col) => {
        col.style.opacity = '0';
        col.style.transform = 'translateY(25px)';
        col.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(col);
    });
});



document.addEventListener('DOMContentLoaded', () => {
    // Tries ID first, then falls back to class if ID doesn't exist
    const menuIcon = document.querySelector('#menu-icon') || document.querySelector('.menu-icon') || document.querySelector('header i');
    const navLinks = document.querySelector('.nav-links');

    if (!menuIcon || !navLinks) {
        console.error('Menu element not found. Check HTML IDs/classes.');
        return;
    }

    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevents click bleeding
        navLinks.classList.toggle('active');

        if (navLinks.classList.contains('active')) {
            // Apply layout & prevent content bleed
            Object.assign(navLinks.style, {
                display: 'flex',
                position: 'fixed',
                top: '85px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '88%',
                maxWidth: '360px',
                backgroundColor: '#ffffff',
                padding: '24px 16px',
                borderRadius: '20px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
                zIndex: '999999',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
            });

            // Ensure links are visible and dark gray
            navLinks.querySelectorAll('a').forEach(link => {
                link.style.color = '#1f2937';
                link.style.fontWeight = '600';
                link.style.display = 'block';
            });
        } else {
            navLinks.style.display = 'none';
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !menuIcon.contains(e.target)) {
            navLinks.classList.remove('active');
            navLinks.style.display = 'none';
        }
    });
});