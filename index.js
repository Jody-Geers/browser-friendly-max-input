/*
  "repo": "Jody-Geers/max-input",
  "description": "browser fwiendly max input validation.",
*/


/**
* Browser friendly max input validation.
* @param {string} args.el - The context element.
* @param {string} args.targetId - The output ui element id for count.
*/
function _limitUserInput ( event ) {
  var _maxLength = event.currentTarget.maxLength;
  // include new lines as count of 2
  var _newLines = event.currentTarget.value.match(/(\r\n|\n|\r)/g);
  var _addition = 0;

  if ( _newLines != null ) _addition = _newLines.length;

  // update UI
  if ( ( (event.currentTarget.value.length + _addition) - _maxLength ) > 0 ) {
    event.currentTarget.value = event.currentTarget.value.slice( 0, -( (event.currentTarget.value.length + _addition) - _maxLength ) );
  }
  
  if ( event.currentTarget.targetId )
    document.getElementById(event.currentTarget.targetId).innerHTML = _maxLength - (event.currentTarget.value.length + _addition);
};


/*
* visible API - Functionality
*/
function attachMaxInputValidation ( args ) {
  var el = document.getElementById( args.elId );
    el.targetId = args.targetId;
    el.onkeyup = _limitUserInput;
};

module.exports.attachMaxInputValidation = attachMaxInputValidation;