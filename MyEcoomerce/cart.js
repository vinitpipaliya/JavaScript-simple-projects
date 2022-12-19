
if (document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready()
}

function ready(){
    let removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for(let i=0; i < removeCartItemButtons.length;i++){
        let button = removeCartItemButtons[i]
        button.addEventListener('click',removeCartItem)
    }

    let quantityInputs=document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) {
        let input=quantityInputs[i]
        input.addEventListener('chabge',quantityChanged)
    }

    let addToCartButtons=document.getElementsByClassName('btn')
    for (let i=0;i<addToCartButtons.length;i++){
        let button=addToCartButtons[i]
        button.addEventListener('click',addToCartClicked)
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event){
    let button=event.target
    let shopItem=button.parentElement.parentElement
    let title=shopItem.getElementsByTagName("h2")[0].innerText
    let price=shopItem.getElementsByTagName("p")[0].innerText
    let imageSrc=shopItem.getElementsByTagName("img")[0].src
    console.log(price)
    console.log(title)
    console.log(imageSrc)

    addItemToCart(title,price,imageSrc)
    updateCartTotal()

}

function addItemToCart(title, price, imageSrc) {
    let cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    let cartItems = document.getElementsByClassName('cart-items')[0]
    if (cartItems != undefined){

        let cartItemsNames = cartItems.getElementsByClassName('cart-item-title')
        for(let i=0;i<cartItemsNames.length;i++){
            if(cartItems[i],innerHTML==title){
                alert("This Item is already add to the cart!")
                return
            }
        }
    }
    let cartRowContents=` 
        <div class="cart-item cart-coloumn">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>            
        <span class="cart-price cart-coloumn">${price}</span>
        <div class="cart-quantity cart-coloumn">
            <input class="cart-uantity-input" type="number" value="1">
            <button class="btn btn-danger">REMOVE</button>
        </div>`
    cartRow.innerHTML=cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click',removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change',quantityChanged)
}

function updateCartTotal(){
    let cartItemContainer=document.getElementsByClassName('cart-items')[0]
    let cartRows=cartItemContainer.getElementsByClassName('cart-row')
    let total=0
    for (let i = 0; i < cartRow.length; i++) {
        let cartRow=cartRows[i]
        let priceElement=cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement=cartRow.getElementsByClassName('cart-quantity-input')[0]
        let price=parsefloat(priceElement.innerText.replace("₹",""))
        let quantity=quantityElement.value
        total=total+(price*quantity)
    }
    total=Math.round(total*100)/100
    document.getElementsByClassName('cart-total-price')[0].innerText='₹'+total
}
