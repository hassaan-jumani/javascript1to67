// chapter 38-42
// task 1
// function power(a,b){
//   var a =   prompt("Enter the value")
//   var b =  prompt("Enter the power")
//   var a = parseInt(a)
//   var b = parseInt(b)
//     var result = Math.pow(a,b);
//     document.write(result)
// }
// power()

//task 2

// function leapyear(){
//     var leap = prompt("Enter the leap year");
//     var a = parseInt(leap)
//     var b = a/2
//     if(b % 2 === 0){
//         document.write("ITs A LEAP YEAR")
//     }
//     else{
//         document.write("ITS NOT A LEAP YEAR")
//     }
// }
// leapyear()

//task 4

// var eng;
// var urdu;
// var pak;


//  function main(){
//      eng = parseInt(prompt("enter you english marks"));
//      urdu = parseInt(prompt("enter you urdu marks"));
//      pak = parseInt(prompt("enter you pst marks"));
//      per();
//      aver();


// }
// function aver(){
//     var total_marks = eng+urdu+pak;
//     document.write("the average marks is " + total_marks/3)
// }

// function per(){
//     var percentage = eng+urdu+pak;
//     document.write("the percentage is " + percentage*100/300 + "<br>")
// }
// main()


//task 5

// function single(){
//     var message = "here wo go to choice";
//     var search =  prompt("enter the finding word in message");

// }

//task 6
// var vowels = ["a","e","i","o","u"];
// var sentence = "here is the the sentence for deleting vowels  from them"
// var word = "";
// function delvow(){
    
//     for(var i =0 ; i<sentence.length; i++){
//         if(sentence[i] = vowels[0]){
//             // sentence.splice(i, ++i)
//         }
        
//         else if(sentence[i]=vowels[1]){
//             word += sentence.splice(i, ++i)
//             // console.log(sentence)
//         }
//         else if(sentence[i]=vowels[2]){
//            word += sentence.splice(i)
//             // console.log(i)
//         }
//         else if(sentence[i]=vowels[3]){
//            word =+ sentence.splice(i)
//             // console.log(i)
//         }
//         else if(sentence[i]=vowels[4]){
//             word =+ sentence.splice(i, ++i)
//             // console.log(i)
//         }
        
//         console.log(word)

        
//     }
    
   
    
// }
// delvow()
// function delvow(){
// var strings = ["here where all vowels have been deleted from that sentence"]                          

// str = strings.map(x=>x.replace( /[aeiou]/g, '' ));              

// console.log(str); 
// }
// delvow();


//task 7

// var sentence = "Pleases read this application and give me gratuity"
// var strings = ['a','e','i','o','u']

// function count(){

//     switch(sentence){
//         case sentence = strings:
//         alert("found");
//         break



//     }
// }

//task 8

// var distance = parseFloat(prompt("Enter the distance between two cities in km"));
// function meters(){
//     var meter = distance * 1000
//     document.write("Meter : " + meter)
// }
// function feet(){
//     var feet = distance * 3280.84
//     document.write("Feet : " + feet)

// }
// function inches(){
//     var inches = distance * 39370.1
//     document.write("inches : " + inches)
// }
// function centimeters(){
//     var centi = distance * 100000
//     document.write("centimeters : " + centi)

// }

// function main(){
//     meters();
//     + "<br>"
//     feet();
//      + "<br>"
//     inches();
//      + "<br>"
//     centimeters();
//      + "<br>"
// }
// main()


//task 9

// var hours = parseInt(prompt("enter the hours worked "));

// function bonus(){
//     if(hours>40){
//         var bh = hours - 40
//         var bonus = bh * 12
//         alert(bonus)
//     }

//     else{
//         alert("You have no bonus hours for pay")
//     }
// }

// bonus()

//task 10




// chapter 43-48

// task 1
// function del(r){
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("records").deleteRow(i);

// }
// task 2
//  function change(image){
//      image.src = "data:image/png;base64,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"
//  }
//  function first(img){
//      img.src="https://www.facebook.com/images/fb_icon_325x325.png"
//  }
//

// task 5
// var button = document.getElementById("count"),
//   count = 0;
// function clicks() {
//   count += 1;
//   button.innerHTinnerML = "Click me: " + count;
// }
    

// function cclicks_d()() {
// count -= 1;
// button.innerHTML = "Click me: " + count;
// }
  
// function more(){
//   var explanation ="price: 16000 , model : 2016, codition: new and so on"
//   var expand = document.getElementById("expand");
//   expand.innerHTML = explanation

// }

// function submition(){
//   function firstname(){
//   var form = document.forms["stu_details"]["first"].value;
//   var write = document.createElement('p');
//   write.innerHTML = "firstname: " + form
//   document.body.appendChild(write)
//   }
//   firstname()
  
//   function lastname(){
//     var form = document.forms["stu_details"]["last"].value;
//     var write = document.createElement('p');
//     write.innerHTML = "last name : " + form
//     document.body.appendChild(write)
//     }
//     lastname()
//     function percentage(){
//       var form = document.forms["stu_details"]["per"].value;
//       var write = document.createElement('p');
//       write.innerHTML = "percentage :" + form
//       document.body.appendChild(write)
//       }
//       percentage()
  
// }

// function submition(){
//   // var ele = document.getElementById("content")
//   // var table = document.createElement("table");
//   var row = document.createElement("tr");
//   var data1 = document.createElement("td");
//   var data2= document.createElement("td");
//   var data3 = document.createElement("td");
//   var data4 = document.createElement("td");
//   // data.setAttribute("id", "row");
//   // row.appendChild(data);
//   // table.appendChild(row);
//   // ele.appendChild(table);
//   var tb = document.getElementById("table")
//   var check = tb.appendChild(row)

// // var tr1 = document
// // var tr2 = 
// check.appendChild(data1);
// check.appendChild(data2);
// check.appendChild(data3);
// check.appendChild(data4)


// // data.innerHTML = "asdasdasdad"
  
// // function firstname(){
  
//   var txt = document.forms["stu_details"]["first"].value;
//   data1.innerHTML= txt
//   var txts = document.forms["stu_details"]["last"].value;
//   data2.innerHTML = txts
//   var text = document.forms["stu_details"]["per"].value;
//   data3.innerHTML = text
  
//   }
// }
  // function lastname(){
    // var txts = document.forms["stu_details"]["last"].value;
    // var cases =  document.getElementById("row")
    // data2.innerHTML = txts
    
    
  // }
// firstname()
  // lastname()

// chapter DOm
// task 1 i
// var get = document.getElementById("main-content");
//task 2

// function show(){
//   for(var i=0;i<document.getElementById("main-content").children.length; i++){

// console.log(document.getElementById("main-content").children[i])
//   }
// }
// document.write(document.getElementById("main-content").children.)

// show()

//task 3
// var list = document.getElementsByClassName("content")[0];
// var content = list.getElementsByClassName("render")
// for(var i = 0; i< content.length ; i++){
//   document.write(content[i].innerHTML)
  

// }

//task4

// document.getElementById("first-name").value = "teacher"
// document.getElementById("last-name").value = "best"
// document.getElementById("email").value = "teachbest@exaple.com"

//task 2 i

// var types = document.getElementById("form-content").nodeType
// console.log(types)

// var types = document.getElementById("lastName");
// document.write("node type of element lastname child : " +  types.childNodes[0].nodeType + "<br>")
// document.write("node type of element lastname: " + types.nodeType)

// var text = document.createTextNode("changes");
// types.replaceChild(text,types.childNodes[0])

// var first  = document.getElementById("main-content").firstChild.nodeName;
// document.write("first child of main-content is: " + first  + "<br>")

// var last  = document.getElementById("main-content").lastChild.nodeName;
// document.write("last child of main-content is: " + last)

// console.log(types.nextSibling)
// console.log(types.previousSibling)
// console.log(types.nextElementSibling)
// console.log(types.previousElementSibling)

// var email =  document.getElementById("email");
// console.log(email.parentNode.nodeType)
// console.log(email.parentNode)








//
//var numberOfCats = prompt("How many cats?");
//var tooManyCats = numberOfCats + 1;
//document.write(tooManyCats);
// var character = prompt("charater or string");
// char = character.charCodeAt(0);
// if(char >= 48 && char <= 57 ){
//     alert("its a number")
// }
// if(char >= 58 && char <= 90 ){
//     alert("its a upper case")
// }
// else{
//     alert("its a lower case")
// }

//task 2

// var first;
// var second;
// first = prompt("enter first number");
// second= prompt("enter second number");
// var one=parseInt(first)
// var two = parseInt(second)
// if(one>two){
//     alert(one)
// }
// else if(two>one){
//     alert(two)
// }
// else {
//     alert("both are same")
// }

//task3

// var number;
// number = prompt("enter your number");
// // if(Math.sign(number)===-1){
// //     alert("negative");
// //   }
// if(Math.sign(number)===-1){
//     alert("negative")
// }
// else if (Math.sign(number) === 1){
//     alert('positive');
//   }
// else{
//     alert("zero");
//   }
//task 5
// var user = "123789"

// var password = prompt("enter your password");
// if(user==!password){
//     alert("Please enter your password")
// }
// else{
//     alert("Correct! The password you entered matches the original password")
// }
//task 6
// var greeting;
// var hour = 19;
// if (hour < 18) {
// greeting = "Good day";
// }
// else {
// greeting = "Good evening";
// }
// alert(greeting)


//task7

// var time = prompt("Enter the time please time should be in 24 hours clock format like: 1900 = 7pm");
// if(time >= 0000 && time<= 1200 ){
//     alert("Good Morning")
// }
// else if(time >= 1200 && time<= 1700 ){
//     alert("Good Afternoon")
// }
// else if(time >= 1700 && time<= 2100 ){
//     alert("Good Evening")
// }
// else if(time >= 2100 && time<= 2359 ){
//     alert("Good Night")
// }


//task2

// var ray;
// ray=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write(ray[0])
// document.write("<br>")
// document.write(ray[1])
// document.write("<br>")
// document.write(ray[2])
// document.write("<br>")

//task 3 
// for (var i = 0; i <= 10; i++) {
//     document.write(i);
//     document.write("<br>")
// }

//task 4

// var table = prompt("enter the number  of which table has been created");
// var times = prompt("enter the length multplication table");

// var number = parseInt(table);
// var time = parseInt(times);

// for (var i = 1; i <= time; i++){
//      document.write(number*i);
//      document.write("<br>");
    
    

// }

// Chapter 21-25 
// task 1
// var first_name = prompt("Enter your first name");
// var last_name = prompt("Enter your last name");
// var full_name = first_name + " " + last_name;
// document.write("welcome Mr."+ " " + full_name)

//task 2

// var mobile = prompt("Enter your favourite mobile phone")
// document.write("My Favourite mobile phone is:" + " " + mobile + "<br>");
// var len = mobile.length
// document.write("Length of the string:" + " " + len)

//task3 
 
// var str = "Pakistani";
// var ind = str.indexOf("n");
// document.write("Strng: Pakistani"+ "<br>");
// document.write("Index of 'n'" + " " + ind);

//task 4

// var stri = "Hello World"
// var inde = stri.lastIndexOf("l");
// document.write("String: Hello World" + "<br>" + "Last indexof 'l'" + " " + inde)

//task 5

// var str = "Pakistani";
//  var ind = str.charAt(3);
// document.write("Strng: Pakistani"+ "<br>");
// document.write("Character at position 3 is " + " " + ind);

//task 6

// var first_name = prompt("Enter your first name");
// var last_name = prompt("Enter your last name");
// var full_name= first_name.concat(last_name);
// document.write("welcome Mr."+ " " + full_name)

//task 7

// city= "Hyderabad"




//task 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var ne = message.replace(/and/g,"&");
// document.write(ne);

//task 9
// var pro = prompt("enter the number");
// document.write("Value:" + " " + pro + "<br>" + "type:" + " " + typeof(pro)+ "<br>");
// num= parseInt(pro);
// document.write("Value:" + " " + num + "<br>" + "type:" + " " + typeof(num));

//task  10

// var input = prompt("enter yhe input");
// upper = input.toUpperCase();
// document.write(upper);

//task 11

//task 12

// var num = 35.36 ;
// var stri = num.toString(8);
// alert(stri)

// task 13

// var username = prompt("Enter your username");
// var comma = ","
// var excl = "!"

// var asc1 = comma.charCodeAt();
// var asc2 = excl.charCodeAt();
// var asc3;
// var asc4;
// for(var i = 0; i<username.length;i++){
//     var user = username.charCodeAt(i);
//     if(user.charAt(i) === "33" || user.charAt(0) === "44" || user.charAt(i) === asc3 ||user.charAt(i) === 46 ){
//         alert("Enter a valid username");
//     } 
// }

// for(var i = 0 ; i < username.length; i++){
//     if(username.charAt(i) === asc1 || username.charAt(i) === asc2 || username.charAt(i) === asc3 ||username.charAt(i) === ){
//         alert("Enter a valid username");

//     }
// }

// tas 14

// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = prompt("Enter the input to search");
// var search = input.toLowerCase();
// for(var i =0;i< A.length; i++){
//     if (search === A[i]){
//         alert(A[i] + "is available at index "+ i + " in our baery")
    
//     }
//     else{
//         alert("we are sorry pastry is not available in our baery")
//     }
// }

// chapter 26  to 30

//task 1

// var number = prompt("enter any positive number");
// if(number > 0){
//     document.write("number: " + number + "<br>" + "roundoff value " + Math.round(number) +  "<br>" +  "floor value " + Math.floor(number) + "<br>" + "ceil value" + Math.ceil(number))
// }

//task2

// var number = prompt("enter any negative number");
// if(number < 0){
//     document.write("number: " + number + "<br>" + "roundoff value " + Math.round(number) +  "<br>" +  "floor value " + Math.floor(number) + "<br>" + "ceil value" + Math.ceil(number))
// }

//task 3

// var absolute = prompt("enter the absolute value");
// document.write(" the absolute value of " + absolute + " is " + Math.abs(absolute));

//task4

// var Dice = Math.floor(6*Math.random())+1;
// alert("random dic no:  " + Dice)

//task 5

// var coin = Math.floor(2*Math.random())+1;
// if(coin===2){
//     document.write(coin + "<br>")
//     document.write("random coin value : Heads")
// }
// else{
//     document.write(coin + "<br>")
//     document.write("random coin value: Tails")
// }

//task 6

// var ran_number = Math.floor(100*Math.random())+1
// document.write("random number between 1 to 100: " + ran_number)

//task7


//task 8

// var suggest = Math.floor(10*Math.random())+1

// var num = parseInt(prompt("Enter the number from 1 to 10"))

// if(num === suggest){
//     document.write("you suggest the correct number")
// }

// else{
//     document.write("Sorry try again")
// }


// chapter 31-34

//task 1

// var current = new Date;
// document.write(current);

//task 2
// var month = ["january", "febuary" , "march", "april", "may", "june"  ,"july" , "august" , "september" , "october" , "november" , "december"];
// var current = new Date;
// var ans = month[current.getMonth()]
// document.write(ans);

//task 3 
// var days = ["sunday", "monday", "tuesday", "Wednesday", "thursday", "friday", "saturday"]
// var current = new Date;
// var day = current.getDay();
// alert(days[day].slice(0,3))

//task 4

// var days = ["sunday", "monday", "tuesday", "Wednesday", "thursday", "friday", "saturday"]
// var current = new Date;
// var day = days[current.getDay()];
// if(day==="sunday" || day ==="saturday"){
//     alert("Funday!!")
// }
// else{
//     alert(day)
// }

//task 5

// var current = new Date;
// var date = current.getDate();


//task 6

//chapter 35-38 task 1

// function time(){
//  var current = new Date;
//  alert(current)
// }
// time()

//task 2


// function greet() {
//     var first = prompt("your first name");
//     var last = prompt("your last name");
//     document.write(first + " " + last)
// }
// greet()

//task 4
// function clac(num1,num2,operator) {
//     num1 = prompt("Enter the first number");
//     num2 = prompt("enter the second number")
//     operator = prompt("enter the perator")
//     var ans = parseInt(num1) + operator + parseInt(num2)
//     alert(ans)


// }
// clac(num1,num2,operator)

//task 5

// function square (arg){
//     var arg = prompt("Enter the number")
//    var ans =  Math.pow(arg,2)
//    document.write(ans)
// }
// square()

//task 6


// function factorialize() {
//     var num = parseInt(prompt("Enter the desired number"))
//     var result = num
//     if (num === 0 || num === 1) {
//       return 1; 
//     }
//     while (num > 1) { 
//       num--; 
//       result = result * num; 
//     }
//       alert(result); // 120
  
// }
//   factorialize();

//task 7

// function number(first,second) {
//     for(var i = first; i <= second; i++){
//         document.write(i)
//     }


// }
// number(5,9)

//task 9

// function area(){
//     var 
//     var   A = area * width
// }

//task 10

// function palindrome(str) {
//     var re = /[^A-Za-z0-9]/g;
//     str = str.toLowerCase().replace(re, '');
//     var len = str.length;
//     for (var i = 0; i < len/2; i++) {
//       if (str[i] !== str[len - 1 - i]) {
//           document.write(false);
//       }
//     }
//     return document.write(true);
//    }
//    palindrome("A man, a plan, a canal. Panama");


//task 11


// function titleCase(str) {
//   str = str.toLowerCase().split(' ');
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//   }
//   alert(str.join(' '));
// }
// titleCase("I'm a little tea pot");

// task 12

// function longest(str){
//   str = str.split(' ');
//   var longestWord = 0;
//   for (var i = 0; i< str.length; i++) {
//     if(str[i].length > longestWord){
//       longestWord = str[i].length
//       var word = str[i]
//     }

//   }
//   alert(word)
// }
// longest("I'm a littletea pot")

//task 13

// function alcCircumference(){
//   var radius = parseInt(prompt("enter the radius"));
//   var draft = radius *3.141592653589793 *2
//   document.write(draft)
  
  
// }

// alcCircumference()

// function calcArea(){
//   var radius = parseInt(prompt("enter the radius"));
//    var draft = Math.pow(radius, 2);
//    var draft2 = draft * 3.141592653589793;
//    document.write(draft2)

// }

// calcArea()


