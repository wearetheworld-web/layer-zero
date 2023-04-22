'use strict'
;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9],
  {
    3685: function (e, t, n) {
      var r = n(9008),
        o = n(5944)
      t.Z = function (e) {
        var t = e.title,
          n = e.description,
          a = e.url
        return (0, o.BX)(r.default, {
          children: [
            (0, o.tZ)('title', { children: t }),
            n &&
              (0, o.BX)(o.HY, {
                children: [
                  (0, o.tZ)('meta', { name: 'description', content: n }),
                  (0, o.tZ)('meta', { name: 'og:description', content: n })
                ]
              }),
            (0, o.tZ)('meta', { name: 'og:title', content: t }),
            (0, o.tZ)('meta', { name: 'og:url', content: a }),
            (0, o.tZ)('meta', { name: 'og:site_name', content: t })
          ]
        })
      }
    },
    9908: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return y
        }
      })
      var r = n(266),
        o = n(809),
        a = n.n(o),
        s = n(6038),
        i = n(7946),
        c = n.n(i),
        l = n(1465),
        u = n.n(l),
        d = n(7294),
        f = (n(5068), n(2192))
      var m = (0, f.Z)('div', { target: 'e2jcno70' })({
          name: '1qprjag',
          styles:
            'max-width:calc(375 / 16 * 1rem - 2.5rem);border:1px solid #ffffff;opacity:0;transform:translate(0, 20%);@media (min-width: 400px){max-width:calc(375 / 16 * 1rem);}'
        }),
        p = n(5944)
      var h = function () {
          return (0, p.tZ)('svg', {
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 17 12',
            children: (0, p.tZ)('path', { d: 'm.5 5.49707 5.49642 5.49643L15.9899 1', stroke: '#fff' })
          })
        },
        g = function () {
          return (0, p.BX)('svg', {
            fill: 'none',
            xmlns: 'http://www.w3.org/2000/svg',
            viewBox: '0 0 20 20',
            children: [
              (0, p.tZ)('path', { d: 'M10 11V6', stroke: '#fff', strokeLinejoin: 'round' }),
              (0, p.tZ)('path', { d: 'M10 12.9907 9.99167 13', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round' }),
              (0, p.tZ)('path', {
                d: 'M9.99935 18.3307c4.60235 0 8.33335-3.731 8.33335-8.3333 0-4.60238-3.731-8.33334-8.33335-8.33334-4.60238 0-8.33333 3.73096-8.33333 8.33334 0 4.6023 3.73095 8.3333 8.33333 8.3333Z',
                stroke: '#fff',
                strokeWidth: '.833333',
                strokeLinecap: 'round',
                strokeLinejoin: 'round'
              })
            ]
          })
        },
        b = {
          name: 'ufrjrq',
          styles:
            'position:fixed;border-width:1px;--tw-border-opacity:1;border-color:rgba(255, 255, 255, var(--tw-border-opacity));display:flex;z-index:30;--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity));right:1.25rem;bottom:1.25rem;padding:1.25rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));width:100%;align-items:center;@media (min-width: 1920px){right:2.5rem;bottom:2.5rem;}'
        },
        w = { name: '1tqhdj6', styles: 'width:1rem;margin-right:1rem;display:flex' },
        v = { name: '1xe63ku', styles: 'line-height:1' },
        Z = { name: '17djy3g', styles: 'background-color:rgba(0, 0, 0, 0);margin-left:auto;align-items:center;cursor:pointer' },
        x = { name: '1a31kb4', styles: 'width:0.75rem' },
        k = function (e) {
          var t = e.opened,
            n = e.label,
            r = e.success,
            o = e.toClose,
            a = (0, d.useRef)(null),
            i = (0, d.useCallback)(
              function () {
                null !== a && void 0 !== a && a.current && s.ZP.to(a.current, { duration: 0.5, autoAlpha: 1, y: '0%' })
              },
              [a]
            ),
            c = (0, d.useCallback)(
              function () {
                null !== a && void 0 !== a && a.current && s.ZP.to(a.current, { duration: 0.2, autoAlpha: 0, y: '20%' })
              },
              [a]
            )
          return (
            (0, d.useEffect)(
              function () {
                t ? i() : c()
              },
              [t, c, i]
            ),
            (0, p.BX)(m, {
              css: b,
              ref: a,
              className: 'text-14',
              children: [
                (0, p.tZ)('span', { css: w, children: r ? (0, p.tZ)(g, {}) : (0, p.tZ)(h, {}) }),
                (0, p.tZ)('span', { css: v, children: n }),
                (0, p.tZ)('button', {
                  css: Z,
                  onClick: function (e) {
                    e.preventDefault(), o && 'function' === typeof o && o()
                  },
                  children: (0, p.tZ)('svg', {
                    css: x,
                    fill: 'none',
                    xmlns: 'http://www.w3.org/2000/svg',
                    viewBox: '0 0 14 14',
                    children: (0, p.tZ)('path', {
                      d: 'M7.00002 7.00002 13 13M1 13l6.00002-5.99998L1 13ZM13 1 7.00002 7.00002 13 1ZM7.00002 7.00002 1 1l6.00002 6.00002Z',
                      stroke: '#fff'
                    })
                  })
                })
              ]
            })
          )
        }
      ;(0, f.Z)('section', { target: 'ed2hmsx2' })({
        name: '1u9i7u0',
        styles:
          "input{background-color:#141414;border:none;font-family:'Roboto Mono',monospace;font-weight:400;padding:2.5rem;outline:none;color:#ffffff;transition:background-color 0.3s ease;&:placeholder{color:rgba(255, 255, 255, 0.4);}&:focus{background-color:#222222;}@media (min-width: 1920px){padding:calc(53 / 16 * 1rem) 2.5rem;}}button{cursor:pointer;&.disabled{cursor:not-allowed;}@media (min-width: 768px){position:absolute;right:calc(30 / 16 * 1rem);top:50%;transform:translate(0, -50%);width:auto;padding:calc(14 / 16 * 1rem) calc(80 / 16 * 1rem);}@media (min-width: 1920px){padding:calc(17 / 16 * 1rem) calc(107 / 16 * 1rem);right:calc(40 / 16 * 1rem);}}"
      }),
        (0, f.Z)('span', { target: 'ed2hmsx1' })({
          name: '18oyykl',
          styles: 'left:50%;top:50%;position:absolute;white-space:nowrap;transform:translate(-50%, -50%)'
        }),
        (0, f.Z)('span', { target: 'ed2hmsx0' })({
          name: 'u4z7gc',
          styles:
            'left:50%;bottom:-0.1rem;position:absolute;width:100%;height:1px;background-color:currentColor;transform:translate(-50%, 0) scaleX(0);transform-origin:left'
        })
      s.ZP.registerPlugin(c())
      var y = function () {
        var e = u()(),
          t = (0, d.useRef)(!1),
          n = (0, d.useRef)(!1),
          o = (0, d.useState)(''),
          i = o[0],
          c = (o[1], (0, d.useState)('')),
          l = c[0],
          f = (c[1], (0, d.useState)(!0)),
          m = (f[0], f[1]),
          h = (0, d.useState)(!1),
          g = (h[0], h[1]),
          b = (0, d.useState)(!1),
          w = b[0],
          v = b[1],
          Z = (0, d.useState)({ label: 'Thank you for subscribing!', success: !0 }),
          x = Z[0],
          y = Z[1]
        return (
          (0, d.useCallback)(
            (function () {
              var e = (0, r.Z)(
                a().mark(function e(t) {
                  var n
                  return a().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              g(!0),
                              (e.prev = 2),
                              (e.next = 5),
                              window.fetch('https://xz5npa6exj.execute-api.us-east-1.amazonaws.com/dev/addEmail?e='.concat(l), {
                                method: 'GET'
                              })
                            )
                          case 5:
                            200 === (null === (n = e.sent) || void 0 === n ? void 0 : n.status)
                              ? y({ label: 'Thank you for subscribing!', success: !0 })
                              : y({ label: 'Oops! An error occurred.', success: !1 }),
                              g(!1),
                              v(!0),
                              (e.next = 16)
                            break
                          case 11:
                            ;(e.prev = 11), (e.t0 = e.catch(2)), y({ label: 'Oops! An error occurred.', success: !1 }), g(!1), v(!0)
                          case 16:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[2, 11]]
                  )
                })
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })(),
            [l, g]
          ),
          (0, d.useEffect)(
            function () {
              m(
                !(function (e) {
                  return /\S+@\S+\.\S+/.test(e)
                })(l)
              )
            },
            [l]
          ),
          (0, d.useCallback)(
            function () {
              e ||
                (s.ZP.to(t.current, { duration: 0.4, scrambleText: { tweenLength: !1, delimiter: ' ', text: i, chars: i, speed: 0.4 } }),
                s.ZP.to(n.current, { duration: 0.4, scaleX: 1, ease: 'power4.out' }))
            },
            [i, e]
          ),
          (0, d.useCallback)(
            function () {
              e || ((t.current.textContent = i), s.ZP.to(n.current, { duration: 0.4, scaleX: 0, ease: 'power4.out' }))
            },
            [i, e]
          ),
          (0, p.tZ)(p.HY, {
            children: (0, p.tZ)(k, {
              opened: w,
              label: null === x || void 0 === x ? void 0 : x.label,
              success: null === x || void 0 === x ? void 0 : x.success,
              toClose: function () {
                return v(!1)
              }
            })
          })
        )
      }
    }
  }
])
