//Business logic portion
function leapYear(year) {
  if ((year %4 === 0) && (year %100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
   return false; 
  }
}

//User interface logic portion
$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    event.preventDefault();
    const year = parseInt($("input#year").val());
    const result = leapYear(year);
  
    $(".year").text(year);

    if (!result){
      $(".not").text("not");
    }else{
      $(".not").text("");
    }

    $("#result").show();
  });
});