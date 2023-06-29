
const password = "Rebel"

document.querySelector("#login-button").addEventListener("click", (e) => { 

    const inputEl = document.querySelector("#login-input")
    inputEl.textContent = inputEl.text

    if (inputEl.value === password) {
        location.assign('/site.html')
    } else {
        alert("Password is incorrect")
        inputEl.value = ""
    }
})


gsap.from("#login-heading", {duration: 4, scale: 0.1, opacity: 0, ease: "bounce"})
gsap.from("#login-input", {duration: 4, scale: 0.1, opacity: 0, ease: "bounce"})
gsap.from("#login-button", {duration: 4, scale: 0.1, opacity: 0, ease: "bounce"})