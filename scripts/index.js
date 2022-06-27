//button functionality
function showproducts(){
    window.location.href="inventory.html"
}



//store the products array in localstorage as "data"
function Nike(t,d,p,i){
    this.brand=t;
    this.name=d;
    this.price=p;
    this.image=i;
}


document.getElementById("product_form").addEventListener("submit",storeproducts)
function storeproducts(e){
e.preventDefault();
let form=document.getElementById("product_form");
let brand=document.querySelector("#product_brand").value;
let name=document.querySelector("#product_name").value;
let price=document.querySelector("#product_price").value;
let image=document.querySelector("#product_image").value;

let k= new Nike(brand,name,price,image);
let productss=JSON.parse(localStorage.getItem("data"))|| [];
productss.push(k);
localStorage.setItem("data", JSON.stringify(productss));
console.log(productss)
}