const pokemonContainer = document.querySelector(".container");
var popup = document.getElementById('myModal');
var span = document.getElementsByClassName("end")[0];
var body = document.getElementsByClassName("popup-body");

function fetchPokemon(id) {

  fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 150) + 1}/`)
    .then((res) => res.json())
    .then((data) => {
      createPokemon(data);
    });
}

function fetchPokemons(number){
  for(let i = 1 ; i <= number ; i++){
      fetchPokemon(i);
  }
}

function createPokemon(pokemon){

  

    //id
    const number = document.createElement('p');
    number.textContent = `${pokemon.id.toString().padStart(1, 0)}`;
    
    //img
    const card = document.createElement('div');
    card.classList.add('pokemon-block');
    
    
    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spriteContainer.appendChild(sprite);

    //name
    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    //types
    const types = document.createElement('p');
    types.classList.add('types')
    types.textContent = pokemon.types.map(types => types.type.name);
    
    //buttons
    const btn = document.createElement('button');
    btn.classList.add('button');
    btn.textContent = "view details";
    
    var cap_btn = document.querySelector(".cap-btn");
    cap_btn = document.createElement('button');
    cap_btn.classList.add('button');
    cap_btn.textContent = "Captured";



    card.appendChild(number);
    card.appendChild(spriteContainer);
    card.appendChild(name);
    card.appendChild(types);
    card.appendChild(btn);
    card.appendChild(cap_btn);
    pokemonContainer.appendChild(card);
  

  cap_btn.onclick = function(){
    localStorage.setItem(number,spriteContainer);
    alert('Captured');
    for(let i = 0 ; i < localStorage.length ; i++){
    console.log(localStorage.getItem);}
  }

  btn.onclick = function() {
     popup.style.display = "block";
  }
  span.onclick = function() {
     popup.style.display = "none";
  }
  window.onclick = function(event) {
     if (event.target == popup) {
        popup.style.display = "none";
     }
  }

}

fetchPokemons(8);


   