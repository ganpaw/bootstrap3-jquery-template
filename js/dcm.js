//Custom JavaScript for the Menu Toggle
$(".navbar-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
  //  $("#wrapper").toggleClass("active");
  //alert($("#wrapper").attr("class"));
  if ($("#wrapper").attr("class") == "active") {
    console.log("The bar is active now");
    $(".navbar-toggle").addClass("inverse-navbar");
    //$('html').css('overflow', 'hidden').css('height','100%');
  } else {
    console.log("The bar is deactive now");
    $(".navbar-toggle").removeClass("inverse-navbar");
  }
});
$("#back-to-content").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
$("#back-to-content").scroll(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});
