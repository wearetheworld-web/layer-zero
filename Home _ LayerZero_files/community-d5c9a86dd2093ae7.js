;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [44],
  {
    6825: function (t, e, n) {
      'use strict'
      n.d(e, {
        M: function () {
          return u
        }
      })
      var r = n(2809),
        i = n(37),
        a = n(9711),
        o = n(6038),
        s = n(7294),
        m = n(131),
        c = n(2757),
        l = n(7946),
        d = n(946)
      o.ZP.registerPlugin(c.SplitText), o.ZP.registerPlugin(l.ScrambleTextPlugin)
      var u = function () {
          var t = (0, s.useRef)([]),
            e = (0, m.YD)({ triggerOnce: !0, threshold: 0.25 }),
            n = (0, a.Z)(e, 2),
            r = n[0],
            i = n[1],
            o = (0, d.e)().hasRouted,
            c = (0, s.useMemo)(function () {
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
                i &&
                  p(
                    t.current.filter(function (t) {
                      return !!t
                    }),
                    o
                  )
              },
              [i]
            ),
            [r, c]
          )
        },
        p = function (t, e) {
          t.forEach(function (t, n) {
            switch (t.getAttribute('data-type')) {
              case 'title':
                f(t, n, e)
                break
              case 'text':
                !e && h(t, n, e)
            }
          })
        },
        f = function (t, e, n) {
          var r = (n ? 0 : 0.2) + 0.05 * e
          new c.SplitText(t, { charsClass: 'js-char', type: 'lines, chars' }).lines.forEach(function (n, a) {
            var s = (0, i.Z)(n.querySelectorAll('.js-char'))
            e % 2 !== 0 && s.reverse(),
              o.ZP.set(s, { opacity: 0 }),
              o.ZP.set(t, { opacity: 1 }),
              s.forEach(function (t, e) {
                0 === e
                  ? o.ZP.set(t, { backgroundColor: '#ffffff', color: 'transparent', delay: 0, opacity: 1 })
                  : o.ZP.set(t, { backgroundColor: '#ffffff', color: 'transparent', delay: 0.05 * e + 0.15 * a + r, opacity: 1 }),
                  o.ZP.set(t, { backgroundColor: 'transparent', color: '#fff', delay: 0.065 * e + 0.15 * a + r })
              })
          })
        },
        h = function (t, e, n) {
          new c.SplitText(t, { type: 'lines' }).lines.forEach(function (t, e) {
            var i
            o.ZP.set(t, { opacity: 0 })
            var a = (n ? 0.2 : 0.4) + 0.05 * e,
              s = t.textContent
            o.ZP.to(t, {
              duration: 1,
              scrambleText:
                ((i = { tweenLength: !1, revealDelay: a }),
                (0, r.Z)(i, 'tweenLength', !1),
                (0, r.Z)(i, 'rightToLeft', e % 2 !== 0),
                (0, r.Z)(i, 'text', s),
                (0, r.Z)(i, 'chars', ' '),
                (0, r.Z)(i, 'speed', 0.05),
                i)
            }),
              o.ZP.set(t, { opacity: 1, delay: 0.2 }),
              2 === e && (o.ZP.set(t, { opacity: 0, delay: 0.6 }), o.ZP.set(t, { opacity: 1, delay: 0.7 }))
          }),
            o.ZP.set(t, { opacity: 1 })
        }
    },
    1647: function (t, e, n) {
      'use strict'
      n.r(e),
        n.d(e, {
          default: function () {
            return v
          }
        })
      var r = n(3685),
        i = n(9711),
        a = [
          {
            svg: 'telegram.svg',
            title: 'Telegram',
            subtitle: '51.925 Members',
            text: 'Keep up with our latest releases and ecosystem announcements on our official Twitter channel.',
            button: { label: 'Join Telegram', href: 'https://t.me/joinchat/VcqxYkStIDsyN2Rh' }
          },
          {
            svg: 'discord.svg',
            title: 'Discord',
            subtitle: '44.565 Members',
            text: 'Connect with LayerZero enthusiasts about the latest news across the ecosystem and the broader smart contract economy.',
            button: { label: 'Join Discord', href: 'https://discord-layerzero.netlify.app/discord' }
          },
          {
            svg: 'twitter.svg',
            title: 'Twitter',
            subtitle: '325,162 Followers',
            text: 'Keep up with our latest releases and ecosystem announcements on our official Twitter channel.',
            button: { label: 'Follow us on Twitter', href: 'https://twitter.com/LayerZero_Labs' }
          },
          {
            svg: 'medium.svg',
            title: 'Medium',
            subtitle: '25,690 Followers',
            text: 'Connect with LayerZero enthusiasts about the latest news across the ecosystem and the broader smart contract economy.',
            button: { label: 'Follow us on Medium', href: 'https://medium.com/layerzero-official' }
          }
        ],
        o = n(6825),
        s = n(8064)
      var m = (0, n(2192).Z)('hr', { target: 'ejt38210' })({
          name: '148v2g9',
          styles: 'border:none;border-top:1px solid rgba(255, 255, 255, 0.1)'
        }),
        c = n(5944)
      var l = {
          name: 'boolm7',
          styles:
            'padding-top:7rem;padding-bottom:6rem;@media (min-width: 768px){padding-bottom:10rem;}@media (min-width: 1920px){padding-top:9rem;padding-bottom:15rem;}'
        },
        d = {
          name: '1yezym4',
          styles:
            'grid-column:span 9 / span 9;margin-bottom:2rem;@media (min-width: 768px){grid-column:span 5 / span 5;grid-column-start:1;margin-bottom:2.5rem;}@media (min-width: 1920px){margin-bottom:3rem;}'
        },
        u = {
          name: '13sg3l2',
          styles:
            'grid-column:span 10 / span 10;text-align:justify;margin-bottom:5rem;@media (min-width: 768px){grid-column:span 3 / span 3;grid-column-start:1;margin-bottom:10rem;}@media (min-width: 1920px){margin-bottom:13rem;}'
        },
        p = { name: '1b52848', styles: 'grid-column:span 10 / span 10' },
        f = { name: '1k6nf33', styles: 'display:grid;grid-template-columns:repeat(12, minmax(0, 1fr));gap:1.25rem' },
        h = {
          name: '1kplz79',
          styles:
            'grid-column:span 12 / span 12;--tw-bg-opacity:1;background-color:rgba(20, 20, 20, var(--tw-bg-opacity));padding-top:2.25rem;padding-bottom:2.25rem;padding-left:2rem;padding-right:2rem;display:flex;flex-direction:column;align-items:flex-start;@media (min-width: 768px){grid-column:span 6 / span 6;}@media (min-width: 1200px){grid-column:span 3 / span 3;}@media (min-width: 1920px){padding-left:2.75rem;padding-right:2.75rem;padding-top:3.5rem;padding-bottom:3.5rem;}'
        },
        g = {
          name: '1gpu0x6',
          styles:
            'height:2.25rem;width:2rem;object-fit:contain;margin-bottom:2rem;@media (min-width: 768px){margin-bottom:2.25rem;}@media (min-width: 1920px){height:2.75rem;width:2.5rem;margin-bottom:3rem;}'
        },
        b = {
          name: '4fl39j',
          styles:
            'margin-bottom:0.5rem;@media (min-width: 768px){margin-bottom:0.625rem;}@media (min-width: 1920px){margin-bottom:0.75rem;}'
        },
        y = {
          name: 'pypbkt',
          styles:
            'margin-bottom:3.5rem;width:100%;@media (min-width: 768px){margin-bottom:2rem;}@media (min-width: 1920px){margin-bottom:11rem;}'
        },
        w = { name: '1ok4xxg', styles: 'display:flex;flex-direction:column;margin-top:auto;width:100%' }
      var Z = function () {
          var t = (0, o.M)(),
            e = (0, i.Z)(t, 2),
            n = e[0],
            r = e[1]
          return (0, c.BX)('section', {
            className: 'container is-grid wrapper',
            ref: n,
            css: l,
            children: [
              (0, c.tZ)('h1', { ref: r, className: 'text-82', 'data-type': 'title', css: d, children: 'LayerZero Community' }),
              (0, c.tZ)('p', {
                className: 'text-16 is-uppercase',
                css: u,
                children: 'Be a part of our global community by participating in open discussions.'
              }),
              (0, c.tZ)('div', {
                css: p,
                children: (0, c.tZ)('div', {
                  css: f,
                  children: a.map(function (t, e) {
                    return (0,
                    c.BX)('article', { css: h, children: [(0, c.tZ)('img', { css: g, src: t.svg, alt: t.title }), (0, c.tZ)('h2', { className: 'text-24', css: b, children: t.title }), (0, c.tZ)(m, { css: y }), (0, c.tZ)('div', { css: w, children: (0, c.tZ)(s.Z, { label: t.button.label, href: t.button.href, target: '_blank' }) })] }, e)
                  })
                })
              })
            ]
          })
        },
        x = n(9908)
      function v() {
        return (0, c.BX)(c.HY, {
          children: [(0, c.tZ)(r.Z, { title: 'Community | LayerZero', description: '', url: '' }), (0, c.tZ)(Z, {}), (0, c.tZ)(x.Z, {})]
        })
      }
    },
    9117: function (t, e, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/community',
        function () {
          return n(1647)
        }
      ])
    },
    266: function (t, e, n) {
      'use strict'
      function r(t, e, n, r, i, a, o) {
        try {
          var s = t[a](o),
            m = s.value
        } catch (c) {
          return void n(c)
        }
        s.done ? e(m) : Promise.resolve(m).then(r, i)
      }
      function i(t) {
        return function () {
          var e = this,
            n = arguments
          return new Promise(function (i, a) {
            var o = t.apply(e, n)
            function s(t) {
              r(o, i, a, s, m, 'next', t)
            }
            function m(t) {
              r(o, i, a, s, m, 'throw', t)
            }
            s(void 0)
          })
        }
      }
      n.d(e, {
        Z: function () {
          return i
        }
      })
    },
    37: function (t, e, n) {
      'use strict'
      n.d(e, {
        Z: function () {
          return a
        }
      })
      var r = n(6586)
      var i = n(6988)
      function a(t) {
        return (
          (function (t) {
            if (Array.isArray(t)) return (0, r.Z)(t)
          })(t) ||
          (function (t) {
            if (('undefined' !== typeof Symbol && null != t[Symbol.iterator]) || null != t['@@iterator']) return Array.from(t)
          })(t) ||
          (0, i.Z)(t) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
    }
  },
  function (t) {
    t.O(0, [222, 9, 774, 888, 179], function () {
      return (e = 9117), t((t.s = e))
      var e
    })
    var e = t.O()
    _N_E = e
  }
])
