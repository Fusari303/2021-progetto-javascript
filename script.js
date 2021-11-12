const debug = document.getElementById("debug")
function setContent(domId,content){
  document.getElementById(domId).innerHTML = content
}

fetch('https://hf3xzw.deta.dev/')
.then(r => r.json()) 
.then(body =>{
  for(let i = 0; i <= 7; i++){
    debug.innerHTML = JSON.stringify(body["sensors"][i],null,2)
    const sensore = JSONToSensor(body["sensors"][i])
    console.log(sensore)
    setContent("sensor-description", sensore.description)
    setContent("sensor-id", sensore.id)
    setContent("sensor-lat", sensore.lat)
    setContent("sensor-lng", sensore.lng)
    setContent("sensor-place", sensore.place)
    setContent("sensor-readonly", sensore.readonly)
    setContent("sensor-statecode", sensore.stateCode)
    setContent("sensor-value", sensore.value)
  }
})