//String concatination - 3 ways

let firstName = "Umadevi";
let lastName = "Hariram";
let fullName = firstName + " " + lastName; //1st way
console.log(fullName);

let name = [firstName, lastName];

console.log(name.join(' ')); // 2nd way

console.log(''.concat(firstName, " ", lastName)); // 3rd way


let userName = "Umadevi Hariram";
let greeting = "Hi there"

console.log(''.concat(userName, ', ', greeting, '!'))

// -------------------------------------------------------------------------------------------------------------

// ++/-- skill

let myPoints = 3;

function add3Points() {
    myPoints += 3;
}

function remove1Point() {
    myPoints--;
}
add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();


if (myPoints == 10)
    console.log(myPoints); //My points should be 10


// ----------------------------------------------------------------------------------------


//  Adding string and number

console.log(2 + 2); //4
console.log("7" + 4); //"74"
console.log(6 + 4 + "5" + 2); //"1052"
console.log("My points: " + 5 + 9); //"My points: 59"
console.log("11" + "17"); //"1117"

// -----------------------------------------------------------------------------------------------------------------------

//Rendering error message while clicking on purchase button


let errorRendering = () => {

    document.getElementById("error").textContent = "Something went wrong please try again"
}