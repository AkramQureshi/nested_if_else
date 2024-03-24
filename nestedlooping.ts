/*let  user="Ratan lal"

if(user== "Ratan lal")
{ 
    console.log("Hello", user)
} else if(user=="chaman lal"){
    console.log("Hello", user)
}else if(user=="gulzari lal"){
    console.log("Hello",user)
}
else{
    console.log("invalid username")
}
*/

// Nested if_else

let OT = 678;
let user = "Ratan lal";
let PTP = 678;

if (user == "Ratan lal") {
    console.log("Welcome, Ratan lal!");
    if (OT == PTP) {
        console.log("Valid OTP. Welcome!");
    } else {
        console.log("Invalid OTP");
    }
} else if (user == "anybody") {
    console.log("Invalid user");
} else {
    console.log("Please login again!!");
}

