var player, player2, winner;
var player1score = 0;
var player2score = 0;
var winner = "None";

function startScreen() {
  var playGameButton = new Button(
    500,
    400,
    250,
    100,
    { inactive: "#0ad", active: "#0ef", pressed: "#aff" },
    25,
    "#333",
    "Enter Game",
    "#000",
    "40px 'Comic Sans MS'",
    () => {
      clearInterval(interval);

      game();
    }
  );

  var changeControlsButton = new Button(
    450,
    600,
    350,
    100,
    { inactive: "#0ad", active: "#0ef", pressed: "#aff" },
    25,
    "#333",
    "Change Controls",
    "#000",
    "40px 'Comic Sans MS'",
    () => {
      clearInterval(interval);
    }
  );

  canvas.addEventListener("mousemove", (event) => {
    playGameButton.listenMouseMove(event);
  });

  canvas.addEventListener("mousedown", (event) => {
    playGameButton.listenMouseDown(event);
  });

  canvas.addEventListener("mouseup", (event) => {
    playGameButton.listenMouseUp(event);
  });

  var interval = setInterval(() => {
    clear();

    context.font = "120px Comic Sans MS";
    context.fillText("Cuboid Fight!", 625, 200, 700, 100);

    playGameButton.draw();
    changeControlsButton.draw();
  }, 20);
}

function game() {
  winner = "None";
  let wait_frames = 100;
  player1 = new Player(
    290,
    100,
    100,
    100,
    "#00ddff",
    undefined,
    player1controls,
    {
      max_health: MAX_HEALTH,
      health_rect: { x: 100, y: 100, w: 300, h: 50 },
      color: "#00ddff",
      border_margin: 25,
      border_color: "#333",
    }
  );

  player2 = new Player(
    810,
    100,
    100,
    100,
    "#aa0000",
    undefined,
    player2controls,
    {
      max_health: MAX_HEALTH,
      health_rect: { x: 800, y: 100, w: 300, h: 50 },
      color: "#aa0000",
      border_margin: 25,
      border_color: "#333",
    }
  );

  document.addEventListener("keydown", (event) => {
    player1.listenKeyDown(event);
    player2.listenKeyDown(event);
  });

  document.addEventListener("keyup", (event) => {
    player1.listenKeyUp(event);
    player2.listenKeyUp(event);
  });

  const platforms = [
    new Platform(150, 700, 900, 20, "#219321", undefined),
    new Platform(150, 720, 900, 30, "#A0522D", undefined),
    new Platform(290, 450, 225, 20, "#219321", undefined),
    new Platform(290, 470, 225, 25, "#A0522D", undefined),
    new Platform(685, 450, 225, 20, "#219321", undefined),
    new Platform(685, 470, 225, 25, "#A0522D", undefined),
  ];

  // Game Loop
  let interval = setInterval(() => {
    clear();
    player1.other_player = player2;
    player2.other_player = player1;

    player1.draw();
    player1.getPhysics(platforms);

    player2.draw();
    player2.getPhysics(platforms);

    player1.health.draw();
    player2.health.draw();

    if (player1.health.health <= 0) {
      if (player2.health.health <= 0) {
        winner = "tie";
      } else if (winner === "None") {
        winner = "2";
      }
    } else if (player2.health.health <= 0) {
      if (player1.health.health <= 0) {
        winner = "tie";
      } else if (winner === "None") {
        winner = "1";
      }
    }

    if (player1.health.health <= 0 || player2.health.health <= 0) {
      wait_frames -= 1;

      if (wait_frames <= 0) {
        player1.attack_damage = 0;
        player2.attack_damage = 0;
        clearInterval(interval);
        winScreen();
      }
    }

    for (var i = 0; i < platforms.length; i++) {
      platforms[i].draw();
    }

    showScore();
  }, 20);

  function winScreen() {
    var playGameButton = new Button(
      500,
      450,
      250,
      100,
      { inactive: "#0ad", active: "#0ef", pressed: "#aff" },
      25,
      "#333",
      "Play Again",
      "#000",
      "40px 'Comic Sans MS'",
      () => {
        clearInterval(interval);
        game();
      }
    );

    canvas.addEventListener("mousemove", (event) => {
      playGameButton.listenMouseMove(event);
    });

    canvas.addEventListener("mousedown", (event) => {
      playGameButton.listenMouseDown(event);
    });

    canvas.addEventListener("mouseup", (event) => {
      playGameButton.listenMouseUp(event);
    });

    canvas.addEventListener("mouseup", (event) => {
      playGameButton.listenMouseUp(event);
    });

    canvas.addEventListener("mouseup", (event) => {
      playGameButton.listenMouseUp(event);
    });

    canvas.addEventListener("mouseup", (event) => {
      playGameButton.listenMouseUp(event);
    });

    canvas.addEventListener("mouseup", (event) => {
      playGameButton.listenMouseUp(event);
    });

    round_number += 1;

    if (winner == "1") {
      player1score += 1;
    } else if (winner == "2") {
      player2score += 1;
    }

    var interval = setInterval(() => {
      clear();
      context.fillStyle = "#000";
      context.font = "120px Comic Sans MS";
      if (winner !== "tie") {
        context.fillText(`Player ${winner} WINS!`, 625, 300, 700, 100);
      } else {
        context.fillText(`TIE! Nobody won.`, 625, 300, 700, 100);
      }

      showScore();
      playGameButton.draw();
    }, 20);
  }
}

function showScore() {
  context.fillStyle = "#000";
  context.font = "80px Comic Sans MS";
  context.fillText(`${player1score} - ${player2score}`, 600, 150, 700, 100);
}

startScreen();
