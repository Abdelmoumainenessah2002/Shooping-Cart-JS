let products = JSON.parse(localStorage.getItem("products")) || productsDB;
let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".no-products");

let drawProductsUI;
( drawProductsUI = function(products= []) {
    let myProducts = products.filter(item => item.isMe === "Y");
    if (myProducts.length != 0) {
        let ProductsUI = myProducts.map((item) => {
            return `
                <div class="product-item" style="border :${item.isMe === 'Y' ? '1px solid darkgreen' :''}">
                    <img src="${item.imageUrl}" alt="clothes" class="product-item-img" >
                    <div class="product-item-desc">
                        <a onclick="saveItemData(${item.id})" >${item.title}</a>
                        <p> ${item.desc} </p>
                        <span> Size: ${item.size} </span>
                        <button class="edit-product" onclick="editProduct( ${item.id} )">Edit Product</button>
                    </div>
                    <div class="product-item-actions">
                        <button class="add-to-cart" onclick="deletProduct( ${item.id} )">Delete Product</button>
                    </div>
                </div>
                
    
            `
        })
        productsDom.innerHTML = ProductsUI.join("");

    }
    else{
        noProductsDom.innerHTML = "You dont add any product";
        productsDom.style.width = 0 ;
    }
    
})(JSON.parse(localStorage.getItem("products")) || productsDB);

// Edit Product
function editProduct (id) {
    localStorage.setItem("editProduct", JSON.stringify(id));
    setTimeout(()=>{
        window.location = "editProduct.html"
    },500);
}


// Delete Product
function deletProduct(id){
    let products = JSON.parse(localStorage.getItem("products")) || productsDB;
    let myProducts = products.filter(item => item.isMe === "Y");

    let filtered = myProducts.filter(i => i.id !== id);
    drawProductsUI(filtered);

    let clickedItem = myProducts.find(i => i.id === id);
    products = products.filter(i => i.id !== clickedItem.id)
    localStorage.setItem("products",JSON.stringify(products))
    
}