let userInfo = document.querySelector(".user-info");
let userDom = document.querySelector(".user-info #user");
let links = document.querySelector(".links");
let lougout = document.querySelector("#logout");

let username = localStorage.getItem("username");
if (username) {
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML = username;
    lougout.innerHTML = "logout"
}

lougout.addEventListener('click',function(){
    localStorage.clear();
    setTimeout(()=>{
        window.location = "register.html"
    } , 1500)
})