document.getElementById('countId').onclick = function(){

   var hamburgerVal = parseInt(document.getElementById('hamNumId').value);
   var CokeVal = parseInt(document.getElementById('cokeNumId').value);
   var hamPrice = 50;
   var cokePrice = 25;
   var totalPrice = (hamburgerVal * hamPrice) + (CokeVal * cokePrice)


   document.getElementById('totalId').textContent = totalPrice ;

//    console.log(hamburgerVal + CokeVal);
}


function count(price){
    return addTax(price*0.8)
}
function addTax(price){
    return price*1.1
}

console.log(count(500));