document.querySelector("#add_product").addEventListener("click",addproduct)

function addproduct(){
    window.location.href="index.html"
}

let productsdata= JSON.parse(localStorage.getItem("data"));
console.log( productsdata)

productsdata.map(function (elem){

    let box =document.createElement("div");


    let img=document.createElement("img");
    img.src=elem.image;

    let typ=document.createElement("p")
    typ.innerText=elem.brand;

    let des=document.createElement("p")
des.innerText=elem.name;

let pric=document.createElement("p");
pric.innerText=elem.price;

let btn= document.createElement("button");
btn.innerText="Remove"
btn.addEventListener("click" , function(){
    removeItem(elem,index)
})

box.append(img,typ,des,pric,btn);
document.querySelector("#products_data").append(box)
})

function removeItem(elem,index){
    productsdata.splice(index,1)
    localStorage.setItem("nikedata", JSON.stringify(productsdata))
    window.location.reload();
}