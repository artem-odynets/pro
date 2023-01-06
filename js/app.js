const button = document.querySelector(".btn")
console.log(button)



let follow = addEventListener("click", () => {
    
    button.style.background = "#5CD3A8"   
    button.innerHTML = "following";
   
});

let r = follow.addEventListener("click", ()=> {
    button.style.background = "#EBD8FF"   
    button.innerHTML = "follow";
})



        