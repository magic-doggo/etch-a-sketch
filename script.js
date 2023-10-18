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