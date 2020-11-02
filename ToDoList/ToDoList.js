$("#add").on("click", function () {
  $("input").slideToggle();
});

$("input").keypress(function (event) {
  if (event.which === 13) {
    var toDo =
      "<li class=''> <span>X</span> &nbsp &nbsp" + $(this).val() + "</li>";
    $(this).val("");
    $("ul").append(toDo);
  }
});

$("ul").on("click", "li", function () {
  $(this).toggleClass("strike");
});

// $("span").hover(function () {
//   $(this).parent().fadeout();
// });
function remove() {
      $(this).remove();
    }

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(remove);
  event.stopPropagation();
});
