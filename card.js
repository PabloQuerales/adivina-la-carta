// OBJETOS CON LOS VALORES Y PALOS DE LAS CARTAS
let palo = ["♦", "♥", "♠", "♣"]
let value = [2,3,4,5,6,7,8,9,10,"J","Q","K","A"] 
let poker = [palo,value]
let randomCard = []

// VARIABLES DE LOS COMPONENTES
let btn = document.querySelector("#submit")
let modal = document.querySelector(".modal")
let divCard = document.querySelector(".card")
let playerCard = document.querySelector(".player-card")


//ACÁ SE GENERA EL NUMERO Y EL PALO DE MANERA ALEATORIA Y SE INTRODUCEN EN UN ARRAY VACIO
function card(){
  for (let i = 0; i < poker.length; i++) {
    let randomNumber = Math.floor(Math.random() * poker[i].length);
    for (let index = 0; index < 1; index++) {
    randomCard.push(poker[i][randomNumber])
    }
  }

// ACÁ SE VALIDA EL COLOR DEL PALO
let color = ""
if (randomCard[0] == "♦") {
  color = "red"
} else if(randomCard[0] == "♥"){
  color = "red"
}

//ACÁ SE IMPRIME EL VALOR
  document.querySelector(".card").innerHTML = `      
  <div class="card-top ${color}"><span>${randomCard[0]}</span></div>
  <div class="card-mid"><span>${randomCard[1]}</span></div>
  <div class="card-bot ${color}"><span>${randomCard[0]}</span></div>
  `

};

// ACA SE GUARDA EL VALOR DEL NUMERO ESCOGIDO Y SE CREA LA CARTA AL PRESIONAR EL BOTON 
btn.addEventListener("click", ()=>{
  let numeroEscogido = document.querySelector(".input-value").value
  if(numeroEscogido > 1 && numeroEscogido <= 10){
  document.querySelector(".modal-background").classList.remove("modal-background")
  card()  
  modal.classList.add("hidden")
  divCard.classList.remove("hidden")
// IMPRIME LA CARTA SELECCIONADA POR EL JUGADOR
  playerCard.innerHTML = `    
  <div class="box-player">
    <div class="top-section">
      <div class="second-card">
        <div class="card-mid"><span>${numeroEscogido}</span></div>
      </div>
      <div>
        <span>ESTA ES TU CARTA</span>
      </div>
    </div>  
    <div>
    <i class="bi bi-arrow-repeat"></i>
    </div>
  </div>  
  `
  playerCard.classList.remove("hidden")
  
let buttomRepeat = document.querySelector(".bi-arrow-repeat")
// VALIDA SI GANASTE
if(numeroEscogido == randomCard[1]){
  console.log("ganaste")
}
// EVENTO QUE LLAMA A LA FUNCION DE RECARGAR PAGINA
  buttomRepeat.addEventListener("click", ()=>{
    location.reload();
  })
  } else{
    document.querySelector(".modal-validation").innerHTML = `
    <p>POR FAVOR AGREGA UN NÚMERO VÁLIDO ENTRE EL 2 Y EL 10</p>
    `
  }
})