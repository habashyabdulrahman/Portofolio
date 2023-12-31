/*============= toggle icon navbar =============*/ 
let menuIcon = document.getElementById('menu-icon');
let navbar = document.getElementById('navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle("active");
};

/*============= Scroll Section Avtive Link =============*/ 

function scrollSectionActiveLink(sectionsSelector, navLinksSelector) {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector(`${'header nav a'}[href*='${id}']`).classList.add('active');
                });
            }
        });
            /*============= remove toggle icon and navbar when click navbar link (scrol) =============*/
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove("active");
    };
};

// Usage
scrollSectionActiveLink('section', '#header navbar a');

/*============= scroll reveal =============*/
ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

/*============= typed js =============*/
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'YouTuber'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});

/*============= SmtpJS =============*/
var btn = document.getElementById('btn');
    btn.addEventListener('click',function(e){
        e.preventDefault()
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        var body = 'name: '+name +'</br> email:' +email +'</br> message:' +message;

        Email.send({
            SecureToken : "50f40e44-046b-46ed-9114-284eeb16019b",
            To : 'contact@habashyabdulrahman.com',
            From : "hsabdulrahman796@gmail.com",
            Subject : "Contact Message",
            Body : body
        }).then(
            message => alert(message)
        );
    })
