const headerBurger = document.querySelector('.header_burger')
const headerMenu = document.querySelector('.header_menu')
const body = document.querySelector('body')

headerBurger.addEventListener('click', () => {
    headerBurger.classList.toggle('active')
    headerMenu.classList.toggle('active')
    body.classList.toggle('lock')
})


// gsap.registerPlugin(scrollTrigger)
gsap.from('.block', { x: '100%', opacity: 0 })

gsap.to('.block', {
    scrollTrigger: {
        trigger: '.header .section',
        start: 'top top',
        scrub: true,
        // markers: true
    },
    yPercent: '-70',
})

gsap.to('.info_section', {
    scrollTrigger: {
        trigger: '.section',
        start: 'top top',
        scrub: true,
        // markers: true
    },
    yPercent: '-70',
})

gsap.from('.item', {
    scrollTrigger: {
        trigger: '.section',
        start: 'center center',
        // scrub: true,
        // markers: true
    },
    yPercent: '100',
    opacity: 0,
    duration: 0.5,
    stagger: 0.10,
})

gsap.from('.title_sec_2', {
    scrollTrigger: {
        trigger: '.section_2',
        start: 'top top',
        scrub: true,
        // markers: true,
        // pin: true,
    },
    opacity: 0,
    y: '-100'
})

gsap.from('.img-1', {
    scrollTrigger: {
        trigger: '.section_2',
        start: 'top top',
        scrub: true,
        // markers: true,
        pin: true,
    },
    xPercent: '-200',
})

gsap.from('.img-2', {
    scrollTrigger: {
        trigger: '.section_2',
        start: 'top top',
        scrub: true,
        // markers: true,
    },
    yPercent: '200',
    opacity: 0,
})

gsap.from('.img-3', {
    scrollTrigger: {
        trigger: '.section_2',
        start: 'top top',
        scrub: true,
        // markers: true,
        // pin: true,
    },
    xPercent: '200',
})

gsap.from('.block-txt', {
    scrollTrigger: {
        trigger: '.section_3',
        start: 'top top',
        scrub: true,
        // markers: true,
        pin: true,
    },
    xPercent: '-100',
    opacity: 0,
})

gsap.from('.btn', {
    scrollTrigger: {
        trigger: '.section_3',
        start: 'top top',
        scrub: true,
        // markers: true,
        // pin: true,
    },
    xPercent: '400',
    opacity: 0,
})

gsap.from('.block-img', {
    scrollTrigger: {
        trigger: '.section_3',
        start: 'top top',
        scrub: true,
        // markers: true,
        // pin: true,
    },
    xPercent: '400',
    opacity: 0,
})

gsap.from('.title', {
    scrollTrigger: {
        trigger: '.section_4',
        start: 'top center',
        end: 'center center',
        scrub: true,
        // markers: true,
        // pin: true,
    },
    yPercent: '-150',
    opacity: 0,
    duration: .3,
})

gsap.from('.card', {
    scrollTrigger: {
        trigger: '.section_4',
        start: 'top top',
        scrub: true,
        // markers: true,
        pin: true,
    },
    stagger: 0.25,
    xPercent: '-150',
    opacity: 0,
})


gsap.from('.title_sec_5', {
    scrollTrigger: {
        trigger: '.section_5',
        start: 'top center',
        end: 'center center',
        scrub: true,
        // markers: true,
        // pin: true,
    },
    yPercent: '-150',
    opacity: 0,
    duration: .3,
})

gsap.from('.card_5', {
    scrollTrigger: {
        trigger: '.section_5',
        start: 'top top',
        scrub: true,
        // markers: true,
        pin: true,
    },
    stagger: 0.25,
    yPercent: '100',
    duration: 0.2,
    opacity: 0,
})