function check_braces(expressions) {
  var length = expressions.length
  for(var i = 0; i < length; i++) {
      var result = _checkBraces(expressions[i]) ? 1 : 0
      console.log(result)
  }
}


function _checkBraces(braceString) {
  var braceArray = braceString.split('')

  var braceStack = []

  var length = braceArray.length
  for(var i = 0; i < length; i++) {
    var current = braceArray[i]
    if( _isOpen(current) ){
      braceStack.push(current)
    } else {
      var mostRecent = braceStack.splice(braceStack.length-1,1)[0]
      if( !_isMatching(mostRecent,current) ){ return false }
    }
  }

  return braceStack.length == 0

}

function _isOpen(brace) {
  return (brace === '[' || brace === '{' || brace === '(')
}

function _isMatching(open,closed) {
  if ( open === '{' && closed === '}' ) { return true }
  if ( open === '(' && closed === ')' ) { return true }
  if ( open === '[' && closed === ']' ) { return true }
  return false
}

if(process.argv[2] == 'test') {
  check_braces([")(){}","[]({})","([])","{()[]}","([)]"]) //should print 0 1 1 1 0
}
