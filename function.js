 function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("M");
 }

 //sayMyName()

 //function addTwoNumbers(number1, number2){
    //console.log(number1 + number2)
 //}
 
 
    function addTwoNumbers(number1, number2){
    let result = number1 + number2 
    return result 
    console.log("hufhdu")
 }
 const result = addTwoNumbers(3,8)

 console.log("Result:",result);

 function loginUserMessage(username){
    if(username === undefined){
        console.log("PLease enter a username");
        return
    }
    return '${username}just logged in'
 }
//console.log(loginUserMessage("shivam"))


