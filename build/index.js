webpackJsonp([1], {
    16: function (e, t, n) {
        "use strict";

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function c(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var i = n(4), a = n.n(i), u = n(10), f = n.n(u), s = n(32), l = n(33), p = (n.n(l), function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            return function (t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }()), b = function (e) {
            function t() {
                return r(this, t), o(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
            }

            return c(t, i["Component"]), p(t, [{
                key: "render", value: function () {
                    return Object(s.a)(), a.a.createElement("div", {className: "box"}, this.props.text)
                }
            }]), t
        }();
        f.a.render(a.a.createElement(b, {text: "This is a text"}), document.querySelector(".container"))
    }, 32: function (e, t, n) {
        "use strict";
        t.a = function () {
            console.log("这个函数是fn2")
        }, (Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        })({a: 1}, {b: 2})
    }, 33: function (e, t) {
    }
}, [16]);