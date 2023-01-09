
cards=[] //array, ordered list of items
let sum=0
console.log(sum)
let hasblackjack=false
let isAlive=false
let message=""

let sumEl=document.getElementById("sum-el")
//query selector, selector is CSS element selectotrs, id/class/body
// let sumEl=document.querySelector("#sum-el") // for ID
// let sumEl=document.querySelector(".sum-el") // for CLASS

// console.log(hasblackjack)
// console.log(isAlive)

let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")

// let playerName="mAckRoV"
// let cash=1000 // combing this two in to 1, we'll use object

//object creation, use colons instead of equal and dont forget the comma at last
//and we don't add let in front of variables
let player={
    name:"mAckRoV",
    cash:1000
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+" : $"+player.cash

//generate random number between 1 to 13
function getRandomCard(){
    let num=Math.floor(Math.random()*13+1)
    if(num===1){
        return 10
    }
    else if(num>10)
    {
        return 11
    }
    else{
    return num
    }
}

function startGame(){
    isAlive=true
    let fc=getRandomCard()
    let sc=getRandomCard()
    cards=[fc,sc]
    sum=fc+sc
    renderGame()
}

function renderGame(){

    //render out firstCard & SecondCard
    cardsEl.textContent="cards: "
    for(let i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i] +" "
    }
    //render out ALL cards we have
    sumEl.textContent="sum:"+sum

    if(sum<=20)
{
    message="draw new card?"
    // console.log(message)
}

else if(sum===21){
    message="yayyy!!"
    // console.log(message)
    hasblackjack=true
}
else{
    message="lost :("
    // console.log(message)
    isAlive=false
}
// console.log(message)
messageEl.textContent=message


}


function newCard(){
    if(isAlive===true&&hasblackjack===false)
    {
        let card=getRandomCard()
        sum+=card
        cards.push(card)
        renderGame()
    }

}





/////////////////////////////////////////////

// let exp=["gradated from srm", "full stack developer from cranes","mouritech"]

// console.log(exp[0])
// console.log(exp[1])
// console.log(exp[2])

// console.log(length)

// let me=["yash", 24, true] // boolean >> true / false
// console.log(me[2])
// console.log(me[1])
// console.log(me[0])

// let arr=[1,2,3,4,5]
// arr.push(6)

// let arr1=[
//     "hi this is yash",
//     "i m from india",
//     "i am a web developer"
// ]

// let arr2="hi, what's up!"

// arr1.push()

// for(let i=10;i<=100;i+=10)
// {
// console.log(i)
// }

// let cards=[1,2,5]
// for(let i=0;i<cards.length;i++)
// {
//     console.log(cards[i])
// }

// let t1=123
// let t2=145

// function tt(){
//     // let t=t1+t2
//     // return t
//     return t1+t2
// }
// let ans=tt()
// console.log(ans)

// let a=Math.random()*10
// console.log(a)

// let b=Math.floor(Math.random()*7)
// console.log(b)

// function randomn()
//     {
//         let a=Math.floor(Math.random()*6)+1
//         return a
//     }

// let b=randomn()
// console.log(b)

// let hasSolved=false
// let hasHints=false

// if(hasSolved===false && hasHints===false)
// {
//     showSolution()
// }
// function showSolution(){
//     console.log("here's the answer")
// }

// let stp=true
// let dcs=false

// if(stp===true|| dcs===true){
// rcmnd()
// }

// function rcmnd(){
//    console.log("check out this movie!!") 
// }

// let castle=
// {
//     available:true,
//     hotel:"paradise",
//     price:1000,
//     amenties:["geyser","wifi","AC"]
// }
// console.log(castle.available)
// console.log(castle.amenties[0])
// console.log(castle.amenties)
// console.log(castle.price)
// console.log(castle["price"])