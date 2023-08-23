(function() {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload"))
      return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
      s(e);
  new MutationObserver(e=>{
      for (const t of e)
          if (t.type === "childList")
              for (const r of t.addedNodes)
                  r.tagName === "LINK" && r.rel === "modulepreload" && s(r)
  }
  ).observe(document, {
      childList: !0,
      subtree: !0
  });
  function i(e) {
      const t = {};
      return e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials" ? t.credentials = "include" : e.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin",
      t
  }
  function s(e) {
      if (e.ep)
          return;
      e.ep = !0;
      const t = i(e);
      fetch(e.href, t)
  }
}
)();
(()=>{
  const o = document.querySelector(".js-menu-container")
    , n = document.querySelector(".js-open-menu")
    , i = document.querySelector(".js-close-menu")
    , s = document.querySelectorAll(".menu-nav-list a")
    , e = ()=>{
      const t = n.getAttribute("aria-expanded") === "true" || !1;
      n.setAttribute("aria-expanded", !t),
      o.classList.toggle("is-open");
      const r = t ? "enableBodyScroll" : "disableBodyScroll";
      bodyScrollLock[r](document.body)
  }
  ;
  n.addEventListener("click", e),
  i.addEventListener("click", e),
  s.forEach(t=>{
      t.addEventListener("click", e)
  }
  ),
  window.matchMedia("(min-width: 768px)").addEventListener("change", t=>{
      t.matches && (o.classList.remove("is-open"),
      n.setAttribute("aria-expanded", !1),
      bodyScrollLock.enableBodyScroll(document.body))
  }
  )
}
)();
const l = {
  modals: [...document.querySelectorAll("[data-modal]")],
  openBtns: document.querySelectorAll("[data-modal-open]"),
  closeBtns: document.querySelectorAll("[data-modal-close]"),
  form: document.querySelector('[name="order-form"]')
};
l.openBtns.forEach(o=>{
  o.addEventListener("click", c)
}
);
l.closeBtns.forEach(o=>o.addEventListener("click", c));
function c(o) {
  o.preventDefault(),
  Array.from(document.getElementsByTagName("form")).forEach(s=>{
      s == null || s.reset()
  }
  ),
  document.body.classList.toggle("body-stop");
  const {dataset: n} = o.currentTarget
    , i = Object.values({
      ...n
  });
  l.modals.map(s=>{
      s.dataset.modal === i[0] && s.classList.toggle("is-hidden")
  }
  )
}
const a = document.querySelectorAll('[name*="form"]')
, d = document.querySelectorAll("[data-modal]");
a.forEach(o=>o.addEventListener("submit", n=>{
  n.preventDefault(),
  d.forEach(i=>{
      n.target.name.includes(i.dataset.modal) && i.classList.toggle("is-hidden"),
      i.classList.contains("js-thanks") && i.classList.toggle("is-hidden")
  }
  )
}
));
new Swiper(".sellers-swiperbuy",{
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
      el: ".sellers-swiper-pagination",
      clickable: !0
  }
});
new Swiper(".myswipernav",{
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
      el: ".swiper-pagination",
      clickable: !0
  },
  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 18
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 16
      },
      1200: {
          slidesPerView: 3,
          spaceBetween: 28
      }
  }
});
new Swiper(".myswwiper",{
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
      el: ".swiper-pagination",
      clickable: !0
  },
  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 18
      },
      768: {
          slidesPerView: 2,
          spaceBetween: 16
      },
      1200: {
          slidesPerView: 4,
          spaceBetween: 18
      }
  }
});
(()=>{
  const o = {
      openVideoBtn: document.querySelector("[data-video-open]"),
      video: document.querySelector("[data-video]")
  };
  o.openVideoBtn.addEventListener("click", n);
  function n() {
      o.video.classList.toggle("video-is-hidden")
  }
}
)();
