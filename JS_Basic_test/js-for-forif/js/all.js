
var farms = [
  {
    farmer: '卡斯伯',
    field: 6,
    chick: 200
  },
  {
    farmer: '查理',
    field: 10,
    chick: 50,
  },
  {
    farmer: '約翰',
    field: 6,
    chick: 120
  }
]
// 撈出哪些的農場的小雞數量超過 100 隻以上

// var farmsTotal = farms.length;

// for(var i =0;i<farmsTotal;i++){
//     if(farms[i].chick>100){
//         console.log(farms[i].farmer+'的小雞超過100隻以上');
//     }
// }

var farmsTotal = farms.length;
var chickTotal = 0;
for (let i = 0; i < farmsTotal; i++) {
  console.log('第'+(i+1)+"個農場的主人是"+farms[i].farmer)
  // if(farms[i].chick > 100){
  //   console.log("而"+farms[i].farmer + "的小雞超過100隻以上")
  // }
}

for (let i = 0; i < farmsTotal; i++) {
  if(farms[i].chick > 100){
    console.log("而"+farms[i].farmer + "農場裡的小雞超過100隻，有"+ farms[i].chick + "隻")
  }else{
    console.log(farms[i].farmer+"農場裡的小雞只有"+ farms[i].chick + "隻")
  }
}

for (let i = 0; i < farmsTotal ; i++) {
  chickTotal += farms[i].chick;
}
console.log("共"+ chickTotal + "隻雞")


for (let i = 0; i < farmsTotal ; i++) {
  if(farms[i].chick <= 150 && farms[i].chick > 50){
    console.log(farms[i].farmer);
    farms[i].chick -= 70;
    console.log(farms[i].chick)
    break;
  }
}