let cartProductDivDom = document.querySelector(".carts-products div");
let badgeDom = document.querySelector("nav ul.user-info li .badge");
let shoppingCartIcon = document.querySelector(".shoppingCart");
let cartproductsMenu = document.querySelector("nav ul.user-info li .carts-products ");


//Check if there is items in Localstorage
let addedItem=  localStorage.getItem('productsInCart')
? JSON.parse(localStorage.getItem('productsInCart'))
: [];

if (addedItem){
    addedItem.map(item =>{
        cartProductDivDom.innerHTML += `<p> ${item.title} ${item.qty} </p>`
    });
    badgeDom.style.display = "block";
    badgeDom.innerHTML +=addedItem.length
};

shoppingCartIcon.addEventListener('click',function openCartMenu (){
    if(addedItem.length >0){
        if (cartproductsMenu.style.display == "block"){
            cartproductsMenu.style.display = "none"
        }
        else{
            cartproductsMenu.style.display = "block"
        }
    }
    
});