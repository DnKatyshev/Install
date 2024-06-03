// -------------- Layout-Slider --------------
const layoutSlider = new Swiper('#layout-slider', {
    navigation: {
        prevEl: '.layout .swiper-button-prev',
        nextEl: '.layout .swiper-button-next',
        enabled: false,       
    },

    slidesPerView: 1,
    loop: false,
    draggable: false,
    speed: '1700',

    effect: "cube",

    on: {
        init: function() {
            getlayoutAnimation__1()
        },
        slideChange: function () {
            if (this.isEnd) {
                this.autoplay.stop()
              } else {
                this.autoplay.start()
            }
            switch (this.realIndex) {
                case 0:
                    getlayoutAnimation__1()
                    break;
                case 1:
                    getlayoutAnimation__2()
                    break;
                case 2:
                    getlayoutAnimation__3()
                    break;
                case 3:
                    getlayoutAnimation__4()
                    break;           
                case 4:
                    getlayoutAnimation__5()
                    break;           
                case 5:
                    getlayoutAnimation__6()
                    break;           
                default:
                    break;
            }
        },

    },
    
    autoplay: {
            delay: 6500,
          },

    breakpoints: {
        768: {
            navigation: {
                enabled: true,       
            },

        },
    },

})


// Logo
const logoAnim = gsap.timeline()
logoAnim
    .from('header .logo-svg-2', {
        yPercent: -70,
        autoAlpha: 0,
        duration: .4,
    })
    .from('header .logo-svg-1', {
        yPercent: 70,
        autoAlpha: 0,
        duration: .4,
    })
    .to('header .logo h1', {
        text: 'I<span class="logo-reverse">n</span>stall.<span class="logo-gold">vi<span class="logo-reverse">p</span></span>',
        duration: 2,
        ease: "power1.out",
    })
const logo = document.querySelector('.logo')
const logoAnimHover = gsap.timeline({paused: true})
logoAnimHover
    .to('.logo-svg-1', {
        y: 4,
        duration: .2,
    })
    .to('.logo-svg-2', {
        y: -4, 
        duration: .2,
    })
logo.addEventListener('mouseenter', () => {
    logoAnimHover.play()
})
logo.addEventListener('mouseleave', () => {
    logoAnimHover.reverse()
})


// Main-Button
const tlLayout = gsap.timeline({paused:true})
const mediaLayout = gsap.matchMedia();
mediaLayout.add("(min-width: 768px)", () => {
    
    tlLayout
        .fromTo('.layout__btn-svg--1 path:nth-child(1)', {
            autoAlpha: 0,
            scale: 0,
            transformOrigin: 'bottom left',
        }, {
            scale: 1,
            autoAlpha: 1,
        })
        .fromTo('.layout__btn-svg--2 path:nth-child(1)', {
            autoAlpha: 0,
            scale: 0,
            transformOrigin: 'bottom right',
        }, {
            scale: 1,
            autoAlpha: 1,
        }, '<')
        .fromTo('.layout__btn-svg--1 path:nth-child(2)', {
            autoAlpha: 0,
            scale: 0,
            transformOrigin: 'center left',
        }, {
            scale: 1,
            autoAlpha: .2,
        })
        .fromTo('.layout__btn-svg--2 path:nth-child(2)', {
            autoAlpha: 0,
            scale: 0,
            transformOrigin: 'center right',
        }, {
            scale: 1,
            autoAlpha: .2,
        }, '<')
    
    document.querySelector('.layout__btn').addEventListener('mouseenter', () => {
        tlLayout.play()
    })
})


const footerAnim = gsap.timeline()
let mq = gsap.matchMedia(); 
footerAnim
    .to('.footer__line', {
        scrollTrigger:{
            trigger: 'footer',
            start: 'top 70%',
        },
        width: '100%',
    })
mq.add("(max-width: 768px)", () => {
    footerAnim
        .to('.footer__line', {
            scrollTrigger:{
                trigger: 'footer',
                start: 'top center',
            },
            width: '100%',
        })
})


// Layout-Animation
function getlayoutAnimation__1(){
    const layoutAnimation__1 = gsap.timeline()
    layoutAnimation__1
        .from('.layout__text--1 h1, .layout__text--1 p, .layout__text--1 a', {
            xPercent: -100,
            autoAlpha: 0,
            stagger: .3,
            duration: .8,
            delay: .6,
        })
        .from('.svg-1__left-diagram', {
            yPercent: 80,
            autoAlpha: 0,
            duration: .4,
        })
        .from('.svg-1__dark-yellow-lines', {
            yPercent: 70,
            autoAlpha: 0,
        })
        .from('.svg-1__10k', {
            yPercent: 70,
            autoAlpha: 0,
        })
        .from('.svg-1__top-diagram', {
            yPercent: -60,
            autoAlpha: 0,
        })
        .fromTo('.svg-1__wavy-lines path', {
            strokeDashoffset: 365,
            strokeDasharray: 365,
            stagger: .2,
            duration: .6,
        }, {
            strokeDashoffset: 0,
            duration: .6,
        })
        .from('.svg-1__wheel path:first-child', {
            xPercent: -50,
            yPercent: 50,
            autoAlpha: 0,
            duration: .3,
        })
        .from('.svg-1__wheel path:last-child', {
            xPercent: 50,
            yPercent: -50,
            autoAlpha: 0, 
            duration: .3,
        }, '<')
}
function getlayoutAnimation__2(){
    const layoutAnimation__2 = gsap.timeline()
    layoutAnimation__2
        .from('.layout__text--2 h1, .layout__text--2 p, .layout__text--2 a', {
            yPercent: 100,
            autoAlpha: 0,
            stagger: .3,
            duration: .8,
            delay: .6,
        })
        .fromTo('.svg-2__graph-line path', {
            strokeDashoffset: 540,
            strokeDasharray: 540,
            duration: .6,
        }, {
            strokeDashoffset: 0,
            duration: .6,
        })
        .from('.svg-2__graph', {
            autoAlpha: 0,
            duration: .3,
        })
        .from('.svg-2__dashed-white-line', {
            xPercent: 20,
            yPercent: 20,
            autoAlpha: 0,
            rotation: 10,
            duration: .6,
        })
        .from('.svg-2__megaphone', {
            yPercent: -110,
            autoAlpha: 0,
            ease: "bounce.out",
            duration: 1.2,
        })   
}

function getlayoutAnimation__3(){
    const layoutAnimation__3 = gsap.timeline()
    layoutAnimation__3
        .from('.layout__text--3 h1, .layout__text--3 p, .layout__text--3 a', {
            xPercent: -100,
            autoAlpha: 0,
            stagger: .3,
            duration: .8,
            delay: .6,
        })
        .from('.svg-3__computer', {
            yPercent: 100,
            autoAlpha: 0,
            rotation: 15,
            duration: .45,
        })
        .from('.svg-3__diagram', {
            yPercent: 60,
            autoAlpha: 0,
            duration: .5,
        })
        .fromTo('.svg-3__wavy-lines path', {
            strokeDashoffset: 365,
            strokeDasharray: 365,
            duration: .6,
        }, {
            strokeDashoffset: 0,
            stagger: .3,
            duration: .6,
        })
        .from('.svg-3__wheel', {
            yPercent: -100,
            autoAlpha: 0,
            duration: .4,
        })
        .from('.svg-3__magnifier', {
            yPercent: -100,
            autoAlpha: 0,
            duration: 1,
            ease: "bounce.out",
        })
        .call(magnifierKeyframes)


        function magnifierKeyframes(){
            const keyframes = [
                { transform: 'rotate(0deg) translateX(20px)' },
                { transform: 'rotate(360deg) translateX(20px) rotate(-360deg)' },
            ]
            const keyframesOptions = {
                duration: 3000,
                delay: 300,
                easing: 'linear',
                iterations: Infinity,
            }
            const magnifier = document.querySelector('.svg-3__magnifier')
            magnifier.animate(keyframes, keyframesOptions)
        }
}

function getlayoutAnimation__4(){
    const layoutAnimation__4 = gsap.timeline()
    layoutAnimation__4
        .from('.layout__text--4 h1, .layout__text--4 p, .layout__text--4 a', {
            yPercent: -100,
            autoAlpha: 0,
            stagger: .3,
            duration: .8,
            delay: .6,
        })
        .fromTo('.layout .svg-4__star', {
            strokeDashoffset: 1800,
            strokeDasharray: 1800,
            yPercent: -50,
            autoAlpha: 0,
            duration: 1.3,
        }, {
            strokeDashoffset: 0,
            stagger: .3,
            yPercent: 1,
            autoAlpha: 1,
            duration: 1.3,
        })
        .from('.layout .svg-4__hands', {
            // rotationX: 60,
            yPercent: -40,
            autoAlpha: 0,
            duration: 1.2,
            ease: "bounce.out",
        })
}

function getlayoutAnimation__5(){
    const layoutAnimation__5 = gsap.timeline()
    layoutAnimation__5
        .from('.layout__text--5 h1, .layout__text--5 p, .layout__text--5 a', {
            xPercent: -100,
            autoAlpha: 0,
            stagger: .3,
            duration: .8,
            delay: .6,
        })
        .from('.layout .svg-5__laptop', {
            scale: 0,
            transformOrigin: 'center center',
            autoAlpha: 0,
            duration: 1,
        })
        .from('.layout .svg-5__icons g', {
            xPercent: 50,
            autoAlpha: 0,
            stagger: .2,
            duration: .8,
        })
        .from('.layout .svg-5__arrows path:first-child', {
            scale: 0,
            transformOrigin: 'bottom left',
            duration: .8,
            ease: "bounce.out",
        })
        .from('.layout .svg-5__arrows path:last-child', {
            scale: 0,
            transformOrigin: 'bottom right',
            duration: .7,
            ease: "bounce.out",
        }, '<')
}

function getlayoutAnimation__6(){
    const layoutAnimation__6 = gsap.timeline()
    layoutAnimation__6
        .from('.layout__text--6 h1, .layout__text--6 p, .layout__text--6 a', {
            yPercent: -100,
            autoAlpha: 0,
            stagger: .3,
            duration: .8,
            delay: .6,
        })
        .from('.layout .svg-6__box', {
            scale: 0,
            transformOrigin: 'center center',
            duration: .7,
        })
        .from('.layout .svg-6__button', {
            scale: 0,
            transformOrigin: 'center center',
            duration: .45,
        })
        .from('.layout .svg-6__arrows path:first-child', {
            scale: 0,
            transformOrigin: 'top left',
        })
        .from('.layout .svg-6__arrows path:last-child', {
            scale: 0,
            transformOrigin: 'top right',
        }, '<')
        .fromTo('.layout .svg-6__line path', {
            strokeDashoffset: 280,
            strokeDasharray: 280,
            duration: 1.2,
        }, {
            strokeDashoffset: 0,
            duration: 1.2,
        })
        .from('.layout .svg-6__rocket', {
            yPercent: 80,
            autoAlpha: 0,
            duration: 1,
            ease: "bounce.out",
        })
        .from('.layout .svg-6__circles circle', {
            autoAlpha: 0,
            stagger: -.25,
            duration: .4,
        }, '-=.1')
}

// Mooving
function svgMooving(num){
    document.querySelector('.layout').addEventListener('mousemove', (e) => {
        const mainSvg = document.querySelector(`.svg-${num}`)
        mainSvg.querySelectorAll('.svg-mooving').forEach((item, index) => {
            let moveX = (e.clientX - window.innerWidth / 2) * .008;
            let moveY = (e.clientY - window.innerHeight / 2) * .08;
            item.style.cssText = `transform: matrix(1, 0, 0, 1, ${moveX}, ${moveY})`
            // item.style.cssText = `transform: rotateX(${moveY}) rotateY(${moveX})`
            })
    })
    return
}



// Page-Animation's:

// 1) Monetize-block
const monetizeBlockImg = gsap.timeline(
    {scrollTrigger:{
                trigger: '.monetize',
                start: 'top 50%',
                },
    }
)
monetizeBlockImg
    .fromTo('.monetize .svg-4__star', {
        strokeDashoffset: 1800,
        strokeDasharray: 1800,
        yPercent: -50,
        autoAlpha: 0,
        duration: 1.3,
    }, { 
        strokeDashoffset: 0,
        stagger: .3,
        yPercent: 1,
        autoAlpha: 1,
        duration: 1.3,
    })
    .from('.monetize .svg-4__hands', {
        yPercent: -40,
        autoAlpha: 0,
        duration: 1.2,
        ease: "bounce.out",
    })

// синтаксис для создания массивов в GSAP
const monetizeItems = gsap.utils.toArray('.monetize__formats-item')
monetizeItems.forEach((element) => {

    const monetizeBlockItems = gsap.timeline(
        {scrollTrigger:{
                    trigger: element,
                    start: 'top 50%',
                    },
        }
    )
    monetizeBlockItems
        .from(element.querySelector('.monetize__item-svg'), {
            scale: 0,
            transformOrigin: 'top center',
            duration: .8,
            }
        )

})



// 2) Perks-block
const perksBlockImg = gsap.timeline(
    {scrollTrigger:{
                trigger: '.perks',
                start: 'top 50%',
                },
    }
)
perksBlockImg
    .from('.perks .svg-5__laptop', {
        scale: 0,
        transformOrigin: 'center center',
        autoAlpha: 0,
        duration: 1,
    })
    .from('.perks .svg-5__icons g', {
        xPercent: 50,
        autoAlpha: 0,
        stagger: .2,
        duration: .8,
    })
    .from('.perks .svg-5__arrows path:first-child', {
        scale: 0,
        transformOrigin: 'bottom left',
        duration: .8,
        ease: "bounce.out",
    })
    .from('.perks .svg-5__arrows path:last-child', {
        scale: 0,
        transformOrigin: 'bottom right',
        duration: .7,
        ease: "bounce.out",
    }, '<')
    .from('.svg-5__circles circle', {
        autoAlpha: 0,
        stagger: -.25,
        duration: .4,
    })

gsap.to("#form h2", { // Form-title - TEXTING
    scrollTrigger: {
        trigger: "#form",
        start: "top center",
    },
    text: "Let's start!",
    duration: 1.4,
});



// 3) Pay-block
const payBlockImg = gsap.timeline(
    {scrollTrigger:{
                trigger: '.pay',
                start: 'top 50%',
                },
    }
)
payBlockImg
    .from('.pay .svg-6__box', {
        scale: 0,
        transformOrigin: 'center center',
        duration: .7,
    })
    .from('.pay .svg-6__button', {
        scale: 0,
        transformOrigin: 'center center',
        duration: .45,
    })
    .from('.pay .svg-6__arrows path:first-child', {
        scale: 0,
        transformOrigin: 'top left',
    })
    .from('.pay .svg-6__arrows path:last-child', {
        scale: 0,
        transformOrigin: 'top right',
    }, '<')
    .fromTo('.pay .svg-6__line path', {
        strokeDashoffset: 280,
        strokeDasharray: 280,
        duration: 1.2,
    }, {
        strokeDashoffset: 0,
        duration: 1.2,
    })
    .from('.pay .svg-6__rocket', {
        yPercent: 80,
        autoAlpha: 0,
        duration: 1,
        ease: "bounce.out",
    })
    .from('.pay .svg-6__flag', {
        yPercent: 80,
        xPercent: -30,
        autoAlpha: 0,
        duration: 1,
    })
    .from('.pay .svg-6__circles circle', {
        autoAlpha: 0,
        stagger: -.25,
        duration: .4,
    }, '-=.1')



// Choices.js
const select = document.querySelector('#select')
const choices = new Choices(select, {
    searchEnabled: false,
});

