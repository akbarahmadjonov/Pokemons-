let elDocRow = document.querySelector(".row");
let elSelect = document.querySelector(".form-select");
let elInput = document.querySelector("input");
let elSelectSort = document.querySelector(".form-sort");
let elModeBtn = document.querySelector(".mode");
let elBookmarkBtn = document.querySelector(".form-bookmark");
let elBookMarkWrapper = document.querySelector(".bookmark-wrapper");
let elBookmarkList = document.querySelector(".js-book");
let hideSuccessBookmark = document.querySelector(".hide-success");
let elSuccessBookmark = document.querySelector(".success-bookmark");

// Dark mode
let theme = false;
elModeBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  theme = !theme;

  const bg = theme ? "dark" : "light";
  window.localStorage.setItem("theme", bg);
  changeTheme();
});

function changeTheme() {
  if (window.localStorage.getItem("theme") == "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}
changeTheme();

// Dark mode

let newArray = [];
elInput.addEventListener("input", function (evt) {
  evt.preventDefault();
  newArray = [];

  let inputVal = elInput.value;

  pokemons.forEach((el) => {
    if (el.name.toLowerCase().includes(inputVal)) {
      newArray.push(el);
    }
  });
  createCardListItem(newArray, elDocRow);
  console.log(newArray);
});

function createCardListItem(array, node) {
  elDocRow.innerHTML = "";

  for (let list of array) {
    let pokCard = document.createElement("div");
    pokCard.setAttribute("class", "pokcard");

    let idBox = document.createElement("h4");
    idBox.setAttribute("class", "card-title");
    idBox.textContent = `${list.id}.`;
    //   Pokemon ID

    let nameBox = document.createElement("h3");
    nameBox.setAttribute("class", "card-title");
    nameBox.textContent = list.name;
    //   Pokemon name

    let typeBox = document.createElement("h6");
    typeBox.setAttribute("class", "mt-3 card-title");
    typeBox.textContent = `Type: ${list.type}`;
    //   Pokemon type

    let imgBox = document.createElement("img");
    imgBox.setAttribute("src", list.img);
    //   Pokemon img

    let heightBox = document.createElement("p");
    heightBox.setAttribute("class", "card-text");
    heightBox.textContent = `Height: ${list.height}`;
    //   Pokemon height

    let WeightBox = document.createElement("p");
    WeightBox.setAttribute("class", "card-text");
    WeightBox.textContent = `Weight: ${list.weight}`;
    //   Pokemon weight

    let spawnBox = document.createElement("p");
    spawnBox.setAttribute("class", "card-text");
    spawnBox.textContent = `Birth time: ${list.spawn_time}`;
    //   Pokemon birthtime

    let cardBody = document.createElement("div");
    cardBody.setAttribute(
      "class",
      "card-body position-relative p-3 m-3 text-center col-sm-12 col-md-12 col-lg-6 col-xl-3 col-2xl-4 border border-2 border-dark rounded"
    );

    let newBookMark = document.createElement("button");
    newBookMark.setAttribute(
      "class",
      "border border-0 bg-transparent fs-2 fa-solid fa-bookmark bookmark-class js-bookmark"
    );
    newBookMark.dataset.bookId = list.id;

    pokCard.appendChild(imgBox);
    cardBody.appendChild(newBookMark);
    cardBody.appendChild(idBox);
    cardBody.append(imgBox);
    cardBody.appendChild(nameBox);
    cardBody.appendChild(typeBox);
    cardBody.appendChild(heightBox);
    cardBody.appendChild(WeightBox);
    cardBody.appendChild(spawnBox);

    node.appendChild(cardBody);
  }
}

createCardListItem(pokemons, elDocRow);

// --------------------------------
let pocArr = [];
pokemons.forEach((poc) => {
  poc.type.forEach((pocType) => {
    pocArr.push(pocType);
  });
});

//* Pokemonlarni for qilib chiqyapti, va type bo'yicha va pocArr ni ichiga push qilmoqda

//* Va usha push bo'lgan typelarini sort yani duplicate larini olib tashlamoqda new Set
let sorted = new Set(pocArr);

sorted.forEach((el) => {
  let options = document.createElement("option");
  elSelect.appendChild(options);
  //* Selectni ichiga option degan option tagimizi append qilmoqdamiz

  options.setAttribute("value", el);
  //* Option ga value bermoqdamiz

  options.textContent = el;
});

let newChoosePok = [];
//* Yangi pustoy array ochamiz
elSelect.addEventListener("change", () => {
  newChoosePok = [];
  if (elSelect.value === "All") {
    newChoosePok = pokemons;
    //* Tekshiramiz agar Foydalanuvchi All valuesini tanlasa qaytib hammasini qaytaradi
  }
  // Pokemonlarni ichini qayta loop qilib chiqamiz
  pokemons.forEach((poc) => {
    poc.type.forEach((pocType) => {
      if (elSelect.value == pocType) {
        newChoosePok.push(poc);
      }
    });
  });
  createCardListItem(newChoosePok, elDocRow);
});

// --------------------------------

// Sort

// let newSort = [];
// elSelectSort.addEventListener("change", function () {
//   newSort = [];

//   pokemons.forEach((element) => {
//     newSort.push(element);
//     newSort.sort(
//       (a, b) =>
//         a.name.toUpperCase().charCodeAt(0) - b.name.toUpperCase().charCodeAt(0)
//     );
//   });

//   createCardListItem(newSort, elDocRow);
//   console.log(newSort);
// });

elSelectSort.addEventListener("change", (evt) => {
  evt.preventDefault();

  let elSelectSortVal = elSelectSort.value;

  let emptyArr = [];
  if (elSelectSort.value == "all") {
    emptyArr = [];
    pokemons.forEach((el) => {
      emptyArr.push(el);
    });
    createCardListItem(emptyArr, elDocRow);
  }

  console.log(emptyArr);

  if (elSelectSortVal === "a_z")
    createCardListItem(
      pokemons.sort(
        (a, b) =>
          a.name.toLowerCase().charCodeAt(0) -
          b.name.toLowerCase().charCodeAt(0)
      ),
      elDocRow
    );

  if (elSelectSortVal === "z_a")
    createCardListItem(
      pokemons.sort(
        (a, b) =>
          b.name.toLowerCase().charCodeAt(0) -
          a.name.toLowerCase().charCodeAt(0)
      ),
      elDocRow
    );
});

// Bookmark
elBookmarkBtn.addEventListener("click", () => {
  elBookMarkWrapper.classList.toggle("bookmark-wrapper-active");
});
// Bookmark
let newSortArr = [];
elDocRow.addEventListener("click", (evt) => {
  evt.preventDefault();

  if (evt.target.matches(".js-bookmark")) {
    const getId = evt.target.dataset.bookId;
    const pocFound = pokemons.find((el) => el.id == getId);
    newSortArr.push(pocFound);
    // newSortArr = new Set(newSortArr);
    // New sort didn't work properly
    const newLiBook = document.createElement("li");
    newLiBook.setAttribute("class", "list-group-item");
    newLiBook.innerHTML = `Your saved pokemon: <strong>${pocFound.id}. ${pocFound.name}</strong>`;
    elBookmarkList.appendChild(newLiBook);
  }
  hideSuccessBookmark.classList.add("d-none");
  elSuccessBookmark.classList.remove("d-none");
  window.localStorage.setItem("newSortArr", JSON.stringify(newSortArr));
});

let bookPoc = JSON.parse(window.localStorage.getItem("newSortArr")) || [];
