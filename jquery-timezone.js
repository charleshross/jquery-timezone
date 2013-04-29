/**
 * jQuery-TimeZone
 * Version: 1.0
 * Build Date: 2013-04-28
 * Copyright (c) 2013, Charles Ross (https://github.com/charleshross). All rights reserved.
 * License: Private Software
 * Website: https://github.com/charleshross/
 * Prerequisites : jQuery, Date.js
 */

(function( $ ) {
	$.fn.timezone = function( options ) {
	
		function get_time_zone_offset() {
			var current_date = new Date();
			var gmt_offset = current_date.getTimezoneOffset() / 60;
			return gmt_offset;
		}
		
		function timezone() {
			
			var b = new Date;
			e = new Date(b.getFullYear(), 0, 1);
			b = new Date(b.getFullYear(), 5, 1);
		
			e = Math.round(e.getTimezoneOffset());
			b = Math.round(b.getTimezoneOffset());
		
			time = (e + ',' + b);
		
			if (time == '660,660') {
				return('Pacific/Midway');
			}
		
			if (time == '600,600') {
				return('Pacific/Honolulu');
			}
		
			if (time == '570,570') {
				return('Pacific/Marquesas');
			}
		
			if (time == '540,480') {
				return('America/Anchorage');
			}
		
			if (time == '480,420') {
				return('America/Los_Angeles');
			}
		
			if (time == '420,360') {
				return('America/Denver');
			}
		
			if (time == '420,420') {
				return('America/Phoenix');
			}
		
			if (time == '360,300') {
				return('America/Chicago');
			}
		
			if (time == '360,360') {
				return('America/Belize');
			}
		
			if (time == '300,240') {
				return('America/New_York');
			}
		
			if (time == '300,300') {
				return('America/Bogota');
			}
		
			if (time == '270,270') {
				return('America/Caracas');
			}
		
			if (time == '240,180') {
				return('America/Halifax');
			}
		
			if (time == '180,240') {
				return('America/Cuiaba');
			}
		
			if (time == '240,240') {
				return('America/La_Paz');
			}
		
			if (time == '210,150') {
				return('America/St_Johns');
			}
		
			if (time == '180,180') {
				return('America/Argentina/Buenos_Aires');
			}
		
			if (time == '120,180') {
				return('America/Sao_Paulo');
			}
		
			if (time == '180,120') {
				return('America/Miquelon');
			}
		
			if (time == '120,120') {
				return('America/Noronha');
			}
		
			if (time == '60,60') {
				return('Atlantic/Cape_Verde');
			}
		
			if (time == '60,0') {
				return('Atlantic/Azores');
			}
		
			if (time == '0,-60') {
				return('Europe/London');
			}
		
			if (time == '0,0') {
				return('Atlantic/Reykjavik');
			}
		
			if (time == '-60,-120') {
				return('Europe/Amsterdam');
			}
		
			if (time == '-60,-60') {
				return('Africa/Algiers');
			}
		
			if (time == '-120,-60') {
				return('Africa/Windhoek');
			}
		
			if (time == '-120,-180') {
				return('Europe/Athens');
			}
		
			if (time == '-120,-120') {
				return('Africa/Johannesburg');
			}
		
			if (time == '180,-240') {
				return('Africa/Nairobi');
			}
		
			if (time == '-180,-180') {
				return('Africa/Nairobi');
			}
		
			if (time == '-210,-270') {
				return('Asia/Tehran');
			}
		
			if (time == '-240,-240') {
				return('Europe/Moscow');
			}
		
			if (time == '-240,-300') {
				return('Asia/Yerevan');
			}
		
			if (time == '-270,-270') {
				return('Asia/Kabul');
			}
		
			if (time == '-300,-360') {
				return('Asia/Yekaterinburg');
			}
		
			if (time == '-300,-300') {
				return('Asia/Tashkent');
			}
		
			if (time == '-330,-330') {
				return('Asia/Kolkata');
			}
		
			if (time == '-345,-345') {
				return('Asia/Kathmandu');
			}
		
			if (time == '-360,-360') {
				return('Asia/Dhaka');
			}
		
			if (time == '-360,-420') {
				return('Asia/Novosibirsk');
			}
		
			if (time == '-390,-390') {
				return('Asia/Rangoon');
			}
		
			if (time == '-420,-420') {
				return('Asia/Bangkok');
			}
		
			if (time == '-420,-480') {
				return('Asia/Krasnoyarsk');
			}
		
			if (time == '-480,-480') {
				return('Asia/Hong_Kong');
			}
		
			if (time == '-480,-540') {
				return('Asia/Irkutsk');
			}
		
			if (time == '-540,-540') {
				return('Asia/Tokyo');
			}
		
			if (time == '-540,-600') {
				return('Asia/Yakutsk');
			}
		
			if (time == '-630,-570') {
				return('Australia/Adelaide');
			}
		
			if (time == '-570,-570') {
				return('Australia/Darwin');
			}
		
			if (time == '-660,-600') {
				return('Australia/Sydney');
			}
		
			if (time == '-600,-660') {
				return('Asia/Vladivostok');
			}
		
			if (time == '-660,-720') {
				return('Asia/Magadan');
			}
		
			if (time == '-690,-690') {
				return('Pacific/Norfolk');
			}
		
			if (time == '-660,-720') {
				return('Asia/Anadyr');
			}
		
			if (time == '-780,-720') {
				return('Pacific/Auckland');
			}
		
			if (time == '-825,-765') {
				return('Pacific/Chatham');
			}
		
			if (time == '-780,-780') {
				return('Pacific/Tongatapu');
			}
		
			if (time == '-840,-840') {
				return('Pacific/Kiritimati');
			}
			
		}
		
		var zone = timezone();
		
		this.val(zone);
			

	};
})( jQuery );