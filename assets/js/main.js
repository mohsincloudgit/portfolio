gsap.from("#box",{
  x:200, //x axis pe move krdein px pe
  // y:100, //x axis pe move krdein px pe
  duration:2, 
  delay:1,
  borderRadius:50
})
gsap.from("#box-inner",{
  x:500, //x axis pe move krdein px pe
  // y:300, //x axis pe move krdein px pe
  duration:2, 
  rotate:360,
  delay:1
})
gsap.from("#box-inner-2",{
  x:500, //x axis pe move krdein px pe
  // y:300, //x axis pe move krdein px pe
  duration:2, 
  rotate:360,
  delay:1
})
gsap.from("#hero-box",{
  // x:-500, //x axis pe move krdein px pe
  y:-500, //x axis pe move krdein px pe
  duration:2, 
  delay:1,
  borderRadius:50
})
gsap.from("#hero-box-inner",{
  x:500, //x axis pe move krdein px pe
  // y:300, //x axis pe move krdein px pe
  duration:2, 
  rotate:360,
  delay:1
})

// preloader js

// var progress = 0;

//       document.onreadystatechange = function () {
//         if (document.readyState === "interactive") {
//           var allElement = $("*");
//           var length = allElement.length;
//           for (var i = 0; i < length; i++) {
//             set_element(allElement[i], length);
//           }
//         }
//       }

//       function set_element(element, totalElement) {
//         var percentage = 100 / totalElement;
//         if ($(element).length === 1) {
//           $("#fill").animate({ width: progress + percentage + "%" }, 500, function () {
//             if (document.getElementById("fill").style.width === "100%") {
//               $(".loadmain").fadeOut(500);
//             }
//           });
//           progress += percentage;
//         }
//       }

      $(document).ready(function() {
        $('.navdesktop').hover(
            function() {
            $(this).addClass('show');
            $(this).find('.dropdown-navdesktop').first().addClass('show');
            },
            function() {
            $(this).removeClass('show');
            $(this).find('.dropdown-navdesktop').first().removeClass('show');
            }
        );
        });

// Sticky header

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})

// end Sticky header