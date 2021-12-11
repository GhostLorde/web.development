const area = document.getElementById('area');
let move = 0;


area.addEventListener('click', e => {
    if (e.target.className = 'box'){
        move%2===0 ? e.target.innerHTML = "x" : e.target.innerHTML = "o";
        move++;
        player();
    
    }
})



function player() {
    
    const field = [[0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8],[2, 4, 6]
    ];
    const cells=document.getElementsByClassName('box');
    for (i = 0; i < field.length; i++) {
        if (cells[field[i][0]].innerHTML == "x" &&cells[field[i][1]].innerHTML == "x" && cells[field[i][2]].innerHTML == "x") {
            
            end="КРЕСТИКИ";
            
            Winner(end);
        } else if (cells[field[i][0]].innerHTML == "o" && cells[field[i][1]].innerHTML == "o" &&cells[field[i][2]].innerHTML == "o") {
            
            end="НОЛИКИ";
            
            Winner(end);
        }
    }
}

var winner = '';
function Winner(winner) {
    console.log(winner);
    winnerres.innerHTML = winner;
}