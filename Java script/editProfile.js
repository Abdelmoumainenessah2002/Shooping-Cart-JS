// Get data from Localstorage
let get_user = localStorage.getItem("username");
let get_email = localStorage.getItem("email");


// Html Variables 
let userInput = document.getElementById("changeName");
let userEmailInput = document.getElementById("changeEmail");
let editForm = document.getElementById("EditProfileBtn");
let inputFile = document.getElementById("edit-image-file");
let profileImage = localStorage.getItem("profileImage") || "";

// Setting Value of Input
userInput.value = get_user;
userEmailInput.value = get_email;
profileImage;

// Events
editForm.addEventListener("click",editProfileData);
inputFile.addEventListener("change",uploadImage);

function editProfileData(e){
    e.preventDefault();
    
    localStorage.setItem("username", userInput.value);
    localStorage.setItem("email", userEmailInput.value);
    localStorage.setItem("profileImage", profileImage);
    
    setTimeout(()=>
        window.location ="profile.html"
    ,500)
}





// upload image function
function uploadImage() {
    let file = inputFile.files[0]; // Use inputFile to access the selected file
    let types = ["image/jpeg", "image/png", "image/svg"];

    if (types.indexOf(file.type) === -1) {
        alert("Type not supported !!");
        inputFile.value = "";
        return;
    }

    if (file.size > 2 * 1024 * 1024) {
        alert("The file size is very large !!");
        return;
    }

    getImageBase64(file);
}

function getImageBase64(file) {
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function () {
        profileImage = reader.result;
    }

    reader.onerror = function () {
        alert("Error !!");
    }
}
