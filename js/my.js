$("#go").click(function(){
  var dest = parseInt($("#a").css("left").replace("px", "")) + 100;
    if (dest > 500) {
        $("#a").animate({
            marginLeft: "10px"
          }, 500 );
    }
    else {
      $("#a").animate({
        marginLeft: dest + "px"
      }, 500 );
    }
});
