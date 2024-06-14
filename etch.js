const COLUMNS =16;
const ROWS = 16;
/**
 * 1. 16x16 Grid with styling
 * 2. Hover effect to change color when mouse hovers over grid
 * 3. Prompt for a new etch pad 
 * 4. 
 */
function create_divs(){
    const div = document.createElement("div");
    div.classList.add("grid");
    div.appendChild(".container");

    for(let i =0;i<COLUMNS;i++){
        const div = document.createElement("div");
        div.classList.add("grid");
        div.appendChild(".container");
        
        console.log(i+ "row");

        for(let j=0;j<ROWS;j++){
            

        }
    }
}