

//matrix col and row
const COL = 30;  
const ROW = 15;

//right side word list column length
var TableSize = 1;

function getNewLetter() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    result += characters.charAt(Math.floor(Math.random() * 10));
    return result;
}

function generateMatrix() {
    var cub = new Array(ROW);
    for (var i = 0; i < cub.length; i++) {
        cub[i] = new Array(COL);
    }
    i = 0;
    while (i < ROW) {
        j = 0;
        while (j < COL) {
            var temp = getNewLetter();
            cub[i][j] = temp;
            j++;
        }
        i += 1;
    }
    return cub;
}

function addWordsToMatrix(cub, words) {


    var ar = [];
    for (c in words) {
        i = 0;

        var tempr = Math.floor((Math.random() * 100) % ROW);
        var tempc = Math.floor((Math.random() * 100) % COL);
        var move = Math.floor((Math.random() * 10) % 8);


        if (move == 2 || move == 6 || move == 7) {
            if (tempr < words[c].length) {
                tempr += (words[c].length - tempr);

            }
        } else if (move == 3 || move == 4 || move == 5) {
            if (tempr >= ROW - words[c].length) {
                tempr = tempr - (tempr - (ROW - words[c].length));

            }
        }

        if (move == 1 || move == 5 || move == 7) {
            if (tempc >= COL - words[c].length) {
                tempc -= tempc - (COL - words[c].length);
            }
        } else if (move == 0 || move == 4 || move == 6) {
            if (tempc < words[c].length) {
                tempc += words[c].length - tempc;
            }
        }


        while (i < words[c].length) {
            cub[tempr][tempc] = words[c][i];
            i++;
            switch (move) {
                case 0:
                    tempc--;
                    break;
                case 1:
                    tempc++;
                    break;
                case 2:
                    tempr--;
                    break;
                case 3:
                    tempr++;
                    break;
                case 4:
                    tempr++;
                    tempc--;
                    break;
                case 5:
                    tempc++;
                    tempr++;
                    break;
                case 6:
                    tempr--;
                    tempc--;
                    break;
                case 7:
                    tempr--;
                    tempc++;
                    break;
            }
        }
    }
    return cub;

}

function addDataIntoTable() {
    i = 0
    var table = document.createElement('table');
    table.setAttribute('id','letterCrl');
    var col;
    var row;
    var count =1;
    while (i < ROW) {
        j = 0;
        row = document.createElement('tr');
        while (j < COL) {
            col = document.createElement('td');
            let span = document.createElement('span');
            col.setAttribute('id',count);
            col.setAttribute('value',cube[i][j]);
            span.setAttribute('value',cube[i][j]);
            span.setAttribute('id',count++);
            let text = document.createTextNode(cube[i][j]);
            span.appendChild(text);
            col.appendChild(span);
            j++;
            row.appendChild(col);
        }

        table.appendChild(row);
        i += 1;
    }
    var wordgraph = document.getElementById("wordgraph");
    wordgraph.appendChild(table);
}

function addWordsIntoList() {

    var table2 = document.createElement('table');
    var row = document.createElement('tr');
    // list.nodeType('none');
    var count = 0;
    for (c in words) {
        count++;
        var col = document.createElement('td');
        var tn = document.createTextNode(words[c]);
        col.setAttribute('id',words[c]);
        col.appendChild(tn);
        row.appendChild(col);
        if (count == TableSize) {
            table2.appendChild(row);
            var row = document.createElement('tr');
            count = 0;
        }
    }
    table2.appendChild(row);

    var searchWordList = document.getElementById("searchWordList");
    searchWordList.appendChild(table2);
}


var words = ['CAT', 'TREE', 'WORLD', 'LION', ];

var cube = generateMatrix();

cube = addWordsToMatrix(cube, words);

addDataIntoTable();
addWordsIntoList();