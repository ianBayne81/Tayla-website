// letters to bounce in from top of screen when page loads
gsap.from(".letter", {duration: 4, y: -200, stagger: .5, ease: "bounce"})

// letters to rotate and change respective colour once positioned
gsap.from("#t", {rotation: '+=360', duration: 1, color: "purple", delay: 4.5})
gsap.from("#a", {rotation: '+=360', duration: 1, color: "pink", delay: 5})
gsap.from("#y", {rotation: '+=360', duration: 1, color: "green", delay: 5.5})
gsap.from("#l", {rotation: '+=360', duration: 1, color: "red", delay: 6})
gsap.from("#aa", {rotation: '+=360', duration: 1, color: "blue", delay: 6.5})
gsap.from("#dot", {rotation: '+=360', duration: 1, color: "green", delay: 7})
gsap.from("#i", {rotation: '+=360', duration: 1, color: "yellow", delay: 7.5})
gsap.from("#o", {rotation: '+=360', duration: 1, color: "orange", delay: 8})

// animate checkbox and photo to rotate
const startAnimate = gsap.timeline({ease: Linear.easeNone, repeat: -1})
startAnimate.to("#animation", {rotation: '+=360'}).pause()
const checkbox = document.querySelector("#checkbox")

checkbox.addEventListener('click', (e) =>{
    
    if (checkbox.checked === true) {
        startAnimate.resume()

    } else if (checkbox.checked === false) {
        startAnimate.pause()
    }

})

//create monster animation timeline and settings
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

//create tile effect to animate
gsap.to(".tiles", {
    duration: 3,
    repeat: -1,
    scale: 0,
    y: 40,
    ease: "back",
    stagger: {
      grid: "auto",
      from: "start",
      amount: 1.5
    }
  });

  gsap.to(".box", {
    y: 100,
    stagger: {
      // wrap advanced options in an object
      each: 0.1,
      from: "center",
      grid: "auto",
      ease: "power2.inOut",
      repeat: -1, // Repeats immediately, not waiting for the other staggered animations to finish
    },
  });



