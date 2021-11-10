let mobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
    navigator.userAgent
  );

if (mobile) {
  document.getElementById("txtbox").innerHTML =
    '<textarea id="txt" style="width:100px;height:100px" maxlength="1"></textarea>';
  alert("You are on a mobile device, you can use the textbox to get a keyboard!");
}

setTimeout(function () {
  document.getElementById("main").innerHTML =
    'Welcome, press <key title="␣" onclick="GAME_ENGINE(\' \')">space</key> to get started! Press <key title=";" onclick="GAME_ENGINE(\';\')">;</key> at any time to restart. <br><a href="https://forest-game.glitch.me/tutorial" style="text-decoration: none; color: darkgray;" title="Click for Tutorial">You can see a tutorial here!</a>';
}, 1300);
let step = 1;
let flashlightStatus = "off";
let latestAction = [];
let ticking;

setTimeout(function () {
  if (mobile)
    document.getElementById("indicator").src =
      "https://img.icons8.com/metro/19/000000/smartphone-tablet.png";
  if (!mobile)
    document.getElementById("indicator").src = "https://img.icons8.com/color/19/000000/monitor.png";
  if (mobile) document.getElementById("indicator").title = "You are a mobile user!";
  if (!mobile) document.getElementById("indicator").title = "You are a PC user!";
}, 1200);

setInterval(function () {
  document.getElementById("step").innerHTML = step;
}, 1000);

setTimeout(function () {
  document.getElementById("title").innerHTML = "Forest Game";
  ticking = "stop";
  document.getElementById("favicon").href =
    "https://img.icons8.com/doodle/48/000000/large-tree.png";
}, 1400);

var i;
var agt = navigator.userAgent.toLowerCase();
if (agt.indexOf("mac") != -1) {
  var a = "\r";
} else {
  var a = "\n";
}
var max = 0;
function tlist() {
  max = tlist.arguments.length;
  for (i = 0; i < max; i++) this[i] = tlist.arguments[i];
}
var tl = new tlist(
  "https://cdn.glitch.com/6e4fadbc-7cce-43f9-9654-5c43031cdcf5%2Fframe_1.png?v=1566080728479",
  "https://cdn.glitch.com/6e4fadbc-7cce-43f9-9654-5c43031cdcf5%2Fframe_2.png?v=1566080729571",
  "https://cdn.glitch.com/6e4fadbc-7cce-43f9-9654-5c43031cdcf5%2Fframe_3.png?v=1566080730995",
  "https://cdn.glitch.com/6e4fadbc-7cce-43f9-9654-5c43031cdcf5%2Fframe_4.png?v=1566080732271",
  "https://cdn.glitch.com/6e4fadbc-7cce-43f9-9654-5c43031cdcf5%2Fframe_5.png?v=1566080733553",
  "https://cdn.glitch.com/6e4fadbc-7cce-43f9-9654-5c43031cdcf5%2Fframe_6.png?v=1566080734623",
  "https://cdn.glitch.com/6e4fadbc-7cce-43f9-9654-5c43031cdcf5%2Fframe_7.png?v=1566080858113",
  "https://cdn.glitch.com/6e4fadbc-7cce-43f9-9654-5c43031cdcf5%2Fframe_8.png?v=1566080875906"
);
var x = 0;
function tick() {
  if (ticking == "stop") return;
  document.getElementById("favicon").href = tl[x];
  x++;
  if (x == max) x = 0;
  setTimeout("tick()", 150);
}
tick();

function startTutorial() {
  if (!mobile) window.location.href = "tutorial";
  if (mobile)
    document.getElementById("redir").innerHTML =
      '<meta http-equiv="refresh" content=0.1; url=https://forest-game.glitch.me/title">';
}

function GAME_ENGINE(key) {
  if (key == ";") {
    window.location.reload();
    return;
  }

  if (key == " " && step == 1) {
    document.getElementById("main").innerHTML =
      'You are in a forest. It is dark out. Which do you choose to do?<ol><li title="1" onclick="GAME_ENGINE(\'1\')">Look Around</li><li title="2" onclick="GAME_ENGINE(\'2\')">Run</li><li title="3" onclick="GAME_ENGINE(\'3\')">Check Supplies</li><li title="4" onclick="GAME_ENGINE(\'4\')">Turn on Flashlight</li></ol>';
    step = 3;
    return;
  }

  if (key == "1" && step == 3) {
    document.getElementById("main").innerHTML =
      'You see glowing red eyes looking at you from a tree. What do you want to do?<ol><li title="1" onclick="GAME_ENGINE(\'1\')">Run</li><li title="2" onclick="GAME_ENGINE(\'2\')">Check Supplies</li><li title="3" onclick="GAME_ENGINE(\'3\')">Turn on Flashlight</li></ol>';
    step = 4;
    latestAction.push("look around");
    return;
  }
  if (key == "2" && step == 3) {
    document.getElementById("main").innerHTML =
      'You are running, you don\'t know what from, but you are running. What do you want to do?<ol><li title="1">Look Around</li><li title="2">Check Supplies</li><li title="3">Turn on Flashlight</li></ol>';
    step = 4;
    latestAction.push("run");
    return;
  }
  if (key == "3" && step == 3) {
    document.getElementById("main").innerHTML =
      'You have a flashlight, that is all. What do you want to do?<ol><li title="1">Look Around</li><li title="2">Run</li><li title="3">Turn on Flashlight</li></ol>';
    step = 4;
    latestAction.push("check supplies");
    return;
  }
  if (key == "4" && step == 3) {
    document.getElementById("main").innerHTML =
      'You turn your flashlight on. What do you want to do?<ol><li title="1">Look Around</li><li title="2">Run</li><li title="3">Check Supplies</li></ol>';
    flashlightStatus = "on";
    step = 4;
    latestAction.push("turn flashlight on");
    return;
  }

  if (latestAction[latestAction.length - 1] == "look around" && step == 4) {
    if (
      key == "1" &&
      !latestAction.includes("run") &&
      latestAction.includes("look around") &&
      flashlightStatus == "off"
    ) {
      document.getElementById("main").innerHTML =
        'You are running, those eyes were scary. What do you want to do?<ol><li title="1">Look Around</li><li title="2">Check Supplies</li><li title="3">Turn on Flashlight</li></ol>';
      step = 5;
      latestAction.push("run");
      return;
    }
    if (
      key == "1" &&
      !latestAction.includes("run") &&
      latestAction.includes("look around") &&
      flashlightStatus == "on"
    ) {
      document.getElementById("main").innerHTML =
        'You are running, you do not like the look of that owl. What do you want to do?<ol><li title="1">Look Around</li><li title="2">Check Supplies</li><li title="3">Turn on Flashlight</li></ol>';
      step = 5;
      latestAction.push("run");
      return;
    }
    if (key == "2") {
      document.getElementById("main").innerHTML =
        'You have a flashlight, that is all. What do you want to do?<ol><li title="1">Look Around</li><li title="2">Run</li><li title="3">Turn on Flashlight</li></ol>';
      step = 5;
      latestAction.push("check supplies");
      return;
    }
    if (key == "3") {
      document.getElementById("main").innerHTML =
        'You turn your flashlight on. What do you want to do?<ol><li title="1">Look Around</li><li title="2">Run</li><li title="3">Check Supplies</li></ol>';
      flashlightStatus = "on";
      step = 5;
      latestAction.push("turn flashlight on");
      return;
    }
  }
  if (latestAction[latestAction.length - 1] == "run" && step == 4) {
    if (
      key == "1" &&
      !latestAction.includes("run") &&
      !latestAction.includes("look around") &&
      flashlightStatus == "off"
    ) {
      document.getElementById("main").innerHTML =
        'You are running... You don\'t know what from, but you are running. What do you want to do?<ol><li title="1">Look Around</li><li  title="2">Check Supplies</li><li  title="3">Turn on Flashlight</li></ol>';
      step = 5;
      latestAction.push("run");
      return;
    }
    if (
      key == "1" &&
      !latestAction.includes("run") &&
      latestAction.includes("look around") &&
      flashlightStatus == "off"
    ) {
      document.getElementById("main").innerHTML =
        'You are running... Those eyes were scary. What do you want to do?<ol><li  title="1">Look Around</li><li  title="2">Check Supplies</li><li  title="3">Turn on Flashlight</li></ol>';
      step = 5;
      latestAction.push("run");
      return;
    }
    if (key == "2") {
      document.getElementById("main").innerHTML =
        'You have a flashlight, that is all. What do you want to do?<ol><li  title="1">Look Around</li><li  title="2">Run</li><li  title="3">Turn on Flashlight</li></ol>';
      step = 5;
      latestAction.push("check supplies");
      return;
    }
    if (key == "3") {
      document.getElementById("main").innerHTML =
        'You turn your flashlight on. What do you want to do?<ol><li  title="1">Look Around</li><li  title="2">Run</li><li  title="3">Check Supplies</li></ol>';
      flashlightStatus = "on";
      step = 5;
      latestAction.push("turn flashlight on");
      return;
    }
  }
}

if (!mobile) {
  document.addEventListener("keydown", function (event) {
    GAME_ENGINE(event.key);
  });
}

if (mobile) {
  setInterval(function () {
    if (!(document.getElementById("txt").value.length > 0)) return;

    let key = document.getElementById("txt").value;

    document.getElementById("txt").value = "";

    GAME_ENGINE(key);
  }, 500);
}

//document.getElementById('main').innerHTML = ""
