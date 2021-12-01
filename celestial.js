! function() {
   var t = {
      version: "0.7.25",
      container: null,
      data: []
   };
   var e = .035,
      a = 1.4,
      n = 2e3,
      r = 2500,
      s = 1500,
      o = 10,
      i = 1;
   var l, c, p, d, u, h, f = {},
      m = {};
   if (t.display = function(y) {
         var g, M, w = t.container,
            x = [],
            T = 0,
            P = !1;
         st((l = V.set(y).applyDefaults(y)).zoomextend) && (o = l.zoomextend), st(l.zoomlevel) && (i = l.zoomlevel);
         var I = Q(l.container);
         if (I) {
            g = "#" + l.container;
            var q = window.getComputedStyle(I, null);
            parseInt(q.width) || l.width || (I.style.width = X(I.parentNode.clientWidth))
         } else g = "body", I = null;
         var E = [16, 16],
            C = Qt(),
            H = st(l.background.width) ? C + l.background.width : C,
            B = window.devicePixelRatio || 1,
            G = Xt(l.projection);
         if (G) {
            l.lines.graticule.lat && "outline" === l.lines.graticule.lat.pos[0] && (G.scale -= 2);
            var U = G.ratio,
               W = Math.round(C / U),
               K = Math.round(H / U),
               et = G.scale * C / 1024,
               at = l.stars.size,
               rt = l.dsos.size || at,
               it = l.stars.exponent,
               lt = l.dsos.exponent || it,
               ct = 1,
               pt = S(l.center),
               dt = l.datapath;
            "body" !== g && (Q(l.container).style.height = X(K)), c = t.projection(l.projection).rotate(pt).translate([H / 2, K / 2]).scale(et * i), p = d3.geo.zoom().projection(c).center([H / 2, K / 2]).scaleExtent([et, et * o]).on("zoom.redraw", xt), et *= i;
            var ut = d3.select(g).selectAll("canvas"),
               ht = "" !== l.culture && "iau" !== l.culture ? l.culture : "";
            0 === ut[0].length && (ut = d3.select(g).append("canvas")), ut.style("width", X(H)).style("height", X(K)).attr("width", H * B).attr("height", K * B);
            var ft = ut.node().getContext("2d");
            ft.setTransform(B, 0, 0, B, 0, 0);
            var mt = d3.geo.graticule().minorStep([15, 10]);
            d = d3.geo.path().projection(c).context(ft), w ? w.selectAll("*").remove() : w = d3.select(g).append("container"), l.interactive ? (ut.call(p), d3.select(g).on("dblclick", (function() {
               return vt(1.5625), !1
            }))) : ut.attr("style", "cursor: default!important"), Ot(G.clip), d3.select(window).on("resize", wt), !0 === l.controls && null === Q("celestial-zoomin") && (d3.select(g).append("input").attr("type", "button").attr("id", "celestial-zoomin").attr("value", "+").on("click", (function() {
               return vt(1.25), !1
            })), d3.select(g).append("input").attr("type", "button").attr("id", "celestial-zoomout").attr("value", "−").on("click", (function() {
               return vt(.8), !1
            }))), u = d3.geo.circle().angle([90]), h = d3.geo.circle().angle([179.9]), Pt(l), null === Q("error") && d3.select("body").append("div").attr("id", "error"), null === Q("loc") ? Gt(l) : !0 === l.location && "zenith" === l.follow && bt({
               center: t.zenith()
            }), !0 !== l.location && !0 !== l.formFields.location || (d3.select("#location").style("display", "inline-block"), qt("horizon-show", G.clip), qt("daylight-show", !G.clip)), this.container = w, this.clip = Tt, this.map = d, this.mapProjection = c, this.context = ft, this.metrics = function() {
               return {
                  width: C,
                  height: W,
                  margin: E,
                  scale: c.scale()
               }
            }, this.setStyle = St, this.setTextStyle = jt;
            this.setStyleA = It, this.setConstStyle = function(t, e) {
               var a = R(e);
               ft.font = a[t]
            }, this.symbol = Z.symbol, this.dsoSymbol = Ct, this.redraw = xt, this.resize = function(t) {
               return void 0 !== t && (nt(t, "width") ? l.width = t.width : st(t) && (l.width = t)), wt(!0), l.width
            }, this.reload = function(e) {
               var a;
               e && Object.assign(l, V.set(e)), "center" === l.follow && nt(l, "center") ? a = S(l.center) : "zenith" === l.follow && (a = S(t.zenith())), a && c.rotate(a), w.selectAll("*").remove(), yt()
            }, this.apply = function(t) {
               Mt(t)
            }, this.reproject = function(t) {
               return kt(t)
            }, this.rotate = function(t) {
               return t ? bt(t) : l.center
            }, this.zoomBy = function(t) {
               return t ? vt(t) : c.scale() / et
            }, this.color = function(t) {
               return t && nt(l.dsos.symbols, t) ? l.dsos.symbols[t].fill : "#000"
            }, this.starColor = Yt, this.animate = function(t, e) {
               t && (x = t, T = 0, P = !!e, te())
            }, this.stop = function(t) {
               ee(), !0 === t && (x = [])
            }, this.go = function(t) {
               x.length < 1 || (t && t < x.length && (T = t), te())
            }, yt()
         }

         function yt() {
            for (var e in Ot(G.clip), w.append("path").datum(mt.outline).attr("class", "outline"), w.append("path").datum(u).attr("class", "horizon"), w.append("path").datum(h).attr("class", "daylight"), "equatorial" === l.transform ? mt.minorStep([15, 10]) : mt.minorStep([10, 10]), l.lines) nt(l.lines, e) && ("graticule" === e ? (w.append("path").datum(mt).attr("class", "graticule"), nt(l.lines.graticule, "lon") && l.lines.graticule.lon.pos.length > 0 && w.selectAll(".gridvalues_lon").data(N("lon", l.lines.graticule.lon.pos)).enter().append("path").attr("class", "graticule_lon"), nt(l.lines.graticule, "lat") && l.lines.graticule.lat.pos.length > 0 && w.selectAll(".gridvalues_lat").data(N("lat", l.lines.graticule.lat.pos)).enter().append("path").attr("class", "graticule_lat")) : w.append("path").datum(d3.geo.circle().angle([90]).origin(z(b[e], j[l.transform]))).attr("class", e));
            d3.json(dt + "mw.json", (function(t, e) {
               if (t) return window.alert("Data file could not be loaded or doesn't exist. See readme.md"), console.warn(t);
               var a = L(e, l.transform);
               var n = _(a);
               w.selectAll(".mway").data(a.features).enter().append("path").attr("class", "mw"), w.selectAll(".mwaybg").data(n.features).enter().append("path").attr("class", "mwbg"), xt()
            })), d3.json(dt + Ft("constellations"), (function(e, a) {
               if (e) return console.warn(e);
               var n = L(a, l.transform);
               w.selectAll(".constnames").data(n.features).enter().append("text").attr("class", "constname"), t.constellations = F(n), xt()
            })), d3.json(dt + Ft("constellations", "borders"), (function(t, e) {
               if (t) return console.warn(t);
               var a = L(e, l.transform);
               w.selectAll(".bounds").data(a.features).enter().append("path").attr("class", "boundaryline"), xt()
            })), d3.json(dt + Ft("constellations", "lines"), (function(t, e) {
               if (t) return console.warn(t);
               var a = L(e, l.transform);
               w.selectAll(".lines").data(a.features).enter().append("path").attr("class", "constline"), Ht(), xt()
            })), d3.json(dt + l.stars.data, (function(t, e) {
               if (t) return console.warn(t);
               var a = L(e, l.transform);
               w.selectAll(".stars").data(a.features).enter().append("path").attr("class", "star"), xt()
            })), d3.json(dt + Ft("starnames"), (function(t, e) {
               if (t) return console.warn(t);
               Object.assign(f, e), xt()
            })), d3.json(dt + l.dsos.data, (function(t, e) {
               if (t) return console.warn(t);
               var a = L(e, l.transform);
               w.selectAll(".dsos").data(a.features).enter().append("path").attr("class", "dso"), xt()
            })), d3.json(dt + Ft("dsonames"), (function(t, e) {
               if (t) return console.warn(t);
               Object.assign(m, e), xt()
            })), d3.json(dt + Ft("planets"), (function(t, e) {
               if (t) return console.warn(t);
               var a = D(e, l.transform);
               w.selectAll(".planets").data(a).enter().append("path").attr("class", "planet"), xt()
            })), t.data.length > 0 && t.data.forEach((function(t) {
               nt(t, "file") ? d3.json(t.file, t.callback) : setTimeout(t.callback, 0)
            }), this), l.lang && "" != l.lang && Mt(t.setLanguage(l.lang))
         }

         function vt(t) {
            if (t && 1 !== t) {
               var e = c.scale(),
                  a = e * t,
                  n = p.scaleExtent(),
                  r = s * Math.sqrt(Math.abs(1 - t));
               a < n[0] && (a = n[0]), a > n[1] && (a = n[1]);
               var o = d3.interpolateNumber(e, a);
               return d3.select({}).transition().duration(r).tween("scale", (function() {
                  return function(t) {
                     var e = o(t);
                     c.scale(e), xt()
                  }
               })).transition().duration(0).tween("scale", (function() {
                  p.scale(a), xt()
               })), r
            }
         }

         function Mt(t) {
            l = V.set(t), xt()
         }

         function bt(t) {
            var r = l.center,
               s = c.rotate(),
               o = c.scale(),
               i = n,
               p = !1,
               d, u, h, f = l.orientationfixed;
            tt(s[1], 1) === -tt(t.center[1], 1) && (p = !0), l = l.set(t);
            var m = tt(d3.geo.distance(r, l.center), 2);
            var y = d3.geo.distance([r[2], 0], [l.center[2], 0]);
            return m < e && y < e ? (pt = S(l.center), c.rotate(pt), xt()) : (u = o > et * a ? d3.interpolateNumber(o, et) : function() {
               return o
            }, h = 0 === y ? function() {
               return s[2]
            } : gt(r[2], l.center[2]), m > 3.14 && (l.center[0] -= .01), l.orientationfixed = !1, d = 0 === m ? function() {
               return l.center
            } : d3.geo.interpolate(r, l.center), i = 0 !== m ? i * m : i * y, d3.select({}).transition().duration(i).tween("center", (function() {
               return function(t) {
                  var e = S(d(t));
                  e[2] = h(t);
                  var a = u(t < .5 ? t : 1 - t);
                  p && (e[1] = s[1]), c.scale(a), c.rotate(e), xt()
               }
            })).transition().duration(0).tween("center", (function() {
               l.orientationfixed = f, pt = S(l.center), c.rotate(pt), xt()
            }))), i
         }

         function wt(t) {
            C = Qt(), (l.width !== C || t) && (W = C / U, et = G.scale * C / 1024, ut.style("width", X(C)).style("height", X(W)).attr("width", C * B).attr("height", W * B), p.scaleExtent([et, et * o]).scale(et * i), c.translate([H / 2, K / 2]).scale(et * i), I && (I.style.height = X(W)), et *= i, xt())
         }

         function kt(e) {
            var a = Xt(e.projection);
            if (a) {
               var n = c.rotate(),
                  s = c.center(),
                  u = c.scale(),
                  h = p.scaleExtent(),
                  f = [],
                  m = t.projection(l.projection).center(s).translate([H / 2, K / 2]).scale([h[0]]),
                  y = r,
                  g = 0,
                  M = null,
                  b = d3.interpolateNumber(U, a.ratio);
               G.clip != a.clip && (y = 0), Ot(a.clip);
               var w = t.projection(e.projection).center(s).translate([H / 2, H / a.ratio / 2]).scale([a.scale * C / 1024]);
               var k = l.adaptable;
               return u > h[0] ? (g = vt(.1), setTimeout(kt, g, e), g + y) : ((l.location || l.formFields.location) && (qt("horizon-show", a.clip), qt("daylight-show", !a.clip)), c = v(m, w), l.adaptable = !1, d3.select({}).transition().duration(y).tween("projection", (function() {
                  return function(t) {
                     c.alpha(t).rotate(n), d.projection(c), Ot(a.clip), U = b(t), W = C / U, ut.style("width", X(C)).style("height", X(W)).attr("width", C * B).attr("height", W * B), I && (I.style.height = X(W)), xt()
                  }
               })).transition().duration(0).tween("projection", (function() {
                  U = (G = a).ratio, W = C / G.ratio, et = G.scale * C / 1024, ut.style("width", X(C)).style("height", X(W)).attr("width", C * B).attr("height", W * B), I && (I.style.height = X(W)), l.projection = e.projection, c = t.projection(e.projection).rotate(n).translate([H / 2, K / 2]).scale(et * i), d.projection(c), Ot(G.clip), p.projection(c).scaleExtent([et, et * o]).scale(et * i), l.adaptable = k, et *= i, xt()
               })), y)
            }
         }

         function xt() {
            var e = c.rotate();
            for (var a in ft.setTransform(B, 0, 0, B, 0, 0), l.adaptable && (ct = Math.sqrt(c.scale() / et)), ct || (ct = 1), at = l.stars.size, it = l.stars.exponent, rt = l.dsos.size || at, lt = l.dsos.exponent, l.orientationfixed && l.center.length > 2 && (e[2] = l.center[2], c.rotate(e)), l.center = [-e[0], -e[1], e[2]], _t(l.center, l.transform), Zt(), zt(), l.mw.show && (w.selectAll(".mw").each((function(t) {
                  St(l.mw.style), d(t), ft.fill()
               })), "supergalactic" !== l.transform && l.background.opacity > .95 && w.selectAll(".mwbg").each((function(t) {
                  St(l.background), d(t), ft.fill()
               }))), l.lines) nt(l.lines, a) && !0 === l.lines[a].show && (St(l.lines[a]), w.selectAll("." + a).attr("d", d), ft.stroke());
            if (nt(l.lines.graticule, "lon") && (jt(l.lines.graticule.lon), w.selectAll(".graticule_lon").each((function(t, e) {
                  if (Tt(t.geometry.coordinates)) {
                     var a = c(t.geometry.coordinates);
                     Kt(a, t.properties.orientation), ft.fillText(t.properties.value, a[0], a[1])
                  }
               }))), nt(l.lines.graticule, "lat") && (jt(l.lines.graticule.lat), w.selectAll(".graticule_lat").each((function(t, e) {
                  if (Tt(t.geometry.coordinates)) {
                     var a = c(t.geometry.coordinates);
                     Kt(a, t.properties.orientation), ft.fillText(t.properties.value, a[0], a[1])
                  }
               }))), l.constellations.bounds && (w.selectAll(".boundaryline").each((function(e) {
                  if (St(l.constellations.boundStyle), t.constellation) {
                     var a = new RegExp("\\b" + t.constellation + "\\b"); - 1 !== e.ids.search(a) && (ft.lineWidth *= 1.5, ft.globalAlpha = 1, ft.setLineDash([]))
                  }
                  d(e), ft.stroke()
               })), ft.setLineDash([])), l.constellations.lines && w.selectAll(".constline").each((function(t) {
                  It(t.properties.rank, l.constellations.lineStyle), d(t), ft.stroke()
               })), zt(!0), l.constellations.names && w.selectAll(".constname").each((function(t) {
                  if (Tt(t.geometry.coordinates)) {
                     It(t.properties.rank, l.constellations.nameStyle);
                     var e = c(t.geometry.coordinates);
                     ft.fillText(Jt(t), e[0], e[1])
                  }
               })), l.stars.show && (St(l.stars.style), w.selectAll(".star").each((function(t) {
                  if (Tt(t.geometry.coordinates) && t.properties.mag <= l.stars.limit) {
                     var e = c(t.geometry.coordinates),
                        a = Rt(t);
                     ft.fillStyle = Yt(t), ft.beginPath(), ft.arc(e[0], e[1], a, 0, 2 * Math.PI), ft.closePath(), ft.fill(), l.stars.designation && t.properties.mag <= l.stars.designationLimit * ct && (jt(l.stars.designationStyle), ft.fillText(Wt(t.id), e[0] + a, e[1])), l.stars.propername && t.properties.mag <= l.stars.propernameLimit * ct && (jt(l.stars.propernameStyle), ft.fillText(Vt(t.id), e[0] - a, e[1]))
                  }
               }))), l.dsos.show && w.selectAll(".dso").each((function(t) {
                  if (Tt(t.geometry.coordinates) && Et(t.properties, l.dsos.limit)) {
                     var e = c(t.geometry.coordinates),
                        a = t.properties.type;
                     !0 === l.dsos.colors ? St(l.dsos.symbols[a]) : St(l.dsos.style);
                     var n = Ct(t, e);
                     nt(l.dsos.symbols[a], "stroke") ? ft.stroke() : ft.fill(), l.dsos.names && Et(t.properties, l.dsos.nameLimit * ct) && (jt(l.dsos.nameStyle), !0 === l.dsos.colors && (ft.fillStyle = l.dsos.symbols[a].fill), ft.fillText(Ut(t), e[0] + n, e[1] - n))
                  }
               })), (l.location || l.formFields.location) && l.planets.show && t.origin) {
               var n = t.date(),
                  r = t.origin(n).spherical();
               w.selectAll(".planet").each((function(t) {
                  var e = t.id(),
                     a = 12 * ct,
                     s = t(n).equatorial(r),
                     o = z(s.ephemeris.pos, j[l.transform]);
                  if (Tt(o)) {
                     var i = c(o),
                        p = l.planets.symbols[e];
                     if ("letter" === l.planets.symbolType ? (jt(l.planets.symbolStyle), ft.fillStyle = p.fill, ft.fillText(p.letter, i[0], i[1])) : "lun" === e ? (nt(p, "size") && st(p.size) && (a = p.size * ct), ft.fillStyle = p.fill, Z.symbol().type("crescent").size(a * a).age(s.ephemeris.age).position(i)(ft)) : "disk" === l.planets.symbolType ? (a = nt(p, "size") && st(p.size) ? p.size * ct : $t(s.ephemeris), ft.fillStyle = p.fill, Z.symbol().type("circle").size(a * a).position(i)(ft), ft.fill()) : "symbol" === l.planets.symbolType && (jt(l.planets.symbolStyle), ft.fillStyle = p.fill, ft.fillText(p[l.planets.symbolType], i[0], i[1])), l.planets.names) {
                        var d = s[l.planets.namesType];
                        jt(l.planets.nameStyle), ft.fillStyle = p.fill, ft.fillText(d, i[0] - a / 2, i[1] + a / 2)
                     }
                  }
               }))
            }
            if (t.data.length > 0 && t.data.forEach((function(t) {
                  t.redraw()
               })), (l.location || l.formFields.location) && l.daylight.show && G.clip) {
               var s = O("sol");
               if (s) {
                  var o = t.zenith(),
                     i = s.ephemeris.pos,
                     p = d3.geo.distance(o, i),
                     f = c(i);
                  h.origin(i), At(p, f), w.selectAll(".daylight").datum(h).attr("d", d), ft.fill(), ft.fillStyle = "#fff", Tt(i) && (ft.beginPath(), ft.arc(f[0], f[1], 6, 0, 2 * Math.PI), ft.closePath(), ft.fill())
               }
            }(l.location || l.formFields.location) && l.horizon.show && !G.clip && (u.origin(t.nadir()), St(l.horizon), w.selectAll(".horizon").datum(u).attr("d", d), ft.fill(), l.horizon.stroke && ft.stroke()), l.controls && Dt(c.scale()), A && t.runCallback()
         }

         function zt(t) {
            var e = c.rotate(),
               a = Xt(l.projection);
            c.rotate([0, 0]), St(l.background), w.selectAll(".outline").attr("d", d), !0 === t ? (ft.globalAlpha = 1, ft.stroke()) : ft.fill(), c.rotate(e)
         }

         function Tt(t) {
            return G.clip && d3.geo.distance(l.center, t) > k ? 0 : 1
         }

         function St(t) {
            ft.fillStyle = t.fill || null, ft.strokeStyle = t.stroke || null, ft.lineWidth = t.width || null, ft.globalAlpha = null !== t.opacity ? t.opacity : 1, ft.font = t.font || null, nt(t, "dash") ? ft.setLineDash(t.dash) : ft.setLineDash([]), ft.beginPath()
         }

         function jt(t) {
            ft.fillStyle = t.fill, ft.textAlign = t.align || "left", ft.textBaseline = t.baseline || "bottom", ft.globalAlpha = null !== t.opacity ? t.opacity : 1, ft.font = t.font
         }

         function It(t, e) {
            t = t || 1, ft.fillStyle = ot(e.fill) ? e.fill[t - 1] : null, ft.strokeStyle = ot(e.stroke) ? e.stroke[t - 1] : null, ft.lineWidth = ot(e.width) ? e.width[t - 1] : null, ft.globalAlpha = ot(e.opacity) ? e.opacity[t - 1] : 1, ft.font = ot(e.font) ? e.font[t - 1] : null, ft.textAlign = e.align || "left", ft.textBaseline = e.baseline || "bottom", ft.beginPath()
         }

         function At(t, e) {
            var a, n, r, s, o = 1.36,
               i = 1.885;
            if (t > i) return ft.fillStyle = "transparent", ft.globalAlpha = 0, void 0;
            t <= o ? (n = "#daf1fa", r = "#93d7f0", s = "#57c0e8", a = -(o - t) / 10) : (a = (t - o) / (i - o), n = d3.interpolateLab("#daf1fa", "#e8c866")(a), r = d3.interpolateLab("#93c7d0", "#ff854a")(a), s = d3.interpolateLab("#57b0c8", "#6caae2")(a));
            var l = ft.createRadialGradient(e[0], e[1], 0, e[0], e[1], 300);
            l.addColorStop(0, n), l.addColorStop(.2 + .4 * a, r), l.addColorStop(1, s), ft.fillStyle = l, ft.globalAlpha = .9 * (1 - Lt(a, 1.4))
         }

         function Lt(t, e) {
            return (Math.pow(Math.E, t * e) - 1) / (Math.pow(Math.E, e) - 1)
         }

         function Dt(t) {
            var e = Q("celestial-zoomin"),
               a = Q("celestial-zoomout"),
               n = G.scale * C / 1024;
            e && a && (e.disabled = t >= n * o * .99, a.disabled = t <= n)
         }

         function Ot(t) {
            t ? c.clipAngle(90) : c.clipAngle(null)
         }

         function Ft(t, e, a) {
            var n;
            return t + (e = e ? "." + e : "") + (nt($[t], ht) ? "." + ht : "") + (a = a ? "." + a : ".json")
         }

         function Et(t, e) {
            return 999 === t.mag && Math.sqrt(parseInt(t.dim)) > e || 999 !== t.mag && t.mag <= e
         }

         function Ct(t, e) {
            var a = t.properties;
            var n = Bt(a) || 9,
               r = Nt(a.type);
            return Z.symbol().type(r).size(n).position(e)(ft), Math.sqrt(n) / 2
         }

         function Nt(t) {
            return t && nt(l.dsos.symbols, t) ? l.dsos.symbols[t].shape : "circle"
         }

         function Bt(t) {
            return t.mag && 999 !== t.mag ? Math.pow(2 * rt * ct - t.mag, lt) : Math.pow(parseInt(t.dim) * rt * ct / 7, .5)
         }

         function Ut(t) {
            var e = l.dsos.namesType,
               a = t.id;
            return "desig" !== e && nt(m, a) && nt(m[a], e) ? m[a][e] : t.properties.desig
         }

         function Wt(t) {
            return nt(f, t) ? f[t][l.stars.designationType] : ""
         }

         function Vt(t) {
            var e = l.stars.propernameType;
            return nt(f, t) ? nt(f[t], e) ? f[t][e] : f[t].name : ""
         }

         function Rt(t) {
            var e = t.properties.mag;
            if (null === e) return .1;
            var a = at * ct * Math.exp(it * (e + 2));
            return Math.max(a, .1)
         }

         function Yt(t) {
            var e = t.properties.bv;
            return !l.stars.colors || isNaN(e) ? l.stars.style.fill : Y(e)
         }

         function Jt(t) {
            return t.properties[l.constellations.namesType]
         }

         function $t(t) {
            var e = t.mag;
            if (null === e) return 2;
            var a = 4 * ct * Math.exp(-.05 * (e + 2));
            return Math.max(a, 2)
         }

         function Kt(t, e) {
            var a = e.split(""),
               n = "center",
               r = "middle";
            for (var s = a.length - 1; s >= 0; s--) switch (a[s]) {
               case "N":
                  r = "bottom";
                  break;
               case "S":
                  r = "top";
                  break;
               case "E":
                  n = "left", t[0] += 2;
                  break;
               case "W":
                  n = "right", t[0] -= 2;
                  break
            }
            return ft.textAlign = n, ft.textBaseline = r, t
         }

         function Zt() {
            ft.clearRect(0, 0, H + E[0], K + E[1])
         }

         function Qt() {
            var t = 0;
            return t = st(l.width) && l.width > 0 ? l.width : I ? I.getBoundingClientRect().width - 2 * E[0] : window.getBoundingClientRect().width - 2 * E[0]
         }

         function Xt(t) {
            if (nt(J, t)) {
               var e = J[t];
               return nt(e, "ratio") || (e.ratio = 2), e
            }
         }

         function te() {
            if (x && !(x.length < 1)) {
               var t, e = x[T];
               switch (e.param) {
                  case "projection":
                     t = kt({
                        projection: e.value
                     });
                     break;
                  case "center":
                     t = bt({
                        center: e.value
                     });
                     break;
                  case "zoom":
                     t = vt(e.value)
               }
               e.callback && setTimeout(e.callback, t), T++, !0 === P && T === x.length && (T = 0), t = 0 === e.duration || e.duration < t ? t : e.duration, T < x.length && (M = setTimeout(te, t))
            }
         }

         function ee() {
            clearTimeout(M)
         }
      }, "object" == typeof module && module.exports) {
      var y = require("./lib/d3.js"),
         g = require("./lib/d3.geo.projection.js");
      module.exports = {
         Celestial: function() {
            return t
         },
         d3: function() {
            return y
         },
         "d3.geo.projection": function() {
            return g
         }
      }
   }

   function v(t, e) {
      var a = d3.geo.projection(o).scale(1),
         n = a.center,
         r = a.translate,
         s;

      function o(a, n) {
         var r = t([a *= 180 / Math.PI, n *= 180 / Math.PI]),
            o = e([a, n]);
         return [(1 - s) * r[0] + s * o[0], (s - 1) * r[1] - s * o[1]]
      }
      return a.alpha = function(o) {
         if (!arguments.length) return s;
         s = +o;
         var i = t.center(),
            l = e.center(),
            c = t.translate(),
            p = e.translate();
         return n([(1 - s) * i[0] + s * l[0], (1 - s) * i[1] + s * l[1]]), r([(1 - s) * c[0] + s * p[0], (1 - s) * c[1] + s * p[1]]), a
      }, delete a.translate, delete a.center, a.alpha(0)
   }
   t.projection = function(t) {
      var e, a, n;
      if (!nt(J, t)) throw new Error("Projection not supported: " + t);
      return e = J[t], a = null !== e.arg ? d3.geo[t].raw(e.arg) : d3.geo[t].raw, (n = function(t, e) {
         var n;
         return a(-t, e)
      }).invert = function(t, e) {
         try {
            var n = a.invert(t, e);
            return n[0] = n && -n[0], n
         } catch (t) {
            console.log(t)
         }
      }, d3.geo.projection(n)
   };
   var M = {
      equatorial: [0, 0, 0],
      ecliptic: [0, 0, 23.4393],
      galactic: [93.5949, 28.9362, -58.5988],
      supergalactic: [137.31, 59.5283, 57.7303]
   };
   var b = {
      equatorial: [0, 90],
      ecliptic: [-90, 66.5607],
      galactic: [-167.1405, 27.1283],
      supergalactic: [-76.2458, 15.7089]
   };
   t.eulerAngles = function() {
      return M
   }, t.poles = function() {
      return b
   };
   var w = 2 * Math.PI,
      k = Math.PI / 2,
      x = Math.PI / 180;

   function z(t, e) {
      var a;
      return T(t.map((function(t) {
         return t * x
      })), e).map((function(t) {
         return t / x
      }))
   }

   function T(t, e) {
      var a, n, r, s, o, i, l, c, p, d, u = 1e-5;
      return e ? ((i = t[0]) < 0 && (i += w), l = t[1], i -= e[0], s = e[1], o = e[2], a = Math.sin(l) * Math.sin(s) - Math.cos(l) * Math.cos(s) * Math.cos(i), Math.abs(a) < u && (a = -Math.cos(l + s) + Math.cos(l) * Math.cos(s) * (1 - Math.cos(i))), n = -Math.cos(l) * Math.sin(i), (p = o + (c = 0 !== a || 0 !== n ? Math.atan2(n, a) : i - Math.PI)) > Math.PI && (p -= w), i % Math.PI == 0 ? ((d = l + Math.cos(i) * s) > k && (d = Math.PI - d), d < -k && (d = -Math.PI - d)) : (r = Math.sin(l) * Math.cos(s) + Math.cos(l) * Math.sin(s) * Math.cos(i), Math.abs(r) > .99 ? (d = Math.abs(Math.acos(Math.sqrt(a * a + n * n))), r < 0 && (d *= -1)) : d = Math.asin(r)), [p, d]) : t
   }

   function S(t) {
      if (null === t || t.length <= 0) return [0, 0, 0];
      var e = M.equatorial;
      return t[2] || (t[2] = 0), [e[0] - t[0], e[1] - t[1], e[2] + t[2]]
   }
   var j = {
      ecliptic: [-90, 23.4393, 90],
      "inverse ecliptic": [90, 23.4393, -90],
      galactic: [-167.1405, 62.8717, 122.9319],
      "inverse galactic": [122.9319, 62.8717, -167.1405],
      supergalactic: [283.7542, 74.2911, 26.4504],
      "inverse supergalactic": [26.4504, 74.2911, 283.7542],
      init: function() {
         for (var t in this) this[t].constructor == Array && (this[t] = this[t].map((function(t) {
            return t * x
         })))
      },
      add: function(t, e) {
         if (e && t && 3 === e.length && !this.hasOwnProperty(t)) return this[t] = e.map((function(t) {
            return t * x
         })), this[t]
      }
   };
   j.init(), t.euler = function() {
      return j
   };
   var P = function(t, e, a) {
      var n = I(t, a[1]) - e[0];
      n < 0 && (n += 360), n *= x;
      var r = e[1] * x;
      var s = a[0] * x;
      var o = Math.asin(Math.sin(r) * Math.sin(s) + Math.cos(r) * Math.cos(s) * Math.cos(n));
      var i = Math.acos((Math.sin(r) - Math.sin(o) * Math.sin(s)) / (Math.cos(o) * Math.cos(s)));
      return Math.sin(n) > 0 && (i = 2 * Math.PI - i), [o / x, i / x, 0]
   };

   function I(t, e) {
      var a = t.getUTCFullYear();
      var n = t.getUTCMonth() + 1;
      var r = t.getUTCDate();
      var s = t.getUTCHours();
      var o = t.getUTCMinutes();
      var i = t.getUTCSeconds();
      1 != n && 2 != n || (a -= 1, n += 12);
      var l = Math.floor(a / 100);
      var c;
      var p;
      var d;
      var u = 2 - l + Math.floor(l / 4) + Math.floor(365.25 * a) + Math.floor(30.6001 * (n + 1)) - 730550.5 + r + (s + o / 60 + i / 3600) / 24;
      var h = u / 36525;
      var f = 280.46061837 + 360.98564736629 * u + 387933e-9 * h * h - h * h * h / 3871e4 + e;
      if (f > 0)
         while (f > 360) f -= 360;
      else
         while (f < 0) f += 360;
      return f
   }
   P.inverse = function(t, e, a) {
      var n = e[0] * x;
      var r = e[1] * x;
      var s = a[0] * x;
      var o = Math.asin(Math.sin(n) * Math.sin(s) + Math.cos(n) * Math.cos(s) * Math.cos(r));
      var i = ((Math.sin(n) - Math.sin(o) * Math.sin(s)) / (Math.cos(o) * Math.cos(s))).toFixed(6);
      var l;
      return i = Math.acos(i), i /= x, [I(t, a[1]) - i, o / x, 0]
   }, t.horizontal = P, t.ha = function(t, e, a) {
      var n = I(t, e) - a;
      return n < 180 && (n += 360), n
   };
   var A = !1;

   function q(t, e) {
      return z(t, j[e])
   }

   function L(t, e) {
      if ("equatorial" === e) return t;
      var a = j[e],
         n = t.features;
      for (var r = 0; r < n.length; r++) n[r].geometry.coordinates = C(n[r], a);
      return t
   }

   function D(e) {
      var a = [];
      for (var n in e)
         if (nt(e, n) && -1 !== l.planets.which.indexOf(n)) {
            var r = $t().id(n);
            nt(e[n], "parent") && r.parentBody(e[n].parent), r.elements(e[n].elements[0]).params(e[n]), "ter" === n ? t.origin = r : a.push(r)
         } return a
   }

   function O(e, a) {
      if (a = a || t.date(), t.origin) {
         var n = t.origin(a).spherical(),
            r;
         return t.container.selectAll(".planet").each((function(t) {
            e === t.id() && (r = t(a).equatorial(n))
         })), r
      }
   }

   function F(t) {
      var e = {},
         a = t.features;
      for (var n = 0; n < a.length; n++) e[a[n].id] = {
         center: a[n].properties.display.slice(0, 2),
         scale: a[n].properties.display[2]
      };
      return e
   }

   function _(t) {
      var e = {
         type: "FeatureCollection",
         features: [{
            type: "Feature",
            geometry: {
               type: "MultiPolygon",
               coordinates: []
            }
         }]
      };
      var a = t.features[0].geometry.coordinates[0];
      e.features[0].geometry.coordinates[0] = [];
      for (var n = 0; n < a.length; n++) e.features[0].geometry.coordinates[0][n] = a[n].slice().reverse();
      return e
   }

   function E() {}

   function C(t, e) {
      var a = [];
      switch (t.geometry.type) {
         case "Point":
            a = z(t.geometry.coordinates, e);
            break;
         case "LineString":
            a.push(G(t.geometry.coordinates, e));
            break;
         case "MultiLineString":
            a = U(t.geometry.coordinates, e);
            break;
         case "Polygon":
            a.push(G(t.geometry.coordinates[0], e));
            break;
         case "MultiPolygon":
            a.push(U(t.geometry.coordinates[0], e));
            break
      }
      return a
   }

   function N(t, e) {
      var a = [];
      if (!e) return [];
      ot(e) || (e = [e]);
      for (var n = 0; n < e.length; n++) switch (e[n]) {
         case "center":
            a = "lat" === t ? a.concat(B(t, l.center[0], "N")) : a.concat(B(t, l.center[1], "S"));
            break;
         case "outline":
            a = "lon" === t ? (a = a.concat(B(t, l.center[1] - 89.99, "S"))).concat(B(t, l.center[1] + 89.99, "N")) : (a = a.concat(B(t, l.center[0] - 179.99, "E"))).concat(B(t, l.center[0] + 179.99, "W"));
            break;
         default:
            if (st(e[n])) {
               a = "lat" === t ? a.concat(B(t, e[n], "N")) : a.concat(B(t, e[n], "S"));
               break
            }
      }
      return H(a)
   }

   function H(t) {
      var e = [];
      for (var a = 0; a < t.length; a++) {
         var n = {
            type: "Feature",
            id: a,
            properties: {},
            geometry: {
               type: "Point"
            }
         };
         n.properties.value = t[a].value, n.properties.orientation = t[a].orientation, n.geometry.coordinates = t[a].coordinates, e.push(n)
      }
      return e
   }

   function B(t, e, a) {
      var n, r, s, o, i, c = t,
         p = [],
         d = e;
      "equatorial" === l.transform && "lon" === c && (c = "ra"), "ra" === c ? (n = 0, r = 23, s = 1) : "lon" === c ? (n = 0, r = 350, s = 10) : (n = -80, r = 80, s = 10);
      for (var u = n; u <= r; u += s) {
         var h = a;
         "lat" === c ? (i = [d, u], o = u.toString() + "°", h += u < 0 ? "S" : "N") : "ra" === c ? (i = [15 * u, d], o = u.toString() + "ʰ") : (i = [u, d], o = u.toString() + "°"), p.push({
            coordinates: i,
            value: o,
            orientation: h
         })
      }
      return p
   }

   function G(t, e) {
      var a = [];
      for (var n = 0; n < t.length; n++) a.push(z(t[n], e));
      return a
   }

   function U(t, e) {
      var a = [];
      for (var n = 0; n < t.length; n++) a.push(G(t[n], e));
      return a
   }
   t.add = function(e) {
      var a = {};
      return nt(e, "type") ? "dso" !== e.type && "json" !== e.type || nt(e, "file") && nt(e, "callback") ? "line" !== e.type && "raw" !== e.type || nt(e, "callback") ? (nt(e, "file") && (a.file = e.file), a.type = e.type, nt(e, "callback") && (a.callback = e.callback), nt(e, "redraw") && (a.redraw = e.redraw), nt(e, "save") && (a.save = e.save), t.data.push(a), void 0) : console.log("Can't add data") : console.log("Can't add data file") : console.log("Missing type")
   }, t.remove = function(e) {
      if (null !== e && e < t.data.length) return t.data.splice(e, 1)
   }, t.clear = function() {
      t.data = []
   }, t.addCallback = function(e) {
      t.callback = e, A = null !== e
   }, t.runCallback = function(e) {
      A = !1, t.callback(), A = !0
   }, t.getData = L, t.getPoint = q, t.getPlanet = O;
   var W = {};
   var V = {
      width: 280,
      projection: "airy",
      transform: "equatorial",
      center: null,
      geopos: null,
      follow: "zenith",
      orientationfixed: !0,
      zoomlevel: null,
      zoomextend: 10,
      adaptable: !0,
      interactive: !1,
      form: !1,
      location: !1,
      formFields: {
         location: !0,
         general: !0,
         stars: !0,
         dsos: !0,
         constellations: !0,
         lines: !0,
         other: !0,
         download: !1
      },
      advanced: !0,
      daterange: [],
      settimezone: !0,
      timezoneid: "5DYRJSZCL694",
      controls: !1,
      lang: "",
      culture: "",
      container: "celestial-map",
      datapath: "data/",
      stars: {
         show: !0,
         limit: 6,
         colors: !1,
         style: {
            fill: "#000000",
            opacity: 1
         },
         designation: !1,
         designationType: "desig",
         designationStyle: {
            fill: "#ddddbb",
            font: "11px 'Palatino Linotype', Georgia, Times, 'Times Roman', serif",
            align: "left",
            baseline: "top"
         },
         designationLimit: 2.5,
         propername: !1,
         propernameType: "name",
         propernameStyle: {
            fill: "#ddddbb",
            font: "0px 'Palatino Linotype', Georgia, Times, 'Times Roman', serif",
            align: "right",
            baseline: "bottom"
         },
         propernameLimit: 1.5,
         size: 12,
         exponent: -.29,
         data: "stars.6.json"
      },
      dsos: {
         show: !1,
         limit: 6,
         colors: !0,
         style: {
            fill: "#cccccc",
            stroke: "#cccccc",
            width: 2,
            opacity: 1
         },
         names: !0,
         namesType: "desig",
         nameStyle: {
            fill: "#cccccc",
            font: "18px 'Lucida Sans Unicode', 'DejaVu Sans', Helvetica, Arial, serif",
            align: "left",
            baseline: "bottom"
         },
         nameLimit: 4,
         size: 7,
         exponent: 1.4,
         data: "dsos.bright.json",
         symbols: {
            gg: {
               shape: "circle",
               fill: "#ff0000"
            },
            g: {
               shape: "ellipse",
               fill: "#ff0000"
            },
            s: {
               shape: "ellipse",
               fill: "#ff0000"
            },
            s0: {
               shape: "ellipse",
               fill: "#ff0000"
            },
            sd: {
               shape: "ellipse",
               fill: "#ff0000"
            },
            e: {
               shape: "ellipse",
               fill: "#ff0000"
            },
            i: {
               shape: "ellipse",
               fill: "#ff0000"
            },
            oc: {
               shape: "circle",
               fill: "#ff9900",
               stroke: "#ff9900",
               width: 2
            },
            gc: {
               shape: "circle",
               fill: "#ff9900"
            },
            en: {
               shape: "square",
               fill: "#ff00cc"
            },
            bn: {
               shape: "square",
               fill: "#ff00cc"
            },
            sfr: {
               shape: "square",
               fill: "#cc00ff"
            },
            rn: {
               shape: "square",
               fill: "#0000ff"
            },
            pn: {
               shape: "diamond",
               fill: "#00cccc"
            },
            snr: {
               shape: "diamond",
               fill: "#ff00cc"
            },
            dn: {
               shape: "square",
               fill: "#999999",
               stroke: "#999999",
               width: 2
            },
            pos: {
               shape: "marker",
               fill: "#cccccc",
               stroke: "#cccccc",
               width: 1.5
            }
         }
      },
      constellations: {
         show: !0,
         names: !1,
         namesType: "desig",
         nameStyle: {
            fill: "#cccc99",
            align: "center",
            baseline: "middle",
            opacity: .7,
            font: ["12px 'Lucida Sans Unicode', Helvetica, Arial, sans-serif", "11px 'Lucida Sans Unicode', Helvetica, Arial, sans-serif", "11px 'Lucida Sans Unicode', Helvetica, Arial, sans-serif"]
         },
         lines: !0,
         lineStyle: {
            stroke: "#3a3939",
            width: 1,
            opacity: .65
         },
         bounds: !1,
         boundStyle: {
            stroke: "#ccff00",
            width: 2,
            opacity: .8,
            dash: [2, 6]
         }
      },
      mw: {
         show: !1,
         style: {
            fill: "#ffffff",
            opacity: "0.15"
         }
      },
      lines: {
         graticule: {
            show: !1,
            stroke: "#949494",
            width: 2.8,
            opacity: .7,
            lon: {
               pos: [],
               fill: "#eee",
               font: "10px 'Lucida Sans Unicode', Helvetica, Arial, sans-serif"
            },
            lat: {
               pos: [],
               fill: "#eee",
               font: "10px 'Lucida Sans Unicode', Helvetica, Arial, sans-serif"
            }
         },
         equatorial: {
            show: !1,
            stroke: "#aaaaaa",
            width: 1.3,
            opacity: .7
         },
         ecliptic: {
            show: !1,
            stroke: "#66cc66",
            width: 1.3,
            opacity: .7
         },
         galactic: {
            show: !1,
            stroke: "#cc6666",
            width: 1.3,
            opacity: .7
         },
         supergalactic: {
            show: !1,
            stroke: "#cc66cc",
            width: 1.3,
            opacity: .7
         }
      },
      background: {
         fill: "#efc8be",
         opacity: 1,
         stroke: "#efc8be",
         width: 2.5
      },
      horizon: {
         show: !1,
         stroke: "#cccccc",
         width: 1,
         fill: "#000000",
         opacity: .4
      },
      daylight: {
         show: !1
      },
      planets: {
         show: !0,
         which: ["sol", "mer", "ven", "ter", "lun", "mar", "jup", "sat", "ura", "nep"],
         symbols: {
            sol: {
               symbol: "☉",
               letter: "Su",
               fill: "#ffff00",
               size: 12
            },
            mer: {
               symbol: "☿",
               letter: "Me",
               fill: "#cccccc"
            },
            ven: {
               symbol: "♀",
               letter: "V",
               fill: "#eeeecc"
            },
            ter: {
               symbol: "⊕",
               letter: "T",
               fill: "#00ccff"
            },
            lun: {
               symbol: "●",
               letter: "L",
               fill: "#ffffff",
               size: 40
            },
            mar: {
               symbol: "♂",
               letter: "Ma",
               fill: "#ff6600"
            },
            cer: {
               symbol: "⚳",
               letter: "C",
               fill: "#cccccc"
            },
            ves: {
               symbol: "⚶",
               letter: "Ma",
               fill: "#cccccc"
            },
            jup: {
               symbol: "♃",
               letter: "J",
               fill: "#ffaa33"
            },
            sat: {
               symbol: "♄",
               letter: "Sa",
               fill: "#ffdd66"
            },
            ura: {
               symbol: "♅",
               letter: "U",
               fill: "#66ccff"
            },
            nep: {
               symbol: "♆",
               letter: "N",
               fill: "#6666ff"
            },
            plu: {
               symbol: "♇",
               letter: "P",
               fill: "#aaaaaa"
            },
            eri: {
               symbol: "⚪",
               letter: "E",
               fill: "#eeeeee"
            }
         },
         symbolStyle: {
            fill: "#cccccc",
            opacity: 1,
            font: "bold 17px 'DejaVu Sans Mono', 'Arial Unicode MS', sans-serif",
            align: "center",
            baseline: "middle"
         },
         symbolType: "symbol",
         names: !1,
         nameStyle: {
            fill: "#cccccc",
            font: "14px 'Lucida Sans Unicode', 'DejaVu Sans', sans-serif",
            align: "right",
            baseline: "top"
         },
         namesType: "en"
      },
      set: function(t) {
         var e, a, n = {},
            r = {};
         if (0 === Object.entries(W).length ? Object.assign(n, this) : Object.assign(n, W), !t) return n;
         for (e in n)
            if (nt(n, e))
               if (nt(t, e) && null !== t[e])
                  if (null === n[e] || n[e].constructor != Object) r[e] = t[e];
                  else
                     for (a in r[e] = {}, n[e]) nt(t[e], a) ? r[e][a] = t[e][a] : r[e][a] = n[e][a];
         else r[e] = n[e];
         return Object.assign(W, r), r
      },
      applyDefaults: function(t) {
         var e = {};
         return Object.assign(e, W), e.stars.size = e.stars.size || 7, e.stars.exponent = e.stars.exponent || -.28, (!e.center || e.center.length <= 0) && (e.center = [0, 0, 0]), e.datapath = e.datapath || "", e.datapath = e.datapath.replace(/([^\/]$)/, "$1/"), e.transform && "" !== e.transform || (e.transform = "equatorial"), e.culture && -1 !== e.culture.search(/^cn$/) || (e.culture = "iau"), nt(t, "stars") && (nt(t.stars, "names") && (e.stars.designation = t.stars.names), nt(t.stars, "namelimit") && (e.stars.designationLimit = t.stars.namelimit), nt(t.stars, "namestyle") && Object.assign(e.stars.designationStyle, t.stars.namestyle), nt(t.stars, "proper") && (e.stars.propername = t.stars.proper), nt(t.stars, "propernamelimit") && (e.stars.propernameLimit = t.stars.propernamelimit), nt(t.stars, "propernamestyle") && Object.assign(e.stars.propernameStyle, t.stars.propernamestyle)), e.stars.designationType && "" !== e.stars.designationType || (e.stars.designationType = "desig"), nt($.starnames[e.culture].designation, e.stars.designationType) || (e.designationType = "desig"), e.stars.propernameType && "" !== e.stars.propernameType || (e.stars.propernameType = "name"), nt($.starnames[e.culture].propername, e.stars.propernameType) || (e.propernameType = "name"), nt(t, "dsos") && (nt(t.dsos, "desig") && !0 === t.dsos.desig && (e.dsos.namesType = "desig"), nt(t.dsos, "namelimit") && (e.dsos.nameLimit = t.dsos.namelimit), nt(t.dsos, "namestyle") && Object.assign(e.dsos.nameStyle, t.dsos.namestyle)), e.dsos.namesType && "" !== e.dsos.namesType || (e.dsos.namesType = "desig"), nt(t, "constellations") && (nt(t.constellations, "show") && !0 === t.constellations.show && (e.constellations.names = !0), nt(t.constellations, "desig") && !0 === t.constellations.desig && (e.constellations.namesType = "desig"), "latin" === e.constellations.namesType && (e.constellations.namesType = "la"), "iau" === e.constellations.namesType && (e.constellations.namesType = "name"), nt(t.constellations, "namestyle") && Object.assign(e.constellations.nameStyle, t.constellations.namestyle), nt(t.constellations, "linestyle") && Object.assign(e.constellations.lineStyle, t.constellations.linestyle), nt(t.constellations, "boundstyle") && Object.assign(e.constellations.boundStyle, t.constellations.boundstyle)), e.constellations.namesType && "" !== e.constellations.namesType || (e.constellations.namesType = "desig"), nt($.constellations[e.culture].names, e.constellations.namesType) || (e.constellations.namesType = "name"), nt(t, "planets") && nt(t.planets, "style") && Object.assign(e.planets.style, t.planets.symbolStyle), e.planets.symbolType && "" !== e.planets.symbolType || (e.planets.symbolType = "symbol"), e.planets.namesType && "" !== e.planets.namesType || (e.planets.namesType = "desig"), nt($.planets[e.culture].names, e.planets.namesType) || (e.planets.namesType = "desig"), e.constellations.nameStyle.font = R(e.constellations.nameStyle.font), e.constellations.nameStyle.opacity = R(e.constellations.nameStyle.opacity), e.constellations.nameStyle.fill = R(e.constellations.nameStyle.fill), e.constellations.lineStyle.width = R(e.constellations.lineStyle.width), e.constellations.lineStyle.opacity = R(e.constellations.lineStyle.opacity), e.constellations.lineStyle.stroke = R(e.constellations.lineStyle.stroke), Object.assign(W, e), e
      }
   };

   function R(t) {
      var e;
      return ot(t) ? 1 === t.length ? [t[0], t[0], t[0]] : 2 === t.length ? [t[0], t[1], t[1]] : t.length >= 3 ? t : void 0 : [t, t, t]
   }
   t.settings = function() {
      return V
   };
   var Y = d3.scale.quantize().domain([3.347, -.335]).range(["#ff4700", "#ff4b00", "#ff4f00", "#ff5300", "#ff5600", "#ff5900", "#ff5b00", "#ff5d00", "#ff6000", "#ff6300", "#ff6500", "#ff6700", "#ff6900", "#ff6b00", "#ff6d00", "#ff7000", "#ff7300", "#ff7500", "#ff7800", "#ff7a00", "#ff7c00", "#ff7e00", "#ff8100", "#ff8300", "#ff8506", "#ff870a", "#ff8912", "#ff8b1a", "#ff8e21", "#ff9127", "#ff932c", "#ff9631", "#ff9836", "#ff9a3c", "#ff9d3f", "#ffa148", "#ffa34b", "#ffa54f", "#ffa753", "#ffa957", "#ffab5a", "#ffad5e", "#ffb165", "#ffb269", "#ffb46b", "#ffb872", "#ffb975", "#ffbb78", "#ffbe7e", "#ffc184", "#ffc489", "#ffc78f", "#ffc892", "#ffc994", "#ffcc99", "#ffce9f", "#ffd1a3", "#ffd3a8", "#ffd5ad", "#ffd7b1", "#ffd9b6", "#ffdbba", "#ffddbe", "#ffdfc2", "#ffe1c6", "#ffe3ca", "#ffe4ce", "#ffe8d5", "#ffe9d9", "#ffebdc", "#ffece0", "#ffefe6", "#fff0e9", "#fff2ec", "#fff4f2", "#fff5f5", "#fff6f8", "#fff9fd", "#fef9ff", "#f9f6ff", "#f6f4ff", "#f3f2ff", "#eff0ff", "#ebeeff", "#e9edff", "#e6ebff", "#e3e9ff", "#e0e7ff", "#dee6ff", "#dce5ff", "#d9e3ff", "#d7e2ff", "#d3e0ff", "#c9d9ff", "#bfd3ff", "#b7ceff", "#afc9ff", "#a9c5ff", "#a4c2ff", "#9fbfff", "#9bbcff"]);
   var J = {
      airy: {
         n: "Airy’s Minimum Error",
         arg: Math.PI / 2,
         scale: 360,
         ratio: 1,
         clip: !0
      },
      aitoff: {
         n: "Aitoff",
         arg: null,
         scale: 162
      },
      armadillo: {
         n: "Armadillo",
         arg: 0,
         scale: 250
      },
      august: {
         n: "August",
         arg: null,
         scale: 94,
         ratio: 1.4
      },
      azimuthalEqualArea: {
         n: "Azimuthal Equal Area",
         arg: null,
         scale: 340,
         ratio: 1,
         clip: !0
      },
      azimuthalEquidistant: {
         n: "Azimuthal Equidistant",
         arg: null,
         scale: 320,
         ratio: 1,
         clip: !0
      },
      baker: {
         n: "Baker Dinomic",
         arg: null,
         scale: 160,
         ratio: 1.4
      },
      berghaus: {
         n: "Berghaus Star",
         arg: 0,
         scale: 320,
         ratio: 1,
         clip: !0
      },
      boggs: {
         n: "Boggs Eumorphic",
         arg: null,
         scale: 170
      },
      bonne: {
         n: "Bonne",
         arg: Math.PI / 2.5,
         scale: 225,
         ratio: .88
      },
      bromley: {
         n: "Bromley",
         arg: null,
         scale: 162
      },
      cassini: {
         n: "Cassini",
         arg: null,
         scale: 325,
         ratio: 1,
         clip: !0
      },
      collignon: {
         n: "Collignon",
         arg: null,
         scale: 100,
         ratio: 2.6
      },
      craig: {
         n: "Craig Retroazimuthal",
         arg: 0,
         scale: 310,
         ratio: 1.5,
         clip: !0
      },
      craster: {
         n: "Craster Parabolic",
         arg: null,
         scale: 160
      },
      cylindricalEqualArea: {
         n: "Cylindrical Equal Area",
         arg: Math.PI / 6,
         scale: 190,
         ratio: 2.3
      },
      cylindricalStereographic: {
         n: "Cylindrical Stereographic",
         arg: Math.PI / 4,
         scale: 230,
         ratio: 1.3
      },
      eckert1: {
         n: "Eckert I",
         arg: null,
         scale: 175
      },
      eckert2: {
         n: "Eckert II",
         arg: null,
         scale: 175
      },
      eckert3: {
         n: "Eckert III",
         arg: null,
         scale: 190
      },
      eckert4: {
         n: "Eckert IV",
         arg: null,
         scale: 190
      },
      eckert5: {
         n: "Eckert V",
         arg: null,
         scale: 182
      },
      eckert6: {
         n: "Eckert VI",
         arg: null,
         scale: 182
      },
      eisenlohr: {
         n: "Eisenlohr",
         arg: null,
         scale: 102
      },
      equirectangular: {
         n: "Equirectangular",
         arg: null,
         scale: 165
      },
      fahey: {
         n: "Fahey",
         arg: null,
         scale: 196,
         ratio: 1.4
      },
      mtFlatPolarParabolic: {
         n: "Flat Polar Parabolic",
         arg: null,
         scale: 175
      },
      mtFlatPolarQuartic: {
         n: "Flat Polar Quartic",
         arg: null,
         scale: 230,
         ratio: 1.65
      },
      mtFlatPolarSinusoidal: {
         n: "Flat Polar Sinusoidal",
         arg: null,
         scale: 175,
         ratio: 1.9
      },
      foucaut: {
         n: "Foucaut",
         arg: null,
         scale: 142
      },
      ginzburg4: {
         n: "Ginzburg IV",
         arg: null,
         scale: 180,
         ratio: 1.7
      },
      ginzburg5: {
         n: "Ginzburg V",
         arg: null,
         scale: 196,
         ratio: 1.55
      },
      ginzburg6: {
         n: "Ginzburg VI",
         arg: null,
         scale: 190,
         ratio: 1.4
      },
      ginzburg8: {
         n: "Ginzburg VIII",
         arg: null,
         scale: 205,
         ratio: 1.3
      },
      ginzburg9: {
         n: "Ginzburg IX",
         arg: null,
         scale: 190,
         ratio: 1.4
      },
      homolosine: {
         n: "Goode Homolosine",
         arg: null,
         scale: 160,
         ratio: 2.2
      },
      hammer: {
         n: "Hammer",
         arg: 2,
         scale: 180
      },
      hatano: {
         n: "Hatano",
         arg: null,
         scale: 186
      },
      healpix: {
         n: "HEALPix",
         arg: 1,
         scale: 320,
         ratio: 1.2
      },
      hill: {
         n: "Hill Eucyclic",
         arg: 2,
         scale: 190,
         ratio: 1.1
      },
      kavrayskiy7: {
         n: "Kavrayskiy VII",
         arg: null,
         scale: 185,
         ratio: 1.75
      },
      lagrange: {
         n: "Lagrange",
         arg: Math.PI / 4,
         scale: 88,
         ratio: 1.6,
         clip: !1
      },
      larrivee: {
         n: "l'Arrivée",
         arg: null,
         scale: 160,
         ratio: 1.25
      },
      laskowski: {
         n: "Laskowski Tri-Optimal",
         arg: null,
         scale: 165,
         ratio: 1.7
      },
      loximuthal: {
         n: "Loximuthal",
         arg: Math.PI / 4,
         scale: 175,
         ratio: 1.8
      },
      mercator: {
         n: "Mercator",
         arg: null,
         scale: 160,
         ratio: 1.3
      },
      miller: {
         n: "Miller",
         arg: null,
         scale: 160,
         ratio: 1.5
      },
      mollweide: {
         n: "Mollweide",
         arg: null,
         scale: 180
      },
      naturalEarth: {
         n: "Natural Earth",
         arg: null,
         scale: 185,
         ratio: 1.85
      },
      nellHammer: {
         n: "Nell Hammer",
         arg: null,
         scale: 160,
         ratio: 2.6
      },
      orthographic: {
         n: "Orthographic",
         arg: null,
         scale: 480,
         ratio: 1,
         clip: !0
      },
      patterson: {
         n: "Patterson Cylindrical",
         arg: null,
         scale: 160,
         ratio: 1.75
      },
      polyconic: {
         n: "Polyconic",
         arg: null,
         scale: 160,
         ratio: 1.3
      },
      quincuncial: {
         n: "Quincuncial",
         arg: null,
         scale: 160,
         ratio: 1.3
      },
      rectangularPolyconic: {
         n: "Rectangular Polyconic",
         arg: 0,
         scale: 160,
         ratio: 1.65
      },
      robinson: {
         n: "Robinson",
         arg: null,
         scale: 160
      },
      sinusoidal: {
         n: "Sinusoidal",
         arg: null,
         scale: 160,
         ratio: 2
      },
      stereographic: {
         n: "Stereographic",
         arg: null,
         scale: 500,
         ratio: 1,
         clip: !0
      },
      times: {
         n: "Times",
         arg: null,
         scale: 210,
         ratio: 1.4
      },
      twoPointEquidistant: {
         n: "Two-Point Equidistant",
         arg: Math.PI / 2,
         scale: 320,
         ratio: 1.15,
         clip: !0
      },
      vanDerGrinten: {
         n: "van Der Grinten",
         arg: null,
         scale: 160,
         ratio: 1
      },
      vanDerGrinten2: {
         n: "van Der Grinten II",
         arg: null,
         scale: 160,
         ratio: 1
      },
      vanDerGrinten3: {
         n: "van Der Grinten III",
         arg: null,
         scale: 160,
         ratio: 1
      },
      vanDerGrinten4: {
         n: "van Der Grinten IV",
         arg: null,
         scale: 160,
         ratio: 1.6
      },
      wagner4: {
         n: "Wagner IV",
         arg: null,
         scale: 185
      },
      wagner6: {
         n: "Wagner VI",
         arg: null,
         scale: 160
      },
      wagner7: {
         n: "Wagner VII",
         arg: null,
         scale: 190,
         ratio: 1.8
      },
      wiechel: {
         n: "Wiechel",
         arg: null,
         scale: 360,
         ratio: 1,
         clip: !0
      },
      winkel3: {
         n: "Winkel Tripel",
         arg: null,
         scale: 196,
         ratio: 1.7
      }
   };
   t.projections = function() {
      return J
   };
   var $ = {
      starnames: {
         iau: {
            designation: {
               desig: "Designation",
               bayer: "Bayer",
               flam: "Flamsteed",
               var: "Variable",
               gl: "Gliese",
               hd: "Draper",
               hip: "Hipparcos"
            },
            propername: {
               name: "IAU Name",
               ar: "Arabic",
               zh: "Chinese",
               en: "English",
               fi: "Finnish",
               fr: "French",
               de: "German",
               el: "Greek",
               hi: "Hindi",
               it: "Italian",
               ja: "Japanese",
               ko: "Korean",
               la: "Latin",
               fa: "Persian",
               ru: "Russian",
               es: "Spanish",
               tr: "Turkish"
            }
         },
         cn: {
            propername: {
               name: "Proper name",
               en: "English",
               pinyin: "Pinyin"
            },
            designation: {
               desig: "IAU Designation"
            }
         }
      },
      constellations: {
         iau: {
            names: {
               desig: "Designation",
               name: "IAU Name",
               ar: "Arabic",
               zh: "Chinese",
               cz: "Czech",
               en: "English",
               ee: "Estonian",
               fi: "Finnish",
               fr: "French",
               de: "German",
               el: "Greek",
               he: "Hebrew",
               hi: "Hindi",
               it: "Italian",
               ja: "Japanese",
               ko: "Korean",
               la: "Latin",
               fa: "Persian",
               ru: "Russian",
               es: "Spanish",
               tr: "Turkish"
            }
         },
         cn: {
            names: {
               name: "Proper name",
               en: "English",
               pinyin: "Pinyin"
            }
         }
      },
      planets: {
         iau: {
            symbol: {
               symbol: "☾ Symbol",
               letter: "Ⅼ Letter",
               disk: "● Disk"
            },
            names: {
               desig: "Designation",
               ar: "Arabic",
               zh: "Chinese",
               en: "English",
               fr: "French",
               de: "German",
               el: "Greek",
               he: "Hebrew",
               hi: "Hindi",
               it: "Italian",
               ja: "Japanese",
               ko: "Korean",
               la: "Latin",
               fa: "Persian",
               ru: "Russian",
               es: "Spanish"
            }
         },
         cn: {
            symbol: {
               symbol: "☾ Symbol",
               letter: "Ⅼ Letter",
               disk: "● Disk"
            },
            names: {
               desig: "Designation",
               name: "Chinese",
               pinyin: "Pinyin",
               en: "English"
            }
         }
      },
      dsonames: {
         iau: {
            names: {
               desig: "Designation",
               name: "English",
               ar: "Arabic",
               zh: "Chinese",
               fi: "Finnish",
               fr: "French",
               de: "German",
               el: "Greek",
               hi: "Hindi",
               it: "Italian",
               ja: "Japanese",
               ko: "Korean",
               la: "Latin",
               fa: "Persian",
               ru: "Russian",
               es: "Spanish",
               tr: "Turkish"
            }
         },
         cn: {
            names: {
               desig: "Designation",
               name: "Chinese",
               pinyin: "Pinyin",
               en: "English"
            }
         }
      }
   };
   var K = {
      iau: Object.keys($.constellations.iau.names).concat(Object.keys($.planets.iau.names)).filter((function(t, e, a) {
         return a.indexOf(t) === e
      })),
      cn: Object.keys($.constellations.cn.names).concat(Object.keys($.starnames.cn.propername)).filter((function(t, e, a) {
         return a.indexOf(t) === e
      }))
   };
   var Z = {};

   function Q(t) {
      return document.getElementById(t)
   }

   function X(t) {
      return t + "px"
   }

   function tt(t, e) {
      return Math.round(Math.pow(10, e) * t) / Math.pow(10, e)
   }

   function et(t) {
      return t ? t < 0 ? -1 : 1 : 0
   }

   function at(t) {
      return t < 10 ? "0" + t : t
   }

   function nt(t, e) {
      return null !== t && hasOwnProperty.call(t, e)
   }

   function rt(t, e, a) {
      return null !== t && hasOwnProperty.call(t, e) ? t[e] : a
   }

   function st(t) {
      return null !== t && !isNaN(parseFloat(t)) && isFinite(t)
   }

   function ot(t) {
      return null !== t && "[object Array]" === Object.prototype.toString.call(t)
   }

   function it(t) {
      var e = typeof t;
      return "function" === e || "object" === e && !!t
   }

   function lt(t) {
      return "function" == typeof t || !1
   }

   function ct(t) {
      return t && t instanceof Date && !isNaN(t)
   }

   function pt(t) {
      var e = new XMLHttpRequest;
      return e.open("HEAD", t, !1), e.send(), 404 != e.status
   }

   function dt(t) {
      var e = 0,
         a = 0;
      if (t.offsetParent)
         do {
            e += t.offsetLeft, a += t.offsetTop
         } while (null !== (t = t.offsetParent));
      return [e, a]
   }

   function ut(t, e) {
      while (t.parentNode) {
         if (t.id === e) return !0;
         t = t.parentNode
      }
      return !1
   }

   function ht(t, e, a) {
      t.addEventListener ? t.addEventListener(e, a, !1) : t.attachEvent("on" + e, a)
   }

   function ft(t) {
      "undefined" != typeof t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
   }

   function mt(t, e, a) {
      var n = e.valueOf() - t.valueOf(),
         r;
      switch (a || "d") {
         case "y":
         case "yr":
            n /= 31556926080;
            break;
         case "m":
         case "mo":
            n /= 26298e5;
            break;
         case "d":
         case "dy":
            n /= 864e5;
            break;
         case "h":
         case "hr":
            n /= 36e5;
            break;
         case "n":
         case "mn":
            n /= 6e4;
            break;
         case "s":
         case "sec":
            n /= 1e3;
            break;
         case "ms":
            break
      }
      return Math.floor(n)
   }

   function yt(t) {
      if (t) {
         var e = t.split(".");
         if (!(e.length < 1) && ((e = e[0].split("-"))[0] = e[0].replace(/\D/g, ""), e[0])) return e[1] = e[1] ? e[1].replace(/\D/g, "") : "1", e[2] = e[2] ? e[2].replace(/\D/g, "") : "1", new Date(Date.UTC(e[0], e[1] - 1, e[2]))
      }
   }

   function gt(t, e, a) {
      return t = (t * x + w) % w, e = (e * x + w) % w, Math.abs(t - e) > Math.PI && (t > e ? t -= w : e > t && (e -= w)), d3.interpolateNumber(t / x, e / x)
   }
   Z.symbol = function() {
      var t = d3.functor("circle"),
         e = d3.functor(64),
         a = d3.functor(Math.PI),
         n = d3.functor("#fff"),
         r = d3.functor(""),
         s = d3.functor([2, 2]),
         o;

      function i(e) {
         l[t()](e)
      }
      var l = {
         circle: function(t) {
            var a, n = Math.sqrt(e()) / 2;
            return t.arc(o[0], o[1], n, 0, 2 * Math.PI), t.closePath(), n
         },
         square: function(t) {
            var a, n = Math.sqrt(e()) / 1.7;
            return t.moveTo(o[0] - n, o[1] - n), t.lineTo(o[0] + n, o[1] - n), t.lineTo(o[0] + n, o[1] + n), t.lineTo(o[0] - n, o[1] + n), t.closePath(), n
         },
         diamond: function(t) {
            var a, n = Math.sqrt(e()) / 1.5;
            return t.moveTo(o[0], o[1] - n), t.lineTo(o[0] + n, o[1]), t.lineTo(o[0], o[1] + n), t.lineTo(o[0] - n, o[1]), t.closePath(), n
         },
         triangle: function(t) {
            var a, n = Math.sqrt(e()) / Math.sqrt(3);
            return t.moveTo(o[0], o[1] - n), t.lineTo(o[0] + n, o[1] + n), t.lineTo(o[0] - n, o[1] + n), t.closePath(), n
         },
         ellipse: function(t) {
            var a, n = Math.sqrt(e()) / 2;
            return t.save(), t.translate(o[0], o[1]), t.scale(1.6, .8), t.beginPath(), t.arc(0, 0, n, 0, 2 * Math.PI), t.closePath(), t.restore(), n
         },
         marker: function(t) {
            var a, n = Math.sqrt(e()) / 2;
            return t.moveTo(o[0], o[1] - n), t.lineTo(o[0], o[1] + n), t.moveTo(o[0] - n, o[1]), t.lineTo(o[0] + n, o[1]), t.closePath(), n
         },
         "cross-circle": function(t) {
            var a = Math.sqrt(e()),
               n = a / 2;
            return t.moveTo(o[0], o[1] - a), t.lineTo(o[0], o[1] + a), t.moveTo(o[0] - a, o[1]), t.lineTo(o[0] + a, o[1]), t.stroke(), t.beginPath(), t.moveTo(o[0], o[1]), t.arc(o[0], o[1], n, 0, 2 * Math.PI), t.closePath(), n
         },
         "stroke-circle": function(t) {
            var a = Math.sqrt(e()),
               n = a / 2;
            return t.moveTo(o[0], o[1] - a), t.lineTo(o[0], o[1] + a), t.stroke(), t.beginPath(), t.moveTo(o[0], o[1]), t.arc(o[0], o[1], n, 0, 2 * Math.PI), t.closePath(), n
         },
         crescent: function(t) {
            var n, r = Math.sqrt(e()) / 2,
               s = a(),
               i = .5 * (1 - Math.cos(s)),
               l = 1.6 * Math.abs(i - .5) + .01,
               c = s > Math.PI,
               p = Math.abs(i) > .5 ? c : !c,
               d = t.fillStyle,
               u = i < .157 ? "#669" : "#557";
            return t.save(), t.fillStyle = u, t.beginPath(), t.moveTo(o[0], o[1]), t.arc(o[0], o[1], r, 0, 2 * Math.PI), t.closePath(), t.fill(), t.fillStyle = d, t.beginPath(), t.moveTo(o[0], o[1]), t.arc(o[0], o[1], r, -Math.PI / 2, Math.PI / 2, c), t.scale(l, 1), t.arc(o[0] / l, o[1], r, Math.PI / 2, -Math.PI / 2, p), t.closePath(), t.fill(), t.restore(), r
         }
      };
      return i.type = function(e) {
         return arguments.length ? (t = d3.functor(e), i) : t
      }, i.size = function(t) {
         return arguments.length ? (e = d3.functor(t), i) : e
      }, i.age = function(t) {
         return arguments.length ? (a = d3.functor(t), i) : a
      }, i.text = function(t) {
         return arguments.length ? (r = d3.functor(t), i) : r
      }, i.position = function(t) {
         if (arguments.length) return o = t, i
      }, i
   }, t.Canvas = Z;
   var vt = {
      sinh: function(t) {
         return (Math.pow(Math.E, t) - Math.pow(Math.E, -t)) / 2
      },
      cosh: function(t) {
         return (Math.pow(Math.E, t) + Math.pow(Math.E, -t)) / 2
      },
      tanh: function(t) {
         return 2 / (1 + Math.exp(-2 * t)) - 1
      },
      asinh: function(t) {
         return Math.log(t + Math.sqrt(t * t + 1))
      },
      acosh: function(t) {
         return Math.log(t + Math.sqrt(t * t - 1))
      },
      normalize0: function(t) {
         return (t + 3 * Math.PI) % (2 * Math.PI) - Math.PI
      },
      normalize: function(t) {
         return (t + 2 * Math.PI) % (2 * Math.PI)
      },
      cartesian: function(t) {
         var e = t[0],
            a = k - t[1],
            n = t[2];
         return {
            x: n * Math.sin(a) * Math.cos(e),
            y: n * Math.sin(a) * Math.sin(e),
            z: n * Math.cos(a)
         }
      },
      spherical: function(t) {
         var e = Math.sqrt(t.x * t.x + t.y * t.y + t.z * t.z),
            a = Math.atan(t.y / t.x),
            n = Math.acos(t.z / e);
         return [a / x, n / x, e]
      },
      distance: function(t, e) {
         return Math.acos(Math.sin(t[1]) * Math.sin(e[1]) + Math.cos(t[1]) * Math.cos(e[1]) * Math.cos(t[0] - e[0]))
      }
   };
   var Mt = 1e-6,
      bt = Math.PI / 2,
      wt = Math.PI / 4,
      kt = 2 * Math.PI;

   function xt(t) {
      var e = t[0],
         a = t[1],
         n = Math.cos(a);
      return [n * Math.cos(e), n * Math.sin(e), Math.sin(a)]
   }

   function zt(t, e) {
      return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
   }

   function Tt(t) {
      var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
      t[0] /= e, t[1] /= e, t[2] /= e
   }

   function St(t) {
      return Math.abs(t[0]) <= Math.PI ? t[0] : et(t[0]) * ((Math.abs(t[0]) + Math.PI) % kt - Math.PI)
   }

   function jt(t, e) {
      var a = St(e),
         n = e[1],
         r = Math.sin(n),
         s = [Math.sin(a), -Math.cos(a), 0],
         o = 0,
         i = 0,
         l = 0;
      1 === r ? n = bt + Mt : -1 === r && (n = -bt - Mt);
      for (var c = 0, p = t.length; c < p; ++c)
         if (u = (d = t[c]).length) {
            var d, u, h = d[u - 1],
               f = St(h),
               m = h[1] / 2 + wt,
               y = Math.sin(m),
               g = Math.cos(m),
               v, M, b, w;
            for (var k = 0; k < u; ++k, f = w, y = b, g = M, h = v) {
               w = St(v = d[k]);
               var x = v[1] / 2 + wt;
               b = Math.sin(x), M = Math.cos(x);
               var z = w - f,
                  T = z >= 0 ? 1 : -1,
                  S = T * z,
                  j = S > Math.PI,
                  P = y * b;
               if (l += Math.atan2(P * T * Math.sin(S), g * M + P * Math.cos(S)), o += j ? z + T * kt : z, (j ^ f) >= (a ^ w) >= a) {
                  var I = zt(xt(h), xt(v));
                  Tt(I);
                  var A = zt(s, I);
                  Tt(A);
                  var q = (j ^ z >= 0 ? -1 : 1) * Math.asin(A[2]);
                  (n > q || n === q && (I[0] || I[1])) && (i += j ^ z >= 0 ? 1 : -1)
               }
            }
         } return (o < -Mt || o < Mt && l < -Mt) ^ 1 & i
   }

   function Pt(e) {
      var a = V.set(e);
      var n = t.projections(),
         r = t.eulerAngles();
      var s = d3.select("#celestial-form");
      if (s.size() < 1) {
         var o = a.container || "celestial-map";
         s = d3.select("#" + o).select((function() {
            return this.parentNode
         })).append("div").attr("id", "celestial-form")
      }
      var i;
      var l = s.append("div").attr("class", "ctrl").append("form").attr("id", "params").attr("name", "params").attr("method", "get").attr("action", "#");
      var c = l.append("div").attr("class", "col").attr("id", "general");
      c.append("label").attr("title", "Map width in pixel, 0 indicates full width").attr("for", "width").html("Width "), c.append("input").attr("type", "number").attr("maxlength", "4").attr("max", "20000").attr("min", "0").attr("title", "Map width").attr("id", "width").attr("value", a.width).on("change", M), c.append("span").html("px"), c.append("label").attr("title", "Map projection, (hemi) indicates hemispherical projection").attr("for", "projection").html("Projection");
      var p = c.append("select").attr("id", "projection").on("change", w);
      var d = 0;
      var u = Object.keys(n).map((function(t, e) {
         var r = n[t].clip && !0 === n[t].clip ? n[t].n + " (hemi)" : n[t].n;
         return t === a.projection && (d = e), {
            o: t,
            n: r
         }
      }));
      p.selectAll("option").data(u).enter().append("option").attr("value", (function(t) {
         return t.o
      })).text((function(t) {
         return t.n
      })), p.property("selectedIndex", d), d = 0, c.append("label").attr("title", "Coordinate space in which the map is displayed").attr("for", "transform").html("Coordinates"), p = c.append("select").attr("id", "transform").on("change", b), u = Object.keys(r).map((function(t, e) {
         return t === a.transform && (d = e), {
            o: t,
            n: t.replace(/^([a-z])/, (function(t, e) {
               return e.toUpperCase()
            }))
         }
      })), p.selectAll("option").data(u).enter().append("option").attr("value", (function(t) {
         return t.o
      })).text((function(t) {
         return t.n
      })), p.property("selectedIndex", d), c.append("br"), c.append("label").attr("title", "Center coordinates long/lat in selected coordinate space").attr("for", "centerx").html("Center"), c.append("input").attr("type", "number").attr("id", "centerx").attr("title", "Center right ascension/longitude").attr("max", "24").attr("min", "0").attr("step", "0.1").on("change", k), c.append("span").attr("id", "cxunit").html("h"), c.append("input").attr("type", "number").attr("id", "centery").attr("title", "Center declination/latitude").attr("max", "90").attr("min", "-90").attr("step", "0.1").on("change", k), c.append("span").html("°"), c.append("label").attr("title", "Orientation").attr("for", "centerz").html("Orientation"), c.append("input").attr("type", "number").attr("id", "centerz").attr("title", "Center orientation").attr("max", "180").attr("min", "-180").attr("step", "0.1").on("change", k), c.append("span").html("°"), c.append("label").attr("for", "orientationfixed").attr("class", "advanced").html("Fixed"), c.append("input").attr("type", "checkbox").attr("id", "orientationfixed").attr("class", "advanced").property("checked", a.orientationfixed).on("change", I), c.append("label").attr("title", "Center and zoom in on this constellation").attr("for", "constellation").html("Show");
      c.append("select").attr("id", "constellation").on("change", S), _t(a.center, a.transform), (c = l.append("div").attr("class", "col").attr("id", "stars")).append("label").attr("class", "header").attr("for", "stars-show").html("Stars"), c.append("input").attr("type", "checkbox").attr("id", "stars-show").property("checked", a.stars.show).on("change", I), c.append("label").attr("for", "stars-limit").html("down to magnitude"), c.append("input").attr("type", "number").attr("id", "stars-limit").attr("title", "Star display limit (magnitude)").attr("value", a.stars.limit).attr("max", "6").attr("min", "-1").attr("step", "0.1").on("change", I), c.append("label").attr("for", "stars-colors").html("with spectral colors"), c.append("input").attr("type", "checkbox").attr("id", "stars-colors").property("checked", a.stars.colors).on("change", I), c.append("label").attr("for", "stars-color").html("or default color "), c.append("input").attr("type", "color").attr("autocomplete", "off").attr("id", "stars-style-fill").attr("title", "Star color").property("value", a.stars.style.fill).on("change", I), c.append("br");
      var h = $.starnames[a.culture] || $.starnames.iau;
      for (var f in h)
         if (nt(h, f)) {
            var m = Object.keys(h[f]);
            m.length > 1 ? (c.append("label").attr("for", "stars-" + f).html("Show"), d = 0, c.append("label").attr("title", "Type of star name").attr("id", "label-propername").attr("for", "stars-" + f + "Type").html((function() {
               return "propername" === f ? "proper names" : ""
            })), p = c.append("select").attr("id", "stars-" + f + "Type").attr("class", (function() {
               return "propername" === f ? "advanced" : ""
            })).on("change", I), u = m.map((function(t, e) {
               return t === a.stars[f + "Type"] && (d = e), {
                  o: t,
                  n: h[f][t]
               }
            })), p.selectAll("option").data(u).enter().append("option").attr("value", (function(t) {
               return t.o
            })).text((function(t) {
               return t.n
            })), p.property("selectedIndex", d), c.append("input").attr("type", "checkbox").attr("id", "stars-" + f).property("checked", a.stars[f]).on("change", I)) : 1 === m.length && (c.append("label").attr("for", "stars-" + f).html(" " + h[f][m[0]]), c.append("input").attr("type", "checkbox").attr("id", "stars-" + f).property("checked", a.stars[f]).on("change", I)), c.append("label").attr("for", "stars-" + f + "Limit").html("down to mag"), c.append("input").attr("type", "number").attr("id", "stars-" + f + "Limit").attr("title", "Star name display limit (magnitude)").attr("value", a.stars[f + "Limit"]).attr("max", "6").attr("min", "-1").attr("step", "0.1").on("change", I)
         } for (f in c.append("br"), c.append("label").attr("for", "stars-size").attr("class", "advanced").html("Stellar disk size: base"), c.append("input").attr("type", "number").attr("id", "stars-size").attr("class", "advanced").attr("title", "Size of the displayed star disk; base").attr("value", a.stars.size).attr("max", "100").attr("min", "0").attr("step", "0.1").on("change", I), c.append("label").attr("for", "stars-exponent").attr("class", "advanced").html(" * e ^ (exponent"), c.append("input").attr("type", "number").attr("id", "stars-exponent").attr("class", "advanced").attr("title", "Size of the displayed star disk; exponent").attr("value", a.stars.exponent).attr("max", "3").attr("min", "-1").attr("step", "0.01").on("change", I), c.append("span").attr("class", "advanced").text(" * (magnitude + 2))  [* adaptation]"), At(Q("stars-show")), (c = l.append("div").attr("class", "col").attr("id", "dsos")).append("label").attr("class", "header").attr("title", "Deep Space Objects").attr("for", "dsos-show").html("DSOs"), c.append("input").attr("type", "checkbox").attr("id", "dsos-show").property("checked", a.dsos.show).on("change", I), c.append("label").attr("for", "dsos-limit").html("down to mag"), c.append("input").attr("type", "number").attr("id", "dsos-limit").attr("title", "DSO display limit (magnitude)").attr("value", a.dsos.limit).attr("max", "6").attr("min", "0").attr("step", "0.1").on("change", I), c.append("label").attr("for", "dsos-colors").html("with symbol colors"), c.append("input").attr("type", "checkbox").attr("id", "dsos-colors").property("checked", a.dsos.colors).on("change", I), c.append("label").attr("for", "dsos-color").html("or default color "), c.append("input").attr("type", "color").attr("autocomplete", "off").attr("id", "dsos-style-fill").attr("title", "DSO color").property("value", a.dsos.style.fill).on("change", I), c.append("br"), h = $.dsonames[a.culture] || $.dsonames.iau)
         if (nt(h, f)) {
            var y = Object.keys(h[f]);
            c.append("label").attr("for", "dsos-" + f).html("Show"), d = 0, c.append("label").attr("title", "Type of DSO name").attr("for", "dsos-" + f + "Type").attr("class", "advanced").html(""), p = c.append("select").attr("id", "dsos-" + f + "Type").attr("class", "advanced").on("change", I), u = y.map((function(t, e) {
               return t === a.stars[f + "Type"] && (d = e), {
                  o: t,
                  n: h[f][t]
               }
            })), p.selectAll("option").data(u).enter().append("option").attr("value", (function(t) {
               return t.o
            })).text((function(t) {
               return t.n
            })), p.property("selectedIndex", d), c.append("label").attr("for", "dsos-" + f).html("names"), c.append("input").attr("type", "checkbox").attr("id", "dsos-" + f).property("checked", a.dsos[f]).on("change", I)
         } for (f in c.append("label").attr("for", "dsos-nameLimit").html("down to mag"), c.append("input").attr("type", "number").attr("id", "dsos-nameLimit").attr("title", "DSO name display limit (magnitude)").attr("value", a.dsos.nameLimit).attr("max", "6").attr("min", "0").attr("step", "0.1").on("change", I), c.append("br"), c.append("label").attr("for", "dsos-size").attr("class", "advanced").html("DSO symbol size: (base"), c.append("input").attr("type", "number").attr("id", "dsos-size").attr("class", "advanced").attr("title", "Size of the displayed symbol: base").attr("value", a.dsos.size).attr("max", "100").attr("min", "0").attr("step", "0.1").on("change", I), c.append("label").attr("for", "dsos-exponent").attr("class", "advanced").html(" * 2 [* adaptation] - magnitude) ^ exponent"), c.append("input").attr("type", "number").attr("id", "dsos-exponent").attr("class", "advanced").attr("title", "Size of the displayed symbol; exponent").attr("value", a.dsos.exponent).attr("max", "3").attr("min", "-1").attr("step", "0.01").on("change", I), At(Q("dsos-show")), (c = l.append("div").attr("class", "col").attr("id", "constellations")).append("label").attr("class", "header").html("Constellations"), h = $.constellations[a.culture] || $.constellations.iau)
         if (nt(h, f)) {
            var g = Object.keys(h[f]);
            g.length > 1 ? (c.append("label").attr("for", "constellations-" + f).html("Show"), d = 0, c.append("label").attr("title", "Language of constellation names").attr("for", "constellations-" + f + "Type").attr("class", "advanced").html(""), p = c.append("select").attr("id", "constellations-" + f + "Type").attr("class", "advanced").on("change", I), u = g.map((function(t, e) {
               return t === a.constellations[f + "Type"] && (d = e), {
                  o: t,
                  n: h[f][t]
               }
            })), p.selectAll("option").data(u).enter().append("option").attr("value", (function(t) {
               return t.o
            })).text((function(t) {
               return t.n
            })), p.property("selectedIndex", d), c.append("label").attr("for", "constellations-" + f).html("names"), c.append("input").attr("type", "checkbox").attr("id", "constellations-" + f).property("checked", a.constellations[f]).on("change", I)) : 1 === g.length && (c.append("label").attr("for", "constellations-" + f).attr("class", "advanced").html(" " + h[f][g[0]]), c.append("input").attr("type", "checkbox").attr("id", "constellations-" + f).attr("class", "advanced").property("checked", a.constellations[f]).on("change", I))
         } c.append("label").attr("for", "constellations-lines").html(" lines"), c.append("input").attr("type", "checkbox").attr("id", "constellations-lines").property("checked", a.constellations.lines).on("change", I), c.append("label").attr("for", "constellations-bounds").html(" boundaries"), c.append("input").attr("type", "checkbox").attr("id", "constellations-bounds").property("checked", a.constellations.bounds).on("change", I), At(Q("constellations-names")), (c = l.append("div").attr("class", "col").attr("id", "lines")).append("label").attr("class", "header").html("Lines"), c.append("label").attr("title", "Latitude/longitude grid lines").attr("for", "lines-graticule").html("Graticule"), c.append("input").attr("type", "checkbox").attr("id", "lines-graticule-show").property("checked", a.lines.graticule.show).on("change", I), c.append("label").attr("for", "lines-equatorial").html("Equator"), c.append("input").attr("type", "checkbox").attr("id", "lines-equatorial-show").property("checked", a.lines.equatorial.show).on("change", I), c.append("label").attr("for", "lines-ecliptic").html("Ecliptic"), c.append("input").attr("type", "checkbox").attr("id", "lines-ecliptic-show").property("checked", a.lines.ecliptic.show).on("change", I), c.append("label").attr("for", "lines-galactic").html("Galactic plane"), c.append("input").attr("type", "checkbox").attr("id", "lines-galactic-show").property("checked", a.lines.galactic.show).on("change", I), c.append("label").attr("for", "lines-supergalactic").html("Supergalactic plane"), c.append("input").attr("type", "checkbox").attr("id", "lines-supergalactic-show").property("checked", a.lines.supergalactic.show).on("change", I), (c = l.append("div").attr("class", "col").attr("id", "other")).append("label").attr("class", "header").html("Other"), c.append("label").attr("for", "mw-show").html("Milky Way"), c.append("input").attr("type", "checkbox").attr("id", "mw-show").property("checked", a.mw.show).on("change", I), c.append("label").attr("for", "mw-style-fill").attr("class", "advanced").html(" color"), c.append("input").attr("type", "color").attr("id", "mw-style-fill").attr("class", "advanced").attr("title", "Milky Way color").attr("value", a.mw.style.fill).on("change", I), c.append("label").attr("for", "mw-style-opacity").attr("class", "advanced").html(" opacity"), c.append("input").attr("type", "number").attr("id", "mw-style-opacity").attr("class", "advanced").attr("title", "Transparency of each Milky Way layer").attr("value", a.mw.style.opacity).attr("max", "1").attr("min", "0").attr("step", "0.01").on("change", I), c.append("label").attr("for", "advanced").html("Advanced options"), c.append("input").attr("type", "checkbox").attr("id", "advanced").property("checked", a.advanced).on("change", I), c.append("br"), c.append("label").attr("for", "background-fill").html("Background color"), c.append("input").attr("type", "color").attr("id", "background-fill").attr("title", "Background color").attr("value", a.background.fill).on("change", I), c.append("label").attr("for", "background-opacity").attr("class", "advanced").html("opacity"), c.append("input").attr("type", "number").attr("id", "background-opacity").attr("class", "advanced").attr("title", "Background opacity").attr("value", a.background.opacity).attr("max", "1").attr("min", "0").attr("step", "0.01").on("change", I), c.append("label").attr("title", "Star/DSO sizes are increased with higher zoom-levels").attr("for", "adaptable").attr("class", "advanced").html("Adaptable object sizes"), c.append("input").attr("type", "checkbox").attr("id", "adaptable").attr("class", "advanced").property("checked", a.adaptable).on("change", I);
      var v = K[a.culture];

      function M() {
         var e = this,
            n = e.value;
         !1 !== Dt(e) && (a.width = n, t.resize({
            width: n
         }))
      }

      function b() {
         var e, n = this.value,
            r = Ft(n, a.transform);
         null !== r && (a.center[0] = r), a.transform = n, V.set(a), t.reload(a)
      }

      function w() {
         var e = this;
         e && (a.projection = e.value, V.set(a), t.reproject(a))
      }

      function k() {
         !1 !== Dt(this) && !1 !== x() && t.rotate(a)
      }

      function x() {
         var t = Q("centerx"),
            e = Q("centery"),
            n = Q("centerz"),
            r = [];
         if (t && e) {
            if ("equatorial" !== a.transform) a.center[0] = parseFloat(t.value);
            else {
               var s = parseFloat(t.value);
               a.center[0] = s > 12 ? 15 * s - 360 : 15 * s
            }
            a.center[1] = parseFloat(e.value);
            var o = parseFloat(n.value);
            return a.center[2] = isNaN(o) ? 0 : o, "" !== t.value && "" !== e.value
         }
      }

      function T(e) {
         var a = d3.time.format("%Y%m%dT%H%M%S%Z"),
            n = "d3-celestial",
            r = t.date();
         return r && (n += a(r)), n + e
      }

      function S() {
         var t = this.value;
         t && P(t)
      }

      function P(e) {
         var a, n = [],
            r = W;
         if ("---" === e) return t.constellation = null, 1 !== (a = t.zoomBy()) && n.push({
            param: "zoom",
            value: 1 / a,
            duration: 0
         }), t.animate(n, !1), void 0;
         if (it(t.constellations) && nt(t.constellations, e)) {
            var s = t.constellations[e];
            var o = z(s.center, j[r.transform]);
            r.center = o, _t(r.center, r.transform), 1 !== (a = t.zoomBy()) && n.push({
               param: "zoom",
               value: 1 / a,
               duration: 0
            }), n.push({
               param: "center",
               value: o,
               duration: 0
            });
            var i = 1 + 360 / s.scale;
            n.push({
               param: "zoom",
               value: i,
               duration: 0
            }), t.constellation = e, t.animate(n, !1)
         }
      }

      function I() {
         var e, n = this;
         switch (Object.assign(a, V.set()), n.type) {
            case "checkbox":
               e = n.checked, At(n);
               break;
            case "number":
               if (!1 === Dt(n)) return;
               e = parseFloat(n.value);
               break;
            case "color":
               if (!1 === Ot(n)) return;
               e = n.value;
               break;
            case "text":
               if (-1 === n.id.search(/fill$/)) return;
               if (!1 === Ot(n)) return;
               e = n.value;
               break;
            case "select-one":
               e = n.value;
               break
         }
         null !== e && (A(n.id, e), "dsos-style-fill" === n.id ? (A("dsos-style-stroke", e), A("dsos-nameStyle-fill", e)) : "constellations-namesType" === n.id ? Ht() : "lang" === n.id ? q(e) : "advanced" === n.id && Ct(e), x(), Object.assign(W, a), t.apply(a))
      }

      function A(t, e) {
         var n = t.split("-");
         switch (n.length) {
            case 1:
               a[n[0]] = e;
               break;
            case 2:
               a[n[0]][n[1]] = e;
               break;
            case 3:
               a[n[0]][n[1]][n[2]] = e;
               break;
            default:
               return
         }
      }

      function q(t) {
         Object.assign(a, W), a.lang = t;
         var e = ["constellations", "planets"];
         for (var n = 0; n < e.length; n++) nt($[e[n]][a.culture].names, t) ? a[e[n]].namesType = t : nt($[e[n]][a.culture].names, "desig") ? a[e[n]].namesType = "desig" : a[e[n]].namesType = "name";
         return nt($.dsonames[a.culture].names, t) ? a.dsos.namesType = t : a.dsos.namesType = "desig", nt($.starnames[a.culture].propername, t) ? a.stars.propernameType = t : a.stars.propernameType = "desig", Object.assign(W, a), L(), Ht(), a
      }

      function L() {
         d3.selectAll("#celestial-form input, #celestial-form select").each((function(t, e) {
            if (void 0 !== this) {
               var n = this.id;
               if ("lat" === n || "lon" === n) ot(a.geopos) && (this.value = "lat" === n ? a.geopos[0] : a.geopos[1]);
               else if (-1 !== n.search(/center/)) {
                  if (ot(a.center)) switch (n) {
                     case "centerx":
                        this.value = a.center[0];
                        break;
                     case "centery":
                        this.value = a.center[1];
                        break;
                     case "centerz":
                        this.value = a.center[2] || 0;
                        break
                  }
               } else {
                  if ("datetime" === n || "hr" === n || "min" === n || "sec" === n || "tz" === n) return;
                  if ("button" !== this.type) {
                     var r = D(n);
                     switch (this.type) {
                        case "checkbox":
                           this.checked = r, At(n);
                           break;
                        case "number":
                           if (!1 === Dt(this)) break;
                           this.value = parseFloat(D(n));
                           break;
                        case "color":
                           if (!1 === Ot(this)) break;
                           this.value = r;
                           break;
                        case "text":
                           if (-1 === n.search(/fill$/)) break;
                           if (!1 === Ot(this)) break;
                           this.value = r;
                           break;
                        case "select-one":
                           this.value = r;
                           break
                     }
                  }
               }
            }
         }))
      }

      function D(t) {
         var e = t.split("-");
         switch (e.length) {
            case 1:
               return a[e[0]];
            case 2:
               return a[e[0]][e[1]];
            case 3:
               return a[e[0]][e[1]][e[2]];
            default:
               return
         }
      }
      d = 0, c.append("label").attr("title", "General language setting").attr("for", "lang").html("Object names "), p = c.append("select").attr("id", "lang").on("change", I), u = v.map((function(t, e) {
         return t === a.lang && (d = e), {
            o: t,
            n: $.constellations[a.culture].names[t]
         }
      })), u = [{
         o: "---",
         n: "(Select language)"
      }].concat(u), p.selectAll("option").data(u).enter().append("option").attr("value", (function(t) {
         return t.o
      })).text((function(t) {
         return t.n
      })), p.property("selectedIndex", d), (c = l.append("div").attr("class", "col").attr("id", "download")).append("label").attr("class", "header").html("Download"), c.append("input").attr("type", "button").attr("id", "download-png").attr("value", "PNG Image").on("click", (function() {
         var t = d3.select("body").append("a").node(),
            e = document.querySelector("#" + a.container + " canvas");
         t.download = T(".png"), t.rel = "noopener", t.href = e.toDataURL("image/png").replace("image/png", "image/octet-stream"), t.click(), d3.select(t).remove()
      })), c.append("input").attr("type", "button").attr("id", "download-svg").attr("value", "SVG File").on("click", (function() {
         return Zt(T(".svg")), !1
      })), Et(), Ft(a.transform), Nt(e), Ct(a.advanced), t.updateForm = L, t.showConstellation = P, t.setLanguage = function(t) {
         var e = V.set();
         return -1 !== K[a.culture].indexOf(t) && (e = q(t)), e
      }
   }
   var It = {
      "stars-show": ["stars-limit", "stars-colors", "stars-style-fill", "stars-designation", "stars-propername", "stars-size", "stars-exponent"],
      "stars-designation": ["stars-designationType", "stars-designationLimit"],
      "stars-propername": ["stars-propernameLimit", "stars-propernameType"],
      "dsos-show": ["dsos-limit", "dsos-colors", "dsos-style-fill", "dsos-names", "dsos-size", "dsos-exponent"],
      "dsos-names": ["dsos-namesType", "dsos-nameLimit"],
      "mw-show": ["mw-style-opacity", "mw-style-fill"],
      "constellations-names": ["constellations-namesType"],
      "planets-show": ["planets-symbolType", "planets-names"],
      "planets-names": ["planets-namesType"]
   };

   function At(t) {
      var e = t.id,
         a;
      switch (e) {
         case "stars-show":
            a = !Q(e).checked;
            for (var n = 0; n < It[e].length; n++) qt(It[e][n], a);
         case "stars-designation":
            for (a = !Q("stars-designation").checked || !Q("stars-show").checked, n = 0; n < It["stars-designation"].length; n++) qt(It["stars-designation"][n], a);
         case "stars-propername":
            for (a = !Q("stars-propername").checked || !Q("stars-show").checked, n = 0; n < It["stars-propername"].length; n++) qt(It["stars-propername"][n], a);
            break;
         case "dsos-show":
            for (a = !Q(e).checked, n = 0; n < It[e].length; n++) qt(It[e][n], a);
         case "dsos-names":
            for (a = !Q("dsos-names").checked || !Q("dsos-show").checked, n = 0; n < It["dsos-names"].length; n++) qt(It["dsos-names"][n], a);
            break;
         case "planets-show":
            for (a = !Q(e).checked, n = 0; n < It[e].length; n++) qt(It[e][n], a);
         case "planets-names":
            for (a = !Q("planets-names").checked || !Q("planets-show").checked, n = 0; n < It["planets-names"].length; n++) qt(It["planets-names"][n], a);
            break;
         case "constellations-names":
         case "mw-show":
            for (a = !Q(e).checked, n = 0; n < It[e].length; n++) qt(It[e][n], a);
            break
      }
   }

   function qt(t, e) {
      var a = Q(t);
      a && (a.disabled = e, a.style.color = e ? "#999" : "#000", a.previousSibling.style.color = e ? "#999" : "#000")
   }

   function Lt(t, e) {
      var a = dt(t);
      d3.select("#error").html(e).style({
         top: X(a[1] + t.offsetHeight + 1),
         left: X(a[0]),
         opacity: 1
      }), t.focus()
   }

   function Dt(t) {
      var e, a = "hr" === t.id || "min" === t.id || "sec" === t.id ? 1 : 0;
      if (t.validity) {
         if ((e = t.validity).typeMismatch || e.badInput) return Lt(t, t.title + ": check field value"), !1;
         if (e.rangeOverflow || e.rangeUnderflow) return Lt(t, t.title + " must be between " + (parseInt(t.min) + a) + " and " + (parseInt(t.max) - a)), !1
      } else {
         if (!st(e = t.value)) return Lt(t, t.title + ": check field value"), !1;
         if ((e = parseFloat(e)) < t.min || e > t.max) return Lt(t, t.title + " must be between " + (t.min + a) + " and " + (+t.max - a)), !1
      }
      return d3.select("#error").style({
         top: "-9999px",
         left: "-9999px",
         opacity: 0
      }), !0
   }

   function Ot(t) {
      var e;
      if (t.validity) {
         if ((e = t.validity).typeMismatch || e.badInput) return Lt(t, t.title + ": check field value"), !1;
         if (-1 === t.value.search(/^#[0-9A-F]{6}$/i)) return Lt(t, t.title + ": not a color value"), !1
      } else {
         if ("" === (e = t.value)) return !0;
         if (-1 === e.search(/^#[0-9A-F]{6}$/i)) return Lt(t, t.title + ": not a color value"), !1
      }
      return d3.select("#error").style({
         top: "-9999px",
         left: "-9999px",
         opacity: 0
      }), !0
   }

   function Ft(t, e) {
      var a = Q("centerx");
      return a ? (e && ("equatorial" === t && "equatorial" !== e ? (a.value = (a.value / 15).toFixed(1), a.value < 0 && (a.value += 24)) : "equatorial" !== t && "equatorial" === e && (a.value = (15 * a.value).toFixed(1), a.value > 180 && (a.value -= 360))), "equatorial" === t ? (a.min = "0", a.max = "24", Q("cxunit").innerHTML = "h") : (a.min = "-180", a.max = "180", Q("cxunit").innerHTML = "°"), a.value) : null
   }

   function _t(t, e) {
      var a = Q("centerx"),
         n = Q("centery"),
         r = Q("centerz");
      a && n && ((null === t || t.length < 1) && (t = [0, 0, 0]), (t.length <= 2 || void 0 === t[2]) && (t[2] = 0), a.value = "equatorial" !== e ? t[0].toFixed(1) : t[0] < 0 ? (t[0] / 15 + 24).toFixed(1) : (t[0] / 15).toFixed(1), n.value = t[1].toFixed(1), r.value = null !== t[2] ? t[2].toFixed(1) : 0, V.set({
         center: t
      }))
   }

   function Et() {
      var e, a = /\d+(\.\d+)?/g,
         n, r, s = {
            s: 6,
            d: 6
         },
         o = t.settings();
      return null !== (e = (r = o.dsos.data).match(a)) && (s.d = parseFloat(e[e.length - 1])), 6 !== s.d && (Q("dsos-limit").max = s.d, Q("dsos-nameLimit").max = s.d), null !== (e = (n = o.stars.data).match(a)) && (s.s = parseFloat(e[e.length - 1])), 6 != s.s && (Q("stars-limit").max = s.s, Q("stars-designationLimit").max = s.s, Q("stars-propernameLimit").max = s.s), s
   }

   function Ct(t) {
      var e = t ? "inline-block" : "none";
      d3.selectAll(".advanced").style("display", e), d3.selectAll("#label-propername").style("display", t ? "none" : "inline-block")
   }

   function Nt(t, e) {
      var a, n;
      if (nt(t, "formFields")) {
         if (e && nt(t.formFields, e)) return d3.select("#" + e).style({
            display: "none"
         }), void 0;
         if (!1 !== t.form || !0 !== t.location)
            for (n in !1 === t.form && d3.select("#celestial-form").style("display", "none"), t.formFields) nt(t.formFields, n) && "location" !== n && (a = !1 === t.formFields[n] ? "none" : "block", d3.select("#" + n).style({
               display: a
            }));
         else
            for (n in d3.select("#celestial-form").style("display", "inline-block"), t.formFields) nt(t.formFields, n) && "location" !== n && d3.select("#" + n).style({
               display: "none"
            })
      }
   }

   function Ht() {
      var e = d3.select("#constellation"),
         a = [],
         n = 0,
         r, s, o = W;
      if (t.container.selectAll(".constname").each((function(t, e) {
            (r = t.id) === o.constellation && (n = e), (s = t.properties[o.constellations.namesType]) !== r && (s += " (" + r + ")"), a.push({
               o: r,
               n: s
            })
         })), a.length < 1 || e.length < 1) return setTimeout(Ht, 1e3), void 0;
      a = [{
         o: "---",
         n: "(Select constellation)"
      }].concat(a), e.selectAll("option").remove(), e.selectAll("option").data(a).enter().append("option").attr("value", (function(t) {
         return t.o
      })).text((function(t) {
         return t.n
      })), e.property("selectedIndex", n)
   }
   var Bt = null;

   function Gt(e) {
      var a = d3.time.format("%Y-%m-%d %H:%M:%S"),
         n = [0, 0],
         r = [0, 0],
         s = new Date,
         o = -s.getTimezoneOffset(),
         i = o,
         l = V.set(e),
         c = d3.select("#celestial-form form").insert("div", "div#general").attr("id", "loc");
      var p = new Xt(l, (function(t, e) {
         Q("datetime").value = k(t, e), i = e, S()
      }));
      nt(l, "geopos") && null !== l.geopos && 2 === l.geopos.length && (r = l.geopos);
      var d = c.append("div").attr("class", "col").attr("id", "location").style("display", "none");
      d.append("label").attr("title", "Location coordinates long/lat").attr("for", "lat").html("Location"), d.append("input").attr("type", "number").attr("id", "lat").attr("title", "Latitude").attr("placeholder", "Latitude").attr("max", "90").attr("min", "-90").attr("step", "0.0001").attr("value", r[0]).on("change", (function() {
         !0 === Dt(this) && S()
      })), d.append("span").html("°"), d.append("input").attr("type", "number").attr("id", "lon").attr("title", "Longitude").attr("placeholder", "Longitude").attr("max", "180").attr("min", "-180").attr("step", "0.0001").attr("value", r[1]).on("change", (function() {
         !0 === Dt(this) && S()
      })), d.append("span").html("°"), "geolocation" in navigator && d.append("input").attr("type", "button").attr("value", "Here").attr("id", "here").on("click", b), d.append("label").attr("title", "Local date/time").attr("for", "datetime").html(" Date/time"), d.append("input").attr("type", "button").attr("id", "day-left").attr("title", "One day back").on("click", (function() {
         s.setDate(s.getDate() - 1), Q("datetime").value = k(s, i), S()
      })), d.append("input").attr("type", "text").attr("id", "datetime").attr("title", "Date and time").attr("value", k(s, i)).on("click", w, !0).on("input", (function() {
         this.value = k(s, i), p.isVisible() || w()
      })), d.append("div").attr("id", "datepick").on("click", w), d.append("input").attr("type", "button").attr("id", "day-right").attr("title", "One day forward").on("click", (function() {
         s.setDate(s.getDate() + 1), Q("datetime").value = k(s, i), S()
      })), d.append("input").attr("type", "button").attr("value", "Now").attr("id", "now").on("click", M), d.append("br"), d.append("label").attr("title", "Show horizon marker").attr("for", "horizon-show").html(" Horizon marker"), d.append("input").attr("type", "checkbox").attr("id", "horizon-show").property("checked", l.horizon.show).on("change", T), d.append("label").attr("title", "Show daylight").attr("for", "daylight-show").html("Daylight sky"), d.append("input").attr("type", "checkbox").attr("id", "daylight-show").property("checked", l.daylight.show).on("change", T), d.append("br"), d.append("label").attr("title", "Show solar system objects").attr("for", "planets-show").html(" Planets, Sun & Moon"), d.append("input").attr("type", "checkbox").attr("id", "planets-show").property("checked", l.planets.show).on("change", T);
      var u = $.planets[l.culture] || $.planets.iau;
      for (var h in u)
         if (nt(u, h)) {
            var f = Object.keys(u[h]);
            if (f.length > 1) {
               var m = "symbol" === h ? "as" : "with";
               d.append("label").attr("for", "planets-" + h + "Type").html(m);
               var y = 0;
               d.append("label").attr("title", "Type of planet name").attr("for", "planets-" + h + "Type").attr("class", "advanced").html("");
               var g = d.append("select").attr("id", "planets-" + h + "Type").on("change", T);
               var v = f.map((function(t, e) {
                  return t === l.planets[h + "Type"] && (y = e), {
                     o: t,
                     n: u[h][t]
                  }
               }));
               g.selectAll("option").data(v).enter().append("option").attr("value", (function(t) {
                  return t.o
               })).text((function(t) {
                  return t.n
               })), g.property("selectedIndex", y), "names" === h && (g.attr("class", "advanced"), d.append("label").attr("for", "planets-" + h).html("names"), d.append("input").attr("type", "checkbox").attr("id", "planets-" + h).property("checked", l.planets[h]).on("change", T))
            }
         }
      function M() {
         s.setTime(Date.now()), Q("datetime").value = k(s, i), S()
      }

      function b() {
         navigator.geolocation.getCurrentPosition((function(t) {
            r = [tt(t.coords.latitude, 4), tt(t.coords.longitude, 4)], Q("lat").value = r[0], Q("lon").value = r[1], S()
         }))
      }

      function w() {
         p.show(s, i)
      }

      function k(t, e) {
         var n;
         if (e && "0" !== e) {
            var r = Math.floor(Math.abs(e) / 60),
               s = Math.abs(e) - 60 * r,
               o;
            n = (e > 0 ? " +" : " −") + at(r) + at(s)
         } else n = " ±0000";
         return a(t) + n
      }

      function x(t) {
         return !(!t || !ot(t) || t.length < 2) && (!(!st(t[0]) || t[0] < -90 || t[0] > 90) && !(!st(t[1]) || t[1] < -180 || t[1] > 180))
      }

      function z(t) {
         return null != t && !(!st(t) && Math.abs(t) > 840)
      }

      function T() {
         Object.assign(l, V.set()), l.horizon.show = !!Q("horizon-show").checked, l.daylight.show = !!Q("daylight-show").checked, l.planets.show = !!Q("planets-show").checked, l.planets.names = !!Q("planets-names").checked, l.planets.namesType = Q("planets-namesType").value, l.planets.symbolType = Q("planets-symbolType").value, At(Q("planets-show")), t.apply(l)
      }

      function S() {
         var e = parseFloat(Q("lon").value),
            c = parseFloat(Q("lat").value),
            p;
         if (Object.assign(l, V.set()), s = a.parse(Q("datetime").value.slice(0, -6)), !isNaN(e) && !isNaN(c)) {
            if (c !== r[0] || e !== r[1]) return r = [c, e], j([c, e], !0), void 0;
            Q("datetime").value = k(s, i);
            var d = new Date(s.valueOf() - 6e4 * (i - o));
            (n = t.getPoint(P.inverse(d, [90, 0], r), l.transform))[2] = 0, "zenith" === l.follow ? t.rotate({
               center: n
            }) : t.redraw()
         }
      }

      function j(t, e) {
         if (t && nt(l, "settimezone") && !1 !== l.settimezone) {
            var a = Math.floor(s.getTime() / 1e3),
               n = "https://api.timezonedb.com/v2.1/get-time-zone?key=" + l.timezoneid + "&format=json&by=position" + "&lat=" + t[0] + "&lng=" + t[1] + "&time=" + a;
            d3.json(n, (function(e, n) {
               if (e) return console.warn(e);
               "FAILED" === n.status ? (i = 60 * Math.round(t[1] / 15), Bt = {
                  gmtOffset: 60 * i,
                  message: "Sea locatation inferred",
                  timestamp: a
               }) : (i = n.gmtOffset / 60, Bt = n), setTimeout((() => {
                  Q("datetime").value = k(s, i)
               }), 150), S()
            }))
         }
      }
      At(Q("planets-show")), Ct(l.advanced), d3.select(document).on("mousedown", (function() {
         !ut(d3.event.target, "celestial-date") && p.isVisible() && p.hide()
      })), t.dateFormat = k, t.date = function(t, e) {
         if (!t) return s;
         z(e) && (i = e), Object.assign(l, V.set()), p.isVisible() && p.hide(), s.setTime(t.valueOf()), Q("datetime").value = k(t, i), S()
      }, t.timezone = function(t) {
         if (!t) return i;
         z(t) && (i = t), Object.assign(l, V.set()), p.isVisible() && p.hide(), Q("datetime").value = k(s, i), S()
      }, t.position = function() {
         return r
      }, t.location = function(t, e) {
         if (!t || t.length < 2) return r;
         x(t) && (r = t.slice(), Q("lat").value = r[0], Q("lon").value = r[1], z(e) ? i = e : j(r, !0))
      }, t.skyview = function(e) {
         if (!e) return {
            date: s,
            location: r,
            timezone: i
         };
         var a = !1;
         return p.isVisible() && p.hide(), nt(e, "timezone") && z(e.timezone) && (i = e.timezone, a = !0), nt(e, "date") && ct(e.date) && (s.setTime(e.date.valueOf()), Q("datetime").value = k(e.date, i), a = !0), nt(e, "location") && x(e.location) && (r = e.location.slice(), Q("lat").value = r[0], Q("lon").value = r[1], !nt(e, "timezone")) ? (j(r, !nt(e, "date")), void 0) : !1 === a ? {
            date: s,
            location: r,
            timezone: i
         } : ("zenith" === l.follow ? S() : t.redraw(), void 0)
      }, t.dtLoc = t.skyview, t.zenith = function() {
         return n
      }, t.nadir = function() {
         var t = -n[1],
            e = n[0] + 180;
         return e > 180 && (e -= 360), [e, t - .001]
      }, !nt(e, "formFields") || !0 !== e.location && !0 !== e.formFields.location || d3.select("#location").style({
         display: "inline-block"
      }), !0 === e.location && !0 === e.formFields.location && setTimeout(S, 1e3)
   }
   var Ut = {
         sol: .0002959122082855911,
         mer: 0x95955473dbc3,
         ven: 0x89d9374048629,
         ter: 0xa923c08a47948,
         lun: 36599199229256,
         mar: 319711652803400,
         cer: 467549107200,
         ves: 129071530155,
         jup: 0xd20883d548bcd80,
         sat: 0x3ee3798098fbac0,
         ura: 0x99ad2c4e2f7f70,
         nep: 0xb54f848fd74430,
         plu: 7327611364884,
         eri: 827117568e4
      },
      Wt = {
         sol: "☉",
         mer: "☿",
         ven: "♀",
         ter: "⊕",
         lun: "●",
         mar: "♂",
         cer: "⚳",
         ves: "⚶",
         jup: "♃",
         sat: "♄",
         ura: "♅",
         nep: "♆",
         plu: "♇",
         eri: "⚪"
      },
      Vt = 23.43928 * x,
      Rt = Math.sin(Vt),
      Yt = Math.cos(Vt),
      Jt = ["a", "e", "i", "w", "M", "L", "W", "N", "n", "ep", "ref", "lecl", "becl", "Tilt"];
   var $t = function() {
      var t = Ut.sol,
         e = "sol",
         a = {},
         n = {},
         r, s, o;

      function i(t) {
         return l(t), "sol" === r ? (n.ephemeris.x = 0, n.ephemeris.y = 0, n.ephemeris.z = 0, n.ephemeris.mag = -6, i) : (c(), i)
      }
      var l = function(t) {
         var e, r = n.ephemeris = {};
         t && (e = t instanceof Date ? new Date(t.valueOf()) : yt(t)), e || (e = new Date), r.jd = z(e), (e = yt(a.ep)) || (e = yt("2000-01-01")), r.jd0 = z(e), r.d = r.jd - r.jd0, r.cy = r.d / 36525
      };
      var c = function() {
         var t, e = n.ephemeris;
         if ("lun" === r) {
            if (!(e = j(e))) return
         } else {
            for (var s = 0; s < Jt.length; s++) t = Jt[s], nt(a, t) && (nt(a, "d" + t) ? e[t] = a[t] + a["d" + t] * e.cy : nt(a, t) && (e[t] = a[t]));
            nt(e, "M") && !nt(e, "dM") && nt(e, "n") && (e.M += e.n * e.d)
         }
         h(), u(), g()
      };

      function p(t, e) {
         var a = e > 1 ? t * t : -t * t,
            n = e * a * t / 6,
            r = (1 - e) * t - n,
            s = 4;
         while (Math.abs(n) > 1e-15) r -= n *= a / (s * (s + 1)), s += 2;
         return r
      }

      function d() {
         var t = n.ephemeris,
            e, a, r, s, o = t.e,
            i = t.M,
            l = 1e-8,
            c = 0,
            d = 1.9,
            u = !1,
            h = 0;
         if (!i) return 0;
         if (o < 1 && ((i < -Math.PI || i > Math.PI) && (c = i - (s = vt.normalize0(i)), i = s), o < .9)) {
            e = Math.atan2(Math.sin(i), Math.cos(i) - o);
            do {
               e -= a = (e - o * Math.sin(e) - i) / (1 - o * Math.cos(e))
            } while (Math.abs(a) > l);
            return e
         }
         if (i < 0 && (i = -i, u = !0), e = i, (l *= Math.abs(1 - o)) < 1e-15 && (l = 1e-15), (o > .8 && i < Math.PI / 3 || o > 1) && ((r = i / Math.abs(1 - o)) * r > 6 * Math.abs(1 - o) && (r = i < Math.PI ? Math.pow(6 * i, 1 / 3) : vt.asinh(i / o)), e = r), o > 1 && i > 4 && (e = Math.log(i)), o < 1)
            while (Math.abs(d) > l) e += d = -(a = h++ > 8 ? p(e, o) - i : e - o * Math.sin(e) - i) / (1 - o * Math.cos(e));
         else
            while (Math.abs(d) > l) e += d = -(a = h++ > 7 ? -p(e, o) - i : o * vt.sinh(e) - e - i) / (o * vt.cosh(e) - 1);
         return u ? c - e : c + e
      }

      function u() {
         var t, e, a, r, s, o = n.ephemeris;
         1 === o.e ? (s = o.jd0 - o.T, r = o.w0 * s * .5, e = Math.pow(r + Math.sqrt(r * r + 1), 1 / 3), o.v = 2 * Math.atan(e - 1 / e)) : (o.E = d(), o.e > 1 ? (t = o.e - vt.cosh(o.E), e = vt.sinh(o.E)) : (t = Math.cos(o.E) - o.e, e = Math.sin(o.E)), e *= Math.sqrt(Math.abs(1 - o.e * o.e)), o.v = Math.atan2(e, t)), a = o.q * (1 + o.e), o.r = a / (1 + o.e * Math.cos(o.v))
      }

      function h() {
         var e = n.ephemeris;
         e.hasOwnProperty("w") || (e.w = e.W - e.N), e.hasOwnProperty("M") || (e.M = e.L - e.W), e.e < 1 && (e.M = vt.normalize0(e.M)), e.P = w * Math.sqrt(Math.pow(e.a, 3) / t) / 365.25, e.T = e.jd0 - e.M / k / e.P, 1 !== e.e ? (e.q = e.a * (1 - e.e), e.t0 = e.a * Math.sqrt(Math.abs(e.a) / t)) : (e.w0 = 3 / Math.sqrt(2) / (e.q * Math.sqrt(e.q / t)), e.a = 0, e.t0 = 0), e.am = Math.sqrt(t * e.q * (1 + e.e))
      }

      function f() {
         var t = n.ephemeris;
         if (!t.ref || "ecl" === t.ref) return t.tx = t.x, t.ty = t.y, t.tz = t.z, void 0;
         var e = t.lecl,
            a, r;
         M(t, [0, Math.PI / 2 - t.becl, -e]);
         var s = vt.cartesian([t.tl, t.tb, t.r]);
         t.tx = s.x, t.ty = s.y, t.tz = s.z
      }

      function m(t) {
         var e = n.ephemeris,
            a = t.ephemeris;
         Vt = (23.439292 - .0130042 * e.cy - 1.667e-7 * e.cy * e.cy + 5.028e-7 * e.cy * e.cy * e.cy) * x, Rt = Math.sin(Vt), Yt = Math.cos(Vt);
         var s = "lun" === r ? {
            x: 0,
            y: 0,
            z: 0
         } : {
            x: a.x,
            y: a.y,
            z: a.z
         };
         e.xeq = e.x - s.x, e.yeq = (e.y - s.y) * Yt - (e.z - s.z) * Rt, e.zeq = (e.y - s.y) * Rt + (e.z - s.z) * Yt, e.ra = vt.normalize(Math.atan2(e.yeq, e.xeq)), e.dec = Math.atan2(e.zeq, Math.sqrt(e.xeq * e.xeq + e.yeq * e.yeq)), "lun" === r && (e = P(e, a)), e.pos = [e.ra / x, e.dec / x], e.rt = Math.sqrt(e.xeq * e.xeq + e.yeq * e.yeq + e.zeq * e.zeq), "sol" !== r && (e.mag = y())
      }

      function y() {
         var t = n.ephemeris,
            e = t.r,
            a = t.rt,
            r = Math.acos((e * e + a * a - 1) / (2 * e * a)),
            s = .666 * ((1 - r / Math.PI) * Math.cos(r) + 1 / Math.PI * Math.sin(r)),
            o;
         return 1 * n.H + 5 * Math.log(e * a) * Math.LOG10E - 2.5 * Math.log(s) * Math.LOG10E
      }

      function g() {
         var t = n.ephemeris,
            e = t.v + t.w;
         return t.x = t.r * (Math.cos(t.N) * Math.cos(e) - Math.sin(t.N) * Math.sin(e) * Math.cos(t.i)), t.y = t.r * (Math.sin(t.N) * Math.cos(e) + Math.cos(t.N) * Math.sin(e) * Math.cos(t.i)), t.z = t.r * (Math.sin(e) * Math.sin(t.i)), n
      }

      function v() {
         var t = n.ephemeris,
            e = Math.atan2(t.y, t.x),
            a = Math.atan2(t.z, Math.sqrt(t.x * t.x + t.y * t.y));
         return t.l = vt.normalize(e), t.b = a, n
      }

      function M(t) {}

      function b(t) {
         var e = Math.cos(t.lat) * t.r;
         return t.x = e * Math.cos(t.lon), t.y = e * Math.sin(t.lon), t.z = t.r * Math.sin(t.lat), t
      }

      function z(t) {
         var e = t.getUTCFullYear(),
            a = t.getUTCMonth() + 1,
            n = t.getUTCDate(),
            r = (t.getUTCHours() - 12 + t.getUTCMinutes() / 60 + t.getUTCSeconds() / 3600) / 24,
            s;
         if (e < -4799) return -1;
         var o = Math.floor((14 - a) / 12),
            i = e + 4800 - o,
            l = a + 12 * o - 3;
         var c;
         return n + Math.floor((153 * l + 2) / 5) + 365 * i + Math.floor(i / 4) - Math.floor(i / 100) + Math.floor(i / 400) - 32045 + r
      }

      function T(t) {
         var e = t || 0;
         return 15 * (18.697374558 + 24.06570982441908 * n.ephemeris.d) + e
      }

      function S(t) {
         var e = 298.257223563,
            a = 6378.137,
            n = t.h || 0,
            r = {},
            s = T();
         var o = Math.cos(t.lat),
            i = Math.sin(t.lat),
            l = 1 - 1 / e;
         var c = l * l;
         var p = 1 / Math.sqrt(o * o + c * i * i),
            d = a * p + n,
            u = a * c * p + n,
            h = Math.sqrt(d * d * o * o + u * u * i * i);
         r.lat = Math.acos(d * o / h), r.lon = t.lon, r.r = n, t.lat < 0 && (r.lat *= -1), b(r);
         var f = s * x;
         return r.x = r.x * Math.cos(f) - r.y * Math.sin(f), r.y = r.x * Math.sin(f) + r.y * Math.cos(f), r
      }

      function j(t) {
         if ("undefined" != typeof Kt) return Kt.elements(t)
      }

      function P(t, e) {
         if (v(), "undefined" != typeof Kt) return Kt.corr(t, e)
      }
      return i.cartesian = function() {
         return n
      }, i.spherical = function() {
         return v(), n
      }, i.equatorial = function(t) {
         return m(t), n
      }, i.transpose = function() {
         return f(n), n
      }, i.elements = function(t) {
         var e;
         if (!arguments.length || void 0 === arguments[0]) return i;
         for (var n = 0; n < Jt.length; n++) nt(t, e = Jt[n]) && (a[e] = t[e], "a" === e || "e" === e ? a[e] *= 1 : "ref" !== e && "ep" !== e && (a[e] *= x), nt(t, "d" + e) && (a[e = "d" + e] = t[e], a[e] *= "da" === e || "de" === e ? 1 : x));
         return i
      }, i.params = function(t) {
         if (!arguments.length) return i;
         for (var e in t) nt(t, e) && "elements" !== t[e] && (n[e] = t[e]);
         return i
      }, i.parentBody = function(a) {
         return arguments.length ? (t = Ut[e = a], i) : e
      }, i.id = function(t) {
         return arguments.length ? (r = t, o = Wt[t], i) : r
      }, i.Name = function(t) {
         return arguments.length ? (s = t, i) : s
      }, i.symbol = function(t) {
         return arguments.length ? (o = Wt[t], i) : o
      }, i
   };
   var Kt = {
      elements: function(t) {
         var e = (t.jd - 2451545) / 36525,
            a = e * e,
            n = e * a,
            r = e * n,
            s = e * r,
            o = 1e-4 * a,
            i = 1e-6 * n,
            l = 1e-8 * r;
         var c;
         var p;
         var d = 383397.6 + (3400.4 * Math.cos(x * (235.7004 + 890534.223 * e - 32.601 * o + 3.664 * i - 1.769 * l)) - 635.6 * Math.cos(x * (100.737 + 413335.3554 * e - 122.571 * o - 10.684 * i + 5.028 * l)) - 235.6 * Math.cos(x * (134.9634 + 477198.8676 * e + 89.97 * o + 14.348 * i - 6.797 * l)) + 218.1 * Math.cos(x * (238.1713 + 854535.1727 * e - 31.065 * o + 3.623 * i - 1.769 * l)) + 181 * Math.cos(x * (10.6638 + 1367733.0907 * e + 57.37 * o + 18.011 * i - 8.566 * l)) - 39.9 * Math.cos(x * (103.2079 + 377336.3051 * e - 121.035 * o - 10.724 * i + 5.028 * l)) - 38.4 * Math.cos(x * (233.2295 + 926533.2733 * e - 34.136 * o + 3.705 * i - 1.769 * l)) + 33.8 * Math.cos(x * (336.4374 + 1303869.5784 * e - 155.171 * o - 7.02 * i + 3.259 * l)) + 28.8 * Math.cos(x * (111.4008 + 1781068.4461 * e - 65.201 * o + 7.328 * i - 3.538 * l)) + 12.6 * Math.cos(x * (13.1347 + 1331734.0404 * e + 58.906 * o + 17.971 * i - 8.566 * l)) + 11.4 * Math.cos(x * (186.5442 + 966404.0351 * e - 68.058 * o - .567 * i + .232 * l)) - 11.1 * Math.cos(x * (222.5657 - 441199.8173 * e - 91.506 * o - 14.307 * i + 6.797 * l)) - 10.2 * Math.cos(x * (269.9268 + 954397.7353 * e + 179.941 * o + 28.695 * i - 13.594 * l)) + 9.7 * Math.cos(x * (145.6272 + 1844931.9583 * e + 147.34 * o + 32.359 * i - 15.363 * l)) + 9.6 * Math.cos(x * (240.6422 + 818536.1225 * e - 29.529 * o + 3.582 * i - 1.769 * l)) + 8 * Math.cos(x * (297.8502 + 445267.1115 * e - 16.3 * o + 1.832 * i - .884 * l)) - 6.2 * Math.cos(x * (132.4925 + 513197.9179 * e + 88.434 * o + 14.388 * i - 6.797 * l)) + 6 * Math.cos(x * (173.5506 + 1335801.3346 * e - 48.901 * o + 5.496 * i - 2.653 * l)) + 3.7 * Math.cos(x * (113.8717 + 1745069.3958 * e - 63.665 * o + 7.287 * i - 3.538 * l)) + 3.6 * Math.cos(x * (338.9083 + 1267870.5281 * e - 153.636 * o - 7.061 * i + 3.259 * l)) + 3.2 * Math.cos(x * (246.3642 + 2258267.3137 * e + 24.769 * o + 21.675 * i - 10.335 * l)) - 3 * Math.cos(x * (8.1929 + 1403732.141 * e + 55.834 * o + 18.052 * i - 8.566 * l)) + 2.3 * Math.cos(x * (98.2661 + 449334.4057 * e - 124.107 * o - 10.643 * i + 5.028 * l)) - 2.2 * Math.cos(x * (357.5291 + 35999.0503 * e - 1.536 * o + .041 * i + 0 * l)) - 2 * Math.cos(x * (38.5872 + 858602.4669 * e - 138.871 * o - 8.852 * i + 4.144 * l)) - 1.8 * Math.cos(x * (105.6788 + 341337.2548 * e - 119.499 * o - 10.765 * i + 5.028 * l)) - 1.7 * Math.cos(x * (201.474 + 826670.7108 * e - 245.142 * o - 21.367 * i + 10.057 * l)) + 1.6 * Math.cos(x * (184.1196 + 401329.0556 * e + 125.428 * o + 18.579 * i - 8.798 * l)) - 1.4 * Math.cos(x * (308.4192 - 489205.1674 * e + 158.029 * o + 14.915 * i - 7.029 * l)) + 1.3 * Math.cos(x * (325.7736 - 63863.5122 * e - 212.541 * o - 25.031 * i + 11.826 * l))) + (-.55 * Math.cos(x * (238.2 + 854535.2 * e)) + .1 * Math.cos(x * (103.2 + 377336.3 * e)) + .1 * Math.cos(x * (233.2 + 926533.3 * e))) * e;
         var u;
         var h;
         var f = .055544 + (.014217 * Math.cos(x * (100.737 + 413335.3554 * e - 122.571 * o - 10.684 * i + 5.028 * l)) + .008551 * Math.cos(x * (325.7736 - 63863.5122 * e - 212.541 * o - 25.031 * i + 11.826 * l)) - .001383 * Math.cos(x * (134.9634 + 477198.8676 * e + 89.97 * o + 14.348 * i - 6.797 * l)) + .001353 * Math.cos(x * (10.6638 + 1367733.0907 * e + 57.37 * o + 18.011 * i - 8.566 * l)) - .001146 * Math.cos(x * (66.5106 + 349471.8432 * e - 335.112 * o - 35.715 * i + 16.854 * l)) - 915e-6 * Math.cos(x * (201.474 + 826670.7108 * e - 245.142 * o - 21.367 * i + 10.057 * l)) + 869e-6 * Math.cos(x * (103.2079 + 377336.3051 * e - 121.035 * o - 10.724 * i + 5.028 * l)) - 628e-6 * Math.cos(x * (235.7004 + 890534.223 * e - 32.601 * o + 3.664 * i - 1.769 * l)) - 393e-6 * Math.cos(x * (291.5472 - 127727.0245 * e - 425.082 * o - 50.062 * i + 23.651 * l)) + 284e-6 * Math.cos(x * (328.2445 - 99862.5625 * e - 211.005 * o - 25.072 * i + 11.826 * l)) - 278e-6 * Math.cos(x * (162.8868 - 31931.7561 * e - 106.271 * o - 12.516 * i + 5.913 * l)) - 24e-5 * Math.cos(x * (269.9268 + 954397.7353 * e + 179.941 * o + 28.695 * i - 13.594 * l)) + 23e-5 * Math.cos(x * (111.4008 + 1781068.4461 * e - 65.201 * o + 7.328 * i - 3.538 * l)) + 229e-6 * Math.cos(x * (167.2476 + 762807.1986 * e - 457.683 * o - 46.398 * i + 21.882 * l)) - 202e-6 * Math.cos(x * (83.3826 - 12006.2998 * e + 247.999 * o + 29.262 * i - 13.826 * l)) + 19e-5 * Math.cos(x * (190.8102 - 541062.3799 * e - 302.511 * o - 39.379 * i + 18.623 * l)) + 177e-6 * Math.cos(x * (357.5291 + 35999.0503 * e - 1.536 * o + .041 * i + 0 * l)) + 153e-6 * Math.cos(x * (32.2842 + 285608.3309 * e - 547.653 * o - 60.746 * i + 28.679 * l)) - 137e-6 * Math.cos(x * (44.8902 + 1431596.6029 * e + 269.911 * o + 43.043 * i - 20.392 * l)) + 122e-6 * Math.cos(x * (145.6272 + 1844931.9583 * e + 147.34 * o + 32.359 * i - 15.363 * l)) + 116e-6 * Math.cos(x * (302.211 + 1240006.0662 * e - 367.713 * o - 32.051 * i + 15.085 * l)) - 111e-6 * Math.cos(x * (203.9449 + 790671.6605 * e - 243.606 * o - 21.408 * i + 10.057 * l)) - 108e-6 * Math.cos(x * (68.9815 + 313472.7929 * e - 333.576 * o - 35.756 * i + 16.854 * l)) + 96e-6 * Math.cos(x * (336.4374 + 1303869.5784 * e - 155.171 * o - 7.02 * i + 3.259 * l)) - 9e-5 * Math.cos(x * (98.2661 + 449334.4057 * e - 124.107 * o - 10.643 * i + 5.028 * l)) + 9e-5 * Math.cos(x * (13.1347 + 1331734.0404 * e + 58.906 * o + 17.971 * i - 8.566 * l)) + 56e-6 * Math.cos(x * (55.8468 - 1018261.2475 * e - 392.482 * o - 53.726 * i + 25.42 * l)) - 56e-6 * Math.cos(x * (238.1713 + 854535.1727 * e - 31.065 * o + 3.623 * i - 1.769 * l)) + 52e-6 * Math.cos(x * (308.4192 - 489205.1674 * e + 158.029 * o + 14.915 * i - 7.029 * l)) - 5e-5 * Math.cos(x * (133.0212 + 698943.6863 * e - 670.224 * o - 71.429 * i + 33.708 * l)) - 49e-6 * Math.cos(x * (267.9846 + 1176142.554 * e - 580.254 * o - 57.082 * i + 26.911 * l)) - 49e-6 * Math.cos(x * (184.1196 + 401329.0556 * e + 125.428 * o + 18.579 * i - 8.798 * l)) - 45e-6 * Math.cos(x * (49.1562 - 75869.812 * e + 35.458 * o + 4.231 * i - 2.001 * l)) + 44e-6 * Math.cos(x * (257.3208 - 191590.5367 * e - 637.623 * o - 75.093 * i + 35.477 * l)) + 42e-6 * Math.cos(x * (105.6788 + 341337.2548 * e - 119.499 * o - 10.765 * i + 5.028 * l)) + 42e-6 * Math.cos(x * (160.4159 + 4067.2942 * e - 107.806 * o - 12.475 * i + 5.913 * l)) + 4e-5 * Math.cos(x * (246.3642 + 2258267.3137 * e + 24.769 * o + 21.675 * i - 10.335 * l)) - 4e-5 * Math.cos(x * (156.5838 - 604925.8921 * e - 515.053 * o - 64.41 * i + 30.448 * l)) + 36e-6 * Math.cos(x * (169.7185 + 726808.1483 * e - 456.147 * o - 46.439 * i + 21.882 * l)) + 29e-6 * Math.cos(x * (113.8717 + 1745069.3958 * e - 63.665 * o + 7.287 * i - 3.538 * l)) - 29e-6 * Math.cos(x * (297.8502 + 445267.1115 * e - 16.3 * o + 1.832 * i - .884 * l)) - 28e-6 * Math.cos(x * (294.0181 - 163726.0747 * e - 423.546 * o - 50.103 * i + 23.651 * l)) + 27e-6 * Math.cos(x * (263.6238 + 381403.5993 * e - 228.841 * o - 23.199 * i + 10.941 * l)) - 26e-6 * Math.cos(x * (358.0578 + 221744.8187 * e - 760.194 * o - 85.777 * i + 40.505 * l)) - 26e-6 * Math.cos(x * (8.1929 + 1403732.141 * e + 55.834 * o + 18.052 * i - 8.566 * l))) + .001 * e * (-.0022 * Math.cos(x * (103.2 + 377336.3 * e)));
         var m;
         var y;
         var g = .0449858 + (.0011776 * Math.cos(x * (49.1562 - 75869.812 * e + 35.458 * o + 4.231 * i - 2.001 * l)) - 971e-7 * Math.cos(x * (235.7004 + 890534.223 * e - 32.601 * o + 3.664 * i - 1.769 * l)) + 908e-7 * Math.cos(x * (186.5442 + 966404.0351 * e - 68.058 * o - .567 * i + .232 * l)) + 623e-7 * Math.cos(x * (83.3826 - 12006.2998 * e + 247.999 * o + 29.262 * i - 13.826 * l)) + 483e-7 * Math.cos(x * (51.6271 - 111868.8623 * e + 36.994 * o + 4.19 * i - 2.001 * l)) + 348e-7 * Math.cos(x * (100.737 + 413335.3554 * e - 122.571 * o - 10.684 * i + 5.028 * l)) - 316e-7 * Math.cos(x * (308.4192 - 489205.1674 * e + 158.029 * o + 14.915 * i - 7.029 * l)) - 253e-7 * Math.cos(x * (46.6853 - 39870.7617 * e + 33.922 * o + 4.272 * i - 2.001 * l)) - 141e-7 * Math.cos(x * (274.1928 - 553068.6797 * e - 54.513 * o - 10.116 * i + 4.797 * l)) + 127e-7 * Math.cos(x * (325.7736 - 63863.5122 * e - 212.541 * o - 25.031 * i + 11.826 * l)) + 117e-7 * Math.cos(x * (184.1196 + 401329.0556 * e + 125.428 * o + 18.579 * i - 8.798 * l)) - 78e-7 * Math.cos(x * (98.3124 - 151739.624 * e + 70.916 * o + 8.462 * i - 4.001 * l)) - 63e-7 * Math.cos(x * (238.1713 + 854535.1727 * e - 31.065 * o + 3.623 * i - 1.769 * l)) + 63e-7 * Math.cos(x * (134.9634 + 477198.8676 * e + 89.97 * o + 14.348 * i - 6.797 * l)) + 36e-7 * Math.cos(x * (321.5076 + 1443602.9027 * e + 21.912 * o + 13.78 * i - 6.566 * l)) - 35e-7 * Math.cos(x * (10.6638 + 1367733.0907 * e + 57.37 * o + 18.011 * i - 8.566 * l)) + 24e-7 * Math.cos(x * (149.8932 + 337465.5434 * e - 87.113 * o - 6.453 * i + 3.028 * l)) + 24e-7 * Math.cos(x * (170.9849 - 930404.9848 * e + 66.523 * o + .608 * i - .232 * l))) + .001 * (-.0203 * Math.cos(x * (125 - 1934.1 * e)) + .0034 * Math.cos(x * (220.2 - 1935.5 * e)));
         var v;
         var M;
         var b = 83.353 + 4069.0137 * e - 103.238 * o - 12.492 * i + 5.263 * l + (-15.448 * Math.sin(x * (100.737 + 413335.3554 * e - 122.571 * o - 10.684 * i + 5.028 * l)) - 9.642 * Math.sin(x * (325.7736 - 63863.5122 * e - 212.541 * o - 25.031 * i + 11.826 * l)) - 2.721 * Math.sin(x * (134.9634 + 477198.8676 * e + 89.97 * o + 14.348 * i - 6.797 * l)) + 2.607 * Math.sin(x * (66.5106 + 349471.8432 * e - 335.112 * o - 35.715 * i + 16.854 * l)) + 2.085 * Math.sin(x * (201.474 + 826670.7108 * e - 245.142 * o - 21.367 * i + 10.057 * l)) + 1.477 * Math.sin(x * (10.6638 + 1367733.0907 * e + 57.37 * o + 18.011 * i - 8.566 * l)) + .968 * Math.sin(x * (291.5472 - 127727.0245 * e - 425.082 * o - 50.062 * i + 23.651 * l)) - .949 * Math.sin(x * (103.2079 + 377336.3051 * e - 121.035 * o - 10.724 * i + 5.028 * l)) - .703 * Math.sin(x * (167.2476 + 762807.1986 * e - 457.683 * o - 46.398 * i + 21.882 * l)) - .66 * Math.sin(x * (235.7004 + 890534.223 * e - 32.601 * o + 3.664 * i - 1.769 * l)) - .577 * Math.sin(x * (190.8102 - 541062.3799 * e - 302.511 * o - 39.379 * i + 18.623 * l)) - .524 * Math.sin(x * (269.9268 + 954397.7353 * e + 179.941 * o + 28.695 * i - 13.594 * l)) - .482 * Math.sin(x * (32.2842 + 285608.3309 * e - 547.653 * o - 60.746 * i + 28.679 * l)) + .452 * Math.sin(x * (357.5291 + 35999.0503 * e - 1.536 * o + .041 * i + 0 * l)) - .381 * Math.sin(x * (302.211 + 1240006.0662 * e - 367.713 * o - 32.051 * i + 15.085 * l)) - .342 * Math.sin(x * (328.2445 - 99862.5625 * e - 211.005 * o - 25.072 * i + 11.826 * l)) - .312 * Math.sin(x * (44.8902 + 1431596.6029 * e + 269.911 * o + 43.043 * i - 20.392 * l)) + .282 * Math.sin(x * (162.8868 - 31931.7561 * e - 106.271 * o - 12.516 * i + 5.913 * l)) + .255 * Math.sin(x * (203.9449 + 790671.6605 * e - 243.606 * o - 21.408 * i + 10.057 * l)) + .252 * Math.sin(x * (68.9815 + 313472.7929 * e - 333.576 * o - 35.756 * i + 16.854 * l)) - .211 * Math.sin(x * (83.3826 - 12006.2998 * e + 247.999 * o + 29.262 * i - 13.826 * l)) + .193 * Math.sin(x * (267.9846 + 1176142.554 * e - 580.254 * o - 57.082 * i + 26.911 * l)) + .191 * Math.sin(x * (133.0212 + 698943.6863 * e - 670.224 * o - 71.429 * i + 33.708 * l)) - .184 * Math.sin(x * (55.8468 - 1018261.2475 * e - 392.482 * o - 53.726 * i + 25.42 * l)) + .182 * Math.sin(x * (145.6272 + 1844931.9583 * e + 147.34 * o + 32.359 * i - 15.363 * l)) - .158 * Math.sin(x * (257.3208 - 191590.5367 * e - 637.623 * o - 75.093 * i + 35.477 * l)) + .148 * Math.sin(x * (156.5838 - 604925.8921 * e - 515.053 * o - 64.41 * i + 30.448 * l)) - .111 * Math.sin(x * (169.7185 + 726808.1483 * e - 456.147 * o - 46.439 * i + 21.882 * l)) + .101 * Math.sin(x * (13.1347 + 1331734.0404 * e + 58.906 * o + 17.971 * i - 8.566 * l)) + .1 * Math.sin(x * (358.0578 + 221744.8187 * e - 760.194 * o - 85.777 * i + 40.505 * l)) + .087 * Math.sin(x * (98.2661 + 449334.4057 * e - 124.107 * o - 10.643 * i + 5.028 * l)) + .08 * Math.sin(x * (42.948 + 1653341.4216 * e - 490.283 * o - 42.734 * i + 20.113 * l)) + .08 * Math.sin(x * (222.5657 - 441199.8173 * e - 91.506 * o - 14.307 * i + 6.797 * l)) + .077 * Math.sin(x * (294.0181 - 163726.0747 * e - 423.546 * o - 50.103 * i + 23.651 * l)) - .073 * Math.sin(x * (280.8834 - 1495460.1151 * e - 482.452 * o - 68.074 * i + 32.217 * l)) - .071 * Math.sin(x * (304.6819 + 1204007.0159 * e - 366.177 * o - 32.092 * i + 15.085 * l)) - .069 * Math.sin(x * (233.7582 + 1112279.0417 * e - 792.795 * o - 82.113 * i + 38.736 * l)) - .067 * Math.sin(x * (34.7551 + 249609.2807 * e - 546.117 * o - 60.787 * i + 28.679 * l)) - .067 * Math.sin(x * (263.6238 + 381403.5993 * e - 228.841 * o - 23.199 * i + 10.941 * l)) + .055 * Math.sin(x * (21.6203 - 1082124.7597 * e - 605.023 * o - 78.757 * i + 37.246 * l)) + .055 * Math.sin(x * (308.4192 - 489205.1674 * e + 158.029 * o + 14.915 * i - 7.029 * l)) - .054 * Math.sin(x * (8.7216 + 1589477.9094 * e - 702.824 * o - 67.766 * i + 31.939 * l)) - .052 * Math.sin(x * (179.8536 + 1908795.4705 * e + 359.881 * o + 57.39 * i - 27.189 * l)) - .05 * Math.sin(x * (98.7948 + 635080.1741 * e - 882.765 * o - 96.461 * i + 45.533 * l)) - .049 * Math.sin(x * (128.6604 - 95795.2683 * e - 318.812 * o - 37.547 * i + 17.738 * l)) - .047 * Math.sin(x * (17.3544 + 425341.6552 * e - 370.57 * o - 39.946 * i + 18.854 * l)) - .044 * Math.sin(x * (160.4159 + 4067.2942 * e - 107.806 * o - 12.475 * i + 5.913 * l)) - .043 * Math.sin(x * (238.1713 + 854535.1727 * e - 31.065 * o + 3.623 * i - 1.769 * l)) + .042 * Math.sin(x * (270.4555 + 1140143.5037 * e - 578.718 * o - 57.123 * i + 26.911 * l)) - .042 * Math.sin(x * (132.4925 + 513197.9179 * e + 88.434 * o + 14.388 * i - 6.797 * l)) - .041 * Math.sin(x * (122.3573 - 668789.4043 * e - 727.594 * o - 89.441 * i + 42.274 * l)) - .04 * Math.sin(x * (105.6788 + 341337.2548 * e - 119.499 * o - 10.765 * i + 5.028 * l)) + .038 * Math.sin(x * (135.4921 + 662944.6361 * e - 668.688 * o - 71.47 * i + 33.708 * l)) - .037 * Math.sin(x * (242.391 - 51857.2124 * e - 460.54 * o - 54.293 * i + 25.652 * l)) + .036 * Math.sin(x * (336.4374 + 1303869.5784 * e - 155.171 * o - 7.02 * i + 3.259 * l)) + .035 * Math.sin(x * (223.0943 - 255454.0489 * e - 850.164 * o - 100.124 * i + 47.302 * l)) - .034 * Math.sin(x * (193.2811 - 577061.4302 * e - 300.976 * o - 39.419 * i + 18.623 * l)) + .031 * Math.sin(x * (87.6023 - 918398.685 * e - 181.476 * o - 28.654 * i + 13.594 * l))) + .001 * e * (2.4 * Math.sin(x * (103.2 + 377336.3 * e)));
         var w;
         var k;
         var z;
         var T = 125.0446 - 1934.13618 * e + 20.762 * o + 2.139 * i - 1.65 * l + (-1.4979 * Math.sin(x * (49.1562 - 75869.812 * e + 35.458 * o + 4.231 * i - 2.001 * l)) - .15 * Math.sin(x * (357.5291 + 35999.0503 * e - 1.536 * o + .041 * i + 0 * l)) - .1226 * Math.sin(x * (235.7004 + 890534.223 * e - 32.601 * o + 3.664 * i - 1.769 * l)) + .1176 * Math.sin(x * (186.5442 + 966404.0351 * e - 68.058 * o - .567 * i + .232 * l)) - .0801 * Math.sin(x * (83.3826 - 12006.2998 * e + 247.999 * o + 29.262 * i - 13.826 * l)) - .0616 * Math.sin(x * (51.6271 - 111868.8623 * e + 36.994 * o + 4.19 * i - 2.001 * l)) + .049 * Math.sin(x * (100.737 + 413335.3554 * e - 122.571 * o - 10.684 * i + 5.028 * l)) + .0409 * Math.sin(x * (308.4192 - 489205.1674 * e + 158.029 * o + 14.915 * i - 7.029 * l)) + .0327 * Math.sin(x * (134.9634 + 477198.8676 * e + 89.97 * o + 14.348 * i - 6.797 * l)) + .0324 * Math.sin(x * (46.6853 - 39870.7617 * e + 33.922 * o + 4.272 * i - 2.001 * l)) + .0196 * Math.sin(x * (98.3124 - 151739.624 * e + 70.916 * o + 8.462 * i - 4.001 * l)) + .018 * Math.sin(x * (274.1928 - 553068.6797 * e - 54.513 * o - 10.116 * i + 4.797 * l)) + .015 * Math.sin(x * (325.7736 - 63863.5122 * e - 212.541 * o - 25.031 * i + 11.826 * l)) - .015 * Math.sin(x * (184.1196 + 401329.0556 * e + 125.428 * o + 18.579 * i - 8.798 * l)) - .0078 * Math.sin(x * (238.1713 + 854535.1727 * e - 31.065 * o + 3.623 * i - 1.769 * l)) - .0045 * Math.sin(x * (10.6638 + 1367733.0907 * e + 57.37 * o + 18.011 * i - 8.566 * l)) + .0044 * Math.sin(x * (321.5076 + 1443602.9027 * e + 21.912 * o + 13.78 * i - 6.566 * l)) - .0042 * Math.sin(x * (162.8868 - 31931.7561 * e - 106.271 * o - 12.516 * i + 5.913 * l)) - .0031 * Math.sin(x * (170.9849 - 930404.9848 * e + 66.523 * o + .608 * i - .232 * l)) + .0031 * Math.sin(x * (103.2079 + 377336.3051 * e - 121.035 * o - 10.724 * i + 5.028 * l)) + .0029 * Math.sin(x * (222.612 - 1042273.8471 * e + 103.516 * o + 4.798 * i - 2.232 * l)) + .0028 * Math.sin(x * (184.0733 + 1002403.0853 * e - 69.594 * o - .526 * i + .232 * l))) + .001 * (25.9 * Math.sin(x * (125 - 1934.1 * e)) - 4.3 * Math.sin(x * (220.2 - 1935.5 * e)) + .38 * Math.sin(x * (357.5 + 35999.1 * e)) * e);
         var S;
         var j;
         var P;
         var I;
         var A = 218.31665 + 481267.88134 * e - 13.268 * o + 1.856 * i - 1.534 * l + (-.92581 * Math.sin(x * (235.7004 + 890534.223 * e - 32.601 * o + 3.664 * i - 1.769 * l)) + .33262 * Math.sin(x * (100.737 + 413335.3554 * e - 122.571 * o - 10.684 * i + 5.028 * l)) - .18402 * Math.sin(x * (357.5291 + 35999.0503 * e - 1.536 * o + .041 * i + 0 * l)) + .11007 * Math.sin(x * (134.9634 + 477198.8676 * e + 89.97 * o + 14.348 * i - 6.797 * l)) - .06055 * Math.sin(x * (238.1713 + 854535.1727 * e - 31.065 * o + 3.623 * i - 1.769 * l)) + .04741 * Math.sin(x * (325.7736 - 63863.5122 * e - 212.541 * o - 25.031 * i + 11.826 * l)) - .03086 * Math.sin(x * (10.6638 + 1367733.0907 * e + 57.37 * o + 18.011 * i - 8.566 * l)) + .02184 * Math.sin(x * (103.2079 + 377336.3051 * e - 121.035 * o - 10.724 * i + 5.028 * l)) + .01645 * Math.sin(x * (49.1562 - 75869.812 * e + 35.458 * o + 4.231 * i - 2.001 * l)) + .01022 * Math.sin(x * (233.2295 + 926533.2733 * e - 34.136 * o + 3.705 * i - 1.769 * l)) - .00756 * Math.sin(x * (336.4374 + 1303869.5784 * e - 155.171 * o - 7.02 * i + 3.259 * l)) - .0053 * Math.sin(x * (222.5657 - 441199.8173 * e - 91.506 * o - 14.307 * i + 6.797 * l)) - .00496 * Math.sin(x * (162.8868 - 31931.7561 * e - 106.271 * o - 12.516 * i + 5.913 * l)) - .00472 * Math.sin(x * (297.8502 + 445267.1115 * e - 16.3 * o + 1.832 * i - .884 * l)) - .00271 * Math.sin(x * (240.6422 + 818536.1225 * e - 29.529 * o + 3.582 * i - 1.769 * l)) + .00264 * Math.sin(x * (132.4925 + 513197.9179 * e + 88.434 * o + 14.388 * i - 6.797 * l)) - .00254 * Math.sin(x * (186.5442 + 966404.0351 * e - 68.058 * o - .567 * i + .232 * l)) + .00234 * Math.sin(x * (269.9268 + 954397.7353 * e + 179.941 * o + 28.695 * i - 13.594 * l)) - .0022 * Math.sin(x * (13.1347 + 1331734.0404 * e + 58.906 * o + 17.971 * i - 8.566 * l)) - .00202 * Math.sin(x * (355.0582 + 71998.1006 * e - 3.072 * o + .082 * i + 0 * l)) + .00167 * Math.sin(x * (328.2445 - 99862.5625 * e - 211.005 * o - 25.072 * i + 11.826 * l)) - .00143 * Math.sin(x * (173.5506 + 1335801.3346 * e - 48.901 * o + 5.496 * i - 2.653 * l)) - .00121 * Math.sin(x * (98.2661 + 449334.4057 * e - 124.107 * o - 10.643 * i + 5.028 * l)) - .00116 * Math.sin(x * (145.6272 + 1844931.9583 * e + 147.34 * o + 32.359 * i - 15.363 * l)) + .00102 * Math.sin(x * (105.6788 + 341337.2548 * e - 119.499 * o - 10.765 * i + 5.028 * l)) - 9e-4 * Math.sin(x * (184.1196 + 401329.0556 * e + 125.428 * o + 18.579 * i - 8.798 * l)) - 86e-5 * Math.sin(x * (338.9083 + 1267870.5281 * e - 153.636 * o - 7.061 * i + 3.259 * l)) - 78e-5 * Math.sin(x * (111.4008 + 1781068.4461 * e - 65.201 * o + 7.328 * i - 3.538 * l)) + 69e-5 * Math.sin(x * (323.3027 - 27864.4619 * e - 214.077 * o - 24.99 * i + 11.826 * l)) + 66e-5 * Math.sin(x * (51.6271 - 111868.8623 * e + 36.994 * o + 4.19 * i - 2.001 * l)) + 65e-5 * Math.sin(x * (38.5872 + 858602.4669 * e - 138.871 * o - 8.852 * i + 4.144 * l)) - 6e-4 * Math.sin(x * (83.3826 - 12006.2998 * e + 247.999 * o + 29.262 * i - 13.826 * l)) + 54e-5 * Math.sin(x * (201.474 + 826670.7108 * e - 245.142 * o - 21.367 * i + 10.057 * l)) - 52e-5 * Math.sin(x * (308.4192 - 489205.1674 * e + 158.029 * o + 14.915 * i - 7.029 * l)) + 48e-5 * Math.sin(x * (8.1929 + 1403732.141 * e + 55.834 * o + 18.052 * i - 8.566 * l)) - 41e-5 * Math.sin(x * (46.6853 - 39870.7617 * e + 33.922 * o + 4.272 * i - 2.001 * l)) - 33e-5 * Math.sin(x * (274.1928 - 553068.6797 * e - 54.513 * o - 10.116 * i + 4.797 * l)) + 3e-4 * Math.sin(x * (160.4159 + 4067.2942 * e - 107.806 * o - 12.475 * i + 5.913 * l))) + .001 * (3.96 * Math.sin(x * (119.7 + 131.8 * e)) + 1.96 * Math.sin(x * (125 - 1934.1 * e)) + (.463 * Math.sin(x * (357.5 + 35999.1 * e)) + .152 * Math.sin(x * (238.2 + 854535.2 * e)) - .071 * Math.sin(x * (27.8 + 131.8 * e)) - .055 * Math.sin(x * (103.2 + 377336.3 * e)) - .026 * Math.sin(x * (233.2 + 926533.3 * e))) * e + (14 * Math.sin(x * (357.5 + 35999.1 * e)) + 5 * Math.sin(x * (238.2 + 854535.2 * e))) * o);
         return t.a = d, t.e = f, t.i = 2 * Math.asin(g), t.w = vt.normalize(x * (b - T)), t.N = vt.normalize(x * T), t.M = vt.normalize(x * (A - b)), t
      },
      corr: function(t, e) {
         var a = vt.normalize(e.M + Math.PI),
            n = vt.normalize(e.w + Math.PI),
            r = t.M + t.w,
            s = r + t.N - a - n;
         var o = -.022234 * Math.sin(t.M - 2 * s) + .011494 * Math.sin(2 * s) + -.003246 * Math.sin(a) + -.001029 * Math.sin(2 * t.M - 2 * s) + -994838e-9 * Math.sin(t.M - 2 * s + a) + 925025e-9 * Math.sin(t.M + 2 * s) + 802851e-9 * Math.sin(2 * s - a) + 715585e-9 * Math.sin(t.M - a) + -610865e-9 * Math.sin(s) + -541052e-9 * Math.sin(t.M + a) + -261799e-9 * Math.sin(2 * r - 2 * s) + 191986e-9 * Math.sin(t.M - 4 * s);
         t.ra += o;
         var i = -.003019 * Math.sin(r - 2 * s) + -959931e-9 * Math.sin(t.M - r - 2 * s) + -802851e-9 * Math.sin(t.M + r - 2 * s) + 575958e-9 * Math.sin(r + 2 * s) + 296706e-9 * Math.sin(2 * t.M + r);
         return t.dec += i, t.age = vt.normalize(t.l - e.l + Math.PI), t.phase = .5 * (1 - Math.cos(t.age)), t
      }
   };

   function Zt(e) {
      var a = d3.select("body").append("div").attr("id", "d3-celestial-svg").attr("style", "display: none"),
         n = d3.select("#d3-celestial-svg").append("svg"),
         r = t.metrics(),
         s = V.set(),
         o = s.datapath,
         i = J[s.projection],
         l = S(s.center),
         c = [-l[0], -l[1]],
         p = i.scale * r.width / 1024,
         d = t.projection(s.projection).rotate(l).translate([r.width / 2, r.height / 2]).scale([r.scale]),
         u = s.adaptable ? Math.sqrt(r.scale / p) : 1,
         h = "" !== s.culture && "iau" !== s.culture ? s.culture : "",
         y, g;
      n.selectAll("*").remove();
      var v = n.append("defs");
      i.clip && d.clipAngle(90), y = d3.geo.circle().angle([179.95]).origin(c), n.attr("width", r.width).attr("height", r.height);
      var M = ["background", "milkyWay", "milkyWayBg", "gridLines", "constBoundaries", "planesequatorial", "planesecliptic", "planesgalactic", "planessupergalactic", "constLines", "mapBorder", "stars", "dsos", "planets", "gridvaluesLon", "gridvaluesLat", "constNames", "starDesignations", "starNames", "dsoNames", "planetNames", "horizon", "daylight"],
         w = {},
         x = {};
      for (var T = 0; T < M.length; T++) w[M[T]] = n.append("g").attr({
         id: M[T],
         ":inkscape:groupmode": "layer",
         ":inkscape:label": M[T]
      }), x[M[T]] = {};
      var P = d3.geo.graticule().minorStep([15, 10]);
      var I = d3.geo.path().projection(d);
      var A = d3.queue(2);
      if (w.background.append("path").datum(y).attr("class", "background").attr("d", I), x.background.fill = s.background.fill, s.lines.graticule.show) {
         if ("equatorial" === s.transform ? (w.gridLines.append("path").datum(P).attr("class", "gridLines").attr("d", I), x.gridLines = B(s.lines.graticule)) : (t.graticule(w.gridLines, I, s.transform), x.gridLines = B(s.lines.graticule)), nt(s.lines.graticule, "lon") && s.lines.graticule.lon.pos.length > 0) {
            var q = {
               type: "FeatureCollection",
               features: N("lon", s.lines.graticule.lon.pos)
            };
            w.gridvaluesLon.selectAll(".gridvalues_lon").data(q.features).enter().append("text").attr("transform", (function(t, e) {
               return C(t.geometry.coordinates)
            })).text((function(t) {
               return t.properties.value
            })).attr({
               dy: ".5em",
               dx: "-.75em",
               class: "gridvaluesLon"
            }), x.gridvaluesLon = G(s.lines.graticule.lon)
         }
         if (nt(s.lines.graticule, "lat") && s.lines.graticule.lat.pos.length > 0) {
            var D = {
               type: "FeatureCollection",
               features: N("lat", s.lines.graticule.lat.pos)
            };
            w.gridvaluesLat.selectAll(".gridvalues_lat").data(D.features).enter().append("text").attr("transform", (function(t, e) {
               return C(t.geometry.coordinates)
            })).text((function(t) {
               return t.properties.value
            })).attr({
               dy: "-.5em",
               dx: "-.75em",
               class: "gridvaluesLat"
            }), x.gridvaluesLat = G(s.lines.graticule.lat)
         }
      }
      for (var F in s.lines) nt(s.lines, F) && "graticule" != F && !1 !== s.lines[F].show && (w[g = "planes" + F].append("path").datum(d3.geo.circle().angle([90]).origin(b[F])).attr("class", g).attr("d", I), x[g] = B(s.lines[F]));

      function E(t) {
         return i.clip && d3.geo.distance(c, t) > k ? 0 : 1
      }

      function C(t) {
         return "translate(" + d(t) + ")"
      }

      function H(t, e, a) {
         var n;
         return t + (e = e ? "." + e : "") + (nt($[t], h) ? "." + h : "") + (a = a ? "." + a : ".json")
      }

      function B(t) {
         var e = {};
         return e.fill = t.fill || "none", e["fill-opacity"] = null !== t.opacity ? t.opacity : 1, e.stroke = t.stroke || "none", e["stroke-width"] = null !== t.width ? t.width : 0, e["stroke-opacity"] = null !== t.opacity ? t.opacity : 1, nt(t, "dash") ? e["stroke-dasharray"] = t.dash.join(" ") : e["stroke-dasharray"] = "none", e.font = t.font || null, e
      }

      function G(t) {
         var e = {};
         return e.stroke = "none", e.fill = t.fill || "none", e["fill-opacity"] = null !== t.opacity ? t.opacity : 1, e["text-anchor"] = K(t.align), e.font = t.font || null, e
      }

      function U(t, e) {
         var a = {};
         return t = t || 1, a.fill = ot(e.fill) ? e.fill[t - 1] : null, a["fill-opacity"] = ot(e.opacity) ? e.opacity[t - 1] : 1, a.stroke = ot(e.stroke) ? e.stroke[t - 1] : null, a["stroke-width"] = ot(e.width) ? e.width[t - 1] : null, a["stroke-opacity"] = ot(e.opacity) ? e.opacity[t - 1] : 1, a["text-anchor"] = K(e.align), a.font = ot(e.font) ? e.font[t - 1] : null, a
      }

      function W(t, e) {
         var a, n, r, s, o = 1.36,
            i = 1.885;
         if (t > i) return {
            fill: "transparent"
         };
         t <= o ? (n = "#daf1fa", r = "#93d7f0", s = "#57c0e8", a = -(o - t) / 10) : (a = (t - o) / (i - o), n = d3.interpolateLab("#daf1fa", "#e8c866")(a), r = d3.interpolateLab("#93c7d0", "#ff854a")(a), s = d3.interpolateLab("#57b0c8", "#6caae2")(a));
         var l = w.daylight.append("radialGradient").attr("cx", e[0]).attr("cy", e[1]).attr("fr", "0").attr("r", "300").attr("id", "skygradient").attr("gradientUnits", "userSpaceOnUse");
         return l.append("stop").attr("offset", "0").attr("stop-color", n), l.append("stop").attr("offset", .2 + .4 * a).attr("stop-color", r), l.append("stop").attr("offset", "1").attr("stop-color", s), {
            fill: "url(#skygradient)",
            "fill-opacity": R(a, 1.4)
         }
      }

      function R(t, e) {
         return .9 * (1 - (Math.pow(Math.E, t * e) - 1) / (Math.pow(Math.E, e) - 1))
      }

      function K(t) {
         return t ? "center" === t ? "middle" : "right" === t ? "end" : "start" : "start"
      }

      function Z(t) {
         var e = X(t.mag, t.dim) || 9,
            a = Q(t.type);
         return -1 !== d3.svg.symbolTypes.indexOf(a) ? d3.svg.symbol().type(a).size(e)() : d3.svg.customSymbol().type(a).size(e)()
      }

      function Q(t) {
         return t && nt(s.dsos.symbols, t) ? s.dsos.symbols[t].shape : "circle"
      }

      function X(t, e) {
         return t && 999 !== t ? Math.pow(2 * s.dsos.size * u - t, s.dsos.exponent) : Math.pow(parseInt(e) * s.dsos.size * u / 7, .5)
      }

      function et(t) {
         var e = s.dsos.namesType,
            a = t.id;
         return "desig" !== e && nt(m, a) && nt(m[a], e) ? m[a][e] : t.properties.desig
      }

      function at(t) {
         return !0 === s.dsos.colors ? B(s.dsos.symbols[t.type]) : B(s.dsos.style)
      }

      function rt(t) {
         return nt(f, t) ? f[t][s.stars.designationType] : ""
      }

      function st(t) {
         var e = s.stars.propernameType;
         return nt(f, t) ? nt(f[t], e) ? f[t][e] : f[t].name : ""
      }

      function it(t) {
         if (null === t) return .1;
         var e = s.stars.size * u * Math.exp(s.stars.exponent * (t + 2));
         return Math.max(e, .1)
      }

      function lt(t) {
         return !s.stars.colors || isNaN(t) ? "" : Math.round(10 * t).toString()
      }

      function ct(t) {
         return t.properties[s.constellations.namesType]
      }

      function pt(t, e) {
         var a = e ? e * e : 121;
         return d3.svg.customSymbol().type("crescent").size(a).ratio(t.age)()
      }

      function dt(t, e) {
         var a = e ? e * e : ut(t.mag);
         return d3.svg.symbol().type("circle").size(a)()
      }

      function ut(t) {
         var e = t || 2;
         var a = 4 * u * Math.exp(-.05 * (e + 2));
         return Math.max(a, 2)
      }

      function ht(t) {
         var e = {
            type: "Feature",
            id: t.id,
            properties: {},
            geometry: {}
         };
         return e.properties.name = t[s.planets.namesType], "symbol" !== s.planets.symbolType && "letter" !== s.planets.symbolType || (e.properties.symbol = s.planets.symbols[e.id][s.planets.symbolType]), e.properties.mag = t.ephemeris.mag || 10, "lun" === e.id && (e.properties.age = t.ephemeris.age, e.properties.phase = t.ephemeris.phase), e.geometry.type = "Point", e.geometry.coordinates = t.ephemeris.pos, e
      }

      function ft() {
         var t = "";
         for (var e in x) nt(x, e) && (t += " ." + e + mt(x[e]));
         return "/*<![CDATA[*/\n" + t + "\n/*]]>*/"
      }

      function mt(t) {
         var e = " {";
         for (var a in t) nt(t, a) && (e += a + ":" + t[a] + "; ");
         return e + "} "
      }
      s.mw.show && A.defer((function(t) {
         d3.json(o + "mw.json", (function(e, a) {
            e && t(e);
            var n = L(a, s.transform);
            var r = _(n);
            w.milkyWay.selectAll(".mway").data(n.features).enter().append("path").attr("class", "milkyWay").attr("d", I), x.milkyWay = B(s.mw.style), (!nt(s.background, "opacity") || s.background.opacity > .95) && (w.milkyWayBg.selectAll(".mwaybg").data(r.features).enter().append("path").attr("class", "milkyWayBg").attr("d", I), x.milkyWayBg = {
               fill: s.background.fill,
               "fill-opacity": s.background.opacity
            }), t(null)
         }))
      })), s.constellations.bounds && A.defer((function(e) {
         d3.json(o + H("constellations", "borders"), (function(a, n) {
            a && e(a);
            var r = L(n, s.transform);
            if (t.constellation) var o = new RegExp("\\b" + t.constellation + "\\b");
            w.constBoundaries.selectAll(".bounds").data(r.features).enter().append("path").attr("class", (function(e) {
               return t.constellation && -1 !== e.ids.search(o) ? "constBoundariesSel" : "constBoundaries"
            })).attr("d", I), x.constBoundaries = B(s.constellations.boundStyle), x.constBoundariesSel = {
               fill: "none",
               stroke: s.constellations.boundStyle.stroke,
               "stroke-width": 1.5 * s.constellations.boundStyle.width,
               "stroke-opacity": 1,
               "stroke-dasharray": "none"
            }, e(null)
         }))
      })), s.constellations.lines && A.defer((function(t) {
         d3.json(o + H("constellations", "lines"), (function(e, a) {
            e && t(e);
            var n = L(a, s.transform);
            w.constLines.selectAll(".lines").data(n.features).enter().append("path").attr("class", (function(t) {
               return "constLines" + t.properties.rank
            })).attr("d", I), x.constLines1 = {
               fill: "none",
               stroke: s.constellations.lineStyle.stroke[0],
               "stroke-width": s.constellations.lineStyle.width[0],
               "stroke-opacity": s.constellations.lineStyle.opacity[0]
            }, x.constLines2 = {
               fill: "none",
               stroke: s.constellations.lineStyle.stroke[1],
               "stroke-width": s.constellations.lineStyle.width[1],
               "stroke-opacity": s.constellations.lineStyle.opacity[1]
            }, x.constLines3 = {
               fill: "none",
               stroke: s.constellations.lineStyle.stroke[2],
               "stroke-width": s.constellations.lineStyle.width[2],
               "stroke-opacity": s.constellations.lineStyle.opacity[2]
            }, t(null)
         }))
      })), A.defer((function(t) {
         var e = d.rotate();
         d.rotate([0, 0, 0]), w.mapBorder.append("path").datum(P.outline).attr("class", "mapBorder").attr("d", I), x.mapBorder = {
            fill: "none",
            stroke: s.background.stroke,
            "stroke-width": s.background.width,
            "stroke-opacity": 1,
            "stroke-dasharray": "none"
         }, d.rotate(e), t(null)
      })), s.constellations.names && A.defer((function(t) {
         d3.json(o + H("constellations"), (function(e, a) {
            e && t(e);
            var n = L(a, s.transform);
            w.constNames.selectAll(".constnames").data(n.features.filter((function(t) {
               return 1 === E(t.geometry.coordinates)
            }))).enter().append("text").attr("class", (function(t) {
               return "constNames" + t.properties.rank
            })).attr("transform", (function(t, e) {
               return C(t.geometry.coordinates)
            })).text((function(t) {
               return ct(t)
            })), x.constNames1 = {
               fill: s.constellations.nameStyle.fill[0],
               "fill-opacity": s.constellations.nameStyle.opacity[0],
               font: s.constellations.nameStyle.font[0],
               "text-anchor": K(s.constellations.nameStyle.align)
            }, x.constNames2 = {
               fill: s.constellations.nameStyle.fill[1],
               "fill-opacity": s.constellations.nameStyle.opacity[1],
               font: s.constellations.nameStyle.font[1],
               "text-anchor": K(s.constellations.nameStyle.align)
            }, x.constNames3 = {
               fill: s.constellations.nameStyle.fill[2],
               "fill-opacity": s.constellations.nameStyle.opacity[2],
               font: s.constellations.nameStyle.font[2],
               "text-anchor": K(s.constellations.nameStyle.align)
            }, t(null)
         }))
      })), s.stars.show && A.defer((function(t) {
         d3.json(o + s.stars.data, (function(e, a) {
            e && t(e);
            var n = L(a, s.transform);
            w.stars.selectAll(".stars").data(n.features.filter((function(t) {
               return t.properties.mag <= s.stars.limit
            }))).enter().append("path").attr("class", (function(t) {
               return "stars" + lt(t.properties.bv)
            })).attr("d", I.pointRadius((function(t) {
               return t.properties ? it(t.properties.mag) : 1
            }))), x.stars = B(s.stars.style);
            var r = Y.domain();
            for (T = tt(r[1], 1); T <= tt(r[0], 1); T += .1) x["stars" + Math.round(10 * T).toString()] = {
               fill: Y(T)
            };
            s.stars.designation && (w.starDesignations.selectAll(".stardesigs").data(n.features.filter((function(t) {
               return t.properties.mag <= s.stars.designationLimit * u && 1 === E(t.geometry.coordinates)
            }))).enter().append("text").attr("transform", (function(t) {
               return C(t.geometry.coordinates)
            })).text((function(t) {
               return rt(t.id)
            })).attr({
               dy: ".85em",
               dx: ".35em",
               class: "starDesignations"
            }), x.starDesignations = G(s.stars.designationStyle)), s.stars.propername && (w.starNames.selectAll(".starnames").data(n.features.filter((function(t) {
               return t.properties.mag <= s.stars.propernameLimit * u && 1 === E(t.geometry.coordinates)
            }))).enter().append("text").attr("transform", (function(t) {
               return C(t.geometry.coordinates)
            })).text((function(t) {
               return st(t.id)
            })).attr({
               dy: "-.5em",
               dx: "-.35em",
               class: "starNames"
            }), x.starNames = G(s.stars.propernameStyle)), t(null)
         }))
      })), s.dsos.show && A.defer((function(t) {
         d3.json(o + s.dsos.data, (function(e, a) {
            e && t(e);
            var n = L(a, s.transform);
            for (F in w.dsos.selectAll(".dsos").data(n.features.filter((function(t) {
                  return 1 === E(t.geometry.coordinates) && (999 === t.properties.mag && Math.sqrt(parseInt(t.properties.dim)) > s.dsos.limit * u || 999 !== t.properties.mag && t.properties.mag <= s.dsos.limit)
               }))).enter().append("path").attr("class", (function(t) {
                  return "dsos" + t.properties.type
               })).attr("transform", (function(t) {
                  return C(t.geometry.coordinates)
               })).attr("d", (function(t) {
                  return Z(t.properties)
               })), x.dsos = B(s.dsos.style), s.dsos.symbols) nt(s.dsos.symbols, F) && (x[g = "dsos" + F] = {
               "fill-opacity": s.dsos.style.opacity,
               "stroke-opacity": s.dsos.style.opacity
            }, nt(s.dsos.symbols[F], "stroke") ? (x[g].fill = "none", x[g].stroke = s.dsos.colors ? s.dsos.symbols[F].stroke : s.dsos.style.stroke, x[g]["stroke-width"] = s.dsos.colors ? s.dsos.symbols[F].width : s.dsos.style.width) : (x[g].stroke = "none", x[g].fill = s.dsos.colors ? s.dsos.symbols[F].fill : s.dsos.style.fill));
            if (s.dsos.names)
               for (F in w.dsoNames.selectAll(".dsonames").data(n.features.filter((function(t) {
                     return 1 === E(t.geometry.coordinates) && (999 == t.properties.mag && Math.sqrt(parseInt(t.properties.dim)) > s.dsos.nameLimit || 999 != t.properties.mag && t.properties.mag <= s.dsos.nameLimit)
                  }))).enter().append("text").attr("class", (function(t) {
                     return "dsoNames " + t.properties.type
                  })).attr("transform", (function(t) {
                     return C(t.geometry.coordinates)
                  })).text((function(t) {
                     return et(t)
                  })).attr({
                     dy: "-.5em",
                     dx: ".35em"
                  }), x.dsoNames = {
                     "fill-opacity": s.dsos.style.opacity,
                     font: s.dsos.nameStyle.font,
                     "text-anchor": K(s.dsos.nameStyle.align)
                  }, s.dsos.symbols) nt(s.dsos.symbols, F) && (x[F] = {
                  fill: s.dsos.colors ? s.dsos.symbols[F].fill : s.dsos.style.fill
               });
            t(null)
         }))
      })), (s.location || s.formFields.location) && s.planets.show && t.origin && A.defer((function(e) {
         var a = t.date(),
            n = t.origin(a).spherical(),
            r = {
               type: "FeatureCollection",
               features: []
            },
            o = {
               type: "FeatureCollection",
               features: []
            };
         if (t.container.selectAll(".planet").each((function(t) {
               var e = t.id(),
                  i = 12,
                  l = t(a).equatorial(n);
               l.ephemeris.pos = z(l.ephemeris.pos, j[s.transform]), 1 === E(l.ephemeris.pos) && ("lun" === e ? o.features.push(ht(l)) : r.features.push(ht(l)))
            })), "disk" === s.planets.symbolType ? w.planets.selectAll(".planets").data(r.features).enter().append("path").attr("transform", (function(t) {
               return C(t.geometry.coordinates)
            })).attr("d", (function(t) {
               var e = nt(s.planets.symbols[t.id], "size") ? (s.planets.symbols[t.id].size - 1) * u : null;
               return dt(t.properties, e)
            })).attr("class", (function(t) {
               return "planets " + t.id
            })) : w.planets.selectAll(".planets").data(r.features).enter().append("text").attr("transform", (function(t) {
               return C(t.geometry.coordinates)
            })).text((function(t) {
               return t.properties.symbol
            })).attr("class", (function(t) {
               return "planets " + t.id
            })).attr({
               dy: ".35em"
            }), o.features.length > 0)
            if ("letter" === s.planets.symbolType) w.planets.selectAll(".moon").data(o.features).enter().append("text").attr("transform", (function(t) {
               return C(t.geometry.coordinates)
            })).text((function(t) {
               return t.properties.symbol
            })).attr("class", (function(t) {
               return "planets " + t.id
            })).attr({
               dy: ".35em"
            });
            else {
               var i = nt(s.planets.symbols.lun, "size") ? (s.planets.symbols.lun.size - 1) * u : 11 * u;
               w.planets.selectAll(".dmoon").data(o.features).enter().append("path").attr("class", "darkluna").attr("transform", (function(t) {
                  return C(t.geometry.coordinates)
               })).attr("d", (function(t) {
                  return d3.svg.symbol().type("circle").size(i * i)()
               })), w.planets.selectAll(".moon").data(o.features).enter().append("path").attr("class", (function(t) {
                  return "planets " + t.id
               })).attr("transform", (function(t) {
                  return C(t.geometry.coordinates)
               })).attr("d", (function(t) {
                  return pt(t.properties, i)
               }))
            } for (F in x.planets = G(s.planets.symbolStyle), x.darkluna = {
               fill: "#666666"
            }, s.planets.symbols) nt(s.planets.symbols, F) && (x[F] = {
            fill: s.planets.symbols[F].fill
         });
         s.planets.names && (w.planetNames.selectAll(".planetnames").data(r.features).enter().append("text").attr("transform", (function(t) {
            return C(t.geometry.coordinates)
         })).text((function(t) {
            return t.properties.name
         })).attr({
            dy: ".85em",
            dx: "-.35em"
         }).attr("class", (function(t) {
            return "planetNames " + t.id
         })), o.features.length > 0 && w.planetNames.selectAll(".moonname").data(o.features).enter().append("text").attr("transform", (function(t) {
            return C(t.geometry.coordinates)
         })).text((function(t) {
            return t.properties.name
         })).attr({
            dy: ".85em",
            dx: "-.35em"
         }).attr("class", (function(t) {
            return "planetNames " + t.id
         }))), x.planetNames = G(s.planets.nameStyle), e(null)
      })), (s.location || s.formFields.location) && s.daylight.show && i.clip && A.defer((function(e) {
         var a = O("sol");
         if (a) {
            var n = t.zenith(),
               r = a.ephemeris.pos,
               s = d3.geo.distance(n, r),
               o = d(r),
               i = d3.geo.circle().angle([179.95]).origin(r);
            w.daylight.append("path").datum(i).attr("class", "daylight").attr("d", I), x.daylight = W(s, o), 1 === E(r) && s < k && w.daylight.append("circle").attr("cx", o[0]).attr("cy", o[1]).attr("r", 5).style("fill", "#fff")
         }
         e(null)
      })), (s.location || s.formFields.location) && s.horizon.show && !i.clip && A.defer((function(e) {
         var a = d3.geo.circle().angle([90]).origin(t.nadir());
         w.horizon.append("path").datum(a).attr("class", "horizon").attr("d", I), x.horizon = B(s.horizon), e(null)
      })), t.data.length > 0 && t.data.forEach((function(t) {
         nt(t, "save") && A.defer((function(e) {
            t.save(), e(null)
         }))
      })), A.await((function(t) {
         if (t) throw t;
         var e = d3.select("#d3-celestial-svg svg").attr("title", "D3-Celestial").attr("version", 1.1).attr("encoding", "UTF-8").attr("xmlns", "http://www.w3.org/2000/svg").attr("xmlns:xlink", "http://www.w3.org/1999/xlink").attr("xmlns:sodipodi", "http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd").attr("xmlns:inkscape", "http://www.inkscape.org/namespaces/inkscape").attr("viewBox", " 0 0 " + r.width + " " + r.height);
         v.append("style").attr("type", "text/css").text(ft());
         var a = document.createElement("div");
         a.id = "newDiv", a.innerHTML = '<textarea id="svg_element" class="d-none">' + e.node().outerHTML + "</textarea>", document.body.appendChild(a)
      }))
   }
   var Qt = d3.map({
      ellipse: function(t, e) {
         var a = Math.sqrt(t),
            n = .666 * a,
            r = a / 3;
         return "M" + -n + "," + -r + " m" + -n + ",0" + " a" + n + "," + r + " 0 1,0" + 2 * n + ",0" + " a" + n + "," + r + " 0 1,0" + -2 * n + ",0"
      },
      marker: function(t, e) {
         var a, n = (t > 48 ? t / 4 : 12) / 2,
            r = n - 3;
         return "M " + -n + " 0 h " + r + " M 0 " + -n + " v " + r + " M " + n + " 0 h " + -r + " M 0 " + n + " v " + -r
      },
      "cross-circle": function(t, e) {
         var a = Math.sqrt(t),
            n = a / 2;
         return "M" + -n + "," + -n + " m" + -n + ",0" + " a" + n + "," + n + " 0 1,0" + 2 * n + ",0" + " a" + n + "," + n + " 0 1,0" + -2 * n + ",0" + " M" + -n + " 0 h " + a + " M 0 " + -n + " v " + a
      },
      "stroke-circle": function(t, e) {
         var a = Math.sqrt(t),
            n = a / 2;
         return "M" + -n + "," + -n + " m" + -n + ",0" + " a" + n + "," + n + " 0 1,0" + 2 * n + ",0" + " a" + n + "," + n + " 0 1,0" + -2 * n + ",0" + " M" + (-a - 2) + "," + (-a - 2) + " l" + (a + 4) + "," + (a + 4)
      },
      crescent: function(t, e) {
         var a, n = Math.sqrt(t) / 2,
            r = .5 * (1 - Math.cos(e)),
            s = 1.6 * Math.abs(r - .5) + .01,
            o = e > Math.PI ? 0 : 1,
            i;
         return "M " + -1 + "," + -1 + " m 1," + (-n + 1) + " a" + n + "," + n + " 0 1 " + o + " 0," + 2 * n + " a" + n * s + "," + n + " 0 1 " + (Math.abs(r) > .5 ? o : Math.abs(o - 1)) + " 0," + -2 * n + "z"
      }
   });
   d3.svg.customSymbol = function() {
      var t, e = 64,
         a = d3.functor(1);

      function n(n, r) {
         return Qt.get(t.call(this, n, r))(e.call(this, n, r), a.call(this, n, r))
      }
      return n.type = function(e) {
         return arguments.length ? (t = d3.functor(e), n) : t
      }, n.size = function(t) {
         return arguments.length ? (e = d3.functor(t), n) : e
      }, n.ratio = function(t) {
         return arguments.length ? (a = d3.functor(t), n) : a
      }, n
   };
   var Xt = function(t, e) {
      var a = new Date,
         n = d3.time.format("%Z"),
         r = [{
            "−12:00": -720
         }, {
            "−11:00": -660
         }, {
            "−10:00": -600
         }, {
            "−09:30": -570
         }, {
            "−09:00": -540
         }, {
            "−08:00": -480
         }, {
            "−07:00": -420
         }, {
            "−06:00": -360
         }, {
            "−05:00": -300
         }, {
            "−04:30": -270
         }, {
            "−04:00": -240
         }, {
            "−03:30": -210
         }, {
            "−03:00": -180
         }, {
            "−02:30": -150
         }, {
            "−02:00": -120
         }, {
            "−01:00": -60
         }, {
            "±00:00": 0
         }, {
            "+01:00": 60
         }, {
            "+02:00": 120
         }, {
            "+03:00": 180
         }, {
            "+03:30": 210
         }, {
            "+04:00": 240
         }, {
            "+04:30": 270
         }, {
            "+05:00": 300
         }, {
            "+05:30": 330
         }, {
            "+05:45": 345
         }, {
            "+06:00": 360
         }, {
            "+06:30": 390
         }, {
            "+07:00": 420
         }, {
            "+08:00": 480
         }, {
            "+08:30": 510
         }, {
            "+08:45": 525
         }, {
            "+09:00": 540
         }, {
            "+09:30": 570
         }, {
            "+10:00": 600
         }, {
            "+10:30": 630
         }, {
            "+11:00": 660
         }, {
            "+12:00": 720
         }, {
            "+12:45": 765
         }, {
            "+13:00": 780
         }, {
            "+14:00": 840
         }],
         s = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
         o = ["Su", "M", "Tu", "W", "Th", "F", "Sa"],
         i = M(a),
         l = d3.time.format("%Y-%m-%d"),
         c = t.daterange || [];
      var p = d3.select("#celestial-form").append("div").attr("id", "celestial-date");
      y("left"), m(), h(), y("right");
      var d = p.append("div").attr("id", "cal");

      function u() {
         var t = Q("mon").value,
            e = Q("yr").value,
            n = new Date(e, t, 1),
            r = d3.select("#cal"),
            s = new Date;
         e = parseInt(e), t = parseInt(t), n.setDate(n.getDate() - n.getDay());
         var i = r.node();
         while (i.firstChild) i.removeChild(i.firstChild);
         for (var c = 0; c < 7; c++) r.append("div").classed({
            date: !0,
            weekday: !0
         }).html(o[c]);
         for (c = 0; c < 42; c++) {
            var p = n.getMonth(),
               d = n.getDay(),
               u = l(n);
            r.append("div").classed({
               date: !0,
               grey: p !== t,
               weekend: p === t && (0 === d || 6 === d),
               today: 0 === mt(n, s),
               selected: 0 === mt(n, a)
            }).attr("id", u).on("click", z).html(n.getDate().toString()), n.setDate(n.getDate() + 1)
         }
      }

      function h() {
         p.append("select").attr("title", "Year").attr("id", "yr").on("change", u), f()
      }

      function f() {
         var t = d3.select("select#yr"),
            e = a.getFullYear(),
            n = 0,
            r = M(a);
         t.selectAll("*").remove(), t.selectAll("option").data(r).enter().append("option").text((function(t, a) {
            return t === e && (n = a), t.toString()
         })), t.property("selectedIndex", n)
      }

      function m() {
         var t = p.append("select").attr("title", "Month").attr("id", "mon").on("change", u),
            e = 0,
            n = a.getMonth();
         t.selectAll("option").data(s).enter().append("option").attr("value", (function(t, a) {
            return a === n && (e = a), a
         })).text((function(t) {
            return t
         })), t.property("selectedIndex", e)
      }

      function y(t) {
         var e = p.append("div").attr("id", t).on("click", (function() {
            var e = Q("mon"),
               a = Q("yr");
            "left" === t ? 0 === e.selectedIndex ? (e.selectedIndex = 11, a.selectedIndex--) : e.selectedIndex-- : 11 === e.selectedIndex ? (e.selectedIndex = 0, a.selectedIndex++) : e.selectedIndex++, u()
         }))
      }

      function g() {
         p.append("input").attr("type", "number").attr("id", "hr").attr("title", "Hours").attr("max", "24").attr("min", "-1").attr("step", "1").attr("value", a.getHours()).on("change", (function() {
            !0 === Dt(this) && z()
         })), p.append("input").attr("type", "number").attr("id", "min").attr("title", "Minutes").attr("max", "60").attr("min", "-1").attr("step", "1").attr("value", a.getMinutes()).on("change", (function() {
            !0 === Dt(this) && z()
         })), p.append("input").attr("type", "number").attr("id", "sec").attr("title", "Seconds").attr("max", "60").attr("min", "-1").attr("step", "1").attr("value", a.getSeconds()).on("change", (function() {
            !0 === Dt(this) && z()
         }))
      }

      function v() {
         var t = p.append("select").attr("title", "Time zone offset from UTC").attr("id", "tz").on("change", z),
            e = 15,
            n = -a.getTimezoneOffset();
         t.selectAll("option").data(r).enter().append("option").attr("value", (function(t, a) {
            var r = Object.keys(t)[0];
            return t[r] === n && (e = a), t[r]
         })).text((function(t) {
            return Object.keys(t)[0]
         })), t.property("selectedIndex", e)
      }

      function M(t) {
         var e = b(t.getFullYear()),
            a = [];
         for (var n = e[0]; n <= e[1]; n++) a.push(n);
         return a
      }

      function b(t) {
         var e;
         var a = (new Date).getFullYear();
         return !c || c.length < 1 ? [t - 70, t + 10] : 1 === c.length && st(c[0]) ? c[0] >= 100 ? [c[0] - 70, c[0] + 10] : [t - c[0], t + c[0]] : 2 === c.length && st(c[0]) && st(c[1]) ? c[1] >= 100 ? [c[0], c[1]] : [c[0] - c[1], c[0] + c[1]] : [t - 70, t + 10]
      }

      function w(t, e) {
         var a = Q(t);
         for (var n = 0; n < a.childNodes.length; n++)
            if (a.childNodes[n].value == e) {
               a.selectedIndex = n;
               break
            }
      }

      function k(t) {
         t && a.setTime(t.valueOf()), w("yr", a.getFullYear()), w("mon", a.getMonth()), u(), Q("hr").value = a.getHours(), Q("min").value = a.getMinutes(), Q("sec").value = a.getSeconds()
      }

      function x() {
         d3.select("#celestial-date").style("opacity", 0), d3.select("#error").style({
            top: "-9999px",
            left: "-9999px",
            opacity: 0
         }), d3.select("#datepick").classed("active", !1), setTimeout((function() {
            Q("celestial-date").style.top = X(-9999)
         }), 600)
      }

      function z() {
         var t = Q("hr").value,
            n = Q("min").value,
            r = Q("sec").value,
            s = Q("tz").value;
         this.id && -1 !== this.id.search(/^\d/) && (a = l.parse(this.id)), f(), a.setHours(t, n, r), k(), e(a, s)
      }
      u(), g(), v(), this.show = function(t, e) {
         var n = Q("celestial-date"),
            r = Q("datepick"),
            s = r.offsetLeft + r.offsetWidth - n.offsetWidth,
            o = r.offsetTop - n.offsetHeight - 1; - 9999 === n.offsetTop ? (a.setTime(t.valueOf()), w("tz", e), k(), d3.select("#celestial-date").style({
            top: X(o),
            left: X(s),
            opacity: 1
         }), d3.select("#datepick").classed("active", !0)) : x()
      }, this.isVisible = function() {
         return !!document.getElementById("datepick") && !0 === d3.select("#datepick").classed("active")
      }, this.hide = function() {
         x()
      }
   };
   ! function() {
      var t = Math.PI / 180,
         e = 180 / Math.PI;

      function a(t, e, a) {
         var n = t.translate(),
            r = Math.atan2(e[1] - n[1], e[0] - n[0]) - Math.atan2(a[1] - n[1], a[0] - n[0]);
         return [Math.cos(r / 2), 0, 0, Math.sin(r / 2)]
      }

      function n(t, e) {
         var a = t.invert(e);
         return a && isFinite(a[0]) && isFinite(a[1]) && c(a)
      }

      function r(e) {
         var a = .5 * e[0] * t,
            n = .5 * e[1] * t,
            r = .5 * e[2] * t,
            s = Math.sin(a),
            o = Math.cos(a),
            i = Math.sin(n),
            l = Math.cos(n),
            c = Math.sin(r),
            p = Math.cos(r);
         return [o * l * p + s * i * c, s * l * p - o * i * c, o * i * p + s * l * c, o * l * c - s * i * p]
      }

      function s(t, e) {
         var a = t[0],
            n = t[1],
            r = t[2],
            s = t[3],
            o = e[0],
            i = e[1],
            l = e[2],
            c = e[3];
         return [a * o - n * i - r * l - s * c, a * i + n * o + r * c - s * l, a * l - n * c + r * o + s * i, a * c + n * l - r * i + s * o]
      }

      function o(t, e) {
         if (t && e) {
            var a = d(t, e),
               n = Math.sqrt(p(a, a)),
               r = .5 * Math.acos(Math.max(-1, Math.min(1, p(t, e)))),
               s = Math.sin(r) / n;
            return n && [Math.cos(r), a[2] * s, -a[1] * s, a[0] * s]
         }
      }

      function i(t, e) {
         var a = Math.max(-1, Math.min(1, p(t, e))),
            n = a < 0 ? -1 : 1,
            r = Math.acos(n * a),
            s = Math.sin(r);
         return s ? function(a) {
            var o = n * Math.sin((1 - a) * r) / s,
               i = Math.sin(a * r) / s;
            return [t[0] * o + e[0] * i, t[1] * o + e[1] * i, t[2] * o + e[2] * i, t[3] * o + e[3] * i]
         } : function() {
            return t
         }
      }

      function l(t) {
         return [Math.atan2(2 * (t[0] * t[1] + t[2] * t[3]), 1 - 2 * (t[1] * t[1] + t[2] * t[2])) * e, Math.asin(Math.max(-1, Math.min(1, 2 * (t[0] * t[2] - t[3] * t[1])))) * e, Math.atan2(2 * (t[0] * t[3] + t[1] * t[2]), 1 - 2 * (t[2] * t[2] + t[3] * t[3])) * e]
      }

      function c(e) {
         var a = e[0] * t,
            n = e[1] * t,
            r = Math.cos(n);
         return [r * Math.cos(a), r * Math.sin(a), Math.sin(n)]
      }

      function p(t, e) {
         for (var a = 0, n = t.length, r = 0; a < n; ++a) r += t[a] * e[a];
         return r
      }

      function d(t, e) {
         return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
      }

      function u(t) {
         var e = 0,
            a = arguments.length,
            n = [];
         while (++e < a) n.push(arguments[e]);
         var r = d3.dispatch.apply(null, n);
         return r.of = function(e, a) {
            return function(n) {
               try {
                  var s = n.sourceEvent = d3.event;
                  n.target = t, d3.event = n, r[n.type].apply(e, a)
               } finally {
                  d3.event = s
               }
            }
         }, r
      }
      d3.geo.zoom = function() {
         var t, e;
         var p, d = 0,
            h = u(f, "zoomstart", "zoom", "zoomend"),
            f = d3.behavior.zoom().on("zoomstart", (function() {
               var e = d3.mouse(this),
                  i = r(t.rotate()),
                  c = n(t, e);
               c && (p = c), m.call(f, "zoom", (function() {
                  t.scale(y.k = d3.event.scale);
                  var r = d3.mouse(this),
                     c = o(p, n(t, r));
                  t.rotate(y.r = l(i = c ? s(i, c) : s(a(t, e, r), i))), e = r, v(h.of(this, arguments))
               })), g(h.of(this, arguments))
            })).on("zoomend", (function() {
               m.call(f, "zoom", null), M(h.of(this, arguments))
            })),
            m = f.on,
            y = {
               r: [0, 0, 0],
               k: 1
            };

         function g(t) {
            d++ || t({
               type: "zoomstart"
            })
         }

         function v(t) {
            t({
               type: "zoom"
            })
         }

         function M(t) {
            --d || t({
               type: "zoomend"
            })
         }
         return f.rotateTo = function(t) {
            var e = o(c(t), c([-y.r[0], -y.r[1]]));
            return l(s(r(y.r), e))
         }, f.projection = function(e) {
            return arguments.length ? (y = {
               r: (t = e).rotate(),
               k: t.scale()
            }, f.scale(y.k)) : t
         }, f.duration = function(t) {
            return arguments.length ? (e = t, f) : e
         }, f.event = function(a) {
            a.each((function() {
               var a = d3.select(this),
                  n = h.of(this, arguments),
                  s = y,
                  o = d3.transition(a);
               if (o !== a) {
                  o.each("start.zoom", (function() {
                     this.__chart__ && ((y = this.__chart__).hasOwnProperty("r") || (y.r = t.rotate())), t.rotate(y.r).scale(y.k), g(n)
                  })).tween("zoom:zoom", (function() {
                     var a = f.size()[0],
                        c = i(r(y.r), r(s.r)),
                        p = d3.geo.distance(y.r, s.r),
                        d = d3.interpolateZoom([0, 0, a / y.k], [p, 0, a / s.k]);
                     return e && o.duration(e(.001 * d.duration)),
                        function(e) {
                           var r = d(e);
                           this.__chart__ = y = {
                              r: l(c(r[0] / p)),
                              k: a / r[2]
                           }, t.rotate(y.r).scale(y.k), f.scale(y.k), v(n)
                        }
                  })).each("end.zoom", (function() {
                     M(n)
                  }));
                  try {
                     o.each("interrupt.zoom", (function() {
                        M(n)
                     }))
                  } catch (t) {
                     console.log(t)
                  }
               } else this.__chart__ = y, g(n), v(n), M(n)
            }))
         }, d3.rebind(f, h, "on")
      }
   }(),
   function(t, e) {
      "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.d3 = t.d3 || {})
   }(this, (function(t) {
      "use strict";
      var e = [].slice;
      var a = {};

      function n(t) {
         this._size = t, this._call = this._error = null, this._tasks = [], this._data = [], this._waiting = this._active = this._ended = this._start = 0
      }

      function r(t) {
         if (!t._start) try {
            s(t)
         } catch (e) {
            if (t._tasks[t._ended + t._active - 1]) i(t, e);
            else if (!t._data) throw e
         }
      }

      function s(t) {
         while (t._start = t._waiting && t._active < t._size) {
            var e = t._ended + t._active,
               n = t._tasks[e],
               r = n.length - 1,
               s = n[r];
            n[r] = o(t, e), --t._waiting, ++t._active, n = s.apply(null, n), t._tasks[e] && (t._tasks[e] = n || a)
         }
      }

      function o(t, e) {
         return function(a, n) {
            t._tasks[e] && (--t._active, ++t._ended, t._tasks[e] = null, null == t._error && (null != a ? i(t, a) : (t._data[e] = n, t._waiting ? r(t) : l(t))))
         }
      }

      function i(t, e) {
         var a = t._tasks.length,
            n;
         t._error = e, t._data = void 0, t._waiting = NaN;
         while (--a >= 0)
            if ((n = t._tasks[a]) && (t._tasks[a] = null, n.abort)) try {
               n.abort()
            } catch (e) {}
         t._active = NaN, l(t)
      }

      function l(t) {
         if (!t._active && t._call) {
            var e = t._data;
            t._data = void 0, t._call(t._error, e)
         }
      }

      function c(t) {
         if (null == t) t = Infinity;
         else if (!((t = +t) >= 1)) throw new Error("invalid concurrency");
         return new n(t)
      }
      n.prototype = c.prototype = {
         constructor: n,
         defer: function(t) {
            if ("function" != typeof t) throw new Error("invalid callback");
            if (this._call) throw new Error("defer after await");
            if (null != this._error) return this;
            var a = e.call(arguments, 1);
            return a.push(t), ++this._waiting, this._tasks.push(a), r(this), this
         },
         abort: function() {
            return null == this._error && i(this, new Error("abort")), this
         },
         await: function(t) {
            if ("function" != typeof t) throw new Error("invalid callback");
            if (this._call) throw new Error("multiple await");
            return this._call = function(e, a) {
               t.apply(null, [e].concat(a))
            }, l(this), this
         },
         awaitAll: function(t) {
            if ("function" != typeof t) throw new Error("invalid callback");
            if (this._call) throw new Error("multiple await");
            return this._call = t, l(this), this
         }
      }, t.queue = c, Object.defineProperty(t, "__esModule", {
         value: !0
      })
   })), this.Celestial = t
}();
//# sourceMappingURL=/s/files/1/0511/8522/1811/files/celestial.js.map?v=1605711306
