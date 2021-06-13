// let header_bg = document.querySelector("header");
// let menu_mobile = document.querySelector(".menu-mobile");
// let mobile_icon = document.querySelector("#menu-icon-mobile");

// mobile_icon.addEventListener("click", function () {
//   menu_mobile.classList.toggle("active");
//   header_bg.classList.toggle("active");
//   document.querySelector("body").classList.toggle("active");
// });
// window.addEventListener("resize", function () {
//   var w = window.innerWidth;
//   if (w > 991) {
//     menu_mobile.classList.remove("active");
//     header_bg.classList.remove("active");
//     document.querySelector("body").classList.remove("active");
//   }
// });

let header_bg = $("header");
let menu_mobile = $(".menu-mobile");
let mobile_icon = $("#menu-icon-mobile");
let body = $("body");
mobile_icon.click(function () {
  menu_mobile.toggleClass("active");
  header_bg.toggleClass("active");
  body.toggleClass("active");
});
$(window).resize(function () {
  let wDevice = window.innerWidth;
  console.log(wDevice);
  if (wDevice > 991) {
    menu_mobile.remove("active");
    header_bg.remove("active");
    body.remove("active");
  }
});

//================gsap=================================
function animateFrom(elem, direction) {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -200;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 200;
    y = 0;
  }
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: "expo",
      overwrite: "auto",
    }
  );
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
    hide(elem);

    ScrollTrigger.create({
      trigger: elem,
      onEnter: function () {
        animateFrom(elem);
      },
      onEnterBack: function () {
        animateFrom(elem, -1);
      },
      onLeave: function () {
        hide(elem);
      },
    });
  });
});
