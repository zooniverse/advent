$(document).ready(function() {

      $('.door').hover(function(){
        $(this).find('.door_image').animate({ left : '-'+'0px' },{queue:false,duration:300});
      }, function(){
          var width = $(this).outerWidth();
          $(this).find('.door_image').animate({ left : '-'+width },{queue:false,duration:300});
      });

});
