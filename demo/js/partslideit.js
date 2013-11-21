/*

PARTSLIDEIT - Partially Slide It

Ver.0.1

This is my first jQuery plugins. It partially slide your DIV childs from a container from top, bottom, left or right.

http://www.rosaimantoro.com/jqplugins/partslideit

*/

(function() {

	$.fn.partslidit = function(options) {

		var dcek = 0;

		var sett = $.extend({
            pos_start: 2000,
            timing: 1000,
            timeintv: 300,						// timing interval beetwen div
            direction: 'vertical'			// vertical | horizontal
        }, options );

		return this.children(".slidit").each(function() {
			endpos = $(this).offset();

			if(sett.direction=='vertical') {
				$(this).offset({ top: sett.pos_start, left: endpos.left});
				//slide to the endpos
				$(this).animate({
						top: "" + (endpos.top - endpos.top) + ""
					}
					, sett.timing
					, function() {
						// complete
				});
			} else if(sett.direction=='horizontal') {
				$(this).offset({ top: endpos.top, left: sett.pos_start});
				//slide to the endpos

				$(this).animate({
						left: "" + (endpos.left - endpos.left) + ""
					}
					, sett.timing
					, function() {
						// complete
				});
			}

			sett.timing += sett.timeintv;
		});

	}

}(jQuery));