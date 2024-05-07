(function () {

  var t = ".progress-container .card-item"
  , e = ".progress-bar"
  , r = 5e3
  , n = []
  , o = document.querySelectorAll(t);
  if (o.length) {
    for (var i = 0; i < o.length; i++)
        n.push({
            card: o[i],
            progressBar: o[i].querySelector(e)
        });
    var s = performance.now()
      , a = 0;
    n[a].card.classList.add("active"),
    n[a].progressBar.classList.add("active"),
    window.requestAnimationFrame((function o(i) {
        var c, l;
        i - s > r && (null === (c = document.querySelector("".concat(t, ".active"))) || void 0 === c || c.classList.remove("active"),
        null === (l = document.querySelector("".concat(t, " ").concat(e, ".active"))) || void 0 === l || l.classList.remove("active"),
        s = performance.now(),
        ++a === n.length && (a = 0),
        n[a].card.classList.add("active"),
        n[a].progressBar.classList.add("active")),
        window.requestAnimationFrame(o)
    }
    )),
    $(window).width() < 769 ? jQuery(".progress-container").slick({
    dots: !0,
    infinite: !0,
    fade: !0,
    cssEase: "linear",
    speed: 1e3,
    arrows: !1,
    autoplay: !0
  }) : jQuery(".progress-container .slick-slider").slick("unslick")
  }

})();