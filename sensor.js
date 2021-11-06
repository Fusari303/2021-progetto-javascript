class Sensor {

  constructor(description, id, lat, lng, place, readonly, stateCode, value) {
    this.description = description
    this.id = id
    this.lat = lat
    this.lng = lng
    this.place = place
    this.readonly = readonly
    this.stateCode = stateCode
    this.value = value
  }
}
  function JSONToSensor(jsonObject){
  const { strDescription: description,
    strId: id,
    strLat: lat,
    strLng: lng,
    strPlace: place,
    strReadonly: readonly,
    strStateCode: stateCode,
    strValue: value
  } = jsonObject

  const sensore = new Sensor(description, id, lat, lng, place, readonly, stateCode, value)
  console.log(sensore)
  return sensore
}



