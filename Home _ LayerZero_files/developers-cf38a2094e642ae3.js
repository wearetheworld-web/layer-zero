;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [382],
  {
    9973: function (e, t, r) {
      'use strict'
      r.d(t, {
        R: function () {
          return n
        }
      })
      var n = 'https://layerzero.gitbook.io/'
    },
    6825: function (e, t, r) {
      'use strict'
      r.d(t, {
        M: function () {
          return p
        }
      })
      var n = r(2809),
        i = r(37),
        a = r(9711),
        o = r(6038),
        s = r(7294),
        l = r(131),
        d = r(2757),
        m = r(7946),
        c = r(946)
      o.ZP.registerPlugin(d.SplitText), o.ZP.registerPlugin(m.ScrambleTextPlugin)
      var p = function () {
          var e = (0, s.useRef)([]),
            t = (0, l.YD)({ triggerOnce: !0, threshold: 0.25 }),
            r = (0, a.Z)(t, 2),
            n = r[0],
            i = r[1],
            o = (0, c.e)().hasRouted,
            d = (0, s.useMemo)(function () {
              return (
                (e.current = []),
                function (t) {
                  t && e.current.push(t)
                }
              )
            }, [])
          return (
            (0, s.useEffect)(
              function () {
                i &&
                  g(
                    e.current.filter(function (e) {
                      return !!e
                    }),
                    o
                  )
              },
              [i]
            ),
            [n, d]
          )
        },
        g = function (e, t) {
          e.forEach(function (e, r) {
            switch (e.getAttribute('data-type')) {
              case 'title':
                h(e, r, t)
                break
              case 'text':
                !t && u(e, r, t)
            }
          })
        },
        h = function (e, t, r) {
          var n = (r ? 0 : 0.2) + 0.05 * t
          new d.SplitText(e, { charsClass: 'js-char', type: 'lines, chars' }).lines.forEach(function (r, a) {
            var s = (0, i.Z)(r.querySelectorAll('.js-char'))
            t % 2 !== 0 && s.reverse(),
              o.ZP.set(s, { opacity: 0 }),
              o.ZP.set(e, { opacity: 1 }),
              s.forEach(function (e, t) {
                0 === t
                  ? o.ZP.set(e, { backgroundColor: '#ffffff', color: 'transparent', delay: 0, opacity: 1 })
                  : o.ZP.set(e, { backgroundColor: '#ffffff', color: 'transparent', delay: 0.05 * t + 0.15 * a + n, opacity: 1 }),
                  o.ZP.set(e, { backgroundColor: 'transparent', color: '#fff', delay: 0.065 * t + 0.15 * a + n })
              })
          })
        },
        u = function (e, t, r) {
          new d.SplitText(e, { type: 'lines' }).lines.forEach(function (e, t) {
            var i
            o.ZP.set(e, { opacity: 0 })
            var a = (r ? 0.2 : 0.4) + 0.05 * t,
              s = e.textContent
            o.ZP.to(e, {
              duration: 1,
              scrambleText:
                ((i = { tweenLength: !1, revealDelay: a }),
                (0, n.Z)(i, 'tweenLength', !1),
                (0, n.Z)(i, 'rightToLeft', t % 2 !== 0),
                (0, n.Z)(i, 'text', s),
                (0, n.Z)(i, 'chars', ' '),
                (0, n.Z)(i, 'speed', 0.05),
                i)
            }),
              o.ZP.set(e, { opacity: 1, delay: 0.2 }),
              2 === t && (o.ZP.set(e, { opacity: 0, delay: 0.6 }), o.ZP.set(e, { opacity: 1, delay: 0.7 }))
          }),
            o.ZP.set(e, { opacity: 1 })
        }
    },
    4810: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return me
          }
        })
      var n = r(3685),
        i = r(9711),
        a = r(6038),
        o = r(2757),
        s = [
          {
            icon: 'star.svg',
            title: 'Introduction',
            links: [
              { label: 'Getting started', href: 'https://layerzero.gitbook.io/getting-started/' },
              { label: 'FAQ', href: 'https://layerzero.gitbook.io/getting-started/faq-1' },
              { label: 'Glossary Section', href: 'https://layerzero.gitbook.io/getting-started/glossary' }
            ]
          },
          {
            icon: 'braces.svg',
            title: 'Core Features',
            links: [
              { label: 'Relayer', href: 'https://layerzero.gitbook.io/getting-started/faq/relayer' },
              { label: 'Oracle', href: 'https://layerzero.gitbook.io/getting-started/faq/oracle' },
              { label: 'Endpoint', href: 'https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids' },
              { label: 'Interfaces', href: 'https://layerzero.gitbook.io/getting-started/github/interfaces' }
            ]
          },
          {
            icon: 'double-slash.svg',
            title: 'Guides',
            links: [
              { label: 'How to Send a Message', href: 'https://layerzero.gitbook.io/getting-started/faq/endpoints/how-to-send-a-message' },
              { label: 'Where to call .send()', href: 'https://layerzero.gitbook.io/docs/technical-reference/mainnet/supported-chain-ids' }
            ]
          },
          {
            icon: 'crosshair.svg',
            title: 'Troubleshooting',
            links: [
              {
                label: 'Relayer Fee Failed',
                href: 'https://layerzero.gitbook.io/getting-started/faq/endpoints/how-to-send-a-message/error-layerzero-relayer-fee-failed'
              }
            ]
          },
          {
            icon: 'brackets.svg',
            title: 'Examples',
            links: [
              { label: 'OmniCounter.sol', href: 'https://layerzero.gitbook.io/getting-started/code-examples/messagecounter.sol' },
              { label: 'PingPong.sol', href: 'https://layerzero.gitbook.io/docs/guides/code-examples/pingpong.sol' },
              { label: 'LZEndpointMock.sol', href: 'https://layerzero.gitbook.io/docs/guides/code-examples/lzendpointmock.sol' }
            ]
          }
        ],
        l = r(9973),
        d = r(6825),
        m = r(8064),
        c = r(1664),
        p = r(8034),
        g = r(7946),
        h = r.n(g),
        u = r(1465),
        f = r.n(u),
        y = r(7294),
        b = r(2192)
      var x = (0, b.Z)('span', { target: 'eke3pwv2' })({
          name: '19xbq37',
          styles: 'left:50%;top:50%;position:absolute;white-space:nowrap;transform:translate(-50%, -50%);color:#fff'
        }),
        w = (0, b.Z)('span', { target: 'eke3pwv1' })({
          name: 'u4z7gc',
          styles:
            'left:50%;bottom:-0.1rem;position:absolute;width:100%;height:1px;background-color:currentColor;transform:translate(-50%, 0) scaleX(0);transform-origin:left'
        }),
        Z = (0, b.Z)('span', { target: 'eke3pwv0' })({
          name: '1sd73rv',
          styles: 'position:absolute;background-color:#141414;inset:0;transform-origin:65% center;border:1px solid #fff'
        }),
        v = r(5944)
      a.ZP.registerPlugin(h())
      var k = {
          name: '1ljy35v',
          styles:
            '--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));font-weight:700;text-align:center;display:flex;justify-content:center;align-items:center;padding-top:1rem;padding-bottom:1rem;width:100%;position:relative;@media (min-width: 1920px){padding-top:1.25rem;padding-bottom:1.25rem;}'
        },
        P = { name: 'bjn8wh', styles: 'position:relative' },
        X = { name: 'sx4ymz', styles: 'opacity:0;pointer-events:none' },
        z = { name: 'je8g23', styles: 'pointer-events:none' },
        B = {
          name: '3f1z50',
          styles:
            'display:flex;align-items:center;width:0.5rem;margin-top:0.125rem;margin-left:0.5rem;position:relative;@media (min-width: 1920px){width:0.625rem;margin-left:0.625rem;}'
        },
        E = {
          name: '1ljy35v',
          styles:
            '--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));font-weight:700;text-align:center;display:flex;justify-content:center;align-items:center;padding-top:1rem;padding-bottom:1rem;width:100%;position:relative;@media (min-width: 1920px){padding-top:1.25rem;padding-bottom:1.25rem;}'
        },
        N = { name: 'bjn8wh', styles: 'position:relative' },
        S = { name: 'sx4ymz', styles: 'opacity:0;pointer-events:none' },
        _ = { name: 'je8g23', styles: 'pointer-events:none' }
      var j = function (e, t) {
          e &&
            t &&
            (a.ZP.set(e, { color: '#ffffff' }),
            a.ZP.set(e, { opacity: 0 }),
            a.ZP.set(t, { scaleX: 0 }),
            setTimeout(function () {
              a.ZP.set(t, { scaleX: 0.1, delay: 0.125 }),
                a.ZP.set(e, { opacity: 1, delay: 0.25 }),
                a.ZP.set(t, { scaleX: 0, delay: 0.375 }),
                a.ZP.set(t, { scaleX: 0.75, delay: 0.4375 }),
                a.ZP.set(t, { scaleX: 0, delay: 0.5 }),
                a.ZP.set(t, { scaleX: 1, delay: 0.5625 }),
                a.ZP.set(e, { color: '#000000', delay: 0.625 }),
                a.ZP.to(e, { duration: 0.25, scrambleText: { chars: ' ' } })
            }, 250))
        },
        C = function (e) {
          var t = e.label,
            r = e.href,
            n = e.target,
            i = e.hasAnimation,
            o = f()(),
            s = (0, y.useRef)(!1),
            l = (0, y.useRef)(!1),
            d = (0, y.useRef)(!1),
            m = (0, y.useRef)(!1),
            g = (0, y.useState)(''),
            h = g[0],
            u = g[1]
          ;(0, y.useEffect)(
            function () {
              i && j(s.current, l.current), u(s.current.textContent)
            },
            [i]
          )
          var b = (0, y.useCallback)(
              function () {
                o ||
                  (a.ZP.to(s.current, {
                    duration: 0.5,
                    scrambleText: { speed: 1 },
                    onComplete: function () {
                      s.current && (s.current.textContent = h)
                    }
                  }),
                  a.ZP.to(m.current, { duration: 0.4, scaleX: 1, ease: 'power4.out' }),
                  d.current &&
                    (a.ZP.set(d.current, { opacity: 0 }),
                    a.ZP.set(d.current, { opacity: 1, delay: 0.1 * 0.75 }),
                    a.ZP.set(d.current, { opacity: 0, delay: 0.2 * 0.75 }),
                    a.ZP.set(d.current, { opacity: 1, delay: 0.3 * 0.75 })))
              },
              [h, o]
            ),
            C = (0, y.useCallback)(
              function () {
                o || ((s.current.textContent = h), a.ZP.to(m.current, { duration: 0.4, scaleX: 0, ease: 'power4.out' }))
              },
              [h, o]
            )
          return '_blank' === n
            ? (0, v.BX)('a', {
                className: 'text-12 is-uppercase',
                css: k,
                target: '_blank',
                href: r,
                rel: 'noopener nofollow noreferrer',
                onMouseEnter: b,
                onMouseLeave: C,
                children: [
                  (0, v.tZ)(Z, { ref: l }),
                  (0, v.BX)('span', {
                    css: P,
                    children: [
                      (0, v.tZ)('span', { css: X, children: t }),
                      (0, v.tZ)(x, { css: z, ref: s, children: t }),
                      (0, v.tZ)(w, { ref: m })
                    ]
                  }),
                  (0, v.tZ)('i', { ref: d, css: B, children: (0, v.tZ)(p.Z, { fill: '#fff' }) })
                ]
              })
            : (0, v.tZ)(c.default, {
                href: r,
                passHref: !0,
                children: (0, v.BX)('a', {
                  className: 'text-12 is-uppercase',
                  css: E,
                  onMouseEnter: b,
                  onMouseLeave: C,
                  href: r,
                  children: [
                    (0, v.tZ)(Z, { ref: l }),
                    (0, v.BX)('span', {
                      css: N,
                      children: [
                        (0, v.tZ)('span', { css: S, children: t }),
                        (0, v.tZ)(x, { css: _, ref: s, children: t }),
                        (0, v.tZ)(w, { ref: m })
                      ]
                    })
                  ]
                })
              })
        }
      r(5068)
      var T = (0, b.Z)('article', { target: 'eu3gp461' })({
          name: '1364iti',
          styles: 'a{&:hover{span{opacity:1;text-decoration:underline;}}}'
        }),
        L = (0, b.Z)('article', { target: 'eu3gp460' })({ name: '1fb9pr0', styles: 'border:1px solid rgba(255, 255, 255, 0.2)' })
      a.ZP.registerPlugin(o.SplitText)
      var q = {
          name: 'boolm7',
          styles:
            'padding-top:7rem;padding-bottom:6rem;@media (min-width: 768px){padding-bottom:10rem;}@media (min-width: 1920px){padding-top:9rem;padding-bottom:15rem;}'
        },
        M = {
          name: '1x34236',
          styles:
            'grid-column:span 8 / span 8;margin-bottom:2rem;@media (min-width: 768px){grid-column:span 7 / span 7;grid-column-start:1;margin-bottom:2.5rem;}@media (min-width: 1200px){grid-column:span 5 / span 5;grid-column-start:1;}@media (min-width: 1440px){grid-column:span 5 / span 5;grid-column-start:1;}@media (min-width: 1920px){grid-column:span 5 / span 5;grid-column-start:1;margin-bottom:3rem;}'
        },
        R = {
          name: '13sg3l2',
          styles:
            'grid-column:span 10 / span 10;text-align:justify;margin-bottom:5rem;@media (min-width: 768px){grid-column:span 3 / span 3;grid-column-start:1;margin-bottom:10rem;}@media (min-width: 1920px){margin-bottom:13rem;}'
        },
        A = { name: '1b52848', styles: 'grid-column:span 10 / span 10' },
        D = { name: '1k6nf33', styles: 'display:grid;grid-template-columns:repeat(12, minmax(0, 1fr));gap:1.25rem' },
        O = {
          name: 'kkmxtu',
          styles:
            'grid-column:span 12 / span 12;height:24rem;--tw-bg-opacity:1;background-color:rgba(20, 20, 20, var(--tw-bg-opacity));padding-top:2.25rem;padding-bottom:2.25rem;padding-left:2rem;padding-right:2rem;display:flex;flex-direction:column;@media (min-width: 768px){padding-top:2.5rem;padding-bottom:2.5rem;padding-left:4rem;padding-right:4rem;flex-direction:row;align-items:center;}@media (min-width: 1200px){grid-column:span 6 / span 6;height:auto;}@media (min-width: 1920px){padding-top:3rem;padding-bottom:3rem;padding-left:4rem;padding-right:4rem;}'
        },
        F = {
          name: '1k8b2yi',
          styles:
            'height:4rem;width:4rem;flex-shrink:0;margin-bottom:1.25rem;@media (min-width: 768px){width:6rem;height:6rem;margin-bottom:0px;margin-right:5rem;}@media (min-width: 1920px){width:12rem;height:12rem;margin-right:7rem;}'
        },
        G = { name: '13ku56z', styles: 'display:flex;flex-direction:column;height:100%' },
        H = {
          name: 'pd1eju',
          styles:
            'opacity:0.4;margin-bottom:0.625rem;@media (min-width: 768px){margin-bottom:1.25rem;}@media (min-width: 1920px){margin-bottom:1.5rem;}'
        },
        I = { name: '1whq8a0', styles: '@media (min-width: 768px){margin-bottom:10rem;}@media (min-width: 1920px){margin-bottom:15rem;}' },
        Q = { name: 'fccxu0', styles: 'margin-top:auto;line-height:1.625' },
        W = { name: 's5xdrg', styles: 'display:flex;align-items:center' },
        Y = { name: 'lth0hc', styles: 'width:1rem;opacity:0.4;margin-right:1rem' },
        J = { name: '1jkdpqt', styles: 'opacity:0.6' },
        V = {
          name: 'hroyam',
          styles:
            'grid-column:span 12 / span 12;height:24rem;padding-top:2.25rem;padding-bottom:2.25rem;padding-left:2rem;padding-right:2rem;display:flex;flex-direction:column;align-items:center;justify-content:center;@media (min-width: 1200px){grid-column:span 6 / span 6;height:auto;}@media (min-width: 1920px){padding-left:2.75rem;padding-right:2.75rem;padding-top:3.5rem;padding-bottom:3.5rem;}'
        },
        K = {
          name: '1yboi4f',
          styles:
            'text-align:center;margin-bottom:3.5rem;@media (min-width: 768px){margin-bottom:5rem;}@media (min-width: 1920px){margin-bottom:7rem;}'
        },
        U = { name: 'k3ccre', styles: 'display:flex;flex-direction:column;width:100%;@media (min-width: 768px){width:60%;}' },
        $ = { name: '17b97dd', styles: 'margin-top:0.625rem' }
      var ee = function () {
        var e = (0, d.M)(),
          t = (0, i.Z)(e, 2),
          r = t[0],
          n = t[1]
        return (0, v.BX)('section', {
          className: 'container is-grid wrapper',
          ref: r,
          css: q,
          children: [
            (0, v.BX)('h1', {
              ref: n,
              'data-type': 'title',
              className: 'text-82',
              css: M,
              children: ['Start Building', (0, v.tZ)('br', {}), 'With Layer Zero']
            }),
            (0, v.tZ)('p', {
              'data-type': 'text',
              className: 'text-16 is-uppercase',
              css: R,
              children: 'LayerZero enables developers to send secure messages across blockchains.'
            }),
            (0, v.tZ)('div', {
              css: A,
              children: (0, v.BX)('div', {
                css: D,
                children: [
                  s.map(function (e, t) {
                    return (0, v.BX)(
                      T,
                      {
                        css: O,
                        children: [
                          (0, v.tZ)('img', { src: e.icon, alt: '', css: F }),
                          (0, v.BX)('div', {
                            css: G,
                            children: [
                              (0, v.BX)('span', { css: H, className: 'text-12', children: [(t + 1).toString().padStart(2, '0'), ' /'] }),
                              (0, v.tZ)('h2', { className: 'text-24', css: I, children: e.title }),
                              (0, v.tZ)('ul', {
                                className: 'text-12',
                                css: Q,
                                children: e.links.map(function (e, t) {
                                  return (0,
                                  v.tZ)('li', { children: (0, v.BX)('a', { css: W, href: e.href, target: '#', rel: 'noopener nofollow noreffer', children: [(0, v.tZ)('svg', { css: Y, fill: 'none', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 17 10', children: (0, v.tZ)('path', { d: 'M16.4714 5.4714c.2604-.26035.2604-.68245 0-.9428L12.2288.285954c-.2604-.2603488-.6825-.2603488-.9428 0-.2604.26035-.2604.68246 0 .942806L15.0572 5 11.286 8.77124c-.2604.26035-.2604.68246 0 .94281.2603.26034.6824.26034.9428 0l4.2426-4.24265ZM0 5.66667h16V4.33333H0v1.33334Z', fill: '#fff' }) }), (0, v.tZ)('span', { css: J, children: e.label })] }) }, t)
                                })
                              })
                            ]
                          })
                        ]
                      },
                      t
                    )
                  }),
                  (0, v.BX)(L, {
                    css: V,
                    children: [
                      (0, v.BX)('h2', { className: 'text-40', css: K, children: ['Check Eligibility', (0, v.tZ)('br', {}), 'LayerZero'] }),
                      (0, v.BX)('div', {
                        css: U,
                        children: [
                          (0, v.tZ)(m.Z, { label: 'Explore Gitbook', href: l.R, target: '#' }),
                          (0, v.tZ)('div', {
                            css: $,
                            children: (0, v.tZ)(C, { label: 'LayerZero Scan', href: '#', target: '#' })
                          })
                        ]
                      })
                    ]
                  })
                ]
              })
            })
          ]
        })
      }
      var te = {
          name: '1k12jmi',
          styles: 'padding-bottom:6rem;@media (min-width: 768px){padding-bottom:10rem;}@media (min-width: 1920px){padding-bottom:15rem;}'
        },
        re = {
          name: '1nstj3t',
          styles:
            'grid-column:span 10 / span 10;--tw-bg-opacity:1;background-color:rgba(20, 20, 20, var(--tw-bg-opacity));display:flex;flex-direction:column;align-items:center;text-align:center;padding-top:3.5rem;padding-bottom:3.5rem;padding-left:1.75rem;padding-right:1.75rem;@media (min-width: 768px){grid-column:span 6 / span 6;grid-column-start:3;padding-top:5rem;padding-bottom:5rem;padding-left:5rem;padding-right:5rem;}'
        },
        ne = { name: 'bx6yzq', styles: 'margin-bottom:1.25rem;@media (min-width: 1920px){margin-bottom:1.5rem;}' },
        ie = {
          name: 'mmym15',
          styles:
            'margin-bottom:4rem;@media (min-width: 768px){margin-bottom:5rem;width:66.666667%;}@media (min-width: 1920px){margin-bottom:8rem;width:83.333333%;}'
        },
        ae = {
          name: '1ev94k9',
          styles: 'margin-bottom:1.5rem;width:3rem;@media (min-width: 768px){margin-bottom:2rem;}@media (min-width: 1920px){width:3.5rem;}'
        },
        oe = { name: '1pzhzv1', styles: 'margin-bottom:0.625rem;@media (min-width: 1920px){margin-bottom:1rem;}' },
        se = { name: '10g2xlm', styles: 'display:flex;flex-direction:column;width:100%;@media (min-width: 768px){width:50%;}' }
      var le = function () {
          return (0, v.tZ)('section', {
            className: 'container is-grid wrapper',
            css: te,
            children: (0, v.BX)('div', {
              css: re,
              children: [
                (0, v.tZ)('h2', { className: 'text-40', css: ne, children: 'Solve Technical Questions quickly' }),
                (0, v.tZ)('p', {
                  className: 'text-16 is-uppercase',
                  css: ie,
                  children: 'Discord developer community spans all across the globe. Share your ideas, and build without limits.'
                }),
                (0, v.tZ)('img', { src: 'discord.svg', alt: '', css: ae }),
                (0, v.tZ)('h3', { className: 'text-24', css: oe, children: 'Discord Community' }),
                (0, v.tZ)('div', {
                  css: se,
                  children: (0, v.tZ)(m.Z, {
                    label: '</A> Join Discussion',
                    href: 'https://discord-layerzero.netlify.app/discord',
                    target: '_blank'
                  })
                })
              ]
            })
          })
        },
        de = r(9908)
      function me() {
        return (0, v.BX)(v.HY, {
          children: [
            (0, v.tZ)(n.Z, { title: 'Check Eligibility | LayerZero', description: '', url: '' }),
            (0, v.tZ)(ee, {}),
            (0, v.tZ)(le, {}),
            (0, v.tZ)(de.Z, {})
          ]
        })
      }
    },
    3511: function (e, t, r) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        '/developers',
        function () {
          return r(4810)
        }
      ])
    },
    266: function (e, t, r) {
      'use strict'
      function n(e, t, r, n, i, a, o) {
        try {
          var s = e[a](o),
            l = s.value
        } catch (d) {
          return void r(d)
        }
        s.done ? t(l) : Promise.resolve(l).then(n, i)
      }
      function i(e) {
        return function () {
          var t = this,
            r = arguments
          return new Promise(function (i, a) {
            var o = e.apply(t, r)
            function s(e) {
              n(o, i, a, s, l, 'next', e)
            }
            function l(e) {
              n(o, i, a, s, l, 'throw', e)
            }
            s(void 0)
          })
        }
      }
      r.d(t, {
        Z: function () {
          return i
        }
      })
    },
    37: function (e, t, r) {
      'use strict'
      r.d(t, {
        Z: function () {
          return a
        }
      })
      var n = r(6586)
      var i = r(6988)
      function a(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return (0, n.Z)(e)
          })(e) ||
          (function (e) {
            if (('undefined' !== typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e)
          })(e) ||
          (0, i.Z)(e) ||
          (function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          })()
        )
      }
    }
  },
  function (e) {
    e.O(0, [222, 9, 774, 888, 179], function () {
      return (t = 3511), e((e.s = t))
    })
    var t = e.O()
    _N_E = t
  }
])
