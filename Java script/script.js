//  Define products
let productsDom = document.querySelector(".products");
let products =  productsDB;



// Display products
let drawProductsUI;
( drawProductsUI = function(products= []) {
    let ProductsUI = products.map((item) => {
        return `
            <div class="product-item" style="border :${item.isMe === 'Y' ? '1px solid darkgreen' :''}">
                <img src="${item.imageUrl}" alt="clothes" class="product-item-img" >
                <div class="product-item-desc">
                    <a onclick="saveItemData(${item.id})" >${item.title}</a>
                    <p> ${item.desc} </p>
                    <span> Size: ${item.size} </span>
                    ${item.isMe === "Y" ? "<button class='edit-product' onclick='editProduct("+item.id+")'>Edit Product</button>" :null}
                </div>
                <div class="product-item-actions">
                    <button class="add-to-cart" onclick="addedToCart(${item.id})">Add To Cart</button>
                    <i class='bx bx-heart favorite' style="color:${
                        item.liked == true ? 'red' : '' 
                    }" onclick="addToFavorite(${item.id})"></i>
                </div>
            </div>
            

        `
    })
    productsDom.innerHTML = ProductsUI.join("");
})(JSON.parse(localStorage.getItem("products")) || products);



function addedToCart (id) {
    // For check if the user is logged in or no
    if (localStorage.getItem("username")){
        let products = JSON.parse(localStorage.getItem("products")) || productsDB;
        let product = products.find((item)=> item.id === id);
        let isProductInCart = addedItem.some(i => i.id ===product.id);
        if (isProductInCart){
            addedItem = addedItem.map(p =>{
                if (p.id === product.id){
                    p.qty += 1;
                }
                return p;
            })
        }
        else{
            addedItem.push(product)   
        }
        // UI
        cartProductDivDom.innerHTML = "";
        addedItem.forEach(item =>{
            cartProductDivDom.innerHTML += `<p> ${item.title} <span class="item-qty">${item.qty}</span> </p>`;
        });

        // save data
        localStorage.setItem('productsInCart',JSON.stringify(addedItem));

        // add counter of items
        let cartProductItems = document.querySelectorAll(".carts-products div p");
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductItems.length;
    }
    else {
        window.location = "register.html";
    }

    
}

// Get unique function
function getUniqueArr(arr , filterType){
    let unique = arr.map(item => item[filterType])
    .map((item , i ,final) =>final.indexOf(item)=== i && i)
    .filter((item) => arr[item])
    .map(item => arr[item])
    return unique
}

function saveItemData (id){
    localStorage.setItem('productId',id);
    setTimeout(() => {
        window.location = 'cartDetails.html';
    }, 200);
}

// Search function

let input = document.getElementById("search");
input.addEventListener("keyup",function(e){
    search(e.target.value,JSON.parse(localStorage.getItem("products")));
    
    if (e.target.value.trim() === ""){
        drawProductsUI(JSON.parse(localStorage.getItem("products")));
    }
})

function search(title , myArray){
    let arr = myArray.filter(item =>item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    drawProductsUI(arr)
}


// Add to favorite function
let favoritesItems = localStorage.getItem("productsFavorite") 
? JSON.parse(localStorage.getItem("productsFavorite"))
: [];
function addToFavorite (id) {
    // For check if the user is logged in or no
    if (localStorage.getItem("username")){
        let choosenItem = products.find((item)=> item.id === id);
        choosenItem.liked = true;
        favoritesItems = [...favoritesItems , choosenItem];

        let uniqueProducts = getUniqueArr(favoritesItems , "id")
        localStorage.setItem('productsFavorite',JSON.stringify(uniqueProducts))
        products.map((item) => {
            if ( item.id === choosenItem.id){
                item.liked = true;
            }
        })
        localStorage.setItem("products",JSON.stringify(products))
        drawProductsUI(products);
    }
    else {
        window.location = "register.html";
    }

    
}

// Filter Products By Size
let sizeFilter = document.getElementById("size-filter");
sizeFilter.addEventListener("change",getProductsFilteredBySize);

function getProductsFilteredBySize (e) {
    let val = e.target.value;
    let products = JSON.parse(localStorage.getItem("products")) || products;

    if(val === 'all'){
        drawProductsUI(products)
    }
    else {
        products = products.filter(item => item.size === val);
        drawProductsUI(products);
    }
}


// Edit Product
function editProduct (id) {
    localStorage.setItem("editProduct", JSON.stringify(id));
    setTimeout(()=>{
        window.location = "editProduct.html"
    },500);
}