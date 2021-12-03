
/*
$(".clickImage").click(function() {
  console.log($(this).attr("data-full"));
  $("#full-image").attr("src", $(this).attr("data-full"));
  $('#image-viewer').show();
  e.stopPropagation();
});

$("#image-viewer .close").click(function() {
  $('#image-viewer').hide();
});
*/

$(document).click(function(event) {
  var clazz = $(event.target).attr('class');
  if (clazz != null && clazz.length > 0 && clazz.includes('clickImage')) {
    $("#full-image").attr("src", $(event.target).attr("data-full"));
    $('#image-viewer').show();
  } else {
    $('#image-viewer').hide();
  }
  //$('#image-viewer').hide();
});

/*
var handler = function(event){
  console.log(event.target);
  // if the target is a descendent of container do nothing
  if($(event.target).is(".container, .container *")) return;

  // remove event handler from document
  $(document).off("click", handler);

  // dostuff
}

$(document).on("click", handler);*/