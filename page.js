page = (function() {
	var _panelNumber = 0;
	function createButton() {
		var button = $('<button>').addClass('btn btn-lg add-button').text('Add Panel').appendTo('#button-box');
		button.click(function() {
			var newPanel = new panel(_panelNumber);
			newPanel.initialize();
			_panelNumber++;
		});
	}
	function createHeader() {

	}
	return {
		initialize: function() {
			createHeader();
			createButton();
		}
	}
})();