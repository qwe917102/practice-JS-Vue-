// var myMonth = 5;
// var thisMonth = 12;
// var birthdayCheck = myMonth == thisMonth;
// document.getElementById('birthdayId').textContent = birthdayCheck;

// var nowPeple = 1;
// var totalPeople = 2;
// var allPeopleNoHereCheck = totalPeople !== nowPeple;
// console.log(allPeopleNoHereCheck);
// document.getElementById('peopleId').textContent = allPeopleNoHereCheck;


var myMonth = 8;
var thisMonth = 9;
var CheckMonth = (myMonth == thisMonth);
var nowPeople = 1;
var allPeople = 2;
var PeopleNoHere = (nowPeople !== allPeople);
if(CheckMonth == false){
    document.getElementById('birthdayId').textContent = "我不是本月壽星"
}else{
    document.getElementById('birthdayId').textContent = "是的我這個月生日"
}
if(PeopleNoHere == true){
   document.getElementById('peopleId') .textContent = "恩沒錯，另一位還在路上。"
}else{
    document.getElementById('peopleId') .textContent = "不是的,在我身後這位就是。" 
}