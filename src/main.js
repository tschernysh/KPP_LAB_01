const gameOfLife = require('./gameOfLife');
const gridInit = require('./gridInit');

process.stdout.write('\033c');
const cells = [];

for (let i = 0; i < 250; i++){
    const cellParams = {row: (Math.floor(Math.random() * Math.floor(25))), column: (Math.floor(Math.random() * Math.floor(100)))}

    cells.push(cellParams)
}
console.log(cells);


const aliveCellChar = '#';
const emptyCellChar = '_';
const seed = gridInit.withSeed(emptyCellChar,
    aliveCellChar,
    25,
    100, cells);

const game = gameOfLife(aliveCellChar, emptyCellChar, 25, 100, seed);

setInterval(() => game.draw(), 900);

// { row: (Math.floor(Math.random() * Math.floor(25))), column: (Math.floor(Math.random() * Math.floor(100))) },