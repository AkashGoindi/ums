let data ={
	username : "akashgoindi",
	password : "honey"
};
//Call Login Page
let loginPage = ()=>{
	window.open("file:///D:/App/login.html","_self");
}
//Call Signup Page
let signupPage = ()=>{
	window.open("file:///D:/App/signup.html","_self");
}
// call login function on clicking submit button on login page
document.getElementById("loginForm").addEventListener("submit",login);
//login function
function login(a){
	let name = document.getElementById("loginUser").value;
	let passcode = document.getElementById("loginPass").value;
	if(name == "" || passcode == ""){
		alert("Please fill up the Form");
		document.getElementById("loginForm").reset();
		return false;
	}

	if(name === data.username & passcode === data.password){
		window.open("file:///D:/App/applicationPage.html","_self");

	}
	else{
		alert("Invalid Details");
		document.getElementById("loginForm").reset();
	}
	a.preventDefault();
}
function fun(){
	let message = document.getElementById("message");
		message.innerHTML = "Welcome Akash";
};
