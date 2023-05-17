let loginButton = document.getElementById("logIn");
let animationElenemts = document.getElementsByClassName("box");
let loginContainer = document.getElementById("logIn-conatainer");
let submitButton = document.getElementById("submit-button");
let body = document.getElementById("main");

loginButton.addEventListener("click", function() {
    for (let i = 0; i < animationElenemts.length; i++) {
        animationElenemts[i].style = "animation: rain 2s ease 1;";
        setTimeout(function() {
            body.style = "backdrop-filter: blur(5px); transition: backdrop-filter 2s; visibility: visible;";
            loginContainer.style = "z-index: 3; visibility: visible; transform: scale(1); transition: transform 2s, top 2s; top: 20%;";
        }, 2000)
        
    }
})

submitButton.addEventListener('click', function() {
    location.reload();  
}) 
