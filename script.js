const container = document.querySelector("#container")

function createGrid(){

    for(let i=0;i<16;i++){

        const row = document.createElement("div");
        row.classList.add("row");


        row.textContent="Rows";
        container.appendChild(row);

        for(let j=0;j<16;j++){
            const box = document.querySelector("div");
            box.classList.add("box");


            box.appendChild(row);

        }
    }

}

createGrid();