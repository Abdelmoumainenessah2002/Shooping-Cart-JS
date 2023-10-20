let productsInCart = localStorage.getItem("productsInCart");
let productsDom = document.querySelector(".products");
let noProductsDom = document.querySelector(".no-products");

function drawCartProductsUI (allProducts = [] ) {

    if(JSON.parse(localStorage.getItem("productsInCart")).length === 0){
        noProductsDom.innerHTML = "There is no items!!";
        productsDom.style.width = 0 ;
    }

    let products = JSON.parse(localStorage.getItem("productsInCart")) || allProducts
    let ProductsUI = products.map((item) => {
        return `
                <div class="product-item">
                <img src="${item.imageUrl}" alt="clothes" class="product-item-img" >
                <div class="product-item-desc">
                    <h2> ${item.title} </h2>
                    <p> ${item.desc} </p>
                    <span> Size: ${item.size} </span> <br>
                    <span> Quantites: ${item.qty} </span>
                </div>
                <div class="product-item-actions">
                    <button class="add-to-cart" onclick="removeItemFromCart(${item.id})">Remove From Cart</button>
                </div>
            </div>
            

        `
    })
    productsDom.innerHTML = ProductsUI.join("");
};

drawCartProductsUI();

function removeItemFromCart (id){
    let productsInCart = localStorage.getItem("productsInCart")
    if (productsInCart){
        let items =JSON.parse(productsInCart);

        let filtredItems = items.filter((item)=> item.id !== id)
        localStorage.setItem('productsInCart',JSON.stringify(filtredItems));
        drawCartProductsUI(filtredItems);
    }
}