//declarations
const main = document.getElementById("main");
const userName = document.getElementById("usernamesignup");
const password = document.getElementById("passwordsignup");
const submit = document.getElementById("submit");

//name and password
const profile = {
    name : "admin",
    pass : "admin123"
};

//message declaration
const message = document.createElement("div"); 
main.appendChild(message);
//message style
message.style.textAlign = "center";
message.style.color = "#ffffff";
message.style.padding = "30px";


function signIn(){
    // event.preventDefault();
    
    if(userName.value === profile.name && password.value === profile.pass){
        message.textContent = "the username and password is correct".toUpperCase();
        //correct style 
        message.style.backgroundColor = "green";    
    }
    else if(userName.value !== profile.name || password.value !== profile.pass){
        message.textContent = "the username and password is wrong".toUpperCase();
        //incorrect style
        message.style.backgroundColor = "red";
    }

    userName.value = "";
    password.value = "";
}
//event listener
submit.addEventListener("click", signIn);