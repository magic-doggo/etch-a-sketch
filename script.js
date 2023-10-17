const container = document.querySelector(".container")

for ( i = 0; i < 256 ; i++){
  let oneGrid = document.createElement("div")
  container.appendChild(oneGrid)
  oneGrid.textContent = "TEST"
  oneGrid.classList.add("gridClass")
}
