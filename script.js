const debug = document.getElementById("debug")

function setContent(domId,content){
  document.getElementById(domId).innerHTML = content
}

fetch('https://python-iot-sim.professorandrea.repl.co')
.then(r => r.json()) 
.then(body =>{
  debug.innerHTML = JSON.stringify(body["sensors"][0],null,2)
  const sensore = JSONToSensor(body["sensors"][0])    
  setContent("sensor-description", sensore.description)
  setContent("sensor-id", sensore.id)
  setContent("sensor-lat", sensore.lat)
  setContent("sensor-lng", sensore.lng)
  setContent("sensor-readonly", sensore.readonly)
  setContent("sensor-stateCode", sensore.stateCode)
  setContent("sensor-value", sensore.value)
})