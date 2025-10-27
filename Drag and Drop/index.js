const lists = document.getElementsByClassName("list");
const right = document.getElementById("right");
const left = document.getElementById("left");

let selected = null; 

for (let list of lists) {
  list.addEventListener("dragstart", (e) => {
    selected = e.target; 
  });
}

right.addEventListener("dragover", (e) => {
  e.preventDefault(); 
});

right.addEventListener("drop", (e) => {
  right.appendChild(selected); 
  selected = null; 
});
left.addEventListener("dragover", (e) => {
  e.preventDefault(); 
});

left.addEventListener("drop", (e) => {
  left.appendChild(selected); 
  selected = null; 
});
