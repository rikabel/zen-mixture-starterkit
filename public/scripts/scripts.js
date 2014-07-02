$(document).ready(function() {
	$('.portfolio-toggle').change(function() {
	    if($(this).val() == 'all-investments') {$('.portfolio-overview-wrapper .portfolio-thumbnail').removeClass("fadeOut").addClass("fadeIn").show();}
	    if($(this).val() == 'current-investments') {
	    	$('.portfolio-overview-wrapper .realised').removeClass("fadeIn").addClass("fadeOut").hide();
	    	$('.portfolio-overview-wrapper .current').removeClass("fadeOut").addClass("fadeIn").show();
	    } 
	    if($(this).val() == 'realised-investments') {
	    	$('.portfolio-overview-wrapper .current').removeClass("fadeIn").addClass("fadeOut").hide();
	    	$('.portfolio-overview-wrapper .realised').removeClass("fadeOut").addClass("fadeIn").show();
	    }
  }); 

	$("#megamenu").hide();
	$("#megamenu--toggle").hover(function() {
	 	$("#megamenu").stop(true,true).slideDown();
	}, function() {
		$("#megamenu").stop(true,true).delay(4000).slideUp();
	});
 });