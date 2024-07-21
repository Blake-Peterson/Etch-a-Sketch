const container = document.querySelector("#container")
let size=16

function createGrid(size){
    for(let i=0;i<size;i++){
        const row = document.createElement("div");
        row.style.height = (960/size)+"px";
        row.classList.add("row");
        container.appendChild(row);
        for(let j=0;j<size;j++){
            const box = document.createElement("div"); 
            box.style.width= (960/size)+"px";
            box.classList.add("box");
            box.addEventListener("mouseover",()=> change_box_color(box));
            row.appendChild(box);
        } 
    }
}

function change_box_color(box){
    box.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`;
}

function resetGrid(){
    let newSize= prompt("Enter a value between 1-100");
    const rows = document.querySelectorAll(".row");
    rows.forEach( row =>{
        const boxes = document.querySelectorAll(".boxes");
        boxes.forEach(box =>{
            row.removeChild(box);
        });
        container.removeChild(row);
    });
    createGrid(newSize);
}

function create_reset_button(){
    const resetButton = document.createElement("button");
    resetButton.textContent= "Change Grid Size";
    resetButton.addEventListener("click",resetGrid);
    container.appendChild(resetButton);
}

function create_etch_a_sketch(){
    create_reset_button();
    createGrid(size);
}

create_etch_a_sketch();