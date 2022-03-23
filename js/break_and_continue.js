
/*
var result = prompt("Enter a odd number between 1- 50");
    while(result < 1 || result > 50 || result % 2 ===0 || isNaN(result) == true)
    {
        var result = prompt("ENTER A ODD NUMBER!");

    }
    document.write("Number to skip is " + result)
    for (var i=1;i<=50;i++){
        if (i%2===0 || i == result){
            continue;
        }
        document.write("<br>" + i)
    }
*/
/*var i = 1
while (i<65536) {
    i *=2
    console.log(i)
    if (i === 65536) {
        break;
    }
}*/

//Icecream Loop
let amtToSell = Math.floor(Math.random()*50)+50

do {
    let amtBought = Math.floor(Math.random() * 5) + 1;
    amtToSell = amtToSell- amtBought
    console.log(amtBought)
    console.log(amtToSell)
} while (amtToSell >= 0)
