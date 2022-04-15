( function( $ ) {
	$(document).ready(function() {
		$('.tooltip').tooltipster({
			// trigger: 'click',
			side: ['right', 'top']
		});
		$(".nav-opener").click(function(e) {
			e.preventDefault();
			$('body').toggleClass('nav-active');
			$('.back-link').hide();
			$(".menu-item-has-children").removeClass("active");
		});

		// download modal
// 		var $download = $('.download-block');	
// 		$download.find('.open-btn').click(function(event) {
			$('.download-block .open-btn').click(function(event) {
			event.preventDefault();
			var formId = "#" + $(this).closest('.download-block').find('.wpcf7').attr('id');
			var $modal = $(this).parent('.download-block').find('.download-modal');
			$modal.find('.content-box').show();
			$modal.find('.thanks-box').hide();
			$('body').addClass('fixed');
			$modal.fadeIn();
//   			var wpcf7Elm = document.querySelector('.wpcf7');
			var wpcf7Elm = document.querySelector(formId);	
		    wpcf7Elm.addEventListener( 'wpcf7mailsent', function( event ) {
				$modal.find('.content-box').hide();
				$modal.find('.thanks-box').show();
		    }, false );
		});
// 		$download.find('.close-btn').click(function(event) {
			$('.download-block .close-btn').click(function(event) {
			event.preventDefault();
			var $modal = $(this).closest('.download-block').find('.download-modal');
			$modal.find("input[type=text], input[type=email]").val("");
			$('body').removeClass('fixed');
			$modal.fadeOut();
		});
// 		$download.find('.next-btn.close').click(function(event) {
		$('.download-block .next-btn.close').click(function(event) {
			var $modal = $(this).closest('.download-block').find('.download-modal');
			$('body').removeClass('fixed');
			$modal.fadeOut();
		});

	});
	$('.copy-post-link').on('click', function(event) {
		event.preventDefault();
		var $this = $(this);
		copyToClipboard($this);
		$this
		.tooltipster({trigger: 'click'})
		.tooltipster('content', 'Link copied!')
		.tooltipster('open');

		setTimeout(function() {
			$this.tooltipster('destroy');
		}, 1500);
	});

	function copyToClipboard(element) {
		var $temp = $("<input>");
		$("body").append($temp);
		$temp.val($(element).data('post-link')).select();
		document.execCommand("copy");
		$temp.remove();
	}

	$(window).scroll(function () {
		$(window).scrollTop() > 150 ? $("#header").addClass("scroll") : $("#header").removeClass("scroll");

	});

	$("#header").prepend('<div class="back-link"></div>');
	$('.menu-item-has-children > a').on('click', function(event) {

		if ($(window).innerWidth() <= 1100) {
			event.preventDefault();
			$('.back-link').text($(this).text()).show();
			$(this).closest('li').addClass('active');
		}
	});

	$('.back-link').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		$(this).hide();
		$('.menu-item-has-children').removeClass('active');
	});

	$(window).resize(function () {
		if ($(window).innerWidth() > 1100) {
			$('body').removeClass('nav-active');
			$('.back-link').hide();
			$(".menu-item-has-children").removeClass("active");
		}

	});

	$('.fancy-book-a-demo').on('click', 'a', function(event) {
		event.preventDefault();
		$.fancybox.open({
			src  : 'https://calendly.com/team-lokalise/?embed_domain=lokalise.com&embed_type=PopupText',
			type : 'iframe',
			opts : {
				// css : {
				// 	width : '600px'
				// },
				afterShow : function( instance, current ) {
					// console.info( 'done!' );
				}
			}
		});
	});
	
	// Open contact popup
	$('.open-contact a').on('click', function(e) {
		e.preventDefault();
		Intercom("show");
	});


}( jQuery ) );
