# browser-friendly-max-input

  validates client input char amount and updates ui.

## Installation

  Install with [component(1)](http://component.io):

    $ component install Jody-Geers/browser-friendly-max-input

## API

	<!-- example ui -->
	textarea <span id="output-area">500</span> characters remaining<br/>
	<textarea class="textarea" maxlength="500" id="input-area" ></textarea>
	
	<script>
		var maxInputVal = require('Jody-Geers-browser-friendly-max-input');
		
		// attach behaviour
		// output 'targetId' optional
		maxInputVal.attachMaxInputValidation({
			elId : "input-area",
			targetId : "output-area"
		});
	</script>


## License

  MIT
