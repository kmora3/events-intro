var myButton = document.querySelector("#myButton");
var heading = document.querySelector("h1");
var toggle = null;

function yell(){
  toggle = !toggle
  heading.innerText = toggle
}
myButton.addEventListener('click', yell)

// myButton.addEventListener('click',function(){
//   toggle = !toggle
//   heading.innterText = toggle
// })

function revertYell(){
  console.log("Messages go here.")
  heading.innerText = "Messages go here."
}

heading.addEventListener('mouseover', revertYell)

function(){
  console.log("boom!")
}
