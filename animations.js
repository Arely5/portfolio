// Open nav

const navbutton = document.getElementById('navbutton');
const navwrap = document.getElementById('navwrap');

navbutton.addEventListener('click', () => {
let navvisible = navwrap.style.visibility === 'visible';
if (navvisible) {
navwrap.style.visibility = 'hidden';
} else {
navwrap.style.visibility = 'visible';
}
});

// make h1 disappear

    const textToRemove = document.querySelector('.presentation');
    const mainSection = document.querySelector('.wrap-sections');

    const handleScroll = () => {
        if (textToRemove && mainSection) {
            const scrollTop = window.scrollY;
            const sectionHeight = mainSection.offsetHeight;
            const triggerPoint = sectionHeight / 4;
    
            
            if (scrollTop > triggerPoint) {
                textToRemove.classList.add('hidden');
            } else {
                textToRemove.classList.remove('hidden');
            }
        }
    };
    
    window.addEventListener('scroll', handleScroll);