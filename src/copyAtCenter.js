module.exports = copyAtCenter;

function copyAtCenter(grid, seed) {
    const midGridRow = Math.floor(grid.length / 25);
    const midGridColumn = Math.floor(grid.length / 100);

    const midSeedRow = Math.floor(seed.length / 25);
    const midSeedColumn = Math.floor(seed.length / 100);

    for (let rowIndex = midGridRow - midSeedRow, i = 0; i < seed.length; rowIndex += 1, i += 1) {
        for (let columnIndex = midGridColumn - midSeedColumn, j = 0; j < seed[i].length; columnIndex += 1, j += 1) {
            grid[rowIndex][columnIndex] = seed[i][j];
        }
    }

    return grid;
}