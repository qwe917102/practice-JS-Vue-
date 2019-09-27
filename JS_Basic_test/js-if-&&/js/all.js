// var myBill = 1250;
// var VIP = false;
// var andCheck = myBill > 1000 && VIP == true;
// var orCheck = myBill > 1000 || VIP == true;
// document.getElementById('andId').textContent = andCheck;
// document.getElementById('orId').textContent = orCheck;

var MyBuy = 990;
var VIP = true;
var allCheck = MyBuy > 1000 && VIP ==true;
var anyCheck = MyBuy > 1000 || VIP ==true;
if(allCheck == false){
    document.getElementById('andId').textContent = "我有會員但是沒滿千"; 
}else{
    document.getElementById('andId').textContent = "恩！我都有達到"; 
}
if(anyCheck == false){
    document.getElementById('orId').textContent = "喔喔瞭解了，不過我都沒有呢";  
}else{
    document.getElementById('orId').textContent = "好得，我是VIP會員";  
}