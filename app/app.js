let $nickname = document.getElementById("nickname");
let nick = prompt("Ingrese su nombre:");
$nickname.innerHTML += `${nick}`;

//Rick&Morty PJ per PJ
const $rick = document.getElementById("rick");
const $ricklist = document.getElementById("ricklist");
const $morty = document.getElementById("morty");
const $mortylist = document.getElementById("mortylist");
const $summer = document.getElementById("summer");
const $summerlist = document.getElementById("summerlist");
const $beth = document.getElementById("beth");
const $bethlist = document.getElementById("bethlist");
const $jerry = document.getElementById("jerry");
const $jerrylist = document.getElementById("jerrylist");
const urlorigin = "https://rickandmortyapi.com/api/character/";
const xhr = new XMLHttpRequest();

function onRequestHandler() {
  if (this.readyState === 4 && this.status === 200) {
    console.log("We're ready!");
  } else alert("Oh sorry, we've technical problems...");
}

xhr.addEventListener("load", onRequestHandler);
xhr.open("GET", `${urlorigin}`);
xhr.send();

$rick.addEventListener("click", () => {
  const url = "https://rickandmortyapi.com/api/character/?name=rick";
  document.getElementById("ricklist").innerHTML = "";
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const characters = data.results;
      alert(
        "WARNING!!! Usted esta accediendo a datos confidenciales! Actuar con discrecion."
      );
      for (let character of characters) {
        $ricklist.innerHTML += `
    <li class="char-info">
      <div>
      <img src="../img/TOP SECRET.png" class="char-infoinside">
        <img class="char-photo" src="${character.image}" alt="" />
        <p class="char-status">${character.status}</p>
      </div>
      <div class="char-more">
      <br>
      <h2 class="char-name">${character.name}</h2>
      <br>
      <hr>
        <p class="char-species">Species: ${character.species.split(" ")[0]}</p>
        <p class="char-location">Location: ${
          character.location.name.split("(")[0]
        }</p>
        <p class="char-gender">Gender: ${character.gender}</p>
      </div>
    </li>
`;
      }
    });
});

$morty.addEventListener("click", () => {
  const url = "https://rickandmortyapi.com/api/character/?name=morty";
  document.getElementById("mortylist").innerHTML = "";
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const characters = data.results;
      alert(
        "WARNING!!! Usted esta accediendo a datos confidenciales! Actuar con discrecion."
      );
      for (let character of characters) {
        $mortylist.innerHTML += `
    <li class="char-info">
      <div>
      <img src="../img/TOP SECRET.png" class="char-infoinside">
        <img class="char-photo" src="${character.image}" alt="" />
        <p class="char-status">${character.status}</p>
      </div>
      <div class="char-more">
      <br>
      <h2 class="char-name">${character.name}</h2>
      <br>
      <hr>
        <p class="char-species">Species: ${character.species.split(" ")[0]}</p>
        <p class="char-location">Location: ${
          character.location.name.split("(")[0]
        }</p>
        <p class="char-gender">Gender: ${character.gender}</p>
      </div>
    </li>
`;
      }
    });
});

$summer.addEventListener("click", () => {
  const url = "https://rickandmortyapi.com/api/character/?name=summer";
  document.getElementById("summerlist").innerHTML = "";
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const characters = data.results;
      alert(
        "WARNING!!! Usted esta accediendo a datos confidenciales! Actuar con discrecion."
      );
      for (let character of characters) {
        $summerlist.innerHTML += `
    <li class="char-info">
      <div>
      <img src="../img/TOP SECRET.png" class="char-infoinside">
        <img class="char-photo" src="${character.image}" alt="" />
        <p class="char-status">${character.status}</p>
      </div>
      <div class="char-more">
      <br>
      <h2 class="char-name">${character.name}</h2>
      <br>
      <hr>
        <p class="char-species">Species: ${character.species.split(" ")[0]}</p>
        <p class="char-location">Location: ${
          character.location.name.split("(")[0]
        }</p>
        <p class="char-gender">Gender: ${character.gender}</p>
      </div>
    </li>
`;
      }
    });
});
$beth.addEventListener("click", () => {
  const url = "https://rickandmortyapi.com/api/character/?name=beth";
  document.getElementById("bethlist").innerHTML = "";
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const characters = data.results;
      alert(
        "WARNING!!! Usted esta accediendo a datos confidenciales! Actuar con discrecion."
      );
      for (let character of characters) {
        $bethlist.innerHTML += `
    <li class="char-info">
      <div>
      <img src="../img/TOP SECRET.png" class="char-infoinside">
        <img class="char-photo" src="${character.image}" alt="" />
        <p class="char-status">${character.status}</p>
      </div>
      <div class="char-more">
      <br>
      <h2 class="char-name">${character.name}</h2>
      <br>
      <hr>
        <p class="char-species">Species: ${character.species.split(" ")[0]}</p>
        <p class="char-location">Location: ${
          character.location.name.split("(")[0]
        }</p>
        <p class="char-gender">Gender: ${character.gender}</p>
      </div>
    </li>
`;
      }
    });
});

$jerry.addEventListener("click", () => {
  const url = "https://rickandmortyapi.com/api/character/?name=jerry";
  document.getElementById("jerrylist").innerHTML = "";
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const characters = data.results;
      alert(
        "WARNING!!! Usted esta accediendo a datos confidenciales! Actuar con discrecion."
      );
      for (let character of characters) {
        $jerrylist.innerHTML += `
    <li class="char-info">
      <div>
      <img src="../img/TOP SECRET.png" class="char-infoinside">
        <img class="char-photo" src="${character.image}" alt="" />
        <p class="char-status">${character.status}</p>
      </div>
      <div class="char-more">
      <br>
      <h2 class="char-name">${character.name}</h2>
      <br>
      <hr>
        <p class="char-species">Species: ${character.species.split(" ")[0]}</p>
        <p class="char-location">Location: ${
          character.location.name.split("(")[0]
        }</p>
        <p class="char-gender">Gender: ${character.gender}</p>
      </div>
    </li>
`;
      }
      return;
    });
});

showTime();
function showTime() {
  myDate = new Date();
  hours = myDate.getHours();
  minutes = myDate.getMinutes();
  seconds = myDate.getSeconds();
  if (hours < 10) hours = 0 + hours;

  if (minutes < 10) minutes = "0" + minutes;

  if (seconds < 10) seconds = "0" + seconds;

  $("#time").text(hours + ":" + minutes + ":" + seconds);
  setTimeout("showTime()", 1000);
}
