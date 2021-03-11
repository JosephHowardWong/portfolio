const sections = document.querySelectorAll('.section')

const topBtn = document.querySelector('.top-button');

const anchors = document.querySelectorAll('.nav-anch')


const options = { threshold: 0.6 }

let observer = new IntersectionObserver(activeSec, options)

function activeSec(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active')
            activateSecNav(entry.target.id)
        }
        else {
            entry.target.classList.remove('active')
        }
    })
}


sections.forEach(section => {
    observer.observe(section);
})


// // ACTIVATE ANCH CORRESPONDING TO SECTION IN VIEW AND TOGGLE "GO TO TOP BUTTON"
const activateSecNav = anchId => {
    const anchors = document.querySelectorAll('.nav-anch')
    anchors.forEach( anch => {
        if(anch.classList.contains(anchId)) {
            anch.classList.add("active");
        }
        else {
            anch.classList.remove("active");
        }
    })
}


anchors.forEach(anchor=> {
    anchor.addEventListener('click',
        (e) => scrollToSec(e, anchor.classList[0]))
});


const scrollToSec = (e, anchId) => {
    e.preventDefault();
    const sec = document.querySelector(`#${anchId}`);
    sec.scrollIntoView({block: "end", behavior: "smooth"});
}


// // SCROLL TO TOP BUTTON
const pgHead = document.querySelector('.body');

topBtn.addEventListener('click', (e) => {
    e.preventDefault();
    pgHead.scrollIntoView({behavior: "smooth"});
})

