let but =document.querySelectorAll(".button")
console.log(but)
const body = document.querySelector("body");

but.forEach(function (el) {
    el.addEventListener("click",function(event){
        event.target;
        if(event.target.id=="grey"){
            body.style.backgroundColor=el.id="grey"
        }
        if(event.target.id=="white"){
            body.style.backgroundColor=el.id="white"
        }
        if(event.target.id=="blue"){
            body.style.backgroundColor=el.id="blue"
        }
        if(event.target.id=="yellow"){
            body.style.backgroundColor=el.id="yellow"
        }
    })
})