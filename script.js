let age = Number(prompt("Enter your age"));
let fee = Number(prompt("Enter your due fee"));
function ageAndFeeConfirmation(){
    if(age >= 18 && fee === 0){
        console.log(`Age is: ${age} and Fee is: ${fee}: Excellent You are allowed to sit in exam`);
    }else{
        console.log(`Age is: ${age} and Fee is: ${fee}: You are not allowed to sit in exam, Please clear your fee first/ Your age should be greater then 18`);
    }
}
ageAndFeeConfirmation();

let email = "aneesurrehmandm@gmail.com";
let phoneNumber = "03138647544";

let inputEmail = prompt("Enter your Email");
let inputNumber = prompt("Enter your Phone Number");

if(inputEmail === email || inputNumber === phoneNumber){
    console.log(`Your email: ${inputEmail} or Your Phone Number: ${inputNumber} is correct so you are successfully login to our website`);
}else{
    console.log(`Your email: ${inputEmail} and Your Phone Number: ${inputNumber} both are incorrect so you cannot login to our website Please verify your credentials`);
};

let isBlocked = false;
let canAccess = !isBlocked;
console.log("isBlocked:", isBlocked);
console.log("!isBlocked:", canAccess);
if (!isBlocked) {
    console.log("Access allowed");
} else {
    console.log("Access denied");
};

let isLoggedIn = true;
let isPremium = false;
let hasCoupon = true;
if (isLoggedIn && (isPremium || hasCoupon)) {
    console.log("Special discount applied");
} else {
    console.log("No discount available");
};