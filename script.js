// click handler

// track total clicks

// output click count to container in dom


// get element that we want

// addEventListener syntax



// increment counter variable "outside of click hadler"



let clickable = document.querySelector("img.clickable")

clickable.addEventListener("click", clickCounter)


let counter = 0
console.log("counter: ", counter)

function clickCounter(){

counter++
console.log("counter", counter)



let container = document.querySelector("p#clickCount")
container.innerHTML = counter


}