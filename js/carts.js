
var allProducts=document.querySelector(".products")
var noProducts=document.querySelector(".noproducts")

function drowCartProducts(allproducts=[]){
if(JSON.parse(localStorage.getItem("productsInCarts")).length===0){
    noProducts.innerHTML="there is no items !!"
}

    let products =JSON.parse(localStorage.getItem("productsInCarts"))||allproducts;
    var y=products.map((item)=>{
        return `
        <div class="product-item">
        <img src="${item.imgUrl}">
        <div class="product-item-desc">
        <h2>${item.title}</h2>
        <p>the new car bmw ver 2020, in england</p>
        <span>${item.color}</span>
        </div>
        <div class="product-item-actions">
            <button class="add-to-cart" onClick="removeFromCarts(${item.id})">Remove From Cart</button>
        </div>
        
        
        </div> `
    })
    allProducts.innerHTML=y;
}
drowCartProducts()
function removeFromCarts(id) {
    console.log(id)
    let productsInCarts=localStorage.getItem("productsInCarts")
   if(productsInCarts){
   let items= JSON.parse(productsInCarts);
 let filterdItems= items.filter(item=>item.id!==id)
 

 localStorage.setItem("productsInCarts",JSON.stringify(filterdItems))
 drowCartProducts(filterdItems)
   }
   
}
