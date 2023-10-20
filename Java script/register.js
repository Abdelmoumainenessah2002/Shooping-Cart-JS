let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let registerBtn = document.querySelector("#sign_up");

registerBtn.addEventListener('click',register);


function register(e){
    e.preventDefault();
    emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (username.value ==="" ||email.value ==="" || password.value === "" ){
        alert("You must fill all inputs")
    }

    else if (!emailPattern.test(email.value)) {
        alert("Please enter a valid email address");
    }

    else{
        localStorage.setItem("username",username.value);
        localStorage.setItem("email",email.value);
        localStorage.setItem("password",password.value);

        setTimeout(() => {
            window.location = 'login.html';
        }, 1500);
    }
}