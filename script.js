const container = document.querySelector("#container")

function createGrid(row_size, box_size){

    for(let i=0;i<row_size;i++){

        const row = document.createElement("div");
        row.style.height = "30px";
        row.setAttribute('id','row${j}');
        row.classList.add("row");
        row.textContent="Rows";
        container.appendChild(row);

        for(let j=0;j<box_size;j++){
            const boxes = document.createElement("div"); 
            boxes.style.width= "30px";
            boxes.setAttribute('id','cells${j}');
            boxes.classList.add("boxes");
            boxes.textContent="boxes";
            row.appendChild(boxes);
            
        } 
    }
}
createGrid(16,16);

function change_grid_color(){
    
}

function clear_grid(){

}

function update_grid_size(){

}

function get_new_grid_size(){
    let new_size = prompt("How many Grids would you like? (100 or less)");
    if(new_size > 100){
        new_size = prompt("You chose a number too big, please try again");
    }
    return new_size;
}