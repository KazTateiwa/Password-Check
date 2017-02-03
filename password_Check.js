// alert("password Check");
// var username=prompt("Enter your I.D");
// var password=prompt("Enter your password");

// function prompt('Description'){
  //takes input
  //returns input
//}

var userName = (document.getElementById('userName').value);
var userPassword = parseInt(document.getElementById('userPassword').value);

// function notSame(user,pass){
//  if (user!==pass);
//  }
//
// if (userName.length >=6 && userPassword.length >=6){
//   document.getElementById("results").innerHTML=("Length of username and password is okay");
//   return true;
// }
//    else{
//   document.getElementById("results").innerHTML=("Length of username or password is too short, check again");
//   return false;
//    }
// }
//
// function nochar(user){
//   if (userName.includes("!") || userName.includes("#") || userName.includes("$")){
//   document.getElementById("results").innerHTML=("you included !#$, check again");
//   return false;
//   }
//   else {
//     alert("Your username looks fine ")
//     return true;
//   }
// }
//
// function secretpassword (pass){
//   if (userPassword.includes("!") || userPassword.includes("#") || userPassword.includes("$")){
//     document.getElementById("results").innerHTML=("password looks correct");
//     return true;
//
//   }
//   else{
//     document.getElementById("results").innerHTML=("Password is incorrect, please try again");
//     return false;
//   }
// }
//
// function samePassword(pass){
//   if (password.includes("password")){
//     document.getElementById("results").innerHTML=("password cannot be password");
//     return false;
//   }
//   else{
//     return true;
//   }
// }
//
// // alert(username);
// // alert(password);
//
//
// if (notSame(username, password) === true && leastSix(username,password) === true && nochar(username) === true && secretpassword(password)===true && samePassword(password) ===true){
//   alert("everything is true")
// }
// else{
//   alert("Something went wrong")
// }

// var allFunction = [notSame(user,pass),leastSix(user,pass),nochar(user),secretpassword(pass),samePassword(pass)]
//   allFunction.forEach(function(elementValue,index, initial_array){},this_context);
//     if(elementValue == false)
//       console.log [0];
function newUserPassCheck(pass, user) {
  if (pass != user && pass.length < 6) {
    document.getElementById("results").innerHTML=("assword is too short");
  }
  else if (pass != user && user.length < 6) {
    document.getElementById("results").innerHTML=("Username is too short");
  }
  else if (user.includes("!") || user.includes("#") || user.includes("$")){
    document.getElementById("results").innerHTML=("you included !#$, check again");
  }
  else if (userPassword.includes("!") || userPassword.includes("#") || userPassword.includes("$")){
    document.getElementById("results").innerHTML=("password looks correct");
}
else{
  console.log("passed")
};
