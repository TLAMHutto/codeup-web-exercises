//Exercise 1
/*
function calcAge (x) {
    let ageInDays = (x * 365)
    if (isNaN(x)) {
        return false
    }
    return ageInDays
}
console.log(calcAge("a"))*/
//Exercise 2
/*
function increment (x) {
    if (isNaN(x)) {
        console.log(false)
    }
    return x + 1
}
increment(3)
console.log(increment(3))*/
//Exercise 2 (increments by 1, 10 times)
/*
function increments (x) {
    if (isNaN(x)) {
        console.log(false)
    }
    for (var i=x;i<=x+10;i++) {
        console.log(i)
    }
    return
}
console.log(increments(10))*/
//Exercise 3
/*
function isOdd (x) {
    if (x%2!==0 || isNaN(x)) {
        console.log(false)
    } else {
        console.log(true)
    }
}
console.log(isOdd(2))*/
//Exercise 4
/*
let myArray = [1,2,3,4,5,6,7,8,9]
function oddArray (myArray, invert = false) {
    for(let i=0;i<myArray.length;i++){
        const odd = myArray[i]%2!==0;
     if (odd ^ invert) {
         myArray.splice(i--, 1)
     }
    }
}
oddArray(myArray)
console.log(myArray)*/
//Exercise 5
/*
let creditStr = '1234432156788765',
    visable = creditStr.slice(-4)
    starNum = '';
function creditCard () {
    for(var i=(creditStr.length)-4;i>0;i--){
        starNum += '*';
    }
    console.log(starNum + visable)
    return
}
creditCard()*/
//Exercise 6
/*
function alphabetSoup (soup) {
    var arr = soup.split('')
    var sorted = arr.sort()
    return sorted.join('')
}
console.log(alphabetSoup('jnlnvfvedfvwkm'))*/
//Exercise 7
/*
function reverse (arr) {
    return  arr.reverse()
}
console.log(reverse([1,2,3]))*/
