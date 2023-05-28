let cursorCircle = document.getElementById("CURSOR");
let loginButton = document.getElementById("logIn");
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
let storyText = document.getElementById("INPUT-STORY");
let saveStory = document.getElementById("SAVE-STORY");


document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("mousemove", function(pos) {
        cursorCircle.style = `left: ${pos.clientX}px; top: ${pos.clientY}px;`;
    })

    try {
        saveStory.addEventListener("click", function() {
            const fs = require("fs");
            function writeTextToCSVFile(filePath, text) {
                fs.appendFile(filePath, text, function(err) {
                  if (err) {
                    console.error('Error writing to CSV file:', err);
                  } else {
                    console.log('Text written to CSV file successfully.');
                  }
                });
              }
              
              // Usage: Call the function with the file path and the text to write
              const filePath = "textFile/story.csv";
              const textToWrite = storyText.value;
              writeTextToCSVFile(filePath, textToWrite);
        })

    } catch {
        console.log();
    }

    try {
        loginButton.addEventListener("click", function() {
            body.style = "backdrop-filter: blur(5px); transition: backdrop-filter 1s; visibility: visible;";
            border.style = "display: flex";
            loginContainer.style = "display: flex;";
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
            loginContainer.style = "display: none;";
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
