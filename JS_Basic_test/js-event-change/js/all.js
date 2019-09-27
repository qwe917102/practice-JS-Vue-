var area = document.getElementById('areaId');
var list = document.querySelector('.list');

var country = [
    {
        farmer: '查理',
        place: '前鎮區'
    },
    {
        farmer: '卡斯伯',
        place: '苓雅區'
    }
    ,{
        farmer: '小花',
        place: '苓雅區'
    }
]
let Len = country.length;


function MyFunction(e){
    let getSelect = e.target.value;
    //---------

    //如果偵測到list內有子物件（子物件陣列長度>0）則持續刪除第一個子物件，直到 子物件陣列長度<0（沒有子物件）為止
    while(list.childNodes.length > 0){
        list.removeChild(list.firstChild);
        console.log(list);
    }
    //---------
    for (let i = 0; i < Len; i++) {
         if(getSelect == country[i].place){
            let MachLi = document.createElement("li")
            MachLi.textContent = country[i].farmer;
            list.appendChild(MachLi);
        };
    };
};
function targetThis(e){
    // console.log(e)
    if(e.target.nodeName !== "LI"){
        return;
    };
    console.log(e.target.textContent);
}

area.addEventListener('change',MyFunction,false);
list.addEventListener('click',targetThis,false);

// var len = country.length;

// function updateList(e){
//     var select = e.target.value;
//     console.log(e)
//     var str='';
//     for(var i=0;len>i;i++){
//         if(select== country[i].place){
//             str += '<li>'+country[i].farmer+'</li>'
//         }
//     }
//     list.innerHTML = str;
// }


// area.addEventListener('change',updateList,false)