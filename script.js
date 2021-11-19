const debug = document.getElementById("debug")

function setContent(domId,content) {
  document.getElementById(domId).innerHTML = content 
}

function myFunction1(){
fetch('https://hf3xzw.deta.dev/')
.then(r => r.json())
.then(body => {
   const sensore = JSONToSensor(body["sensors"][0])
   if(document.getElementById("switch0").checked == true)
       sensore.value = "On"
   else 
     sensore.value = "Off"
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
   value0 = sensore.value
   setContent("valore1",value0)
  })
}


function myFunction6(){
let value = 0
fetch('https://hf3xzw.deta.dev/')
.then(r => r.json())
.then(body => {
   const sensore = JSONToSensor(body["sensors"][5])
   value0 = sensore.value
   setContent("valore2",value0)
  })
}

function myFunction7(){
let value = 0
fetch('https://hf3xzw.deta.dev/')
.then(r => r.json())
.then(body => {
   const sensore = JSONToSensor(body["sensors"][6])
   value0 = sensore.value
   setContent("valore3",value0)
  })
}


function myFunction8(){
let value = 0
fetch('https://hf3xzw.deta.dev/')
.then(r => r.json())
.then(body => {
   const sensore = JSONToSensor(body["sensors"][7])
   value0 = sensore.value
   setContent("valore4",value0)
  })
}


fetch('https://hf3xzw.deta.dev/')
.then(r => r.json())
.then(body => {
  for (var i = 0; i < 8; i++) {
   const sensore = JSONToSensor(body["sensors"][i])
    
    if (sensore.readonly == false) {
      let strCard = "card" + i
      let strDescription = "description" + i
      let strToggle = 'toggle-usage' + i
      var card = document.getElementById(strCard)
      setContent(strDescription,sensore.description)
      var row = `<p><button class="uk-button uk-button-default" type="button"                           uk-toggle="target: #${strToggle}" id="btn">More Info</button></p>
          <p id="${strToggle}" hidden>${"ID = " + sensore.id + "<br>"
          + "LATITUDE = " + sensore.lat + "<br>"
          + "LONGITUDE = " + sensore.lng + "<br>"
          + "PLACE = " + sensore.place + "<br>"
          + "STATECODE = " + sensore.stateCode + "<br>"}</p>`
      card.innerHTML += row
    }
    
    if(sensore.readonly == true)
    {
      let strCard = "card" + i
      let strDescription = "description" + i
      let strToggle = 'toggle-usage' + i
      var card = document.getElementById(strCard)
      setContent(strDescription,sensore.description)
      var row = `<p><button class="uk-button uk-button-default" type="button"                           uk-toggle="target: #${strToggle}" id="btn">More Info</button></p>
          <p id="${strToggle}" hidden>${"ID = " + sensore.id + "<br>"
          + "LATITUDE = " + sensore.lat + "<br>"
          + "LONGITUDE = " + sensore.lng + "<br>"
          + "PLACE = " + sensore.place + "<br>"
          + "STATECODE = " + sensore.stateCode + "<br>"}</p> `
      card.innerHTML += row
    }
    }
  })

