panel = function(num) {
	return {
		initialize: function() {
			var div = $('<div>').addClass('col-sm-2 remove-box').text(num).appendTo('#panel-box');
			div.click(function() {
				this.remove();
			});
		}
	}
}