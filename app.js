// Question # 1
document.write("<h1>Question # 1</h1>")

var  character = prompt (" Enter Number or letter")

if (character >= 0){
    alert(character + " " + "is a number")
} else if (character >= "a"){
    alert(character + " " + "is a lowercase letter")
    document.write( character + " " + "is a lowercase letter")
}else if (character >= "A" ){
    alert(character + " " + "is a uppercase letter")
    document.write( character + " " + "is a uppercase letter")
}


// Question # 2
document.write("<h1>Question # 2</h1>")

 var integers_1 = prompt ("Enter a Number")
 var integers_2 = prompt ("Enter a Number")

 if (integers_1 > integers_2 ){
    alert (integers_1 + "" + "is Grater then" + "" +  integers_2)
    document.write(integers_1 + "" + "is Grater then" + "" +  integers_2)
 } else if (integers_1 < integers_2 ){
    alert (integers_1 + "" + "is less then" + "" +  integers_2)
    document.write(integers_1 + "" + "is less then" + "" +  integers_2)
 }
else{
    alert (integers_1 + "and" + integers_2 + ""  +"are equal")
    document.write(integers_1 + "and" + integers_2 + ""  +"are equal")
 }
   

// Question # 3
document.write("<h1>Question # 3</h1>")

var num = prompt("Enter any Number" )

if (num == 0 ){
    alert("The number is Zero")
    document.write("The number is Zero")
}  else if( num < 0){
    alert("The number is  negative ")
    document.write("The number is  negative ")
}else if( num > 0 ){
    alert("The number is  positive ")
    document.write("The number is  positive ")
} else {
    alert ("place Enter any Number ")
    document.write("place Enter any Number ")
}


// Question # 4
document.write("<h1>Question # 4</h1>")

var  character = prompt("Enter Onlu One  character (vowel)")

if(character == "a", "e" , "i" , "o" , "u"){
    alert("true")
}else{
    alert( false)
}

// Question # 5
document.write("<h1>Question # 5</h1>")
var password = "12345"
var userName = prompt ("Enter You Name")
 var userPassword_1 = prompt("Enter You Password-1 (12345)")
 var userPassword_2 = prompt("Enter You Password-2 (12345)")

 if ( userPassword_1 !== password){
    alert("Please enter your password")
 } else if ( userPassword_2 == userPassword_1){
    alert("Correct! The password you entered matches the original password")
 } else{
    alert("Incorrect password")
 }

// Question # 6
document.write("<h1>Question # 6</h1>")

var greeting = prompt ("Enter Hour") 
var hour = "13"
 var hour = "18"
if (  greeting  <"13" ) {
 document.write ( "Good day")
} else if (greeting >"18" ) {
    document.write ("Good evening")
}

// Question # 7
document.write("<h1>Question # 7</h1>")

var time = prompt ("Enter Your time  24 hours clock format like: 19:00")


if ( time > "00:00" && time <=  "12:00"){
    alert ("Good Moring")
}
else if (time > "12:00" &&  time <= "17:00"){
        alert("Good after Noon")
} 
else if ( time > "17:00" && time <= "22:00"){
    alert("Good Evening")
}
else if ( time > "22:00" && time <= "23:59"){
    alert("Good Night")
} else{
    alert(" place Enter Right Time")
}


