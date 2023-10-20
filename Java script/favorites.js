let productsInCart = localStorage.getItem("productsInCart");
let productsDom = document.querySelector(".products");
let noProducts = document.querySelector(".no-products");

function drawFavoritesProductsUI (allProducts = [] ) {

    if(JSON.parse(localStorage.getItem("productsFavorite")).length === 0){
        noProducts.innerHTML = "There is no favorite items !!";
    }

    let products = JSON.parse(localStorage.getItem("productsFavorite")) || allProducts
    let ProductsUI = products.map((item) => {
        return `
                <div class="product-item">
                <img src="${item.imageUrl}" alt="clothes" class="product-item-img" >
                <div class="product-item-desc">
                    <h2> ${item.title} </h2>
                    <p> ${item.desc} </p>
                    <span> Size: ${item.size} </span> <br>
                </div>
                <div class="product-item-actions">
                    <button class="add-to-cart" onclick="removeItemFromCart(${item.id})" >Remove From Favorite</button>
                </div>
            </div>
            

        `
    })
    productsDom.innerHTML = ProductsUI.join("");
};

drawFavoritesProductsUI();

function removeItemFromCart (id){
    let productsFavorite = localStorage.getItem("productsFavorite")
    if (productsFavorite){
        let items =JSON.parse(productsFavorite);

        let filtredItems = items.filter((item)=> item.id !== id)
        localStorage.setItem('productsFavorite',JSON.stringify(filtredItems));
        drawFavoritesProductsUI(filtredItems);
    }
}