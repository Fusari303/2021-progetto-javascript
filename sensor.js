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
  const { description: description,
    id: id,
    lat: lat,
    lng: lng,
    place: place,
    readonly: readonly,
    state_code: stateCode,
    value: value
  } = jsonObject

  const sensore = new Sensor(description, id, lat, lng, place, readonly, stateCode, value)
  return sensore
}



