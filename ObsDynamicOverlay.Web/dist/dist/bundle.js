!function (t) { var e = {}; function n(r) { if (e[r])
    return e[r].exports; var o = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports; } n.m = t, n.c = e, n.d = function (t, e, r) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r }); }, n.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }); }, n.t = function (t, e) { if (1 & e && (t = n(t)), 8 & e)
    return t; if (4 & e && "object" == typeof t && t && t.__esModule)
    return t; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & e && "string" != typeof t)
    for (var o in t)
        n.d(r, o, function (e) { return t[e]; }.bind(null, o)); return r; }, n.n = function (t) { var e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return n.d(e, "a", e), e; }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, n.p = "", n(n.s = 13); }([function (t, e, n) {
        "use strict";
        var r;
        n.d(e, "a", function () { return r; }), function (t) { t[t.Trace = 0] = "Trace", t[t.Debug = 1] = "Debug", t[t.Information = 2] = "Information", t[t.Warning = 3] = "Warning", t[t.Error = 4] = "Error", t[t.Critical = 5] = "Critical", t[t.None = 6] = "None"; }(r || (r = {}));
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () { return a; }), n.d(e, "e", function () { return c; }), n.d(e, "f", function () { return u; }), n.d(e, "g", function () { return l; }), n.d(e, "d", function () { return h; }), n.d(e, "c", function () { return f; }), n.d(e, "b", function () { return g; });
        var r = n(0), o = n(4), i = function (t, e, n, r) { return new (n || (n = Promise))(function (o, i) { function s(t) { try {
            c(r.next(t));
        }
        catch (t) {
            i(t);
        } } function a(t) { try {
            c(r.throw(t));
        }
        catch (t) {
            i(t);
        } } function c(t) { t.done ? o(t.value) : new n(function (e) { e(t.value); }).then(s, a); } c((r = r.apply(t, e || [])).next()); }); }, s = function (t, e) { var n, r, o, i, s = { label: 0, sent: function () { if (1 & o[0])
                throw o[1]; return o[1]; }, trys: [], ops: [] }; return i = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function a(i) { return function (a) { return function (i) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
                    return o;
                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                    case 0:
                    case 1:
                        o = i;
                        break;
                    case 4: return s.label++, { value: i[1], done: !1 };
                    case 5:
                        s.label++, r = i[1], i = [0];
                        continue;
                    case 7:
                        i = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                            s.label = i[1];
                            break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                            s.label = o[1], o = i;
                            break;
                        }
                        if (o && s.label < o[2]) {
                            s.label = o[2], s.ops.push(i);
                            break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                i = e.call(t, s);
            }
            catch (t) {
                i = [6, t], r = 0;
            }
            finally {
                n = o = 0;
            } if (5 & i[0])
            throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, a]); }; } }, a = function () { function t() { } return t.isRequired = function (t, e) { if (null == t)
            throw new Error("The '" + e + "' argument is required."); }, t.isIn = function (t, e, n) { if (!(t in e))
            throw new Error("Unknown " + n + " value: " + t + "."); }, t; }();
        function c(t, e) { var n = ""; return u(t) ? (n = "Binary data of length " + t.byteLength, e && (n += ". Content: '" + function (t) { var e = new Uint8Array(t), n = ""; return e.forEach(function (t) { n += "0x" + (t < 16 ? "0" : "") + t.toString(16) + " "; }), n.substr(0, n.length - 1); }(t) + "'")) : "string" == typeof t && (n = "String data of length " + t.length, e && (n += ". Content: '" + t + "'")), n; }
        function u(t) { return t && "undefined" != typeof ArrayBuffer && (t instanceof ArrayBuffer || t.constructor && "ArrayBuffer" === t.constructor.name); }
        function l(t, e, n, o, a, l, h) { return i(this, void 0, void 0, function () { var i, f, p, g, d; return s(this, function (s) { switch (s.label) {
            case 0: return a ? [4, a()] : [3, 2];
            case 1: (p = s.sent()) && ((i = {}).Authorization = "Bearer " + p, f = i), s.label = 2;
            case 2: return t.log(r.a.Trace, "(" + e + " transport) sending data. " + c(l, h) + "."), g = u(l) ? "arraybuffer" : "text", [4, n.post(o, { content: l, headers: f, responseType: g })];
            case 3: return d = s.sent(), t.log(r.a.Trace, "(" + e + " transport) request complete. Response status: " + d.statusCode + "."), [2];
        } }); }); }
        function h(t) { return void 0 === t ? new g(r.a.Information) : null === t ? o.a.instance : t.log ? t : new g(t); }
        var f = function () { function t() { this.observers = []; } return t.prototype.next = function (t) { for (var e = 0, n = this.observers; e < n.length; e++) {
            n[e].next(t);
        } }, t.prototype.error = function (t) { for (var e = 0, n = this.observers; e < n.length; e++) {
            var r = n[e];
            r.error && r.error(t);
        } }, t.prototype.complete = function () { for (var t = 0, e = this.observers; t < e.length; t++) {
            var n = e[t];
            n.complete && n.complete();
        } }, t.prototype.subscribe = function (t) { return this.observers.push(t), new p(this, t); }, t; }(), p = function () { function t(t, e) { this.subject = t, this.observer = e; } return t.prototype.dispose = function () { var t = this.subject.observers.indexOf(this.observer); t > -1 && this.subject.observers.splice(t, 1), 0 === this.subject.observers.length && this.subject.cancelCallback && this.subject.cancelCallback().catch(function (t) { }); }, t; }(), g = function () { function t(t) { this.minimumLogLevel = t; } return t.prototype.log = function (t, e) { if (t >= this.minimumLogLevel)
            switch (t) {
                case r.a.Critical:
                case r.a.Error:
                    console.error("[" + (new Date).toISOString() + "] " + r.a[t] + ": " + e);
                    break;
                case r.a.Warning:
                    console.warn("[" + (new Date).toISOString() + "] " + r.a[t] + ": " + e);
                    break;
                case r.a.Information:
                    console.info("[" + (new Date).toISOString() + "] " + r.a[t] + ": " + e);
                    break;
                default: console.log("[" + (new Date).toISOString() + "] " + r.a[t] + ": " + e);
            } }, t; }();
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return i; }), n.d(e, "c", function () { return s; }), n.d(e, "a", function () { return a; });
        var r, o = (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n]); }, function (t, e) { function n() { this.constructor = t; } r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }), i = function (t) { function e(e, n) { var r = this, o = this.constructor.prototype; return (r = t.call(this, e) || this).statusCode = n, r.__proto__ = o, r; } return o(e, t), e; }(Error), s = function (t) { function e(e) { void 0 === e && (e = "A timeout occurred."); var n = this, r = this.constructor.prototype; return (n = t.call(this, e) || this).__proto__ = r, n; } return o(e, t), e; }(Error), a = function (t) { function e(e) { void 0 === e && (e = "An abort occurred."); var n = this, r = this.constructor.prototype; return (n = t.call(this, e) || this).__proto__ = r, n; } return o(e, t), e; }(Error);
    }, function (t, e, n) {
        "use strict";
        n.d(e, "b", function () { return o; }), n.d(e, "a", function () { return i; });
        var r = Object.assign || function (t) { for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var o in e = arguments[n])
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t; }, o = function () { return function (t, e, n) { this.statusCode = t, this.statusText = e, this.content = n; }; }(), i = function () { function t() { } return t.prototype.get = function (t, e) { return this.send(r({}, e, { method: "GET", url: t })); }, t.prototype.post = function (t, e) { return this.send(r({}, e, { method: "POST", url: t })); }, t.prototype.delete = function (t, e) { return this.send(r({}, e, { method: "DELETE", url: t })); }, t.prototype.getCookieString = function (t) { return ""; }, t; }();
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () { return r; });
        var r = function () { function t() { } return t.prototype.log = function (t, e) { }, t.instance = new t, t; }();
    }, function (t, e, n) {
        "use strict";
        n.d(e, "a", function () { return r; });
        var r = function () { function t() { } return t.write = function (e) { return "" + e + t.RecordSeparator; }, t.parse = function (e) { if (e[e.length - 1] !== t.RecordSeparator)
            throw new Error("Message is incomplete."); var n = e.split(t.RecordSeparator); return n.pop(), n; }, t.RecordSeparatorCode = 30, t.RecordSeparator = String.fromCharCode(t.RecordSeparatorCode), t; }();
    }, function (t, e, n) {
        "use strict";
        (function (t) {
            var r = n(10), o = n(11), i = n(12);
            function s() { return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823; }
            function a(t, e) { if (s() < e)
                throw new RangeError("Invalid typed array length"); return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)), t.length = e), t; }
            function c(t, e, n) { if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c))
                return new c(t, e, n); if ("number" == typeof t) {
                if ("string" == typeof e)
                    throw new Error("If encoding is specified then the first argument must be a string");
                return h(this, t);
            } return u(this, t, e, n); }
            function u(t, e, n, r) { if ("number" == typeof e)
                throw new TypeError('"value" argument must not be a number'); return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, n, r) { if (e.byteLength, n < 0 || e.byteLength < n)
                throw new RangeError("'offset' is out of bounds"); if (e.byteLength < n + (r || 0))
                throw new RangeError("'length' is out of bounds"); e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r); c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = f(t, e); return t; }(t, e, n, r) : "string" == typeof e ? function (t, e, n) { "string" == typeof n && "" !== n || (n = "utf8"); if (!c.isEncoding(n))
                throw new TypeError('"encoding" must be a valid string encoding'); var r = 0 | g(e, n), o = (t = a(t, r)).write(e, n); o !== r && (t = t.slice(0, o)); return t; }(t, e, n) : function (t, e) { if (c.isBuffer(e)) {
                var n = 0 | p(e.length);
                return 0 === (t = a(t, n)).length ? t : (e.copy(t, 0, 0, n), t);
            } if (e) {
                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e)
                    return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : f(t, e);
                if ("Buffer" === e.type && i(e.data))
                    return f(t, e.data);
            } var r; throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."); }(t, e); }
            function l(t) { if ("number" != typeof t)
                throw new TypeError('"size" argument must be a number'); if (t < 0)
                throw new RangeError('"size" argument must not be negative'); }
            function h(t, e) { if (l(e), t = a(t, e < 0 ? 0 : 0 | p(e)), !c.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < e; ++n)
                    t[n] = 0; return t; }
            function f(t, e) { var n = e.length < 0 ? 0 : 0 | p(e.length); t = a(t, n); for (var r = 0; r < n; r += 1)
                t[r] = 255 & e[r]; return t; }
            function p(t) { if (t >= s())
                throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes"); return 0 | t; }
            function g(t, e) { if (c.isBuffer(t))
                return t.length; if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer))
                return t.byteLength; "string" != typeof t && (t = "" + t); var n = t.length; if (0 === n)
                return 0; for (var r = !1;;)
                switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary": return n;
                    case "utf8":
                    case "utf-8":
                    case void 0: return q(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le": return 2 * n;
                    case "hex": return n >>> 1;
                    case "base64": return Y(t).length;
                    default:
                        if (r)
                            return q(t).length;
                        e = ("" + e).toLowerCase(), r = !0;
                } }
            function d(t, e, n) { var r = t[e]; t[e] = t[n], t[n] = r; }
            function y(t, e, n, r, o) { if (0 === t.length)
                return -1; if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                if (o)
                    return -1;
                n = t.length - 1;
            }
            else if (n < 0) {
                if (!o)
                    return -1;
                n = 0;
            } if ("string" == typeof e && (e = c.from(e, r)), c.isBuffer(e))
                return 0 === e.length ? -1 : v(t, e, n, r, o); if ("number" == typeof e)
                return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : v(t, [e], n, r, o); throw new TypeError("val must be string, number or Buffer"); }
            function v(t, e, n, r, o) { var i, s = 1, a = t.length, c = e.length; if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (t.length < 2 || e.length < 2)
                    return -1;
                s = 2, a /= 2, c /= 2, n /= 2;
            } function u(t, e) { return 1 === s ? t[e] : t.readUInt16BE(e * s); } if (o) {
                var l = -1;
                for (i = n; i < a; i++)
                    if (u(t, i) === u(e, -1 === l ? 0 : i - l)) {
                        if (-1 === l && (l = i), i - l + 1 === c)
                            return l * s;
                    }
                    else
                        -1 !== l && (i -= i - l), l = -1;
            }
            else
                for (n + c > a && (n = a - c), i = n; i >= 0; i--) {
                    for (var h = !0, f = 0; f < c; f++)
                        if (u(t, i + f) !== u(e, f)) {
                            h = !1;
                            break;
                        }
                    if (h)
                        return i;
                } return -1; }
            function b(t, e, n, r) { n = Number(n) || 0; var o = t.length - n; r ? (r = Number(r)) > o && (r = o) : r = o; var i = e.length; if (i % 2 != 0)
                throw new TypeError("Invalid hex string"); r > i / 2 && (r = i / 2); for (var s = 0; s < r; ++s) {
                var a = parseInt(e.substr(2 * s, 2), 16);
                if (isNaN(a))
                    return s;
                t[n + s] = a;
            } return s; }
            function w(t, e, n, r) { return F(q(e, t.length - n), t, n, r); }
            function m(t, e, n, r) { return F(function (t) { for (var e = [], n = 0; n < t.length; ++n)
                e.push(255 & t.charCodeAt(n)); return e; }(e), t, n, r); }
            function S(t, e, n, r) { return m(t, e, n, r); }
            function E(t, e, n, r) { return F(Y(e), t, n, r); }
            function T(t, e, n, r) { return F(function (t, e) { for (var n, r, o, i = [], s = 0; s < t.length && !((e -= 2) < 0); ++s)
                n = t.charCodeAt(s), r = n >> 8, o = n % 256, i.push(o), i.push(r); return i; }(e, t.length - n), t, n, r); }
            function k(t, e, n) { return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n)); }
            function C(t, e, n) { n = Math.min(t.length, n); for (var r = [], o = e; o < n;) {
                var i, s, a, c, u = t[o], l = null, h = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                if (o + h <= n)
                    switch (h) {
                        case 1:
                            u < 128 && (l = u);
                            break;
                        case 2:
                            128 == (192 & (i = t[o + 1])) && (c = (31 & u) << 6 | 63 & i) > 127 && (l = c);
                            break;
                        case 3:
                            i = t[o + 1], s = t[o + 2], 128 == (192 & i) && 128 == (192 & s) && (c = (15 & u) << 12 | (63 & i) << 6 | 63 & s) > 2047 && (c < 55296 || c > 57343) && (l = c);
                            break;
                        case 4: i = t[o + 1], s = t[o + 2], a = t[o + 3], 128 == (192 & i) && 128 == (192 & s) && 128 == (192 & a) && (c = (15 & u) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & a) > 65535 && c < 1114112 && (l = c);
                    }
                null === l ? (l = 65533, h = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), o += h;
            } return function (t) { var e = t.length; if (e <= P)
                return String.fromCharCode.apply(String, t); var n = "", r = 0; for (; r < e;)
                n += String.fromCharCode.apply(String, t.slice(r, r += P)); return n; }(r); }
            e.Buffer = c, e.SlowBuffer = function (t) { +t != t && (t = 0); return c.alloc(+t); }, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () { try {
                var t = new Uint8Array(1);
                return t.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42; } }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
            }
            catch (t) {
                return !1;
            } }(), e.kMaxLength = s(), c.poolSize = 8192, c._augment = function (t) { return t.__proto__ = c.prototype, t; }, c.from = function (t, e, n) { return u(null, t, e, n); }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, { value: null, configurable: !0 })), c.alloc = function (t, e, n) { return function (t, e, n, r) { return l(e), e <= 0 ? a(t, e) : void 0 !== n ? "string" == typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n) : a(t, e); }(null, t, e, n); }, c.allocUnsafe = function (t) { return h(null, t); }, c.allocUnsafeSlow = function (t) { return h(null, t); }, c.isBuffer = function (t) { return !(null == t || !t._isBuffer); }, c.compare = function (t, e) { if (!c.isBuffer(t) || !c.isBuffer(e))
                throw new TypeError("Arguments must be Buffers"); if (t === e)
                return 0; for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o)
                if (t[o] !== e[o]) {
                    n = t[o], r = e[o];
                    break;
                } return n < r ? -1 : r < n ? 1 : 0; }, c.isEncoding = function (t) { switch (String(t).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le": return !0;
                default: return !1;
            } }, c.concat = function (t, e) { if (!i(t))
                throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === t.length)
                return c.alloc(0); var n; if (void 0 === e)
                for (e = 0, n = 0; n < t.length; ++n)
                    e += t[n].length; var r = c.allocUnsafe(e), o = 0; for (n = 0; n < t.length; ++n) {
                var s = t[n];
                if (!c.isBuffer(s))
                    throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(r, o), o += s.length;
            } return r; }, c.byteLength = g, c.prototype._isBuffer = !0, c.prototype.swap16 = function () { var t = this.length; if (t % 2 != 0)
                throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var e = 0; e < t; e += 2)
                d(this, e, e + 1); return this; }, c.prototype.swap32 = function () { var t = this.length; if (t % 4 != 0)
                throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var e = 0; e < t; e += 4)
                d(this, e, e + 3), d(this, e + 1, e + 2); return this; }, c.prototype.swap64 = function () { var t = this.length; if (t % 8 != 0)
                throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var e = 0; e < t; e += 8)
                d(this, e, e + 7), d(this, e + 1, e + 6), d(this, e + 2, e + 5), d(this, e + 3, e + 4); return this; }, c.prototype.toString = function () { var t = 0 | this.length; return 0 === t ? "" : 0 === arguments.length ? C(this, 0, t) : function (t, e, n) { var r = !1; if ((void 0 === e || e < 0) && (e = 0), e > this.length)
                return ""; if ((void 0 === n || n > this.length) && (n = this.length), n <= 0)
                return ""; if ((n >>>= 0) <= (e >>>= 0))
                return ""; for (t || (t = "utf8");;)
                switch (t) {
                    case "hex": return A(this, e, n);
                    case "utf8":
                    case "utf-8": return C(this, e, n);
                    case "ascii": return I(this, e, n);
                    case "latin1":
                    case "binary": return R(this, e, n);
                    case "base64": return k(this, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le": return _(this, e, n);
                    default:
                        if (r)
                            throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), r = !0;
                } }.apply(this, arguments); }, c.prototype.equals = function (t) { if (!c.isBuffer(t))
                throw new TypeError("Argument must be a Buffer"); return this === t || 0 === c.compare(this, t); }, c.prototype.inspect = function () { var t = "", n = e.INSPECT_MAX_BYTES; return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"; }, c.prototype.compare = function (t, e, n, r, o) { if (!c.isBuffer(t))
                throw new TypeError("Argument must be a Buffer"); if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length)
                throw new RangeError("out of range index"); if (r >= o && e >= n)
                return 0; if (r >= o)
                return -1; if (e >= n)
                return 1; if (this === t)
                return 0; for (var i = (o >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(i, s), u = this.slice(r, o), l = t.slice(e, n), h = 0; h < a; ++h)
                if (u[h] !== l[h]) {
                    i = u[h], s = l[h];
                    break;
                } return i < s ? -1 : s < i ? 1 : 0; }, c.prototype.includes = function (t, e, n) { return -1 !== this.indexOf(t, e, n); }, c.prototype.indexOf = function (t, e, n) { return y(this, t, e, n, !0); }, c.prototype.lastIndexOf = function (t, e, n) { return y(this, t, e, n, !1); }, c.prototype.write = function (t, e, n, r) { if (void 0 === e)
                r = "utf8", n = this.length, e = 0;
            else if (void 0 === n && "string" == typeof e)
                r = e, n = this.length, e = 0;
            else {
                if (!isFinite(e))
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0);
            } var o = this.length - e; if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length)
                throw new RangeError("Attempt to write outside buffer bounds"); r || (r = "utf8"); for (var i = !1;;)
                switch (r) {
                    case "hex": return b(this, t, e, n);
                    case "utf8":
                    case "utf-8": return w(this, t, e, n);
                    case "ascii": return m(this, t, e, n);
                    case "latin1":
                    case "binary": return S(this, t, e, n);
                    case "base64": return E(this, t, e, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le": return T(this, t, e, n);
                    default:
                        if (i)
                            throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), i = !0;
                } }, c.prototype.toJSON = function () { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) }; };
            var P = 4096;
            function I(t, e, n) { var r = ""; n = Math.min(t.length, n); for (var o = e; o < n; ++o)
                r += String.fromCharCode(127 & t[o]); return r; }
            function R(t, e, n) { var r = ""; n = Math.min(t.length, n); for (var o = e; o < n; ++o)
                r += String.fromCharCode(t[o]); return r; }
            function A(t, e, n) { var r = t.length; (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r); for (var o = "", i = e; i < n; ++i)
                o += N(t[i]); return o; }
            function _(t, e, n) { for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2)
                o += String.fromCharCode(r[i] + 256 * r[i + 1]); return o; }
            function O(t, e, n) { if (t % 1 != 0 || t < 0)
                throw new RangeError("offset is not uint"); if (t + e > n)
                throw new RangeError("Trying to access beyond buffer length"); }
            function x(t, e, n, r, o, i) { if (!c.isBuffer(t))
                throw new TypeError('"buffer" argument must be a Buffer instance'); if (e > o || e < i)
                throw new RangeError('"value" argument is out of bounds'); if (n + r > t.length)
                throw new RangeError("Index out of range"); }
            function M(t, e, n, r) { e < 0 && (e = 65535 + e + 1); for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o)
                t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o); }
            function B(t, e, n, r) { e < 0 && (e = 4294967295 + e + 1); for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o)
                t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255; }
            function U(t, e, n, r, o, i) { if (n + r > t.length)
                throw new RangeError("Index out of range"); if (n < 0)
                throw new RangeError("Index out of range"); }
            function L(t, e, n, r, i) { return i || U(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4; }
            function j(t, e, n, r, i) { return i || U(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8; }
            c.prototype.slice = function (t, e) { var n, r = this.length; if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), c.TYPED_ARRAY_SUPPORT)
                (n = this.subarray(t, e)).__proto__ = c.prototype;
            else {
                var o = e - t;
                n = new c(o, void 0);
                for (var i = 0; i < o; ++i)
                    n[i] = this[i + t];
            } return n; }, c.prototype.readUIntLE = function (t, e, n) { t |= 0, e |= 0, n || O(t, e, this.length); for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);)
                r += this[t + i] * o; return r; }, c.prototype.readUIntBE = function (t, e, n) { t |= 0, e |= 0, n || O(t, e, this.length); for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);)
                r += this[t + --e] * o; return r; }, c.prototype.readUInt8 = function (t, e) { return e || O(t, 1, this.length), this[t]; }, c.prototype.readUInt16LE = function (t, e) { return e || O(t, 2, this.length), this[t] | this[t + 1] << 8; }, c.prototype.readUInt16BE = function (t, e) { return e || O(t, 2, this.length), this[t] << 8 | this[t + 1]; }, c.prototype.readUInt32LE = function (t, e) { return e || O(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]; }, c.prototype.readUInt32BE = function (t, e) { return e || O(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]); }, c.prototype.readIntLE = function (t, e, n) { t |= 0, e |= 0, n || O(t, e, this.length); for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);)
                r += this[t + i] * o; return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r; }, c.prototype.readIntBE = function (t, e, n) { t |= 0, e |= 0, n || O(t, e, this.length); for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);)
                i += this[t + --r] * o; return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i; }, c.prototype.readInt8 = function (t, e) { return e || O(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]; }, c.prototype.readInt16LE = function (t, e) { e || O(t, 2, this.length); var n = this[t] | this[t + 1] << 8; return 32768 & n ? 4294901760 | n : n; }, c.prototype.readInt16BE = function (t, e) { e || O(t, 2, this.length); var n = this[t + 1] | this[t] << 8; return 32768 & n ? 4294901760 | n : n; }, c.prototype.readInt32LE = function (t, e) { return e || O(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24; }, c.prototype.readInt32BE = function (t, e) { return e || O(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]; }, c.prototype.readFloatLE = function (t, e) { return e || O(t, 4, this.length), o.read(this, t, !0, 23, 4); }, c.prototype.readFloatBE = function (t, e) { return e || O(t, 4, this.length), o.read(this, t, !1, 23, 4); }, c.prototype.readDoubleLE = function (t, e) { return e || O(t, 8, this.length), o.read(this, t, !0, 52, 8); }, c.prototype.readDoubleBE = function (t, e) { return e || O(t, 8, this.length), o.read(this, t, !1, 52, 8); }, c.prototype.writeUIntLE = function (t, e, n, r) { (t = +t, e |= 0, n |= 0, r) || x(this, t, e, n, Math.pow(2, 8 * n) - 1, 0); var o = 1, i = 0; for (this[e] = 255 & t; ++i < n && (o *= 256);)
                this[e + i] = t / o & 255; return e + n; }, c.prototype.writeUIntBE = function (t, e, n, r) { (t = +t, e |= 0, n |= 0, r) || x(this, t, e, n, Math.pow(2, 8 * n) - 1, 0); var o = n - 1, i = 1; for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);)
                this[e + o] = t / i & 255; return e + n; }, c.prototype.writeUInt8 = function (t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1; }, c.prototype.writeUInt16LE = function (t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2; }, c.prototype.writeUInt16BE = function (t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2; }, c.prototype.writeUInt32LE = function (t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : B(this, t, e, !0), e + 4; }, c.prototype.writeUInt32BE = function (t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4; }, c.prototype.writeIntLE = function (t, e, n, r) { if (t = +t, e |= 0, !r) {
                var o = Math.pow(2, 8 * n - 1);
                x(this, t, e, n, o - 1, -o);
            } var i = 0, s = 1, a = 0; for (this[e] = 255 & t; ++i < n && (s *= 256);)
                t < 0 && 0 === a && 0 !== this[e + i - 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255; return e + n; }, c.prototype.writeIntBE = function (t, e, n, r) { if (t = +t, e |= 0, !r) {
                var o = Math.pow(2, 8 * n - 1);
                x(this, t, e, n, o - 1, -o);
            } var i = n - 1, s = 1, a = 0; for (this[e + i] = 255 & t; --i >= 0 && (s *= 256);)
                t < 0 && 0 === a && 0 !== this[e + i + 1] && (a = 1), this[e + i] = (t / s >> 0) - a & 255; return e + n; }, c.prototype.writeInt8 = function (t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1; }, c.prototype.writeInt16LE = function (t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : M(this, t, e, !0), e + 2; }, c.prototype.writeInt16BE = function (t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : M(this, t, e, !1), e + 2; }, c.prototype.writeInt32LE = function (t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : B(this, t, e, !0), e + 4; }, c.prototype.writeInt32BE = function (t, e, n) { return t = +t, e |= 0, n || x(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : B(this, t, e, !1), e + 4; }, c.prototype.writeFloatLE = function (t, e, n) { return L(this, t, e, !0, n); }, c.prototype.writeFloatBE = function (t, e, n) { return L(this, t, e, !1, n); }, c.prototype.writeDoubleLE = function (t, e, n) { return j(this, t, e, !0, n); }, c.prototype.writeDoubleBE = function (t, e, n) { return j(this, t, e, !1, n); }, c.prototype.copy = function (t, e, n, r) { if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n)
                return 0; if (0 === t.length || 0 === this.length)
                return 0; if (e < 0)
                throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length)
                throw new RangeError("sourceStart out of bounds"); if (r < 0)
                throw new RangeError("sourceEnd out of bounds"); r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n); var o, i = r - n; if (this === t && n < e && e < r)
                for (o = i - 1; o >= 0; --o)
                    t[o + e] = this[o + n];
            else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT)
                for (o = 0; o < i; ++o)
                    t[o + e] = this[o + n];
            else
                Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e); return i; }, c.prototype.fill = function (t, e, n, r) { if ("string" == typeof t) {
                if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                    var o = t.charCodeAt(0);
                    o < 256 && (t = o);
                }
                if (void 0 !== r && "string" != typeof r)
                    throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !c.isEncoding(r))
                    throw new TypeError("Unknown encoding: " + r);
            }
            else
                "number" == typeof t && (t &= 255); if (e < 0 || this.length < e || this.length < n)
                throw new RangeError("Out of range index"); if (n <= e)
                return this; var i; if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                for (i = e; i < n; ++i)
                    this[i] = t;
            else {
                var s = c.isBuffer(t) ? t : q(new c(t, r).toString()), a = s.length;
                for (i = 0; i < n - e; ++i)
                    this[i + e] = s[i % a];
            } return this; };
            var D = /[^+\/0-9A-Za-z-_]/g;
            function N(t) { return t < 16 ? "0" + t.toString(16) : t.toString(16); }
            function q(t, e) { var n; e = e || 1 / 0; for (var r = t.length, o = null, i = [], s = 0; s < r; ++s) {
                if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                    if (!o) {
                        if (n > 56319) {
                            (e -= 3) > -1 && i.push(239, 191, 189);
                            continue;
                        }
                        if (s + 1 === r) {
                            (e -= 3) > -1 && i.push(239, 191, 189);
                            continue;
                        }
                        o = n;
                        continue;
                    }
                    if (n < 56320) {
                        (e -= 3) > -1 && i.push(239, 191, 189), o = n;
                        continue;
                    }
                    n = 65536 + (o - 55296 << 10 | n - 56320);
                }
                else
                    o && (e -= 3) > -1 && i.push(239, 191, 189);
                if (o = null, n < 128) {
                    if ((e -= 1) < 0)
                        break;
                    i.push(n);
                }
                else if (n < 2048) {
                    if ((e -= 2) < 0)
                        break;
                    i.push(n >> 6 | 192, 63 & n | 128);
                }
                else if (n < 65536) {
                    if ((e -= 3) < 0)
                        break;
                    i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128);
                }
                else {
                    if (!(n < 1114112))
                        throw new Error("Invalid code point");
                    if ((e -= 4) < 0)
                        break;
                    i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128);
                }
            } return i; }
            function Y(t) { return r.toByteArray(function (t) { if ((t = function (t) { return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, ""); }(t).replace(D, "")).length < 2)
                return ""; for (; t.length % 4 != 0;)
                t += "="; return t; }(t)); }
            function F(t, e, n, r) { for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o)
                e[o + n] = t[o]; return o; }
        }).call(this, n(9));
    }, function (t, e, n) {
        "use strict";
        (function (t) { n.d(e, "a", function () { return f; }); var r, o, i = n(2), s = n(3), a = n(0), c = n(1), u = (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n]); }, function (t, e) { function n() { this.constructor = t; } r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }), l = Object.assign || function (t) { for (var e, n = 1, r = arguments.length; n < r; n++)
            for (var o in e = arguments[n])
                Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]); return t; }; if ("undefined" == typeof XMLHttpRequest) {
            var h = require;
            o = h("request");
        } var f = function (e) { function n(t) { var n = e.call(this) || this; if (void 0 === o)
            throw new Error("The 'request' module could not be loaded."); return n.logger = t, n.cookieJar = o.jar(), n.request = o.defaults({ jar: n.cookieJar }), n; } return u(n, e), n.prototype.send = function (e) { var n = this; return new Promise(function (r, o) { var u; u = Object(c.f)(e.content) ? t.from(e.content) : e.content || ""; var h = n.request(e.url, { body: u, encoding: "arraybuffer" === e.responseType ? null : "utf8", headers: l({ "X-Requested-With": "XMLHttpRequest" }, e.headers), method: e.method, timeout: e.timeout }, function (t, c, u) { if (e.abortSignal && (e.abortSignal.onabort = null), t)
            return "ETIMEDOUT" === t.code && (n.logger.log(a.a.Warning, "Timeout from HTTP request."), o(new i.c)), n.logger.log(a.a.Warning, "Error from HTTP request. " + t), void o(t); c.statusCode >= 200 && c.statusCode < 300 ? r(new s.b(c.statusCode, c.statusMessage || "", u)) : o(new i.b(c.statusMessage || "", c.statusCode || 0)); }); e.abortSignal && (e.abortSignal.onabort = function () { h.abort(), o(new i.a); }); }); }, n.prototype.getCookieString = function (t) { return this.cookieJar.getCookieString(t); }, n; }(s.a); }).call(this, n(6).Buffer);
    }, function (t, e, n) {
        "use strict";
        (function (t) { n.d(e, "a", function () { return i; }); var r = n(5), o = n(1), i = function () { function e() { } return e.prototype.writeHandshakeRequest = function (t) { return r.a.write(JSON.stringify(t)); }, e.prototype.parseHandshakeResponse = function (e) { var n, i; if (Object(o.f)(e) || void 0 !== t && e instanceof t) {
            var s = new Uint8Array(e);
            if (-1 === (c = s.indexOf(r.a.RecordSeparatorCode)))
                throw new Error("Message is incomplete.");
            var a = c + 1;
            n = String.fromCharCode.apply(null, s.slice(0, a)), i = s.byteLength > a ? s.slice(a).buffer : null;
        }
        else {
            var c, u = e;
            if (-1 === (c = u.indexOf(r.a.RecordSeparator)))
                throw new Error("Message is incomplete.");
            a = c + 1;
            n = u.substring(0, a), i = u.length > a ? u.substring(a) : null;
        } var l = r.a.parse(n), h = JSON.parse(l[0]); if (h.type)
            throw new Error("Expected a handshake response from the server."); return [i, h]; }, e; }(); }).call(this, n(6).Buffer);
    }, function (t, e) { var n; n = function () { return this; }(); try {
        n = n || new Function("return this")();
    }
    catch (t) {
        "object" == typeof window && (n = window);
    } t.exports = n; }, function (t, e, n) {
        "use strict";
        e.byteLength = function (t) { var e = u(t), n = e[0], r = e[1]; return 3 * (n + r) / 4 - r; }, e.toByteArray = function (t) { for (var e, n = u(t), r = n[0], s = n[1], a = new i(function (t, e, n) { return 3 * (e + n) / 4 - n; }(0, r, s)), c = 0, l = s > 0 ? r - 4 : r, h = 0; h < l; h += 4)
            e = o[t.charCodeAt(h)] << 18 | o[t.charCodeAt(h + 1)] << 12 | o[t.charCodeAt(h + 2)] << 6 | o[t.charCodeAt(h + 3)], a[c++] = e >> 16 & 255, a[c++] = e >> 8 & 255, a[c++] = 255 & e; 2 === s && (e = o[t.charCodeAt(h)] << 2 | o[t.charCodeAt(h + 1)] >> 4, a[c++] = 255 & e); 1 === s && (e = o[t.charCodeAt(h)] << 10 | o[t.charCodeAt(h + 1)] << 4 | o[t.charCodeAt(h + 2)] >> 2, a[c++] = e >> 8 & 255, a[c++] = 255 & e); return a; }, e.fromByteArray = function (t) { for (var e, n = t.length, o = n % 3, i = [], s = 0, a = n - o; s < a; s += 16383)
            i.push(l(t, s, s + 16383 > a ? a : s + 16383)); 1 === o ? (e = t[n - 1], i.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")); return i.join(""); };
        for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, c = s.length; a < c; ++a)
            r[a] = s[a], o[s.charCodeAt(a)] = a;
        function u(t) { var e = t.length; if (e % 4 > 0)
            throw new Error("Invalid string. Length must be a multiple of 4"); var n = t.indexOf("="); return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]; }
        function l(t, e, n) { for (var o, i, s = [], a = e; a < n; a += 3)
            o = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]); return s.join(""); }
        o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63;
    }, function (t, e) { e.read = function (t, e, n, r, o) { var i, s, a = 8 * o - r - 1, c = (1 << a) - 1, u = c >> 1, l = -7, h = n ? o - 1 : 0, f = n ? -1 : 1, p = t[e + h]; for (h += f, i = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; i = 256 * i + t[e + h], h += f, l -= 8)
        ; for (s = i & (1 << -l) - 1, i >>= -l, l += r; l > 0; s = 256 * s + t[e + h], h += f, l -= 8)
        ; if (0 === i)
        i = 1 - u;
    else {
        if (i === c)
            return s ? NaN : 1 / 0 * (p ? -1 : 1);
        s += Math.pow(2, r), i -= u;
    } return (p ? -1 : 1) * s * Math.pow(2, i - r); }, e.write = function (t, e, n, r, o, i) { var s, a, c, u = 8 * i - o - 1, l = (1 << u) - 1, h = l >> 1, f = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : i - 1, g = r ? 1 : -1, d = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0; for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -s)) < 1 && (s--, c *= 2), (e += s + h >= 1 ? f / c : f * Math.pow(2, 1 - h)) * c >= 2 && (s++, c /= 2), s + h >= l ? (a = 0, s = l) : s + h >= 1 ? (a = (e * c - 1) * Math.pow(2, o), s += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, o), s = 0)); o >= 8; t[n + p] = 255 & a, p += g, a /= 256, o -= 8)
        ; for (s = s << o | a, u += o; u > 0; t[n + p] = 255 & s, p += g, s /= 256, u -= 8)
        ; t[n + p - g] |= 128 * d; }; }, function (t, e) { var n = {}.toString; t.exports = Array.isArray || function (t) { return "[object Array]" == n.call(t); }; }, function (t, e, n) {
        "use strict";
        n.r(e);
        var r, o, i = n(2), s = n(3), a = n(7), c = n(0), u = (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n]); }, function (t, e) { function n() { this.constructor = t; } r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n); }), l = function (t) { function e(e) { var n = t.call(this) || this; return n.logger = e, n; } return u(e, t), e.prototype.send = function (t) { var e = this; return t.abortSignal && t.abortSignal.aborted ? Promise.reject(new i.a) : t.method ? t.url ? new Promise(function (n, r) { var o = new XMLHttpRequest; o.open(t.method, t.url, !0), o.withCredentials = !0, o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"); var a = t.headers; a && Object.keys(a).forEach(function (t) { o.setRequestHeader(t, a[t]); }), t.responseType && (o.responseType = t.responseType), t.abortSignal && (t.abortSignal.onabort = function () { o.abort(), r(new i.a); }), t.timeout && (o.timeout = t.timeout), o.onload = function () { t.abortSignal && (t.abortSignal.onabort = null), o.status >= 200 && o.status < 300 ? n(new s.b(o.status, o.statusText, o.response || o.responseText)) : r(new i.b(o.statusText, o.status)); }, o.onerror = function () { e.logger.log(c.a.Warning, "Error from HTTP request. " + o.status + ": " + o.statusText + "."), r(new i.b(o.statusText, o.status)); }, o.ontimeout = function () { e.logger.log(c.a.Warning, "Timeout from HTTP request."), r(new i.c); }, o.send(t.content || ""); }) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined.")); }, e; }(s.a), h = function () { var t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (t, e) { t.__proto__ = e; } || function (t, e) { for (var n in e)
            e.hasOwnProperty(n) && (t[n] = e[n]); }; return function (e, n) { function r() { this.constructor = e; } t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r); }; }(), f = function (t) { function e(e) { var n = t.call(this) || this; return "undefined" != typeof XMLHttpRequest ? n.httpClient = new l(e) : n.httpClient = new a.a(e), n; } return h(e, t), e.prototype.send = function (t) { return t.abortSignal && t.abortSignal.aborted ? Promise.reject(new i.a) : t.method ? t.url ? this.httpClient.send(t) : Promise.reject(new Error("No url defined.")) : Promise.reject(new Error("No method defined.")); }, e.prototype.getCookieString = function (t) { return this.httpClient.getCookieString(t); }, e; }(s.a), p = n(8);
        !function (t) { t[t.Invocation = 1] = "Invocation", t[t.StreamItem = 2] = "StreamItem", t[t.Completion = 3] = "Completion", t[t.StreamInvocation = 4] = "StreamInvocation", t[t.CancelInvocation = 5] = "CancelInvocation", t[t.Ping = 6] = "Ping", t[t.Close = 7] = "Close"; }(o || (o = {}));
        var g, d = n(1), y = function (t, e, n, r) { return new (n || (n = Promise))(function (o, i) { function s(t) { try {
            c(r.next(t));
        }
        catch (t) {
            i(t);
        } } function a(t) { try {
            c(r.throw(t));
        }
        catch (t) {
            i(t);
        } } function c(t) { t.done ? o(t.value) : new n(function (e) { e(t.value); }).then(s, a); } c((r = r.apply(t, e || [])).next()); }); }, v = function (t, e) { var n, r, o, i, s = { label: 0, sent: function () { if (1 & o[0])
                throw o[1]; return o[1]; }, trys: [], ops: [] }; return i = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function a(i) { return function (a) { return function (i) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
                    return o;
                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                    case 0:
                    case 1:
                        o = i;
                        break;
                    case 4: return s.label++, { value: i[1], done: !1 };
                    case 5:
                        s.label++, r = i[1], i = [0];
                        continue;
                    case 7:
                        i = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                            s.label = i[1];
                            break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                            s.label = o[1], o = i;
                            break;
                        }
                        if (o && s.label < o[2]) {
                            s.label = o[2], s.ops.push(i);
                            break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                i = e.call(t, s);
            }
            catch (t) {
                i = [6, t], r = 0;
            }
            finally {
                n = o = 0;
            } if (5 & i[0])
            throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, a]); }; } }, b = 3e4, w = 15e3;
        !function (t) { t[t.Disconnected = 0] = "Disconnected", t[t.Connected = 1] = "Connected"; }(g || (g = {}));
        var m, S, E = function () { function t(t, e, n) { var r = this; d.a.isRequired(t, "connection"), d.a.isRequired(e, "logger"), d.a.isRequired(n, "protocol"), this.serverTimeoutInMilliseconds = b, this.keepAliveIntervalInMilliseconds = w, this.logger = e, this.protocol = n, this.connection = t, this.handshakeProtocol = new p.a, this.connection.onreceive = function (t) { return r.processIncomingData(t); }, this.connection.onclose = function (t) { return r.connectionClosed(t); }, this.callbacks = {}, this.methods = {}, this.closedCallbacks = [], this.id = 0, this.receivedHandshakeResponse = !1, this.connectionState = g.Disconnected, this.cachedPingMessage = this.protocol.writeMessage({ type: o.Ping }); } return t.create = function (e, n, r) { return new t(e, n, r); }, Object.defineProperty(t.prototype, "state", { get: function () { return this.connectionState; }, enumerable: !0, configurable: !0 }), t.prototype.start = function () { return y(this, void 0, void 0, function () { var t, e, n = this; return v(this, function (r) { switch (r.label) {
            case 0: return t = { protocol: this.protocol.name, version: this.protocol.version }, this.logger.log(c.a.Debug, "Starting HubConnection."), this.receivedHandshakeResponse = !1, e = new Promise(function (t, e) { n.handshakeResolver = t, n.handshakeRejecter = e; }), [4, this.connection.start(this.protocol.transferFormat)];
            case 1: return r.sent(), this.logger.log(c.a.Debug, "Sending handshake request."), [4, this.sendMessage(this.handshakeProtocol.writeHandshakeRequest(t))];
            case 2: return r.sent(), this.logger.log(c.a.Information, "Using HubProtocol '" + this.protocol.name + "'."), this.cleanupTimeout(), this.resetTimeoutPeriod(), this.resetKeepAliveInterval(), [4, e];
            case 3: return r.sent(), this.connectionState = g.Connected, [2];
        } }); }); }, t.prototype.stop = function () { return this.logger.log(c.a.Debug, "Stopping HubConnection."), this.cleanupTimeout(), this.cleanupPingTimer(), this.connection.stop(); }, t.prototype.stream = function (t) { for (var e = this, n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r]; var i, s = this.createStreamInvocation(t, n), a = new d.c; a.cancelCallback = function () { var t = e.createCancelInvocation(s.invocationId), n = e.protocol.writeMessage(t); return delete e.callbacks[s.invocationId], i.then(function () { return e.sendMessage(n); }); }, this.callbacks[s.invocationId] = function (t, e) { e ? a.error(e) : t && (t.type === o.Completion ? t.error ? a.error(new Error(t.error)) : a.complete() : a.next(t.item)); }; var c = this.protocol.writeMessage(s); return i = this.sendMessage(c).catch(function (t) { a.error(t), delete e.callbacks[s.invocationId]; }), a; }, t.prototype.sendMessage = function (t) { return this.resetKeepAliveInterval(), this.connection.send(t); }, t.prototype.send = function (t) { for (var e = [], n = 1; n < arguments.length; n++)
            e[n - 1] = arguments[n]; var r = this.createInvocation(t, e, !0), o = this.protocol.writeMessage(r); return this.sendMessage(o); }, t.prototype.invoke = function (t) { for (var e = this, n = [], r = 1; r < arguments.length; r++)
            n[r - 1] = arguments[r]; var i = this.createInvocation(t, n, !1); return new Promise(function (t, n) { e.callbacks[i.invocationId] = function (e, r) { r ? n(r) : e && (e.type === o.Completion ? e.error ? n(new Error(e.error)) : t(e.result) : n(new Error("Unexpected message type: " + e.type))); }; var r = e.protocol.writeMessage(i); e.sendMessage(r).catch(function (t) { n(t), delete e.callbacks[i.invocationId]; }); }); }, t.prototype.on = function (t, e) { t && e && (t = t.toLowerCase(), this.methods[t] || (this.methods[t] = []), -1 === this.methods[t].indexOf(e) && this.methods[t].push(e)); }, t.prototype.off = function (t, e) { if (t) {
            t = t.toLowerCase();
            var n = this.methods[t];
            if (n)
                if (e) {
                    var r = n.indexOf(e);
                    -1 !== r && (n.splice(r, 1), 0 === n.length && delete this.methods[t]);
                }
                else
                    delete this.methods[t];
        } }, t.prototype.onclose = function (t) { t && this.closedCallbacks.push(t); }, t.prototype.processIncomingData = function (t) { if (this.cleanupTimeout(), this.receivedHandshakeResponse || (t = this.processHandshakeResponse(t), this.receivedHandshakeResponse = !0), t)
            for (var e = 0, n = this.protocol.parseMessages(t, this.logger); e < n.length; e++) {
                var r = n[e];
                switch (r.type) {
                    case o.Invocation:
                        this.invokeClientMethod(r);
                        break;
                    case o.StreamItem:
                    case o.Completion:
                        var i = this.callbacks[r.invocationId];
                        null != i && (r.type === o.Completion && delete this.callbacks[r.invocationId], i(r));
                        break;
                    case o.Ping: break;
                    case o.Close:
                        this.logger.log(c.a.Information, "Close message received from server."), this.connection.stop(r.error ? new Error("Server returned an error on close: " + r.error) : void 0);
                        break;
                    default: this.logger.log(c.a.Warning, "Invalid message type: " + r.type + ".");
                }
            } this.resetTimeoutPeriod(); }, t.prototype.processHandshakeResponse = function (t) { var e, n, r; try {
            r = (e = this.handshakeProtocol.parseHandshakeResponse(t))[0], n = e[1];
        }
        catch (t) {
            var o = "Error parsing handshake response: " + t;
            this.logger.log(c.a.Error, o);
            var i = new Error(o);
            throw this.connection.stop(i), this.handshakeRejecter(i), i;
        } if (n.error) {
            o = "Server returned handshake error: " + n.error;
            throw this.logger.log(c.a.Error, o), this.handshakeRejecter(o), this.connection.stop(new Error(o)), new Error(o);
        } return this.logger.log(c.a.Debug, "Server handshake complete."), this.handshakeResolver(), r; }, t.prototype.resetKeepAliveInterval = function () { var t = this; this.cleanupPingTimer(), this.pingServerHandle = setTimeout(function () { return y(t, void 0, void 0, function () { return v(this, function (t) { switch (t.label) {
            case 0:
                if (this.connectionState !== g.Connected)
                    return [3, 4];
                t.label = 1;
            case 1: return t.trys.push([1, 3, , 4]), [4, this.sendMessage(this.cachedPingMessage)];
            case 2: return t.sent(), [3, 4];
            case 3: return t.sent(), this.cleanupPingTimer(), [3, 4];
            case 4: return [2];
        } }); }); }, this.keepAliveIntervalInMilliseconds); }, t.prototype.resetTimeoutPeriod = function () { var t = this; this.connection.features && this.connection.features.inherentKeepAlive || (this.timeoutHandle = setTimeout(function () { return t.serverTimeout(); }, this.serverTimeoutInMilliseconds)); }, t.prototype.serverTimeout = function () { this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server.")); }, t.prototype.invokeClientMethod = function (t) { var e = this, n = this.methods[t.target.toLowerCase()]; if (n) {
            if (n.forEach(function (n) { return n.apply(e, t.arguments); }), t.invocationId) {
                var r = "Server requested a response, which is not supported in this version of the client.";
                this.logger.log(c.a.Error, r), this.connection.stop(new Error(r));
            }
        }
        else
            this.logger.log(c.a.Warning, "No client method with the name '" + t.target + "' found."); }, t.prototype.connectionClosed = function (t) { var e = this, n = this.callbacks; this.callbacks = {}, this.connectionState = g.Disconnected, this.handshakeRejecter && this.handshakeRejecter(t), Object.keys(n).forEach(function (e) { (0, n[e])(null, t || new Error("Invocation canceled due to connection being closed.")); }), this.cleanupTimeout(), this.cleanupPingTimer(), this.closedCallbacks.forEach(function (n) { return n.apply(e, [t]); }); }, t.prototype.cleanupPingTimer = function () { this.pingServerHandle && clearTimeout(this.pingServerHandle); }, t.prototype.cleanupTimeout = function () { this.timeoutHandle && clearTimeout(this.timeoutHandle); }, t.prototype.createInvocation = function (t, e, n) { if (n)
            return { arguments: e, target: t, type: o.Invocation }; var r = this.id; return this.id++, { arguments: e, invocationId: r.toString(), target: t, type: o.Invocation }; }, t.prototype.createStreamInvocation = function (t, e) { var n = this.id; return this.id++, { arguments: e, invocationId: n.toString(), target: t, type: o.StreamInvocation }; }, t.prototype.createCancelInvocation = function (t) { return { invocationId: t, type: o.CancelInvocation }; }, t; }();
        !function (t) { t[t.None = 0] = "None", t[t.WebSockets = 1] = "WebSockets", t[t.ServerSentEvents = 2] = "ServerSentEvents", t[t.LongPolling = 4] = "LongPolling"; }(m || (m = {})), function (t) { t[t.Text = 1] = "Text", t[t.Binary = 2] = "Binary"; }(S || (S = {}));
        var T = function () { function t() { this.isAborted = !1, this.onabort = null; } return t.prototype.abort = function () { this.isAborted || (this.isAborted = !0, this.onabort && this.onabort()); }, Object.defineProperty(t.prototype, "signal", { get: function () { return this; }, enumerable: !0, configurable: !0 }), Object.defineProperty(t.prototype, "aborted", { get: function () { return this.isAborted; }, enumerable: !0, configurable: !0 }), t; }(), k = function (t, e, n, r) { return new (n || (n = Promise))(function (o, i) { function s(t) { try {
            c(r.next(t));
        }
        catch (t) {
            i(t);
        } } function a(t) { try {
            c(r.throw(t));
        }
        catch (t) {
            i(t);
        } } function c(t) { t.done ? o(t.value) : new n(function (e) { e(t.value); }).then(s, a); } c((r = r.apply(t, e || [])).next()); }); }, C = function (t, e) { var n, r, o, i, s = { label: 0, sent: function () { if (1 & o[0])
                throw o[1]; return o[1]; }, trys: [], ops: [] }; return i = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function a(i) { return function (a) { return function (i) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
                    return o;
                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                    case 0:
                    case 1:
                        o = i;
                        break;
                    case 4: return s.label++, { value: i[1], done: !1 };
                    case 5:
                        s.label++, r = i[1], i = [0];
                        continue;
                    case 7:
                        i = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                            s.label = i[1];
                            break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                            s.label = o[1], o = i;
                            break;
                        }
                        if (o && s.label < o[2]) {
                            s.label = o[2], s.ops.push(i);
                            break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                i = e.call(t, s);
            }
            catch (t) {
                i = [6, t], r = 0;
            }
            finally {
                n = o = 0;
            } if (5 & i[0])
            throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, a]); }; } }, P = function () { function t(t, e, n, r) { this.httpClient = t, this.accessTokenFactory = e, this.logger = n, this.pollAbort = new T, this.logMessageContent = r, this.running = !1, this.onreceive = null, this.onclose = null; } return Object.defineProperty(t.prototype, "pollAborted", { get: function () { return this.pollAbort.aborted; }, enumerable: !0, configurable: !0 }), t.prototype.connect = function (t, e) { return k(this, void 0, void 0, function () { var n, r, o, s; return C(this, function (a) { switch (a.label) {
            case 0:
                if (d.a.isRequired(t, "url"), d.a.isRequired(e, "transferFormat"), d.a.isIn(e, S, "transferFormat"), this.url = t, this.logger.log(c.a.Trace, "(LongPolling transport) Connecting."), e === S.Binary && "undefined" != typeof XMLHttpRequest && "string" != typeof (new XMLHttpRequest).responseType)
                    throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
                return n = { abortSignal: this.pollAbort.signal, headers: {}, timeout: 1e5 }, e === S.Binary && (n.responseType = "arraybuffer"), [4, this.getAccessToken()];
            case 1: return r = a.sent(), this.updateHeaderToken(n, r), o = t + "&_=" + Date.now(), this.logger.log(c.a.Trace, "(LongPolling transport) polling: " + o + "."), [4, this.httpClient.get(o, n)];
            case 2: return 200 !== (s = a.sent()).statusCode ? (this.logger.log(c.a.Error, "(LongPolling transport) Unexpected response code: " + s.statusCode + "."), this.closeError = new i.b(s.statusText || "", s.statusCode), this.running = !1) : this.running = !0, this.receiving = this.poll(this.url, n), [2];
        } }); }); }, t.prototype.getAccessToken = function () { return k(this, void 0, void 0, function () { return C(this, function (t) { switch (t.label) {
            case 0: return this.accessTokenFactory ? [4, this.accessTokenFactory()] : [3, 2];
            case 1: return [2, t.sent()];
            case 2: return [2, null];
        } }); }); }, t.prototype.updateHeaderToken = function (t, e) { t.headers || (t.headers = {}), e ? t.headers.Authorization = "Bearer " + e : t.headers.Authorization && delete t.headers.Authorization; }, t.prototype.poll = function (t, e) { return k(this, void 0, void 0, function () { var n, r, o, s; return C(this, function (a) { switch (a.label) {
            case 0: a.trys.push([0, , 8, 9]), a.label = 1;
            case 1: return this.running ? [4, this.getAccessToken()] : [3, 7];
            case 2: n = a.sent(), this.updateHeaderToken(e, n), a.label = 3;
            case 3: return a.trys.push([3, 5, , 6]), r = t + "&_=" + Date.now(), this.logger.log(c.a.Trace, "(LongPolling transport) polling: " + r + "."), [4, this.httpClient.get(r, e)];
            case 4: return 204 === (o = a.sent()).statusCode ? (this.logger.log(c.a.Information, "(LongPolling transport) Poll terminated by server."), this.running = !1) : 200 !== o.statusCode ? (this.logger.log(c.a.Error, "(LongPolling transport) Unexpected response code: " + o.statusCode + "."), this.closeError = new i.b(o.statusText || "", o.statusCode), this.running = !1) : o.content ? (this.logger.log(c.a.Trace, "(LongPolling transport) data received. " + Object(d.e)(o.content, this.logMessageContent) + "."), this.onreceive && this.onreceive(o.content)) : this.logger.log(c.a.Trace, "(LongPolling transport) Poll timed out, reissuing."), [3, 6];
            case 5: return s = a.sent(), this.running ? s instanceof i.c ? this.logger.log(c.a.Trace, "(LongPolling transport) Poll timed out, reissuing.") : (this.closeError = s, this.running = !1) : this.logger.log(c.a.Trace, "(LongPolling transport) Poll errored after shutdown: " + s.message), [3, 6];
            case 6: return [3, 1];
            case 7: return [3, 9];
            case 8: return this.logger.log(c.a.Trace, "(LongPolling transport) Polling complete."), this.pollAborted || this.raiseOnClose(), [7];
            case 9: return [2];
        } }); }); }, t.prototype.send = function (t) { return k(this, void 0, void 0, function () { return C(this, function (e) { return this.running ? [2, Object(d.g)(this.logger, "LongPolling", this.httpClient, this.url, this.accessTokenFactory, t, this.logMessageContent)] : [2, Promise.reject(new Error("Cannot send until the transport is connected"))]; }); }); }, t.prototype.stop = function () { return k(this, void 0, void 0, function () { var t, e; return C(this, function (n) { switch (n.label) {
            case 0: this.logger.log(c.a.Trace, "(LongPolling transport) Stopping polling."), this.running = !1, this.pollAbort.abort(), n.label = 1;
            case 1: return n.trys.push([1, , 5, 6]), [4, this.receiving];
            case 2: return n.sent(), this.logger.log(c.a.Trace, "(LongPolling transport) sending DELETE request to " + this.url + "."), t = { headers: {} }, [4, this.getAccessToken()];
            case 3: return e = n.sent(), this.updateHeaderToken(t, e), [4, this.httpClient.delete(this.url, t)];
            case 4: return n.sent(), this.logger.log(c.a.Trace, "(LongPolling transport) DELETE request sent."), [3, 6];
            case 5: return this.logger.log(c.a.Trace, "(LongPolling transport) Stop finished."), this.raiseOnClose(), [7];
            case 6: return [2];
        } }); }); }, t.prototype.raiseOnClose = function () { if (this.onclose) {
            var t = "(LongPolling transport) Firing onclose event.";
            this.closeError && (t += " Error: " + this.closeError), this.logger.log(c.a.Trace, t), this.onclose(this.closeError);
        } }, t; }(), I = function (t, e, n, r) { return new (n || (n = Promise))(function (o, i) { function s(t) { try {
            c(r.next(t));
        }
        catch (t) {
            i(t);
        } } function a(t) { try {
            c(r.throw(t));
        }
        catch (t) {
            i(t);
        } } function c(t) { t.done ? o(t.value) : new n(function (e) { e(t.value); }).then(s, a); } c((r = r.apply(t, e || [])).next()); }); }, R = function (t, e) { var n, r, o, i, s = { label: 0, sent: function () { if (1 & o[0])
                throw o[1]; return o[1]; }, trys: [], ops: [] }; return i = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function a(i) { return function (a) { return function (i) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
                    return o;
                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                    case 0:
                    case 1:
                        o = i;
                        break;
                    case 4: return s.label++, { value: i[1], done: !1 };
                    case 5:
                        s.label++, r = i[1], i = [0];
                        continue;
                    case 7:
                        i = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                            s.label = i[1];
                            break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                            s.label = o[1], o = i;
                            break;
                        }
                        if (o && s.label < o[2]) {
                            s.label = o[2], s.ops.push(i);
                            break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                i = e.call(t, s);
            }
            catch (t) {
                i = [6, t], r = 0;
            }
            finally {
                n = o = 0;
            } if (5 & i[0])
            throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, a]); }; } }, A = function () { function t(t, e, n, r, o) { this.httpClient = t, this.accessTokenFactory = e, this.logger = n, this.logMessageContent = r, this.eventSourceConstructor = o, this.onreceive = null, this.onclose = null; } return t.prototype.connect = function (t, e) { return I(this, void 0, void 0, function () { var n, r = this; return R(this, function (o) { switch (o.label) {
            case 0: return d.a.isRequired(t, "url"), d.a.isRequired(e, "transferFormat"), d.a.isIn(e, S, "transferFormat"), this.logger.log(c.a.Trace, "(SSE transport) Connecting."), this.url = t, this.accessTokenFactory ? [4, this.accessTokenFactory()] : [3, 2];
            case 1: (n = o.sent()) && (t += (t.indexOf("?") < 0 ? "?" : "&") + "access_token=" + encodeURIComponent(n)), o.label = 2;
            case 2: return [2, new Promise(function (n, o) { var i = !1; if (e === S.Text) {
                    var s;
                    if ("undefined" != typeof window)
                        s = new r.eventSourceConstructor(t, { withCredentials: !0 });
                    else {
                        var a = r.httpClient.getCookieString(t);
                        s = new r.eventSourceConstructor(t, { withCredentials: !0, headers: { Cookie: a } });
                    }
                    try {
                        s.onmessage = function (t) { if (r.onreceive)
                            try {
                                r.logger.log(c.a.Trace, "(SSE transport) data received. " + Object(d.e)(t.data, r.logMessageContent) + "."), r.onreceive(t.data);
                            }
                            catch (t) {
                                return void r.close(t);
                            } }, s.onerror = function (t) { var e = new Error(t.data || "Error occurred"); i ? r.close(e) : o(e); }, s.onopen = function () { r.logger.log(c.a.Information, "SSE connected to " + r.url), r.eventSource = s, i = !0, n(); };
                    }
                    catch (t) {
                        return void o(t);
                    }
                }
                else
                    o(new Error("The Server-Sent Events transport only supports the 'Text' transfer format")); })];
        } }); }); }, t.prototype.send = function (t) { return I(this, void 0, void 0, function () { return R(this, function (e) { return this.eventSource ? [2, Object(d.g)(this.logger, "SSE", this.httpClient, this.url, this.accessTokenFactory, t, this.logMessageContent)] : [2, Promise.reject(new Error("Cannot send until the transport is connected"))]; }); }); }, t.prototype.stop = function () { return this.close(), Promise.resolve(); }, t.prototype.close = function (t) { this.eventSource && (this.eventSource.close(), this.eventSource = void 0, this.onclose && this.onclose(t)); }, t; }(), _ = function (t, e, n, r) { return new (n || (n = Promise))(function (o, i) { function s(t) { try {
            c(r.next(t));
        }
        catch (t) {
            i(t);
        } } function a(t) { try {
            c(r.throw(t));
        }
        catch (t) {
            i(t);
        } } function c(t) { t.done ? o(t.value) : new n(function (e) { e(t.value); }).then(s, a); } c((r = r.apply(t, e || [])).next()); }); }, O = function (t, e) { var n, r, o, i, s = { label: 0, sent: function () { if (1 & o[0])
                throw o[1]; return o[1]; }, trys: [], ops: [] }; return i = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function a(i) { return function (a) { return function (i) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
                    return o;
                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                    case 0:
                    case 1:
                        o = i;
                        break;
                    case 4: return s.label++, { value: i[1], done: !1 };
                    case 5:
                        s.label++, r = i[1], i = [0];
                        continue;
                    case 7:
                        i = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                            s.label = i[1];
                            break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                            s.label = o[1], o = i;
                            break;
                        }
                        if (o && s.label < o[2]) {
                            s.label = o[2], s.ops.push(i);
                            break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                i = e.call(t, s);
            }
            catch (t) {
                i = [6, t], r = 0;
            }
            finally {
                n = o = 0;
            } if (5 & i[0])
            throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, a]); }; } }, x = function () { function t(t, e, n, r, o) { this.logger = n, this.accessTokenFactory = e, this.logMessageContent = r, this.webSocketConstructor = o, this.httpClient = t, this.onreceive = null, this.onclose = null; } return t.prototype.connect = function (t, e) { return _(this, void 0, void 0, function () { var n, r = this; return O(this, function (o) { switch (o.label) {
            case 0: return d.a.isRequired(t, "url"), d.a.isRequired(e, "transferFormat"), d.a.isIn(e, S, "transferFormat"), this.logger.log(c.a.Trace, "(WebSockets transport) Connecting."), this.accessTokenFactory ? [4, this.accessTokenFactory()] : [3, 2];
            case 1: (n = o.sent()) && (t += (t.indexOf("?") < 0 ? "?" : "&") + "access_token=" + encodeURIComponent(n)), o.label = 2;
            case 2: return [2, new Promise(function (n, o) { var i; t = t.replace(/^http/, "ws"); var s = r.httpClient.getCookieString(t); "undefined" == typeof window && s && (i = new r.webSocketConstructor(t, void 0, { headers: { Cookie: "" + s } })), i || (i = new r.webSocketConstructor(t)), e === S.Binary && (i.binaryType = "arraybuffer"), i.onopen = function (e) { r.logger.log(c.a.Information, "WebSocket connected to " + t + "."), r.webSocket = i, n(); }, i.onerror = function (t) { var e = null; "undefined" != typeof ErrorEvent && t instanceof ErrorEvent && (e = t.error), o(e); }, i.onmessage = function (t) { r.logger.log(c.a.Trace, "(WebSockets transport) data received. " + Object(d.e)(t.data, r.logMessageContent) + "."), r.onreceive && r.onreceive(t.data); }, i.onclose = function (t) { return r.close(t); }; })];
        } }); }); }, t.prototype.send = function (t) { return this.webSocket && this.webSocket.readyState === this.webSocketConstructor.OPEN ? (this.logger.log(c.a.Trace, "(WebSockets transport) sending data. " + Object(d.e)(t, this.logMessageContent) + "."), this.webSocket.send(t), Promise.resolve()) : Promise.reject("WebSocket is not in the OPEN state"); }, t.prototype.stop = function () { return this.webSocket && (this.webSocket.onclose = function () { }, this.webSocket.onmessage = function () { }, this.webSocket.onerror = function () { }, this.webSocket.close(), this.webSocket = void 0, this.close(void 0)), Promise.resolve(); }, t.prototype.close = function (t) { this.logger.log(c.a.Trace, "(WebSockets transport) socket closed."), this.onclose && (!t || !1 !== t.wasClean && 1e3 === t.code ? this.onclose() : this.onclose(new Error("WebSocket closed with status code: " + t.code + " (" + t.reason + ")."))); }, t; }(), M = function (t, e, n, r) { return new (n || (n = Promise))(function (o, i) { function s(t) { try {
            c(r.next(t));
        }
        catch (t) {
            i(t);
        } } function a(t) { try {
            c(r.throw(t));
        }
        catch (t) {
            i(t);
        } } function c(t) { t.done ? o(t.value) : new n(function (e) { e(t.value); }).then(s, a); } c((r = r.apply(t, e || [])).next()); }); }, B = function (t, e) { var n, r, o, i, s = { label: 0, sent: function () { if (1 & o[0])
                throw o[1]; return o[1]; }, trys: [], ops: [] }; return i = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (i[Symbol.iterator] = function () { return this; }), i; function a(i) { return function (a) { return function (i) { if (n)
            throw new TypeError("Generator is already executing."); for (; s;)
            try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done)
                    return o;
                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                    case 0:
                    case 1:
                        o = i;
                        break;
                    case 4: return s.label++, { value: i[1], done: !1 };
                    case 5:
                        s.label++, r = i[1], i = [0];
                        continue;
                    case 7:
                        i = s.ops.pop(), s.trys.pop();
                        continue;
                    default:
                        if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
                            s = 0;
                            continue;
                        }
                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                            s.label = i[1];
                            break;
                        }
                        if (6 === i[0] && s.label < o[1]) {
                            s.label = o[1], o = i;
                            break;
                        }
                        if (o && s.label < o[2]) {
                            s.label = o[2], s.ops.push(i);
                            break;
                        }
                        o[2] && s.ops.pop(), s.trys.pop();
                        continue;
                }
                i = e.call(t, s);
            }
            catch (t) {
                i = [6, t], r = 0;
            }
            finally {
                n = o = 0;
            } if (5 & i[0])
            throw i[1]; return { value: i[0] ? i[1] : void 0, done: !0 }; }([i, a]); }; } }, U = null, L = null;
        if ("undefined" == typeof window) {
            var j = require;
            U = j("ws"), L = j("eventsource");
        }
        var D = function () { function t(t, e) { void 0 === e && (e = {}), this.features = {}, d.a.isRequired(t, "url"), this.logger = Object(d.d)(e.logger), this.baseUrl = this.resolveUrl(t), (e = e || {}).logMessageContent = e.logMessageContent || !1; var n = "undefined" == typeof window; n || "undefined" == typeof WebSocket || e.WebSocket ? n && !e.WebSocket && U && (e.WebSocket = U) : e.WebSocket = WebSocket, n || "undefined" == typeof EventSource || e.EventSource ? n && !e.EventSource && void 0 !== L && (e.EventSource = L) : e.EventSource = EventSource, this.httpClient = e.httpClient || new f(this.logger), this.connectionState = 2, this.options = e, this.onreceive = null, this.onclose = null; } return t.prototype.start = function (t) { return t = t || S.Binary, d.a.isIn(t, S, "transferFormat"), this.logger.log(c.a.Debug, "Starting connection with transfer format '" + S[t] + "'."), 2 !== this.connectionState ? Promise.reject(new Error("Cannot start a connection that is not in the 'Disconnected' state.")) : (this.connectionState = 0, this.startPromise = this.startInternal(t), this.startPromise); }, t.prototype.send = function (t) { if (1 !== this.connectionState)
            throw new Error("Cannot send data if the connection is not in the 'Connected' State."); return this.transport.send(t); }, t.prototype.stop = function (t) { return M(this, void 0, void 0, function () { return B(this, function (e) { switch (e.label) {
            case 0: this.connectionState = 2, this.stopError = t, e.label = 1;
            case 1: return e.trys.push([1, 3, , 4]), [4, this.startPromise];
            case 2: return e.sent(), [3, 4];
            case 3: return e.sent(), [3, 4];
            case 4: return this.transport ? [4, this.transport.stop()] : [3, 6];
            case 5: e.sent(), this.transport = void 0, e.label = 6;
            case 6: return [2];
        } }); }); }, t.prototype.startInternal = function (t) { return M(this, void 0, void 0, function () { var e, n, r, o, i, s, a, u = this; return B(this, function (l) { switch (l.label) {
            case 0: e = this.baseUrl, this.accessTokenFactory = this.options.accessTokenFactory, l.label = 1;
            case 1: return l.trys.push([1, 12, , 13]), this.options.skipNegotiation ? this.options.transport !== m.WebSockets ? [3, 3] : (this.transport = this.constructTransport(m.WebSockets), [4, this.transport.connect(e, t)]) : [3, 5];
            case 2: return l.sent(), [3, 4];
            case 3: throw Error("Negotiation can only be skipped when using the WebSocket transport directly.");
            case 4: return [3, 11];
            case 5: n = null, r = 0, o = function () { var t; return B(this, function (o) { switch (o.label) {
                case 0: return [4, i.getNegotiationResponse(e)];
                case 1:
                    if (n = o.sent(), 2 === i.connectionState)
                        return [2, { value: void 0 }];
                    if (n.error)
                        throw Error(n.error);
                    if (n.ProtocolVersion)
                        throw Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                    return n.url && (e = n.url), n.accessToken && (t = n.accessToken, i.accessTokenFactory = function () { return t; }), r++, [2];
            } }); }, i = this, l.label = 6;
            case 6: return [5, o()];
            case 7:
                if ("object" == typeof (s = l.sent()))
                    return [2, s.value];
                l.label = 8;
            case 8:
                if (n.url && r < 100)
                    return [3, 6];
                l.label = 9;
            case 9:
                if (100 === r && n.url)
                    throw Error("Negotiate redirection limit exceeded.");
                return [4, this.createTransport(e, this.options.transport, n, t)];
            case 10: l.sent(), l.label = 11;
            case 11: return this.transport instanceof P && (this.features.inherentKeepAlive = !0), this.transport.onreceive = this.onreceive, this.transport.onclose = function (t) { return u.stopConnection(t); }, this.changeState(0, 1), [3, 13];
            case 12: throw a = l.sent(), this.logger.log(c.a.Error, "Failed to start the connection: " + a), this.connectionState = 2, this.transport = void 0, a;
            case 13: return [2];
        } }); }); }, t.prototype.getNegotiationResponse = function (t) { return M(this, void 0, void 0, function () { var e, n, r, o, i, s; return B(this, function (a) { switch (a.label) {
            case 0: return this.accessTokenFactory ? [4, this.accessTokenFactory()] : [3, 2];
            case 1: (r = a.sent()) && ((e = {}).Authorization = "Bearer " + r, n = e), a.label = 2;
            case 2: o = this.resolveNegotiateUrl(t), this.logger.log(c.a.Debug, "Sending negotiation request: " + o + "."), a.label = 3;
            case 3: return a.trys.push([3, 5, , 6]), [4, this.httpClient.post(o, { content: "", headers: n })];
            case 4:
                if (200 !== (i = a.sent()).statusCode)
                    throw Error("Unexpected status code returned from negotiate " + i.statusCode);
                return [2, JSON.parse(i.content)];
            case 5: throw s = a.sent(), this.logger.log(c.a.Error, "Failed to complete negotiation with the server: " + s), s;
            case 6: return [2];
        } }); }); }, t.prototype.createConnectUrl = function (t, e) { return e ? t + (-1 === t.indexOf("?") ? "?" : "&") + "id=" + e : t; }, t.prototype.createTransport = function (t, e, n, r) { return M(this, void 0, void 0, function () { var o, i, s, a, u, l, h; return B(this, function (f) { switch (f.label) {
            case 0: return o = this.createConnectUrl(t, n.connectionId), this.isITransport(e) ? (this.logger.log(c.a.Debug, "Connection was provided an instance of ITransport, using that directly."), this.transport = e, [4, this.transport.connect(o, r)]) : [3, 2];
            case 1: return f.sent(), this.changeState(0, 1), [2];
            case 2: i = n.availableTransports || [], s = 0, a = i, f.label = 3;
            case 3: return s < a.length ? (u = a[s], this.connectionState = 0, "number" != typeof (l = this.resolveTransport(u, e, r)) ? [3, 8] : (this.transport = this.constructTransport(l), n.connectionId ? [3, 5] : [4, this.getNegotiationResponse(t)])) : [3, 9];
            case 4: n = f.sent(), o = this.createConnectUrl(t, n.connectionId), f.label = 5;
            case 5: return f.trys.push([5, 7, , 8]), [4, this.transport.connect(o, r)];
            case 6: return f.sent(), this.changeState(0, 1), [2];
            case 7: return h = f.sent(), this.logger.log(c.a.Error, "Failed to start the transport '" + m[l] + "': " + h), this.connectionState = 2, n.connectionId = void 0, [3, 8];
            case 8: return s++, [3, 3];
            case 9: throw new Error("Unable to initialize any of the available transports.");
        } }); }); }, t.prototype.constructTransport = function (t) { switch (t) {
            case m.WebSockets:
                if (!this.options.WebSocket)
                    throw new Error("'WebSocket' is not supported in your environment.");
                return new x(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || !1, this.options.WebSocket);
            case m.ServerSentEvents:
                if (!this.options.EventSource)
                    throw new Error("'EventSource' is not supported in your environment.");
                return new A(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || !1, this.options.EventSource);
            case m.LongPolling: return new P(this.httpClient, this.accessTokenFactory, this.logger, this.options.logMessageContent || !1);
            default: throw new Error("Unknown transport: " + t + ".");
        } }, t.prototype.resolveTransport = function (t, e, n) { var r = m[t.transport]; if (null == r)
            this.logger.log(c.a.Debug, "Skipping transport '" + t.transport + "' because it is not supported by this client.");
        else {
            var o = t.transferFormats.map(function (t) { return S[t]; });
            if (function (t, e) { return !t || 0 != (e & t); }(e, r))
                if (o.indexOf(n) >= 0) {
                    if ((r !== m.WebSockets || this.options.WebSocket) && (r !== m.ServerSentEvents || this.options.EventSource))
                        return this.logger.log(c.a.Debug, "Selecting transport '" + m[r] + "'."), r;
                    this.logger.log(c.a.Debug, "Skipping transport '" + m[r] + "' because it is not supported in your environment.'");
                }
                else
                    this.logger.log(c.a.Debug, "Skipping transport '" + m[r] + "' because it does not support the requested transfer format '" + S[n] + "'.");
            else
                this.logger.log(c.a.Debug, "Skipping transport '" + m[r] + "' because it was disabled by the client.");
        } return null; }, t.prototype.isITransport = function (t) { return t && "object" == typeof t && "connect" in t; }, t.prototype.changeState = function (t, e) { return this.connectionState === t && (this.connectionState = e, !0); }, t.prototype.stopConnection = function (t) { this.transport = void 0, (t = this.stopError || t) ? this.logger.log(c.a.Error, "Connection disconnected with error '" + t + "'.") : this.logger.log(c.a.Information, "Connection disconnected."), this.connectionState = 2, this.onclose && this.onclose(t); }, t.prototype.resolveUrl = function (t) { if (0 === t.lastIndexOf("https://", 0) || 0 === t.lastIndexOf("http://", 0))
            return t; if ("undefined" == typeof window || !window || !window.document)
            throw new Error("Cannot resolve '" + t + "'."); var e = window.document.createElement("a"); return e.href = t, this.logger.log(c.a.Information, "Normalizing '" + t + "' to '" + e.href + "'."), e.href; }, t.prototype.resolveNegotiateUrl = function (t) { var e = t.indexOf("?"), n = t.substring(0, -1 === e ? t.length : e); return "/" !== n[n.length - 1] && (n += "/"), n += "negotiate", n += -1 === e ? "" : t.substring(e); }, t; }();
        var N = n(4), q = n(5), Y = "json", F = function () { function t() { this.name = Y, this.version = 1, this.transferFormat = S.Text; } return t.prototype.parseMessages = function (t, e) { if ("string" != typeof t)
            throw new Error("Invalid input for JSON hub protocol. Expected a string."); if (!t)
            return []; null === e && (e = N.a.instance); for (var n = [], r = 0, i = q.a.parse(t); r < i.length; r++) {
            var s = i[r], a = JSON.parse(s);
            if ("number" != typeof a.type)
                throw new Error("Invalid payload.");
            switch (a.type) {
                case o.Invocation:
                    this.isInvocationMessage(a);
                    break;
                case o.StreamItem:
                    this.isStreamItemMessage(a);
                    break;
                case o.Completion:
                    this.isCompletionMessage(a);
                    break;
                case o.Ping:
                case o.Close: break;
                default:
                    e.log(c.a.Information, "Unknown message type '" + a.type + "' ignored.");
                    continue;
            }
            n.push(a);
        } return n; }, t.prototype.writeMessage = function (t) { return q.a.write(JSON.stringify(t)); }, t.prototype.isInvocationMessage = function (t) { this.assertNotEmptyString(t.target, "Invalid payload for Invocation message."), void 0 !== t.invocationId && this.assertNotEmptyString(t.invocationId, "Invalid payload for Invocation message."); }, t.prototype.isStreamItemMessage = function (t) { if (this.assertNotEmptyString(t.invocationId, "Invalid payload for StreamItem message."), void 0 === t.item)
            throw new Error("Invalid payload for StreamItem message."); }, t.prototype.isCompletionMessage = function (t) { if (t.result && t.error)
            throw new Error("Invalid payload for Completion message."); !t.result && t.error && this.assertNotEmptyString(t.error, "Invalid payload for Completion message."), this.assertNotEmptyString(t.invocationId, "Invalid payload for Completion message."); }, t.prototype.assertNotEmptyString = function (t, e) { if ("string" != typeof t || "" === t)
            throw new Error(e); }, t; }(), H = function () { function t() { } return t.prototype.configureLogging = function (t) { return d.a.isRequired(t, "logging"), void 0 !== t.log ? this.logger = t : this.logger = new d.b(t), this; }, t.prototype.withUrl = function (t, e) { return d.a.isRequired(t, "url"), this.url = t, this.httpConnectionOptions = "object" == typeof e ? e : { transport: e }, this; }, t.prototype.withHubProtocol = function (t) { return d.a.isRequired(t, "protocol"), this.protocol = t, this; }, t.prototype.build = function () { var t = this.httpConnectionOptions || {}; if (void 0 === t.logger && (t.logger = this.logger), !this.url)
            throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection."); var e = new D(this.url, t); return E.create(e, this.logger || N.a.instance, this.protocol || new F); }, t; }();
        (() => { const t = (new H).withUrl("/hub").configureLogging(c.a.Information).build(); t.start().catch(t => console.log("Caught error: ", t)), t.on("showTitleCard", t => { console.log("Got showTitleCard message, model:", t), document.getElementById("title").innerText = t.title, document.getElementById("subTitle").innerText = t.subTitle, document.getElementById("titleCard").classList.add("visible"); }), t.on("hideTitleCard", () => { console.log("Got hideTitleCard message, hiding..."), document.getElementById("titleCard").classList.remove("visible"); }); })();
    }]);
//# sourceMappingURL=bundle.js.map