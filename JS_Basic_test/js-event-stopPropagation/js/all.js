
var el = document.querySelector('.box');
el.addEventListener('click',function(e){
  e.stopPropagation();
  alert('box');
  console.log('box');
},false);

var elBody = document.querySelector('.body');
elBody.addEventListener('click',function(){
  alert('你沒有點到box');
  console.log('你沒有點到box');
},false);
// false (事件氣泡 - event Bubbling) - 從指定元素往外找
// true (事件捕捉 - event capturing) - 從最外面找到指定元素
