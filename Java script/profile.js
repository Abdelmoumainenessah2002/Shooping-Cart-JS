// Get data from Localstorage
let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");
let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let myProducts = products.filter(i => i.isMe === "Y");
// Html Variables 
let userNameDom = document.getElementById("username");
let userEmailDom = document.getElementById("email");
let productsLength = document.querySelector("#productsLength span");

userNameDom.innerHTML = get_user;
userEmailDom.innerHTML = get_email;
if (myProducts.length != 0){
    productsLength.innerHTML = myProducts.length
}
else {
    productsLength.remove();
}

var image = document.querySelector('.user-avatar');

// Check if the key exists in local storage
if (localStorage.getItem('profileImage')) {
  // Retrieve the value from local storage
  var newSrc = localStorage.getItem('profileImage');

  // Update the src attribute of the image element
  image.src = newSrc;
}
