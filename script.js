const debug = document.getElementById("debug")

function setToggle(object){
}

fetch('https://hf3xzw.deta.dev/')
  .then(r => r.json())
  .then(body => {
    for(var i = 0; i < 8; i++){
    const sensore = JSONToSensor(body["sensors"][i])
    let strCard = "card" + i
    let strButton = "btn" + i
    var card = document.getElementById(strCard)
    var row = `<h3><p class = "uk-text-uppercase"style="ffont-size:35px;">${sensore.description}</p>
    <button class="uk-button uk-button-default" type="button"                           uk-toggle="target: #toggle-usage" id=${strButton}>More About                       It</button>
                 <p id="toggle-usage" hidden>${"ID = " + sensore.id + "<br>"
                 + "LATITUDE = " + sensore.lat + "<br>"
                 + "LONGITUDE = " + sensore.lng + "<br>"
                 + "PLACE = " + sensore.place + "<br>"
                 + "STATECODE = " + sensore.stateCode + "<br>"
                 + "VALUE = " + sensore.value + "<br>"}</p>
               </h3> `
    card.innerHTML = row
    }
})

