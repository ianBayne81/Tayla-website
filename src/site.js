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

//button to slide menu open and closed
const menu = document.querySelector("#menu-button")
const toggleMenu = document.querySelector(".menu-slide")
menu.addEventListener("click", function (e) {
    e.preventDefault()
    toggleMenu.classList.toggle("menu-slide-active")

})

//button from menu to logout
const logout = document.querySelector("#optionFour")
logout.addEventListener("click", function(e) {
    e.preventDefault()
    location.assign("/index.html")
})

//image slider code
const selectBox = document.querySelector(".slide-box")
const guageOne = document.querySelector(("#guageOne"))
const guageTwo = document.querySelector(("#guageTwo"))
const guageThree = document.querySelector(("#guageThree"))
const guageFour = document.querySelector(("#guageFour"))
const guageFive = document.querySelector(("#guageFive"))


selectBox.style.left = 0

const transitionRight = function () {
    var num = parseInt(selectBox.style.left)
    if (num === -1200) {
        return
    } else {
        selectBox.style.left = num - 300 + "px"
        selectBox.style.transition = "all 3s"
    }

    if (num === -900) {
        guageFive.style.backgroundColor = "white"
        guageFive.style.transition = "all 3s"
    } else {
        guageFive.style.backgroundColor = "transparent"
    }

    if (num === -600) {
        guageFour.style.backgroundColor = "white"
        guageFour.style.transition = "all 3s"
    } else {
        guageFour.style.backgroundColor = "transparent"
    }

    if (num === -300) {
        guageThree.style.backgroundColor = "white"
        guageThree.style.transition = "all 3s"
    } else {
        guageThree.style.backgroundColor = "transparent"
    }

    if (num === 0) {
        guageTwo.style.backgroundColor = "white"
        guageTwo.style.transition = "all 3s"
        guageOne.style.backgroundColor = "transparent"
        guageOne.style.transition = "all 3s"
    } else {
        guageTwo.style.backgroundColor = "transparent"
    }
    
}

const transitionLeft = function () {
    var num = parseInt(selectBox.style.left)
    if (num === 0) {
        return
    } else {
        selectBox.style.left = num + 300 + "px"
        selectBox.style.transition = "all 3s"
    }

    if (num === -1200) {
        guageFive.style.backgroundColor = "transparent"
        guageFive.style.transition = "all 3s"
        guageFour.style.backgroundColor = "white"
        guageFour.style.transition = "all 3s"
    } 

    if (num === -900) {
        guageFour.style.backgroundColor = "transparent"
        guageFour.style.transition = "all 3s"
        guageThree.style.backgroundColor = "white"
        guageThree.style.transition = "all 3s"
    } 

    if (num === -600) {
        guageThree.style.backgroundColor = "transparent"
        guageThree.style.transition = "all 3s"
        guageTwo.style.backgroundColor = "white"
        guageTwo.style.transition = "all 3s"
    } 

    if (num === -300) {
        guageTwo.style.backgroundColor = "transparent"
        guageTwo.style.transition = "all 3s"
        guageOne.style.backgroundColor = "white"
        guageOne.style.transition = "all 3s"
    } 

}

document.querySelector("#action-right").addEventListener("click", function (e) {
    e.preventDefault()
    transitionRight()
    
})

document.querySelector("#action-left").addEventListener("click", function (e) {
    e.preventDefault()
    transitionLeft()
    
})

//canvas element code
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.width = 300
canvas.height = 400



//newContainer elements transition between 3 x pages code
window.addEventListener('scroll', function() {

    const selectDivOne = document.querySelector("#newDivOne")
    const selectDivTwo = document.querySelector("#newDivTwo")
    const selectDivThree = document.querySelector("#newDivThree")

    if (scrollY < 1150) {
            selectDivOne.style.opacity = .1
            selectDivOne.style.transition = 'opacity 1.5s linear'
    }   else if (scrollY > 1150 && scrollY < 1820) {
            selectDivOne.style.opacity = 1
            selectDivOne.style.transition = 'opacity 1.5s linear'
            selectDivTwo.style.opacity = .1
            selectDivTwo.style.transition = 'opacity 1.5s linear'
    }   else if (scrollY > 1820 && scrollY < 2500) {
            selectDivTwo.style.opacity = 1
            selectDivTwo.style.transition = 'opacity 1.5s linear'
            selectDivThree.style.opacity = .1
            selectDivThree.style.transition = 'opacity 1.5s linear'
    }   else if (scrollY > 2500 && scrollY < 3200) {
            selectDivThree.style.opacity = 1
            selectDivThree.style.transition = 'opacity 1.5s linear'
    }   

    
})





