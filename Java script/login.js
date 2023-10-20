let username = document.querySelector("#username");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#sign_in");

let getUser = localStorage.getItem("username");
let getPassword = localStorage.getItem("password");
loginBtn.addEventListener('click', login);


function login (e) {
    e.preventDefault();

    if (username.value === "" || password.value === "") {
        alert("You must fill all inputs");
    } 
    else {
        if (   
                getUser &&
                getUser.trim() === username.value.trim() &&
                getPassword && 
                getPassword.trim() === password.value.trim()
            ) {
            setTimeout(() => {
                window.location = 'index.html';
            }, 1500);
        } else {
            alert("user or password is incorrect")
        }
    }
}
