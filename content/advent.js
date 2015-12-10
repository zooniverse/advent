$(document).ready(function() {

  window.now = new Date()
  //window.now = new Date(2015, 11, 25);

  if (now.getMonth() == 11) {
    for (var i = 1; i < 25 && i < now.getDate(); i++) {
      $("#d" + i + " .content").html(" \
        <div class='door_image_open'> \
          <a href='/days/" + i + "/?foo=1' class='thickbox' title='Day " + i + "'> \
           <img src='http://zooniverse-resources.s3.amazonaws.com/advent/" + i  +".jpg'> \
          </a> \
        </div>")
    }

    $("#d" + now.getDate() + " .content").html(" \
      <div class='door_image'> \
        <a href='/days/" + i + "/?foo=1' class='thickbox' title='Day " + i + "'> \
         <img src='http://zooniverse-resources.s3.amazonaws.com/advent/" + i  +".jpg'> \
        </a> \
      </div>")
  } else {
    console.log("Not december.")
  }

  $('.door').hover(function(){
    $(this).find('.door_image').animate({ left : '-'+'0px' },{queue:false,duration:300});
  }, function(){
      var width = $(this).outerWidth();
      $(this).find('.door_image').animate({ left : '-'+width },{queue:false,duration:300});
  });



});
