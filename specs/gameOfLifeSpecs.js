test("Empty", function () {
    var seed = [];
    var game = new GameOfLife(seed);
    var grid = game.tick();
    deepEqual(grid, seed);
});

test("1x1", function () {
    var seed = [[1]];
    var expected = [[0]];

    var game = new GameOfLife(seed);
    var grid = game.tick();

    deepEqual(grid, expected);
});

test("1x3", function () {
    var seed = [[1], [1], [1]];
    var expected = [[0], [1], [0]];

    var game = new GameOfLife(seed);
    var grid = game.tick();

    deepEqual(grid, expected);
});

test("1x3", function () {
    var seed = [[1, 1, 1]];
    var expected = [[0, 1, 0]];

    var game = new GameOfLife(seed);
    var grid = game.tick();

    deepEqual(grid, expected);
});

test("2x3", function () {
    var seed = [[1, 0, 1], [0, 1, 0]];
    var expected = [[0, 1, 0], [0, 1, 0]];

    var game = new GameOfLife(seed);
    var grid = game.tick();

    deepEqual(grid, expected);
});

test("2x3", function () {
    var seed = [[0, 1, 0], [1, 0, 1]];
    var expected = [[0, 1, 0], [0, 1, 0]];

    var game = new GameOfLife(seed);
    var grid = game.tick();

    deepEqual(grid, expected);
});

test("3x3", function () {
    var seed = [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0]
    ];

    var expected = [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0]
    ];

    var game = new GameOfLife(seed);
    var grid = game.tick();

    deepEqual(grid, expected);
});