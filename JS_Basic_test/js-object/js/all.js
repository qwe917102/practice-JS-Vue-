var Dungeons = {
    stage : 100,
    knight : 'Atrox',
    monster : ['batDog','badCat','Dragon'],
    box :['gold sword','silver sword','broken sword']
};
var Hero = Dungeons.knight;
var FinalBoss = Dungeons.monster[2];
var getResult = Dungeons.box[0];
var LastStage = Dungeons.stage;

console.log("The hero "+Hero+" kill the "+FinalBoss+" in the stage "+LastStage+" of the Dungeons and get result:"+ getResult+" Congratulations！")

var Dungeons2 = [ {
        stage : 200,
        knight : 'Kazis',
        monster : ['Dog','Cat','mouse'],
        box :['gold sword','silver sword','broken sword']
    },{
        stage : 150,
        knight : 'Rilas',
        monster : ['Zoombie','BigFly','Bug'],
        box :['gold sword','silver sword','broken sword']
    },
    {
        stage : 100,
        knight : 'Patric',
        monster : ['DIO','Taco','Shark'],
        box :['gold sword','silver sword','broken sword']
    }      
];

console.log(Dungeons2[1].monster[0])