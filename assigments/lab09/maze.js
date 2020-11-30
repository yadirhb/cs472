let loose = false;

$(function ($) {
  const status = $("#status");
  const boundaries = $(".boundary");
  $("#start").on("mouseover", function () {
    loose = false;
    boundaries.removeClass("youlose");
    status.text("");
  });

  $("#end").on("mouseover", function () {
    if (loose) {
      boundaries.addClass("youlose");
      status.text("Sorry, you lost. :-[");
    } else {
      status.text("You won, :-]");
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
