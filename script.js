const container = document.querySelector(".container")

for ( i = 0; i < 256 ; i++){
  let oneGrid = document.createElement("div")
  container.appendChild(oneGrid)
  oneGrid.textContent = "T"
  oneGrid.classList.add("gridClass")
}

const gridItem = document.querySelectorAll(".gridClass");
gridItem.forEach(ravioli => {
  ravioli.addEventListener("mouseover", onHover);
  function onHover(){
    ravioli.style.backgroundColor = "orange"
  }
});
  
//learn arrow functions!!!! and understand the function above! https://www.queryselectorall.com/addeventlistener
//const array1 = ['a', 'b', 'c'];   correct syntax for forEach
//array1.forEach((element) => console.log(element));
//learn callbacks!

const squareNumber = document.querySelector(".squareNumber")
squareNumber.addEventListener("click", setGridLengthSquares)
function setGridLengthSquares () {
  let inputLength = parseInt(prompt("Choose how many squares long is the side of the grid", "10"));
}