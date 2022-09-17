/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'OOC-WP-PF\'">' + entity + '</span>' + html;
	}
	var icons = {
			'oocwp-standard' : '&#xe000;',
			'oocwp-aside' : '&#xe001;',
			'oocwp-image' : '&#xe002;',
			'oocwp-gallery' : '&#xe003;',
			'oocwp-link' : '&#xe004;',
			'oocwp-status' : '&#xe005;',
			'oocwp-quote' : '&#xe006;',
			'oocwp-chat' : '&#xe007;',
			'oocwp-video' : '&#xe008;',
			'oocwp-audio' : '&#xe009;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/oocwp-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};