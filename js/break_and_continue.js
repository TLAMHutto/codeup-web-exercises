
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
        console.log(i)
    }
