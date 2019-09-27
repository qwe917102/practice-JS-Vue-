
var hungry = 9;
// 飢餓程度 1~10

function eat(food){
    console.log('我現在要吃'+food);
}
if(hungry <= 3){
    eat('披薩');
}else if(hungry<=5 && hungry>3){
    eat('沙拉');
}else if(hungry==6){
    eat('餅乾');
}else{
    console.log('我超飽不想吃東西')
}