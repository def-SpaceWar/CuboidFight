const CONTROL_INPUTS = {
  player1left: document.getElementById("player1left"),
  player1right: document.getElementById("player1right"),
  player1up: document.getElementById("player1up"),
  player1down: document.getElementById("player1down"),
  player1attack: document.getElementById("player1attack"),
  player2left: document.getElementById("player2left"),
  player2right: document.getElementById("player2right"),
  player2up: document.getElementById("player2up"),
  player2down: document.getElementById("player2down"),
  player2attack: document.getElementById("player2attack"),
};

function setControls() {
  localStorage.setItem("player1left", CONTROL_INPUTS.player1left.value);
  localStorage.setItem("player1right", CONTROL_INPUTS.player1right.value);
  localStorage.setItem("player1up", CONTROL_INPUTS.player1up.value);
  localStorage.setItem("player1down", CONTROL_INPUTS.player1down.value);
  localStorage.setItem("player1attack", CONTROL_INPUTS.player1attack.value);
  localStorage.setItem("player2left", CONTROL_INPUTS.player2left.value);
  localStorage.setItem("player2right", CONTROL_INPUTS.player2right.value);
  localStorage.setItem("player2up", CONTROL_INPUTS.player2up.value);
  localStorage.setItem("player2down", CONTROL_INPUTS.player2down.value);
  localStorage.setItem("player2attack", CONTROL_INPUTS.player2attack.value);
}

function resetControls() {
  CONTROL_INPUTS.player1left.value = "s";
  CONTROL_INPUTS.player1right.value = "f";
  CONTROL_INPUTS.player1up.value = "e";
  CONTROL_INPUTS.player1down.value = "d";
  CONTROL_INPUTS.player1attack.value = "q";
  CONTROL_INPUTS.player2left.value = "ArrowLeft";
  CONTROL_INPUTS.player2right.value = "ArrowRight";
  CONTROL_INPUTS.player2up.value = "ArrowUp";
  CONTROL_INPUTS.player2down.value = "ArrowDown";
  CONTROL_INPUTS.player2attack.value = "m";

  setControls();
}

function showControls() {
  CONTROL_INPUTS.player1left.value = localStorage.getItem("player1left");
  CONTROL_INPUTS.player1right.value = localStorage.getItem("player1right");
  CONTROL_INPUTS.player1up.value = localStorage.getItem("player1up");
  CONTROL_INPUTS.player1down.value = localStorage.getItem("player1down");
  CONTROL_INPUTS.player1attack.value = localStorage.getItem("player1attack");
  CONTROL_INPUTS.player2left.value = localStorage.getItem("player2left");
  CONTROL_INPUTS.player2right.value = localStorage.getItem("player2right");
  CONTROL_INPUTS.player2up.value = localStorage.getItem("player2up");
  CONTROL_INPUTS.player2down.value = localStorage.getItem("player2down");
  CONTROL_INPUTS.player2attack.value = localStorage.getItem("player2attack");
}
