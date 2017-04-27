$(document).ready(function(){
  $("nav ul li").hover(function(){
    $(this).find("ul").stop().fadeToggle(400);
  })
});
