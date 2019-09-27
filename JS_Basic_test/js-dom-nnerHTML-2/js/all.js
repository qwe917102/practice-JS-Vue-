// var el = document.querySelector('.list');
// var link = 'http://www.google.com.tw';
// var name = '卡斯伯'


// el.innerHTML = '<li><a href="'+ link +'">'+name+'</a></li>';



var el =document.querySelector(".list");
var farmerInformation = [
    {
        name : "Axtor",
        webSide : "https://www.google.com.tw/"
    },
    {
        name : "Alice",
        webSide : "https://tw.yahoo.com/"
    },
    {
        name : "Jhonrson",
        webSide : "https://www.mozilla.org/zh-TW/firefox/"
    }
]

var farmerInformationAll = farmerInformation.length
let innertext = '';//設立一個空的容器
// console.log(farmerInformationAll)
for (let i = 0; i < farmerInformationAll; i++) {

    let farmerName = farmerInformation[i].name;
    // console.log(farmerName);

    let farmerWeb = farmerInformation[i].webSide;
    // console.log(farmerWeb);

    

//--------------------------------------------------------------------
    innertext += "<li><a href="+ farmerWeb +">農夫姓名："+ farmerName + "，網站位址："+ farmerWeb +"</a></li>";
    //讓每跑一次迴圈都加一次上去
    console.log(innertext);
}

el.innerHTML = innertext;
//最後把組出來的字串丟進ＨＴＭＬ結構裡
//--------------------------------------------------------------------