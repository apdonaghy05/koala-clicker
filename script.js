// click handler

// track total clicks

// output click count to container in dom


// get element that we want

// addEventListener syntax



// increment counter variable "outside of click hadler"



let clickable = document.querySelector("img.clickable")
let tab = document.getElementsByTagName("title")[0]
let h2Text = document.getElementsByTagName("h2")[0]

clickable.addEventListener("click", clickCounter)


let counter = 0
console.log("counter: ", counter)

function clickCounter(){
	counter++
	console.log("counter", counter)

	tab.innerHTML = counter + " click(s)!"

	let container = document.querySelector("p#clickCount")

	if (counter == 10 || counter == 20) {
		container.innerHTML = ""
		h2Text.setAttribute("style", "color:red")
		h2Text.innerHTML = counter
		h2Text.style.transition = "all 2s"
		h2Text.style.transform = "rotate(360deg)"
	} else {
		h2Text.innerHTML = ""
		container.innerHTML = counter
	}
}