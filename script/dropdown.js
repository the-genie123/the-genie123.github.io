$(document).ready(function(){
  $("nav ul li").hover(function(){
    $(this).find("ul").stop().slideToggle(200);
  })
});

$(document).ready(function(){
    $(".bottombar a, .topbar a, .alt-content a").hover (function(){
        $(this).css("background-color", "grey");
        });
    $(".bottombar a, .topbar a, .alt-content a").mouseleave (function(){
        $(this).css("background-color", "");
        });
});
