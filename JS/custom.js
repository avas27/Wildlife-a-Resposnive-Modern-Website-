// var btn = document.getElementById("menuBut");
// btn.onclick = () => {
//   document.getElementById("navBg").classList.toggle("bg-light");
//   document.getElementById("mList").classList.toggle("mt-4");
// };

$(document).ready(function() {
  $(".bgg").waypoint(
    function(direction) {
      if (direction == "down") {
        $(".navbar").addClass("bg-light");
        $(".navbar").css("box-shadow", "0 1px 7px black");
      } else {
        $(".navbar").removeClass("bg-light");
        $(".navbar").css("box-shadow", "none");
      }
    },
    {
      offset: "250px"
    }
  );
});
