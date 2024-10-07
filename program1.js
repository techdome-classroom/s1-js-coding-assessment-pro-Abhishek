const getTotalIsles = function (grid) {
  // write your code here

  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  function dfs(row, col) {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      grid[row][col] !== "L"
    ) {
      return;
    }

    grid[row][col] = "visited";

    dfs(row - 1, col); // Up
    dfs(row + 1, col); // Down
    dfs(row, col - 1); // Left
    dfs(row, col + 1); // Right
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "L") {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
};

module.exports = getTotalIsles;
