(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    RXBc: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, "query", function () {
          return c;
        });
      var n = i("Wbzz"),
        a = i("q1tI"),
        p = i.n(a),
        l = i("vOnD"),
        d = i("7oih"),
        o = "2560px",
        m = {
          mobileS: "(min-width: " + "320px" + ")",
          mobileM: "(min-width: " + "375px" + ")",
          mobileL: "(min-width: " + "425px" + ")",
          tablet: "(min-width: " + "768px" + ")",
          laptop: "(min-width: " + "1024px" + ")",
          laptopL: "(min-width: " + "1440px" + ")",
          desktop: "(min-width: " + o + ")",
          desktopL: "(min-width: " + o + ")",
        },
        r = l.b.main.withConfig({
          displayName: "pages__IndexWrapper",
          componentId: "sc-1kdlu6i-0",
        })([""]),
        s = l.b.div.withConfig({
          displayName: "pages__PostWrapper",
          componentId: "sc-1kdlu6i-1",
        })([""]),
        c =
          ((t.default = function (e) {
            var t = e.data,
              i = l.b.h2.withConfig({
                displayName: "pages__Header",
                componentId: "sc-1kdlu6i-2",
              })(
                ["@media ", "{font-size:20px;}@media ", "{font-size:32px;}"],
                m.mobileL,
                m.laptop
              );
            return p.a.createElement(
              p.a.Fragment,
              null,
              p.a.createElement(
                d.a,
                null,
                p.a.createElement(
                  r,
                  null,
                  t.allMdx.nodes.map(function (e) {
                    var t = e.id,
                      a = e.frontmatter,
                      l = e.fields;
                    return p.a.createElement(
                      s,
                      { key: t },
                      p.a.createElement(
                        n.a,
                        { to: a.published ? l.slug : "/" },
                        p.a.createElement(i, null, a.title[0] + "-" + a.title)
                      )
                    );
                  })
                )
              )
            );
          }),
          "3494160287");
    },
  },
]);
//# sourceMappingURL=component---src-pages-index-js-773163c4c281ec5d5bc7.js.map
