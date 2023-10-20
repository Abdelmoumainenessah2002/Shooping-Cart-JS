let products = JSON.parse(localStorage.getItem('products'));
let productId = localStorage.getItem('productId');
let itemDom = document.querySelector('.item-details');

let productDetails = products.find(item => item.id == productId)
console.log(productDetails);

itemDom.innerHTML = `
    <img src="${productDetails.imageUrl}" alt="clothes">
    <h2> ${productDetails.title} </h2>
    <p> ${productDetails.desc} </p>
    <span> ${productDetails.size} </span>
    <span> ${productDetails.qty} </span> <br>
    <button class="edit-product" onclick="editProduct(${productId})">Edit Product</button>
`;

// Edit Product
function editProduct (id) {
    localStorage.setItem("editProduct", JSON.stringify(id));
    setTimeout(()=>{
        window.location = "editProduct.html"
    },500);
}