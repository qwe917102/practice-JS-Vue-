let inputFrom = document.querySelector('#todoInput');
let inputSendBtn = document.querySelector('#todoBtn');
let findUl = document.querySelector(".list");
// console.log(findUl.childNodes.length)
let data =JSON.parse(localStorage.getItem('todoMsg')) || [];//建立data變數 用json解析存放在localStorage的值 沒有值則變為空值


inputSendBtn.addEventListener("click",sendData);
findUl.addEventListener("click",deleteDetil);

UpdateData(data)
//進頁面就更新一次將localStorage的值紀錄並顯示出來

//（＊１）
function deleteLI(){
    while(findUl.childNodes.length > 0){
        findUl.removeChild(findUl.firstChild);
    };
};
//---------------

//監控處理事件：
//1.將input.value的值丟入data的陣列中。
//2.將處理好的陣列存放於localStorage中。
//3.如果偵測到list內有子物件（子物件陣列長度>0）則持續刪除第一個子物件，直到 子物件陣列長度<0（沒有子物件）為止
//4.最後更新頁面將新的localStorage內的值顯示於畫面中。
function sendData(e){
    e.preventDefault(); //取消刷新頁面
    let innerVal = inputFrom.value; //抓到input欄位內的值
    let todo ={
        todoMsg : innerVal
    };
    if (todo.todoMsg == ''){
        alert('不能為空白！！！！')
        return;
    }else{
        //1
        data.push(todo);
        //2
        localStorage.setItem("todoMsg",JSON.stringify(data));
        //3 
        deleteLI(); //參考＊１）
        //4
        UpdateData(data);
    }
}
//-----------------
//新增元素事件：
//新增ul內的所有標籤：
//<li class:"d-flex">
    //<a href="#">刪除</a>
    //<span></span>
//</li>
//並且將localStorage最後新增的值印在<span>標籤裡
function UpdateData(data){

    let dataLen = data.length;
    for (let i = 0; i < dataLen; i++) {
        let dataList = document.querySelector(".list");
        let dataLi = document.createElement('li'); 
        let dataLiInnerBtn = document.createElement('a');
        let dataLiInnerSpan = document.createElement('span');

        let addcss1 = document.querySelectorAll("li");

        addcss1.class += "d-flex";

        dataLiInnerBtn.setAttribute("href","#");//給 <a> href="#" 元素 
        dataLiInnerBtn.setAttribute("data-index",i)//給 <a> 設定  data-index＝i 的元素 以備刪除功能抓取正確選項

        dataLiInnerBtn.textContent = "刪除";
        dataLiInnerSpan.textContent = data[i].todoMsg;//取得物件當前輸入的值 

        dataLi.appendChild(dataLiInnerBtn);//將<a>標籤塞入<li>的DOM裡
        dataLi .appendChild(dataLiInnerSpan);//將<span>標籤塞入<li>的DOM裡
        dataList.appendChild(dataLi);//將<li>標籤塞入<ul>的DOM裡
    }
}

//---------------

function deleteDetil(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A'){return};//點到 Ａ 以外的元素就結束
    let index = e.target.dataset.index;//撈取先前設定 data-index＝i 的值
    data.splice(index, 1);//刪除陣列中以 index 值開始算的第1筆物件（自己）
    localStorage.setItem('todoMsg', JSON.stringify(data));//將刪除結果存放於localStorage中
    deleteLI()//每處發一次就刪除先前結果（參考＊１）
    UpdateData(data);//顯示最新結果
    console.log(e)

}