let range = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let jatekos = 0;
let gep = 0;
let draw = 0;
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

    let human = Number(clicked_id);

    const index1 = range.indexOf(human);
    if (index1 > -1) {
        range.splice(index1, 1);
    
        addSymbol(human);   
    
        let pc = range[Math.floor(Math.random() * range.length)];
    
        const index = range.indexOf(pc);
        if (index > -1) {
            range.splice(index, 1);
        }

        function addSymbol(player) {
            
            if (player == human) {
                document.getElementById(player).innerHTML = "X";
                document.getElementById(player).style.color = "#FFDB58";
                steps[player] = "X";
            }
            else if(player == pc) {
                document.getElementById(player).innerHTML = "O";
                document.getElementById(player).style.color = "#FFA500";
                steps[player] = "O";
            }
        }
        setTimeout(() => {
        if(range.length !== 0 && check_winner() !== "jatekos" && check_winner() !== "gep"){
            addSymbol(pc)
        }
    }, "200")
        tie();
 
         if(range.length === 0 && check_winner() !== "jatekos" && check_winner() !== "gep"){
            alert("döntetlen")
            draw++;
            document.getElementById("draw").innerHTML = draw;
            reset();
        }
    }
}
function tie(){
    let gyoztes = "";
    setTimeout(() => {
        if(steps[1] == "X" && steps[2] == "X"&& steps[3] == "X"||
        steps[4] == "X" && steps[5] == "X" && steps[6] == "X"||
        steps[7] == "X" && steps[8] == "X" && steps[9] == "X"||
        steps[1] == "X" && steps[4] == "X" && steps[7] == "X"||
        steps[2] == "X" && steps[5] == "X" && steps[8] == "X"||
        steps[3] == "X" && steps[6] == "X" && steps[9] == "X"||
        steps[1] == "X" && steps[5] == "X" && steps[9] == "X"||
        steps[3] == "X" && steps[5] == "X" && steps[7] == "X")
        {
            jatekos++;
            document.getElementById("player").innerHTML = jatekos;
            reset();
            alert("A játékos nyert")
            gyoztes += "jatekos1";
        }
        else if(steps[1] == "O" && steps[2] == "O" && steps[3] == "O"||
        steps[4] == "O" && steps[5] == "O" && steps[6] == "O"||
        steps[7] == "O" && steps[8] == "O" && steps[9] == "O"||
        steps[1] == "O" && steps[4] == "O" && steps[7] == "O"||
        steps[2] == "O" && steps[5] == "O" && steps[8] == "O"||
        steps[3] == "O" && steps[6] == "O" && steps[9] == "O"||
        steps[1] == "O" && steps[5] == "O" && steps[9] == "O"||
        steps[3] == "O" && steps[5] == "O" && steps[7] == "O"){
            gep++;
            document.getElementById("pc").innerHTML = gep;
            alert("A gép nyert");
            reset();
            gyoztes+= "gep1";
        }
    }, "250")
    return gyoztes
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
                winner+= "jatekos";
            }
            else if(steps[win[i][0]] == "O"){
                winner += "gep";
            }
        }
    }
    return winner
}

function allAreEqual(array) {
  const result = array.every(element => {
    if (steps[element] === steps[array[0]] && steps[element] != "") {
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
function newgame(){
    range = []
    for (let i = 1; i < 10; i++) {
        document.getElementById(i).innerHTML = "";
        range.push(i);
    }
    steps = { 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: "" }
    jatekos = 0;
    gep = 0;
    draw = 0;
    document.getElementById("pc").innerHTML = "";
    document.getElementById("player").innerHTML = "";
    document.getElementById("draw").innerHTML = "";
}