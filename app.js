// // ASSIGNMENT 21-25
// // i 
var firstName = prompt("First Name ")
var lastName = prompt(" Last Name ")
var fullName = firstName + " " + lastName
document.write("Hello " + fullName)

// // ii
var mobileModel = prompt("Enter your mobile model")
var length = mobileModel.length
document.write("My favourite phone is " + mobileModel + "<br/>")
document.write("Length of a string is : " + length)

// // // iii
var Str = "Pakistani"
var findIndex = Str.indexOf("n")
document.write("Index of n is " + findIndex + "<br/><br/>")

// // // iv
var findLastIndex = "Hello World";
var lastIndex =  findLastIndex.lastIndexOf("l")
document.write("Last Index of 'L' :" + lastIndex + "<br/><br/>")

// // // v
var specChar = "Pakistani"
var findSpecInd = specChar.charAt(3)
document.write("Character at the 3rd index: " + findSpecInd + "<br/><br/>")

// // // vii
var Str1 = "Hello"
var Str2 = "World"
var doConcat = Str1.concat( " " + Str2);
document.write(doConcat + "<br/><br/>")

// // // vii
var repStr = " Hyderabad"
document.write("City: " + repStr )
var rep = repStr.replace("Hyderabad" , "Islamabad ")
document.write("<br/> After replacement: " + rep + "<br /><br />")

// // // viii
var repAll = "Ali and Sami are best friends. They play cricket and football together"
var strReplace = repAll.replace(/and/g , "&")
document.write(strReplace + "<br/><br/>")

// // ix
var StringType = "472"
document.write("Value: " + StringType + "<br />")
document.write("Type: " + typeof(StringType)  +"<br />" )

var xyz = parseInt(StringType)
document.write("Value: " +StringType + "<br/>" )
var ToNumber = typeof(xyz)
document.write("Type: " + ToNumber + "<br/><br/>")

// // x
var strUpper = prompt("Convert to UpperCase")
var toUpper = strUpper.toUpperCase();
document.write("User Input: " + strUpper + "<br/>");
document.write("Upper Case: " + toUpper + "<br/><br/>")

// // xii

var capStr = prompt("Do Capitalize")
var doCap = capStr.charAt(0).toUpperCase() + capStr.slice(1)
document.write(doCap)

// // xiii
var num = "35.36"
var numSlice = num.slice(0 , 2)
var rem = num.slice(3)

document.write( "Number: " + num + "<br/>")

var Merge = numSlice.concat(rem)
document.write("Result: " + Merge + "<br/><br/>")

// // viv
var arr = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]

var findFood = prompt("Search")
var find_Index = arr.indexOf(findFood)

for(var i = 0; i<arr.length; i++){
    if( arr[i] === findFood){
        document.write(findFood + " is <strong>available</strong> at index " + find_Index  + " in our bakery")
        break;
    }
}
if(arr[i] !== findFood){
    document.write("Sorry " + findFood + " isn't available in our bakery")
}

// // xvi

var University = "University of Karachi "
var newStr = University.split(' ');
var strLen = newStr.length

for(var o =0; o<=University.length; o++){
    document.write( University[o] +"<br/>" )
}


// // xvii
var char = prompt("Find last Character")
document.write("last character of input: " + char.substr(-1) + "<br/>")

// xviii
var Specific = "The quick brown fox jumps over the lazy dog"
var findSpecific = (Specific.split("the").length ) 
document.write("There are " + findSpecific + " occurrence(s) of the word 'the'" ) 

document.write("<hr />")

// // ASSIGNMENT NUMBER 26-30
// // i
var number = parseFloat(prompt("Enter Number in decimal"))
document.write("The actual number " + number + "<br/>")

var RoundNumber = Math.round(number).toFixed(2)
document.write(  " round of value "+ RoundNumber + "<br/>" )

var floorNumber = Math.floor(number)
document.write("The floor value " + floorNumber + "<br/>")

var CielNumber = Math.ceil(number)
document.write( " The ciel value " +CielNumber + "<br/><br/>")

// // ii
var number = parseFloat(prompt("Enter Number in negative decimal"))
document.write("The actual number " + number + "<br/>")

var negRoundNumber = Math.round(number).toFixed(2)
document.write(  "The round of value "+ negRoundNumber + "<br/>" )

var negfloorNumber = Math.floor(number)
document.write("The floor value " + negfloorNumber + "<br/>")

var negCielNumber = Math.ceil(number)
document.write( " The ciel value " +negCielNumber)

// // iii
var DiceValue = Math.random() * 6
document.write("Random dice value : " + Math.ceil( DiceValue) + "<br/><br/>")

// iv
var randomToss = Math.random() * 2
document.write("Random toss value " + Math.ceil(randomToss ) + "<br />")
if(randomToss <= 1){
    document.write("Result : Tails")
}
else if(randomToss <= 2){
    document.write("Result : Heads" + "<br/><br/>")
}

// // // v
var randomValue = Math.ceil(Math.random() * 100)
document.write("Radom value from 1 to 100 is " + randomValue+ "<br/><br/>")

// // vi
var userWeight = prompt("User Weight")
document.write("The weight of the user is " + userWeight)

//vii
var Ran_Number = Math.ceil(Math.random() * 10)
console.log(Ran_Number)
var guessNumber = prompt("Guess the number")

if(guessNumber == Ran_Number ){
    alert("Great! you are correct")
}
else{
    alert("Try Again")
}


// // document.write("<hr />")
// // ASSIGNMENT NUMBER 31-34
// // // i
var now = new Date()
document.write(now + "<br/><br/>")

// // // ii
var month = new Array()
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

var nowMonth = month[now.getMonth()];
document.write("Current month " + nowMonth + "<br/><br/>")

// // iii
var nowDay = new Array(7);
nowDay[0] = "Sunday";
nowDay[1] = "Monday";
nowDay[2] = "Tuesday";
nowDay[3] = "Wednesday";
nowDay[4] = "Thursday";
nowDay[5] = "Friday";
nowDay[6] = "Saturday";

var day = nowDay[now.getDay()];
var SubStr = day.substring(0,3)
document.write("Today is " + SubStr + "<br/><br/>")

// // iv
if(day == "Sunday" || day == "Saturday"){
    alert("Its a fun day!")
}

// // v
var dateToday = now.getDate()
document.write("Date today: " + dateToday + "<br/>")
if(dateToday < 16){
    document.write("First fifteen days of the month")
}
else{
    document.write("Last days of the month <br/>" )
}

// // vi
var milsec = now.getTime()
// miliseconds
document.write("Elapsed millisecinds since January 1 , 1970: " + milsec + "<br />")
// converting ml into seconds
document.write( "Elapsed minutes since January 1 1970: " +  milsec / 60000 + "<br/><br/>" )

// // vii
var DayTime = now.getHours();
if(DayTime < 13){
    document.write("It's AM <br/><br/>")
}
else{
    document.write("It's PM <br/><br/>")
}

// // viii
var laterDate = new Date("Thu Dec 31 2020  00:00:00")
document.write(laterDate + "<br/><br/>")

// // // ix
var ramdan_starting_date = new Date("Apr 24 2020")
var ramdan_mili = ramdan_starting_date.getTime()

var today = new Date()
var todaymili = today.getTime()

var diff = todaymili - ramdan_mili

var acc = Math.floor( diff /(1000 * 60 *60 *24 ) )
document.write(acc + " days have been passed since ramadan <br/><br/>")

// // x
var start_2015 = new Date("Jan 01 2015")
var start_2015_mili = start_2015.getTime()

document.write("Our preference date " + today + "<br/>" )
var diff_of_2015  = todaymili - start_2015_mili
document.write( diff_of_2015 * 60 + " seconds have passed away since January 01 2015 <br/><br/>")

// // xi
var dob = new Date(prompt("Enter your date of birth, Jan 1,1970"))
var dobmili = dob.getTime()

var dob_diff = todaymili-dobmili
var accuage = Math.floor( dob_diff / (1000 * 60 * 60 * 24 * 30 * 12) )
document.write("Your age is " + accuage + "<br/><br/>")

// // xii

document.write("<h1>K-ELECTRIC BILL</h1>")
var customerName = "Ali Jawad"
var month = "June"
var units = 410
var charge = 16

var net_amount = 410*16
document.write("Net amount Payable within due date: " + net_amount +"<br/>")

var late_charges = 350
var gross_amount = net_amount + late_charges

document.write("Gross Amount Payable (after Due Date) : " + gross_amount +"<br/><br/>")
document.write("<hr />")

// // ASSIGNMENT NUMBER 35-38
// // i
function currentTime() {
    var dateNow = new Date()
    document.write(dateNow + "<br/><br/>")
}
currentTime()

// // ii
function fullName(firstName, lastName) {
    var fName = firstName
    var lName = lastName

    document.write(fName, lName)
}
fullName("Ali", " Jawwad <br/><br/>")

// // iii
function Add(num1 , num2){
    num1 = parseInt(prompt("Enter First Number"))
    num2 = parseInt(prompt("Enter Second Number"))

    document.write("The sum of two number is: " + (num1 + num2))
}
Add()

// // iv
document.write("<h1>CALCULATOR</h1>")
function calc(num1 ,operator , num2){

    if(operator === "+"){
        return num1 + num2
    }
    else if(operator === "-"){
        return num1 - num2
    }
    else if(operator === "*"){
        return num1 * num2
    }
    else if (operator === "/"){
        return num1 / num2
    }
    console.log(num1 , num2 , operator)
}
var result = calc(parseInt(prompt("Enter First Number")) ,  prompt("Operation") , num2 = parseInt(prompt("Enter Second Number")))
document.write(result)


// // v
function squareRoot(squareRoot){
    squareRoot = parseInt(prompt("Find Square Root"))
    var findSqrt = Math.sqrt(squareRoot)
    document.write("The square root of " + squareRoot + ": " + findSqrt + "<br/><br/>")
}
squareRoot(squareRoot)

// // vi
function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

document.write( factorial(parseInt(prompt("Find Fac"))) );

// // vii
function counting(){
    var sp = parseInt(prompt("Starting counting from"))
    var ep = parseInt(prompt("Ending counting to"))

    for(var i=sp; sp<=ep; sp++){
        document.write(sp  + "<br/>")
    }
}
// counting()

// // viii
function palindrome(){
    var user_input = prompt("Enter Word")
    var check = "";

    for(var i = user_input.length - 1; i >= 0; i--){
        check += user_input[i];
    }

    if(user_input === check){
        document.write(user_input + " is palindrome");
    }
    else{
        document.write("Not found")
    }
}
palindrome()


// // ix
function convertFirstLetterToUpperCase(string) {
    var capitalize = prompt("Capitalize String");

    var firstChar = capitalize.slice(0, 1)
    firstChar = firstChar.toUpperCase()

    var otherChar = capitalize.slice(1)
    otherChar = otherChar.toLowerCase()

    var cappedLetter = firstChar + otherChar
    document.write(cappedLetter)

}
convertFirstLetterToUpperCase()

// x
function calculateLength() {
    var str = prompt("Find the longest letter")
    var substring = str.split(" ");
    var minChar = '';
 
    for (var i = 0; i <= substring.length - 1; i++) {
        if (substring[i].length >= minChar.length) {
            minChar = substring[i];
        }
    }
    document.write("The largest word of the sentence is " + minChar)
}
calculateLength()