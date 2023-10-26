console.log("main.js")

let buttonsPlus = document.getElementsByClassName('fa-plus')
// console.log("plus buttons :" , buttonsPlus)

for(let btnPlus of buttonsPlus){
    btnPlus.addEventListener("click",function() {
        btnPlus.previousElementSibling.innerHTML++
        sum()
    })
}

let buttonsMinus = document.getElementsByClassName('fa-minus')
// console.log("minus buttons :" , buttonsMinus)

for(let btnMinus of buttonsMinus){
    btnMinus.addEventListener("click",function() {
        if (btnMinus.nextElementSibling.innerHTML > 0) {
            btnMinus.nextElementSibling.innerHTML--
            sum()
        }
        
    });
}

function sum(){
    let qty = document.querySelectorAll(".qty")
    let price = document.querySelectorAll(".price")
    console.log(qty[2])
    console.log("price : ",price)

    let sum = 0 ;
    for(let i=0;i<qty.length;i++){
        sum += qty[i].innerHTML * price[i].innerHTML
    }
    console.log(sum)
    document.getElementById("total_price").innerHTML = "Shopping cart Total : $ " +sum

}

let buttonsDelete = document.getElementsByClassName("fa-trash");
    console.log(buttonsDelete)

for(let btnDelete of buttonsDelete) {
    btnDelete.addEventListener("click",function() {
        btnDelete.parentNode.remove();
        sum()
    })
}

let buttonsLike = document.getElementsByClassName("fa-heart");
console.log(buttonsLike)

for (let btnLike of buttonsLike) {
    btnLike.addEventListener("click",function() {
        btnLike.classList.toggle("red_like")
    });
}

let buttonsOrder = document.getElementById("btn_order")
    

buttonsOrder.addEventListener("click",function(){
    alert("Your order has been placed successfully!")
})