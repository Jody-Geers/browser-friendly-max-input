/*
"repo": "Jody-Geers/max-input",
"description": "browser fwiendly max input validation.",
*/


/**
* Browser friendly max input validation.
* @param {dom event} event - onkeyup event listener
* @access private
*/
function limitUserInput( event ) {
	
	var maxLength = event.currentTarget.maxLength;
	// include new lines as count of 2
	var newLines = event.currentTarget.value.match( /(\r\n|\n|\r)/g );
	var addition = 0;

	if ( newLines != null ) addition = newLines.length;

	// update UI
	if ( ( ( event.currentTarget.value.length + addition ) - maxLength ) > 0 ) {
		event.currentTarget.value = event.currentTarget.value.slice( 0, -( ( event.currentTarget.value.length + addition ) - maxLength ) );
	}

	if ( event.currentTarget.targetId )
		document.getElementById( event.currentTarget.targetId ).innerHTML = maxLength - ( event.currentTarget.value.length + addition );

};


/*
* visible API - Functionality
* @param {string} args.elId - The context element id.
* @param {string} args.targetId - The output ui element id for count.
* @access public
*/
function attachMaxInputValidation ( args ) {
	
	var el = document.getElementById( args.elId );
		el.targetId = args.targetId;
		el.onkeyup = limitUserInput;
	
};

module.exports.attachMaxInputValidation = attachMaxInputValidation;
