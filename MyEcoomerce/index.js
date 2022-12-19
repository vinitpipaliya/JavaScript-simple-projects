console.log("Inside JavaScript file")

let Index=0;
carousel();
function carousel(){
    let i;
    let x=document.getElementsByClassName("slides");
    for(i=0;i<x.length;i++){
        x[i].style.display="none";
    }
    Index++;
    if(Index>x.length){
        Index=1
    }
    x[Index-1].style.display="block";
    setTimeout(carousel,2500);
}

function login(){
    let uname=document.getElementById("uname").value;
    let psw=document.getElementById("psw").value
    if(uname==""){
        alert("Please Enter User name.");
    }
    else if(psw==""){
        alert("Please Enter Passwors.");      
    }
    else if(psw.length<6){
        alert("Passwords mimimum length is 6.");
    }
    else{
        alert("Login Successful!!");
        window.location="index.html";
    }
}

