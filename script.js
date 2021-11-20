const debug = document.getElementById("debug")

function setContent(domId,content) {
  document.getElementById(domId).innerHTML = content 
}

//Funzioni utilizzate per ogni tipo di sensore per gestire il click e l'operazione
//ad esso associata
function myFunction1(){
fetch('https://hf3xzw.deta.dev/')
.then(r => r.json())
.then(body => {
   const sensore = JSONToSensor(body["sensors"][0])
   if(document.getElementById("switch0").checked == true)
       sensore.value = "On"
   else 
     sensore.value = "Off"
    console.log(sensore.value)
  })
}

function myFunction2(){
fetch('https://hf3xzw.deta.dev/')
.then(r => r.json())
.then(body => {
   const sensore = JSONToSensor(body["sensors"][1])
   if(document.getElementById("switch1").checked == true)
       sensore.value = "On"
   else 
     sensore.value = "Off"
  })
}


function myFunction3(){
fetch('https://hf3xzw.deta.dev/')
.then(r => r.json())
.then(body => {
   const sensore = JSONToSensor(body["sensors"][2])
   if(document.getElementById("switch2").checked == true)
       sensore.value = "On"
   else 
     sensore.value = "Off"
  })
}

function myFunction4(){
fetch('https://hf3xzw.deta.dev/')
.then(r => r.json())
.then(body => {
   const sensore = JSONToSensor(body["sensors"][3])
   if(document.getElementById("switch3").checked == true)
       sensore.value = "On"
   else 
     sensore.value = "Off"
  })
}



function myFunction5(){
let value = 0
fetch('https://hf3xzw.deta.dev/')
.then(r => r.json())
.then(body => {
   const sensore = JSONToSensor(body["sensors"][4])
   value = sensore.value
   setContent("valore1",value)
  })
}


function myFunction6(){
let value = 0
fetch('https://hf3xzw.deta.dev/')
.then(r => r.json())
.then(body => {
   const sensore = JSONToSensor(body["sensors"][5])
   value = sensore.value
   setContent("valore2",value)
  })
}

function myFunction7(){
let value = 0
fetch('https://hf3xzw.deta.dev/')
.then(r => r.json())
.then(body => {
   const sensore = JSONToSensor(body["sensors"][6])
   value = sensore.value
   setContent("valore3",value)
  })
}


function myFunction8(){
let value = 0
fetch('https://hf3xzw.deta.dev/')
.then(r => r.json())
.then(body => {
   const sensore = JSONToSensor(body["sensors"][7])
   value = sensore.value
   setContent("valore4",value)
  })
}

//Fetch utilizzata per recuperare i dati e configurare il toggle che mostra
//delle informazioni in più riguardo al sensore
fetch('https://hf3xzw.deta.dev/')
.then(r => r.json())
.then(body => {
  for (var i = 0; i < 8; i++) {
   const sensore = JSONToSensor(body["sensors"][i])
    let strCard = "card" + i
    let strDescription = "description" + i
    let strToggle = 'toggle-usage' + i
    var card = document.getElementById(strCard)
    setContent(strDescription,sensore.description)
    var row = `<p><button class="uk-button uk-button-default" type="button"                        uk-toggle="target: #${strToggle}" id="btn">More Info</button></p>
        <p id="${strToggle}" hidden>${"ID = " + sensore.id + "<br>"
        + "LATITUDE = " + sensore.lat + "<br>"
        + "LONGITUDE = " + sensore.lng + "<br>"
        + "PLACE = " + sensore.place + "<br>"
        + "STATECODE = " + sensore.stateCode + "<br>"}</p>`
    card.innerHTML += row
    
    }
  })

