// Variables 
let products = JSON.parse(localStorage.getItem("products")) || products;
let productId = JSON.parse(localStorage.getItem("editProduct"));
let getProduct = products.find(item =>item.id ===productId)


let ProductName = document.getElementById("product-name");
let productDesc = document.getElementById("product-description");
let productSizeSelect = document.getElementById("product-size");
let updateForm = document.getElementById("update-form");
let inputFile = document.getElementById("upload-image-file");
let productImage;
let productSizeValue;

ProductName.value = getProduct.title;
productDesc.value = getProduct.desc;
productSizeSelect.value = getProduct.size;
productImage = getProduct.imageUrl;
// events
productSizeSelect.addEventListener("change",getProductSizeValue);
updateForm.addEventListener("submit",updateProductFun);
inputFile.addEventListener("change",uploadImage);

// Functions
function getProductSizeValue(e){
    productSizeValue = e.target.value;
}

function updateProductFun(e){
    e.preventDefault();

    getProduct.title = ProductName.value;
    getProduct.desc = productDesc.value;
    getProduct.size = productSizeSelect.value;
    getProduct.imageUrl = productImage;

    localStorage.setItem("products",JSON.stringify(products));
    setTimeout(() => {
        window.location = 'index.html';
    }, 1500);
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


