console.log("aaa");

//375px 未満は JS で viewport を固定する
(function () {
  const viewport = document.querySelector('meta[name="viewport"]');
  function switchViewport() {
    const value =
      window.outerWidth > 375
        ? "width=device-width,initial-scale=1"
        : "width=375";
    if (viewport.getAttribute("content") !== value) {
      viewport.setAttribute("content", value);
    }
  }
  addEventListener("resize", switchViewport, false);
  switchViewport();
})();

//スクロールアニメーション
jQuery.fn.acs = function (options) {
  const elements = this;
  const defaults = {
    screenPos: 0.8,
    className: "is-animated",
  };
  const setting = jQuery.extend(defaults, options);
  jQuery(window).on("load scroll", function () {
    add_class_in_scrolling();
  });
  function add_class_in_scrolling() {
    const winScroll = jQuery(window).scrollTop();
    const winHeight = jQuery(window).height();
    const scrollPos = winScroll + winHeight * setting.screenPos;

    if (elements.offset().top < scrollPos) {
      elements.addClass(setting.className);
    }
  }
};
jQuery('.anm, [class*="anm-"], .anm-list > *').each(function () {
  jQuery(this).acs();
});
jQuery.fn.anmDelay = function (options) {
  const elements = this;
  const defaults = {
    delay: 0.2,
    property: "animation-delay",
  };
  const setting = jQuery.extend(defaults, options);
  const index = elements.index();
  const time = index * setting.delay;
  elements.css(setting.property, time + "s");
};
jQuery(".anm-list > *").each(function () {
  jQuery(this).anmDelay();
});

// ページ内スムーズスクロール
jQuery(function () {
  var windowWidth = jQuery(window).width();
  var headerHight = 100; //ヘッダー高さ
  jQuery('a[href^="#"]').click(function () {
    var speed = 1000;
    var href = jQuery(this).attr("href");
    var target = jQuery(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - headerHight;
    jQuery("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// ハンバーガーメニュー
jQuery(".js-drawer-button").click(function () {
  jQuery(".js-drawer-button").toggleClass("is-open");
  jQuery(".js-drawerMenu").fadeToggle();
  jQuery("html").toggleClass("is-fixed");
});
jQuery(".js-drawerMenu li a").click(function () {
  jQuery(".js-drawer-button").trigger("click");
});

//トップへ戻るスクロール検知
jQuery(window).on("scroll", function () {
  if (400 < jQuery(this).scrollTop()) {
    jQuery(".js-top").addClass("is-show");
  } else {
    jQuery(".js-top").removeClass("is-show");
  }
});
