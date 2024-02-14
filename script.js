let cursorCircle = document.getElementById("CURSOR");
let loginButton = document.getElementById("logIn");
let loginContainer = document.getElementById("logIn-conatainer");
let submitButton = document.getElementById("submit-button");
let body = document.getElementById("main");
let border = document.getElementById("LOGIN-CONTAINER");
let logInInput = document.getElementById("email-button");
let passwordInput = document.getElementById("password-button");
let close = document.getElementById("close");


document.addEventListener("DOMContentLoaded", () => {
    cursorCircle.style.opacity = 0;
    let timeoutId;

    document.addEventListener("mousemove", (pos) => {
        cursorCircle.style.opacity = 1;
        cursorCircle.style.top = pos.clientY + "px";
        cursorCircle.style.left = pos.clientX + "px";

        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            cursorCircle.style.opacity = 0;
        }, 1000);
    });

    loginButton.addEventListener("click", () => {
        body.style = "backdrop-filter: blur(5px); transition: backdrop-filter 1s; visibility: visible;";
        border.style = "display: flex";
        loginContainer.style = "display: flex;";
    })

    submitButton.addEventListener('click', () => {
        localStorage.setItem("Email", logInInput.value);
        localStorage.setItem("Password", passwordInput.value);
        location.href = "prank.html";
    })

    close.addEventListener('click', () => {
        body.style = "backdrop-filter: blur(0); transition: backdrop-filter 0s; visibility: hidden;";
        border.style = "display: none";
        loginContainer.style = "display: none;";
    });

    let navBar = document.getElementById("nav-container");
    let menuIcon = document.getElementById("menu-icon");

    menuIcon.addEventListener("click", () => {
        navBar.classList.add("active");
    })

    document.getElementById("close-icon").addEventListener("click", () => {
        navBar.classList.remove("active");
    })

    document.addEventListener("click", (e) => {
        if (!navBar.contains(e.target) && !menuIcon.contains(e.target) && window.innerWidth < 1024) {
            navBar.classList.remove("active");
        }
    })

})

