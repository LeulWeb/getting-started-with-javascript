// selector
let button = document.getElementById("toggle")
let on = document.getElementById("on")
let off = document.getElementById("off")
let title = document.getElementById("title")
let container = document.getElementById("container")
let read = document.getElementById("read")
let description = document.getElementById("description")


read.addEventListener('mousemove',function(e) {
    description.textContent =
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat maiores eligendi sequi iste, porro repellendus officia, ex temporibus dolorum dolore rerum suscipit id! Suscipit quos vel dolore dolorem, officiis id eaque dicta voluptate nostrum officia iste alias eos asperiores omnis sapiente tenetur praesentium architecto iure modi, repellat, distinctio blanditiis consequuntur!";
})

title.textContent = "Hello"

container.innerHTML = "<h3>This is created by JS</h3>"

// variable to simple track or know the current state of the light
let lightIsOn = false
// event listeners/ handlers 
button.addEventListener('click', function(){
    // first check if the light is on  or off
    // if the light is on, then turn it off
    // if the light is off, then turn it on
    if(lightIsOn){
        off.style.display = "block"; // show the off light
        on.style.display = "none"; // hide the bright light
        lightIsOn = false; // now the light is off
    }else{
        off.style.display = "none"; // hide the off light
        on.style.display = "block"; // show the bright light
        lightIsOn = true; // now the light is on
    }
})

// Exercise 
// simple counter app with + , - and reset button