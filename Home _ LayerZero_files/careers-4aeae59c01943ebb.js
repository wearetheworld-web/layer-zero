;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [698],
  {
    6825: function (t, e, r) {
      'use strict'
      r.d(e, {
        M: function () {
          return l
        }
      })
      var n = r(2809),
        a = r(37),
        i = r(9711),
        o = r(6038),
        s = r(7294),
        c = r(131),
        m = r(2757),
        p = r(7946),
        u = r(946)
      o.ZP.registerPlugin(m.SplitText), o.ZP.registerPlugin(p.ScrambleTextPlugin)
      var l = function () {
          var t = (0, s.useRef)([]),
            e = (0, c.YD)({ triggerOnce: !0, threshold: 0.25 }),
            r = (0, i.Z)(e, 2),
            n = r[0],
            a = r[1],
            o = (0, u.e)().hasRouted,
            m = (0, s.useMemo)(function () {
              return (
                (t.current = []),
                function (e) {
                  e && t.current.push(e)
                }
              )
            }, [])
          return (
            (0, s.useEffect)(
              function () {
                a &&
                  d(
                    t.current.filter(function (t) {
                      return !!t
                    }),
                    o
                  )
              },
              [a]
            ),
            [n, m]
          )
        },
        d = function (t, e) {
          t.forEach(function (t, r) {
            switch (t.getAttribute('data-type')) {
              case 'title':
                g(t, r, e)
                break
              case 'text':
                !e && f(t, r, e)
            }
          })
        },
        g = function (t, e, r) {
          var n = (r ? 0 : 0.2) + 0.05 * e
          new m.SplitText(t, { charsClass: 'js-char', type: 'lines, chars' }).lines.forEach(function (r, i) {
            var s = (0, a.Z)(r.querySelectorAll('.js-char'))
            e % 2 !== 0 && s.reverse(),
              o.ZP.set(s, { opacity: 0 }),
              o.ZP.set(t, { opacity: 1 }),
              s.forEach(function (t, e) {
                0 === e
                  ? o.ZP.set(t, { backgroundColor: '#ffffff', color: 'transparent', delay: 0, opacity: 1 })
                  : o.ZP.set(t, { backgroundColor: '#ffffff', color: 'transparent', delay: 0.05 * e + 0.15 * i + n, opacity: 1 }),
                  o.ZP.set(t, { backgroundColor: 'transparent', color: '#fff', delay: 0.065 * e + 0.15 * i + n })
              })
          })
        },
        f = function (t, e, r) {
          new m.SplitText(t, { type: 'lines' }).lines.forEach(function (t, e) {
            var a
            o.ZP.set(t, { opacity: 0 })
            var i = (r ? 0.2 : 0.4) + 0.05 * e,
              s = t.textContent
            o.ZP.to(t, {
              duration: 1,
              scrambleText:
                ((a = { tweenLength: !1, revealDelay: i }),
                (0, n.Z)(a, 'tweenLength', !1),
                (0, n.Z)(a, 'rightToLeft', e % 2 !== 0),
                (0, n.Z)(a, 'text', s),
                (0, n.Z)(a, 'chars', ' '),
                (0, n.Z)(a, 'speed', 0.05),
                a)
            }),
              o.ZP.set(t, { opacity: 1, delay: 0.2 }),
              2 === e && (o.ZP.set(t, { opacity: 0, delay: 0.6 }), o.ZP.set(t, { opacity: 1, delay: 0.7 }))
          }),
            o.ZP.set(t, { opacity: 1 })
        }
    },
    9022: function (t, e, r) {
      'use strict'
      r.r(e),
        r.d(e, {
          default: function () {
            return S
          }
        })
      var n = r(266),
        a = r(809),
        i = r.n(a),
        o = r(9669),
        s = r.n(o),
        c = r(3685),
        m = r(9908),
        p = r(9711),
        u = r(6038),
        l = r(7946),
        d = r.n(l),
        g = r(1465),
        f = r.n(g),
        h = r(7294),
        b = r(5944)
      u.ZP.registerPlugin(d())
      var y = {
          name: '1xw8hb8',
          styles:
            'display:grid;grid-template-columns:repeat(10, minmax(0, 1fr));column-gap:0.75rem;--tw-bg-opacity:1;background-color:rgba(20, 20, 20, var(--tw-bg-opacity));padding:1.5rem;margin-bottom:0.5rem;@media (min-width: 768px){padding:0px;padding-top:2.25rem;padding-bottom:2.25rem;}@media (min-width: 1920px){margin-bottom:0.75rem;padding-top:2.75rem;padding-bottom:2.75rem;}'
        },
        x = {
          name: '1yizt1e',
          styles:
            'grid-column:span 10 / span 10;margin-bottom:0.5rem;@media (min-width: 768px){grid-column:span 5 / span 5;padding-left:2.75rem;margin-bottom:0px;}@media (min-width: 1920px){padding-left:3rem;}'
        },
        Z = {
          name: 'da8rm0',
          styles:
            'opacity:0.6;grid-column:span 10 / span 10;margin-bottom:0.25rem;@media (min-width: 768px){grid-column:span 3 / span 3;margin-bottom:0px;}'
        },
        w = {
          name: 'wudewp',
          styles:
            'opacity:0.6;grid-column:span 10 / span 10;@media (min-width: 768px){grid-column:span 2 / span 2;padding-right:2.75rem;}@media (min-width: 1920px){padding-right:3rem;}'
        }
      function v(t) {
        var e = t.career,
          r = t.category,
          n = f()(),
          a = (0, h.useRef)(),
          i = (0, h.useState)(''),
          o = i[0],
          s = i[1]
        ;(0, h.useEffect)(function () {
          s(a.current.textContent)
        }, [])
        var c = (0, h.useCallback)(
            function () {
              n || a.current.textContent != o || u.ZP.to(a.current, { duration: 0.5, scrambleText: { speed: 1 } })
            },
            [o, n]
          ),
          m = (0, h.useCallback)(
            function () {
              n || (a.current.textContent = o)
            },
            [o, n]
          )
        return (0, b.BX)('a', {
          href: e.url,
          target: '_blank',
          rel: 'noopener nofollow noreferrer',
          css: y,
          onMouseEnter: c,
          onMouseLeave: m,
          children: [
            (0, b.tZ)('span', { className: 'text-16 is-uppercase', css: x, ref: a, children: e.title }),
            (0, b.tZ)('span', { className: 'text-12', css: Z, children: r }),
            (0, b.tZ)('span', { className: 'text-12', css: w, children: e.location })
          ]
        })
      }
      var P = r(6825)
      var k = (0, r(2192).Z)('section', { target: 'e8lddio0' })({
        name: 'exfakx',
        styles:
          'article{&:last-of-type{margin:0;}a{transition:background-color 0.3s ease;&:hover{background-color:#222222;}&:last-of-type{margin:0;}}}'
      })
      var _ = {
          name: '1janxkb',
          styles:
            'padding-top:7rem;padding-bottom:6rem;@media (min-width: 768px){padding-bottom:13rem;}@media (min-width: 1920px){padding-top:9rem;padding-bottom:15rem;}'
        },
        C = {
          name: '1hztrum',
          styles:
            'grid-column:span 10 / span 10;margin-bottom:2rem;@media (min-width: 768px){grid-column:span 5 / span 5;grid-column-start:1;margin-bottom:2.5rem;}@media (min-width: 1920px){margin-bottom:3rem;}'
        },
        E = {
          name: '13sg3l2',
          styles:
            'grid-column:span 10 / span 10;text-align:justify;margin-bottom:5rem;@media (min-width: 768px){grid-column:span 3 / span 3;grid-column-start:1;margin-bottom:10rem;}@media (min-width: 1920px){margin-bottom:13rem;}'
        },
        N = {
          name: '1rdooht',
          styles:
            'grid-column:span 10 / span 10;text-align:center;--tw-bg-opacity:1;background-color:rgba(20, 20, 20, var(--tw-bg-opacity));padding:2.5rem'
        },
        j = { name: 'gi7phd', styles: 'grid-column:span 10 / span 10;margin-bottom:4rem;@media (min-width: 768px){margin-bottom:7rem;}' },
        T = { name: '3ro1ko', styles: 'margin-bottom:1.75rem' }
      function L(t) {
        var e = t.jobs,
          r = t.error,
          n = (0, P.M)(),
          a = (0, p.Z)(n, 2),
          i = a[0],
          o = a[1],
          s = [],
          c = []
        return (
          e &&
            (s = e.map(function (t) {
              return { categories: t.departments, location: t.location.name, title: t.title, url: t.absolute_url }
            })).map(function (t) {
              t.categories.map(function (t) {
                !c.includes(t.name) && c.push(t.name)
              })
            }),
          (0, b.BX)(k, {
            className: 'container is-grid wrapper',
            css: _,
            ref: i,
            children: [
              (0, b.tZ)('h1', { ref: o, className: 'text-82', 'data-type': 'title', css: C, children: 'Join LayerZero' }),
              (0, b.tZ)('p', {
                className: 'text-16 is-uppercase',
                css: E,
                children: "Let's build the future together. Explore the open positions at layer Zero."
              }),
              r
                ? (0, b.tZ)('div', { className: 'text-16 is-uppercase', css: N, children: 'An error occurred please try again later' })
                : c.map(function (t, e) {
                    return (0, b.BX)(
                      'article',
                      {
                        css: j,
                        children: [
                          (0, b.tZ)('h2', { className: 'text-24', css: T, children: t }),
                          s.map(function (e) {
                            return e.categories.map(function (r, n) {
                              return t === r.name && (0, b.tZ)(v, { career: e, category: t }, 'career__'.concat(n))
                            })
                          })
                        ]
                      },
                      e
                    )
                  })
            ]
          })
        )
      }
      function S(t) {
        var e = t.jobs,
          r = t.error
        return (0, b.BX)(b.HY, {
          children: [
            (0, b.tZ)(c.Z, { title: 'Careers | LayerZero', description: '', url: '' }),
            (0, b.tZ)(L, { jobs: e, error: r }),
            (0, b.tZ)(m.Z, {})
          ]
        })
      }
      S.getInitialProps = (function () {
        var t = (0, n.Z)(
          i().mark(function t(e) {
            var r, n
            return i().wrap(
              function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        (t.prev = 0), (t.next = 3), s().get('https://boards-api.greenhouse.io/v1/boards/layerzerolabs/jobs?content=true')
                      )
                    case 3:
                      return (r = t.sent), (n = r.data.jobs), t.abrupt('return', { jobs: n })
                    case 8:
                      return (t.prev = 8), (t.t0 = t.catch(0)), t.abrupt('return', { error: t.t0 })
                    case 11:
                    case 'end':
                      return t.stop()
                  }
              },
              t,
              null,
              [[0, 8]]
            )
          })
        )
        return function (e) {
          return t.apply(this, arguments)
        }
      })()
    },
    2469: function (t, e, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/careers',
        function () {
          return r(9022)
        }
      ])
    }
  },
  function (t) {
    t.O(0, [222, 864, 9, 774, 888, 179], function () {
      return (e = 2469), t((t.s = e))
    })
    var e = t.O()
    _N_E = e
  }
])
