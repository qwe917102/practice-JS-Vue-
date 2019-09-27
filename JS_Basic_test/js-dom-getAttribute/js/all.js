
// var el = document.querySelector('.titleClass a');
// el.setAttribute('href','http://www.yahoo.com.tw');

// var el3 = document.querySelector('.titleClass a').getAttribute('href');
// console.log(el3);

// var el2 = document.querySelector('.str');
// el2.setAttribute('id','strId');


var el = document.querySelectorAll(".titleClass a");
var elLan = el.length;

console.log(el)

for (let i = 0; i < elLan; i++) {
    el[i].setAttribute("class","aaa"+i);
}
console.log(el[1].getAttribute("class"));

var el2 = document.querySelector(".str");

el2.setAttribute("id","strId")