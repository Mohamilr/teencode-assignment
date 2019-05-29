//declaration
const main = document.getElementById("main");
const userName = document.getElementById("usernamesignup");
const password = document.getElementById("passwordsignup");
const submit = document.getElementById("submit");

//name and password
const profile = {
    name : "admin",
    pass : "admin123"
};

//success function
const right = () => {
    let correct = document.createElement("div");
    correct.appendChild(document.createTextNode("the username and password is correct".toLocaleUpperCase()));
    main.appendChild(correct);
     // success style
    correct.style.backgroundColor = "green";
    correct.style.textAlign = "center";
    correct.style.color = "#ffffff";
    correct.style.padding = "30px";
}

const wrong = () => {
    let incorrect = document.createElement("div");
    incorrect.appendChild(document.createTextNode("the username and password is wrong".toLocaleUpperCase()));
    main.appendChild(incorrect);
    // wrong style
    incorrect.style.backgroundColor = "red",
    incorrect.style.textAlign = "center";
    incorrect.style.color = "#ffffff";
    incorrect.style.padding = "30px";
}

function signIn(event){
    event.preventDefault();
   
    if(userName.value === profile.name && password.value === profile.pass){
        right();
        console.log("ok");
       
    }
    else if(userName.value !== profile.name || password.value !== profile.pass){
        wrong();
        console.log("bad");
    }

    userName.value = "";
    password.value = "";
}

submit.addEventListener("click", signIn);