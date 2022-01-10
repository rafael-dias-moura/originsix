//togglo menu
const nav =  document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for(const element of toggle) {
    element.addEventListener('click', function() {
        nav.classList.toggle('show')
    })
}
//toggle menu itens
const links = document.querySelectorAll('nav ul li a')

for(const link of links) {
    link.addEventListener('click', function() {
        nav.classList.remove('show')
    })
}

//shadow header
const header = document.querySelector("header")
    const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
    

    if(window.scrollY >= navHeight) {
        //scroll maior que altura do header
        header.classList.add('scroll')
    }else {
        //scroll menor que altura do header
        header.classList.remove('scroll')
    }
}

//slider carossel swiper
const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView:2,
            setWrapperSize: true
        }
    }
})

//scrollreveal
const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .image, #home .text,
    #about .image, #about .title,
    #services header, #services .card,
    #testimonials header, #testimonials .testimonials,
    #contact .text, #contact .links,
    footer .brand, footer .social
    `,
    {interval: 100}
)

//back to top
const backToTopButtom = document.querySelector('.back-to-top')
function backToTop(){
    

    if(window.scrollY >= 560 ) {
        backToTopButtom.classList.add('show')
    } else {
        backToTopButtom.classList.remove('show')
    }
}
//current section menu
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

    for( const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            document.querySelector('nav ul li a[href*='+ sectionId +']').classList.add('active')
        }else {
            document.querySelector('nav ul li a[href*='+ sectionId +']').classList.remove('active')
        }
    }
}


//WHEN SCROLL

window.addEventListener('scroll', function() {
    changeHeaderWhenScroll()
    backToTop()
    activateMenuAtCurrentSection()
})


