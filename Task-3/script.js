document.addEventListener("DOMContentLoaded", () => {
  const appSection = document.getElementById("app");
  const userSection = document.getElementById("user-section");
  const adminSection = document.getElementById("admin-section");
  const switchToAdminButton = document.getElementById("switch-to-admin-button");

  const numberOfBoardsInput = document.getElementById("number-of-boards");
  const generateBoardsButton = document.getElementById("generate-boards");
  const boardsContainer = document.getElementById("boards-container");
  const totalCostDiv = document.getElementById("total-cost");
  const simulateDrawButton = document.getElementById("simulate-draw");
  const drawResultsDiv = document.getElementById("draw-results");
  const numberBallsContainer = document.getElementById(
    "number-balls-container"
  );
  const lottoPlus1Checkbox = document.getElementById("lotto-plus-1");
  const lottoPlus2Checkbox = document.getElementById("lotto-plus-2");
  const winnersDiv = document.getElementById("winners"); // New element for displaying winners

  const selectedNumbers = new Set();
  const boards = [];

  switchToAdminButton.addEventListener("click", () => {
    if (
      adminSection.style.display === "none" ||
      adminSection.style.display === ""
    ) {
      adminSection.style.display = "block";
      switchToAdminButton.innerText = "Switch to User";
    } else {
      adminSection.style.display = "none";
      switchToAdminButton.innerText = "Switch to Admin";
    }
  });

  generateBoardsButton.addEventListener("click", () => {
    const numberOfBoards = parseInt(numberOfBoardsInput.value);
    generateBoards(numberOfBoards);
  });

  simulateDrawButton.addEventListener("click", simulateDraw);

  generateNumberBalls();

  // Show the app and user sections by default
  appSection.style.display = "block";
  userSection.style.display = "block";
  adminSection.style.display = "none"; // Hide admin section by default

  function generateNumberBalls() {
    for (let i = 1; i <= 52; i++) {
      const ball = document.createElement("div");
      ball.className = `number-ball ${getColorClass(i)}`;
      ball.innerText = i;
      ball.addEventListener("click", () => selectNumber(i, ball));
      numberBallsContainer.appendChild(ball);
    }
  }

  function getColorClass(number) {
    if (number >= 1 && number <= 13) return "red";
    if (number >= 14 && number <= 25) return "yellow";
    if (number >= 26 && number <= 37) return "green";
    return "blue";
  }

  function selectNumber(number, ball) {
    if (selectedNumbers.has(number)) {
      selectedNumbers.delete(number);
      ball.classList.remove("selected");
    } else {
      if (selectedNumbers.size < 6) {
        selectedNumbers.add(number);
        ball.classList.add("selected");
      } else {
        alert("You can only select 6 numbers");
      }
    }
  }

  function generateBoards(numberOfBoards) {
    if (selectedNumbers.size !== 6) {
      alert("Please select exactly 6 numbers");
      return;
    }

    boardsContainer.innerHTML = "";
    boards.length = 0; // Clear the boards array
    let totalCost = 0;

    for (let i = 0; i < numberOfBoards; i++) {
      const board = {
        id: `Ticket-${Math.random().toString(36).substr(2, 9)}`,
        date: new Date().toLocaleDateString(),
        numbers: Array.from(selectedNumbers),
      };
      boards.push(board);

      const boardDiv = document.createElement("div");
      boardDiv.className = "board";

      const header = document.createElement("div");
      header.className = "board-header";
      header.innerText = `Board ${i + 1} (ID: ${board.id}, Date: ${
        board.date
      })`;
      boardDiv.appendChild(header);

      const numbersDiv = document.createElement("div");
      numbersDiv.className = "board-numbers";
      board.numbers.forEach((number) => {
        const ball = document.createElement("div");
        ball.className = `number-ball ${getColorClass(number)}`;
        ball.innerText = number;
        numbersDiv.appendChild(ball);
      });
      boardDiv.appendChild(numbersDiv);

      boardsContainer.appendChild(boardDiv);
      totalCost += 5;

      if (lottoPlus1Checkbox.checked) totalCost += 2.5;
      if (lottoPlus2Checkbox.checked) totalCost += 2.5;
    }

    totalCostDiv.innerText = `Total Cost: R${totalCost}`;
  }

  function simulateDraw() {
    const winningNumbers = [];
    for (let i = 0; i < 6; i++) {
      winningNumbers.push(Math.floor(Math.random() * 52) + 1);
    }

    drawResultsDiv.innerHTML = `Winning Numbers: ${winningNumbers.join(", ")}`;

    const winners = boards.filter((board) => {
      return board.numbers.every((number) => winningNumbers.includes(number));
    });

    winnersDiv.innerHTML = `Number of winners: ${winners.length}`;
  }
});
