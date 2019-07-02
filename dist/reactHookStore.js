!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react")) : "function" == typeof define && define.amd ? define(["react"], t) : "object" == typeof exports ? exports.reactHookStore = t(require("react")) : e.reactHookStore = t(e.react)
}(window, function (e) {
    return function (e) {
        var t = {};

        function r(n) {
            if (t[n]) return t[n].exports;
            var u = t[n] = {i: n, l: !1, exports: {}};
            return e[n].call(u.exports, u, u.exports, r), u.l = !0, u.exports
        }

        return r.m = e, r.c = t, r.d = function (e, t, n) {
            r.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: n})
        }, r.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, r.t = function (e, t) {
            if (1 & t && (e = r(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (r.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var u in e) r.d(n, u, function (t) {
                return e[t]
            }.bind(null, u));
            return n
        }, r.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return r.d(t, "a", t), t
        }, r.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r.p = "", r(r.s = 1)
    }([function (t, r) {
        t.exports = e
    }, function (e, t, r) {
        "use strict";
        r.r(t);
        var n = r(0), u = function () {
            return function (e, t) {
                var r = this;
                this.queue = [], this.useModal = function (e) {
                    var t = Object(n.useState)(r.value)[1];
                    return Object(n.useEffect)(function () {
                        var n = r.queue.push({setState: t, deps: e});
                        return function () {
                            r.queue.splice(n - 1, 1)
                        }
                    }, []), [r.value, r.dispatch]
                }, this.onDataChange = function (e) {
                    r.queue.forEach(function (t) {
                        (!t.deps || t.deps.some(function (t) {
                            return e[t] !== r.value[t]
                        })) && t.setState(r.value)
                    })
                }, this.reducers = e, this.value = this.reducers({}, {type: "", payload: ""});
                var u = function (e) {
                    var t = r.value;
                    r.value = r.reducers(r.value, e), r.onDataChange(t)
                };
                this.dispatch = t ? t(u) : u
            }
        }();
        t.default = u
    }]).default
});
