module.exports = function(setup){
  var value = undefined
  var isReady = false
  var cbQueue = []

  function ready(provided){
    value = provided
    isReady = true
    cbQueue.forEach(function(method){
      method(value)
    })
    cbQueue = undefined
  }

  setup(ready)

  return function(method){
    if(isReady){ method(value) }
    else { cbQueue.push(method) }
  }
}
