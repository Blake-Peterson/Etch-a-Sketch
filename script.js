const container = document.querySelector("#container")
let row_size =16;
let box_size =16;


function createGrid(row_size, box_size){

    for(let i=0;i<row_size;i++){

        const row = document.createElement("div");
        row.style.height = "30px";
        row.setAttribute('id','row${j}');
        row.classList.add("row");
        container.appendChild(row);

        for(let j=0;j<box_size;j++){
            const boxes = document.createElement("div"); 
            boxes.style.width= "30px";
            boxes.setAttribute('id','cells${j}');
            boxes.classList.add("boxes");
            row.appendChild(boxes);
            
        } 
    }
}
createGrid(row_size,box_size);

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

function button_call(){
    const button = document.createElement("button");
    button.classList.add("#btn")
    button.addEventListener("click",()=> {
        document.getElementById("#btn").onclick = get_new_grid_size();//function 
        //new grid here

    })
}