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
  const adminAuth = document.getElementById("adminAuth");
  const adminPasswordInput = document.getElementById("adminPassword");
  const submitAdminPasswordButton = document.getElementById(
    "submitAdminPassword"
  );

  let isUserAdmin = false;
  let userBoards = [];
  let ticketCost = 0;
  let selectedNumbers = new Set();
  const adminPassword = "admin123"; // Change this to a more secure password

  toggleAdminButton.addEventListener("click", () => {
    adminAuth.classList.toggle("hidden");
  });

  submitAdminPasswordButton.addEventListener("click", () => {
    if (adminPasswordInput.value.toLowerCase() === "admin") {
      isUserAdmin = true;
      adminView.classList.remove("hidden");
      userView.classList.add("hidden");
      adminAuth.classList.add("hidden");
      toggleAdminButton.textContent = "Switch to User";
    } else if (adminPasswordInput.value === adminPassword) {
      isUserAdmin = true;
      adminView.classList.remove("hidden");
      userView.classList.add("hidden");
      adminAuth.classList.add("hidden");
      toggleAdminButton.textContent = "Switch to User";
    } else {
      alert("Incorrect Password");
    }
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

  function generateUniqueBoard(existingBoards) {
    let newBoard;
    do {
      newBoard = [];
      while (newBoard.length < 6) {
        const randomNumber = Math.floor(Math.random() * 52) + 1;
        if (!newBoard.includes(randomNumber)) {
          newBoard.push(randomNumber);
        }
      }
      newBoard.sort((a, b) => a - b);
    } while (existingBoards.some((board) => board.join() === newBoard.join()));
    return newBoard;
  }

  function generateTickets() {
    if (selectedNumbers.size !== 6) {
      alert("Please select exactly 6 numbers.");
      return;
    }

    userBoards = [];
    boardsContainer.innerHTML = "";
    const numberOfBoards = parseInt(
      prompt("How many boards do you want to enter with? (Max 10 per ticket)"),
      10
    );
    const existingBoards = [];

    for (let i = 0; i < numberOfBoards; i++) {
      const board = generateUniqueBoard(existingBoards);
      existingBoards.push(board);
      userBoards.push({
        board,
        lottoPlus1: document.getElementById("includeLottoPlus1").checked,
        lottoPlus2: document.getElementById("includeLottoPlus2").checked,
      });
      boardsContainer.appendChild(renderBoard(board, i + 1));
    }
    localStorage.setItem("userBoards", JSON.stringify(userBoards));
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
    if (document.getElementById("includeLottoPlus1").checked)
      boardElement.innerHTML += "<p>Lotto Plus 1</p>";
    if (document.getElementById("includeLottoPlus2").checked)
      boardElement.innerHTML += "<p>Lotto Plus 2</p>";
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
    if (document.getElementById("includeLottoPlus1").checked)
      ticketCost += numberOfBoards * 2.5;
    if (document.getElementById("includeLottoPlus2").checked)
      ticketCost += numberOfBoards * 2.5;
    totalCostElement.textContent = `Total Cost: R${ticketCost.toFixed(2)}`;
  }

  function simulateDraw() {
    const winningNumbers = generateBoard();
    drawResultsContainer.innerHTML = `<h3>Winning Numbers: ${winningNumbers.join(
      ", "
    )}</h3>`;
    const winningTickets = userBoards.filter((board) =>
      checkWinningBoard(board.board, winningNumbers)
    );

    const lottoPlus1WinningNumbers = generateBoard();
    drawResultsContainer.innerHTML += `<h3>Lotto Plus 1 Winning Numbers: ${lottoPlus1WinningNumbers.join(
      ", "
    )}</h3>`;
    const lottoPlus1WinningTickets = userBoards.filter(
      (board) =>
        board.lottoPlus1 &&
        checkWinningBoard(board.board, lottoPlus1WinningNumbers)
    );

    const lottoPlus2WinningNumbers = generateBoard();
    drawResultsContainer.innerHTML += `<h3>Lotto Plus 2 Winning Numbers: ${lottoPlus2WinningNumbers.join(
      ", "
    )}</h3>`;
    const lottoPlus2WinningTickets = userBoards.filter(
      (board) =>
        board.lottoPlus2 &&
        checkWinningBoard(board.board, lottoPlus2WinningNumbers)
    );

    drawResultsContainer.innerHTML += `<p>Total Winning Tickets: ${winningTickets.length}</p>`;
    drawResultsContainer.innerHTML += `<p>Total Lotto Plus 1 Winning Tickets: ${lottoPlus1WinningTickets.length}</p>`;
    drawResultsContainer.innerHTML += `<p>Total Lotto Plus 2 Winning Tickets: ${lottoPlus2WinningTickets.length}</p>`;

    localStorage.setItem("winningNumbers", JSON.stringify(winningNumbers));
    localStorage.setItem(
      "lottoPlus1WinningNumbers",
      JSON.stringify(lottoPlus1WinningNumbers)
    );
    localStorage.setItem(
      "lottoPlus2WinningNumbers",
      JSON.stringify(lottoPlus2WinningNumbers)
    );
    localStorage.setItem("winningTickets", JSON.stringify(winningTickets));
    localStorage.setItem(
      "lottoPlus1WinningTickets",
      JSON.stringify(lottoPlus1WinningTickets)
    );
    localStorage.setItem(
      "lottoPlus2WinningTickets",
      JSON.stringify(lottoPlus2WinningTickets)
    );
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
