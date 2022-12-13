let elDocRow = document.querySelector(".row");

for (var list of pokemons) {
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
    "card-body p-3 m-3 text-center col-sm-12 col-md-12 col-lg-6 col-xl-3 col-2xl-4 border border-2 border-dark rounded"
  );

  pokCard.appendChild(imgBox);
  cardBody.appendChild(idBox);
  cardBody.append(imgBox);
  cardBody.appendChild(nameBox);
  cardBody.appendChild(heightBox);
  cardBody.appendChild(WeightBox);
  cardBody.appendChild(spawnBox);

  elDocRow.appendChild(cardBody);
}
