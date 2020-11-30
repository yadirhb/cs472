let loose = false;

$(function ($) {
  const boundaries = $(".boundary");
  $("#start").on("mouseover", function () {
    loose = false;
    boundaries.removeClass("youlose");
  });

  $("#end").on("mouseover", function () {
    if (loose) {
      boundaries.addClass("youlose");
      alert("Sorry, you lost. :-[");
    } else {
      alert("You won, :-]");
    }
  });

  boundaries.on("mouseover", function (arg) {
    loose = true;
    boundaries.addClass("youlose");
  });
  boundaries.on("mouseleave", function (arg) {
    boundaries.removeClass("youlose");
  });
});
