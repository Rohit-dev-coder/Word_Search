selecttedtext = {};
let chkword = '';
let nbr = 0;
let oldnbr = 0;
let dir = 0;

function selectText(e) {
    let s = document.elementFromPoint(e.clientX, e.clientY);
    let chr = s.getAttribute('value');
    if (chr == null) {
        return;
    }
    oldnbr = nbr;
    nbr = parseInt(s.getAttribute('id'));

    if (oldnbr != 0 && nbr != oldnbr) {
        let c = 0;
        if (nbr == oldnbr + 1 && (dir == 1 || dir == 0)) {
            c += 1;
            dir = 1;
        } else if (nbr == oldnbr - 1 && (dir == 2 || dir == 0)) {
            c++;
            dir = 2;
        } else if (nbr == oldnbr + COL && (dir == 3 || dir == 0)) {
            c++;
            dir = 3;
        } else if (nbr == oldnbr + COL + 1 && (dir == 4 || dir == 0)) {
            c++;
            dir = 4;
        } else if (nbr == oldnbr + COL - 1 && (dir == 5 || dir == 0)) {
            c++;
            dir = 5;
        } else if (nbr == oldnbr - COL && (dir == 6 || dir == 0)) {
            c++;
            dir = 6;
        } else if (nbr == oldnbr - COL + 1 && (dir == 7 || dir == 0)) {
            c++;
            dir = 7;
        } else if (nbr == oldnbr - COL - 1 && (dir == 8 || dir == 0)) {
            c++;
            dir = 8;
        }
        if (c == 0) {
            resetMatrix();
            // console.log('reset', oldnbr + 1, nbr, c);
            chkword = '';
            oldnbr = 0;
            dir = 0;
            return;
        }
    }

    let temp = document.getElementById(nbr);
    if (temp.style.backgroundColor == 'rgb(20, 252, 252)') {
        temp.style.backgroundColor = '#F6F6F6';
        delete selecttedtext[nbr];
    } else {
        temp.style.backgroundColor = 'rgb(20, 252, 252)';
        chkword += chr;
        selecttedtext[nbr] = chr;
    }

    checkItem();
}

function setMatrix() {
    for (const x in selecttedtext) {
        let temp = document.getElementById(x);
        temp.style.backgroundColor = 'lightgreen';
        delete selecttedtext[x];
    }
}

function resetMatrix() {
    for (const x in selecttedtext) {
        let temp = document.getElementById(x);
        if (temp.style.backgroundColor != 'lightgreen') {
            temp.style.backgroundColor = '#F6F6F6';
        }
        delete selecttedtext[x];
    }
}

function checkItem() {
    var r = words.indexOf(chkword);
    if (r > -1) {
        let sword = document.getElementById(chkword);
        sword.style.textDecoration = 'line-through';
        setMatrix();
        chkword = '';
        oldnbr = 0;
        dir = 0;
    }
}

let matrix = document.getElementById('letterCrl');
matrix.onclick = selectText;

// findWord('WORLD');

// function findWord(fword) {
//     let dir=0;
//     let i=0;
//     while(i < ROW){
//         let j = 0;
//         while(j < COL){
//             j++;
//         }
//         i++;
//     }
// }