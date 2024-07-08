document.addEventListener("DOMContentLoaded", () => {
  const adminView = document.getElementById("adminView");
  const userView = document.getElementById("userView");
  const toggleAdminButton = document.getElementById("toggleAdmin");
  const generateTicketsButton = document.getElementById("generateTickets");
  const calculateCostButton = document.getElementById("calculateCost");
  const simulateDrawButton = document.getElementById("simulateDraw");
  const boardsContainer = document.getElementById("boards");
  const totalCostElement = document.getElementById("totalCost");
  const drawResultsContainer = document.getElementById("drawResults");
  const numberSelectionContainer = document.getElementById("numberSelection");

  let isUserAdmin = false;
  let userBoards = [];
  let ticketCost = 0;
  let selectedNumbers = new Set();

  toggleAdminButton.addEventListener("click", () => {
    isUserAdmin = !isUserAdmin;
    adminView.classList.toggle("hidden", !isUserAdmin);
    userView.classList.toggle("hidden", isUserAdmin);
    toggleAdminButton.textContent = isUserAdmin
      ? "Switch to User"
      : "Switch to Admin";
  });

  generateTicketsButton.addEventListener("click", generateTickets);
  calculateCostButton.addEventListener("click", calculateCost);
  simulateDrawButton.addEventListener("click", simulateDraw);

  function createNumberSelection() {
    for (let i = 1; i <= 52; i++) {
      const numberElement = document.createElement("div");
      numberElement.textContent = i;
      numberElement.classList.add("number", getColorClass(i));
      numberElement.addEventListener("click", () =>
        toggleNumberSelection(i, numberElement)
      );
      numberSelectionContainer.appendChild(numberElement);
    }
  }

  function toggleNumberSelection(number, element) {
    if (selectedNumbers.has(number)) {
      selectedNumbers.delete(number);
      element.classList.remove("selected");
    } else {
      if (selectedNumbers.size < 6) {
        selectedNumbers.add(number);
        element.classList.add("selected");
      } else {
        alert("You can only select 6 numbers.");
      }
    }
  }

  function generateTickets() {
    if (selectedNumbers.size !== 6) {
      alert("Please select exactly 6 numbers.");
      return;
    }

    userBoards = [];
    boardsContainer.innerHTML = "";
    const numberOfBoards = prompt(
      "How many boards do you want to enter with? (Max 10 per ticket)"
    );
    for (let i = 0; i < numberOfBoards; i++) {
      const board = Array.from(selectedNumbers);
      userBoards.push(board);
      boardsContainer.appendChild(renderBoard(board, i + 1));
    }
  }

  function renderBoard(board, index) {
    const boardElement = document.createElement("div");
    boardElement.classList.add("board");
    boardElement.innerHTML = `<h3>Board ${index}</h3>`;
    board.forEach((number) => {
      const numberElement = document.createElement("span");
      numberElement.textContent = number;
      numberElement.classList.add(getColorClass(number));
      boardElement.appendChild(numberElement);
    });
    return boardElement;
  }

  function getColorClass(number) {
    if (number <= 13) return "red";
    if (number <= 25) return "yellow";
    if (number <= 37) return "green";
    return "blue";
  }

  function calculateCost() {
    const numberOfBoards = userBoards.length;
    ticketCost = numberOfBoards * 5; // R5 per board
    totalCostElement.textContent = `Total Cost: R${ticketCost.toFixed(2)}`;
  }

  function simulateDraw() {
    const winningNumbers = generateBoard();
    drawResultsContainer.innerHTML = `<h3>Winning Numbers: ${winningNumbers.join(
      ", "
    )}</h3>`;
    const winningTickets = userBoards.filter((board) =>
      checkWinningBoard(board, winningNumbers)
    );
    drawResultsContainer.innerHTML += `<p>Total Winning Tickets: ${winningTickets.length}</p>`;
  }

  function generateBoard() {
    const board = [];
    for (let i = 1; i <= 52; i++) {
      board.push(i);
    }
    return shuffle(board).slice(0, 6);
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function checkWinningBoard(board, winningNumbers) {
    return board.some((number) => winningNumbers.includes(number));
  }

  createNumberSelection();
});
