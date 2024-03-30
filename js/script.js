let userInfo =document.querySelector("#user_info")
let userData=document.querySelector("#user")
let links =document.querySelector("#links")

if(localStorage.getItem("username")){
    links.remove()
    userInfo.style.display="flex"
    userData.innerHTML=localStorage.getItem("username")
}

let logOut=document.querySelector("#logout")
logOut.addEventListener("click",function(){
    localStorage.clear()
    setTimeout(()=>{
window.location="login.html"
    },1500)
})
///////////////////////////////////////////////
var allProducts=document.querySelector(".products")
var products=[
    {id:1,
    title:"BMW",
    color:"yellow",
    imgUrl:"imgs/car1.jpg"
},
{id:2,
    title:"tyota",
    color:"red",
    imgUrl:"imgs/car1.jpg"
},
{id:3,
    title:"ferari",
    color:"gray",
    imgUrl:"imgs/car3.jpg"
},
{id:4,
    title:"marcides",
    color:"blue",
    imgUrl:"imgs/car4.jpg"
}
]
function drowItems(){
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
            <button class="add-to-cart" onClick="addtocart(${item.id})">Add to Cart</button>
            <i class="far fa-heart fav"></i>
        </div>
        
        
        </div> `
    })
    allProducts.innerHTML=y;
}
drowItems()

var cartproductsDiv=document.querySelector(".carts-products div")

let badge= document.querySelector(".badge")
///////////////
let addedItem=localStorage.getItem("productsInCarts")?JSON.parse(localStorage.getItem("productsInCarts")):[];
if(addedItem){
    addedItem.map(item=>{
        cartproductsDiv.innerHTML+=`<p>${item.title}</p>`
        badge.style.display="block"
        badge.innerHTML=addedItem.length
    })
}

//////////////////////

    if(localStorage.getItem=("username")){
        function addtocart(id){
            let choosenItem=products.find((item)=>item.id===id);
            cartproductsDiv.innerHTML+=`<p>${choosenItem.title}</p>`

addedItem=[...addedItem,choosenItem]
localStorage.setItem("productsInCarts",JSON.stringify(addedItem))

            let cartProductLength=document.querySelectorAll(".carts-products div p")
            badge.style.display="block"
            badge.innerHTML=cartProductLength.length
            
            }
    }else{
        window.location="login.html"

    }


//////////////////////////////////////////////////////////////
let shoppingCartIcon= document.querySelector(".shopping-cart")
let cartsProducts =document.querySelector(".carts-products")

shoppingCartIcon.addEventListener("click",opencart)


function opencart(){
    if(cartproductsDiv.innerHTML !=""){
        if(cartsProducts.style.display=="block"){
            cartsProducts.style.display="none"
        }else{
            cartsProducts.style.display="block"
        }
    }
}
//////////////////////////////////////////////////////////
