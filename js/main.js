let elDocRow = document.querySelector(".row");

for (i = 0; i < pokemons.length; i++) {
  let pokCard = document.createElement("div");
  pokCard.setAttribute(
    "class",
    "pokcard text-center m-auto cursor p-3 border-0"
  );

  let idBox = document.createElement("h4");
  idBox.setAttribute("class", "card-title");
  idBox.textContent = pokemons.id;
  //   Pokemon ID

  let nameBox = document.createElement("h3");
  nameBox.setAttribute("class", "card-title");
  nameBox.textContent = pokemons.name;
  //   Pokemon name

  let imgBox = document.createElement("img");
  imgBox.setAttribute("src", pokemons.img);
  //   Pokemon img

  let heightBox = document.createElement("p");
  heightBox.setAttribute("class", "card-text");
  heightBox.textContent = `Height: ${pokemons.height}`;
  //   Pokemon height

  let WeightBox = document.createElement("p");
  WeightBox.setAttribute("class", "card-text");
  WeightBox.textContent = `Weight: ${pokemons.weight}`;
  //   Pokemon height

  let spawnBox = document.createElement("p");
  spawnBox.setAttribute("class", "card-text");
  spawnBox.textContent = `Birth time: ${pokemons.spawn_time}`;
  //   Pokemon height

  let cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");

  pokCard.appendChild(imgBox);
  cardBody.appendChild(idBox);
  cardBody.appendChild(nameBox);
  cardBody.appendChild(heightBox);
  cardBody.appendChild(WeightBox);
  cardBody.appendChild(spawnBox);
}
