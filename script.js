document.addEventListener('DOMContentLoaded', () => {
    
    // Header Scroll Logic
    const header = document.getElementById('main-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 50) {
            header.classList.add('shadow-sm');
        } else {
            header.classList.remove('shadow-sm');
        }

        if (scrollTop > lastScrollTop && scrollTop > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Mobile Menu
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('animate-fade-in');
        }
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    // Scroll Reveal
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;

            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Privacy Modal
    const modal = document.getElementById('privacy-modal');
    const privacyBtn = document.getElementById('privacy-btn');
    const closeBtn = document.getElementById('close-modal-btn');
    const modalBg = document.getElementById('close-modal-bg');

    const toggleModal = () => {
        modal.classList.toggle('hidden');
    };

    privacyBtn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleModal();
    });

    closeBtn.addEventListener('click', toggleModal);
    modalBg.addEventListener('click', toggleModal);
});