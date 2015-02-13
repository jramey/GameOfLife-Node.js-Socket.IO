module.exports = {
    create: function(){
        var seed = [];

        for (var i = 0; i < 50; i++) {
            seed[i] = [];
            for (var j = 0; j < 100; j++) {
                seed[i][j] = Math.round((Math.random() * 1));
            }
        }

        return new GameOfLife(seed);
    }
}

function GameOfLife(seed) {
    var grid = seed;

    this.tick = function tick() {
        var tempGrid = [];
        for (var i = 0; i < grid.length; i++) {
            tempGrid.push(grid[i].slice(0));
            for (var j = 0; j < grid[i].length; j++) {
                var livingNeighbors = getLiveNeighbors(i, j);
                var newValue = tickCell(grid[i][j], livingNeighbors);
                tempGrid[i][j] = newValue;
            }
        }

        grid = tempGrid;
        return grid;
    }

    var tickCell = function tickCell(value, livingNeighbors) {
        if (value == 1 && livingNeighbors < 2)
            return 0;
        else if (value == 1 && (livingNeighbors == 2 || livingNeighbors == 3))
            return 1;
        else if (value == 1 && livingNeighbors > 3)
            return 0;
        else if (value == 0 && livingNeighbors == 3)
            return 1;
        else
            return 0;
    }

    var getLiveNeighbors = function GetLiveNeightbors(i, j) {
        var liveNeighbors = 0;

        if (i != 0 && grid[i - 1][j] == 1)
            liveNeighbors++;

        if (i != 0 && j != 0 && grid[i - 1][j - 1] == 1)
            liveNeighbors++;

        if (i != 0 && j != grid[i].length - 1 && grid[i - 1][j + 1] == 1)
            liveNeighbors++;

        if (i != grid.length - 1 && grid[i + 1][j] == 1)
            liveNeighbors++;

        if (i != grid.length - 1 && j != 0 && grid[i + 1][j - 1] == 1)
            liveNeighbors++;

        if (i != grid.length - 1 && j != grid[i].length - 1 && grid[i + 1][j + 1] == 1)
            liveNeighbors++;

        if (j != 0 && grid[i][j - 1] == 1)
            liveNeighbors++;

        if (j != grid[i].length - 1 && grid[i][j + 1] == 1)
            liveNeighbors++;

        return liveNeighbors;
    }
}