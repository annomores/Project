"use strict";

$(document).ready(function () {

	console.log("hello");
	const isMobile = {
		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (
				isMobile.Android() ||
				isMobile.BlackBerry() ||
				isMobile.iOS() ||
				isMobile.Opera() ||
				isMobile.Windows());
			}
		}
		if (isMobile.any()) {
			$('body').addClass('_touch');
	
			const iconMenu = $('.menu__icon');
			const menuBody = $('.menu__body');
			iconMenu.click(function () {
				menuBody.toggleClass("_active");
			});
	
			const menuArrows = $('.menu__arrow');
			menuArrows.each(function () {
				$(this).click(function () {
					$(this).parent().toggleClass("_active");
				});
			});
		} else {
			$('body').addClass('_pc');
		}
		
