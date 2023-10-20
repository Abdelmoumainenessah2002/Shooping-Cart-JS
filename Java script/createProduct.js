// Variables 
let ProductName = document.getElementById("product-name");
let productDesc = document.getElementById("product-description");
let productSizeSelect = document.getElementById("product-size");
let productForm = document.getElementById("create-form");
let inputFile = document.getElementById("upload-image-file");
let productImage;
let productSizeValue;


// events
productSizeSelect.addEventListener("change",getProductSizeValue);
productForm.addEventListener("submit",createProductFun);
inputFile.addEventListener("change",uploadImage);

// Functions
function getProductSizeValue(e){
    productSizeValue = e.target.value;
}

function createProductFun(e){
    e.preventDefault();
    let allProducts = JSON.parse(localStorage.getItem("products")) ;
    let nameValue = ProductName.value;
    let descValue = productDesc.value;

    if(nameValue && descValue && productSizeValue ){
        let obj = {
            id : allProducts ? allProducts.length +1 : 1,
            imageUrl : productImage,
            qty : 1,
            size : productSizeValue,
            title : nameValue,
            desc : descValue,
            isMe : "Y"
        };
    
        let newProducts = allProducts ? [...allProducts , obj] : obj;
        localStorage.setItem("products",JSON.stringify(newProducts))
        
    
        ProductName.value = "";
        productDesc.value = "";
        productSizeSelect.value = "";

    //     setTimeout(() => {
    //         window.location = 'index.html';
    //     }, 1500);
    }
    else {
        alert("Please enter the all data ...")
    }


}

// upload image function
function uploadImage() {
    let file =  this.files[0]
    let types = ["image/jpeg" , "image/png"];
    
    if(types.indexOf(file.type) == -1){
        alert("Type not supported !!");
        inputFile.value = "";
        return ;
    }
    
    if (file.size > 2*1024*1024){
        alert("The file size is very large !!");
        return ;
    }
    getImageBase64(file)
}

function getImageBase64(file){
    let reader = new FileReader;
    reader.readAsDataURL(file);

    reader.onload = function (){
        productImage = reader.result;
    }
    reader.onerror = function (){
        alert("Error !!");
    }
}