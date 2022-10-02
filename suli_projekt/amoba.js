let range = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let jatekos = 0;
let gep = 0;
let steps = {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: ""
}


function reply_click(clicked_id) {
    //console.log(range)
//Játékos választása
    let human = Number(clicked_id);
//Jétkos választásának kivétele a tömbből
    const index1 = range.indexOf(human);
    if (index1 > -1) {
        range.splice(index1, 1);
//Funkció meghivása X-el
    if(range.length !== 0 && check_winner() !== "jatekos" && check_winner() !== "gep"){
        addSymbol(human);
    }
//Gép választásának generálása
        let pc = range[Math.floor(Math.random() * range.length)];
//Gép választásának kivétele a tömbből
        const index = range.indexOf(pc);
        if (index > -1) {
            range.splice(index, 1);
        }

        function addSymbol(player) {
            
            if (player == human) {
                document.getElementById(player).innerHTML = "X";
                document.getElementById(player).style.color = "#FFDB58";
                steps[player] = "X";
                check_winner();
            }
            else if(player == pc) {
                document.getElementById(player).innerHTML = "O";
                document.getElementById(player).style.color = "#FFA500";
                steps[player] = "O";
                check_winner();
            }
        }
        
        if(range.length !== 0 && check_winner() !== "jatekos" && check_winner() !== "gep"){
            setTimeout(() => {
                addSymbol(pc)
            }, "250")
        }
    }
}

let win = [
    [1,2,3],[4,5,6],[7,8,9],
    [1,4,7],[2,5,8],[3,6,9],
    [1,5,9],[3,5,7]            
]

function check_winner(){
    let equal = false
    let winner = "";
    for (let i = 0; i < win.length; i++) {
        equal = allAreEqual(win[i])
       
        if(equal){
            if(steps[win[i][0]] == "X"){
    
                jatekos++;
                console.log(jatekos)
                document.getElementById("player").innerHTML = jatekos; 
                alert("játékos nyert")
                winner+= "jatekos";
            }
            else if(steps[win[i][0]] == "O"){
                
                gep++;
                document.getElementById("pc").innerHTML = gep;
                alert("gép nyert");
                winner += "gep";
            }
        }
    }
    return winner
}

function allAreEqual(array) {
  const result = array.every(element => {
    if (steps[element] === steps[array[0]] && steps[element] != "") {
        console.log("következő elem: "+ steps[element] + ", első elem: "+steps[array[0]])
      return true;
    }
  });
  return result;
}



function reset() {
    range = []
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).innerHTML = "";
        range.push(i);
    }
    steps = { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "" }
}