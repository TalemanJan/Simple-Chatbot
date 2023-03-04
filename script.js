// Get elements from HTML
const question = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');

// Add event listener to submit button
submitButton.addEventListener('click', function() {
	// Get user's answer
	const answer = answerInput.value;

	// Check if answer is empty
	if(answer === '') {
		alert('Please enter your name');
	} else {
		// Update question and add greeting
		question.innerHTML = `Hello, ${answer}! How are you?`;
		answerInput.value = '';
	}
});



// var ary = new Array(3);

//     for(var g = 0; g < 3; g++){
//       ary[g] = prompt("Enter the Value : ");
//     }

//     document.write("<ul>");
//     for(var a = 0; a < 3; a++){
//       document.write("<li>" + ary[a] + "</li>");
//     }
//     document.write("</ul>");




// var a = new Array(4)

// a[0] = "harry";
// a[1] = "sherry";
// a[2] = "larry";
// a[3] = "marry";
// // a=[4]="garry";

// document.write(a[0])


// var a = new Array(4);
// a[0] = "harry";
// a[1] = "sherry";
// a[2] = "larry";
// a[3] = "marry";

// document.write(a[0]);





// let a=[2,3,4,5,6,7,8]; you make an array  
// let [n1,n2, n3,n4]=a   you give the values names which are in the array 

// document.write(n1) and the you can call it by that name 
// document.write(a[0]) or like this 





// Multidimensional arrays 

// var ary = [
// 	["Harry",18,"Male","B.Com"],
// 	["Sunny",19,"Male","BCA"],
// 	["Sarah",18,"Male","BCA"],
// 	["Tom",17,"Male","B.A."],
// 	["Mac",17,"Male","B.A."]
//   ];
  
// 	document.write("<br>"+ary+"<br>")
