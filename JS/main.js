/*============= Scroll Section Avtive Link =============*/ 
let sections = document.querySelector('section');
let naveLinks = document.getElementById('header navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height){
            naveLinks.forEach(links => {
                links.classList.remove('active');
                document.getElementById('header navbar a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*============= sticky navbar =============*/ 
    let header = document.getElementById('header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
