var farms = [
    {
        farmer: '卡斯伯',
        dogs: ['張姆士', '龐的'],
    },
    {
        farmer: '查理',
        dogs: ['皮皮'],
    }
];
// var el = document.querySelector('.list');
// var farmLen = farms.length;
// for(var i =0;i<farmLen;i++){
//     var str = document.createElement('li');
//     str.textContent = farms[i].farmer;
//     el.appendChild(str);
// }


let el =document.querySelector(".list");
let farmLen = farms.length;
for (let i = 0; i < farmLen; i++) {
    let str = document.createElement("li");
    str.textContent = farms[i].farmer;
    el.appendChild(str);
}
