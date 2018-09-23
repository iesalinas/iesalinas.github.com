//alert("Bienvenido al Ranking de Magic Commander");
//console.log("Bienvenido a Magic Commander")
//DOM (Document Object Model)

//let element = document.querySelector(".table"); como seleccionar un objeto
//console.log(element)

/*let elementList = document.querySelectorAll(".fa-star");
elementList.forEach(function(element){
console.log(element)	
}) para seleccionar una lista*/



let elementList = document.querySelectorAll(".fa-star");

elementList.forEach(function(element){
	element.addEventListener('click',function(){
		alert("Tocaste una Estrellita");
	})
})

/*let elementList = document.querySelectorAll(".fa-star");

elementList.forEach(function(element){
	element.addEventListener('click',function(){
		alert("Tocaste una Estrellita");
		element.classList.remove("far");
		element.classList.add("fas");
	})
})*/

//eventos

/*let closes = document.querySelectorAll(".close");
let content = document.querySelector("content")

closes.forEach(function(close){
	close.addEventListener("click", function(ev){
		ev.preventDefault();
		content.classList.remove("animated");
		content.classList.remove("jackInTheBox");
		content.classList.add("animated");
		content.classList.add("hinge");
		setTimeout(() => {
			location.href="./";
		}, 1000);
	});
})*/