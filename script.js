let loginButton = document.getElementById("logIn");
let animationElenemts = document.getElementsByClassName("box");
let loginContainer = document.getElementById("logIn-conatainer");
let submitButton = document.getElementById("submit-button");
let body = document.getElementById("main");
let border = document.getElementById("LOGIN-CONTAINER");
let logInInput = document.getElementById("email-button");
let passwordInput = document.getElementById("password-button");
let logInText = document.getElementById("SHOW-EMAIL");
let passwordText = document.getElementById("SHOW-PASSWORD");
let goBack = document.getElementById("PRANK-IMAGE");
let backButton = document.getElementsByClassName("back");
let close = document.getElementById("close");


document.addEventListener("DOMContentLoaded", () => {
    try {
        loginButton.addEventListener("click", function() {
            for (let i = 0; i < animationElenemts.length; i++) {
                animationElenemts[i].style = "animation: rain 2s ease 1;";
            }   
            setTimeout(function() {
                body.style = "backdrop-filter: blur(5px); transition: backdrop-filter 1s; visibility: visible;";
                border.style = "display: flex";
                loginContainer.style = "animation: slide 2s ease 1; display: flex;";
            }, 2000)
        })

        submitButton.addEventListener('click', function() {
            localStorage.setItem("Email", logInInput.value);
            localStorage.setItem("Password", passwordInput.value);
            location.href = "prank.html";
            
        }) 
        
    } catch {
        console.log();
    }

    try {
        backButton.addEventListener("click", function() {
            location.href = "index.html";
        })
    } catch {
        console.log();
    }

    try {
        close.addEventListener('click', function() {
            body.style = "backdrop-filter: blur(0); transition: backdrop-filter 0s; visibility: hidden;";
            border.style = "display: none";
            loginContainer.style = "visibility: hidden; transform: scale(0.01);";
            location.reload();
        })
    } catch {
        console.log();
    }

    try {
        logInText.innerHTML = " " + localStorage.getItem("Email");
        passwordText.innerHTML = " " + localStorage.getItem("Password");
    } catch {
        console.log();
    }
    
    
})

function back() {
    location.href = "index.html";
}
