(function(){
	$(function () {
		
		// html5 placeholder fix for IE and Opera on load
		if (typeof document.createElement('input').placeholder == "undefined" || window.opera) {
			$('[placeholder]').each(function() {
				var input = $(this);
				var label = placeholder(input, 'placeholder');
				$(this).attr('placeholder', '');
	
				input
					.focus(function() {
						label.hide();
					})
					.blur(function() {
						if (input.val().length == 0) {
							label.show();
						}
					});
			});
		}
	
		function placeholder(input, placeholder) {
			
			var label = $('<label/>', {
				'class': 'placeholder',
				text: input.attr(placeholder)
			})
			.insertBefore(input)
			.css('top', input.position().top)
			.css('left', input.position().left)
			.click(function(){
				input.focus();
			});
	
			if (input.val().length != 0) label.hide();
			return label;
		}
	
		
	});
})();

// plugins
(function( $ ) {
	
	/**
	 * html5 placeholder fix for IE and Opera on element show
	 */
	$.fn.positionPH = function () {
		if (typeof document.createElement('input').placeholder == "undefined" || window.opera) {
			this.find('label.placeholder').each(function(){
				var input = $(this).next();
				$(this)
					.css('top', input.position().top)
					.css('left', input.position().left);
			});
		}
	}
})(jQuery);