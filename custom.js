
/*
  Project Name : weightLoss
  Author Company : Ewebcraft
  Project Date: 21 March, 2016
  Author Website : http://www.ewebcraft.com
  Author Email : ewebcraft@gmail.com
*/


(function($) {
  "use strict"; 
/* Smooth-Scroll */

    $(".scroll").click(function(event){
      event.preventDefault();
      $('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
    });

    /* Smooth-Scroll */
})(jQuery);

$(document).ready(function () {
    $('.contact-form').on('submit', function (event) {
      event.preventDefault();
	  
	  var curForm = jQuery(this);

	  $("<div />").addClass("formOverlay").appendTo('body');
	  
	  $.ajax({
		  url: 'saveMarketing.php', 
		  type: 'POST',
		  data: {
			  name: $('input[name="formInput[name]"]').val(),
			  phone: $('input[name="formInput[phone]"]').val(),
		  },
		  dataType: 'json',
		  success: function(result) {
			  var errorCodes = [500, 400];
			  
			    jQuery(curForm).prev('.expMessage').html('');
			    jQuery(curForm).find("div.formOverlay").remove();
				
				if (errorCodes.indexOf(result.code) !== -1) {
					jQuery(curForm).prev('.expMessage').html(result.error);
					$('.expMessage').css('display',"block");
				}
				
				if (result.code === 200) {
					window.location = 'confirmation.html';
				}
		  }});
      });

    $('#back').on('click', function (event) {
      event.preventDefault();
        window.location = 'index.html'; // index.php
    })
});