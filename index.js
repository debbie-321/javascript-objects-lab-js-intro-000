

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({}, object, { [key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value
  return object
}

function deleteFromObjectByKey(obj, key){
  delete Object.assign({}, {obj: key})
  return obj
}

function destructivelyDeleteFromObjectByKey(object, key){

}
