// var database = [
// 	{
// 		userName: "Brooks",
// 		password: "12bucklemyshoe"
// 	},
// 	{
// 		userName: "Sara",
// 		password: "666"
// 	},
// 	{
// 		userName: "Ginny",
// 		password: "Harlan12"
// 	},
// 	{
// 		userName: "Anna",
// 		password: "HackI$l1fe"
// 	}
// 	];
// var newsfeed = [
// 	{
// 		userName: "Sara",
// 		timeline: "Fuck it."
// 	},
// 	{
// 		userName: "Ginny",
// 		timeline: "Yolo"
// 	},
// 	{
// 		userName: "Anna",
// 		timeline: "What up!"
// 	}
// ];


// 	var userNamePrompt = prompt("Username:");
//     var passwordPrompt = prompt("Password:");


// function signIn(userName, password){
// 	for (var i = 0; i < database.length; i++) {
// 	if (userNamePrompt === database[i].userName && 
// 		passwordPrompt === database[i].password) {
// 	return newsfeed;
// }else continue
// }
// 	return ("Login failed."); 
	
// };

// signIn(userNamePrompt, passwordPrompt); 



// Dog Facebook

// var dogs = [
// {
// 	breed: "Doberman",
// 	name: "Frank",
// 	weight: 180,
// 	hobbies: ["running", "jumping", "frisbee"]
// },
// {
// 	breed: "Aussie",
// 	name: "Kasper",
// 	weight: 80,
// 	hobbies: ["herding", "flyball", "long jump"]
// }
// ];
// var login = {
// 	dogname: prompt("what is your dog's name?"),
// 	weight: prompt("what is your dog's weight")
// };

// function loginAuth(name, weight) {
//   for (var i = 0; i < dogs.length; i++) {
//     if (login.dogname === dogs[i].name && login.weight == dogs[i].weight) {
//       return("you're in")
//     } else continue
//   }
//       return("wrong")
// };

// console.log(loginAuth(login.dogname, login.weight))
// 

// SHOPPING LIST (REMOVE DOES NOT WORK)

let enterButton = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let button = document.querySelector("remove");
let li = document.querySelectorAll(".item");

function addToList (){
	let li2 = document.createElement("li");
	button = document.createElement("button");
	li2.appendChild(document.createTextNode(input.value + " "));
	li2.appendChild(button);
	// li2.innerHTML = input.value + " " + button;
	button.appendChild(document.createTextNode("remove"));
	// button3.innerHTML="remove";
	ul.appendChild(li2);
	input.value = "";
	li2.style.fontFamily="Arial";
}

function addOnClick(){
	if (input.value.length > 0) {
	addToList();
		}
}

function addOnEnter(enter){
	if (input.value.length > 0 && event.keyCode === 13) {
	addToList();	
	 	}
}

enterButton.addEventListener("click", addOnClick);
input.addEventListener("keypress", addOnEnter);

// REMOVE

function removeOnClick(){
	for(i=0; i < ul.length; i++){
		li2[i].parentNode.removeChild('li');
		li[i].parentNode.removeChild('.item');
	}
}

function strikeThrough(){
	li.style.textDecoration="line-through";
	li2.style.textDecoration="line-through";
}

li.addEventListener("click", strikeThrough);
button.addEventListener("click", removeOnClick);


// BACKGROUND MANIPULATOR

var css = document.querySelector("h2");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3= document.querySelector(".color3");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value  + ", " + color2.value  + ", "  + color3.value  + ")";
	css.textContent = `You picked: ${color1.value}, ${color2.value}, and ${color3.value}` ;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);




// EXTRA PRACTICE

// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make 
// a function that organizes these into individual array that is ordered. 
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// Question 2: Write a javascript function that takes an array of numbers and a target number. 
// The function should find two different numbers in the array that, when added together, give the target 
// number. For example: answer([1,2,3], 4)should return [1,3]

// Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so 
// that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.


const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const cleanRoom = (array) => {
  const sortedArray = array.sort(function(a, b){return a - b});
  console.log(sortedArray);
  for (i=0; i<sortedArray.length; i++){
    if (sortedArray[i] == sortedArray[i++]){
      const array1 = sortedArray.splice(i,)
      console.log(array1);
      console.log(sortedArray);
    }
  };
}
cleanRoom(array)










