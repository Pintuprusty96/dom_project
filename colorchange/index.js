let but =document.querySelectorAll(".button")
console.log(but)
const body = document.querySelector("body");

but.forEach(function (el) {
    el.addEventListener("click",function(event){
        event.target;
        if(event.target.id=="grey"){
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id=="white"){
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id=="blue"){
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id=="yellow"){
            body.style.backgroundColor=event.target.id
        }
    })
})