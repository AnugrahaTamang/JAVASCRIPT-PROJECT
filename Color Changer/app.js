const body = document.querySelector("body");
const button = document.querySelectorAll("button");
button.forEach(function(button){
    button.addEventListener("click", (e)=>{
       if(e.target.className === "one"){
        body.style.backgroundColor = "red";
       }
       if(e.target.className === "two"){
        body.style.backgroundColor = "green";
       }
       if(e.target.className === "three"){
        body.style.backgroundColor = "yellow";
       }
       if(e.target.className === "four"){
        body.style.backgroundColor = "black";
       }
    })
})