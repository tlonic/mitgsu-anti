(function ($, root, undefined) {

	$(function () {

		'use strict';

		handleAria($);
		// DOM ready, take it away

	});

})(jQuery, this);

function handleAria($) {
	$("#leftNav li.current_page_item").attr("aria-current", true);
}
