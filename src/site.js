// letters to bounce in from top of screen when page loads

gsap.from("#t", {duration: 4, y: -300, opacity: 0, delay: 0, ease: "bounce"})
gsap.from("#a", {duration: 4, y: -300, opacity: 0, delay: 0.5, ease: "bounce"})
gsap.from("#y", {duration: 4, y: -300, opacity: 0, delay: 1, ease: "bounce"})
gsap.from("#l", {duration: 4, y: -300, opacity: 0, delay: 1.5, ease: "bounce"})
gsap.from("#aa", {duration: 4, y: -300, opacity: 0, delay: 2, ease: "bounce"})
gsap.from("#dot", {duration: 4, y: -300, opacity: 0, delay: 2.5, ease: "bounce"})
gsap.from("#i", {duration: 4, y: -300, opacity: 0, delay: 3, ease: "bounce"})
gsap.from("#o", {duration: 4, y: -300, opacity: 0, delay: 3.5, ease: "bounce"})

// letters to rotate once positioned
gsap.from("#t", {rotation: '+=360', duration: 1, color: "purple", delay: 4.5})
gsap.from("#a", {rotation: '+=360', duration: 1, color: "pink", delay: 5})
gsap.from("#y", {rotation: '+=360', duration: 1, color: "green", delay: 5.5})
gsap.from("#l", {rotation: '+=360', duration: 1, color: "red", delay: 6})
gsap.from("#aa", {rotation: '+=360', duration: 1, color: "blue", delay: 6.5})
gsap.from("#dot", {rotation: '+=360', duration: 1, color: "green", delay: 7})
gsap.from("#i", {rotation: '+=360', duration: 1, color: "yellow", delay: 7.5})
gsap.from("#o", {rotation: '+=360', duration: 1, color: "orange", delay: 8})

// animate ripple effect when chechbox is checked and unchecked

const ripple = () => {
    gsap.fromTo('.circle', 5,{scale: 0, autoAlpha:1, transformOrigin: "center center"}, {scale: 5, autoAlpha: 0, repeat: 0});
}

// animate checkbox and photo to rotate
const startAnimate = gsap.timeline({ease: Linear.easeNone, repeat: -1})
startAnimate.to("#animation", {rotation: '+=360'}).pause()
const checkbox = document.querySelector("#checkbox")

checkbox.addEventListener('click', (e) =>{
    
    if (checkbox.checked === true) {
        startAnimate.resume()
        ripple()

    } else if (checkbox.checked === false) {
        startAnimate.pause()
        ripple()
    }

})

//create animation timeline and settings
const animate = gsap.timeline({repeat:-1}).timeScale(.5)
animate.to(".monsters", {y: +90, rotation: '+=360', stagger: 0.25, ease:'elastic'}).pause()

// start animation monsters 
 document.querySelector('#start').addEventListener('click', (e) => {
    animate.resume()
 })
//pause animation monsters
document.querySelector('#pause').addEventListener('click', (e) => {
    animate.pause()
 })






