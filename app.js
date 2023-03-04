// JS If Statement 

// let a=12
// if(a==12){
//     document.write("hello")

// }else{
//     document.write("no")
// }



// JS If Else If Statement

// var grade="A"
// if (grade=="A+" ){
// document.write("good grade")
// }
// else if(grade=="A"){
//     document.write("average grade")
// }




// JS Conditional Ternary Operator

// var num1=21/3
// num1 ? document.write("good"):document.write("bad")  


// JS Switch Case

// var a=prompt("number from 1 to 10")




// switch(a){

//     case 1:
//         document.write("One, sometimes referred to as unity, is the first non-zero natural number. It is thus the integer after zero. Any number multiplied by one remains that number, as one is the identity for multiplication. As a result, 1 is its own factorial, its own square and square root, its own cube and cube root, and so on.")
//         break;


//         case 2:
//             document.write(" 2 (two) is a number, numeral and digit. It is the natural number following 1 and preceding 3. It is the smallest and only even prime number. Because it forms the basis of a duality, it has religious and spiritual significance in many cultures.")
//             break;


//             case '3':
//                 document.write("3 is a very good number")
//                 break;






// }




// JS Alert Box

// alert("hello world")

// JS Confirm Box

// confirm("are you sure you wanna leave")


// JS Prompt Box

// var x=prompt("hello")


// JS Functions

// let functionname=(a,b)=>a+b

// document.write(functionname(12,12))


// JS Functions with Parameters

// let pathman=(a,b)=>
// // a+b
// a/b



// document.write(pathman(12,12))

// JS Functions with Return Value

// function myfunction(a, b, c) {
//     var n=a+b+c
//   if (n === 3 ) {
//     return "wow";
//   } else {
//     return "bad";
//   }
// }

// document.write(myfunction(1, 1, 1));



// JS For Loop

// for(i=0;i<=10;i++)
// {

// document.write( i+"number")


// }


// for (i = 1; i <= 10; i++) {
//     document.write(i + " number<br>");
//   }
  





// JS Break & Continue Statement

// for(i=0;i<=10;i++){

//     if(i==3){
// document.write("continue"+i+"<br>")
// continue;
//     }
// document.write(i+"<br>")

// }





// JS Even & Odd with Loops



// for(i=2;i<=12;i++){

// if(i%2==0){
//     document.write(i+'even'+"<br>")
// }
// else{
// document.write(i+"odd"+"<br>")

    
// }
// }







// JS Nested Loop






// array method1

// var a =["array","karray","charray"]

// document.write(a[1])



// array method2

// var a=new Array(4) initialize like this


// a[0]="abc" add value like this


// document.write(a[0]) output abc






// destructuring array 


// let array=["taleman",25,"5'10",10,"programming"]

// let [namee,age,height,classs,profession]=array

// document.write(namee)
// document.write(age)
// document.write(height)
// document.write(classs)
// document.write(profession)




// oop
// var a=prompt("hello")
// class topi{

// hello(){
// var num1=a
// var sum=num1+112

// }




// }


// let abc=new topi()

// document.write(abc.hello)



// const arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [[10, 11, 12], 13, 14]
//   ];
  
//const subarray = arr[3]; //this gets the fourth line  [[10, 11, 12], 13, 14]


    // const nestedSubarray = arr[2][2]; this gets the second line [7, 8, 9],and then gets the second
    // index number which is 9
// const element = arr[3][0][1]; //this array gets the fourth line which is by index 3  [[10, 11, 12], 13, 14] as it has got two arrays inside it we have to give index number 
//like got to the third index and then in 3rd index get to 0 index line and then retrieve the first index



//   document.write(subarray)




var ary = [
    ["Harry",18,"Male","B.Com"],
    ["Sunny",19,"Male","BCA"],
    ["Sarah",18,"Male","BCA"],
    ["Tom",17,"Male","B.A."],
    ["Mac",17,"Male","B.A."]
  ];
  document.write("<table border='1px' cellspacing='0'>");
  for(var a = 0; a < 5; a++){
      document.write("<tr>");
    for(var b=0; b < 4; b++){
      document.write("<td>" + ary[a][b] + "</td>");
    }
    document.write("</tr>");
  }
    document.write("</table>")
delete ary[2][3]
ary[2][3]="female"

document.write(ary+" ")
    // document.write(ary[0][3]) //bracket notation example




// destructructuring array 
//     var ha={
//    person1:["hammas" , "16","bss","mercedes","programmer"],
// //    person:["masia" , "21","tss","gercedes","programmer"]
//     }


//     let {person1}=ha

//     document.write(person1[1])





// delete and add method 
// var ha=["hammas" , "16","bss","mercedes","programmer"]

// delete ha[1]
// ha[1]="copy"
// document.write(ha[1])