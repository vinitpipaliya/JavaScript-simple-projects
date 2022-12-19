var shoppingcart=(function(){
    cart=[];
    function Item(name,price,count){
        this.name=name;
        this.price=price;
        this.count=count;
    }
    function savecart(){
        sessionStorage.setItem('shoppingCart',JSON.stringify(cart));
    }
    function loadCart(){
        cart=JSON.parse(sessionStorage.getItem('shoppingCart'));
    }
    if (sessionStorage.getItem('shoppingCart')!=null) {
        loadCart();
    }
    var obj={};
    obj.addItemToCart=function(name,price,count){
        for(var item in cart){
            if(cart[item.name]===name){
                cart[item].count++;
                savecart();
                return;
            }
        }
        var item=new item(name,price,count);
        cart.push(item);
        savecart();
    }
    obj.setCountForItem=function(name,count){
        for(var i in cart){
            if (cart[i].name===name) {
                cart[i].count=count;
                break;
            }
        }
    };
    obj.removeItemFromCart=function(name){
        for(var item in cart){
            if(cart[item].name===name){
                cart[item].count--;
                if(cart[item].count===0){
                    cart.splice(item,1);
                }
                break;
            }
        }
        savecart()
    }
    obj.removeItemFromCartAll=function(name){
        for(var item in cart){
            if(cart[item].name===name){
                cart.splice(item,1);
                break;
            }
        }
        savecart();
    }
    obj.clearCart = function() {
        cart = [];
        saveCart();
    }
    obj.totalCount = function() {
        var totalCount = 0;
        for(var item in cart) {
          totalCount += cart[item].count;
        }
        return totalCount;
    }
    obj.totalCart = function() {
        var totalCart = 0;
        for(var item in cart) {
          totalCart += cart[item].price * cart[item].count;
        }
        return Number(totalCart.toFixed(2));
    }
    obj.listCart = function() {
        var cartCopy = [];
        for(i in cart) {
          item = cart[i];
          itemCopy = {};
          for(p in item) {
            itemCopy[p] = item[p];
    
          }
          itemCopy.total = Number(item.price * item.count).toFixed(2);
          cartCopy.push(itemCopy)
        }
        return cartCopy;
    }
    return obj;
    

})