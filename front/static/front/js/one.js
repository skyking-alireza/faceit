! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) { var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.1",
        n = function(a, b) { return new n.fn.init(a, b) },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) { return b.toUpperCase() };
    n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function() { return e.call(this) }, get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this) }, pushStack: function(a) { var b = n.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b }, each: function(a) { return n.each(this, a) }, map: function(a) { return this.pushStack(n.map(this, function(b, c) { return a.call(b, c, b) })) }, slice: function() { return this.pushStack(e.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(a) { var b = this.length,
                c = +a + (0 > a ? b : 0); return this.pushStack(c >= 0 && b > c ? [this[c]] : []) }, end: function() { return this.prevObject || this.constructor() }, push: g, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function() { var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1; for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(a) { throw new Error(a) }, noop: function() {}, isFunction: function(a) { return "function" === n.type(a) }, isArray: Array.isArray || function(a) { return "array" === n.type(a) }, isWindow: function(a) { return null != a && a == a.window }, isNumeric: function(a) { var b = a && a.toString(); return !n.isArray(a) && b - parseFloat(b) + 1 >= 0 }, isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 }, isPlainObject: function(a) { var b; if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1; try { if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 } if (!l.ownFirst)
                for (b in a) return k.call(a, b); for (b in a); return void 0 === b || k.call(a, b) }, type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a }, globalEval: function(b) { b && n.trim(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) }, camelCase: function(a) { return a.replace(p, "ms-").replace(q, r) }, nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() }, each: function(a, b) { var c, d = 0; if (s(a)) { for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break; return a }, trim: function(a) { return null == a ? "" : (a + "").replace(o, "") }, makeArray: function(a, b) { var c = b || []; return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c }, inArray: function(a, b, c) { var d; if (b) { if (h) return h.call(b, a, c); for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c } return -1 }, merge: function(a, b) { var c = +b.length,
                d = 0,
                e = a.length; while (c > d) a[e++] = b[d++]; if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++]; return a.length = e, a }, grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e }, map: function(a, b, c) { var d, e, g = 0,
                h = []; if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e); return f.apply([], h) }, guid: 1, proxy: function(a, b) { var c, d, f; return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() { return a.apply(b || this, c.concat(e.call(arguments))) }, d.guid = a.guid = a.guid || n.guid++, d) : void 0 }, now: function() { return +new Date }, support: l }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) { i["[object " + b + "]"] = b.toLowerCase() });

    function s(a) { var b = !!a && "length" in a && a.length,
            c = n.type(a); return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a } var t = function(a) { var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) { for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1 },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M + "|[*])"), ATTR: new RegExp("^" + N), PSEUDO: new RegExp("^" + O), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) },
            da = function() { m() }; try { H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType } catch (ea) { H = { apply: E.length ? function(a, b) { G.apply(a, I.call(b)) } : function(a, b) { var c = a.length,
                        d = 0; while (a[c++] = b[d++]);
                    a.length = c - 1 } } }

        function fa(a, b, d, e) { var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9; if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d; if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) { if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) { if (9 === x) { if (!(j = b.getElementById(f))) return d; if (j.id === f) return d.push(j), d } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d } else { if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d; if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) { if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']"; while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b } if (s) try { return H.apply(d, w.querySelectorAll(s)), d } catch (y) {} finally { k === u && b.removeAttribute("id") } } } return i(a.replace(Q, "$1"), b, d, e) }

        function ga() { var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e } return b }

        function ha(a) { return a[u] = !0, a }

        function ia(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function ja(a, b) { var c = a.split("|"),
                e = c.length; while (e--) d.attrHandle[c[e]] = b }

        function ka(a, b) { var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C); if (d) return d; if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1 }

        function la(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function ma(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function na(a) { return ha(function(b) { return b = +b, ha(function(c, d) { var e, f = a([], c.length, b),
                        g = f.length; while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e])) }) }) }

        function oa(a) { return a && "undefined" != typeof a.getElementsByTagName && a }
        c = fa.support = {}, f = fa.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = fa.setDocument = function(a) { var b, e, g = a ? a.ownerDocument || a : v; return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ia(function(a) { return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) { return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length }), c.getById ? (d.find.ID = function(a, b) { if ("undefined" != typeof b.getElementById && p) { var c = b.getElementById(a); return c ? [c] : [] } }, d.filter.ID = function(a) { var b = a.replace(ba, ca); return function(a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) { var b = a.replace(ba, ca); return function(a) { var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0 } : function(a, b) { var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a); if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d } return f }, d.find.CLASS = c.getElementsByClassName && function(a, b) { return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) { o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]") }), ia(function(a) { var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:") })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) { var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode; return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d))) } : function(a, b) { if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1 }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) { if (a === b) return l = !0, 0; var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b]; if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0; if (e === f) return ka(a, b);
                c = a; while (c = c.parentNode) g.unshift(c);
                c = b; while (c = c.parentNode) h.unshift(c); while (g[d] === h[d]) d++; return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0 }, n) : n }, fa.matches = function(a, b) { return fa(a, null, null, b) }, fa.matchesSelector = function(a, b) { if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return fa(b, n, null, [a]).length > 0 }, fa.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a); var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0; return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null }, fa.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, fa.uniqueSort = function(a) { var b, d = [],
                e = 0,
                f = 0; if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) } return k = null, a }, e = fa.getText = function(a) { var b, c = "",
                d = 0,
                f = a.nodeType; if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b); return c }, d = fa.selectors = { cacheLength: 50, createPseudo: ha, match: W, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(a) { return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } }, filter: { TAG: function(a) { var b = a.replace(ba, ca).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } }, CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "") }) }, ATTR: function(a, b, c) { return function(d) { var e = fa.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } }, CHILD: function(a, b, c, d, e) { var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b; return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) { var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1; if (q) { if (f) { while (p) { m = b; while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling" } return !0 } if (o = [g ? q.firstChild : q.lastChild], g && s) { m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) { k[a] = [w, n, t]; break } } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0 } } }, PSEUDO: function(a, b) { var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a); return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) { var d, f = e(a, b),
                            g = f.length; while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]) }) : function(a) { return e(a, 0, c) }) : e } }, pseudos: { not: ha(function(a) { var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1")); return d[u] ? ha(function(a, b, c, e) { var f, g = d(a, null, e, []),
                            h = a.length; while (h--)(f = g[h]) && (a[h] = !(b[h] = f)) }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop() } }), has: ha(function(a) { return function(b) { return fa(a, b).length > 0 } }), contains: ha(function(a) { return a = a.replace(ba, ca),
                        function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }), lang: ha(function(a) { return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) { var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1 } }), target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id }, root: function(a) { return a === o }, focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) }, enabled: function(a) { return a.disabled === !1 }, disabled: function(a) { return a.disabled === !0 }, checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected }, selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 }, empty: function(a) { for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0 }, parent: function(a) { return !d.pseudos.empty(a) }, header: function(a) { return Y.test(a.nodeName) }, input: function(a) { return X.test(a.nodeName) }, button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b }, text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) }, first: na(function() { return [0] }), last: na(function(a, b) { return [b - 1] }), eq: na(function(a, b, c) { return [0 > c ? c + b : c] }), even: na(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }), odd: na(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }), lt: na(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }), gt: na(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a }) } }, d.pseudos.nth = d.pseudos.eq; for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = la(b); for (b in { submit: !0, reset: !0 }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) { var c, e, f, g, h, i, j, k = z[a + " "]; if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter; while (h) {
                (!c || (e = R.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(Q, " ") }), h = h.slice(c.length)); for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length)); if (!c) break } return b ? h.length : h ? fa.error(a) : z(a, i).slice(0) };

        function qa(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

        function ra(a, b, c) { var d = b.dir,
                e = c && "parentNode" === d,
                f = x++; return b.first ? function(b, c, f) { while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f) } : function(b, c, g) { var h, i, j, k = [w, f]; if (g) { while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0 } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) { if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2]; if (i[d] = k, k[2] = a(b, c, g)) return !0 } } }

        function sa(a) { return a.length > 1 ? function(b, c, d) { var e = a.length; while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0 } : a[0] }

        function ta(a, b, c) { for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c); return c }

        function ua(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g }

        function va(a, b, c, d, e, f) { return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) { var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q; if (c && c(q, r, h, i), d) { j = ua(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) } if (f) { if (e || a) { if (e) { j = [], k = r.length; while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i) }
                        k = r.length; while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l)) } } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r) }) }

        function wa(a) { for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) { return a === b }, h, !0), l = ra(function(a) { return J(b, a) > -1 }, h, !0), m = [function(a, c, d) { var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)); return b = null, e }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else { if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) { for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a)) }
                    m.push(c) }
            return sa(m) }

        function xa(a, b) { var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) { var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length; for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) { if (e && l) { o = 0, g || l.ownerDocument === n || (m(l), h = !p); while (q = a[o++])
                                if (q(l, g || n, h)) { i.push(l); break }
                            k && (w = y) }
                        c && ((l = !q && l) && r--, f && t.push(l)) } if (r += s, c && s !== r) { o = 0; while (q = b[o++]) q(t, u, g, h); if (f) { if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u) }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i) } return k && (w = y, j = v), t }; return c ? ha(f) : f } return h = fa.compile = function(a, b) { var c, d = [],
                e = [],
                f = A[a + " "]; if (!f) { b || (b = g(a)), c = b.length; while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a } return f }, i = fa.select = function(a, b, e, f) { var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a); if (e = e || [], 1 === o.length) { if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) { if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length) }
                i = W.needsContext.test(a) ? 0 : j.length; while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e; break } } } return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ia(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || ja("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ia(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || ja("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ia(function(a) { return null == a.getAttribute("disabled") }) || ja(K, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), fa }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains; var u = function(a, b, c) { var d = [],
                e = void 0 !== c; while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) { if (e && n(a).is(c)) break;
                    d.push(a) }
            return d },
        v = function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) { if (n.isFunction(b)) return n.grep(a, function(a, d) { return !!b.call(a, d, a) !== c }); if (b.nodeType) return n.grep(a, function(a) { return a === b !== c }); if ("string" == typeof b) { if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a) } return n.grep(a, function(a) { return n.inArray(a, b) > -1 !== c }) }
    n.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) { return 1 === a.nodeType })) }, n.fn.extend({ find: function(a) { var b, c = [],
                d = this,
                e = d.length; if ("string" != typeof a) return this.pushStack(n(a).filter(function() { for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0 })); for (b = 0; e > b; b++) n.find(a, d[b], c); return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c }, filter: function(a) { return this.pushStack(z(this, a || [], !1)) }, not: function(a) { return this.pushStack(z(this, a || [], !0)) }, is: function(a) { return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length } }); var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) { var e, f; if (!a) return this; if (c = c || A, "string" == typeof a) { if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a); if (e[1]) { if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]); return this } if (f = d.getElementById(e[2]), f && f.parentNode) { if (f.id !== e[2]) return A.find(a);
                    this.length = 1, this[0] = f } return this.context = d, this.selector = a, this } return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this)) };
    C.prototype = n.fn, A = n(d); var D = /^(?:parents|prev(?:Until|All))/,
        E = { children: !0, contents: !0, next: !0, prev: !0 };
    n.fn.extend({ has: function(a) { var b, c = n(a, this),
                d = c.length; return this.filter(function() { for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0 }) }, closest: function(a, b) { for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f) }, index: function(a) { return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(a, b) { return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b)))) }, addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) } });

    function F(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a }
    n.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return u(a, "parentNode") }, parentsUntil: function(a, b, c) { return u(a, "parentNode", c) }, next: function(a) { return F(a, "nextSibling") }, prev: function(a) { return F(a, "previousSibling") }, nextAll: function(a) { return u(a, "nextSibling") }, prevAll: function(a) { return u(a, "previousSibling") }, nextUntil: function(a, b, c) { return u(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return u(a, "previousSibling", c) }, siblings: function(a) { return v((a.parentNode || {}).firstChild, a) }, children: function(a) { return v(a.firstChild) }, contents: function(a) { return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes) } }, function(a, b) { n.fn[a] = function(c, d) { var e = n.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e) } }); var G = /\S+/g;

    function H(a) { var b = {}; return n.each(a.match(G) || [], function(a, c) { b[c] = !0 }), b }
    n.Callbacks = function(a) { a = "string" == typeof a ? H(a) : n.extend({}, a); var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() { for (e = a.once, d = b = !0; g.length; h = -1) { c = g.shift(); while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1) }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "") },
            j = { add: function() { return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) { n.each(b, function(b, c) { n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c) }) }(arguments), c && !b && i()), this }, remove: function() { return n.each(arguments, function(a, b) { var c; while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h-- }), this }, has: function(a) { return a ? n.inArray(a, f) > -1 : f.length > 0 }, empty: function() { return f && (f = []), this }, disable: function() { return e = g = [], f = c = "", this }, disabled: function() { return !f }, lock: function() { return e = !0, c || j.disable(), this }, locked: function() { return !!e }, fireWith: function(a, c) { return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this }, fire: function() { return j.fireWith(this, arguments), this }, fired: function() { return !!d } }; return j }, n.extend({ Deferred: function(a) { var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = { state: function() { return c }, always: function() { return e.done(arguments).fail(arguments), this }, then: function() { var a = arguments; return n.Deferred(function(c) { n.each(b, function(b, f) { var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() { var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments) }) }), a = null }).promise() }, promise: function(a) { return null != a ? n.extend(a, d) : d } },
                e = {}; return d.pipe = d.then, n.each(b, function(a, f) { var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith }), d.promise(e), a && a.call(e, e), e }, when: function(a) { var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) { return function(d) { b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } },
                i, j, k; if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f; return f || g.resolveWith(k, c), g.promise() } }); var I;
    n.fn.ready = function(a) { return n.ready.promise().done(a), this }, n.extend({ isReady: !1, readyWait: 1, holdReady: function(a) { a ? n.readyWait++ : n.ready(!0) }, ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready")))) } });

    function J() { d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K)) }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready()) }
    n.ready.promise = function(b) { if (!I)
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
        else { d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K); var c = !1; try { c = null == a.frameElement && d.documentElement } catch (e) {}
            c && c.doScroll && ! function f() { if (!n.isReady) { try { c.doScroll("left") } catch (b) { return a.setTimeout(f, 50) }
                    J(), n.ready() } }() } return I.promise(b) }, n.ready.promise(); var L; for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() { var a, b, c, e;
            c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e)) }),
        function() { var a = d.createElement("div");
            l.deleteExpando = !0; try { delete a.test } catch (b) { l.deleteExpando = !1 }
            a = null }(); var M = function(a) { var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1; return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) { if (void 0 === c && 1 === a.nodeType) { var d = "data-" + b.replace(O, "-$1").toLowerCase(); if (c = a.getAttribute(d), "string" == typeof c) { try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c } catch (e) {}
                n.data(a, b, c) } else c = void 0 } return c }

    function Q(a) { var b; for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0 }

    function R(a, b, d, e) { if (M(a)) { var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h; if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: n.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f } }

    function S(a, b, c) { if (M(a)) { var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando; if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !Q(d) : !n.isEmptyObject(d)) return }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0) } } }
    n.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(a) { return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a) }, data: function(a, b, c) { return R(a, b, c) }, removeData: function(a, b) { return S(a, b) }, _data: function(a, b, c) { return R(a, b, c, !0) }, _removeData: function(a, b) { return S(a, b, !0) } }), n.fn.extend({ data: function(a, b) { var c, d, e, f = this[0],
                    g = f && f.attributes; if (void 0 === a) { if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) { c = g.length; while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0) } return e } return "object" == typeof a ? this.each(function() { n.data(this, a) }) : arguments.length > 1 ? this.each(function() { n.data(this, a, b) }) : f ? P(f, a, n.data(f, a)) : void 0 }, removeData: function(a) { return this.each(function() { n.removeData(this, a) }) } }), n.extend({ queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0 }, dequeue: function(a, b) { b = b || "fx"; var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() { n.dequeue(a, b) }; "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire() }, _queueHooks: function(a, b) { var c = b + "queueHooks"; return n._data(a, c) || n._data(a, c, { empty: n.Callbacks("once memory").add(function() { n._removeData(a, b + "queue"), n._removeData(a, c) }) }) } }), n.fn.extend({ queue: function(a, b) { var c = 2; return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() { var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a) }) }, dequeue: function(a) { return this.each(function() { n.dequeue(this, a) }) }, clearQueue: function(a) { return this.queue(a || "fx", []) }, promise: function(a, b) { var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {--d || e.resolveWith(f, [f]) }; "string" != typeof a && (b = a, a = void 0), a = a || "fx"; while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h)); return h(), e.promise(b) } }),
        function() { var a;
            l.shrinkWrapBlocks = function() { if (null != a) return a;
                a = !1; var b, c, e; return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0 } }(); var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) { return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a) };

    function X(a, b, c, d) { var e, f = 1,
            g = 20,
            h = d ? function() { return d.cur() } : function() { return n.css(a, b, "") },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b)); if (k && k[3] !== j) { j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g) } return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e } var Y = function(a, b, c, d, e, f, g) { var h = 0,
                i = a.length,
                j = null == c; if ("object" === n.type(c)) { e = !0; for (h in c) Y(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(n(a), c) })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c))); return e ? a : j ? b.call(a) : i ? b(a[0], c) : f },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) { var b = ba.split("|"),
            c = a.createDocumentFragment(); if (c.createElement)
            while (b.length) c.createElement(b.pop()); return c }! function() { var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando) }(); var da = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) { var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0; if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b)); return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f }

    function fa(a, b) { for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval")) } var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) { Z.test(a.type) && (a.defaultChecked = a.checked) }

    function ja(a, b, c, d, e) { for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) { i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0]; while (f--) i = i.lastChild; if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) { g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length; while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k) }
            n.merge(q, i.childNodes), i.textContent = ""; while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0; while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) { f = 0; while (g = i[f++]) _.test(g.type || "") && c.push(g) } return i = null, p }! function() { var b, c, e = d.createElement("div"); for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null }(); var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() { return !0 }

    function qa() { return !1 }

    function ra() { try { return d.activeElement } catch (a) {} }

    function sa(a, b, c, d, e, f) { var g, h; if ("object" == typeof b) { "string" != typeof c && (d = d || c, c = void 0); for (h in b) sa(a, h, c, d, b[h], f); return a } if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
        else if (!e) return a; return 1 === f && (g = e, e = function(a) { return n().off(a), g.apply(this, arguments) }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() { n.event.add(this, b, e, d, c) }) }
    n.event = { global: {}, add: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a); if (r) { c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) { return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(G) || [""], h = b.length; while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null } }, remove: function(a, b, c, d, e) { var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a); if (r && (k = r.events)) { b = (b || "").match(G) || [""], j = b.length; while (j--)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) { l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o]) } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events")) } }, trigger: function(b, c, e, f) { var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : []; if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) { if (!f && !l.noBubble && !n.isWindow(e)) { for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a) }
                o = 0; while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault()); if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) { m = e[h], m && (e[h] = null), n.event.triggered = q; try { e[q]() } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m) } return b.result } }, dispatch: function(a) { a = n.event.fix(a); var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {}; if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = n.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, c = 0; while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.rnamespace || a.rnamespace.test(g.namespace)) && (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result } }, handlers: function(a, b) { var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target; if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) { for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({ elem: i, handlers: d }) }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g }, fix: function(a) { if (a[n.expando]) return a; var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length; while (b--) c = e[b], a[c] = g[c]; return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a }, props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(a, b) { var c, e, f, g = b.button,
                    h = b.fromElement; return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a } }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== ra() && this.focus) try { return this.focus(), !1 } catch (a) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === ra() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(a) { return n.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } }, simulate: function(a, b, c) { var d = n.extend(new n.Event, c, { type: a, isSimulated: !0 });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault() } }, n.removeEvent = d.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c) } : function(a, b, c) { var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c)) }, n.Event = function(a, b) { return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b) }, n.Event.prototype = { constructor: n.Event, isDefaultPrevented: qa, isPropagationStopped: qa, isImmediatePropagationStopped: qa, preventDefault: function() { var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1) }, stopPropagation: function() { var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0) }, stopImmediatePropagation: function() { var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation() } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) { n.event.special[a] = { delegateType: b, bindType: b, handle: function(a) { var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj; return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c } } }), l.submit || (n.event.special.submit = { setup: function() { return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) { var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) { a._submitBubble = !0 }), n._data(c, "submit", !0)) }) }, postDispatch: function(a) { a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a)) }, teardown: function() { return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit") } }), l.change || (n.event.special.change = { setup: function() { return ka.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (n.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._justChanged = !0) }), n.event.add(this, "click._change", function(a) { this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a) })), !1) : void n.event.add(this, "beforeactivate._change", function(a) { var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {!this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a) }), n._data(b, "change", !0)) }) }, handle: function(a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() { return n.event.remove(this, "._change"), !ka.test(this.nodeName) } }), l.focusin || n.each({ focus: "focusin", blur: "focusout" }, function(a, b) { var c = function(a) { n.event.simulate(b, a.target, n.event.fix(a)) };
        n.event.special[b] = { setup: function() { var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1) }, teardown: function() { var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b)) } } }), n.fn.extend({ on: function(a, b, c, d) { return sa(this, a, b, c, d) }, one: function(a, b, c, d) { return sa(this, a, b, c, d, 1) }, off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = qa), this.each(function() { n.event.remove(this, a, c, b) }) }, trigger: function(a, b) { return this.each(function() { n.event.trigger(a, b, this) }) }, triggerHandler: function(a, b) { var c = this[0]; return c ? n.event.trigger(a, b, c, !0) : void 0 } }); var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) { return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function Da(a) { return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a }

    function Ea(a) { var b = ya.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function Fa(a, b) { if (1 === b.nodeType && n.hasData(a)) { var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events; if (h) { delete g.handle, g.events = {}; for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d]) }
            g.data && (g.data = n.extend({}, g.data)) } }

    function Ga(a, b) { var c, d, e; if (1 === b.nodeType) { if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) { e = n._data(b); for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando) } "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue) } }

    function Ha(a, b, c, d) { b = f.apply([], b); var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q); if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) { var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d) }); if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) { for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m); if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null } return a }

    function Ia(a, b, c) { for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d)); return a }
    n.extend({ htmlPrefilter: function(a) { return a.replace(va, "<$1></$2>") }, clone: function(a, b, c) { var d, e, f, g, h, i = n.contains(a.ownerDocument, a); if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]); if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                else Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f }, cleanData: function(a, b) { for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) { if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f)) } } }), n.fn.extend({ domManip: Ha, detach: function(a) { return Ia(this, a, !0) }, remove: function(a) { return Ia(this, a) }, text: function(a) { return Y(this, function(a) { return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a)) }, null, a, arguments.length) }, append: function() { return Ha(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ca(this, a);
                    b.appendChild(a) } }) }, prepend: function() { return Ha(this, arguments, function(a) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild) } }) }, before: function() { return Ha(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) }, after: function() { return Ha(this, arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) }, empty: function() { for (var a, b = 0; null != (a = this[b]); b++) { 1 === a.nodeType && n.cleanData(ea(a, !1)); while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0) } return this }, clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return n.clone(this, a, b) }) }, html: function(a) { return Y(this, function(a) { var b = this[0] || {},
                    c = 0,
                    d = this.length; if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0; if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) { a = n.htmlPrefilter(a); try { for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0 } catch (e) {} }
                b && this.empty().append(a) }, null, a, arguments.length) }, replaceWith: function() { var a = []; return Ha(this, arguments, function(b) { var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this)) }, a) } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { n.fn[a] = function(a) { for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get()); return this.pushStack(e) } }); var Ja, Ka = { HTML: "block", BODY: "block" };

    function La(a, b) { var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display"); return c.detach(), d }

    function Ma(a) { var b = d,
            c = Ka[a]; return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c } var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) { var e, f, g = {}; for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []); for (f in b) a.style[f] = g[f]; return e },
        Qa = d.documentElement;! function() { var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div"); if (j.style) { j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, { reliableHiddenOffsets: function() { return null == b && k(), f }, boxSizingReliable: function() { return null == b && k(), e }, pixelMarginRight: function() { return null == b && k(), c }, pixelPosition: function() { return null == b && k(), b }, reliableMarginRight: function() { return null == b && k(), g }, reliableMarginLeft: function() { return null == b && k(), h } });

            function k() { var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || { width: "4px" }).width, j.style.marginRight = "50%", c = "4px" === (l || { marginRight: "4px" }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i) } } }(); var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) { var c = b.ownerDocument.defaultView; return c && c.opener || (c = a), c.getComputedStyle(b) }, Sa = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + "" }) : Qa.currentStyle && (Ra = function(a) { return a.currentStyle }, Sa = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" });

    function Ua(a, b) { return { get: function() { return a() ? void delete this.get : (this.get = b).apply(this, arguments) } } } var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = { position: "absolute", visibility: "hidden", display: "block" },
        $a = { letterSpacing: "0", fontWeight: "400" },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) { if (a in ab) return a; var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length; while (c--)
            if (a = _a[c] + b, a in ab) return a }

    function cb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }

    function db(a, b, c) { var d = Ya.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

    function eb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e))); return g }

    function fb(b, c, e) { var f = !0,
            g = "width" === c ? b.offsetWidth : b.offsetHeight,
            h = Ra(b),
            i = l.boxSizing && "border-box" === n.css(b, "boxSizing", !1, h); if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 0 >= g || null == g) { if (g = Sa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Oa.test(g)) return g;
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0 } return g + eb(b, c, e || (i ? "border" : "content"), f, h) + "px" }
    n.extend({ cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Sa(a, "opacity"); return "" === c ? "1" : c } } } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": l.cssFloat ? "cssFloat" : "styleFloat" }, style: function(a, b, c, d) { if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) { var e, f, g, h = n.camelCase(b),
                    i = a.style; if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b]; if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) {} } }, css: function(a, b, c, d) { var e, f, g, h = n.camelCase(b); return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f } }), n.each(["height", "width"], function(a, b) { n.cssHooks[b] = { get: function(a, c, d) { return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() { return fb(a, b, d) }) : fb(a, b, d) : void 0 }, set: function(a, c, d) { var e = d && Ra(a); return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0) } } }), l.opacity || (n.cssHooks.opacity = { get: function(a, b) { return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" }, set: function(a, b) { var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e) } }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) { return b ? Pa(a, { display: "inline-block" }, Sa, [a, "marginRight"]) : void 0 }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) { return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, { marginLeft: 0 }, function() { return a.getBoundingClientRect().left }) : 0)) + "px" : void 0 }), n.each({ margin: "", padding: "", border: "Width" }, function(a, b) { n.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Na.test(a) || (n.cssHooks[a + b].set = db) }), n.fn.extend({ css: function(a, b) { return Y(this, function(a, b, c) { var d, e, f = {},
                    g = 0; if (n.isArray(b)) { for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d); return f } return void 0 !== c ? n.style(a, b, c) : n.css(a, b) }, a, b, arguments.length > 1) }, show: function() { return cb(this, !0) }, hide: function() { return cb(this) }, toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { W(this) ? n(this).show() : n(this).hide() }) } });

    function gb(a, b, c, d, e) { return new gb.prototype.init(a, b, c, d, e) }
    n.Tween = gb, gb.prototype = { constructor: gb, init: function(a, b, c, d, e, f) { this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px") }, cur: function() { var a = gb.propHooks[this.prop]; return a && a.get ? a.get(this) : gb.propHooks._default.get(this) }, run: function(a) { var b, c = gb.propHooks[this.prop]; return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this } }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = { _default: { get: function(a) { var b; return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) }, set: function(a) { n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit) } } }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, n.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 }, _default: "swing" }, n.fx = gb.prototype.init, n.fx.step = {}; var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() { return a.setTimeout(function() { hb = void 0 }), hb = n.now() }

    function mb(a, b) { var c, d = { height: a },
            e = 0; for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a; return b && (d.opacity = d.width = a), d }

    function nb(a, b, c) { for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d }

    function ob(a, b, c) { var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, m.always(function() { m.always(function() { h.unqueued--, n.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] })); for (d in b)
            if (e = b[d], jb.exec(e)) { if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) { if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0 }
                o[d] = r && r[d] || n.style(a, d) } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else { r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() { n(a).hide() }), m.done(function() { var b;
                n._removeData(a, "fxshow"); for (b in o) n.style(a, b, o[b]) }); for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0)) } }

    function pb(a, b) { var c, d, e, f, g; for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e }

    function qb(a, b, c) { var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {}, easing: n.easing._default }, c), originalProperties: b, originalOptions: c, startTime: hb || lb(), duration: c.duration, tweens: [], createTween: function(b, c) { var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d }, stop: function(b) { var c = 0,
                        d = b ? j.tweens.length : 0; if (e) return this; for (e = !0; d > c; c++) j.tweens[c].run(1); return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this } }),
            k = j.props; for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always) }
    n.Animation = n.extend(qb, { tweeners: { "*": [function(a, b) { var c = this.createTween(a, b); return X(c.elem, a, U.exec(b), c), c }] }, tweener: function(a, b) { n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b) }, prefilters: [ob], prefilter: function(a, b) { b ? qb.prefilters.unshift(a) : qb.prefilters.push(a) } }), n.speed = function(a, b, c) { var d = a && "object" == typeof a ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b }; return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() { n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue) }, d }, n.fn.extend({ fadeTo: function(a, b, c, d) { return this.filter(W).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) }, animate: function(a, b, c, d) { var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() { var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0) }; return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g) }, stop: function(a, b, c) { var d = function(a) { var b = a.stop;
                    delete a.stop, b(c) }; return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() { var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this); if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]); for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && n.dequeue(this, a) }) }, finish: function(a) { return a !== !1 && (a = a || "fx"), this.each(function() { var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0; for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1)); for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish }) } }), n.each(["toggle", "show", "hide"], function(a, b) { var c = n.fn[b];
            n.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e) } }), n.each({ slideDown: mb("show"), slideUp: mb("hide"), slideToggle: mb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { n.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), n.timers = [], n.fx.tick = function() { var a, b = n.timers,
                c = 0; for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), hb = void 0 }, n.fx.timer = function(a) { n.timers.push(a), a() ? n.fx.start() : n.timers.pop() }, n.fx.interval = 13, n.fx.start = function() { ib || (ib = a.setInterval(n.fx.tick, n.fx.interval)) }, n.fx.stop = function() { a.clearInterval(ib), ib = null }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function(b, c) { return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) { var e = a.setTimeout(c, b);
                d.stop = function() { a.clearTimeout(e) } }) },
        function() { var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value }(); var rb = /\r/g;
    n.fn.extend({ val: function(a) { var b, c, d, e = this[0]; { if (arguments.length) return d = n.isFunction(a), this.each(function(c) { var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) { return null == a ? "" : a + "" })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e)) }); if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c) } } }), n.extend({ valHooks: { option: { get: function(a) { var b = n.find.attr(a, "value"); return null != b ? b : n.trim(n.text(a)) } }, select: { get: function(a) { for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) { if (b = n(c).val(), f) return b;
                            g.push(b) }
                    return g }, set: function(a, b) { var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length; while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e } } } }), n.each(["radio", "checkbox"], function() { n.valHooks[this] = { set: function(a, b) { return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0 } }, l.checkOn || (n.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) }); var sb, tb, ub = n.expr.attrHandle,
        vb = /^(?:checked|selected)$/i,
        wb = l.getSetAttribute,
        xb = l.input;
    n.fn.extend({ attr: function(a, b) { return Y(this, n.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { n.removeAttr(this, a) }) } }), n.extend({ attr: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? tb : sb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d)) }, attrHooks: { type: { set: function(a, b) { if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }, removeAttr: function(a, b) { var c, d, e = 0,
                f = b && b.match(G); if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? xb && wb || !vb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(wb ? c : d) } }), tb = { set: function(a, b, c) { return b === !1 ? n.removeAttr(a, c) : xb && wb || !vb.test(c) ? a.setAttribute(!wb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c } }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) { var c = ub[b] || n.find.attr;
        xb && wb || !vb.test(b) ? ub[b] = function(a, b, d) { var e, f; return d || (f = ub[b], ub[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ub[b] = f), e } : ub[b] = function(a, b, c) { return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null } }), xb && wb || (n.attrHooks.value = { set: function(a, b, c) { return n.nodeName(a, "input") ? void(a.defaultValue = b) : sb && sb.set(a, b, c) } }), wb || (sb = { set: function(a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, ub.id = ub.name = ub.coords = function(a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, n.valHooks.button = { get: function(a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: sb.set }, n.attrHooks.contenteditable = { set: function(a, b, c) { sb.set(a, "" === b ? !1 : b, c) } }, n.each(["width", "height"], function(a, b) { n.attrHooks[b] = { set: function(a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), l.style || (n.attrHooks.style = { get: function(a) { return a.style.cssText || void 0 }, set: function(a, b) { return a.style.cssText = b + "" } }); var yb = /^(?:input|select|textarea|button|object)$/i,
        zb = /^(?:a|area)$/i;
    n.fn.extend({ prop: function(a, b) { return Y(this, n.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return a = n.propFix[a] || a, this.each(function() { try { this[a] = void 0, delete this[a] } catch (b) {} }) } }), n.extend({ prop: function(a, b, c) { var d, e, f = a.nodeType; if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = n.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : yb.test(a.nodeName) || zb.test(a.nodeName) && a.href ? 0 : -1 } } }, propFix: { "for": "htmlFor", "class": "className" } }), l.hrefNormalized || n.each(["href", "src"], function(a, b) { n.propHooks[b] = { get: function(a) { return a.getAttribute(b, 4) } } }), l.optSelected || (n.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { n.propFix[this.toLowerCase()] = this }), l.enctype || (n.propFix.enctype = "encoding"); var Ab = /[\t\r\n\f]/g;

    function Bb(a) { return n.attr(a, "class") || "" }
    n.fn.extend({ addClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (n.isFunction(a)) return this.each(function(b) { n(this).addClass(a.call(this, b, Bb(this))) }); if ("string" == typeof a && a) { b = a.match(G) || []; while (c = this[i++])
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) { g = 0; while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h) } } return this }, removeClass: function(a) { var b, c, d, e, f, g, h, i = 0; if (n.isFunction(a)) return this.each(function(b) { n(this).removeClass(a.call(this, b, Bb(this))) }); if (!arguments.length) return this.attr("class", ""); if ("string" == typeof a && a) { b = a.match(G) || []; while (c = this[i++])
                    if (e = Bb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Ab, " ")) { g = 0; while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h) } } return this }, toggleClass: function(a, b) { var c = typeof a; return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) { n(this).toggleClass(a.call(this, c, Bb(this), b), b) }) : this.each(function() { var b, d, e, f; if ("string" === c) { d = 0, e = n(this), f = a.match(G) || []; while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b) } else(void 0 === a || "boolean" === c) && (b = Bb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || "")) }) }, hasClass: function(a) { var b, c, d = 0;
            b = " " + a + " "; while (c = this[d++])
                if (1 === c.nodeType && (" " + Bb(c) + " ").replace(Ab, " ").indexOf(b) > -1) return !0;
            return !1 } }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { n.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), n.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) } }); var Cb = a.location,
        Db = n.now(),
        Eb = /\?/,
        Fb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) { if (a.JSON && a.JSON.parse) return a.JSON.parse(b + ""); var c, d = null,
            e = n.trim(b + ""); return e && !n.trim(e.replace(Fb, function(a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : n.error("Invalid JSON: " + b) }, n.parseXML = function(b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c }; var Gb = /#.*$/,
        Hb = /([?&])_=[^&]*/,
        Ib = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Jb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Kb = /^(?:GET|HEAD)$/,
        Lb = /^\/\//,
        Mb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Nb = {},
        Ob = {},
        Pb = "*/".concat("*"),
        Qb = Cb.href,
        Rb = Mb.exec(Qb.toLowerCase()) || [];

    function Sb(a) { return function(b, c) { "string" != typeof b && (c = b, b = "*"); var d, e = 0,
                f = b.toLowerCase().match(G) || []; if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c) } }

    function Tb(a, b, c, d) { var e = {},
            f = a === Ob;

        function g(h) { var i; return e[h] = !0, n.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i } return g(b.dataTypes[0]) || !e["*"] && g("*") }

    function Ub(a, b) { var c, d, e = n.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && n.extend(!0, a, c), a }

    function Vb(a, b, c) { var d, e, f, g, h = a.contents,
            i = a.dataTypes; while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type")); if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) { i.unshift(g); break }
        if (i[0] in c) f = i[0];
        else { for (g in c) { if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break }
                d || (d = g) }
            f = f || d } return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0 }

    function Wb(a, b, c, d) { var e, f, g, h, i, j = {},
            k = a.dataTypes.slice(); if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift(); while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) { if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } } } return { state: "success", data: b } }
    n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Qb, type: "GET", isLocal: Jb.test(Rb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Pb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(a, b) { return b ? Ub(Ub(a, n.ajaxSettings), b) : Ub(n.ajaxSettings, a) }, ajaxPrefilter: Sb(Nb), ajaxTransport: Sb(Ob), ajax: function(b, c) { "object" == typeof b && (c = b, b = void 0), c = c || {}; var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = { readyState: 0, getResponseHeader: function(a) { var b; if (2 === u) { if (!k) { k = {}; while (b = Ib.exec(g)) k[b[1].toLowerCase()] = b[2] }
                            b = k[a.toLowerCase()] } return null == b ? null : b }, getAllResponseHeaders: function() { return 2 === u ? g : null }, setRequestHeader: function(a, b) { var c = a.toLowerCase(); return u || (a = t[c] = t[c] || a, s[a] = b), this }, overrideMimeType: function(a) { return u || (l.mimeType = a), this }, statusCode: function(a) { var b; if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this }, abort: function(a) { var b = a || v; return j && j.abort(b), y(0, b), this } }; if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Qb) + "").replace(Gb, "").replace(Lb, Rb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Mb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Rb[1] && d[2] === Rb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Rb[3] || ("http:" === Rb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Tb(Nb, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Kb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Eb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Hb.test(f) ? f.replace(Hb, "$1_=" + Db++) : f + (Eb.test(f) ? "&" : "?") + "_=" + Db++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Pb + "; q=0.01" : "") : l.accepts["*"]); for (e in l.headers) w.setRequestHeader(e, l.headers[e]); if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
            v = "abort"; for (e in { success: 1, error: 1, complete: 1 }) w[e](l[e]); if (j = Tb(Ob, l, c, w)) { if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() { w.abort("timeout") }, l.timeout)); try { u = 1, j.send(s, y) } catch (x) { if (!(2 > u)) throw x;
                    y(-1, x) } } else y(-1, "No Transport");

            function y(b, c, d, e) { var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Vb(l, w, d)), v = Wb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, (b || !y) && (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop"))) } return w }, getJSON: function(a, b, c) { return n.get(a, b, c, "json") }, getScript: function(a, b) { return n.get(a, void 0, b, "script") } }), n.each(["get", "post"], function(a, b) { n[b] = function(a, c, d, e) { return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({ url: a, type: b, dataType: e, data: c, success: d }, n.isPlainObject(a) && a)) } }), n._evalUrl = function(a) { return n.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 }) }, n.fn.extend({ wrapAll: function(a) { if (n.isFunction(a)) return this.each(function(b) { n(this).wrapAll(a.call(this, b)) }); if (this[0]) { var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this) } return this }, wrapInner: function(a) { return n.isFunction(a) ? this.each(function(b) { n(this).wrapInner(a.call(this, b)) }) : this.each(function() { var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a) }) }, wrap: function(a) { var b = n.isFunction(a); return this.each(function(c) { n(this).wrapAll(b ? a.call(this, c) : a) }) }, unwrap: function() { return this.parent().each(function() { n.nodeName(this, "body") || n(this).replaceWith(this.childNodes) }).end() } });

    function Xb(a) { return a.style && a.style.display || n.css(a, "display") }

    function Yb(a) { while (a && 1 === a.nodeType) { if ("none" === Xb(a) || "hidden" === a.type) return !0;
            a = a.parentNode } return !1 }
    n.expr.filters.hidden = function(a) { return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Yb(a) }, n.expr.filters.visible = function(a) { return !n.expr.filters.hidden(a) }; var Zb = /%20/g,
        $b = /\[\]$/,
        _b = /\r?\n/g,
        ac = /^(?:submit|button|image|reset|file)$/i,
        bc = /^(?:input|select|textarea|keygen)/i;

    function cc(a, b, c, d) { var e; if (n.isArray(b)) n.each(b, function(b, e) { c || $b.test(a) ? d(a, e) : cc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) cc(a + "[" + e + "]", b[e], c, d) }
    n.param = function(a, b) { var c, d = [],
            e = function(a, b) { b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) }; if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) cc(c, a[c], b, e); return d.join("&").replace(Zb, "+") }, n.fn.extend({ serialize: function() { return n.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = n.prop(this, "elements"); return a ? n.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !n(this).is(":disabled") && bc.test(this.nodeName) && !ac.test(a) && (this.checked || !Z.test(a)) }).map(function(a, b) { var c = n(this).val(); return null == c ? null : n.isArray(c) ? n.map(c, function(a) { return { name: b.name, value: a.replace(_b, "\r\n") } }) : { name: b.name, value: c.replace(_b, "\r\n") } }).get() } }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() { return this.isLocal ? hc() : d.documentMode > 8 ? gc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && gc() || hc() } : gc; var dc = 0,
        ec = {},
        fc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() { for (var a in ec) ec[a](void 0, !0) }), l.cors = !!fc && "withCredentials" in fc, fc = l.ajax = !!fc, fc && n.ajaxTransport(function(b) { if (!b.crossDomain || l.cors) { var c; return { send: function(d, e) { var f, g = b.xhr(),
                        h = ++dc; if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest"); for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) { var f, i, j; if (c && (d || 4 === g.readyState))
                            if (delete ec[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else { j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText); try { i = g.statusText } catch (k) { i = "" }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404 }
                        j && e(f, i, j, g.getAllResponseHeaders()) }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = ec[h] = c : c() }, abort: function() { c && c(void 0, !0) } } } });

    function gc() { try { return new a.XMLHttpRequest } catch (b) {} }

    function hc() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }
    n.ajaxPrefilter(function(a) { a.crossDomain && (a.contents.script = !1) }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(a) { return n.globalEval(a), a } } }), n.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), n.ajaxTransport("script", function(a) { if (a.crossDomain) { var b, c = d.head || n("head")[0] || d.documentElement; return { send: function(e, f) { b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success")) }, c.insertBefore(b, c.firstChild) }, abort: function() { b && b.onload(void 0, !0) } } } }); var ic = [],
        jc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = ic.pop() || n.expando + "_" + Db++; return this[a] = !0, a } }), n.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (jc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && jc.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(jc, "$1" + e) : b.jsonp !== !1 && (b.url += (Eb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || n.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, ic.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), l.createHTMLDocument = function() { if (!d.implementation.createHTMLDocument) return !1; var a = d.implementation.createHTMLDocument(""); return a.body.innerHTML = "<form></form><form></form>", 2 === a.body.childNodes.length }(), n.parseHTML = function(a, b, c) { if (!a || "string" != typeof a) return null; "boolean" == typeof b && (c = b, b = !1), b = b || (l.createHTMLDocument ? d.implementation.createHTMLDocument("") : d); var e = x.exec(a),
            f = !c && []; return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes)) }; var kc = n.fn.load;
    n.fn.load = function(a, b, c) { if ("string" != typeof a && kc) return kc.apply(this, arguments); var d, e, f, g = this,
            h = a.indexOf(" "); return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function(a) { f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a) }).always(c && function(a, b) { g.each(function() { c.apply(g, f || [a.responseText, b, a]) }) }), this }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { n.fn[b] = function(a) { return this.on(b, a) } }), n.expr.filters.animated = function(a) { return n.grep(n.timers, function(b) { return a === b.elem }).length };

    function lc(a) { return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 }
    n.offset = { setOffset: function(a, b, c) { var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {}; "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m) } }, n.fn.extend({ offset: function(a) { if (arguments.length) return void 0 === a ? this : this.each(function(b) { n.offset.setOffset(this, a, b) }); var b, c, d = { top: 0, left: 0 },
                e = this[0],
                f = e && e.ownerDocument; if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = lc(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d }, position: function() { if (this[0]) { var a, b, c = { top: 0, left: 0 },
                    d = this[0]; return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - n.css(d, "marginTop", !0), left: b.left - c.left - n.css(d, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { var a = this.offsetParent; while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent; return a || Qa }) } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) { var c = /Y/.test(b);
        n.fn[a] = function(d) { return Y(this, function(a, d, e) { var f = lc(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) } }), n.each(["top", "left"], function(a, b) { n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) { return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0 }) }), n.each({ Height: "height", Width: "width" }, function(a, b) { n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) { n.fn[d] = function(d, e) { var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border"); return Y(this, function(b, c, d) { var e; return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g) }, b, f ? d : void 0, f, null) } }) }), n.fn.extend({ bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } }), n.fn.size = function() { return this.length }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return n }); var mc = a.jQuery,
        nc = a.$; return n.noConflict = function(b) { return a.$ === n && (a.$ = nc), b && a.jQuery === n && (a.jQuery = mc), n }, b || (a.jQuery = a.$ = n), n });
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) { "use strict"; var b = a.fn.jquery.split(" ")[0].split("."); if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), + function(a) { "use strict";

    function b() { var a = document.createElement("bootstrap"),
            b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" }; for (var c in b)
            if (void 0 !== a.style[c]) return { end: b[c] };
        return !1 }
    a.fn.emulateTransitionEnd = function(b) { var c = !1,
            d = this;
        a(this).one("bsTransitionEnd", function() { c = !0 }); var e = function() { c || a(d).trigger(a.support.transition.end) }; return setTimeout(e, b), this }, a(function() { a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function(b) { if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments) } }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var c = a(this),
                e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c) }) } var c = '[data-dismiss="alert"]',
        d = function(b) { a(b).on("click", c, this.close) };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function(b) {
        function c() { g.detach().trigger("closed.bs.alert").remove() } var e = a(this),
            f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, "")); var g = a("#" === f ? [] : f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c()) }; var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function() { return a.fn.alert = e, this }, a(document).on("click.bs.alert.data-api", c, d.prototype.close) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.button"),
                f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b) }) } var c = function(b, d) { this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1 };
    c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function(b) { var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function() { d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1)) }, this), 0) }, c.prototype.toggle = function() { var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]'); if (b.length) { var c = this.$element.find("input"); "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change") } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active") }; var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function() { return a.fn.button = d, this }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) { var d = a(c.target).closest(".btn");
        b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus")) }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) { a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type)) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
                g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle() }) } var c = function(b, c) { this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this)) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function(a) { if (!/input|textarea/i.test(a.target.tagName)) { switch (a.which) {
                case 37:
                    this.prev(); break;
                case 39:
                    this.next(); break;
                default:
                    return }
            a.preventDefault() } }, c.prototype.cycle = function(b) { return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this }, c.prototype.getItemIndex = function(a) { return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active) }, c.prototype.getItemForDirection = function(a, b) { var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1; if (d && !this.options.wrap) return b; var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length; return this.$items.eq(f) }, c.prototype.to = function(a) { var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active")); if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() { b.to(a) }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a)) }, c.prototype.pause = function(b) { return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this }, c.prototype.next = function() { if (!this.sliding) return this.slide("next") }, c.prototype.prev = function() { if (!this.sliding) return this.slide("prev") }, c.prototype.slide = function(b, d) { var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this; if (f.hasClass("active")) return this.sliding = !1; var j = f[0],
            k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h }); if (this.$element.trigger(k), !k.isDefaultPrevented()) { if (this.sliding = !0, g && this.pause(), this.$indicators.length) { this.$indicators.find(".active").removeClass("active"); var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active") } var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h }); return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function() { f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function() { i.$element.trigger(m) }, 0) }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this } }; var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function() { return a.fn.carousel = d, this }; var e = function(c) { var d, e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, "")); if (f.hasClass("carousel")) { var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault() } };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function() { a('[data-ride="carousel"]').each(function() { var c = a(this);
            b.call(c, c.data()) }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""); return a(d) }

    function c(b) { return this.each(function() { var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]() }) } var d = function(b, c) { this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle() };
    d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function() { var a = this.$element.hasClass("width"); return a ? "width" : "height" }, d.prototype.show = function() { if (!this.transitioning && !this.$element.hasClass("in")) { var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"); if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) { var f = a.Event("show.bs.collapse"); if (this.$element.trigger(f), !f.isDefaultPrevented()) { e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null)); var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1; var h = function() { this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse") }; if (!a.support.transition) return h.call(this); var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]) } } } }, d.prototype.hide = function() { if (!this.transitioning && this.$element.hasClass("in")) { var b = a.Event("hide.bs.collapse"); if (this.$element.trigger(b), !b.isDefaultPrevented()) { var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1; var e = function() { this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse") }; return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this) } } }, d.prototype.toggle = function() { this[this.$element.hasClass("in") ? "hide" : "show"]() }, d.prototype.getParent = function() { return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) { var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e) }, this)).end() }, d.prototype.addAriaAndCollapsedClass = function(a, b) { var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c) }; var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function() { return a.fn.collapse = e, this }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) { var e = a(this);
        e.attr("data-target") || d.preventDefault(); var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();
        c.call(f, h) }) }(jQuery), + function(a) { "use strict";

    function b(b) { var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, "")); var d = c && a(c); return d && d.length ? d : b.parent() }

    function c(c) { c && 3 === c.which || (a(e).remove(), a(f).each(function() { var d = a(this),
                e = b(d),
                f = { relatedTarget: this };
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f))))) })) }

    function d(b) { return this.each(function() { var c = a(this),
                d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c) }) } var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function(b) { a(b).on("click.bs.dropdown", this.toggle) };
    g.VERSION = "3.3.7", g.prototype.toggle = function(d) { var e = a(this); if (!e.is(".disabled, :disabled")) { var f = b(e),
                g = f.hasClass("open"); if (c(), !g) { "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c); var h = { relatedTarget: this }; if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h)) } return !1 } }, g.prototype.keydown = function(c) { if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) { var d = a(this); if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) { var e = b(d),
                    g = e.hasClass("open"); if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click"); var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h); if (i.length) { var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus") } } } }; var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function() { return a.fn.dropdown = h, this }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) { a.stopPropagation() }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown) }(jQuery), + function(a) { "use strict";

    function b(b, d) { return this.each(function() { var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d) }) } var c = function(b, c) { this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() { this.$element.trigger("loaded.bs.modal") }, this)) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function(a) { return this.isShown ? this.hide() : this.show(a) }, c.prototype.show = function(b) { var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() { d.$element.one("mouseup.dismiss.bs.modal", function(b) { a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0) }) }), this.backdrop(function() { var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus(); var f = a.Event("shown.bs.modal", { relatedTarget: b });
            e ? d.$dialog.one("bsTransitionEnd", function() { d.$element.trigger("focus").trigger(f) }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f) })) }, c.prototype.hide = function(b) { b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal()) }, c.prototype.enforceFocus = function() { a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) { document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus") }, this)) }, c.prototype.escape = function() { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) { 27 == a.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, c.prototype.resize = function() { this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal") }, c.prototype.hideModal = function() { var a = this;
        this.$element.hide(), this.backdrop(function() { a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal") }) }, c.prototype.removeBackdrop = function() { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, c.prototype.backdrop = function(b) { var d = this,
            e = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var f = a.support.transition && e; if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) { return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var g = function() { d.removeBackdrop(), b && b() };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g() } else b && b() }, c.prototype.handleUpdate = function() { this.adjustDialog() }, c.prototype.adjustDialog = function() { var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" }) }, c.prototype.resetAdjustments = function() { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, c.prototype.checkScrollbar = function() { var a = window.innerWidth; if (!a) { var b = document.documentElement.getBoundingClientRect();
            a = b.right - Math.abs(b.left) }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar() }, c.prototype.setScrollbar = function() { var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth) }, c.prototype.resetScrollbar = function() { this.$body.css("padding-right", this.originalBodyPad) }, c.prototype.measureScrollbar = function() { var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a); var b = a.offsetWidth - a.clientWidth; return this.$body[0].removeChild(a), b }; var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function() { return a.fn.modal = d, this }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) { var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function(a) { a.isDefaultPrevented() || f.one("hidden.bs.modal", function() { d.is(":visible") && d.trigger("focus") }) }), b.call(f, g, this) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == typeof b && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function(b, c, d) { if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!"); for (var e = this.options.trigger.split(" "), f = e.length; f--;) { var g = e[f]; if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
            else if ("manual" != g) { var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this)) } }
        this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle() }, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.getOptions = function(b) { return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b }, c.prototype.getDelegateOptions = function() { var b = {},
            c = this.getDefaults(); return this._options && a.each(this._options, function(a, d) { c[a] != d && (b[a] = d) }), b }, c.prototype.enter = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function() { "in" == c.hoverState && c.show() }, c.options.delay.show)) : c.show()) }, c.prototype.isInStateTrue = function() { for (var a in this.inState)
            if (this.inState[a]) return !0;
        return !1 }, c.prototype.leave = function(b) { var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type); if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function() { "out" == c.hoverState && c.hide() }, c.options.delay.hide)) : c.hide() }, c.prototype.show = function() { var b = a.Event("show.bs." + this.type); if (this.hasContent() && this.enabled) { this.$element.trigger(b); var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]); if (b.isDefaultPrevented() || !d) return; var e = this,
                f = this.tip(),
                g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade"); var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type); var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight; if (j) { var n = h,
                    o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h) } var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h); var q = function() { var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e) };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q() } }, c.prototype.applyPlacement = function(b, c) { var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function(a) { d.css({ top: Math.round(a.top), left: Math.round(a.left) }) } }, b), 0), d.addClass("in"); var i = d[0].offsetWidth,
            j = d[0].offsetHeight; "top" == c && j != f && (b.top = b.top + f - j); var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top; var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l) }, c.prototype.replaceArrow = function(a, b, c) { this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "") }, c.prototype.setContent = function() { var a = this.tip(),
            b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right") }, c.prototype.hide = function(b) {
        function d() { "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b() } var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type); if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this }, c.prototype.fixTitle = function() { var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "") }, c.prototype.hasContent = function() { return this.getTitle() }, c.prototype.getPosition = function(b) { b = b || this.$element; var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top })); var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
            h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
            i = d ? { width: a(window).width(), height: a(window).height() } : null; return a.extend({}, e, h, i, g) }, c.prototype.getCalculatedOffset = function(a, b, c, d) { return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width } }, c.prototype.getViewportAdjustedDelta = function(a, b, c, d) { var e = { top: 0, left: 0 }; if (!this.$viewport) return e; var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport); if (/right|left/.test(a)) { var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i) } else { var j = b.left - f,
                k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k) } return e }, c.prototype.getTitle = function() { var a, b = this.$element,
            c = this.options; return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title) }, c.prototype.getUID = function(a) { do a += ~~(1e6 * Math.random()); while (document.getElementById(a)); return a }, c.prototype.tip = function() { if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!"); return this.$tip }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow") }, c.prototype.enable = function() { this.enabled = !0 }, c.prototype.disable = function() { this.enabled = !1 }, c.prototype.toggleEnabled = function() { this.enabled = !this.enabled }, c.prototype.toggle = function(b) { var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c) }, c.prototype.destroy = function() { var a = this;
        clearTimeout(this.timeout), this.hide(function() { a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null }) }; var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function() { return a.fn.tooltip = d, this } }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == typeof b && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]()) }) } var c = function(a, b) { this.init("popover", a, b) }; if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function() { return c.DEFAULTS }, c.prototype.setContent = function() { var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide() }, c.prototype.hasContent = function() { return this.getTitle() || this.getContent() }, c.prototype.getContent = function() { var a = this.$element,
            b = this.options; return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content) }, c.prototype.arrow = function() { return this.$arrow = this.$arrow || this.tip().find(".arrow") }; var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function() { return a.fn.popover = d, this } }(jQuery), + function(a) { "use strict";

    function b(c, d) { this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process() }

    function c(c) { return this.each(function() { var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]() }) }
    b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function() { return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight) }, b.prototype.refresh = function() { var b = this,
            c = "offset",
            d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() { var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e); return f && f.length && f.is(":visible") && [
                [f[c]().top + d, e]
            ] || null }).sort(function(a, b) { return a[0] - b[0] }).each(function() { b.offsets.push(this[0]), b.targets.push(this[1]) }) }, b.prototype.process = function() { var a, b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget; if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a); if (g && b < e[0]) return this.activeTarget = null, this.clear(); for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]) }, b.prototype.activate = function(b) { this.activeTarget = b, this.clear(); var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy") }, b.prototype.clear = function() { a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active") }; var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() { return a.fn.scrollspy = d, this }, a(window).on("load.bs.scrollspy.data-api", function() { a('[data-spy="scroll"]').each(function() { var b = a(this);
            c.call(b, b.data()) }) }) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]() }) } var c = function(b) { this.element = a(b) };
    c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function() { var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target"); if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) { var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                g = a.Event("show.bs.tab", { relatedTarget: e[0] }); if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) { var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function() { e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] }) }) } } }, c.prototype.activate = function(b, d, e) {
        function f() { g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e() } var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in") }; var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function() { return a.fn.tab = d, this }; var e = function(c) { c.preventDefault(), b.call(a(this), "show") };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e) }(jQuery), + function(a) { "use strict";

    function b(b) { return this.each(function() { var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]() }) } var c = function(b, d) { this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition() };
    c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function(a, b, c, d) { var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height(); if (null != c && "top" == this.affixed) return e < c && "top"; if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom"; var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b; return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom" }, c.prototype.getPinnedOffset = function() { if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix"); var a = this.$target.scrollTop(),
            b = this.$element.offset(); return this.pinnedOffset = b.top - a }, c.prototype.checkPositionWithEventLoop = function() { setTimeout(a.proxy(this.checkPosition, this), 1) }, c.prototype.checkPosition = function() { if (this.$element.is(":visible")) { var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height()); "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element)); var h = this.getState(g, b, e, f); if (this.affixed != h) { null != this.unpin && this.$element.css("top", ""); var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix"); if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix") } "bottom" == h && this.$element.offset({ top: g - b - f }) } }; var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function() { return a.fn.affix = d, this }, a(window).on("load", function() { a('[data-spy="affix"]').each(function() { var c = a(this),
                d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d) }) }) }(jQuery);
! function(a, b, c, d) {
    function e(b, c) { this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) { this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this) }, this)), a.each(e.Pipe, a.proxy(function(b, c) { this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) }) }, this)), this.setup(), this.initialize() }

    function f(a) { if (a.touches !== d) return { x: a.touches[0].pageX, y: a.touches[0].pageY }; if (a.touches === d) { if (a.pageX !== d) return { x: a.pageX, y: a.pageY }; if (a.pageX === d) return { x: a.clientX, y: a.clientY } } }

    function g(a) { var b, d, e = c.createElement("div"),
            f = a; for (b in f)
            if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
        return [!1] }

    function h() { return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1] }

    function i() { return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0] }

    function j() { return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0] }

    function k() { return "ontouchstart" in b || !!navigator.msMaxTouchPoints }

    function l() { return b.navigator.msPointerEnabled } var m, n, o;
    m = { start: 0, startX: 0, startY: 0, current: 0, currentX: 0, currentY: 0, offsetX: 0, offsetY: 0, distance: null, startTime: 0, endTime: 0, updatedX: 0, targetEl: null }, n = { isTouch: !1, isScrolling: !1, isSwiping: !1, direction: !1, inMotion: !1 }, o = { _onDragStart: null, _onDragMove: null, _onDragEnd: null, _transitionEnd: null, _resizer: null, _responsiveCall: null, _goToLoop: null, _checkVisibile: null }, e.Defaults = { items: 3, loop: !1, center: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: b, responsiveClass: !1, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", themeClass: "owl-theme", baseClass: "owl-carousel", itemClass: "owl-item", centerClass: "center", activeClass: "active" }, e.Width = { Default: "default", Inner: "inner", Outer: "outer" }, e.Plugins = {}, e.Pipe = [{ filter: ["width", "items", "settings"], run: function(a) { a.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { var a = this._clones,
                b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = []) } }, { filter: ["items", "settings"], run: function() { var a, b, c = this._clones,
                d = this._items,
                e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0; for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned"))) } }, { filter: ["width", "items", "settings"], run: function() { var a, b, c, d = this.settings.rtl ? 1 : -1,
                e = (this.width() / this.settings.items).toFixed(3),
                f = 0; for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f) } }, { filter: ["width", "items", "settings"], run: function() { var b, c, d = (this.width() / this.settings.items).toFixed(3),
                e = { width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding, "padding-left": this.settings.stagePadding || "", "padding-right": this.settings.stagePadding || "" }; if (this.$stage.css(e), e = { width: this.settings.autoWidth ? "auto" : d - this.settings.margin }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) { return a > 1 }).length > 0)
                for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
            else this.$stage.children().css(e) } }, { filter: ["width", "items", "settings"], run: function(a) { a.current && this.reset(this.$stage.children().index(a.current)) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, { filter: ["width", "position", "items", "settings"], run: function() { var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = []; for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass)) } }], e.prototype.initialize = function() { if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) { var b, c, e; if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1 }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized") }, e.prototype.setup = function() { var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) { b >= a && a > d && (d = Number(a)) }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) { return b.replace(/\b owl-responsive-\S+/g, "") }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", { property: { name: "settings", value: e } }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })) }, e.prototype.optionsLogic = function() { this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, e.prototype.prepare = function(b) { var c = this.trigger("prepare", { content: b }); return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", { content: c.data }), c.data }, e.prototype.update = function() { for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) { return this[a] }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {} }, e.prototype.width = function(a) { switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin } }, e.prototype.refresh = function() { if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed") }, e.prototype.eventsCall = function() { this.e._onDragStart = a.proxy(function(a) { this.onDragStart(a) }, this), this.e._onDragMove = a.proxy(function(a) { this.onDragMove(a) }, this), this.e._onDragEnd = a.proxy(function(a) { this.onDragEnd(a) }, this), this.e._onResize = a.proxy(function(a) { this.onResize(a) }, this), this.e._transitionEnd = a.proxy(function(a) { this.transitionEnd(a) }, this), this.e._preventClick = a.proxy(function(a) { this.preventClick(a) }, this) }, e.prototype.onThrottledResize = function() { b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate) }, e.prototype.onResize = function() { return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1 }, e.prototype.eventsRouter = function(a) { var b = a.type; "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a) }, e.prototype.internalEvents = function() { var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) { this.eventsRouter(a) }, this)), this.$stage.on("dragstart", function() { return !1 }), this.$stage.get(0).onselectstart = function() { return !1 }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) { this.eventsRouter(a) }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this)) }, e.prototype.onDragStart = function(d) { var e, g, h, i; if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1; if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) { this.eventsRouter(a) }, this)) }, e.prototype.onDragMove = function(a) { var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX))) }, e.prototype.onDragEnd = function(b) { var d, e, f; if (this.state.isTouch) { if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents") } }, e.prototype.removeClick = function(c) { this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() { a(c).off("click.preventClick") }, 300) }, e.prototype.preventClick = function(b) { b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick") }, e.prototype.getTransformProperty = function() { var a, c; return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12] }, e.prototype.closest = function(b) { var c = -1,
            d = 30,
            e = this.width(),
            f = this.coordinates(); return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) { return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c }, e.prototype.animate = function(b) { this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({ transform: "translate3d(" + b + "px,0px, 0px)", transition: this.speed() / 1e3 + "s" }) : this.state.isTouch ? this.$stage.css({ left: b + "px" }) : this.$stage.animate({ left: b }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() { this.state.inMotion && this.transitionEnd() }, this)) }, e.prototype.current = function(a) { if (a === d) return this._current; if (0 === this._items.length) return d; if (a = this.normalize(a), this._current !== a) { var b = this.trigger("change", { property: { name: "position", value: a } });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } }) } return this._current }, e.prototype.invalidate = function(a) { this._invalidated[a] = !0 }, e.prototype.reset = function(a) { a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"])) }, e.prototype.normalize = function(b, c) { var e = c ? this._items.length : this._items.length + this._clones.length; return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b)) }, e.prototype.relative = function(a) { return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0) }, e.prototype.maximum = function(a) { var b, c, d, e = 0,
            f = this.settings; if (a) return this._items.length - 1; if (!f.loop && f.center) b = this._items.length - 1;
        else if (f.loop || f.center)
            if (f.loop || f.center) b = this._items.length + f.items;
            else { if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position."; for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
                    (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e }
        else b = this._items.length - f.items; return b }, e.prototype.minimum = function(a) { return a ? 0 : this._clones.length / 2 }, e.prototype.items = function(a) { return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a]) }, e.prototype.mergers = function(a) { return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a]) }, e.prototype.clones = function(b) { var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) { return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2 }; return b === d ? a.map(this._clones, function(a, b) { return f(b) }) : a.map(this._clones, function(a, c) { return a === b ? f(c) : null }) }, e.prototype.speed = function(a) { return a !== d && (this._speed = a), this._speed }, e.prototype.coordinates = function(b) { var c = null; return b === d ? a.map(this._coordinates, a.proxy(function(a, b) { return this.coordinates(b) }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c) }, e.prototype.duration = function(a, b, c) { return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed) }, e.prototype.to = function(c, d) { if (this.settings.loop) { var e = c - this.relative(this.current()),
                f = this.current(),
                g = this.current(),
                h = this.current() + e,
                i = 0 > g - h ? !0 : !1,
                j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() { this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update() }, this), 30) } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update() }, e.prototype.next = function(a) { a = a || !1, this.to(this.relative(this.current()) + 1, a) }, e.prototype.prev = function(a) { a = a || !1, this.to(this.relative(this.current()) - 1, a) }, e.prototype.transitionEnd = function(a) { return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated")) }, e.prototype.viewport = function() { var d; if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else { if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth } return d }, e.prototype.replace = function(b) { this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() { return 1 === this.nodeType }).each(a.proxy(function(a, b) { b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, e.prototype.add = function(a, b) { b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", { content: a, position: b }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", { content: a, position: b }) }, e.prototype.remove = function(a) { a = this.normalize(a, !0), a !== d && (this.trigger("remove", { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: a })) }, e.prototype.addTriggerableEvents = function() { var b = a.proxy(function(b, c) { return a.proxy(function(a) { a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c])) }, this) }, this);
        a.each({ next: this.next, prev: this.prev, to: this.to, destroy: this.destroy, refresh: this.refresh, replace: this.replace, add: this.add, remove: this.remove }, a.proxy(function(a, c) { this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel")) }, this)) }, e.prototype.watchVisibility = function() {
        function c(a) { return a.offsetWidth > 0 && a.offsetHeight > 0 }

        function d() { c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile)) }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500)) }, e.prototype.preloadAutoWidthImages = function(b) { var c, d, e, f;
        c = 0, d = this, b.each(function(g, h) { e = a(h), f = new Image, f.onload = function() { c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize()) }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina") }) }, e.prototype.destroy = function() { this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd); for (var d in this._plugins) this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() { return !1 })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap() }, e.prototype.op = function(a, b, c) { var d = this.settings.rtl; switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a } }, e.prototype.on = function(a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c) }, e.prototype.off = function(a, b, c, d) { a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c) }, e.prototype.trigger = function(b, c, d) { var e = { item: { count: this._items.length, index: this.current() } },
            f = a.camelCase(a.grep(["on", b, d], function(a) { return a }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({ relatedTarget: this }, e, c)); return this._supress[b] || (a.each(this._plugins, function(a, b) { b.onTrigger && b.onTrigger(g) }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g }, e.prototype.suppress = function(b) { a.each(b, a.proxy(function(a, b) { this._supress[b] = !0 }, this)) }, e.prototype.release = function(b) { a.each(b, a.proxy(function(a, b) { delete this._supress[b] }, this)) }, e.prototype.browserSupport = function() { if (this.support3d = j(), this.support3d) { this.transformVendor = i(); var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : "" }
        this.state.orientation = b.orientation }, a.fn.owlCarousel = function(b) { return this.each(function() { a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b)) }) }, a.fn.owlCarousel.Constructor = e }(window.Zepto || window.jQuery, window, document),
function(a, b) { var c = function(b) { this._core = b, this._loaded = [], this._handlers = { "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) { if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) { this.load(b) }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h) }, this) }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    c.Defaults = { lazyLoad: !1 }, c.prototype.load = function(c) { var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");!e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) { var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", { element: f, url: g }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() { f.css("opacity", 1), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() { f.css({ "background-image": "url(" + g + ")", opacity: "1" }), this._core.trigger("loaded", { element: f, url: g }, "lazy") }, this), e.src = g) }, this)), this._loaded.push(d.get(0))) }, c.prototype.destroy = function() { var a, b; for (a in this.handlers) this._core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c }(window.Zepto || window.jQuery, window, document),
function(a) { var b = function(c) { this._core = c, this._handlers = { "initialized.owl.carousel": a.proxy(function() { this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": a.proxy(function(a) { this._core.settings.autoHeight && "position" == a.property.name && this.update() }, this), "loaded.owl.lazy": a.proxy(function(a) { this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update() }, this) }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers) };
    b.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, b.prototype.update = function() { this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass) }, b.prototype.destroy = function() { var a, b; for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b }(window.Zepto || window.jQuery, window, document),
function(a, b, c) { var d = function(b) { this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = { "resize.owl.carousel": a.proxy(function(a) { this._core.settings.video && !this.isInFullScreen() && a.preventDefault() }, this), "refresh.owl.carousel changed.owl.carousel": a.proxy(function() { this._playing && this.stop() }, this), "prepared.owl.carousel": a.proxy(function(b) { var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content))) }, this) }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) { this.play(a) }, this)) };
    d.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, d.prototype.fetch = function(a, b) { var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href"); if (!g) throw new Error("Missing video URL."); if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else { if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            c = "vimeo" }
        d = d[6], this._videos[g] = { type: c, id: d, width: e, height: f }, b.attr("data-video", g), this.thumbnail(a, this._videos[g]) }, d.prototype.thumbnail = function(b, c) { var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) { e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e) }; return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({ type: "GET", url: "http://vimeo.com/api/v2/video/" + c.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(a) { f = a[0].thumbnail_large, l(f) } })) }, d.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null }, d.prototype.play = function(b) { this._core.trigger("play", null, "video"), this._playing && this.stop(); var c, d, e = a(b.target || b.srcElement),
            f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")],
            h = g.width || "100%",
            i = g.height || this._core.$stage.height(); "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d) }, d.prototype.isInFullScreen = function() { var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement; return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0 }, d.prototype.destroy = function() { var a, b;
        this._core.$element.off("click.owl.video"); for (a in this._handlers) this._core.$element.off(a, this._handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Video = d }(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) { var e = function(b) { this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = { "change.owl.carousel": a.proxy(function(a) { "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) { this.swapping = "translated" == a.type }, this), "translate.owl.carousel": a.proxy(function() { this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
    e.Defaults = { animateOut: !1, animateIn: !1 }, e.prototype.swap = function() { if (1 === this.core.settings.items && this.core.support3d) { this.core.speed(0); var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({ left: b + "px" }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)) } }, e.prototype.clear = function(b) { a(b.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd() }, e.prototype.destroy = function() { var a, b; for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null) }, a.fn.owlCarousel.Constructor.Plugins.Animate = e }(window.Zepto || window.jQuery, window, document),
function(a, b, c) { var d = function(b) { this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = { "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() { this.autoplay() }, this), "play.owl.autoplay": a.proxy(function(a, b, c) { this.play(b, c) }, this), "stop.owl.autoplay": a.proxy(function() { this.stop() }, this), "mouseover.owl.autoplay": a.proxy(function() { this.core.settings.autoplayHoverPause && this.pause() }, this), "mouseleave.owl.autoplay": a.proxy(function() { this.core.settings.autoplayHoverPause && this.autoplay() }, this) }, this.core.$element.on(this.handlers) };
    d.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, d.prototype.autoplay = function() { this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() { this.play() }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval) }, d.prototype.play = function() { return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed) }, d.prototype.stop = function() { b.clearInterval(this.interval) }, d.prototype.pause = function() { b.clearInterval(this.interval) }, d.prototype.destroy = function() { var a, c;
        b.clearInterval(this.interval); for (a in this.handlers) this.core.$element.off(a, this.handlers[a]); for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d }(window.Zepto || window.jQuery, window, document),
function(a) { "use strict"; var b = function(c) { this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": a.proxy(function(b) { this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this), "add.owl.carousel": a.proxy(function(b) { this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot")) }, this), "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) { this._core.settings.dotsData && this._templates.splice(a.position, 1) }, this), "change.owl.carousel": a.proxy(function(a) { if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) { var b = this._core.current(),
                        c = this._core.maximum(),
                        d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value } }, this), "changed.owl.carousel": a.proxy(function(a) { "position" == a.property.name && this.draw() }, this), "refreshed.owl.carousel": a.proxy(function() { this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation") }, this) }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers) };
    b.Defaults = { nav: !1, navRewind: !0, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotData: !1, dotsSpeed: !1, dotsContainer: !1, controlsClass: "owl-controls" }, b.prototype.initialize = function() { var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) { var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed) }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() { this.prev(d.navSpeed) }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() { this.next(d.navSpeed) }, this)); for (c in this._overrides) this._core[c] = a.proxy(this[c], this) }, b.prototype.destroy = function() { var a, b, c, d; for (a in this._handlers) this.$element.off(a, this._handlers[a]); for (b in this._controls) this._controls[b].remove(); for (d in this.overides) this._core[d] = this._overrides[d]; for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null) }, b.prototype.update = function() { var a, b, c, d = this._core.settings,
            e = this._core.clones().length / 2,
            f = e + this._core.items().length,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items; if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
            for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({ start: a - e, end: a - e + g - 1 }), b = 0, ++c), b += this._core.mergers(this._core.relative(a)) }, b.prototype.draw = function() { var b, c, d = "",
            e = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current())); if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) { if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) { for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d) } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active") }
        this._controls.$indicators.toggle(e.dots) }, b.prototype.onTrigger = function(b) { var c = this._core.settings;
        b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items) } }, b.prototype.current = function() { var b = this._core.relative(this._core.current()); return a.grep(this._pages, function(a) { return a.start <= b && a.end >= b }).pop() }, b.prototype.getPosition = function(b) { var c, d, e = this._core.settings; return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c }, b.prototype.next = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b) }, b.prototype.prev = function(b) { a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b) }, b.prototype.to = function(b, c, d) { var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b }(window.Zepto || window.jQuery, window, document),
function(a, b) { "use strict"; var c = function(d) { this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = { "initialized.owl.carousel": a.proxy(function() { "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation") }, this), "prepared.owl.carousel": a.proxy(function(b) { var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content }, this) }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() { var a = b.location.hash.substring(1),
                c = this._core.$stage.children(),
                d = this._hashes[a] && c.index(this._hashes[a]) || 0; return a ? void this._core.to(d, !1, !0) : !1 }, this)) };
    c.Defaults = { URLhashListener: !1 }, c.prototype.destroy = function() { var c, d;
        a(b).off("hashchange.owl.navigation"); for (c in this._handlers) this._core.$element.off(c, this._handlers[c]); for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null) }, a.fn.owlCarousel.Constructor.Plugins.Hash = c }(window.Zepto || window.jQuery, window, document);
(function() { var method; var noop = function() {}; var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn']; var length = methods.length; var console = (window.console = window.console || {}); while (length--) { method = methods[length]; if (!console[method]) { console[method] = noop } } }());
! function(l, o, e) { "use strict";
    l.fn.scrollUp = function(o) { l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o)) }, l.fn.scrollUp.init = function(r) { var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r),
            f = !1; switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", { id: p.scrollName, href: "#top" }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({ display: "none", position: "fixed", zIndex: p.zIndex }), p.activeOverlay && l("<div/>", { id: p.scrollName + "-active" }).css({ position: "absolute", top: p.scrollDistance + "px", width: "100%", borderTop: "1px dotted" + p.activeOverlay, zIndex: p.zIndex }).appendTo("body"), p.animation) {
            case "fade":
                s = "fadeIn", t = "fadeOut", c = p.animationSpeed; break;
            case "slide":
                s = "slideDown", t = "slideUp", c = p.animationSpeed; break;
            default:
                s = "show", t = "hide", c = 0 }
        i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function() { l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1) }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function(o) { o.preventDefault(), l("html, body").animate({ scrollTop: a }, p.scrollSpeed, p.easingType) }) }, l.fn.scrollUp.defaults = { scrollName: "scrollUp", scrollDistance: 300, scrollFrom: "top", scrollSpeed: 300, easingType: "linear", animation: "fade", animationSpeed: 200, scrollTrigger: !1, scrollTarget: !1, scrollText: "Scroll to top", scrollTitle: !1, scrollImg: !1, activeOverlay: !1, zIndex: 2147483647 }, l.fn.scrollUp.destroy = function(r) { l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r) }, l.scrollUp = l.fn.scrollUp }(jQuery, window, document);
(function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery) })(function(e) {
    function t(t, s) { var n, a, o, r = t.nodeName.toLowerCase(); return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t) }

    function i(t) { return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() { return "hidden" === e.css(this, "visibility") }).length }
    e.ui = e.ui || {}, e.extend(e.ui, { version: "1.11.4", keyCode: { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 } }), e.fn.extend({ scrollParent: function(t) { var i = this.css("position"),
                s = "absolute" === i,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                a = this.parents().filter(function() { var t = e(this); return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x")) }).eq(0); return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document) }, uniqueId: function() { var e = 0; return function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++e) }) } }(), removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id") }) } }), e.extend(e.expr[":"], { data: e.expr.createPseudo ? e.expr.createPseudo(function(t) { return function(i) { return !!e.data(i, t) } }) : function(t, i, s) { return !!e.data(t, s[3]) }, focusable: function(i) { return t(i, !isNaN(e.attr(i, "tabindex"))) }, tabbable: function(i) { var s = e.attr(i, "tabindex"),
                n = isNaN(s); return (n || s >= 0) && t(i, !n) } }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
        function s(t, i, s, a) { return e.each(n, function() { i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0) }), i } var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            o = { innerWidth: e.fn.innerWidth, innerHeight: e.fn.innerHeight, outerWidth: e.fn.outerWidth, outerHeight: e.fn.outerHeight };
        e.fn["inner" + i] = function(t) { return void 0 === t ? o["inner" + i].call(this) : this.each(function() { e(this).css(a, s(this, t) + "px") }) }, e.fn["outer" + i] = function(t, n) { return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() { e(this).css(a, s(this, t, !0, n) + "px") }) } }), e.fn.addBack || (e.fn.addBack = function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) { return function(i) { return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this) } }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({ focus: function(t) { return function(i, s) { return "number" == typeof i ? this.each(function() { var t = this;
                    setTimeout(function() { e(t).focus(), s && s.call(t) }, i) }) : t.apply(this, arguments) } }(e.fn.focus), disableSelection: function() { var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.bind(e + ".ui-disableSelection", function(e) { e.preventDefault() }) } }(), enableSelection: function() { return this.unbind(".ui-disableSelection") }, zIndex: function(t) { if (void 0 !== t) return this.css("zIndex", t); if (this.length)
                for (var i, s, n = e(this[0]); n.length && n[0] !== document;) { if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    n = n.parent() }
            return 0 } }), e.ui.plugin = { add: function(t, i, s) { var n, a = e.ui[t].prototype; for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]]) }, call: function(e, t, i, s) { var n, a = e.plugins[t]; if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i) } }; var s = 0,
        n = Array.prototype.slice;
    e.cleanData = function(t) { return function(i) { var s, n, a; for (a = 0; null != (n = i[a]); a++) try { s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove") } catch (o) {}
            t(i) } }(e.cleanData), e.widget = function(t, i, s) { var n, a, o, r, h = {},
            l = t.split(".")[0]; return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) { return !!e.data(t, n) }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function(e, t) { return this._createWidget ? (arguments.length && this._createWidget(e, t), void 0) : new o(e, t) }, e.extend(o, a, { version: s.version, _proto: e.extend({}, s), _childConstructors: [] }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function(t, s) { return e.isFunction(s) ? (h[t] = function() { var e = function() { return i.prototype[t].apply(this, arguments) },
                    n = function(e) { return i.prototype[t].apply(this, e) }; return function() { var t, i = this._super,
                        a = this._superApply; return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t } }(), void 0) : (h[t] = s, void 0) }), o.prototype = e.widget.extend(r, { widgetEventPrefix: a ? r.widgetEventPrefix || t : t }, h, { constructor: o, namespace: l, widgetName: t, widgetFullName: n }), a ? (e.each(a._childConstructors, function(t, i) { var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto) }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o }, e.widget.extend = function(t) { for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)
            for (i in a[o]) s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s); return t }, e.widget.bridge = function(t, i) { var s = i.prototype.widgetFullName || t;
        e.fn[t] = function(a) { var o = "string" == typeof a,
                r = n.call(arguments, 1),
                h = this; return o ? this.each(function() { var i, n = e.data(this, s); return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; " + "attempted to call method '" + a + "'") }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function() { var t = e.data(this, s);
                t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this)) })), h } }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { disabled: !1, create: null }, _createWidget: function(t, i) { i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function(e) { e.target === i && this.destroy() } }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init() }, _getCreateOptions: e.noop, _getCreateEventData: e.noop, _create: e.noop, _init: e.noop, destroy: function() { this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus") }, _destroy: e.noop, widget: function() { return this.element }, option: function(t, i) { var s, n, a, o = t; if (0 === arguments.length) return e.widget.extend({}, this.options); if ("string" == typeof t)
                if (o = {}, s = t.split("."), t = s.shift(), s.length) { for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]]; if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = i } else { if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = i }
            return this._setOptions(o), this }, _setOptions: function(e) { var t; for (t in e) this._setOption(t, e[t]); return this }, _setOption: function(e, t) { return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this }, enable: function() { return this._setOptions({ disabled: !1 }) }, disable: function() { return this._setOptions({ disabled: !0 }) }, _on: function(t, i, s) { var n, a = this; "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) {
                function r() { return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0 } "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++); var h = s.match(/^([\w:-]*)\s*(.*)$/),
                    l = h[1] + a.eventNamespace,
                    u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r) }) }, _off: function(t, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get()) }, _delay: function(e, t) {
            function i() { return ("string" == typeof e ? s[e] : e).apply(s, arguments) } var s = this; return setTimeout(i, t || 0) }, _hoverable: function(t) { this.hoverable = this.hoverable.add(t), this._on(t, { mouseenter: function(t) { e(t.currentTarget).addClass("ui-state-hover") }, mouseleave: function(t) { e(t.currentTarget).removeClass("ui-state-hover") } }) }, _focusable: function(t) { this.focusable = this.focusable.add(t), this._on(t, { focusin: function(t) { e(t.currentTarget).addClass("ui-state-focus") }, focusout: function(t) { e(t.currentTarget).removeClass("ui-state-focus") } }) }, _trigger: function(t, i, s) { var n, a, o = this.options[t]; if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]); return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented()) } }, e.each({ show: "fadeIn", hide: "fadeOut" }, function(t, i) { e.Widget.prototype["_" + t] = function(s, n, a) { "string" == typeof n && (n = { effect: n }); var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = { duration: n }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) { e(this)[t](), a && a.call(s[0]), i() }) } }), e.widget; var a = !1;
    e(document).mouseup(function() { a = !1 }), e.widget("ui.mouse", { version: "1.11.4", options: { cancel: "input,textarea,button,select,option", distance: 1, delay: 0 }, _mouseInit: function() { var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) { return t._mouseDown(e) }).bind("click." + this.widgetName, function(i) { return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0 }), this.started = !1 }, _mouseDestroy: function() { this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate) }, _mouseDown: function(t) { if (!a) { this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t; var i = this,
                    s = 1 === t.which,
                    n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1; return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) { return i._mouseMove(e) }, this._mouseUpDelegate = function(e) { return i._mouseUp(e) }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0 } }, _mouseMove: function(t) { if (this._mouseMoved) { if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t); if (!t.which) return this._mouseUp(t) } return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted) }, _mouseUp: function(t) { return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1 }, _mouseDistanceMet: function(e) { return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance }, _mouseDelayMet: function() { return this.mouseDelayMet }, _mouseStart: function() {}, _mouseDrag: function() {}, _mouseStop: function() {}, _mouseCapture: function() { return !0 } }), e.widget("ui.slider", e.ui.mouse, { version: "1.11.4", widgetEventPrefix: "slide", options: { animate: !1, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null }, numPages: 5, _create: function() { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1 }, _refresh: function() { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() }, _createHandles: function() { var t, i, s = this.options,
                n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                a = "<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",
                o = []; for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), t = n.length; i > t; t++) o.push(a);
            this.handles = n.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) { e(this).data("ui-slider-handle-index", t) }) }, _createRange: function() { var t = this.options,
                i = "";
            t.range ? (t.range === !0 && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [t.values[0], t.values[0]] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({ left: "", bottom: "" }) : (this.range = e("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null) }, _setupEvents: function() { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) }, _destroy: function() { this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy() }, _mouseCapture: function(t) { var i, s, n, a, o, r, h, l, u = this,
                c = this.options; return c.disabled ? !1 : (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: t.pageX, y: t.pageY }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) { var i = Math.abs(s - u.values(t));
                (n > i || n === i && (t === u._lastChangedValue || u.values(t) === c.min)) && (n = i, a = e(this), o = t) }), r = this._start(t, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: t.pageX - h.left - a.width() / 2, top: t.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(t, o, s), this._animateOff = !0, !0)) }, _mouseStart: function() { return !0 }, _mouseDrag: function(e) { var t = { x: e.pageX, y: e.pageY },
                i = this._normValueFromMouse(t); return this._slide(e, this._handleIndex, i), !1 }, _mouseStop: function(e) { return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 }, _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" }, _normValueFromMouse: function(e) { var t, i, s, n, a; return "horizontal" === this.orientation ? (t = this.elementSize.width, i = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, i = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / t, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a) }, _start: function(e, t) { var i = { handle: this.handles[t], value: this.value() }; return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", e, i) }, _slide: function(e, t, i) { var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(t ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === t && i > s || 1 === t && s > i) && (i = s), i !== this.values(t) && (n = this.values(), n[t] = i, a = this._trigger("slide", e, { handle: this.handles[t], value: i, values: n }), s = this.values(t ? 0 : 1), a !== !1 && this.values(t, i))) : i !== this.value() && (a = this._trigger("slide", e, { handle: this.handles[t], value: i }), a !== !1 && this.value(i)) }, _stop: function(e, t) { var i = { handle: this.handles[t], value: this.value() };
            this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("stop", e, i) }, _change: function(e, t) { if (!this._keySliding && !this._mouseSliding) { var i = { handle: this.handles[t], value: this.value() };
                this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._lastChangedValue = t, this._trigger("change", e, i) } }, value: function(e) { return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), this._change(null, 0), void 0) : this._value() }, values: function(t, i) { var s, n, a; if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(i), this._refreshValue(), this._change(null, t), void 0; if (!arguments.length) return this._values(); if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value(); for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
            this._refreshValue() }, _setOption: function(t, i) { var s, n = 0; switch ("range" === t && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), e.isArray(this.options.values) && (n = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!i), this._super(t, i), t) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue(), this.handles.css("horizontal" === i ? "bottom" : "left", ""); break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1; break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                    this._animateOff = !1; break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1; break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1 } }, _value: function() { var e = this.options.value; return e = this._trimAlignValue(e) }, _values: function(e) { var t, i, s; if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t); if (this.options.values && this.options.values.length) { for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]); return i } return [] }, _trimAlignValue: function(e) { if (this._valueMin() >= e) return this._valueMin(); if (e >= this._valueMax()) return this._valueMax(); var t = this.options.step > 0 ? this.options.step : 1,
                i = (e - this._valueMin()) % t,
                s = e - i; return 2 * Math.abs(i) >= t && (s += i > 0 ? t : -t), parseFloat(s.toFixed(5)) }, _calculateNewMax: function() { var e = this.options.max,
                t = this._valueMin(),
                i = this.options.step,
                s = Math.floor(+(e - t).toFixed(this._precision()) / i) * i;
            e = s + t, this.max = parseFloat(e.toFixed(this._precision())) }, _precision: function() { var e = this._precisionOf(this.options.step); return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e }, _precisionOf: function(e) { var t = "" + e,
                i = t.indexOf("."); return -1 === i ? 0 : t.length - i - 1 }, _valueMin: function() { return this.options.min }, _valueMax: function() { return this.max }, _refreshValue: function() { var t, i, s, n, a, o = this.options.range,
                r = this.options,
                h = this,
                l = this._animateOff ? !1 : r.animate,
                u = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) { i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", e(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ width: i - t + "%" }, { queue: !1, duration: r.animate })) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === s && h.range[l ? "animate" : "css"]({ height: i - t + "%" }, { queue: !1, duration: r.animate }))), t = i }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({ width: 100 - i + "%" }, { queue: !1, duration: r.animate }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({ height: 100 - i + "%" }, { queue: !1, duration: r.animate })) }, _handleEvents: { keydown: function(t) { var i, s, n, a, o = e(t.target).data("ui-slider-handle-index"); switch (t.keyCode) {
                    case e.ui.keyCode.HOME:
                    case e.ui.keyCode.END:
                    case e.ui.keyCode.PAGE_UP:
                    case e.ui.keyCode.PAGE_DOWN:
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), i = this._start(t, o), i === !1)) return } switch (a = this.options.step, s = n = this.options.values && this.options.values.length ? this.values(o) : this.value(), t.keyCode) {
                    case e.ui.keyCode.HOME:
                        n = this._valueMin(); break;
                    case e.ui.keyCode.END:
                        n = this._valueMax(); break;
                    case e.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(s + (this._valueMax() - this._valueMin()) / this.numPages); break;
                    case e.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(s - (this._valueMax() - this._valueMin()) / this.numPages); break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.RIGHT:
                        if (s === this._valueMax()) return;
                        n = this._trimAlignValue(s + a); break;
                    case e.ui.keyCode.DOWN:
                    case e.ui.keyCode.LEFT:
                        if (s === this._valueMin()) return;
                        n = this._trimAlignValue(s - a) }
                this._slide(t, o, n) }, keyup: function(t) { var i = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), e(t.target).removeClass("ui-state-active")) } } }) });
(function() { var a, b, c, d, e, f = function(a, b) { return function() { return a.apply(b, arguments) } },
        g = [].indexOf || function(a) { for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1 };
    b = function() {
        function a() {} return a.prototype.extend = function(a, b) { var c, d; for (c in b) d = b[c], null == a[c] && (a[c] = d); return a }, a.prototype.isMobile = function(a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a.prototype.createEvent = function(a, b, c, d) { var e; return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e }, a.prototype.emitEvent = function(a, b) { return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0 }, a.prototype.addEvent = function(a, b, c) { return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c }, a.prototype.removeEvent = function(a, b, c) { return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b] }, a.prototype.innerHeight = function() { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, a }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() { this.keys = [], this.values = [] } return a.prototype.get = function(a) { var b, c, d, e, f; for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b] }, a.prototype.set = function(a, b) { var c, d, e, f, g; for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b) }, a }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") } return a.notSupported = !0, a.prototype.observe = function() {}, a }()), d = this.getComputedStyle || function(a) { return this.getPropertyValue = function(b) { var c; return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) { return b.toUpperCase() }), (null != (c = a.currentStyle) ? c[b] : void 0) || null }, this }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) { null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass) } return e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }, e.prototype.init = function() { var a; return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, e.prototype.start = function() { var b, c, d, e; if (this.stopped = !1, this.boxes = function() { var a, c, d, e; for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.all = function() { var a, c, d, e; for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) { return function(b) { var c, d, e, f, g; for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() { var a, b, c, d; for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e)); return d }.call(a)); return g } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0 }, e.prototype.stop = function() { return this.stopped = !0, this.util().removeEvent(this.config.scrollContainer || window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, e.prototype.sync = function() { return a.notSupported ? this.doSync(this.element) : void 0 }, e.prototype.doSync = function(a) { var b, c, d, e, f; if (null == a && (a = this.element), 1 === a.nodeType) { for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0); return f } }, e.prototype.show = function(a) { return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a }, e.prototype.applyStyle = function(a, b) { var c, d, e; return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) { return function() { return f.customStyle(a, b, d, c, e) } }(this)) }, e.prototype.animate = function() { return "requestAnimationFrame" in window ? function(a) { return window.requestAnimationFrame(a) } : function(a) { return a() } }(), e.prototype.resetStyle = function() { var a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible"); return e }, e.prototype.resetAnimation = function(a) { var b; return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0 }, e.prototype.customStyle = function(a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) { var c, d, e, f;
            d = []; for (c in b) e = b[c], a["" + c] = e, d.push(function() { var b, d, g, h; for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e); return h }.call(this)); return d }, e.prototype.vendorCSS = function(a, b) { var c, e, f, g, h, i; for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b); return g }, e.prototype.animationName = function(a) { var b; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = d(a).getPropertyValue("animation-name") } return "none" === b ? "" : b }, e.prototype.cacheAnimationName = function(a) { return this.animationNameCache.set(a, this.animationName(a)) }, e.prototype.cachedAnimationName = function(a) { return this.animationNameCache.get(a) }, e.prototype.scrollHandler = function() { return this.scrolled = !0 }, e.prototype.scrollCallback = function() { var a; return !this.scrolled || (this.scrolled = !1, this.boxes = function() { var b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a)); return e }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, e.prototype.offsetTop = function(a) { for (var b; void 0 === a.offsetTop;) a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop; return b }, e.prototype.isVisible = function(a) { var b, c, d, e, f; return c = a.getAttribute("data-wow-offset") || this.config.offset, f = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, e.prototype.util = function() { return null != this._util ? this._util : this._util = new b }, e.prototype.disabled = function() { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, e }() }).call(this);
(function($) { $.fn.ticker = function(options) { $.fn.ticker.defaults = { controls: !1, interval: 3000, effect: "fadeIn", duration: 400 }; var o = $.extend({}, $.fn.ticker.defaults, options); if (!this.length) return; return this.each(function() { var $ul = $(this),
                $items = $ul.find("li"),
                index = 0,
                paused = !1,
                time;

            function start() { time = setInterval(function() { if (!paused) changeItem() }, o.interval) }

            function changeItem() { var $current = $items.eq(index);
                index++; if (index == $items.length) index = 0; var $next = $items.eq(index); if (o.effect == "fadeIn") { $current.fadeOut(function() { $next.fadeIn() }) } else if (o.effect == "slideUp" || o.effect == "slideDown") { var h = $ul.height(); var d = (o.effect == "slideUp") ? 1 : -1;
                    $current.animate({ top: -h * d + "px" }, o.duration, function() { $(this).hide() });
                    $next.css({ "display": "block", "top": h * d + "px" });
                    $next.animate({ top: 0 }, o.duration) } }

            function bindEvents() { $ul.hover(function() { paused = !0 }, function() { paused = !1 }) }

            function init() { $items.not(":first").hide(); if (o.effect == "slideUp" || o.effect == "slideDown") { $ul.css("position", "relative");
                    $items.css("position", "absolute") }
                bindEvents();
                start() }
            init() }) } })(jQuery);
(function($) {
    $.fn.YouTubePopUp = function(options) {
        var YouTubePopUpOptions = $.extend({ autoplay: 1 }, options);
        $(this).on('click', function(e) {
            var youtubeLink = $(this).attr("href");
            if (youtubeLink.match(/(youtube.com)/)) { var split_c = "v="; var split_n = 1 }
            if (youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(vimeo.com\/)+[0-9]/)) { var split_c = "/"; var split_n = 3 }
            if (youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/)) { var split_c = "/"; var split_n = 5 }
            var getYouTubeVideoID = youtubeLink.split(split_c)[split_n];
            var cleanVideoID = getYouTubeVideoID.replace(/(&)+(.*)/, "");
            if (youtubeLink.match(/(youtu.be)/) || youtubeLink.match(/(youtube.com)/)) { var videoEmbedLink = "https://www.youtube.com/embed/" + cleanVideoID + "?autoplay=" + YouTubePopUpOptions.autoplay + "" }
            if (youtubeLink.match(/(vimeo.com\/)+[0-9]/) || youtubeLink.match(/(vimeo.com\/)+[a-zA-Z]/)) { var videoEmbedLink = "https://player.vimeo.com/video/" + cleanVideoID + "?autoplay=" + YouTubePopUpOptions.autoplay + "" }
            $("body").append('<div class="YouTubePopUp-Wrap YouTubePopUp-animation"><div class="YouTubePopUp-Content"><span class="YouTubePopUp-Close"></span><iframe src="' + videoEmbedLink + '" allowfullscreen></iframe></div></div>');
            if ($('.YouTubePopUp-Wrap').hasClass('YouTubePopUp-animation')) { setTimeout(function() { $('.YouTubePopUp-Wrap').removeClass("YouTubePopUp-animation") }, 600) }
            $(".YouTubePopUp-Wrap, .YouTubePopUp-Close").click(function() { $(".YouTubePopUp-Wrap").addClass("YouTubePopUp-Hide").delay(515).queue(function() { $(this).remove() }) });
            e.preventDefault()
        });
        $(document).keyup(function(e) { if (e.keyCode == 27) { $('.YouTubePopUp-Wrap, .YouTubePopUp-Close').click() } })
    }
}(jQuery));
(function($, window, document, undefined) {
    var isTouch = 'ontouchstart' in window,
        eStart = isTouch ? 'touchstart' : 'mousedown',
        eMove = isTouch ? 'touchmove' : 'mousemove',
        eEnd = isTouch ? 'touchend' : 'mouseup',
        eCancel = isTouch ? 'touchcancel' : 'mouseup',
        secondsToTime = function(secs) { var hours = Math.floor(secs / 3600),
                minutes = Math.floor(secs % 3600 / 60),
                seconds = Math.ceil(secs % 3600 % 60); return (hours == 0 ? '' : hours > 0 && hours.toString().length < 2 ? '0' + hours + ':' : hours + ':') + (minutes.toString().length < 2 ? '0' + minutes : minutes) + ':' + (seconds.toString().length < 2 ? '0' + seconds : seconds) },
        canPlayType = function(file) { var audioElement = document.createElement('audio'); return !!(audioElement.canPlayType && audioElement.canPlayType('audio/' + file.split('.').pop().toLowerCase() + ';').replace(/no/, '')) };
    $.fn.audioPlayer = function(params) {
        var params = $.extend({ classPrefix: 'audioplayer', strPlay: 'Play', strPause: 'Pause', strVolume: 'Volume' }, params),
            cssClass = {},
            cssClassSub = { playPause: 'playpause', playing: 'playing', time: 'time', timeCurrent: 'time-current', timeDuration: 'time-duration', bar: 'bar', barLoaded: 'bar-loaded', barPlayed: 'bar-played', volume: 'volume', volumeButton: 'volume-button', volumeAdjust: 'volume-adjust', noVolume: 'novolume', mute: 'mute', mini: 'mini' };
        for (var subName in cssClassSub)
            cssClass[subName] = params.classPrefix + '-' + cssClassSub[subName];
        this.each(function() {
            if ($(this).prop('tagName').toLowerCase() != 'audio')
                return !1;
            var $this = $(this),
                audioFile = $this.attr('src'),
                isAutoPlay = $this.get(0).getAttribute('autoplay'),
                isAutoPlay = isAutoPlay === '' || isAutoPlay === 'autoplay' ? !0 : !1,
                isLoop = $this.get(0).getAttribute('loop'),
                isLoop = isLoop === '' || isLoop === 'loop' ? !0 : !1,
                isSupport = !1;
            if (typeof audioFile === 'undefined') {
                $this.find('source').each(function() {
                    audioFile = $(this).attr('src');
                    if (typeof audioFile !== 'undefined' && canPlayType(audioFile)) { isSupport = !0; return !1 }
                })
            } else if (canPlayType(audioFile)) isSupport = !0;
            var thePlayer = $('<div class="' + params.classPrefix + '">' + (isSupport ? $('<div>').append($this.eq(0).clone()).html() : '<embed src="' + audioFile + '" width="0" height="0" volume="100" autostart="' + isAutoPlay.toString() + '" loop="' + isLoop.toString() + '" />') + '<div class="' + cssClass.playPause + '" title="' + params.strPlay + '"><a href="#">' + params.strPlay + '</a></div></div>'),
                theAudio = isSupport ? thePlayer.find('audio') : thePlayer.find('embed'),
                theAudio = theAudio.get(0);
            if (isSupport) {
                thePlayer.find('audio').css({ 'width': 0, 'height': 0, 'visibility': 'hidden' });
                thePlayer.append('<div class="' + cssClass.time + ' ' + cssClass.timeCurrent + '"></div><div class="' + cssClass.bar + '"><div class="' + cssClass.barLoaded + '"></div><div class="' + cssClass.barPlayed + '"></div></div><div class="' + cssClass.time + ' ' + cssClass.timeDuration + '"></div><div class="' + cssClass.volume + '"><div class="' + cssClass.volumeButton + '" title="' + params.strVolume + '"><a href="#">' + params.strVolume + '</a></div><div class="' + cssClass.volumeAdjust + '"><div><div></div></div></div></div>');
                var theBar = thePlayer.find('.' + cssClass.bar),
                    barPlayed = thePlayer.find('.' + cssClass.barPlayed),
                    barLoaded = thePlayer.find('.' + cssClass.barLoaded),
                    timeCurrent = thePlayer.find('.' + cssClass.timeCurrent),
                    timeDuration = thePlayer.find('.' + cssClass.timeDuration),
                    volumeButton = thePlayer.find('.' + cssClass.volumeButton),
                    volumeAdjuster = thePlayer.find('.' + cssClass.volumeAdjust + ' > div'),
                    volumeDefault = 0,
                    adjustCurrentTime = function(e) { theRealEvent = isTouch ? e.originalEvent.touches[0] : e;
                        theAudio.currentTime = Math.round((theAudio.duration * (theRealEvent.pageX - theBar.offset().left)) / theBar.width()) },
                    adjustVolume = function(e) { theRealEvent = isTouch ? e.originalEvent.touches[0] : e;
                        theAudio.volume = Math.abs((theRealEvent.pageY - (volumeAdjuster.offset().top + volumeAdjuster.height())) / volumeAdjuster.height()) },
                    updateLoadBar = setInterval(function() {
                        barLoaded.width((theAudio.buffered.end(0) / theAudio.duration) * 100 + '%');
                        if (theAudio.buffered.end(0) >= theAudio.duration)
                            clearInterval(updateLoadBar)
                    }, 100);
                var volumeTestDefault = theAudio.volume,
                    volumeTestValue = theAudio.volume = 0.111;
                if (Math.round(theAudio.volume * 1000) / 1000 == volumeTestValue) theAudio.volume = volumeTestDefault;
                else thePlayer.addClass(cssClass.noVolume);
                timeDuration.html('&hellip;');
                timeCurrent.text(secondsToTime(0));
                theAudio.addEventListener('loadeddata', function() { timeDuration.text(secondsToTime(theAudio.duration));
                    volumeAdjuster.find('div').height(theAudio.volume * 100 + '%');
                    volumeDefault = theAudio.volume });
                theAudio.addEventListener('timeupdate', function() { timeCurrent.text(secondsToTime(theAudio.currentTime));
                    barPlayed.width((theAudio.currentTime / theAudio.duration) * 100 + '%') });
                theAudio.addEventListener('volumechange', function() { volumeAdjuster.find('div').height(theAudio.volume * 100 + '%'); if (theAudio.volume > 0 && thePlayer.hasClass(cssClass.mute)) thePlayer.removeClass(cssClass.mute); if (theAudio.volume <= 0 && !thePlayer.hasClass(cssClass.mute)) thePlayer.addClass(cssClass.mute) });
                theAudio.addEventListener('ended', function() { thePlayer.removeClass(cssClass.playing) });
                theBar.on(eStart, function(e) { adjustCurrentTime(e);
                    theBar.on(eMove, function(e) { adjustCurrentTime(e) }) }).on(eCancel, function() { theBar.unbind(eMove) });
                volumeButton.on('click', function() {
                    if (thePlayer.hasClass(cssClass.mute)) { thePlayer.removeClass(cssClass.mute);
                        theAudio.volume = volumeDefault } else { thePlayer.addClass(cssClass.mute);
                        volumeDefault = theAudio.volume;
                        theAudio.volume = 0 }
                    return !1
                });
                volumeAdjuster.on(eStart, function(e) { adjustVolume(e);
                    volumeAdjuster.on(eMove, function(e) { adjustVolume(e) }) }).on(eCancel, function() { volumeAdjuster.unbind(eMove) })
            } else thePlayer.addClass(cssClass.mini);
            if (isAutoPlay) thePlayer.addClass(cssClass.playing);
            thePlayer.find('.' + cssClass.playPause).on('click', function() {
                if (thePlayer.hasClass(cssClass.playing)) { $(this).attr('title', params.strPlay).find('a').html(params.strPlay);
                    thePlayer.removeClass(cssClass.playing);
                    isSupport ? theAudio.pause() : theAudio.Stop() } else { $(this).attr('title', params.strPause).find('a').html(params.strPause);
                    thePlayer.addClass(cssClass.playing);
                    isSupport ? theAudio.play() : theAudio.Play() }
                return !1
            });
            $this.replaceWith(thePlayer)
        });
        return this
    }
})(jQuery, window, document);
! function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], function(a) { return b(a) }) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery) }(this, function(a) {! function(a) { "use strict";

        function b(b) { var c = [{ re: /[\xC0-\xC6]/g, ch: "A" }, { re: /[\xE0-\xE6]/g, ch: "a" }, { re: /[\xC8-\xCB]/g, ch: "E" }, { re: /[\xE8-\xEB]/g, ch: "e" }, { re: /[\xCC-\xCF]/g, ch: "I" }, { re: /[\xEC-\xEF]/g, ch: "i" }, { re: /[\xD2-\xD6]/g, ch: "O" }, { re: /[\xF2-\xF6]/g, ch: "o" }, { re: /[\xD9-\xDC]/g, ch: "U" }, { re: /[\xF9-\xFC]/g, ch: "u" }, { re: /[\xC7-\xE7]/g, ch: "c" }, { re: /[\xD1]/g, ch: "N" }, { re: /[\xF1]/g, ch: "n" }]; return a.each(c, function() { b = b.replace(this.re, this.ch) }), b }

        function c(a) { var b = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "`": "&#x60;" },
                c = "(?:" + Object.keys(b).join("|") + ")",
                d = new RegExp(c),
                e = new RegExp(c, "g"),
                f = null == a ? "" : "" + a; return d.test(f) ? f.replace(e, function(a) { return b[a] }) : f }

        function d(b, c) { var d = arguments,
                e = b,
                f = c;
            [].shift.apply(d); var h, i = this.each(function() { var b = a(this); if (b.is("select")) { var c = b.data("selectpicker"),
                        i = "object" == typeof e && e; if (c) { if (i)
                            for (var j in i) i.hasOwnProperty(j) && (c.options[j] = i[j]) } else { var k = a.extend({}, g.DEFAULTS, a.fn.selectpicker.defaults || {}, b.data(), i);
                        k.template = a.extend({}, g.DEFAULTS.template, a.fn.selectpicker.defaults ? a.fn.selectpicker.defaults.template : {}, b.data().template, i.template), b.data("selectpicker", c = new g(this, k, f)) } "string" == typeof e && (h = c[e] instanceof Function ? c[e].apply(c, d) : c.options[e]) } }); return "undefined" != typeof h ? h : i }
        String.prototype.includes || ! function() { var a = {}.toString,
                b = function() { try { var a = {},
                            b = Object.defineProperty,
                            c = b(a, a, a) && b } catch (d) {} return c }(),
                c = "".indexOf,
                d = function(b) { if (null == this) throw new TypeError; var d = String(this); if (b && "[object RegExp]" == a.call(b)) throw new TypeError; var e = d.length,
                        f = String(b),
                        g = f.length,
                        h = arguments.length > 1 ? arguments[1] : void 0,
                        i = h ? Number(h) : 0;
                    i != i && (i = 0); var j = Math.min(Math.max(i, 0), e); return g + j > e ? !1 : -1 != c.call(d, f, i) };
            b ? b(String.prototype, "includes", { value: d, configurable: !0, writable: !0 }) : String.prototype.includes = d }(), String.prototype.startsWith || ! function() { var a = function() { try { var a = {},
                            b = Object.defineProperty,
                            c = b(a, a, a) && b } catch (d) {} return c }(),
                b = {}.toString,
                c = function(a) { if (null == this) throw new TypeError; var c = String(this); if (a && "[object RegExp]" == b.call(a)) throw new TypeError; var d = c.length,
                        e = String(a),
                        f = e.length,
                        g = arguments.length > 1 ? arguments[1] : void 0,
                        h = g ? Number(g) : 0;
                    h != h && (h = 0); var i = Math.min(Math.max(h, 0), d); if (f + i > d) return !1; for (var j = -1; ++j < f;)
                        if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1;
                    return !0 };
            a ? a(String.prototype, "startsWith", { value: c, configurable: !0, writable: !0 }) : String.prototype.startsWith = c }(), Object.keys || (Object.keys = function(a, b, c) { c = []; for (b in a) c.hasOwnProperty.call(a, b) && c.push(b); return c }); var e = { useDefault: !1, _set: a.valHooks.select.set };
        a.valHooks.select.set = function(b, c) { return c && !e.useDefault && a(b).data("selected", !0), e._set.apply(this, arguments) }; var f = null;
        a.fn.triggerNative = function(a) { var b, c = this[0];
            c.dispatchEvent ? ("function" == typeof Event ? b = new Event(a, { bubbles: !0 }) : (b = document.createEvent("Event"), b.initEvent(a, !0, !1)), c.dispatchEvent(b)) : c.fireEvent ? (b = document.createEventObject(), b.eventType = a, c.fireEvent("on" + a, b)) : this.trigger(a) }, a.expr.pseudos.icontains = function(b, c, d) { var e = a(b),
                f = (e.data("tokens") || e.text()).toString().toUpperCase(); return f.includes(d[3].toUpperCase()) }, a.expr.pseudos.ibegins = function(b, c, d) { var e = a(b),
                f = (e.data("tokens") || e.text()).toString().toUpperCase(); return f.startsWith(d[3].toUpperCase()) }, a.expr.pseudos.aicontains = function(b, c, d) { var e = a(b),
                f = (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase(); return f.includes(d[3].toUpperCase()) }, a.expr.pseudos.aibegins = function(b, c, d) { var e = a(b),
                f = (e.data("tokens") || e.data("normalizedText") || e.text()).toString().toUpperCase(); return f.startsWith(d[3].toUpperCase()) }; var g = function(b, c, d) { e.useDefault || (a.valHooks.select.set = e._set, e.useDefault = !0), d && (d.stopPropagation(), d.preventDefault()), this.$element = a(b), this.$newElement = null, this.$button = null, this.$menu = null, this.$lis = null, this.options = c, null === this.options.title && (this.options.title = this.$element.attr("title")), this.val = g.prototype.val, this.render = g.prototype.render, this.refresh = g.prototype.refresh, this.setStyle = g.prototype.setStyle, this.selectAll = g.prototype.selectAll, this.deselectAll = g.prototype.deselectAll, this.destroy = g.prototype.destroy, this.remove = g.prototype.remove, this.show = g.prototype.show, this.hide = g.prototype.hide, this.init() };
        g.VERSION = "1.11.2", g.DEFAULTS = { noneSelectedText: "Nothing selected", noneResultsText: "No results matched {0}", countSelectedText: function(a, b) { return 1 == a ? "{0} item selected" : "{0} items selected" }, maxOptionsText: function(a, b) { return [1 == a ? "Limit reached ({n} item max)" : "Limit reached ({n} items max)", 1 == b ? "Group limit reached ({n} item max)" : "Group limit reached ({n} items max)"] }, selectAllText: "Select All", deselectAllText: "Deselect All", doneButton: !1, doneButtonText: "Close", multipleSeparator: ", ", styleBase: "btn", style: "btn-default", size: "auto", title: null, selectedTextFormat: "values", width: !1, container: !1, hideDisabled: !1, showSubtext: !1, showIcon: !0, showContent: !0, dropupAuto: !0, header: !1, liveSearch: !1, liveSearchPlaceholder: null, liveSearchNormalize: !1, liveSearchStyle: "contains", actionsBox: !1, iconBase: "glyphicon", tickIcon: "glyphicon-ok", showTick: !1, template: { caret: '<span class="caret"></span>' }, maxOptions: !1, mobile: !1, selectOnTab: !1, dropdownAlignRight: !1 }, g.prototype = { constructor: g, init: function() { var b = this,
                    c = this.$element.attr("id");
                this.$element.addClass("bs-select-hidden"), this.liObj = {}, this.multiple = this.$element.prop("multiple"), this.autofocus = this.$element.prop("autofocus"), this.$newElement = this.createView(), this.$element.after(this.$newElement).appendTo(this.$newElement), this.$button = this.$newElement.children("button"), this.$menu = this.$newElement.children(".dropdown-menu"), this.$menuInner = this.$menu.children(".inner"), this.$searchbox = this.$menu.find("input"), this.$element.removeClass("bs-select-hidden"), this.options.dropdownAlignRight === !0 && this.$menu.addClass("dropdown-menu-right"), "undefined" != typeof c && (this.$button.attr("data-id", c), a('label[for="' + c + '"]').click(function(a) { a.preventDefault(), b.$button.focus() })), this.checkDisabled(), this.clickListener(), this.options.liveSearch && this.liveSearchListener(), this.render(), this.setStyle(), this.setWidth(), this.options.container && this.selectPosition(), this.$menu.data("this", this), this.$newElement.data("this", this), this.options.mobile && this.mobile(), this.$newElement.on({ "hide.bs.dropdown": function(a) { b.$menuInner.attr("aria-expanded", !1), b.$element.trigger("hide.bs.select", a) }, "hidden.bs.dropdown": function(a) { b.$element.trigger("hidden.bs.select", a) }, "show.bs.dropdown": function(a) { b.$menuInner.attr("aria-expanded", !0), b.$element.trigger("show.bs.select", a) }, "shown.bs.dropdown": function(a) { b.$element.trigger("shown.bs.select", a) } }), b.$element[0].hasAttribute("required") && this.$element.on("invalid", function() { b.$button.addClass("bs-invalid").focus(), b.$element.on({ "focus.bs.select": function() { b.$button.focus(), b.$element.off("focus.bs.select") }, "shown.bs.select": function() { b.$element.val(b.$element.val()).off("shown.bs.select") }, "rendered.bs.select": function() { this.validity.valid && b.$button.removeClass("bs-invalid"), b.$element.off("rendered.bs.select") } }) }), setTimeout(function() { b.$element.trigger("loaded.bs.select") }) }, createDropdown: function() { var b = this.multiple || this.options.showTick ? " show-tick" : "",
                    d = this.$element.parent().hasClass("input-group") ? " input-group-btn" : "",
                    e = this.autofocus ? " autofocus" : "",
                    f = this.options.header ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + "</div>" : "",
                    g = this.options.liveSearch ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' + (null === this.options.liveSearchPlaceholder ? "" : ' placeholder="' + c(this.options.liveSearchPlaceholder) + '"') + ' role="textbox" aria-label="Search"></div>' : "",
                    h = this.multiple && this.options.actionsBox ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' + this.options.selectAllText + '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' + this.options.deselectAllText + "</button></div></div>" : "",
                    i = this.multiple && this.options.doneButton ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' + this.options.doneButtonText + "</button></div></div>" : "",
                    j = '<div class="btn-group bootstrap-select' + b + d + '"><button type="button" class="' + this.options.styleBase + ' dropdown-toggle" data-toggle="dropdown"' + e + ' role="button"><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">' + this.options.template.caret + '</span></button><div class="dropdown-menu open" role="combobox">' + f + g + h + '<ul class="dropdown-menu inner" role="listbox" aria-expanded="false"></ul>' + i + "</div></div>"; return a(j) }, createView: function() { var a = this.createDropdown(),
                    b = this.createLi(); return a.find("ul")[0].innerHTML = b, a }, reloadLi: function() { this.destroyLi(); var a = this.createLi();
                this.$menuInner[0].innerHTML = a }, destroyLi: function() { this.$menu.find("li").remove() }, createLi: function() { var d = this,
                    e = [],
                    f = 0,
                    g = document.createElement("option"),
                    h = -1,
                    i = function(a, b, c, d) { return "<li" + ("undefined" != typeof c & "" !== c ? ' class="' + c + '"' : "") + ("undefined" != typeof b & null !== b ? ' data-original-index="' + b + '"' : "") + ("undefined" != typeof d & null !== d ? 'data-optgroup="' + d + '"' : "") + ">" + a + "</li>" },
                    j = function(a, e, f, g) { return '<a tabindex="0"' + ("undefined" != typeof e ? ' class="' + e + '"' : "") + ("undefined" != typeof f ? ' style="' + f + '"' : "") + (d.options.liveSearchNormalize ? ' data-normalized-text="' + b(c(a)) + '"' : "") + ("undefined" != typeof g || null !== g ? ' data-tokens="' + g + '"' : "") + ' role="option">' + a + '<span class="' + d.options.iconBase + " " + d.options.tickIcon + ' check-mark"></span></a>' }; if (this.options.title && !this.multiple && (h--, !this.$element.find(".bs-title-option").length)) { var k = this.$element[0];
                    g.className = "bs-title-option", g.appendChild(document.createTextNode(this.options.title)), g.value = "", k.insertBefore(g, k.firstChild); var l = a(k.options[k.selectedIndex]);
                    void 0 === l.attr("selected") && void 0 === this.$element.data("selected") && (g.selected = !0) } return this.$element.find("option").each(function(b) { var c = a(this); if (h++, !c.hasClass("bs-title-option")) { var g = this.className || "",
                            k = this.style.cssText,
                            l = c.data("content") ? c.data("content") : c.html(),
                            m = c.data("tokens") ? c.data("tokens") : null,
                            n = "undefined" != typeof c.data("subtext") ? '<small class="text-muted">' + c.data("subtext") + "</small>" : "",
                            o = "undefined" != typeof c.data("icon") ? '<span class="' + d.options.iconBase + " " + c.data("icon") + '"></span> ' : "",
                            p = c.parent(),
                            q = "OPTGROUP" === p[0].tagName,
                            r = q && p[0].disabled,
                            s = this.disabled || r; if ("" !== o && s && (o = "<span>" + o + "</span>"), d.options.hideDisabled && (s && !q || r)) return void h--; if (c.data("content") || (l = o + '<span class="text">' + l + n + "</span>"), q && c.data("divider") !== !0) { if (d.options.hideDisabled && s) { if (void 0 === p.data("allOptionsDisabled")) { var t = p.children();
                                    p.data("allOptionsDisabled", t.filter(":disabled").length === t.length) } if (p.data("allOptionsDisabled")) return void h-- } var u = " " + p[0].className || ""; if (0 === c.index()) { f += 1; var v = p[0].label,
                                    w = "undefined" != typeof p.data("subtext") ? '<small class="text-muted">' + p.data("subtext") + "</small>" : "",
                                    x = p.data("icon") ? '<span class="' + d.options.iconBase + " " + p.data("icon") + '"></span> ' : "";
                                v = x + '<span class="text">' + v + w + "</span>", 0 !== b && e.length > 0 && (h++, e.push(i("", null, "divider", f + "div"))), h++, e.push(i(v, null, "dropdown-header" + u, f)) } if (d.options.hideDisabled && s) return void h--;
                            e.push(i(j(l, "opt " + g + u, k, m), b, "", f)) } else if (c.data("divider") === !0) e.push(i("", b, "divider"));
                        else if (c.data("hidden") === !0) e.push(i(j(l, g, k, m), b, "hidden is-hidden"));
                        else { var y = this.previousElementSibling && "OPTGROUP" === this.previousElementSibling.tagName; if (!y && d.options.hideDisabled)
                                for (var z = a(this).prevAll(), A = 0; A < z.length; A++)
                                    if ("OPTGROUP" === z[A].tagName) { for (var B = 0, C = 0; A > C; C++) { var D = z[C];
                                            (D.disabled || a(D).data("hidden") === !0) && B++ }
                                        B === A && (y = !0); break }
                            y && (h++, e.push(i("", null, "divider", f + "div"))), e.push(i(j(l, g, k, m), b)) }
                        d.liObj[b] = h } }), this.multiple || 0 !== this.$element.find("option:selected").length || this.options.title || this.$element.find("option").eq(0).prop("selected", !0).attr("selected", "selected"), e.join("") }, findLis: function() { return null == this.$lis && (this.$lis = this.$menu.find("li")), this.$lis }, render: function(b) { var c, d = this;
                b !== !1 && this.$element.find("option").each(function(a) { var b = d.findLis().eq(d.liObj[a]);
                    d.setDisabled(a, this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled, b), d.setSelected(a, this.selected, b) }), this.togglePlaceholder(), this.tabIndex(); var e = this.$element.find("option").map(function() { if (this.selected) { if (d.options.hideDisabled && (this.disabled || "OPTGROUP" === this.parentNode.tagName && this.parentNode.disabled)) return; var b, c = a(this),
                                e = c.data("icon") && d.options.showIcon ? '<i class="' + d.options.iconBase + " " + c.data("icon") + '"></i> ' : ""; return b = d.options.showSubtext && c.data("subtext") && !d.multiple ? ' <small class="text-muted">' + c.data("subtext") + "</small>" : "", "undefined" != typeof c.attr("title") ? c.attr("title") : c.data("content") && d.options.showContent ? c.data("content") : e + c.html() + b } }).toArray(),
                    f = this.multiple ? e.join(this.options.multipleSeparator) : e[0]; if (this.multiple && this.options.selectedTextFormat.indexOf("count") > -1) { var g = this.options.selectedTextFormat.split(">"); if (g.length > 1 && e.length > g[1] || 1 == g.length && e.length >= 2) { c = this.options.hideDisabled ? ", [disabled]" : ""; var h = this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]' + c).length,
                            i = "function" == typeof this.options.countSelectedText ? this.options.countSelectedText(e.length, h) : this.options.countSelectedText;
                        f = i.replace("{0}", e.length.toString()).replace("{1}", h.toString()) } }
                void 0 == this.options.title && (this.options.title = this.$element.attr("title")), "static" == this.options.selectedTextFormat && (f = this.options.title), f || (f = "undefined" != typeof this.options.title ? this.options.title : this.options.noneSelectedText), this.$button.attr("title", a.trim(f.replace(/<[^>]*>?/g, ""))), this.$button.children(".filter-option").html(f), this.$element.trigger("rendered.bs.select") }, setStyle: function(a, b) { this.$element.attr("class") && this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, "")); var c = a ? a : this.options.style; "add" == b ? this.$button.addClass(c) : "remove" == b ? this.$button.removeClass(c) : (this.$button.removeClass(this.options.style), this.$button.addClass(c)) }, liHeight: function(b) { if (b || this.options.size !== !1 && !this.sizeInfo) { var c = document.createElement("div"),
                        d = document.createElement("div"),
                        e = document.createElement("ul"),
                        f = document.createElement("li"),
                        g = document.createElement("li"),
                        h = document.createElement("a"),
                        i = document.createElement("span"),
                        j = this.options.header && this.$menu.find(".popover-title").length > 0 ? this.$menu.find(".popover-title")[0].cloneNode(!0) : null,
                        k = this.options.liveSearch ? document.createElement("div") : null,
                        l = this.options.actionsBox && this.multiple && this.$menu.find(".bs-actionsbox").length > 0 ? this.$menu.find(".bs-actionsbox")[0].cloneNode(!0) : null,
                        m = this.options.doneButton && this.multiple && this.$menu.find(".bs-donebutton").length > 0 ? this.$menu.find(".bs-donebutton")[0].cloneNode(!0) : null; if (i.className = "text", c.className = this.$menu[0].parentNode.className + " open", d.className = "dropdown-menu open", e.className = "dropdown-menu inner", f.className = "divider", i.appendChild(document.createTextNode("Inner text")), h.appendChild(i), g.appendChild(h), e.appendChild(g), e.appendChild(f), j && d.appendChild(j), k) { var n = document.createElement("span");
                        k.className = "bs-searchbox", n.className = "form-control", k.appendChild(n), d.appendChild(k) }
                    l && d.appendChild(l), d.appendChild(e), m && d.appendChild(m), c.appendChild(d), document.body.appendChild(c); var o = h.offsetHeight,
                        p = j ? j.offsetHeight : 0,
                        q = k ? k.offsetHeight : 0,
                        r = l ? l.offsetHeight : 0,
                        s = m ? m.offsetHeight : 0,
                        t = a(f).outerHeight(!0),
                        u = "function" == typeof getComputedStyle ? getComputedStyle(d) : !1,
                        v = u ? null : a(d),
                        w = { vert: parseInt(u ? u.paddingTop : v.css("paddingTop")) + parseInt(u ? u.paddingBottom : v.css("paddingBottom")) + parseInt(u ? u.borderTopWidth : v.css("borderTopWidth")) + parseInt(u ? u.borderBottomWidth : v.css("borderBottomWidth")), horiz: parseInt(u ? u.paddingLeft : v.css("paddingLeft")) + parseInt(u ? u.paddingRight : v.css("paddingRight")) + parseInt(u ? u.borderLeftWidth : v.css("borderLeftWidth")) + parseInt(u ? u.borderRightWidth : v.css("borderRightWidth")) },
                        x = { vert: w.vert + parseInt(u ? u.marginTop : v.css("marginTop")) + parseInt(u ? u.marginBottom : v.css("marginBottom")) + 2, horiz: w.horiz + parseInt(u ? u.marginLeft : v.css("marginLeft")) + parseInt(u ? u.marginRight : v.css("marginRight")) + 2 };
                    document.body.removeChild(c), this.sizeInfo = { liHeight: o, headerHeight: p, searchHeight: q, actionsHeight: r, doneButtonHeight: s, dividerHeight: t, menuPadding: w, menuExtras: x } } }, setSize: function() { if (this.findLis(), this.liHeight(), this.options.header && this.$menu.css("padding-top", 0), this.options.size !== !1) { var b, c, d, e, f, g, h, i, j = this,
                        k = this.$menu,
                        l = this.$menuInner,
                        m = a(window),
                        n = this.$newElement[0].offsetHeight,
                        o = this.$newElement[0].offsetWidth,
                        p = this.sizeInfo.liHeight,
                        q = this.sizeInfo.headerHeight,
                        r = this.sizeInfo.searchHeight,
                        s = this.sizeInfo.actionsHeight,
                        t = this.sizeInfo.doneButtonHeight,
                        u = this.sizeInfo.dividerHeight,
                        v = this.sizeInfo.menuPadding,
                        w = this.sizeInfo.menuExtras,
                        x = this.options.hideDisabled ? ".disabled" : "",
                        y = function() { var b, c = j.$newElement.offset(),
                                d = a(j.options.container);
                            j.options.container && !d.is("body") ? (b = d.offset(), b.top += parseInt(d.css("borderTopWidth")), b.left += parseInt(d.css("borderLeftWidth"))) : b = { top: 0, left: 0 }, f = c.top - b.top - m.scrollTop(), g = m.height() - f - n - b.top, h = c.left - b.left - m.scrollLeft(), i = m.width() - h - o - b.left }; if (y(), "auto" === this.options.size) { var z = function() { var m, n = function(b, c) { return function(d) { return c ? d.classList ? d.classList.contains(b) : a(d).hasClass(b) : !(d.classList ? d.classList.contains(b) : a(d).hasClass(b)) } },
                                u = j.$menuInner[0].getElementsByTagName("li"),
                                x = Array.prototype.filter ? Array.prototype.filter.call(u, n("hidden", !1)) : j.$lis.not(".hidden"),
                                z = Array.prototype.filter ? Array.prototype.filter.call(x, n("dropdown-header", !0)) : x.filter(".dropdown-header");
                            y(), b = g - w.vert, c = i - w.horiz, j.options.container ? (k.data("height") || k.data("height", k.height()), d = k.data("height"), k.data("width") || k.data("width", k.width()), e = k.data("width")) : (d = k.height(), e = k.width()), j.options.dropupAuto && j.$newElement.toggleClass("dropup", f > g && b - w.vert < d), j.$newElement.hasClass("dropup") && (b = f - w.vert), "auto" === j.options.dropdownAlignRight && k.toggleClass("dropdown-menu-right", h > i && c - w.horiz < e - o), m = x.length + z.length > 3 ? 3 * p + w.vert - 2 : 0, k.css({ "max-height": b + "px", overflow: "hidden", "min-height": m + q + r + s + t + "px" }), l.css({ "max-height": b - q - r - s - t - v.vert + "px", "overflow-y": "auto", "min-height": Math.max(m - v.vert, 0) + "px" }) };
                        z(), this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize", z), m.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize", z) } else if (this.options.size && "auto" != this.options.size && this.$lis.not(x).length > this.options.size) { var A = this.$lis.not(".divider").not(x).children().slice(0, this.options.size).last().parent().index(),
                            B = this.$lis.slice(0, A + 1).filter(".divider").length;
                        b = p * this.options.size + B * u + v.vert, j.options.container ? (k.data("height") || k.data("height", k.height()), d = k.data("height")) : d = k.height(), j.options.dropupAuto && this.$newElement.toggleClass("dropup", f > g && b - w.vert < d), k.css({ "max-height": b + q + r + s + t + "px", overflow: "hidden", "min-height": "" }), l.css({ "max-height": b - v.vert + "px", "overflow-y": "auto", "min-height": "" }) } } }, setWidth: function() { if ("auto" === this.options.width) { this.$menu.css("min-width", "0"); var a = this.$menu.parent().clone().appendTo("body"),
                        b = this.options.container ? this.$newElement.clone().appendTo("body") : a,
                        c = a.children(".dropdown-menu").outerWidth(),
                        d = b.css("width", "auto").children("button").outerWidth();
                    a.remove(), b.remove(), this.$newElement.css("width", Math.max(c, d) + "px") } else "fit" === this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", "").addClass("fit-width")) : this.options.width ? (this.$menu.css("min-width", ""), this.$newElement.css("width", this.options.width)) : (this.$menu.css("min-width", ""), this.$newElement.css("width", ""));
                this.$newElement.hasClass("fit-width") && "fit" !== this.options.width && this.$newElement.removeClass("fit-width") }, selectPosition: function() { this.$bsContainer = a('<div class="bs-container" />'); var b, c, d, e = this,
                    f = a(this.options.container),
                    g = function(a) { e.$bsContainer.addClass(a.attr("class").replace(/form-control|fit-width/gi, "")).toggleClass("dropup", a.hasClass("dropup")), b = a.offset(), f.is("body") ? c = { top: 0, left: 0 } : (c = f.offset(), c.top += parseInt(f.css("borderTopWidth")) - f.scrollTop(), c.left += parseInt(f.css("borderLeftWidth")) - f.scrollLeft()), d = a.hasClass("dropup") ? 0 : a[0].offsetHeight, e.$bsContainer.css({ top: b.top - c.top + d, left: b.left - c.left, width: a[0].offsetWidth }) };
                this.$button.on("click", function() { var b = a(this);
                    e.isDisabled() || (g(e.$newElement), e.$bsContainer.appendTo(e.options.container).toggleClass("open", !b.hasClass("open")).append(e.$menu)) }), a(window).on("resize scroll", function() { g(e.$newElement) }), this.$element.on("hide.bs.select", function() { e.$menu.data("height", e.$menu.height()), e.$bsContainer.detach() }) }, setSelected: function(a, b, c) { c || (this.togglePlaceholder(), c = this.findLis().eq(this.liObj[a])), c.toggleClass("selected", b).find("a").attr("aria-selected", b) }, setDisabled: function(a, b, c) { c || (c = this.findLis().eq(this.liObj[a])), b ? c.addClass("disabled").children("a").attr("href", "#").attr("tabindex", -1).attr("aria-disabled", !0) : c.removeClass("disabled").children("a").removeAttr("href").attr("tabindex", 0).attr("aria-disabled", !1) }, isDisabled: function() { return this.$element[0].disabled }, checkDisabled: function() { var a = this;
                this.isDisabled() ? (this.$newElement.addClass("disabled"), this.$button.addClass("disabled").attr("tabindex", -1)) : (this.$button.hasClass("disabled") && (this.$newElement.removeClass("disabled"), this.$button.removeClass("disabled")), -1 != this.$button.attr("tabindex") || this.$element.data("tabindex") || this.$button.removeAttr("tabindex")), this.$button.click(function() { return !a.isDisabled() }) }, togglePlaceholder: function() { var a = this.$element.val();
                this.$button.toggleClass("bs-placeholder", null === a || "" === a) }, tabIndex: function() { this.$element.data("tabindex") !== this.$element.attr("tabindex") && -98 !== this.$element.attr("tabindex") && "-98" !== this.$element.attr("tabindex") && (this.$element.data("tabindex", this.$element.attr("tabindex")), this.$button.attr("tabindex", this.$element.data("tabindex"))), this.$element.attr("tabindex", -98) }, clickListener: function() { var b = this,
                    c = a(document);
                this.$newElement.on("touchstart.dropdown", ".dropdown-menu", function(a) { a.stopPropagation() }), c.data("spaceSelect", !1), this.$button.on("keyup", function(a) { /(32)/.test(a.keyCode.toString(10)) && c.data("spaceSelect") && (a.preventDefault(), c.data("spaceSelect", !1)) }), this.$button.on("click", function() { b.setSize() }), this.$element.on("shown.bs.select", function() { if (b.options.liveSearch || b.multiple) { if (!b.multiple) { var a = b.liObj[b.$element[0].selectedIndex]; if ("number" != typeof a || b.options.size === !1) return; var c = b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop;
                            c = c - b.$menuInner[0].offsetHeight / 2 + b.sizeInfo.liHeight / 2, b.$menuInner[0].scrollTop = c } } else b.$menuInner.find(".selected a").focus() }), this.$menuInner.on("click", "li a", function(c) { var d = a(this),
                        e = d.parent().data("originalIndex"),
                        g = b.$element.val(),
                        h = b.$element.prop("selectedIndex"),
                        i = !0; if (b.multiple && 1 !== b.options.maxOptions && c.stopPropagation(), c.preventDefault(), !b.isDisabled() && !d.parent().hasClass("disabled")) { var j = b.$element.find("option"),
                            k = j.eq(e),
                            l = k.prop("selected"),
                            m = k.parent("optgroup"),
                            n = b.options.maxOptions,
                            o = m.data("maxOptions") || !1; if (b.multiple) { if (k.prop("selected", !l), b.setSelected(e, !l), d.blur(), n !== !1 || o !== !1) { var p = n < j.filter(":selected").length,
                                    q = o < m.find("option:selected").length; if (n && p || o && q)
                                    if (n && 1 == n) j.prop("selected", !1), k.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected"), b.setSelected(e, !0);
                                    else if (o && 1 == o) { m.find("option:selected").prop("selected", !1), k.prop("selected", !0); var r = d.parent().data("optgroup");
                                    b.$menuInner.find('[data-optgroup="' + r + '"]').removeClass("selected"), b.setSelected(e, !0) } else { var s = "string" == typeof b.options.maxOptionsText ? [b.options.maxOptionsText, b.options.maxOptionsText] : b.options.maxOptionsText,
                                        t = "function" == typeof s ? s(n, o) : s,
                                        u = t[0].replace("{n}", n),
                                        v = t[1].replace("{n}", o),
                                        w = a('<div class="notify"></div>');
                                    t[2] && (u = u.replace("{var}", t[2][n > 1 ? 0 : 1]), v = v.replace("{var}", t[2][o > 1 ? 0 : 1])), k.prop("selected", !1), b.$menu.append(w), n && p && (w.append(a("<div>" + u + "</div>")), i = !1, b.$element.trigger("maxReached.bs.select")), o && q && (w.append(a("<div>" + v + "</div>")), i = !1, b.$element.trigger("maxReachedGrp.bs.select")), setTimeout(function() { b.setSelected(e, !1) }, 10), w.delay(750).fadeOut(300, function() { a(this).remove() }) } } } else j.prop("selected", !1), k.prop("selected", !0), b.$menuInner.find(".selected").removeClass("selected").find("a").attr("aria-selected", !1), b.setSelected(e, !0);!b.multiple || b.multiple && 1 === b.options.maxOptions ? b.$button.focus() : b.options.liveSearch && b.$searchbox.focus(), i && (g != b.$element.val() && b.multiple || h != b.$element.prop("selectedIndex") && !b.multiple) && (f = [e, k.prop("selected"), l], b.$element.triggerNative("change")) } }), this.$menu.on("click", "li.disabled a, .popover-title, .popover-title :not(.close)", function(c) { c.currentTarget == this && (c.preventDefault(), c.stopPropagation(), b.options.liveSearch && !a(c.target).hasClass("close") ? b.$searchbox.focus() : b.$button.focus()) }), this.$menuInner.on("click", ".divider, .dropdown-header", function(a) { a.preventDefault(), a.stopPropagation(), b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus() }), this.$menu.on("click", ".popover-title .close", function() { b.$button.click() }), this.$searchbox.on("click", function(a) { a.stopPropagation() }), this.$menu.on("click", ".actions-btn", function(c) { b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(), c.preventDefault(), c.stopPropagation(), a(this).hasClass("bs-select-all") ? b.selectAll() : b.deselectAll() }), this.$element.change(function() { b.render(!1), b.$element.trigger("changed.bs.select", f), f = null }) }, liveSearchListener: function() { var d = this,
                    e = a('<li class="no-results"></li>');
                this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api", function() { d.$menuInner.find(".active").removeClass("active"), d.$searchbox.val() && (d.$searchbox.val(""), d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove()), d.multiple || d.$menuInner.find(".selected").addClass("active"), setTimeout(function() { d.$searchbox.focus() }, 10) }), this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api", function(a) { a.stopPropagation() }), this.$searchbox.on("input propertychange", function() { if (d.$searchbox.val()) { var f = d.$lis.not(".is-hidden").removeClass("hidden").children("a");
                        f = d.options.liveSearchNormalize ? f.not(":a" + d._searchStyle() + '("' + b(d.$searchbox.val()) + '")') : f.not(":" + d._searchStyle() + '("' + d.$searchbox.val() + '")'), f.parent().addClass("hidden"), d.$lis.filter(".dropdown-header").each(function() { var b = a(this),
                                c = b.data("optgroup");
                            0 === d.$lis.filter("[data-optgroup=" + c + "]").not(b).not(".hidden").length && (b.addClass("hidden"), d.$lis.filter("[data-optgroup=" + c + "div]").addClass("hidden")) }); var g = d.$lis.not(".hidden");
                        g.each(function(b) { var c = a(this);
                            c.hasClass("divider") && (c.index() === g.first().index() || c.index() === g.last().index() || g.eq(b + 1).hasClass("divider")) && c.addClass("hidden") }), d.$lis.not(".hidden, .no-results").length ? e.parent().length && e.remove() : (e.parent().length && e.remove(), e.html(d.options.noneResultsText.replace("{0}", '"' + c(d.$searchbox.val()) + '"')).show(), d.$menuInner.append(e)) } else d.$lis.not(".is-hidden").removeClass("hidden"), e.parent().length && e.remove();
                    d.$lis.filter(".active").removeClass("active"), d.$searchbox.val() && d.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(), a(this).focus() }) }, _searchStyle: function() { var a = { begins: "ibegins", startsWith: "ibegins" }; return a[this.options.liveSearchStyle] || "icontains" }, val: function(a) { return "undefined" != typeof a ? (this.$element.val(a), this.render(), this.$element) : this.$element.val() }, changeAll: function(b) { if (this.multiple) { "undefined" == typeof b && (b = !0), this.findLis(); var c = this.$element.find("option"),
                        d = this.$lis.not(".divider, .dropdown-header, .disabled, .hidden"),
                        e = d.length,
                        f = []; if (b) { if (d.filter(".selected").length === d.length) return } else if (0 === d.filter(".selected").length) return;
                    d.toggleClass("selected", b); for (var g = 0; e > g; g++) { var h = d[g].getAttribute("data-original-index");
                        f[f.length] = c.eq(h)[0] }
                    a(f).prop("selected", b), this.render(!1), this.togglePlaceholder(), this.$element.triggerNative("change") } }, selectAll: function() { return this.changeAll(!0) }, deselectAll: function() { return this.changeAll(!1) }, toggle: function(a) { a = a || window.event, a && a.stopPropagation(), this.$button.trigger("click") }, keydown: function(c) { var d, e, f, g, h, i, j, k, l, m = a(this),
                    n = m.is("input") ? m.parent().parent() : m.parent(),
                    o = n.data("this"),
                    p = ":not(.disabled, .hidden, .dropdown-header, .divider)",
                    q = { 32: " ", 48: "0", 49: "1", 50: "2", 51: "3", 52: "4", 53: "5", 54: "6", 55: "7", 56: "8", 57: "9", 59: ";", 65: "a", 66: "b", 67: "c", 68: "d", 69: "e", 70: "f", 71: "g", 72: "h", 73: "i", 74: "j", 75: "k", 76: "l", 77: "m", 78: "n", 79: "o", 80: "p", 81: "q", 82: "r", 83: "s", 84: "t", 85: "u", 86: "v", 87: "w", 88: "x", 89: "y", 90: "z", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9" }; if (o.options.liveSearch && (n = m.parent().parent()), o.options.container && (n = o.$menu), d = a('[role="listbox"] li', n), l = o.$newElement.hasClass("open"), !l && (c.keyCode >= 48 && c.keyCode <= 57 || c.keyCode >= 96 && c.keyCode <= 105 || c.keyCode >= 65 && c.keyCode <= 90)) return o.options.container ? o.$button.trigger("click") : (o.setSize(), o.$menu.parent().addClass("open"), l = !0), void o.$searchbox.focus(); if (o.options.liveSearch && (/(^9$|27)/.test(c.keyCode.toString(10)) && l && (c.preventDefault(), c.stopPropagation(), o.$button.click().focus()), d = a('[role="listbox"] li' + p, n), m.val() || /(38|40)/.test(c.keyCode.toString(10)) || 0 === d.filter(".active").length && (d = o.$menuInner.find("li"), d = o.options.liveSearchNormalize ? d.filter(":a" + o._searchStyle() + "(" + b(q[c.keyCode]) + ")") : d.filter(":" + o._searchStyle() + "(" + q[c.keyCode] + ")"))), d.length) { if (/(38|40)/.test(c.keyCode.toString(10))) e = d.index(d.find("a").filter(":focus").parent()), g = d.filter(p).first().index(), h = d.filter(p).last().index(), f = d.eq(e).nextAll(p).eq(0).index(), i = d.eq(e).prevAll(p).eq(0).index(), j = d.eq(f).prevAll(p).eq(0).index(), o.options.liveSearch && (d.each(function(b) { a(this).hasClass("disabled") || a(this).data("index", b) }), e = d.index(d.filter(".active")), g = d.first().data("index"), h = d.last().data("index"), f = d.eq(e).nextAll().eq(0).data("index"), i = d.eq(e).prevAll().eq(0).data("index"), j = d.eq(f).prevAll().eq(0).data("index")), k = m.data("prevIndex"), 38 == c.keyCode ? (o.options.liveSearch && e--, e != j && e > i && (e = i), g > e && (e = g), e == k && (e = h)) : 40 == c.keyCode && (o.options.liveSearch && e++, -1 == e && (e = 0), e != j && f > e && (e = f), e > h && (e = h), e == k && (e = g)), m.data("prevIndex", e), o.options.liveSearch ? (c.preventDefault(), m.hasClass("dropdown-toggle") || (d.removeClass("active").eq(e).addClass("active").children("a").focus(), m.focus())) : d.eq(e).children("a").focus();
                    else if (!m.is("input")) { var r, s, t = [];
                        d.each(function() { a(this).hasClass("disabled") || a.trim(a(this).children("a").text().toLowerCase()).substring(0, 1) == q[c.keyCode] && t.push(a(this).index()) }), r = a(document).data("keycount"), r++, a(document).data("keycount", r), s = a.trim(a(":focus").text().toLowerCase()).substring(0, 1), s != q[c.keyCode] ? (r = 1, a(document).data("keycount", r)) : r >= t.length && (a(document).data("keycount", 0), r > t.length && (r = 1)), d.eq(t[r - 1]).children("a").focus() } if ((/(13|32)/.test(c.keyCode.toString(10)) || /(^9$)/.test(c.keyCode.toString(10)) && o.options.selectOnTab) && l) { if (/(32)/.test(c.keyCode.toString(10)) || c.preventDefault(), o.options.liveSearch) /(32)/.test(c.keyCode.toString(10)) || (o.$menuInner.find(".active a").click(), m.focus());
                        else { var u = a(":focus");
                            u.click(), u.focus(), c.preventDefault(), a(document).data("spaceSelect", !0) }
                        a(document).data("keycount", 0) }(/(^9$|27)/.test(c.keyCode.toString(10)) && l && (o.multiple || o.options.liveSearch) || /(27)/.test(c.keyCode.toString(10)) && !l) && (o.$menu.parent().removeClass("open"), o.options.container && o.$newElement.removeClass("open"), o.$button.focus()) } }, mobile: function() { this.$element.addClass("mobile-device") }, refresh: function() { this.$lis = null, this.liObj = {}, this.reloadLi(), this.render(), this.checkDisabled(), this.liHeight(!0), this.setStyle(), this.setWidth(), this.$lis && this.$searchbox.trigger("propertychange"), this.$element.trigger("refreshed.bs.select") }, hide: function() { this.$newElement.hide() }, show: function() { this.$newElement.show() }, remove: function() { this.$newElement.remove(), this.$element.remove() }, destroy: function() { this.$newElement.before(this.$element).remove(), this.$bsContainer ? this.$bsContainer.remove() : this.$menu.remove(), this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker") } }; var h = a.fn.selectpicker;
        a.fn.selectpicker = d, a.fn.selectpicker.Constructor = g, a.fn.selectpicker.noConflict = function() { return a.fn.selectpicker = h, this }, a(document).data("keycount", 0).on("keydown.bs.select", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', g.prototype.keydown).on("focusin.modal", '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="listbox"], .bs-searchbox input', function(a) { a.stopPropagation() }), a(window).on("load.bs.select.data-api", function() { a(".selectpicker").each(function() { var b = a(this);
                d.call(b, b.data()) }) }) }(a) });
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : jQuery) }(function(a, b) {
    function c() { return new Date(Date.UTC.apply(Date, arguments)) }

    function d() { var a = new Date; return c(a.getFullYear(), a.getMonth(), a.getDate()) }

    function e(a, b) { return a.getUTCFullYear() === b.getUTCFullYear() && a.getUTCMonth() === b.getUTCMonth() && a.getUTCDate() === b.getUTCDate() }

    function f(a) { return function() { return this[a].apply(this, arguments) } }

    function g(a) { return a && !isNaN(a.getTime()) }

    function h(b, c) {
        function d(a, b) { return b.toLowerCase() } var e, f = a(b).data(),
            g = {},
            h = new RegExp("^" + c.toLowerCase() + "([A-Z])");
        c = new RegExp("^" + c.toLowerCase()); for (var i in f) c.test(i) && (e = i.replace(h, d), g[e] = f[i]); return g }

    function i(b) { var c = {}; if (q[b] || (b = b.split("-")[0], q[b])) { var d = q[b]; return a.each(p, function(a, b) { b in d && (c[b] = d[b]) }), c } } var j = function() { var b = { get: function(a) { return this.slice(a)[0] }, contains: function(a) { for (var b = a && a.valueOf(), c = 0, d = this.length; d > c; c++)
                        if (0 <= this[c].valueOf() - b && this[c].valueOf() - b < 864e5) return c;
                    return -1 }, remove: function(a) { this.splice(a, 1) }, replace: function(b) { b && (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b)) }, clear: function() { this.length = 0 }, copy: function() { var a = new j; return a.replace(this), a } }; return function() { var c = []; return c.push.apply(c, arguments), a.extend(c, b), c } }(),
        k = function(b, c) { a.data(b, "datepicker", this), this._process_options(c), this.dates = new j, this.viewDate = this.o.defaultViewDate, this.focusDate = null, this.element = a(b), this.isInput = this.element.is("input"), this.inputField = this.isInput ? this.element : this.element.find("input"), this.component = this.element.hasClass("date") ? this.element.find(".add-on, .input-group-addon, .btn") : !1, this.component && 0 === this.component.length && (this.component = !1), this.isInline = !this.component && this.element.is("div"), this.picker = a(r.template), this._check_template(this.o.templates.leftArrow) && this.picker.find(".prev").html(this.o.templates.leftArrow), this._check_template(this.o.templates.rightArrow) && this.picker.find(".next").html(this.o.templates.rightArrow), this._buildEvents(), this._attachEvents(), this.isInline ? this.picker.addClass("datepicker-inline").appendTo(this.element) : this.picker.addClass("datepicker-dropdown dropdown-menu"), this.o.rtl && this.picker.addClass("datepicker-rtl"), this.o.calendarWeeks && this.picker.find(".datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear").attr("colspan", function(a, b) { return Number(b) + 1 }), this._allow_update = !1, this.setStartDate(this._o.startDate), this.setEndDate(this._o.endDate), this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled), this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted), this.setDatesDisabled(this.o.datesDisabled), this.setViewMode(this.o.startView), this.fillDow(), this.fillMonths(), this._allow_update = !0, this.update(), this.isInline && this.show() };
    k.prototype = { constructor: k, _resolveViewName: function(b) { return a.each(r.viewModes, function(c, d) { return b === c || -1 !== a.inArray(b, d.names) ? (b = c, !1) : void 0 }), b }, _resolveDaysOfWeek: function(b) { return a.isArray(b) || (b = b.split(/[,\s]*/)), a.map(b, Number) }, _check_template: function(c) { try { if (c === b || "" === c) return !1; if ((c.match(/[<>]/g) || []).length <= 0) return !0; var d = a(c); return d.length > 0 } catch (e) { return !1 } }, _process_options: function(b) { this._o = a.extend({}, this._o, b); var e = this.o = a.extend({}, this._o),
                f = e.language;
            q[f] || (f = f.split("-")[0], q[f] || (f = o.language)), e.language = f, e.startView = this._resolveViewName(e.startView), e.minViewMode = this._resolveViewName(e.minViewMode), e.maxViewMode = this._resolveViewName(e.maxViewMode), e.startView = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, e.startView)), e.multidate !== !0 && (e.multidate = Number(e.multidate) || !1, e.multidate !== !1 && (e.multidate = Math.max(0, e.multidate))), e.multidateSeparator = String(e.multidateSeparator), e.weekStart %= 7, e.weekEnd = (e.weekStart + 6) % 7; var g = r.parseFormat(e.format);
            e.startDate !== -(1 / 0) && (e.startDate ? e.startDate instanceof Date ? e.startDate = this._local_to_utc(this._zero_time(e.startDate)) : e.startDate = r.parseDate(e.startDate, g, e.language, e.assumeNearbyYear) : e.startDate = -(1 / 0)), e.endDate !== 1 / 0 && (e.endDate ? e.endDate instanceof Date ? e.endDate = this._local_to_utc(this._zero_time(e.endDate)) : e.endDate = r.parseDate(e.endDate, g, e.language, e.assumeNearbyYear) : e.endDate = 1 / 0), e.daysOfWeekDisabled = this._resolveDaysOfWeek(e.daysOfWeekDisabled || []), e.daysOfWeekHighlighted = this._resolveDaysOfWeek(e.daysOfWeekHighlighted || []), e.datesDisabled = e.datesDisabled || [], a.isArray(e.datesDisabled) || (e.datesDisabled = e.datesDisabled.split(",")), e.datesDisabled = a.map(e.datesDisabled, function(a) { return r.parseDate(a, g, e.language, e.assumeNearbyYear) }); var h = String(e.orientation).toLowerCase().split(/\s+/g),
                i = e.orientation.toLowerCase(); if (h = a.grep(h, function(a) { return /^auto|left|right|top|bottom$/.test(a) }), e.orientation = { x: "auto", y: "auto" }, i && "auto" !== i)
                if (1 === h.length) switch (h[0]) {
                    case "top":
                    case "bottom":
                        e.orientation.y = h[0]; break;
                    case "left":
                    case "right":
                        e.orientation.x = h[0] } else i = a.grep(h, function(a) { return /^left|right$/.test(a) }), e.orientation.x = i[0] || "auto", i = a.grep(h, function(a) { return /^top|bottom$/.test(a) }), e.orientation.y = i[0] || "auto";
            if (e.defaultViewDate) { var j = e.defaultViewDate.year || (new Date).getFullYear(),
                    k = e.defaultViewDate.month || 0,
                    l = e.defaultViewDate.day || 1;
                e.defaultViewDate = c(j, k, l) } else e.defaultViewDate = d() }, _events: [], _secondaryEvents: [], _applyEvents: function(a) { for (var c, d, e, f = 0; f < a.length; f++) c = a[f][0], 2 === a[f].length ? (d = b, e = a[f][1]) : 3 === a[f].length && (d = a[f][1], e = a[f][2]), c.on(e, d) }, _unapplyEvents: function(a) { for (var c, d, e, f = 0; f < a.length; f++) c = a[f][0], 2 === a[f].length ? (e = b, d = a[f][1]) : 3 === a[f].length && (e = a[f][1], d = a[f][2]), c.off(d, e) }, _buildEvents: function() { var b = { keyup: a.proxy(function(b) {-1 === a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) && this.update() }, this), keydown: a.proxy(this.keydown, this), paste: a.proxy(this.paste, this) };
            this.o.showOnFocus === !0 && (b.focus = a.proxy(this.show, this)), this.isInput ? this._events = [
                [this.element, b]
            ] : this.component && this.inputField.length ? this._events = [
                [this.inputField, b],
                [this.component, { click: a.proxy(this.show, this) }]
            ] : this._events = [
                [this.element, { click: a.proxy(this.show, this), keydown: a.proxy(this.keydown, this) }]
            ], this._events.push([this.element, "*", { blur: a.proxy(function(a) { this._focused_from = a.target }, this) }], [this.element, { blur: a.proxy(function(a) { this._focused_from = a.target }, this) }]), this.o.immediateUpdates && this._events.push([this.element, { "changeYear changeMonth": a.proxy(function(a) { this.update(a.date) }, this) }]), this._secondaryEvents = [
                [this.picker, { click: a.proxy(this.click, this) }],
                [this.picker, ".prev, .next", { click: a.proxy(this.navArrowsClick, this) }],
                [a(window), { resize: a.proxy(this.place, this) }],
                [a(document), { "mousedown touchstart": a.proxy(function(a) { this.element.is(a.target) || this.element.find(a.target).length || this.picker.is(a.target) || this.picker.find(a.target).length || this.isInline || this.hide() }, this) }]
            ] }, _attachEvents: function() { this._detachEvents(), this._applyEvents(this._events) }, _detachEvents: function() { this._unapplyEvents(this._events) }, _attachSecondaryEvents: function() { this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents) }, _detachSecondaryEvents: function() { this._unapplyEvents(this._secondaryEvents) }, _trigger: function(b, c) { var d = c || this.dates.get(-1),
                e = this._utc_to_local(d);
            this.element.trigger({ type: b, date: e, viewMode: this.viewMode, dates: a.map(this.dates, this._utc_to_local), format: a.proxy(function(a, b) { 0 === arguments.length ? (a = this.dates.length - 1, b = this.o.format) : "string" == typeof a && (b = a, a = this.dates.length - 1), b = b || this.o.format; var c = this.dates.get(a); return r.formatDate(c, b, this.o.language) }, this) }) }, show: function() { return this.inputField.prop("disabled") || this.inputField.prop("readonly") && this.o.enableOnReadonly === !1 ? void 0 : (this.isInline || this.picker.appendTo(this.o.container), this.place(), this.picker.show(), this._attachSecondaryEvents(), this._trigger("show"), (window.navigator.msMaxTouchPoints || "ontouchstart" in document) && this.o.disableTouchKeyboard && a(this.element).blur(), this) }, hide: function() { return this.isInline || !this.picker.is(":visible") ? this : (this.focusDate = null, this.picker.hide().detach(), this._detachSecondaryEvents(), this.setViewMode(this.o.startView), this.o.forceParse && this.inputField.val() && this.setValue(), this._trigger("hide"), this) }, destroy: function() { return this.hide(), this._detachEvents(), this._detachSecondaryEvents(), this.picker.remove(), delete this.element.data().datepicker, this.isInput || delete this.element.data().date, this }, paste: function(b) { var c; if (b.originalEvent.clipboardData && b.originalEvent.clipboardData.types && -1 !== a.inArray("text/plain", b.originalEvent.clipboardData.types)) c = b.originalEvent.clipboardData.getData("text/plain");
            else { if (!window.clipboardData) return;
                c = window.clipboardData.getData("Text") }
            this.setDate(c), this.update(), b.preventDefault() }, _utc_to_local: function(a) { if (!a) return a; var b = new Date(a.getTime() + 6e4 * a.getTimezoneOffset()); return b.getTimezoneOffset() !== a.getTimezoneOffset() && (b = new Date(a.getTime() + 6e4 * b.getTimezoneOffset())), b }, _local_to_utc: function(a) { return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset()) }, _zero_time: function(a) { return a && new Date(a.getFullYear(), a.getMonth(), a.getDate()) }, _zero_utc_time: function(a) { return a && c(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()) }, getDates: function() { return a.map(this.dates, this._utc_to_local) }, getUTCDates: function() { return a.map(this.dates, function(a) { return new Date(a) }) }, getDate: function() { return this._utc_to_local(this.getUTCDate()) }, getUTCDate: function() { var a = this.dates.get(-1); return a !== b ? new Date(a) : null }, clearDates: function() { this.inputField.val(""), this.update(), this._trigger("changeDate"), this.o.autoclose && this.hide() }, setDates: function() { var b = a.isArray(arguments[0]) ? arguments[0] : arguments; return this.update.apply(this, b), this._trigger("changeDate"), this.setValue(), this }, setUTCDates: function() { var b = a.isArray(arguments[0]) ? arguments[0] : arguments; return this.setDates.apply(this, a.map(b, this._utc_to_local)), this }, setDate: f("setDates"), setUTCDate: f("setUTCDates"), remove: f("destroy"), setValue: function() { var a = this.getFormattedDate(); return this.inputField.val(a), this }, getFormattedDate: function(c) { c === b && (c = this.o.format); var d = this.o.language; return a.map(this.dates, function(a) { return r.formatDate(a, c, d) }).join(this.o.multidateSeparator) }, getStartDate: function() { return this.o.startDate }, setStartDate: function(a) { return this._process_options({ startDate: a }), this.update(), this.updateNavArrows(), this }, getEndDate: function() { return this.o.endDate }, setEndDate: function(a) { return this._process_options({ endDate: a }), this.update(), this.updateNavArrows(), this }, setDaysOfWeekDisabled: function(a) { return this._process_options({ daysOfWeekDisabled: a }), this.update(), this }, setDaysOfWeekHighlighted: function(a) { return this._process_options({ daysOfWeekHighlighted: a }), this.update(), this }, setDatesDisabled: function(a) { return this._process_options({ datesDisabled: a }), this.update(), this }, place: function() { if (this.isInline) return this; var b = this.picker.outerWidth(),
                c = this.picker.outerHeight(),
                d = 10,
                e = a(this.o.container),
                f = e.width(),
                g = "body" === this.o.container ? a(document).scrollTop() : e.scrollTop(),
                h = e.offset(),
                i = [];
            this.element.parents().each(function() { var b = a(this).css("z-index"); "auto" !== b && 0 !== b && i.push(parseInt(b)) }); var j = Math.max.apply(Math, i) + this.o.zIndexOffset,
                k = this.component ? this.component.parent().offset() : this.element.offset(),
                l = this.component ? this.component.outerHeight(!0) : this.element.outerHeight(!1),
                m = this.component ? this.component.outerWidth(!0) : this.element.outerWidth(!1),
                n = k.left - h.left,
                o = k.top - h.top; "body" !== this.o.container && (o += g), this.picker.removeClass("datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left"), "auto" !== this.o.orientation.x ? (this.picker.addClass("datepicker-orient-" + this.o.orientation.x), "right" === this.o.orientation.x && (n -= b - m)) : k.left < 0 ? (this.picker.addClass("datepicker-orient-left"), n -= k.left - d) : n + b > f ? (this.picker.addClass("datepicker-orient-right"), n += m - b) : this.o.rtl ? this.picker.addClass("datepicker-orient-right") : this.picker.addClass("datepicker-orient-left"); var p, q = this.o.orientation.y; if ("auto" === q && (p = -g + o - c, q = 0 > p ? "bottom" : "top"), this.picker.addClass("datepicker-orient-" + q), "top" === q ? o -= c + parseInt(this.picker.css("padding-top")) : o += l, this.o.rtl) { var r = f - (n + m);
                this.picker.css({ top: o, right: r, zIndex: j }) } else this.picker.css({ top: o, left: n, zIndex: j }); return this }, _allow_update: !0, update: function() { if (!this._allow_update) return this; var b = this.dates.copy(),
                c = [],
                d = !1; return arguments.length ? (a.each(arguments, a.proxy(function(a, b) { b instanceof Date && (b = this._local_to_utc(b)), c.push(b) }, this)), d = !0) : (c = this.isInput ? this.element.val() : this.element.data("date") || this.inputField.val(), c = c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c], delete this.element.data().date), c = a.map(c, a.proxy(function(a) { return r.parseDate(a, this.o.format, this.o.language, this.o.assumeNearbyYear) }, this)), c = a.grep(c, a.proxy(function(a) { return !this.dateWithinRange(a) || !a }, this), !0), this.dates.replace(c), this.o.updateViewDate && (this.dates.length ? this.viewDate = new Date(this.dates.get(-1)) : this.viewDate < this.o.startDate ? this.viewDate = new Date(this.o.startDate) : this.viewDate > this.o.endDate ? this.viewDate = new Date(this.o.endDate) : this.viewDate = this.o.defaultViewDate), d ? (this.setValue(), this.element.change()) : this.dates.length && String(b) !== String(this.dates) && d && (this._trigger("changeDate"), this.element.change()), !this.dates.length && b.length && (this._trigger("clearDate"), this.element.change()), this.fill(), this }, fillDow: function() { var b = this.o.weekStart,
                c = "<tr>"; for (this.o.calendarWeeks && (c += '<th class="cw">&#160;</th>'); b < this.o.weekStart + 7;) c += '<th class="dow', -1 !== a.inArray(b, this.o.daysOfWeekDisabled) && (c += " disabled"), c += '">' + q[this.o.language].daysMin[b++ % 7] + "</th>";
            c += "</tr>", this.picker.find(".datepicker-days thead").append(c) }, fillMonths: function() { for (var a = this._utc_to_local(this.viewDate), b = "", c = 0; 12 > c;) { var d = a && a.getMonth() === c ? " focused" : "";
                b += '<span class="month' + d + '">' + q[this.o.language].monthsShort[c++] + "</span>" }
            this.picker.find(".datepicker-months td").html(b) }, setRange: function(b) { b && b.length ? this.range = a.map(b, function(a) { return a.valueOf() }) : delete this.range, this.fill() }, getClassNames: function(b) { var c = [],
                f = this.viewDate.getUTCFullYear(),
                g = this.viewDate.getUTCMonth(),
                h = d(); return b.getUTCFullYear() < f || b.getUTCFullYear() === f && b.getUTCMonth() < g ? c.push("old") : (b.getUTCFullYear() > f || b.getUTCFullYear() === f && b.getUTCMonth() > g) && c.push("new"), this.focusDate && b.valueOf() === this.focusDate.valueOf() && c.push("focused"), this.o.todayHighlight && e(b, h) && c.push("today"), -1 !== this.dates.contains(b) && c.push("active"), this.dateWithinRange(b) || c.push("disabled"), this.dateIsDisabled(b) && c.push("disabled", "disabled-date"), -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) && c.push("highlighted"), this.range && (b > this.range[0] && b < this.range[this.range.length - 1] && c.push("range"), -1 !== a.inArray(b.valueOf(), this.range) && c.push("selected"), b.valueOf() === this.range[0] && c.push("range-start"), b.valueOf() === this.range[this.range.length - 1] && c.push("range-end")), c }, _fill_yearsView: function(c, d, e, f, g, h, i, j) { var k, l, m, n, o, p, q, r, s, t, u; for (k = "", l = this.picker.find(c), m = parseInt(g / e, 10) * e, o = parseInt(h / f, 10) * f, p = parseInt(i / f, 10) * f, n = a.map(this.dates, function(a) { return parseInt(a.getUTCFullYear() / f, 10) * f }), l.find(".datepicker-switch").text(m + "-" + (m + 9 * f)), q = m - f, r = -1; 11 > r; r += 1) s = [d], t = null, -1 === r ? s.push("old") : 10 === r && s.push("new"), -1 !== a.inArray(q, n) && s.push("active"), (o > q || q > p) && s.push("disabled"), q === this.viewDate.getFullYear() && s.push("focused"), j !== a.noop && (u = j(new Date(q, 0, 1)), u === b ? u = {} : "boolean" == typeof u ? u = { enabled: u } : "string" == typeof u && (u = { classes: u }), u.enabled === !1 && s.push("disabled"), u.classes && (s = s.concat(u.classes.split(/\s+/))), u.tooltip && (t = u.tooltip)), k += '<span class="' + s.join(" ") + '"' + (t ? ' title="' + t + '"' : "") + ">" + q + "</span>", q += f;
            l.find("td").html(k) }, fill: function() { var d, e, f = new Date(this.viewDate),
                g = f.getUTCFullYear(),
                h = f.getUTCMonth(),
                i = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCFullYear() : -(1 / 0),
                j = this.o.startDate !== -(1 / 0) ? this.o.startDate.getUTCMonth() : -(1 / 0),
                k = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
                l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
                m = q[this.o.language].today || q.en.today || "",
                n = q[this.o.language].clear || q.en.clear || "",
                o = q[this.o.language].titleFormat || q.en.titleFormat; if (!isNaN(g) && !isNaN(h)) { this.picker.find(".datepicker-days .datepicker-switch").text(r.formatDate(f, o, this.o.language)), this.picker.find("tfoot .today").text(m).toggle(this.o.todayBtn !== !1), this.picker.find("tfoot .clear").text(n).toggle(this.o.clearBtn !== !1), this.picker.find("thead .datepicker-title").text(this.o.title).toggle("" !== this.o.title), this.updateNavArrows(), this.fillMonths(); var p = c(g, h, 0),
                    s = p.getUTCDate();
                p.setUTCDate(s - (p.getUTCDay() - this.o.weekStart + 7) % 7); var t = new Date(p);
                p.getUTCFullYear() < 100 && t.setUTCFullYear(p.getUTCFullYear()), t.setUTCDate(t.getUTCDate() + 42), t = t.valueOf(); for (var u, v, w = []; p.valueOf() < t;) { if (u = p.getUTCDay(), u === this.o.weekStart && (w.push("<tr>"), this.o.calendarWeeks)) { var x = new Date(+p + (this.o.weekStart - u - 7) % 7 * 864e5),
                            y = new Date(Number(x) + (11 - x.getUTCDay()) % 7 * 864e5),
                            z = new Date(Number(z = c(y.getUTCFullYear(), 0, 1)) + (11 - z.getUTCDay()) % 7 * 864e5),
                            A = (y - z) / 864e5 / 7 + 1;
                        w.push('<td class="cw">' + A + "</td>") }
                    v = this.getClassNames(p), v.push("day"), this.o.beforeShowDay !== a.noop && (e = this.o.beforeShowDay(this._utc_to_local(p)), e === b ? e = {} : "boolean" == typeof e ? e = { enabled: e } : "string" == typeof e && (e = { classes: e }), e.enabled === !1 && v.push("disabled"), e.classes && (v = v.concat(e.classes.split(/\s+/))), e.tooltip && (d = e.tooltip)), v = a.isFunction(a.uniqueSort) ? a.uniqueSort(v) : a.unique(v), w.push('<td class="' + v.join(" ") + '"' + (d ? ' title="' + d + '"' : "") + (this.o.dateCells ? ' data-date="' + p.getTime().toString() + '"' : "") + ">" + p.getUTCDate() + "</td>"), d = null, u === this.o.weekEnd && w.push("</tr>"), p.setUTCDate(p.getUTCDate() + 1) }
                this.picker.find(".datepicker-days tbody").html(w.join("")); var B = q[this.o.language].monthsTitle || q.en.monthsTitle || "Months",
                    C = this.picker.find(".datepicker-months").find(".datepicker-switch").text(this.o.maxViewMode < 2 ? B : g).end().find("tbody span").removeClass("active"); if (a.each(this.dates, function(a, b) { b.getUTCFullYear() === g && C.eq(b.getUTCMonth()).addClass("active") }), (i > g || g > k) && C.addClass("disabled"), g === i && C.slice(0, j).addClass("disabled"), g === k && C.slice(l + 1).addClass("disabled"), this.o.beforeShowMonth !== a.noop) { var D = this;
                    a.each(C, function(c, d) { var e = new Date(g, c, 1),
                            f = D.o.beforeShowMonth(e);
                        f === b ? f = {} : "boolean" == typeof f ? f = { enabled: f } : "string" == typeof f && (f = { classes: f }), f.enabled !== !1 || a(d).hasClass("disabled") || a(d).addClass("disabled"), f.classes && a(d).addClass(f.classes), f.tooltip && a(d).prop("title", f.tooltip) }) }
                this._fill_yearsView(".datepicker-years", "year", 10, 1, g, i, k, this.o.beforeShowYear), this._fill_yearsView(".datepicker-decades", "decade", 100, 10, g, i, k, this.o.beforeShowDecade), this._fill_yearsView(".datepicker-centuries", "century", 1e3, 100, g, i, k, this.o.beforeShowCentury) } }, updateNavArrows: function() { if (this._allow_update) { var a, b, c = new Date(this.viewDate),
                    d = c.getUTCFullYear(),
                    e = c.getUTCMonth(); switch (this.viewMode) {
                    case 0:
                        a = this.o.startDate !== -(1 / 0) && d <= this.o.startDate.getUTCFullYear() && e <= this.o.startDate.getUTCMonth(), b = this.o.endDate !== 1 / 0 && d >= this.o.endDate.getUTCFullYear() && e >= this.o.endDate.getUTCMonth(); break;
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        a = this.o.startDate !== -(1 / 0) && d <= this.o.startDate.getUTCFullYear(), b = this.o.endDate !== 1 / 0 && d >= this.o.endDate.getUTCFullYear() }
                this.picker.find(".prev").toggleClass("disabled", a), this.picker.find(".next").toggleClass("disabled", b) } }, click: function(b) { b.preventDefault(), b.stopPropagation(); var e, f, g, h, i;
            e = a(b.target), e.hasClass("datepicker-switch") && this.viewMode !== this.o.maxViewMode && this.setViewMode(this.viewMode + 1), e.hasClass("today") && !e.hasClass("day") && (this.setViewMode(0), this._setDate(d(), "linked" === this.o.todayBtn ? null : "view")), e.hasClass("clear") && this.clearDates(), e.hasClass("disabled") || (e.hasClass("day") && (g = Number(e.text()), h = this.viewDate.getUTCFullYear(), i = this.viewDate.getUTCMonth(), (e.hasClass("old") || e.hasClass("new")) && (f = e.hasClass("old") ? -1 : 1, i = (i + f + 12) % 12, (-1 === f && 11 === i || 1 === f && 0 === i) && (h += f, this.o.updateViewDate && this._trigger("changeYear", this.viewDate)), this.o.updateViewDate && this._trigger("changeMonth", this.viewDate)), this._setDate(c(h, i, g))), (e.hasClass("month") || e.hasClass("year") || e.hasClass("decade") || e.hasClass("century")) && (this.viewDate.setUTCDate(1), g = 1, 1 === this.viewMode ? (i = e.parent().find("span").index(e), h = this.viewDate.getUTCFullYear(), this.viewDate.setUTCMonth(i)) : (i = 0, h = Number(e.text()), this.viewDate.setUTCFullYear(h)), this._trigger(r.viewModes[this.viewMode - 1].e, this.viewDate), this.viewMode === this.o.minViewMode ? this._setDate(c(h, i, g)) : (this.setViewMode(this.viewMode - 1), this.fill()))), this.picker.is(":visible") && this._focused_from && this._focused_from.focus(), delete this._focused_from }, navArrowsClick: function(b) { var c = a(b.target),
                d = c.hasClass("prev") ? -1 : 1;
            0 !== this.viewMode && (d *= 12 * r.viewModes[this.viewMode].navStep), this.viewDate = this.moveMonth(this.viewDate, d), this._trigger(r.viewModes[this.viewMode].e, this.viewDate), this.fill() }, _toggle_multidate: function(a) { var b = this.dates.contains(a); if (a || this.dates.clear(), -1 !== b ? (this.o.multidate === !0 || this.o.multidate > 1 || this.o.toggleActive) && this.dates.remove(b) : this.o.multidate === !1 ? (this.dates.clear(), this.dates.push(a)) : this.dates.push(a), "number" == typeof this.o.multidate)
                for (; this.dates.length > this.o.multidate;) this.dates.remove(0) }, _setDate: function(a, b) { b && "date" !== b || this._toggle_multidate(a && new Date(a)), (!b && this.o.updateViewDate || "view" === b) && (this.viewDate = a && new Date(a)), this.fill(), this.setValue(), b && "view" === b || this._trigger("changeDate"), this.inputField.trigger("change"), !this.o.autoclose || b && "date" !== b || this.hide() }, moveDay: function(a, b) { var c = new Date(a); return c.setUTCDate(a.getUTCDate() + b), c }, moveWeek: function(a, b) { return this.moveDay(a, 7 * b) }, moveMonth: function(a, b) { if (!g(a)) return this.o.defaultViewDate; if (!b) return a; var c, d, e = new Date(a.valueOf()),
                f = e.getUTCDate(),
                h = e.getUTCMonth(),
                i = Math.abs(b); if (b = b > 0 ? 1 : -1, 1 === i) d = -1 === b ? function() { return e.getUTCMonth() === h } : function() { return e.getUTCMonth() !== c }, c = h + b, e.setUTCMonth(c), c = (c + 12) % 12;
            else { for (var j = 0; i > j; j++) e = this.moveMonth(e, b);
                c = e.getUTCMonth(), e.setUTCDate(f), d = function() { return c !== e.getUTCMonth() } } for (; d();) e.setUTCDate(--f), e.setUTCMonth(c); return e }, moveYear: function(a, b) { return this.moveMonth(a, 12 * b) }, moveAvailableDate: function(a, b, c) { do { if (a = this[c](a, b), !this.dateWithinRange(a)) return !1;
                c = "moveDay" } while (this.dateIsDisabled(a)); return a }, weekOfDateIsDisabled: function(b) { return -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled) }, dateIsDisabled: function(b) { return this.weekOfDateIsDisabled(b) || a.grep(this.o.datesDisabled, function(a) { return e(b, a) }).length > 0 }, dateWithinRange: function(a) { return a >= this.o.startDate && a <= this.o.endDate }, keydown: function(a) { if (!this.picker.is(":visible")) return void((40 === a.keyCode || 27 === a.keyCode) && (this.show(), a.stopPropagation())); var b, c, d = !1,
                e = this.focusDate || this.viewDate; switch (a.keyCode) {
                case 27:
                    this.focusDate ? (this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill()) : this.hide(), a.preventDefault(), a.stopPropagation(); break;
                case 37:
                case 38:
                case 39:
                case 40:
                    if (!this.o.keyboardNavigation || 7 === this.o.daysOfWeekDisabled.length) break;
                    b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1, 0 === this.viewMode ? a.ctrlKey ? (c = this.moveAvailableDate(e, b, "moveYear"), c && this._trigger("changeYear", this.viewDate)) : a.shiftKey ? (c = this.moveAvailableDate(e, b, "moveMonth"), c && this._trigger("changeMonth", this.viewDate)) : 37 === a.keyCode || 39 === a.keyCode ? c = this.moveAvailableDate(e, b, "moveDay") : this.weekOfDateIsDisabled(e) || (c = this.moveAvailableDate(e, b, "moveWeek")) : 1 === this.viewMode ? ((38 === a.keyCode || 40 === a.keyCode) && (b = 4 * b), c = this.moveAvailableDate(e, b, "moveMonth")) : 2 === this.viewMode && ((38 === a.keyCode || 40 === a.keyCode) && (b = 4 * b), c = this.moveAvailableDate(e, b, "moveYear")), c && (this.focusDate = this.viewDate = c, this.setValue(), this.fill(), a.preventDefault()); break;
                case 13:
                    if (!this.o.forceParse) break;
                    e = this.focusDate || this.dates.get(-1) || this.viewDate, this.o.keyboardNavigation && (this._toggle_multidate(e), d = !0), this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.setValue(), this.fill(), this.picker.is(":visible") && (a.preventDefault(), a.stopPropagation(), this.o.autoclose && this.hide()); break;
                case 9:
                    this.focusDate = null, this.viewDate = this.dates.get(-1) || this.viewDate, this.fill(), this.hide() }
            d && (this.dates.length ? this._trigger("changeDate") : this._trigger("clearDate"), this.inputField.trigger("change")) }, setViewMode: function(a) { this.viewMode = a, this.picker.children("div").hide().filter(".datepicker-" + r.viewModes[this.viewMode].clsName).show(), this.updateNavArrows(), this._trigger("changeViewMode", new Date(this.viewDate)) } }; var l = function(b, c) { a.data(b, "datepicker", this), this.element = a(b), this.inputs = a.map(c.inputs, function(a) { return a.jquery ? a[0] : a }), delete c.inputs, this.keepEmptyValues = c.keepEmptyValues, delete c.keepEmptyValues, n.call(a(this.inputs), c).on("changeDate", a.proxy(this.dateUpdated, this)), this.pickers = a.map(this.inputs, function(b) { return a.data(b, "datepicker") }), this.updateDates() };
    l.prototype = { updateDates: function() { this.dates = a.map(this.pickers, function(a) { return a.getUTCDate() }), this.updateRanges() }, updateRanges: function() { var b = a.map(this.dates, function(a) { return a.valueOf() });
            a.each(this.pickers, function(a, c) { c.setRange(b) }) }, dateUpdated: function(c) { if (!this.updating) { this.updating = !0; var d = a.data(c.target, "datepicker"); if (d !== b) { var e = d.getUTCDate(),
                        f = this.keepEmptyValues,
                        g = a.inArray(c.target, this.inputs),
                        h = g - 1,
                        i = g + 1,
                        j = this.inputs.length; if (-1 !== g) { if (a.each(this.pickers, function(a, b) { b.getUTCDate() || b !== d && f || b.setUTCDate(e) }), e < this.dates[h])
                            for (; h >= 0 && e < this.dates[h];) this.pickers[h--].setUTCDate(e);
                        else if (e > this.dates[i])
                            for (; j > i && e > this.dates[i];) this.pickers[i++].setUTCDate(e);
                        this.updateDates(), delete this.updating } } } }, destroy: function() { a.map(this.pickers, function(a) { a.destroy() }), a(this.inputs).off("changeDate", this.dateUpdated), delete this.element.data().datepicker }, remove: f("destroy") }; var m = a.fn.datepicker,
        n = function(c) { var d = Array.apply(null, arguments);
            d.shift(); var e; if (this.each(function() { var b = a(this),
                        f = b.data("datepicker"),
                        g = "object" == typeof c && c; if (!f) { var j = h(this, "date"),
                            m = a.extend({}, o, j, g),
                            n = i(m.language),
                            p = a.extend({}, o, n, j, g);
                        b.hasClass("input-daterange") || p.inputs ? (a.extend(p, { inputs: p.inputs || b.find("input").toArray() }), f = new l(this, p)) : f = new k(this, p), b.data("datepicker", f) } "string" == typeof c && "function" == typeof f[c] && (e = f[c].apply(f, d)) }), e === b || e instanceof k || e instanceof l) return this; if (this.length > 1) throw new Error("Using only allowed for the collection of a single element (" + c + " function)"); return e };
    a.fn.datepicker = n; var o = a.fn.datepicker.defaults = { assumeNearbyYear: !1, autoclose: !1, beforeShowDay: a.noop, beforeShowMonth: a.noop, beforeShowYear: a.noop, beforeShowDecade: a.noop, beforeShowCentury: a.noop, calendarWeeks: !1, clearBtn: !1, toggleActive: !1, daysOfWeekDisabled: [], daysOfWeekHighlighted: [], datesDisabled: [], endDate: 1 / 0, forceParse: !0, format: "mm/dd/yyyy", keepEmptyValues: !1, keyboardNavigation: !0, language: "en", minViewMode: 0, maxViewMode: 4, multidate: !1, multidateSeparator: ",", orientation: "auto", rtl: !1, startDate: -(1 / 0), startView: 0, todayBtn: !1, todayHighlight: !1, updateViewDate: !0, weekStart: 0, disableTouchKeyboard: !1, enableOnReadonly: !0, showOnFocus: !0, zIndexOffset: 10, container: "body", immediateUpdates: !1, dateCells: !1, title: "", templates: { leftArrow: "&#x00AB;", rightArrow: "&#x00BB;" } },
        p = a.fn.datepicker.locale_opts = ["format", "rtl", "weekStart"];
    a.fn.datepicker.Constructor = k; var q = a.fn.datepicker.dates = { en: { days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], today: "Today", clear: "Clear", titleFormat: "MM yyyy" } },
        r = { viewModes: [{ names: ["days", "month"], clsName: "days", e: "changeMonth" }, { names: ["months", "year"], clsName: "months", e: "changeYear", navStep: 1 }, { names: ["years", "decade"], clsName: "years", e: "changeDecade", navStep: 10 }, { names: ["decades", "century"], clsName: "decades", e: "changeCentury", navStep: 100 }, { names: ["centuries", "millennium"], clsName: "centuries", e: "changeMillennium", navStep: 1e3 }], validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g, nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g, parseFormat: function(a) { if ("function" == typeof a.toValue && "function" == typeof a.toDisplay) return a; var b = a.replace(this.validParts, "\x00").split("\x00"),
                    c = a.match(this.validParts); if (!b || !b.length || !c || 0 === c.length) throw new Error("Invalid date format."); return { separators: b, parts: c } }, parseDate: function(e, f, g, h) {
                function i(a, b) { return b === !0 && (b = 10), 100 > a && (a += 2e3, a > (new Date).getFullYear() + b && (a -= 100)), a }

                function j() { var a = this.slice(0, l[o].length),
                        b = l[o].slice(0, a.length); return a.toLowerCase() === b.toLowerCase() } if (!e) return b; if (e instanceof Date) return e; if ("string" == typeof f && (f = r.parseFormat(f)), f.toValue) return f.toValue(e, f, g); var l, m, n, o, p, s = { d: "moveDay", m: "moveMonth", w: "moveWeek", y: "moveYear" },
                    t = { yesterday: "-1d", today: "+0d", tomorrow: "+1d" }; if (e in t && (e = t[e]), /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(e)) { for (l = e.match(/([\-+]\d+)([dmwy])/gi), e = new Date, o = 0; o < l.length; o++) m = l[o].match(/([\-+]\d+)([dmwy])/i), n = Number(m[1]), p = s[m[2].toLowerCase()], e = k.prototype[p](e, n); return c(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()) }
                l = e && e.match(this.nonpunctuation) || [], e = new Date; var u, v, w = {},
                    x = ["yyyy", "yy", "M", "MM", "m", "mm", "d", "dd"],
                    y = { yyyy: function(a, b) { return a.setUTCFullYear(h ? i(b, h) : b) }, m: function(a, b) { if (isNaN(a)) return a; for (b -= 1; 0 > b;) b += 12; for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b;) a.setUTCDate(a.getUTCDate() - 1); return a }, d: function(a, b) { return a.setUTCDate(b) } };
                y.yy = y.yyyy, y.M = y.MM = y.mm = y.m, y.dd = y.d, e = d(); var z = f.parts.slice(); if (l.length !== z.length && (z = a(z).filter(function(b, c) { return -1 !== a.inArray(c, x) }).toArray()), l.length === z.length) { var A; for (o = 0, A = z.length; A > o; o++) { if (u = parseInt(l[o], 10), m = z[o], isNaN(u)) switch (m) {
                            case "MM":
                                v = a(q[g].months).filter(j), u = a.inArray(v[0], q[g].months) + 1; break;
                            case "M":
                                v = a(q[g].monthsShort).filter(j), u = a.inArray(v[0], q[g].monthsShort) + 1 }
                        w[m] = u } var B, C; for (o = 0; o < x.length; o++) C = x[o], C in w && !isNaN(w[C]) && (B = new Date(e), y[C](B, w[C]), isNaN(B) || (e = B)) } return e }, formatDate: function(b, c, d) { if (!b) return ""; if ("string" == typeof c && (c = r.parseFormat(c)), c.toDisplay) return c.toDisplay(b, c, d); var e = { d: b.getUTCDate(), D: q[d].daysShort[b.getUTCDay()], DD: q[d].days[b.getUTCDay()], m: b.getUTCMonth() + 1, M: q[d].monthsShort[b.getUTCMonth()], MM: q[d].months[b.getUTCMonth()], yy: b.getUTCFullYear().toString().substring(2), yyyy: b.getUTCFullYear() };
                e.dd = (e.d < 10 ? "0" : "") + e.d, e.mm = (e.m < 10 ? "0" : "") + e.m, b = []; for (var f = a.extend([], c.separators), g = 0, h = c.parts.length; h >= g; g++) f.length && b.push(f.shift()), b.push(e[c.parts[g]]); return b.join("") }, headTemplate: '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">&laquo;</th><th colspan="5" class="datepicker-switch"></th><th class="next">&raquo;</th></tr></thead>', contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>', footTemplate: '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>' };
    r.template = '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' + r.headTemplate + "<tbody></tbody>" + r.footTemplate + '</table></div><div class="datepicker-months"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-years"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-decades"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + '</table></div><div class="datepicker-centuries"><table class="table-condensed">' + r.headTemplate + r.contTemplate + r.footTemplate + "</table></div></div>", a.fn.datepicker.DPGlobal = r, a.fn.datepicker.noConflict = function() { return a.fn.datepicker = m, this }, a.fn.datepicker.version = "1.7.0-dev", a(document).on("focus.datepicker.data-api click.datepicker.data-api", '[data-provide="datepicker"]', function(b) { var c = a(this);
        c.data("datepicker") || (b.preventDefault(), n.call(c, "show")) }), a(function() { n.call(a('[data-provide="datepicker-inline"]')) }) });
(function($) {
    $.fn.theiaStickySidebar = function(options) {
        var defaults = { 'containerSelector': '', 'additionalMarginTop': 0, 'additionalMarginBottom': 0, 'updateSidebarHeight': !0, 'minWidth': 0 };
        options = $.extend(defaults, options);
        options.additionalMarginTop = parseInt(options.additionalMarginTop) || 0;
        options.additionalMarginBottom = parseInt(options.additionalMarginBottom) || 0;
        $('head').append($('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'));
        this.each(function() {
            var o = {};
            o.sidebar = $(this);
            o.options = options || {};
            o.container = $(o.options.containerSelector);
            if (o.container.size() == 0) { o.container = o.sidebar.parent() }
            o.sidebar.parents().css('-webkit-transform', 'none');
            o.sidebar.css({ 'position': 'relative', '-webkit-box-sizing': 'border-box', '-moz-box-sizing': 'border-box', 'box-sizing': 'border-box' });
            o.stickySidebar = o.sidebar.find('.theiaStickySidebar');
            if (o.stickySidebar.length == 0) { o.sidebar.find('script').remove();
                o.stickySidebar = $('<div>').addClass('theiaStickySidebar').append(o.sidebar.children());
                o.sidebar.append(o.stickySidebar) }
            o.marginTop = parseInt(o.sidebar.css('margin-top'));
            o.marginBottom = parseInt(o.sidebar.css('margin-bottom'));
            o.paddingTop = parseInt(o.sidebar.css('padding-top'));
            o.paddingBottom = parseInt(o.sidebar.css('padding-bottom'));
            var collapsedTopHeight = o.stickySidebar.offset().top;
            var collapsedBottomHeight = o.stickySidebar.outerHeight();
            o.stickySidebar.css('padding-top', 1);
            o.stickySidebar.css('padding-bottom', 1);
            collapsedTopHeight -= o.stickySidebar.offset().top;
            collapsedBottomHeight = o.stickySidebar.outerHeight() - collapsedBottomHeight - collapsedTopHeight;
            if (collapsedTopHeight == 0) { o.stickySidebar.css('padding-top', 0);
                o.stickySidebarPaddingTop = 0 } else { o.stickySidebarPaddingTop = 1 }
            if (collapsedBottomHeight == 0) { o.stickySidebar.css('padding-bottom', 0);
                o.stickySidebarPaddingBottom = 0 } else { o.stickySidebarPaddingBottom = 1 }
            o.previousScrollTop = null;
            o.fixedScrollTop = 0;
            o.onScroll = function(o) {
                if (!o.stickySidebar.is(":visible")) { return }
                if ($('body').width() < o.options.minWidth) { resetSidebar(); return }
                if (o.sidebar.outerWidth(!0) + 50 > o.container.width()) { resetSidebar(); return }
                var scrollTop = $(document).scrollTop();
                var position = 'static';
                if (scrollTop >= o.container.offset().top + (o.paddingTop + o.marginTop - o.options.additionalMarginTop)) {
                    var offsetTop = o.paddingTop + o.marginTop + options.additionalMarginTop;
                    var offsetBottom = o.paddingBottom + o.marginBottom + options.additionalMarginBottom;
                    var containerTop = o.container.offset().top;
                    var containerBottom = o.container.offset().top + getClearedHeight(o.container);
                    var windowOffsetTop = 0 + options.additionalMarginTop;
                    var windowOffsetBottom;
                    var sidebarSmallerThanWindow = (o.stickySidebar.outerHeight() + offsetTop + offsetBottom) < $(window).height();
                    if (sidebarSmallerThanWindow) { windowOffsetBottom = windowOffsetTop + o.stickySidebar.outerHeight() } else { windowOffsetBottom = $(window).height() - o.marginBottom - o.paddingBottom - options.additionalMarginBottom }
                    var staticLimitTop = containerTop - scrollTop + o.paddingTop + o.marginTop;
                    var staticLimitBottom = containerBottom - scrollTop - o.paddingBottom - o.marginBottom;
                    var top = o.stickySidebar.offset().top - scrollTop;
                    var scrollTopDiff = o.previousScrollTop - scrollTop;
                    if (o.stickySidebar.css('position') == 'fixed') { top += scrollTopDiff }
                    if (scrollTopDiff > 0) { top = Math.min(top, windowOffsetTop) } else { top = Math.max(top, windowOffsetBottom - o.stickySidebar.outerHeight()) }
                    top = Math.max(top, staticLimitTop);
                    top = Math.min(top, staticLimitBottom - o.stickySidebar.outerHeight());
                    if (top == windowOffsetTop) { position = 'fixed' } else if (top == windowOffsetBottom - o.stickySidebar.outerHeight()) { position = 'fixed' } else if (scrollTop + top - o.sidebar.offset().top - o.paddingTop <= options.additionalMarginTop) { position = 'static' } else { position = 'absolute' }
                }
                if (position == 'fixed') {
                    if (o.options.updateSidebarHeight == !1) { o.sidebar.css({}) }
                    o.stickySidebar.css({ 'position': 'fixed', 'width': o.sidebar.width(), 'top': top, 'left': o.sidebar.offset().left + parseInt(o.sidebar.css('padding-left')) })
                } else if (position == 'absolute') {
                    if (o.stickySidebar.css('position') != 'absolute') { o.stickySidebar.css({ 'position': 'absolute', 'top': scrollTop + top - o.sidebar.offset().top - o.stickySidebarPaddingTop - o.stickySidebarPaddingBottom }) }
                    o.stickySidebar.css({ 'width': o.sidebar.width(), 'left': '' })
                } else if (position == 'static') { resetSidebar() }
                if (position != 'static') { if (o.options.updateSidebarHeight == !0) { o.sidebar.css({ 'min-height': o.stickySidebar.outerHeight() + o.stickySidebar.offset().top - o.sidebar.offset().top + o.paddingBottom }) } }
                o.previousScrollTop = scrollTop
            };
            o.onScroll(o);
            $(document).scroll(function(o) { return function() { o.onScroll(o) } }(o));
            $(window).resize(function(o) { return function() { o.stickySidebar.css({ 'position': 'static' });
                    o.onScroll(o) } }(o));

            function resetSidebar() { o.fixedScrollTop = 0;
                o.sidebar.css({ 'min-height': '0px' });
                o.stickySidebar.css({ 'position': 'static', 'width': '' }) }

            function getClearedHeight(e) { var height = e.height();
                e.children().each(function() { height = Math.max(height, $(this).height()) }); return height }
        })
    }
})(jQuery);
$('section .columns').theiaStickySidebar();
(function($) {
    $.extend($.fn, {
        swapClass: function(c1, c2) { var c1Elements = this.filter('.' + c1);
            this.filter('.' + c2).removeClass(c2).addClass(c1);
            c1Elements.removeClass(c1).addClass(c2); return this },
        replaceClass: function(c1, c2) { return this.filter('.' + c1).removeClass(c1).addClass(c2).end() },
        hoverClass: function(className) { className = className || "hover"; return this.hover(function() { $(this).addClass(className) }, function() { $(this).removeClass(className) }) },
        heightToggle: function(animated, callback) {
            animated ? this.animate({ height: "toggle" }, animated, callback) : this.each(function() {
                jQuery(this)[jQuery(this).is(":hidden") ? "show" : "hide"]();
                if (callback)
                    callback.apply(this, arguments)
            })
        },
        heightHide: function(animated, callback) {
            if (animated) { this.animate({ height: "hide" }, animated, callback) } else {
                this.hide();
                if (callback)
                    this.each(callback)
            }
        },
        prepareBranches: function(settings) {
            if (!settings.prerendered) { this.filter(":last-child:not(ul)").addClass(CLASSES.last);
                this.filter((settings.collapsed ? "" : "." + CLASSES.closed) + ":not(." + CLASSES.open + ")").find(">ul").hide() }
            return this.filter(":has(>ul)")
        },
        applyClasses: function(settings, toggler) {
            this.filter(":has(>ul):not(:has(>a))").find(">span").unbind("click.treeview").bind("click.treeview", function(event) {
                if (this == event.target)
                    toggler.apply($(this).next())
            }).add($("a", this)).hoverClass();
            if (!settings.prerendered) {
                this.filter(":has(>ul:hidden)").addClass(CLASSES.expandable).replaceClass(CLASSES.last, CLASSES.lastExpandable);
                this.not(":has(>ul:hidden)").addClass(CLASSES.collapsable).replaceClass(CLASSES.last, CLASSES.lastCollapsable);
                var hitarea = this.find("div." + CLASSES.hitarea);
                if (!hitarea.length)
                    hitarea = this.prepend("<div class=\"" + CLASSES.hitarea + "\"/>").find("div." + CLASSES.hitarea);
                hitarea.removeClass().addClass(CLASSES.hitarea).each(function() { var classes = "";
                    $.each($(this).parent().attr("class").split(" "), function() { classes += this + "-hitarea " });
                    $(this).addClass(classes) })
            }
            this.find("div." + CLASSES.hitarea).click(toggler)
        },
        treeview: function(settings) {
            settings = $.extend({ cookieId: "treeview" }, settings);
            if (settings.toggle) { var callback = settings.toggle;
                settings.toggle = function() { return callback.apply($(this).parent()[0], arguments) } }

            function treeController(tree, control) {
                function handler(filter) { return function() { toggler.apply($("div." + CLASSES.hitarea, tree).filter(function() { return filter ? $(this).parent("." + filter).length : !0 })); return !1 } }
                $("a:eq(0)", control).click(handler(CLASSES.collapsable));
                $("a:eq(1)", control).click(handler(CLASSES.expandable));
                $("a:eq(2)", control).click(handler())
            }

            function toggler() { $(this).parent().find(">.hitarea").swapClass(CLASSES.collapsableHitarea, CLASSES.expandableHitarea).swapClass(CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea).end().swapClass(CLASSES.collapsable, CLASSES.expandable).swapClass(CLASSES.lastCollapsable, CLASSES.lastExpandable).find(">ul").heightToggle(settings.animated, settings.toggle); if (settings.unique) { $(this).parent().siblings().find(">.hitarea").replaceClass(CLASSES.collapsableHitarea, CLASSES.expandableHitarea).replaceClass(CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea).end().replaceClass(CLASSES.collapsable, CLASSES.expandable).replaceClass(CLASSES.lastCollapsable, CLASSES.lastExpandable).find(">ul").heightHide(settings.animated, settings.toggle) } }
            this.data("toggler", toggler);

            function serialize() {
                function binary(arg) { return arg ? 1 : 0 }
                var data = [];
                branches.each(function(i, e) { data[i] = $(e).is(":has(>ul:visible)") ? 1 : 0 });
                $.cookie(settings.cookieId, data.join(""), settings.cookieOptions)
            }

            function deserialize() { var stored = $.cookie(settings.cookieId); if (stored) { var data = stored.split("");
                    branches.each(function(i, e) { $(e).find(">ul")[parseInt(data[i]) ? "show" : "hide"]() }) } }
            this.addClass("treeview");
            var branches = this.find("li").prepareBranches(settings);
            switch (settings.persist) {
                case "cookie":
                    var toggleCallback = settings.toggle;
                    settings.toggle = function() { serialize(); if (toggleCallback) { toggleCallback.apply(this, arguments) } };
                    deserialize();
                    break;
                case "location":
                    var current = this.find("a").filter(function() { return location.href.toLowerCase().indexOf(this.href.toLowerCase()) == 0 });
                    if (current.length) { var items = current.addClass("selected").parents("ul, li").add(current.next()).show(); if (settings.prerendered) { items.filter("li").swapClass(CLASSES.collapsable, CLASSES.expandable).swapClass(CLASSES.lastCollapsable, CLASSES.lastExpandable).find(">.hitarea").swapClass(CLASSES.collapsableHitarea, CLASSES.expandableHitarea).swapClass(CLASSES.lastCollapsableHitarea, CLASSES.lastExpandableHitarea) } }
                    break
            }
            branches.applyClasses(settings, toggler);
            if (settings.control) { treeController(this, settings.control);
                $(settings.control).show() }
            return this
        }
    });
    $.treeview = {};
    var CLASSES = ($.treeview.classes = { open: "open", closed: "closed", expandable: "expandable", expandableHitarea: "expandable-hitarea", lastExpandableHitarea: "lastExpandable-hitarea", collapsable: "collapsable", collapsableHitarea: "collapsable-hitarea", lastCollapsableHitarea: "lastCollapsable-hitarea", lastCollapsable: "lastCollapsable", lastExpandable: "lastExpandable", last: "last", hitarea: "hitarea" })
})(jQuery);
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery) }(function(a) {
    function b(b) { var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0; if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) { if (1 === g.deltaMode) { var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q } else if (2 === g.deltaMode) { var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r } if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) { var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top } return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h) } }

    function c() { f = null }

    function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 } var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice; if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks; var k = a.event.special.mousewheel = { version: "3.1.12", setup: function() { if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this)) }, teardown: function() { if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height") }, getLineHeight: function(b) { var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"](); return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16 }, getPageHeight: function(b) { return a(b).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };
    a.fn.extend({ mousewheel: function(a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function(a) { return this.unbind("mousewheel", a) } }) });
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery) }(function(a) {
    function b(b) { var g = b || window.event,
            h = i.call(arguments, 1),
            j = 0,
            l = 0,
            m = 0,
            n = 0,
            o = 0,
            p = 0; if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) { if (1 === g.deltaMode) { var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q } else if (2 === g.deltaMode) { var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r } if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) { var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top } return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h) } }

    function c() { f = null }

    function d(a, b) { return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0 } var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        i = Array.prototype.slice; if (a.event.fixHooks)
        for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks; var k = a.event.special.mousewheel = { version: "3.1.12", setup: function() { if (this.addEventListener)
                for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
            else this.onmousewheel = b;
            a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this)) }, teardown: function() { if (this.removeEventListener)
                for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
            else this.onmousewheel = null;
            a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height") }, getLineHeight: function(b) { var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"](); return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16 }, getPageHeight: function(b) { return a(b).height() }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };
    a.fn.extend({ mousewheel: function(a) { return a ? this.bind("mousewheel", a) : this.trigger("mousewheel") }, unmousewheel: function(a) { return this.unbind("mousewheel", a) } }) });
! function(e) { "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? module.exports = e : e(jQuery, window, document) }(function(e) {! function(t) { var o = "function" == typeof define && define.amd,
            a = "undefined" != typeof module && module.exports,
            n = "https:" == document.location.protocol ? "https:" : "http:",
            i = "cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js";
        o || (a ? require("jquery-mousewheel")(e) : e.event.special.mousewheel || e("head").append(decodeURI("%3Cscript src=" + n + "//" + i + "%3E%3C/script%3E"))), t() }(function() { var t, o = "mCustomScrollbar",
            a = "mCS",
            n = ".mCustomScrollbar",
            i = { setTop: 0, setLeft: 0, axis: "y", scrollbarPosition: "inside", scrollInertia: 950, autoDraggerLength: !0, alwaysShowScrollbar: 0, snapOffset: 0, mouseWheel: { enable: !0, scrollAmount: "auto", axis: "y", deltaFactor: "auto", disableOver: ["select", "option", "keygen", "datalist", "textarea"] }, scrollButtons: { scrollType: "stepless", scrollAmount: "auto" }, keyboard: { enable: !0, scrollType: "stepless", scrollAmount: "auto" }, contentTouchScroll: 25, documentTouchScroll: !0, advanced: { autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']", updateOnContentResize: !0, updateOnImageLoad: "auto", autoUpdateTimeout: 60 }, theme: "light", callbacks: { onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0 } },
            r = 0,
            l = {},
            s = window.attachEvent && !window.addEventListener ? 1 : 0,
            c = !1,
            d = ["mCSB_dragger_onDrag", "mCSB_scrollTools_onDrag", "mCS_img_loaded", "mCS_disabled", "mCS_destroyed", "mCS_no_scrollbar", "mCS-autoHide", "mCS-dir-rtl", "mCS_no_scrollbar_y", "mCS_no_scrollbar_x", "mCS_y_hidden", "mCS_x_hidden", "mCSB_draggerContainer", "mCSB_buttonUp", "mCSB_buttonDown", "mCSB_buttonLeft", "mCSB_buttonRight"],
            u = { init: function(t) { var t = e.extend(!0, {}, i, t),
                        o = f.call(this); if (t.live) { var s = t.liveSelector || this.selector || n,
                            c = e(s); if ("off" === t.live) return void m(s);
                        l[s] = setTimeout(function() { c.mCustomScrollbar(t), "once" === t.live && c.length && m(s) }, 500) } else m(s); return t.setWidth = t.set_width ? t.set_width : t.setWidth, t.setHeight = t.set_height ? t.set_height : t.setHeight, t.axis = t.horizontalScroll ? "x" : p(t.axis), t.scrollInertia = t.scrollInertia > 0 && t.scrollInertia < 17 ? 17 : t.scrollInertia, "object" != typeof t.mouseWheel && 1 == t.mouseWheel && (t.mouseWheel = { enable: !0, scrollAmount: "auto", axis: "y", preventDefault: !1, deltaFactor: "auto", normalizeDelta: !1, invert: !1 }), t.mouseWheel.scrollAmount = t.mouseWheelPixels ? t.mouseWheelPixels : t.mouseWheel.scrollAmount, t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta ? t.advanced.normalizeMouseWheelDelta : t.mouseWheel.normalizeDelta, t.scrollButtons.scrollType = g(t.scrollButtons.scrollType), h(t), e(o).each(function() { var o = e(this); if (!o.data(a)) { o.data(a, { idx: ++r, opt: t, scrollRatio: { y: null, x: null }, overflowed: null, contentReset: { y: null, x: null }, bindEvents: !1, tweenRunning: !1, sequential: {}, langDir: o.css("direction"), cbOffsets: null, trigger: null, poll: { size: { o: 0, n: 0 }, img: { o: 0, n: 0 }, change: { o: 0, n: 0 } } }); var n = o.data(a),
                                i = n.opt,
                                l = o.data("mcs-axis"),
                                s = o.data("mcs-scrollbar-position"),
                                c = o.data("mcs-theme");
                            l && (i.axis = l), s && (i.scrollbarPosition = s), c && (i.theme = c, h(i)), v.call(this), n && i.callbacks.onCreate && "function" == typeof i.callbacks.onCreate && i.callbacks.onCreate.call(this), e("#mCSB_" + n.idx + "_container img:not(." + d[2] + ")").addClass(d[2]), u.update.call(null, o) } }) }, update: function(t, o) { var n = t || f.call(this); return e(n).each(function() { var t = e(this); if (t.data(a)) { var n = t.data(a),
                                i = n.opt,
                                r = e("#mCSB_" + n.idx + "_container"),
                                l = e("#mCSB_" + n.idx),
                                s = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")]; if (!r.length) return;
                            n.tweenRunning && Q(t), o && n && i.callbacks.onBeforeUpdate && "function" == typeof i.callbacks.onBeforeUpdate && i.callbacks.onBeforeUpdate.call(this), t.hasClass(d[3]) && t.removeClass(d[3]), t.hasClass(d[4]) && t.removeClass(d[4]), l.css("max-height", "none"), l.height() !== t.height() && l.css("max-height", t.height()), _.call(this), "y" === i.axis || i.advanced.autoExpandHorizontalScroll || r.css("width", x(r)), n.overflowed = y.call(this), M.call(this), i.autoDraggerLength && S.call(this), b.call(this), T.call(this); var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)]; "x" !== i.axis && (n.overflowed[0] ? s[0].height() > s[0].parent().height() ? B.call(this) : (G(t, c[0].toString(), { dir: "y", dur: 0, overwrite: "none" }), n.contentReset.y = null) : (B.call(this), "y" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[1] && G(t, c[1].toString(), { dir: "x", dur: 0, overwrite: "none" }))), "y" !== i.axis && (n.overflowed[1] ? s[1].width() > s[1].parent().width() ? B.call(this) : (G(t, c[1].toString(), { dir: "x", dur: 0, overwrite: "none" }), n.contentReset.x = null) : (B.call(this), "x" === i.axis ? k.call(this) : "yx" === i.axis && n.overflowed[0] && G(t, c[0].toString(), { dir: "y", dur: 0, overwrite: "none" }))), o && n && (2 === o && i.callbacks.onImageLoad && "function" == typeof i.callbacks.onImageLoad ? i.callbacks.onImageLoad.call(this) : 3 === o && i.callbacks.onSelectorChange && "function" == typeof i.callbacks.onSelectorChange ? i.callbacks.onSelectorChange.call(this) : i.callbacks.onUpdate && "function" == typeof i.callbacks.onUpdate && i.callbacks.onUpdate.call(this)), N.call(this) } }) }, scrollTo: function(t, o) { if ("undefined" != typeof t && null != t) { var n = f.call(this); return e(n).each(function() { var n = e(this); if (n.data(a)) { var i = n.data(a),
                                    r = i.opt,
                                    l = { trigger: "external", scrollInertia: r.scrollInertia, scrollEasing: "mcsEaseInOut", moveDragger: !1, timeout: 60, callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 },
                                    s = e.extend(!0, {}, l, o),
                                    c = Y.call(this, t),
                                    d = s.scrollInertia > 0 && s.scrollInertia < 17 ? 17 : s.scrollInertia;
                                c[0] = X.call(this, c[0], "y"), c[1] = X.call(this, c[1], "x"), s.moveDragger && (c[0] *= i.scrollRatio.y, c[1] *= i.scrollRatio.x), s.dur = ne() ? 0 : d, setTimeout(function() { null !== c[0] && "undefined" != typeof c[0] && "x" !== r.axis && i.overflowed[0] && (s.dir = "y", s.overwrite = "all", G(n, c[0].toString(), s)), null !== c[1] && "undefined" != typeof c[1] && "y" !== r.axis && i.overflowed[1] && (s.dir = "x", s.overwrite = "none", G(n, c[1].toString(), s)) }, s.timeout) } }) } }, stop: function() { var t = f.call(this); return e(t).each(function() { var t = e(this);
                        t.data(a) && Q(t) }) }, disable: function(t) { var o = f.call(this); return e(o).each(function() { var o = e(this); if (o.data(a)) { o.data(a);
                            N.call(this, "remove"), k.call(this), t && B.call(this), M.call(this, !0), o.addClass(d[3]) } }) }, destroy: function() { var t = f.call(this); return e(t).each(function() { var n = e(this); if (n.data(a)) { var i = n.data(a),
                                r = i.opt,
                                l = e("#mCSB_" + i.idx),
                                s = e("#mCSB_" + i.idx + "_container"),
                                c = e(".mCSB_" + i.idx + "_scrollbar");
                            r.live && m(r.liveSelector || e(t).selector), N.call(this, "remove"), k.call(this), B.call(this), n.removeData(a), $(this, "mcs"), c.remove(), s.find("img." + d[2]).removeClass(d[2]), l.replaceWith(s.contents()), n.removeClass(o + " _" + a + "_" + i.idx + " " + d[6] + " " + d[7] + " " + d[5] + " " + d[3]).addClass(d[4]) } }) } },
            f = function() { return "object" != typeof e(this) || e(this).length < 1 ? n : this },
            h = function(t) { var o = ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"],
                    a = ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"],
                    n = ["minimal", "minimal-dark"],
                    i = ["minimal", "minimal-dark"],
                    r = ["minimal", "minimal-dark"];
                t.autoDraggerLength = e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength, t.autoExpandScrollbar = e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar, t.scrollButtons.enable = e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable, t.autoHideScrollbar = e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar, t.scrollbarPosition = e.inArray(t.theme, r) > -1 ? "outside" : t.scrollbarPosition },
            m = function(e) { l[e] && (clearTimeout(l[e]), $(l, e)) },
            p = function(e) { return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y" },
            g = function(e) { return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless" },
            v = function() { var t = e(this),
                    n = t.data(a),
                    i = n.opt,
                    r = i.autoExpandScrollbar ? " " + d[1] + "_expand" : "",
                    l = ["<div id='mCSB_" + n.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_vertical" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + n.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + n.idx + "_scrollbar mCS-" + i.theme + " mCSB_scrollTools_horizontal" + r + "'><div class='" + d[12] + "'><div id='mCSB_" + n.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],
                    s = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    c = "yx" === i.axis ? l[0] + l[1] : "x" === i.axis ? l[1] : l[0],
                    u = "yx" === i.axis ? "<div id='mCSB_" + n.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    f = i.autoHideScrollbar ? " " + d[6] : "",
                    h = "x" !== i.axis && "rtl" === n.langDir ? " " + d[7] : "";
                i.setWidth && t.css("width", i.setWidth), i.setHeight && t.css("height", i.setHeight), i.setLeft = "y" !== i.axis && "rtl" === n.langDir ? "989999px" : i.setLeft, t.addClass(o + " _" + a + "_" + n.idx + f + h).wrapInner("<div id='mCSB_" + n.idx + "' class='mCustomScrollBox mCS-" + i.theme + " " + s + "'><div id='mCSB_" + n.idx + "_container' class='mCSB_container' style='position:relative; top:" + i.setTop + "; left:" + i.setLeft + ";' dir='" + n.langDir + "' /></div>"); var m = e("#mCSB_" + n.idx),
                    p = e("#mCSB_" + n.idx + "_container"); "y" === i.axis || i.advanced.autoExpandHorizontalScroll || p.css("width", x(p)), "outside" === i.scrollbarPosition ? ("static" === t.css("position") && t.css("position", "relative"), t.css("overflow", "visible"), m.addClass("mCSB_outside").after(c)) : (m.addClass("mCSB_inside").append(c), p.wrap(u)), w.call(this); var g = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")];
                g[0].css("min-height", g[0].height()), g[1].css("min-width", g[1].width()) },
            x = function(t) { var o = [t[0].scrollWidth, Math.max.apply(Math, t.children().map(function() { return e(this).outerWidth(!0) }).get())],
                    a = t.parent().width(); return o[0] > a ? o[0] : o[1] > a ? o[1] : "100%" },
            _ = function() { var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx + "_container"); if (n.advanced.autoExpandHorizontalScroll && "y" !== n.axis) { i.css({ width: "auto", "min-width": 0, "overflow-x": "scroll" }); var r = Math.ceil(i[0].scrollWidth);
                    3 === n.advanced.autoExpandHorizontalScroll || 2 !== n.advanced.autoExpandHorizontalScroll && r > i.parent().width() ? i.css({ width: r, "min-width": "100%", "overflow-x": "inherit" }) : i.css({ "overflow-x": "inherit", position: "absolute" }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({ width: Math.ceil(i[0].getBoundingClientRect().right + .4) - Math.floor(i[0].getBoundingClientRect().left), "min-width": "100%", position: "relative" }).unwrap() } },
            w = function() { var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e(".mCSB_" + o.idx + "_scrollbar:first"),
                    r = oe(n.scrollButtons.tabindex) ? "tabindex='" + n.scrollButtons.tabindex + "'" : "",
                    l = ["<a href='#' class='" + d[13] + "' " + r + " />", "<a href='#' class='" + d[14] + "' " + r + " />", "<a href='#' class='" + d[15] + "' " + r + " />", "<a href='#' class='" + d[16] + "' " + r + " />"],
                    s = ["x" === n.axis ? l[2] : l[0], "x" === n.axis ? l[3] : l[1], l[2], l[3]];
                n.scrollButtons.enable && i.prepend(s[0]).append(s[1]).next(".mCSB_scrollTools").prepend(s[2]).append(s[3]) },
            S = function() { var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
                    c = [parseInt(r[0].css("min-height")), Math.round(l[0] * r[0].parent().height()), parseInt(r[1].css("min-width")), Math.round(l[1] * r[1].parent().width())],
                    d = s && c[1] < c[0] ? c[0] : c[1],
                    u = s && c[3] < c[2] ? c[2] : c[3];
                r[0].css({ height: d, "max-height": r[0].parent().height() - 10 }).find(".mCSB_dragger_bar").css({ "line-height": c[0] + "px" }), r[1].css({ width: u, "max-width": r[1].parent().width() - 10 }) },
            b = function() { var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")],
                    l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
                    s = [l[0] / (r[0].parent().height() - r[0].height()), l[1] / (r[1].parent().width() - r[1].width())];
                o.scrollRatio = { y: s[0], x: s[1] } },
            C = function(e, t, o) { var a = o ? d[0] + "_expanded" : "",
                    n = e.closest(".mCSB_scrollTools"); "active" === t ? (e.toggleClass(d[0] + " " + a), n.toggleClass(d[1]), e[0]._draggable = e[0]._draggable ? 0 : 1) : e[0]._draggable || ("hide" === t ? (e.removeClass(d[0]), n.removeClass(d[1])) : (e.addClass(d[0]), n.addClass(d[1]))) },
            y = function() { var t = e(this),
                    o = t.data(a),
                    n = e("#mCSB_" + o.idx),
                    i = e("#mCSB_" + o.idx + "_container"),
                    r = null == o.overflowed ? i.height() : i.outerHeight(!1),
                    l = null == o.overflowed ? i.width() : i.outerWidth(!1),
                    s = i[0].scrollHeight,
                    c = i[0].scrollWidth; return s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()] },
            B = function() { var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = e("#mCSB_" + o.idx),
                    r = e("#mCSB_" + o.idx + "_container"),
                    l = [e("#mCSB_" + o.idx + "_dragger_vertical"), e("#mCSB_" + o.idx + "_dragger_horizontal")]; if (Q(t), ("x" !== n.axis && !o.overflowed[0] || "y" === n.axis && o.overflowed[0]) && (l[0].add(r).css("top", 0), G(t, "_resetY")), "y" !== n.axis && !o.overflowed[1] || "x" === n.axis && o.overflowed[1]) { var s = dx = 0; "rtl" === o.langDir && (s = i.width() - r.outerWidth(!1), dx = Math.abs(s / o.scrollRatio.x)), r.css("left", s), l[1].css("left", dx), G(t, "_resetX") } },
            T = function() {
                function t() { r = setTimeout(function() { e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t() }, 100) } var o = e(this),
                    n = o.data(a),
                    i = n.opt; if (!n.bindEvents) { if (I.call(this), i.contentTouchScroll && D.call(this), E.call(this), i.mouseWheel.enable) { var r;
                        t() }
                    P.call(this), U.call(this), i.advanced.autoScrollOnFocus && H.call(this), i.scrollButtons.enable && F.call(this), i.keyboard.enable && q.call(this), n.bindEvents = !0 } },
            k = function() { var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = ".mCSB_" + o.idx + "_scrollbar",
                    l = e("#mCSB_" + o.idx + ",#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper," + r + " ." + d[12] + ",#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal," + r + ">a"),
                    s = e("#mCSB_" + o.idx + "_container");
                n.advanced.releaseDraggableSelectors && l.add(e(n.advanced.releaseDraggableSelectors)), n.advanced.extraDraggableSelectors && l.add(e(n.advanced.extraDraggableSelectors)), o.bindEvents && (e(document).add(e(!A() || top.document)).unbind("." + i), l.each(function() { e(this).unbind("." + i) }), clearTimeout(t[0]._focusTimeout), $(t[0], "_focusTimeout"), clearTimeout(o.sequential.step), $(o.sequential, "step"), clearTimeout(s[0].onCompleteTimeout), $(s[0], "onCompleteTimeout"), o.bindEvents = !1) },
            M = function(t) { var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = e("#mCSB_" + n.idx + "_container_wrapper"),
                    l = r.length ? r : e("#mCSB_" + n.idx + "_container"),
                    s = [e("#mCSB_" + n.idx + "_scrollbar_vertical"), e("#mCSB_" + n.idx + "_scrollbar_horizontal")],
                    c = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")]; "x" !== i.axis && (n.overflowed[0] && !t ? (s[0].add(c[0]).add(s[0].children("a")).css("display", "block"), l.removeClass(d[8] + " " + d[10])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[0].css("display", "none"), l.removeClass(d[10])) : (s[0].css("display", "none"), l.addClass(d[10])), l.addClass(d[8]))), "y" !== i.axis && (n.overflowed[1] && !t ? (s[1].add(c[1]).add(s[1].children("a")).css("display", "block"), l.removeClass(d[9] + " " + d[11])) : (i.alwaysShowScrollbar ? (2 !== i.alwaysShowScrollbar && c[1].css("display", "none"), l.removeClass(d[11])) : (s[1].css("display", "none"), l.addClass(d[11])), l.addClass(d[9]))), n.overflowed[0] || n.overflowed[1] ? o.removeClass(d[5]) : o.addClass(d[5]) },
            O = function(t) { var o = t.type,
                    a = t.target.ownerDocument !== document && null !== frameElement ? [e(frameElement).offset().top, e(frameElement).offset().left] : null,
                    n = A() && t.target.ownerDocument !== top.document && null !== frameElement ? [e(t.view.frameElement).offset().top, e(t.view.frameElement).offset().left] : [0, 0]; switch (o) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return a ? [t.originalEvent.pageY - a[0] + n[0], t.originalEvent.pageX - a[1] + n[1], !1] : [t.originalEvent.pageY, t.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
                            r = t.originalEvent.touches.length || t.originalEvent.changedTouches.length; return t.target.ownerDocument !== document ? [i.screenY, i.screenX, r > 1] : [i.pageY, i.pageX, r > 1];
                    default:
                        return a ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1] : [t.pageY, t.pageX, !1] } },
            I = function() {
                function t(e, t, a, n) { if (h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0, o.attr("id") === f[1]) var i = "x",
                        s = (o[0].offsetLeft - t + n) * l.scrollRatio.x;
                    else var i = "y",
                        s = (o[0].offsetTop - e + a) * l.scrollRatio.y;
                    G(r, s.toString(), { dir: i, drag: !0 }) } var o, n, i, r = e(this),
                    l = r.data(a),
                    d = l.opt,
                    u = a + "_" + l.idx,
                    f = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
                    h = e("#mCSB_" + l.idx + "_container"),
                    m = e("#" + f[0] + ",#" + f[1]),
                    p = d.advanced.releaseDraggableSelectors ? m.add(e(d.advanced.releaseDraggableSelectors)) : m,
                    g = d.advanced.extraDraggableSelectors ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors)) : e(!A() || top.document);
                m.bind("contextmenu." + u, function(e) { e.preventDefault() }).bind("mousedown." + u + " touchstart." + u + " pointerdown." + u + " MSPointerDown." + u, function(t) { if (t.stopImmediatePropagation(), t.preventDefault(), ee(t)) { c = !0, s && (document.onselectstart = function() { return !1 }), L.call(h, !1), Q(r), o = e(this); var a = o.offset(),
                            l = O(t)[0] - a.top,
                            u = O(t)[1] - a.left,
                            f = o.height() + a.top,
                            m = o.width() + a.left;
                        f > l && l > 0 && m > u && u > 0 && (n = l, i = u), C(o, "active", d.autoExpandScrollbar) } }).bind("touchmove." + u, function(e) { e.stopImmediatePropagation(), e.preventDefault(); var a = o.offset(),
                        r = O(e)[0] - a.top,
                        l = O(e)[1] - a.left;
                    t(n, i, r, l) }), e(document).add(g).bind("mousemove." + u + " pointermove." + u + " MSPointerMove." + u, function(e) { if (o) { var a = o.offset(),
                            r = O(e)[0] - a.top,
                            l = O(e)[1] - a.left; if (n === r && i === l) return;
                        t(n, i, r, l) } }).add(p).bind("mouseup." + u + " touchend." + u + " pointerup." + u + " MSPointerUp." + u, function() { o && (C(o, "active", d.autoExpandScrollbar), o = null), c = !1, s && (document.onselectstart = null), L.call(h, !0) }) },
            D = function() {
                function o(e) { if (!te(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, b = 0, C = 0, d = 1, y.removeClass("mCS_touch_action"); var o = I.offset();
                    u = O(e)[0] - o.top, f = O(e)[1] - o.left, z = [O(e)[0], O(e)[1]] }

                function n(e) { if (te(e) && !c && !O(e)[2] && (T.documentTouchScroll || e.preventDefault(), e.stopImmediatePropagation(), (!C || b) && d)) { g = K(); var t = M.offset(),
                            o = O(e)[0] - t.top,
                            a = O(e)[1] - t.left,
                            n = "mcsLinearOut"; if (E.push(o), W.push(a), z[2] = Math.abs(O(e)[0] - z[0]), z[3] = Math.abs(O(e)[1] - z[1]), B.overflowed[0]) var i = D[0].parent().height() - D[0].height(),
                            r = u - o > 0 && o - u > -(i * B.scrollRatio.y) && (2 * z[3] < z[2] || "yx" === T.axis); if (B.overflowed[1]) var l = D[1].parent().width() - D[1].width(),
                            h = f - a > 0 && a - f > -(l * B.scrollRatio.x) && (2 * z[2] < z[3] || "yx" === T.axis);
                        r || h ? (U || e.preventDefault(), b = 1) : (C = 1, y.addClass("mCS_touch_action")), U && e.preventDefault(), w = "yx" === T.axis ? [u - o, f - a] : "x" === T.axis ? [null, f - a] : [u - o, null], I[0].idleTimer = 250, B.overflowed[0] && s(w[0], R, n, "y", "all", !0), B.overflowed[1] && s(w[1], R, n, "x", L, !0) } }

                function i(e) { if (!te(e) || c || O(e)[2]) return void(t = 0);
                    t = 1, e.stopImmediatePropagation(), Q(y), p = K(); var o = M.offset();
                    h = O(e)[0] - o.top, m = O(e)[1] - o.left, E = [], W = [] }

                function r(e) { if (te(e) && !c && !O(e)[2]) { d = 0, e.stopImmediatePropagation(), b = 0, C = 0, v = K(); var t = M.offset(),
                            o = O(e)[0] - t.top,
                            a = O(e)[1] - t.left; if (!(v - g > 30)) { _ = 1e3 / (v - p); var n = "mcsEaseOut",
                                i = 2.5 > _,
                                r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0];
                            x = i ? [o - r[0], a - r[1]] : [o - h, a - m]; var u = [Math.abs(x[0]), Math.abs(x[1])];
                            _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _]; var f = [Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]), Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1])];
                            w = "yx" === T.axis ? [f[0], f[1]] : "x" === T.axis ? [null, f[1]] : [f[0], null], S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia]; var y = parseInt(T.contentTouchScroll) || 0;
                            w[0] = u[0] > y ? w[0] : 0, w[1] = u[1] > y ? w[1] : 0, B.overflowed[0] && s(w[0], S[0], n, "y", L, !1), B.overflowed[1] && s(w[1], S[1], n, "x", L, !1) } } }

                function l(e, t) { var o = [1.5 * t, 2 * t, t / 1.5, t / 2]; return e > 90 ? t > 4 ? o[0] : o[3] : e > 60 ? t > 3 ? o[3] : o[2] : e > 30 ? t > 8 ? o[1] : t > 6 ? o[0] : t > 4 ? t : o[2] : t > 8 ? t : o[3] }

                function s(e, t, o, a, n, i) { e && G(y, e.toString(), { dur: t, scrollEasing: o, dir: a, overwrite: n, drag: i }) } var d, u, f, h, m, p, g, v, x, _, w, S, b, C, y = e(this),
                    B = y.data(a),
                    T = B.opt,
                    k = a + "_" + B.idx,
                    M = e("#mCSB_" + B.idx),
                    I = e("#mCSB_" + B.idx + "_container"),
                    D = [e("#mCSB_" + B.idx + "_dragger_vertical"), e("#mCSB_" + B.idx + "_dragger_horizontal")],
                    E = [],
                    W = [],
                    R = 0,
                    L = "yx" === T.axis ? "none" : "all",
                    z = [],
                    P = I.find("iframe"),
                    H = ["touchstart." + k + " pointerdown." + k + " MSPointerDown." + k, "touchmove." + k + " pointermove." + k + " MSPointerMove." + k, "touchend." + k + " pointerup." + k + " MSPointerUp." + k],
                    U = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                I.bind(H[0], function(e) { o(e) }).bind(H[1], function(e) { n(e) }), M.bind(H[0], function(e) { i(e) }).bind(H[2], function(e) { r(e) }), P.length && P.each(function() { e(this).bind("load", function() { A(this) && e(this.contentDocument || this.contentWindow.document).bind(H[0], function(e) { o(e), i(e) }).bind(H[1], function(e) { n(e) }).bind(H[2], function(e) { r(e) }) }) }) },
            E = function() {
                function o() { return window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type ? document.selection.createRange().text : 0 }

                function n(e, t, o) { d.type = o && i ? "stepped" : "stepless", d.scrollAmount = 10, j(r, e, t, "mcsLinearOut", o ? 60 : null) } var i, r = e(this),
                    l = r.data(a),
                    s = l.opt,
                    d = l.sequential,
                    u = a + "_" + l.idx,
                    f = e("#mCSB_" + l.idx + "_container"),
                    h = f.parent();
                f.bind("mousedown." + u, function() { t || i || (i = 1, c = !0) }).add(document).bind("mousemove." + u, function(e) { if (!t && i && o()) { var a = f.offset(),
                            r = O(e)[0] - a.top + f[0].offsetTop,
                            c = O(e)[1] - a.left + f[0].offsetLeft;
                        r > 0 && r < h.height() && c > 0 && c < h.width() ? d.step && n("off", null, "stepped") : ("x" !== s.axis && l.overflowed[0] && (0 > r ? n("on", 38) : r > h.height() && n("on", 40)), "y" !== s.axis && l.overflowed[1] && (0 > c ? n("on", 37) : c > h.width() && n("on", 39))) } }).bind("mouseup." + u + " dragend." + u, function() { t || (i && (i = 0, n("off", null)), c = !1) }) },
            W = function() {
                function t(t, a) { if (Q(o), !z(o, t.target)) { var r = "auto" !== i.mouseWheel.deltaFactor ? parseInt(i.mouseWheel.deltaFactor) : s && t.deltaFactor < 100 ? 100 : t.deltaFactor || 100,
                            d = i.scrollInertia; if ("x" === i.axis || "x" === i.mouseWheel.axis) var u = "x",
                            f = [Math.round(r * n.scrollRatio.x), parseInt(i.mouseWheel.scrollAmount)],
                            h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.width() ? .9 * l.width() : f[0],
                            m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetLeft),
                            p = c[1][0].offsetLeft,
                            g = c[1].parent().width() - c[1].width(),
                            v = "y" === i.mouseWheel.axis ? t.deltaY || a : t.deltaX;
                        else var u = "y",
                            f = [Math.round(r * n.scrollRatio.y), parseInt(i.mouseWheel.scrollAmount)],
                            h = "auto" !== i.mouseWheel.scrollAmount ? f[1] : f[0] >= l.height() ? .9 * l.height() : f[0],
                            m = Math.abs(e("#mCSB_" + n.idx + "_container")[0].offsetTop),
                            p = c[0][0].offsetTop,
                            g = c[0].parent().height() - c[0].height(),
                            v = t.deltaY || a; "y" === u && !n.overflowed[0] || "x" === u && !n.overflowed[1] || ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) && (v = -v), i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1), (v > 0 && 0 !== p || 0 > v && p !== g || i.mouseWheel.preventDefault) && (t.stopImmediatePropagation(), t.preventDefault()), t.deltaFactor < 5 && !i.mouseWheel.normalizeDelta && (h = t.deltaFactor, d = 17), G(o, (m - v * h).toString(), { dir: u, dur: d })) } } if (e(this).data(a)) { var o = e(this),
                        n = o.data(a),
                        i = n.opt,
                        r = a + "_" + n.idx,
                        l = e("#mCSB_" + n.idx),
                        c = [e("#mCSB_" + n.idx + "_dragger_vertical"), e("#mCSB_" + n.idx + "_dragger_horizontal")],
                        d = e("#mCSB_" + n.idx + "_container").find("iframe");
                    d.length && d.each(function() { e(this).bind("load", function() { A(this) && e(this.contentDocument || this.contentWindow.document).bind("mousewheel." + r, function(e, o) { t(e, o) }) }) }), l.bind("mousewheel." + r, function(e, o) { t(e, o) }) } },
            R = new Object,
            A = function(t) { var o = !1,
                    a = !1,
                    n = null; if (void 0 === t ? a = "#empty" : void 0 !== e(t).attr("id") && (a = e(t).attr("id")), a !== !1 && void 0 !== R[a]) return R[a]; if (t) { try { var i = t.contentDocument || t.contentWindow.document;
                        n = i.body.innerHTML } catch (r) {}
                    o = null !== n } else { try { var i = top.document;
                        n = i.body.innerHTML } catch (r) {}
                    o = null !== n } return a !== !1 && (R[a] = o), o },
            L = function(e) { var t = this.find("iframe"); if (t.length) { var o = e ? "auto" : "none";
                    t.css("pointer-events", o) } },
            z = function(t, o) { var n = o.nodeName.toLowerCase(),
                    i = t.data(a).opt.mouseWheel.disableOver,
                    r = ["select", "textarea"]; return e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(":focus")) },
            P = function() { var t, o = e(this),
                    n = o.data(a),
                    i = a + "_" + n.idx,
                    r = e("#mCSB_" + n.idx + "_container"),
                    l = r.parent(),
                    s = e(".mCSB_" + n.idx + "_scrollbar ." + d[12]);
                s.bind("mousedown." + i + " touchstart." + i + " pointerdown." + i + " MSPointerDown." + i, function(o) { c = !0, e(o.target).hasClass("mCSB_dragger") || (t = 1) }).bind("touchend." + i + " pointerup." + i + " MSPointerUp." + i, function() { c = !1 }).bind("click." + i, function(a) { if (t && (t = 0, e(a.target).hasClass(d[12]) || e(a.target).hasClass("mCSB_draggerRail"))) { Q(o); var i = e(this),
                            s = i.find(".mCSB_dragger"); if (i.parent(".mCSB_scrollTools_horizontal").length > 0) { if (!n.overflowed[1]) return; var c = "x",
                                u = a.pageX > s.offset().left ? -1 : 1,
                                f = Math.abs(r[0].offsetLeft) - u * (.9 * l.width()) } else { if (!n.overflowed[0]) return; var c = "y",
                                u = a.pageY > s.offset().top ? -1 : 1,
                                f = Math.abs(r[0].offsetTop) - u * (.9 * l.height()) }
                        G(o, f.toString(), { dir: c, scrollEasing: "mcsEaseInOut" }) } }) },
            H = function() { var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = a + "_" + o.idx,
                    r = e("#mCSB_" + o.idx + "_container"),
                    l = r.parent();
                r.bind("focusin." + i, function() { var o = e(document.activeElement),
                        a = r.find(".mCustomScrollBox").length,
                        i = 0;
                    o.is(n.advanced.autoScrollOnFocus) && (Q(t), clearTimeout(t[0]._focusTimeout), t[0]._focusTimer = a ? (i + 17) * a : 0, t[0]._focusTimeout = setTimeout(function() { var e = [ae(o)[0], ae(o)[1]],
                            a = [r[0].offsetTop, r[0].offsetLeft],
                            s = [a[0] + e[0] >= 0 && a[0] + e[0] < l.height() - o.outerHeight(!1), a[1] + e[1] >= 0 && a[0] + e[1] < l.width() - o.outerWidth(!1)],
                            c = "yx" !== n.axis || s[0] || s[1] ? "all" : "none"; "x" === n.axis || s[0] || G(t, e[0].toString(), { dir: "y", scrollEasing: "mcsEaseInOut", overwrite: c, dur: i }), "y" === n.axis || s[1] || G(t, e[1].toString(), { dir: "x", scrollEasing: "mcsEaseInOut", overwrite: c, dur: i }) }, t[0]._focusTimer)) }) },
            U = function() { var t = e(this),
                    o = t.data(a),
                    n = a + "_" + o.idx,
                    i = e("#mCSB_" + o.idx + "_container").parent();
                i.bind("scroll." + n, function() { 0 === i.scrollTop() && 0 === i.scrollLeft() || e(".mCSB_" + o.idx + "_scrollbar").css("visibility", "hidden") }) },
            F = function() { var t = e(this),
                    o = t.data(a),
                    n = o.opt,
                    i = o.sequential,
                    r = a + "_" + o.idx,
                    l = ".mCSB_" + o.idx + "_scrollbar",
                    s = e(l + ">a");
                s.bind("contextmenu." + r, function(e) { e.preventDefault() }).bind("mousedown." + r + " touchstart." + r + " pointerdown." + r + " MSPointerDown." + r + " mouseup." + r + " touchend." + r + " pointerup." + r + " MSPointerUp." + r + " mouseout." + r + " pointerout." + r + " MSPointerOut." + r + " click." + r, function(a) {
                    function r(e, o) { i.scrollAmount = n.scrollButtons.scrollAmount, j(t, e, o) } if (a.preventDefault(), ee(a)) { var l = e(this).attr("class"); switch (i.type = n.scrollButtons.scrollType, a.type) {
                            case "mousedown":
                            case "touchstart":
                            case "pointerdown":
                            case "MSPointerDown":
                                if ("stepped" === i.type) return;
                                c = !0, o.tweenRunning = !1, r("on", l); break;
                            case "mouseup":
                            case "touchend":
                            case "pointerup":
                            case "MSPointerUp":
                            case "mouseout":
                            case "pointerout":
                            case "MSPointerOut":
                                if ("stepped" === i.type) return;
                                c = !1, i.dir && r("off", l); break;
                            case "click":
                                if ("stepped" !== i.type || o.tweenRunning) return;
                                r("on", l) } } }) },
            q = function() {
                function t(t) {
                    function a(e, t) { r.type = i.keyboard.scrollType, r.scrollAmount = i.keyboard.scrollAmount, "stepped" === r.type && n.tweenRunning || j(o, e, t) } switch (t.type) {
                        case "blur":
                            n.tweenRunning && r.dir && a("off", null); break;
                        case "keydown":
                        case "keyup":
                            var l = t.keyCode ? t.keyCode : t.which,
                                s = "on"; if ("x" !== i.axis && (38 === l || 40 === l) || "y" !== i.axis && (37 === l || 39 === l)) { if ((38 === l || 40 === l) && !n.overflowed[0] || (37 === l || 39 === l) && !n.overflowed[1]) return; "keyup" === t.type && (s = "off"), e(document.activeElement).is(u) || (t.preventDefault(), t.stopImmediatePropagation(), a(s, l)) } else if (33 === l || 34 === l) { if ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type) { Q(o); var f = 34 === l ? -1 : 1; if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                        m = Math.abs(c[0].offsetLeft) - f * (.9 * d.width());
                                    else var h = "y",
                                        m = Math.abs(c[0].offsetTop) - f * (.9 * d.height());
                                    G(o, m.toString(), { dir: h, scrollEasing: "mcsEaseInOut" }) } } else if ((35 === l || 36 === l) && !e(document.activeElement).is(u) && ((n.overflowed[0] || n.overflowed[1]) && (t.preventDefault(), t.stopImmediatePropagation()), "keyup" === t.type)) { if ("x" === i.axis || "yx" === i.axis && n.overflowed[1] && !n.overflowed[0]) var h = "x",
                                    m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0;
                                else var h = "y",
                                    m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0;
                                G(o, m.toString(), { dir: h, scrollEasing: "mcsEaseInOut" }) } } } var o = e(this),
                    n = o.data(a),
                    i = n.opt,
                    r = n.sequential,
                    l = a + "_" + n.idx,
                    s = e("#mCSB_" + n.idx),
                    c = e("#mCSB_" + n.idx + "_container"),
                    d = c.parent(),
                    u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    f = c.find("iframe"),
                    h = ["blur." + l + " keydown." + l + " keyup." + l];
                f.length && f.each(function() { e(this).bind("load", function() { A(this) && e(this.contentDocument || this.contentWindow.document).bind(h[0], function(e) { t(e) }) }) }), s.attr("tabindex", "0").bind(h[0], function(e) { t(e) }) },
            j = function(t, o, n, i, r) {
                function l(e) { u.snapAmount && (f.scrollAmount = u.snapAmount instanceof Array ? "x" === f.dir[0] ? u.snapAmount[1] : u.snapAmount[0] : u.snapAmount); var o = "stepped" !== f.type,
                        a = r ? r : e ? o ? p / 1.5 : g : 1e3 / 60,
                        n = e ? o ? 7.5 : 40 : 2.5,
                        s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                        d = [c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y, c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x],
                        m = "x" === f.dir[0] ? s[1] + f.dir[1] * (d[1] * n) : s[0] + f.dir[1] * (d[0] * n),
                        v = "x" === f.dir[0] ? s[1] + f.dir[1] * parseInt(f.scrollAmount) : s[0] + f.dir[1] * parseInt(f.scrollAmount),
                        x = "auto" !== f.scrollAmount ? v : m,
                        _ = i ? i : e ? o ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear",
                        w = !!e; return e && 17 > a && (x = "x" === f.dir[0] ? s[1] : s[0]), G(t, x.toString(), { dir: f.dir[0], scrollEasing: _, dur: a, onComplete: w }), e ? void(f.dir = !1) : (clearTimeout(f.step), void(f.step = setTimeout(function() { l() }, a))) }

                function s() { clearTimeout(f.step), $(f, "step"), Q(t) } var c = t.data(a),
                    u = c.opt,
                    f = c.sequential,
                    h = e("#mCSB_" + c.idx + "_container"),
                    m = "stepped" === f.type,
                    p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                    g = u.scrollInertia < 1 ? 17 : u.scrollInertia; switch (o) {
                    case "on":
                        if (f.dir = [n === d[16] || n === d[15] || 39 === n || 37 === n ? "x" : "y", n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1], Q(t), oe(n) && "stepped" === f.type) return;
                        l(m); break;
                    case "off":
                        s(), (m || c.tweenRunning && f.dir) && l(!0) } },
            Y = function(t) { var o = e(this).data(a).opt,
                    n = []; return "function" == typeof t && (t = t()), t instanceof Array ? n = t.length > 1 ? [t[0], t[1]] : "x" === o.axis ? [null, t[0]] : [t[0], null] : (n[0] = t.y ? t.y : t.x || "x" === o.axis ? null : t, n[1] = t.x ? t.x : t.y || "y" === o.axis ? null : t), "function" == typeof n[0] && (n[0] = n[0]()), "function" == typeof n[1] && (n[1] = n[1]()), n },
            X = function(t, o) { if (null != t && "undefined" != typeof t) { var n = e(this),
                        i = n.data(a),
                        r = i.opt,
                        l = e("#mCSB_" + i.idx + "_container"),
                        s = l.parent(),
                        c = typeof t;
                    o || (o = "x" === r.axis ? "x" : "y"); var d = "x" === o ? l.outerWidth(!1) - s.width() : l.outerHeight(!1) - s.height(),
                        f = "x" === o ? l[0].offsetLeft : l[0].offsetTop,
                        h = "x" === o ? "left" : "top"; switch (c) {
                        case "function":
                            return t();
                        case "object":
                            var m = t.jquery ? t : e(t); if (!m.length) return; return "x" === o ? ae(m)[1] : ae(m)[0];
                        case "string":
                        case "number":
                            if (oe(t)) return Math.abs(t); if (-1 !== t.indexOf("%")) return Math.abs(d * parseInt(t) / 100); if (-1 !== t.indexOf("-=")) return Math.abs(f - parseInt(t.split("-=")[1])); if (-1 !== t.indexOf("+=")) { var p = f + parseInt(t.split("+=")[1]); return p >= 0 ? 0 : Math.abs(p) } if (-1 !== t.indexOf("px") && oe(t.split("px")[0])) return Math.abs(t.split("px")[0]); if ("top" === t || "left" === t) return 0; if ("bottom" === t) return Math.abs(s.height() - l.outerHeight(!1)); if ("right" === t) return Math.abs(s.width() - l.outerWidth(!1)); if ("first" === t || "last" === t) { var m = l.find(":" + t); return "x" === o ? ae(m)[1] : ae(m)[0] } return e(t).length ? "x" === o ? ae(e(t))[1] : ae(e(t))[0] : (l.css(h, t), void u.update.call(null, n[0])) } } },
            N = function(t) {
                function o() { return clearTimeout(f[0].autoUpdate), 0 === l.parents("html").length ? void(l = null) : void(f[0].autoUpdate = setTimeout(function() { return c.advanced.updateOnSelectorChange && (s.poll.change.n = i(), s.poll.change.n !== s.poll.change.o) ? (s.poll.change.o = s.poll.change.n, void r(3)) : c.advanced.updateOnContentResize && (s.poll.size.n = l[0].scrollHeight + l[0].scrollWidth + f[0].offsetHeight + l[0].offsetHeight + l[0].offsetWidth, s.poll.size.n !== s.poll.size.o) ? (s.poll.size.o = s.poll.size.n, void r(1)) : !c.advanced.updateOnImageLoad || "auto" === c.advanced.updateOnImageLoad && "y" === c.axis || (s.poll.img.n = f.find("img").length, s.poll.img.n === s.poll.img.o) ? void((c.advanced.updateOnSelectorChange || c.advanced.updateOnContentResize || c.advanced.updateOnImageLoad) && o()) : (s.poll.img.o = s.poll.img.n, void f.find("img").each(function() { n(this) })) }, c.advanced.autoUpdateTimeout)) }

                function n(t) {
                    function o(e, t) { return function() { return t.apply(e, arguments) } }

                    function a() { this.onload = null, e(t).addClass(d[2]), r(2) } if (e(t).hasClass(d[2])) return void r(); var n = new Image;
                    n.onload = o(n, a), n.src = t.src }

                function i() { c.advanced.updateOnSelectorChange === !0 && (c.advanced.updateOnSelectorChange = "*"); var e = 0,
                        t = f.find(c.advanced.updateOnSelectorChange); return c.advanced.updateOnSelectorChange && t.length > 0 && t.each(function() { e += this.offsetHeight + this.offsetWidth }), e }

                function r(e) { clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e) } var l = e(this),
                    s = l.data(a),
                    c = s.opt,
                    f = e("#mCSB_" + s.idx + "_container"); return t ? (clearTimeout(f[0].autoUpdate), void $(f[0], "autoUpdate")) : void o() },
            V = function(e, t, o) { return Math.round(e / t) * t - o },
            Q = function(t) { var o = t.data(a),
                    n = e("#mCSB_" + o.idx + "_container,#mCSB_" + o.idx + "_container_wrapper,#mCSB_" + o.idx + "_dragger_vertical,#mCSB_" + o.idx + "_dragger_horizontal");
                n.each(function() { Z.call(this) }) },
            G = function(t, o, n) {
                function i(e) { return s && c.callbacks[e] && "function" == typeof c.callbacks[e] }

                function r() { return [c.callbacks.alwaysTriggerOffsets || w >= S[0] + y, c.callbacks.alwaysTriggerOffsets || -B >= w] }

                function l() { var e = [h[0].offsetTop, h[0].offsetLeft],
                        o = [x[0].offsetTop, x[0].offsetLeft],
                        a = [h.outerHeight(!1), h.outerWidth(!1)],
                        i = [f.height(), f.width()];
                    t[0].mcs = { content: h, top: e[0], left: e[1], draggerTop: o[0], draggerLeft: o[1], topPct: Math.round(100 * Math.abs(e[0]) / (Math.abs(a[0]) - i[0])), leftPct: Math.round(100 * Math.abs(e[1]) / (Math.abs(a[1]) - i[1])), direction: n.dir } } var s = t.data(a),
                    c = s.opt,
                    d = { trigger: "internal", dir: "y", scrollEasing: "mcsEaseOut", drag: !1, dur: c.scrollInertia, overwrite: "all", callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 },
                    n = e.extend(d, n),
                    u = [n.dur, n.drag ? 0 : n.dur],
                    f = e("#mCSB_" + s.idx),
                    h = e("#mCSB_" + s.idx + "_container"),
                    m = h.parent(),
                    p = c.callbacks.onTotalScrollOffset ? Y.call(t, c.callbacks.onTotalScrollOffset) : [0, 0],
                    g = c.callbacks.onTotalScrollBackOffset ? Y.call(t, c.callbacks.onTotalScrollBackOffset) : [0, 0]; if (s.trigger = n.trigger, 0 === m.scrollTop() && 0 === m.scrollLeft() || (e(".mCSB_" + s.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== o || s.contentReset.y || (i("onOverflowYNone") && c.callbacks.onOverflowYNone.call(t[0]), s.contentReset.y = 1), "_resetX" !== o || s.contentReset.x || (i("onOverflowXNone") && c.callbacks.onOverflowXNone.call(t[0]), s.contentReset.x = 1), "_resetY" !== o && "_resetX" !== o) { if (!s.contentReset.y && t[0].mcs || !s.overflowed[0] || (i("onOverflowY") && c.callbacks.onOverflowY.call(t[0]), s.contentReset.x = null), !s.contentReset.x && t[0].mcs || !s.overflowed[1] || (i("onOverflowX") && c.callbacks.onOverflowX.call(t[0]), s.contentReset.x = null), c.snapAmount) { var v = c.snapAmount instanceof Array ? "x" === n.dir ? c.snapAmount[1] : c.snapAmount[0] : c.snapAmount;
                        o = V(o, v, c.snapOffset) } switch (n.dir) {
                        case "x":
                            var x = e("#mCSB_" + s.idx + "_dragger_horizontal"),
                                _ = "left",
                                w = h[0].offsetLeft,
                                S = [f.width() - h.outerWidth(!1), x.parent().width() - x.width()],
                                b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                                y = p[1],
                                B = g[1],
                                T = y > 0 ? y / s.scrollRatio.x : 0,
                                k = B > 0 ? B / s.scrollRatio.x : 0; break;
                        case "y":
                            var x = e("#mCSB_" + s.idx + "_dragger_vertical"),
                                _ = "top",
                                w = h[0].offsetTop,
                                S = [f.height() - h.outerHeight(!1), x.parent().height() - x.height()],
                                b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                                y = p[0],
                                B = g[0],
                                T = y > 0 ? y / s.scrollRatio.y : 0,
                                k = B > 0 ? B / s.scrollRatio.y : 0 }
                    b[1] < 0 || 0 === b[0] && 0 === b[1] ? b = [0, 0] : b[1] >= S[1] ? b = [S[0], S[1]] : b[0] = -b[0], t[0].mcs || (l(), i("onInit") && c.callbacks.onInit.call(t[0])), clearTimeout(h[0].onCompleteTimeout), J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing), !s.tweenRunning && (0 === w && b[0] >= 0 || w === S[0] && b[0] <= S[0]) || J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, { onStart: function() { n.callbacks && n.onStart && !s.tweenRunning && (i("onScrollStart") && (l(), c.callbacks.onScrollStart.call(t[0])), s.tweenRunning = !0, C(x), s.cbOffsets = r()) }, onUpdate: function() { n.callbacks && n.onUpdate && i("whileScrolling") && (l(), c.callbacks.whileScrolling.call(t[0])) }, onComplete: function() { if (n.callbacks && n.onComplete) { "yx" === c.axis && clearTimeout(h[0].onCompleteTimeout); var e = h[0].idleTimer || 0;
                                h[0].onCompleteTimeout = setTimeout(function() { i("onScroll") && (l(), c.callbacks.onScroll.call(t[0])), i("onTotalScroll") && b[1] >= S[1] - T && s.cbOffsets[0] && (l(), c.callbacks.onTotalScroll.call(t[0])), i("onTotalScrollBack") && b[1] <= k && s.cbOffsets[1] && (l(), c.callbacks.onTotalScrollBack.call(t[0])), s.tweenRunning = !1, h[0].idleTimer = 0, C(x, "hide") }, e) } } }) } },
            J = function(e, t, o, a, n, i, r) {
                function l() { S.stop || (x || m.call(), x = K() - v, s(), x >= S.time && (S.time = x > S.time ? x + f - (x - S.time) : x + f - 1, S.time < x + 1 && (S.time = x + 1)), S.time < a ? S.id = h(l) : g.call()) }

                function s() { a > 0 ? (S.currVal = u(S.time, _, b, a, n), w[t] = Math.round(S.currVal) + "px") : w[t] = o + "px", p.call() }

                function c() { f = 1e3 / 60, S.time = x + f, h = window.requestAnimationFrame ? window.requestAnimationFrame : function(e) { return s(), setTimeout(e, .01) }, S.id = h(l) }

                function d() { null != S.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(S.id) : clearTimeout(S.id), S.id = null) }

                function u(e, t, o, a, n) { switch (n) {
                        case "linear":
                        case "mcsLinear":
                            return o * e / a + t;
                        case "mcsLinearOut":
                            return e /= a, e--, o * Math.sqrt(1 - e * e) + t;
                        case "easeInOutSmooth":
                            return e /= a / 2, 1 > e ? o / 2 * e * e + t : (e--, -o / 2 * (e * (e - 2) - 1) + t);
                        case "easeInOutStrong":
                            return e /= a / 2, 1 > e ? o / 2 * Math.pow(2, 10 * (e - 1)) + t : (e--, o / 2 * (-Math.pow(2, -10 * e) + 2) + t);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return e /= a / 2, 1 > e ? o / 2 * e * e * e + t : (e -= 2, o / 2 * (e * e * e + 2) + t);
                        case "easeOutSmooth":
                            return e /= a, e--, -o * (e * e * e * e - 1) + t;
                        case "easeOutStrong":
                            return o * (-Math.pow(2, -10 * e / a) + 1) + t;
                        case "easeOut":
                        case "mcsEaseOut":
                        default:
                            var i = (e /= a) * e,
                                r = i * e; return t + o * (.499999999999997 * r * i + -2.5 * i * i + 5.5 * r + -6.5 * i + 4 * e) } }
                e._mTween || (e._mTween = { top: {}, left: {} }); var f, h, r = r || {},
                    m = r.onStart || function() {},
                    p = r.onUpdate || function() {},
                    g = r.onComplete || function() {},
                    v = K(),
                    x = 0,
                    _ = e.offsetTop,
                    w = e.style,
                    S = e._mTween[t]; "left" === t && (_ = e.offsetLeft); var b = o - _;
                S.stop = 0, "none" !== i && d(), c() },
            K = function() { return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime() },
            Z = function() { var e = this;
                e._mTween || (e._mTween = { top: {}, left: {} }); for (var t = ["top", "left"], o = 0; o < t.length; o++) { var a = t[o];
                    e._mTween[a].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(e._mTween[a].id) : clearTimeout(e._mTween[a].id), e._mTween[a].id = null, e._mTween[a].stop = 1) } },
            $ = function(e, t) { try { delete e[t] } catch (o) { e[t] = null } },
            ee = function(e) { return !(e.which && 1 !== e.which) },
            te = function(e) { var t = e.originalEvent.pointerType; return !(t && "touch" !== t && 2 !== t) },
            oe = function(e) { return !isNaN(parseFloat(e)) && isFinite(e) },
            ae = function(e) { var t = e.parents(".mCSB_container"); return [e.offset().top - t.offset().top, e.offset().left - t.offset().left] },
            ne = function() {
                function e() { var e = ["webkit", "moz", "ms", "o"]; if ("hidden" in document) return "hidden"; for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null } var t = e(); return t ? document[t] : !1 };
        e.fn[o] = function(t) { return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments) }, e[o] = function(t) { return u[t] ? u[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist") : u.init.apply(this, arguments) }, e[o].defaults = i, window[o] = !0, e(window).bind("load", function() { e(n)[o](), e.extend(e.expr[":"], { mcsInView: e.expr[":"].mcsInView || function(t) { var o, a, n = e(t),
                        i = n.parents(".mCSB_container"); if (i.length) return o = i.parent(), a = [i[0].offsetTop, i[0].offsetLeft], a[0] + ae(n)[0] >= 0 && a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) && a[1] + ae(n)[1] >= 0 && a[1] + ae(n)[1] < o.width() - n.outerWidth(!1) }, mcsInSight: e.expr[":"].mcsInSight || function(t, o, a) { var n, i, r, l, s = e(t),
                        c = s.parents(".mCSB_container"),
                        d = "exact" === a[3] ? [
                            [1, 0],
                            [1, 0]
                        ] : [
                            [.9, .1],
                            [.6, .4]
                        ]; if (c.length) return n = [s.outerHeight(!1), s.outerWidth(!1)], r = [c[0].offsetTop + ae(s)[0], c[0].offsetLeft + ae(s)[1]], i = [c.parent()[0].offsetHeight, c.parent()[0].offsetWidth], l = [n[0] < i[0] ? d[0] : d[1], n[1] < i[1] ? d[0] : d[1]], r[0] - i[0] * l[0][0] < 0 && r[0] + n[0] - i[0] * l[0][1] >= 0 && r[1] - i[1] * l[1][0] < 0 && r[1] + n[1] - i[1] * l[1][1] >= 0 }, mcsOverflow: e.expr[":"].mcsOverflow || function(t) { var o = e(t).data(a); if (o) return o.overflowed[0] || o.overflowed[1] } }) }) }) });
! function(a, b) { "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : a.lightbox = b(a.jQuery) }(this, function(a) {
    function b(b) { this.album = [], this.currentImageIndex = void 0, this.init(), this.options = a.extend({}, this.constructor.defaults), this.option(b) } return b.defaults = { albumLabel: "Image %1 of %2", alwaysShowNavOnTouchDevices: !1, fadeDuration: 600, fitImagesInViewport: !0, imageFadeDuration: 600, positionFromTop: 50, resizeDuration: 700, showImageNumberLabel: !0, wrapAround: !1, disableScrolling: !1, sanitizeTitle: !1 }, b.prototype.option = function(b) { a.extend(this.options, b) }, b.prototype.imageCountLabel = function(a, b) { return this.options.albumLabel.replace(/%1/g, a).replace(/%2/g, b) }, b.prototype.init = function() { var b = this;
        a(document).ready(function() { b.enable(), b.build() }) }, b.prototype.enable = function() { var b = this;
        a("body").on("click", "a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]", function(c) { return b.start(a(c.currentTarget)), !1 }) }, b.prototype.build = function() { var b = this;
        a('<div id="lightboxOverlay" class="lightboxOverlay"></div><div id="lightbox" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" /><div class="lb-nav"><a class="lb-prev" href="" ></a><a class="lb-next" href="" ></a></div><div class="lb-loader"><a class="lb-cancel"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close"></a></div></div></div></div>').appendTo(a("body")), this.$lightbox = a("#lightbox"), this.$overlay = a("#lightboxOverlay"), this.$outerContainer = this.$lightbox.find(".lb-outerContainer"), this.$container = this.$lightbox.find(".lb-container"), this.$image = this.$lightbox.find(".lb-image"), this.$nav = this.$lightbox.find(".lb-nav"), this.containerPadding = { top: parseInt(this.$container.css("padding-top"), 10), right: parseInt(this.$container.css("padding-right"), 10), bottom: parseInt(this.$container.css("padding-bottom"), 10), left: parseInt(this.$container.css("padding-left"), 10) }, this.imageBorderWidth = { top: parseInt(this.$image.css("border-top-width"), 10), right: parseInt(this.$image.css("border-right-width"), 10), bottom: parseInt(this.$image.css("border-bottom-width"), 10), left: parseInt(this.$image.css("border-left-width"), 10) }, this.$overlay.hide().on("click", function() { return b.end(), !1 }), this.$lightbox.hide().on("click", function(c) { return "lightbox" === a(c.target).attr("id") && b.end(), !1 }), this.$outerContainer.on("click", function(c) { return "lightbox" === a(c.target).attr("id") && b.end(), !1 }), this.$lightbox.find(".lb-prev").on("click", function() { return 0 === b.currentImageIndex ? b.changeImage(b.album.length - 1) : b.changeImage(b.currentImageIndex - 1), !1 }), this.$lightbox.find(".lb-next").on("click", function() { return b.currentImageIndex === b.album.length - 1 ? b.changeImage(0) : b.changeImage(b.currentImageIndex + 1), !1 }), this.$nav.on("mousedown", function(a) { 3 === a.which && (b.$nav.css("pointer-events", "none"), b.$lightbox.one("contextmenu", function() { setTimeout(function() { this.$nav.css("pointer-events", "auto") }.bind(b), 0) })) }), this.$lightbox.find(".lb-loader, .lb-close").on("click", function() { return b.end(), !1 }) }, b.prototype.start = function(b) {
        function c(a) { d.album.push({ link: a.attr("href"), title: a.attr("data-title") || a.attr("title") }) } var d = this,
            e = a(window);
        e.on("resize", a.proxy(this.sizeOverlay, this)), a("select, object, embed").css({ visibility: "hidden" }), this.sizeOverlay(), this.album = []; var f, g = 0,
            h = b.attr("data-lightbox"); if (h) { f = a(b.prop("tagName") + '[data-lightbox="' + h + '"]'); for (var i = 0; i < f.length; i = ++i) c(a(f[i])), f[i] === b[0] && (g = i) } else if ("lightbox" === b.attr("rel")) c(b);
        else { f = a(b.prop("tagName") + '[rel="' + b.attr("rel") + '"]'); for (var j = 0; j < f.length; j = ++j) c(a(f[j])), f[j] === b[0] && (g = j) } var k = e.scrollTop() + this.options.positionFromTop,
            l = e.scrollLeft();
        this.$lightbox.css({ top: k + "px", left: l + "px" }).fadeIn(this.options.fadeDuration), this.options.disableScrolling && a("body").addClass("lb-disable-scrolling"), this.changeImage(g) }, b.prototype.changeImage = function(b) { var c = this;
        this.disableKeyboardNav(); var d = this.$lightbox.find(".lb-image");
        this.$overlay.fadeIn(this.options.fadeDuration), a(".lb-loader").fadeIn("slow"), this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(), this.$outerContainer.addClass("animating"); var e = new Image;
        e.onload = function() { var f, g, h, i, j, k, l;
            d.attr("src", c.album[b].link), f = a(e), d.width(e.width), d.height(e.height), c.options.fitImagesInViewport && (l = a(window).width(), k = a(window).height(), j = l - c.containerPadding.left - c.containerPadding.right - c.imageBorderWidth.left - c.imageBorderWidth.right - 20, i = k - c.containerPadding.top - c.containerPadding.bottom - c.imageBorderWidth.top - c.imageBorderWidth.bottom - 120, c.options.maxWidth && c.options.maxWidth < j && (j = c.options.maxWidth), c.options.maxHeight && c.options.maxHeight < j && (i = c.options.maxHeight), (e.width > j || e.height > i) && (e.width / j > e.height / i ? (h = j, g = parseInt(e.height / (e.width / h), 10), d.width(h), d.height(g)) : (g = i, h = parseInt(e.width / (e.height / g), 10), d.width(h), d.height(g)))), c.sizeContainer(d.width(), d.height()) }, e.src = this.album[b].link, this.currentImageIndex = b }, b.prototype.sizeOverlay = function() { this.$overlay.width(a(document).width()).height(a(document).height()) }, b.prototype.sizeContainer = function(a, b) {
        function c() { d.$lightbox.find(".lb-dataContainer").width(g), d.$lightbox.find(".lb-prevLink").height(h), d.$lightbox.find(".lb-nextLink").height(h), d.showImage() } var d = this,
            e = this.$outerContainer.outerWidth(),
            f = this.$outerContainer.outerHeight(),
            g = a + this.containerPadding.left + this.containerPadding.right + this.imageBorderWidth.left + this.imageBorderWidth.right,
            h = b + this.containerPadding.top + this.containerPadding.bottom + this.imageBorderWidth.top + this.imageBorderWidth.bottom;
        e !== g || f !== h ? this.$outerContainer.animate({ width: g, height: h }, this.options.resizeDuration, "swing", function() { c() }) : c() }, b.prototype.showImage = function() { this.$lightbox.find(".lb-loader").stop(!0).hide(), this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration), this.updateNav(), this.updateDetails(), this.preloadNeighboringImages(), this.enableKeyboardNav() }, b.prototype.updateNav = function() { var a = !1; try { document.createEvent("TouchEvent"), a = this.options.alwaysShowNavOnTouchDevices ? !0 : !1 } catch (b) {}
        this.$lightbox.find(".lb-nav").show(), this.album.length > 1 && (this.options.wrapAround ? (a && this.$lightbox.find(".lb-prev, .lb-next").css("opacity", "1"), this.$lightbox.find(".lb-prev, .lb-next").show()) : (this.currentImageIndex > 0 && (this.$lightbox.find(".lb-prev").show(), a && this.$lightbox.find(".lb-prev").css("opacity", "1")), this.currentImageIndex < this.album.length - 1 && (this.$lightbox.find(".lb-next").show(), a && this.$lightbox.find(".lb-next").css("opacity", "1")))) }, b.prototype.updateDetails = function() { var b = this; if ("undefined" != typeof this.album[this.currentImageIndex].title && "" !== this.album[this.currentImageIndex].title) { var c = this.$lightbox.find(".lb-caption");
            this.options.sanitizeTitle ? c.text(this.album[this.currentImageIndex].title) : c.html(this.album[this.currentImageIndex].title), c.fadeIn("fast").find("a").on("click", function(b) { void 0 !== a(this).attr("target") ? window.open(a(this).attr("href"), a(this).attr("target")) : location.href = a(this).attr("href") }) } if (this.album.length > 1 && this.options.showImageNumberLabel) { var d = this.imageCountLabel(this.currentImageIndex + 1, this.album.length);
            this.$lightbox.find(".lb-number").text(d).fadeIn("fast") } else this.$lightbox.find(".lb-number").hide();
        this.$outerContainer.removeClass("animating"), this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration, function() { return b.sizeOverlay() }) }, b.prototype.preloadNeighboringImages = function() { if (this.album.length > this.currentImageIndex + 1) { var a = new Image;
            a.src = this.album[this.currentImageIndex + 1].link } if (this.currentImageIndex > 0) { var b = new Image;
            b.src = this.album[this.currentImageIndex - 1].link } }, b.prototype.enableKeyboardNav = function() { a(document).on("keyup.keyboard", a.proxy(this.keyboardAction, this)) }, b.prototype.disableKeyboardNav = function() { a(document).off(".keyboard") }, b.prototype.keyboardAction = function(a) { var b = 27,
            c = 37,
            d = 39,
            e = a.keyCode,
            f = String.fromCharCode(e).toLowerCase();
        e === b || f.match(/x|o|c/) ? this.end() : "p" === f || e === c ? 0 !== this.currentImageIndex ? this.changeImage(this.currentImageIndex - 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(this.album.length - 1) : ("n" === f || e === d) && (this.currentImageIndex !== this.album.length - 1 ? this.changeImage(this.currentImageIndex + 1) : this.options.wrapAround && this.album.length > 1 && this.changeImage(0)) }, b.prototype.end = function() { this.disableKeyboardNav(), a(window).off("resize", this.sizeOverlay), this.$lightbox.fadeOut(this.options.fadeDuration), this.$overlay.fadeOut(this.options.fadeDuration), a("select, object, embed").css({ visibility: "visible" }), this.options.disableScrolling && a("body").removeClass("lb-disable-scrolling") }, new b });
! function($) { "use strict";
    $.fn.meanmenu = function(e) { var n = { meanMenuTarget: jQuery(this), meanMenuContainer: "body", meanMenuClose: "X", meanMenuCloseSize: "18px", meanMenuOpen: "<span /><span /><span />", meanRevealPosition: "right", meanRevealPositionDistance: "0", meanRevealColour: "", meanScreenWidth: "480", meanNavPush: "", meanShowChildren: !0, meanExpandableChildren: !0, meanExpand: "+", meanContract: "-", meanRemoveAttrs: !1, onePage: !1, meanDisplay: "block", removeElements: "" };
        e = $.extend(n, e); var a = window.innerWidth || document.documentElement.clientWidth; return this.each(function() { var n = e.meanMenuTarget,
                t = e.meanMenuContainer,
                r = e.meanMenuClose,
                i = e.meanMenuCloseSize,
                s = e.meanMenuOpen,
                u = e.meanRevealPosition,
                m = e.meanRevealPositionDistance,
                l = e.meanRevealColour,
                o = e.meanScreenWidth,
                c = e.meanNavPush,
                v = ".meanmenu-reveal",
                h = e.meanShowChildren,
                d = e.meanExpandableChildren,
                y = e.meanExpand,
                j = e.meanContract,
                Q = e.meanRemoveAttrs,
                f = e.onePage,
                g = e.meanDisplay,
                p = e.removeElements,
                C = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll"); var w = "",
                x = function() { if ("center" === u) { var e = window.innerWidth || document.documentElement.clientWidth,
                            n = e / 2 - 22 + "px";
                        w = "left:" + n + ";right:auto;", C ? jQuery(".meanmenu-reveal").animate({ left: n }) : jQuery(".meanmenu-reveal").css("left", n) } },
                A = !1,
                E = !1; "right" === u && (w = "left:" + m + ";right:auto;"), "left" === u && (w = "left:" + m + ";right:auto;"), x(); var M = "",
                P = function() { M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s) },
                W = function() { jQuery(".mean-bar,.mean-push").remove(), jQuery(t).removeClass("mean-container"), jQuery(n).css("display", g), A = !1, E = !1, jQuery(p).removeClass("mean-remove") },
                b = function() { var e = "background:" + l + ";color:" + l + ";" + w; if (o >= a) { jQuery(p).addClass("mean-remove"), E = !0, jQuery(t).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>'); var r = jQuery(n).html();
                        jQuery(".mean-nav").html(r), Q && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() { jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id") }), jQuery(n).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", c), jQuery(n).hide(), jQuery(".meanmenu-reveal").show(), jQuery(v).html(s), M = jQuery(v), jQuery(".mean-nav ul").hide(), h ? d ? (jQuery(".mean-nav ul ul").each(function() { jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>") }), jQuery(".mean-expand").on("click", function(e) { e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(y), jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(j), jQuery(this).prev("ul").slideDown(300, function() {})), jQuery(this).toggleClass("mean-clicked") })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), M.removeClass("meanclose"), jQuery(M).click(function(e) { e.preventDefault(), A === !1 ? (M.css("text-align", "center"), M.css("text-indent", "0"), M.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), A = !0) : (jQuery(".mean-nav ul:first").slideUp(), A = !1), M.toggleClass("meanclose"), P(), jQuery(p).addClass("mean-remove") }), f && jQuery(".mean-nav ul > li > a:first-child").on("click", function() { jQuery(".mean-nav ul:first").slideUp(), A = !1, jQuery(M).toggleClass("meanclose").html(s) }) } else W() };
            C || jQuery(window).resize(function() { a = window.innerWidth || document.documentElement.clientWidth, a > o, W(), o >= a ? (b(), x()) : W() }), jQuery(window).resize(function() { a = window.innerWidth || document.documentElement.clientWidth, C ? (x(), o >= a ? E === !1 && b() : W()) : (W(), o >= a && (b(), x())) }), b() }) } }(jQuery);
! function() { "use strict";

    function e(n) { return "undefined" == typeof this || Object.getPrototypeOf(this) !== e.prototype ? new e(n) : (O = this, O.version = "3.3.2", O.tools = new E, O.isSupported() ? (O.tools.extend(O.defaults, n || {}), O.defaults.container = t(O.defaults), O.store = { elements: {}, containers: [] }, O.sequences = {}, O.history = [], O.uid = 0, O.initialized = !1) : "undefined" != typeof console && null !== console, O) }

    function t(e) { if (e && e.container) { if ("string" == typeof e.container) return window.document.documentElement.querySelector(e.container); if (O.tools.isNode(e.container)) return e.container } return O.defaults.container }

    function n(e, t) { return "string" == typeof e ? Array.prototype.slice.call(t.querySelectorAll(e)) : O.tools.isNode(e) ? [e] : O.tools.isNodeList(e) ? Array.prototype.slice.call(e) : [] }

    function i() { return ++O.uid }

    function o(e, t, n) { t.container && (t.container = n), e.config ? e.config = O.tools.extendClone(e.config, t) : e.config = O.tools.extendClone(O.defaults, t), "top" === e.config.origin || "bottom" === e.config.origin ? e.config.axis = "Y" : e.config.axis = "X" }

    function r(e) { var t = window.getComputedStyle(e.domEl);
        e.styles || (e.styles = { transition: {}, transform: {}, computed: {} }, e.styles.inline = e.domEl.getAttribute("style") || "", e.styles.inline += "; visibility: visible; ", e.styles.computed.opacity = t.opacity, t.transition && "all 0s ease 0s" !== t.transition ? e.styles.computed.transition = t.transition + ", " : e.styles.computed.transition = ""), e.styles.transition.instant = s(e, 0), e.styles.transition.delayed = s(e, e.config.delay), e.styles.transform.initial = " -webkit-transform:", e.styles.transform.target = " -webkit-transform:", a(e), e.styles.transform.initial += "transform:", e.styles.transform.target += "transform:", a(e) }

    function s(e, t) { var n = e.config; return "-webkit-transition: " + e.styles.computed.transition + "-webkit-transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; transition: " + e.styles.computed.transition + "transform " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s, opacity " + n.duration / 1e3 + "s " + n.easing + " " + t / 1e3 + "s; " }

    function a(e) { var t, n = e.config,
            i = e.styles.transform;
        t = "top" === n.origin || "left" === n.origin ? /^-/.test(n.distance) ? n.distance.substr(1) : "-" + n.distance : n.distance, parseInt(n.distance) && (i.initial += " translate" + n.axis + "(" + t + ")", i.target += " translate" + n.axis + "(0)"), n.scale && (i.initial += " scale(" + n.scale + ")", i.target += " scale(1)"), n.rotate.x && (i.initial += " rotateX(" + n.rotate.x + "deg)", i.target += " rotateX(0)"), n.rotate.y && (i.initial += " rotateY(" + n.rotate.y + "deg)", i.target += " rotateY(0)"), n.rotate.z && (i.initial += " rotateZ(" + n.rotate.z + "deg)", i.target += " rotateZ(0)"), i.initial += "; opacity: " + n.opacity + ";", i.target += "; opacity: " + e.styles.computed.opacity + ";" }

    function l(e) { var t = e.config.container;
        t && O.store.containers.indexOf(t) === -1 && O.store.containers.push(e.config.container), O.store.elements[e.id] = e }

    function c(e, t, n) { var i = { target: e, config: t, interval: n };
        O.history.push(i) }

    function f() { if (O.isSupported()) { y(); for (var e = 0; e < O.store.containers.length; e++) O.store.containers[e].addEventListener("scroll", d), O.store.containers[e].addEventListener("resize", d);
            O.initialized || (window.addEventListener("scroll", d), window.addEventListener("resize", d), O.initialized = !0) } return O }

    function d() { T(y) }

    function u() { var e, t, n, i;
        O.tools.forOwn(O.sequences, function(o) { i = O.sequences[o], e = !1; for (var r = 0; r < i.elemIds.length; r++) n = i.elemIds[r], t = O.store.elements[n], q(t) && !e && (e = !0);
            i.active = e }) }

    function y() { var e, t;
        u(), O.tools.forOwn(O.store.elements, function(n) { t = O.store.elements[n], e = w(t), g(t) ? (t.config.beforeReveal(t.domEl), e ? t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.delayed) : t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.target + t.styles.transition.instant), p("reveal", t, e), t.revealing = !0, t.seen = !0, t.sequence && m(t, e)) : v(t) && (t.config.beforeReset(t.domEl), t.domEl.setAttribute("style", t.styles.inline + t.styles.transform.initial + t.styles.transition.instant), p("reset", t), t.revealing = !1) }) }

    function m(e, t) { var n = 0,
            i = 0,
            o = O.sequences[e.sequence.id];
        o.blocked = !0, t && "onload" === e.config.useDelay && (i = e.config.delay), e.sequence.timer && (n = Math.abs(e.sequence.timer.started - new Date), window.clearTimeout(e.sequence.timer)), e.sequence.timer = { started: new Date }, e.sequence.timer.clock = window.setTimeout(function() { o.blocked = !1, e.sequence.timer = null, d() }, Math.abs(o.interval) + i - n) }

    function p(e, t, n) { var i = 0,
            o = 0,
            r = "after"; switch (e) {
            case "reveal":
                o = t.config.duration, n && (o += t.config.delay), r += "Reveal"; break;
            case "reset":
                o = t.config.duration, r += "Reset" }
        t.timer && (i = Math.abs(t.timer.started - new Date), window.clearTimeout(t.timer.clock)), t.timer = { started: new Date }, t.timer.clock = window.setTimeout(function() { t.config[r](t.domEl), t.timer = null }, o - i) }

    function g(e) { if (e.sequence) { var t = O.sequences[e.sequence.id]; return t.active && !t.blocked && !e.revealing && !e.disabled } return q(e) && !e.revealing && !e.disabled }

    function w(e) { var t = e.config.useDelay; return "always" === t || "onload" === t && !O.initialized || "once" === t && !e.seen }

    function v(e) { if (e.sequence) { var t = O.sequences[e.sequence.id]; return !t.active && e.config.reset && e.revealing && !e.disabled } return !q(e) && e.config.reset && e.revealing && !e.disabled }

    function b(e) { return { width: e.clientWidth, height: e.clientHeight } }

    function h(e) { if (e && e !== window.document.documentElement) { var t = x(e); return { x: e.scrollLeft + t.left, y: e.scrollTop + t.top } } return { x: window.pageXOffset, y: window.pageYOffset } }

    function x(e) { var t = 0,
            n = 0,
            i = e.offsetHeight,
            o = e.offsetWidth;
        do isNaN(e.offsetTop) || (t += e.offsetTop), isNaN(e.offsetLeft) || (n += e.offsetLeft), e = e.offsetParent; while (e); return { top: t, left: n, height: i, width: o } }

    function q(e) {
        function t() { var t = c + a * s,
                n = f + l * s,
                i = d - a * s,
                y = u - l * s,
                m = r.y + e.config.viewOffset.top,
                p = r.x + e.config.viewOffset.left,
                g = r.y - e.config.viewOffset.bottom + o.height,
                w = r.x - e.config.viewOffset.right + o.width; return t < g && i > m && n > p && y < w }

        function n() { return "fixed" === window.getComputedStyle(e.domEl).position } var i = x(e.domEl),
            o = b(e.config.container),
            r = h(e.config.container),
            s = e.config.viewFactor,
            a = i.height,
            l = i.width,
            c = i.top,
            f = i.left,
            d = c + a,
            u = f + l; return t() || n() }

    function E() {} var O, T;
    e.prototype.defaults = { origin: "bottom", distance: "20px", duration: 500, delay: 0, rotate: { x: 0, y: 0, z: 0 }, opacity: 0, scale: .9, easing: "cubic-bezier(0.6, 0.2, 0.1, 1)", container: window.document.documentElement, mobile: !0, reset: !1, useDelay: "always", viewFactor: .2, viewOffset: { top: 0, right: 0, bottom: 0, left: 0 }, beforeReveal: function(e) {}, beforeReset: function(e) {}, afterReveal: function(e) {}, afterReset: function(e) {} }, e.prototype.isSupported = function() { var e = document.documentElement.style; return "WebkitTransition" in e && "WebkitTransform" in e || "transition" in e && "transform" in e }, e.prototype.reveal = function(e, s, a, d) { var u, y, m, p, g, w; if (void 0 !== s && "number" == typeof s ? (a = s, s = {}) : void 0 !== s && null !== s || (s = {}), u = t(s), y = n(e, u), !y.length) return O;
        a && "number" == typeof a && (w = i(), g = O.sequences[w] = { id: w, interval: a, elemIds: [], active: !1 }); for (var v = 0; v < y.length; v++) p = y[v].getAttribute("data-sr-id"), p ? m = O.store.elements[p] : (m = { id: i(), domEl: y[v], seen: !1, revealing: !1 }, m.domEl.setAttribute("data-sr-id", m.id)), g && (m.sequence = { id: g.id, index: g.elemIds.length }, g.elemIds.push(m.id)), o(m, s, u), r(m), l(m), O.tools.isMobile() && !m.config.mobile || !O.isSupported() ? (m.domEl.setAttribute("style", m.styles.inline), m.disabled = !0) : m.revealing || m.domEl.setAttribute("style", m.styles.inline + m.styles.transform.initial); return !d && O.isSupported() && (c(e, s, a), O.initTimeout && window.clearTimeout(O.initTimeout), O.initTimeout = window.setTimeout(f, 0)), O }, e.prototype.sync = function() { if (O.history.length && O.isSupported()) { for (var e = 0; e < O.history.length; e++) { var t = O.history[e];
                O.reveal(t.target, t.config, t.interval, !0) }
            f() } return O }, E.prototype.isObject = function(e) { return null !== e && "object" == typeof e && e.constructor === Object }, E.prototype.isNode = function(e) { return "object" == typeof window.Node ? e instanceof window.Node : e && "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName }, E.prototype.isNodeList = function(e) { var t = Object.prototype.toString.call(e),
            n = /^\[object (HTMLCollection|NodeList|Object)\]$/; return "object" == typeof window.NodeList ? e instanceof window.NodeList : e && "object" == typeof e && n.test(t) && "number" == typeof e.length && (0 === e.length || this.isNode(e[0])) }, E.prototype.forOwn = function(e, t) { if (!this.isObject(e)) throw new TypeError('Expected "object", but received "' + typeof e + '".'); for (var n in e) e.hasOwnProperty(n) && t(n) }, E.prototype.extend = function(e, t) { return this.forOwn(t, function(n) { this.isObject(t[n]) ? (e[n] && this.isObject(e[n]) || (e[n] = {}), this.extend(e[n], t[n])) : e[n] = t[n] }.bind(this)), e }, E.prototype.extendClone = function(e, t) { return this.extend(this.extend({}, e), t) }, E.prototype.isMobile = function() { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) }, T = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) { window.setTimeout(e, 1e3 / 60) }, "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function() { return e }) : "undefined" != typeof module && module.exports ? module.exports = e : window.ScrollReveal = e }();
(function() {
    function e() {}

    function t(e, t) { for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1 }

    function n(e) { return function() { return this[e].apply(this, arguments) } } var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) { var t, n, i = this._getEvents(); if ("object" == typeof e) { t = {}; for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n]) } else t = i[e] || (i[e] = []); return t }, i.flattenListeners = function(e) { var t, n = []; for (t = 0; e.length > t; t += 1) n.push(e[t].listener); return n }, i.getListenersAsObject = function(e) { var t, n = this.getListeners(e); return n instanceof Array && (t = {}, t[e] = n), t || n }, i.addListener = function(e, n) { var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n; for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : { listener: n, once: !1 }); return this }, i.on = n("addListener"), i.addOnceListener = function(e, t) { return this.addListener(e, { listener: t, once: !0 }) }, i.once = n("addOnceListener"), i.defineEvent = function(e) { return this.getListeners(e), this }, i.defineEvents = function(e) { for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]); return this }, i.removeListener = function(e, n) { var i, r, o = this.getListenersAsObject(e); for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1)); return this }, i.off = n("removeListener"), i.addListeners = function(e, t) { return this.manipulateListeners(!1, e, t) }, i.removeListeners = function(e, t) { return this.manipulateListeners(!0, e, t) }, i.manipulateListeners = function(e, t, n) { var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners; if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r)); return this }, i.removeEvent = function(e) { var t, n = typeof e,
            i = this._getEvents(); if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events; return this }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) { var n, i, r, o, s = this.getListenersAsObject(e); for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this }, i.trigger = n("emitEvent"), i.emit = function(e) { var t = Array.prototype.slice.call(arguments, 1); return this.emitEvent(e, t) }, i.setOnceReturnValue = function(e) { return this._onceReturnValue = e, this }, i._getOnceReturnValue = function() { return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0 }, i._getEvents = function() { return this._events || (this._events = {}) }, e.noConflict = function() { return r.EventEmitter = o, e }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() { return e }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e }).call(this),
    function(e) {
        function t(t) { var n = e.event; return n.target = n.target || n.srcElement || t, n } var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) { e.addEventListener(t, n, !1) } : n.attachEvent && (i = function(e, n, i) { e[n + i] = i.handleEvent ? function() { var n = t(e);
                i.handleEvent.call(i, n) } : function() { var n = t(e);
                i.call(e, n) }, e.attachEvent("on" + n, e[n + i]) }); var r = function() {};
        n.removeEventListener ? r = function(e, t, n) { e.removeEventListener(t, n, !1) } : n.detachEvent && (r = function(e, t, n) { e.detachEvent("on" + t, e[t + n]); try { delete e[t + n] } catch (i) { e[t + n] = void 0 } }); var o = { bind: i, unbind: r }; "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o }(this),
    function(e, t) { "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) { return t(e, n, i) }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie) }(window, function(e, t, n) {
        function i(e, t) { for (var n in t) e[n] = t[n]; return e }

        function r(e) { return "[object Array]" === d.call(e) }

        function o(e) { var t = []; if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e); return t }

        function s(e, t, n) { if (!(this instanceof s)) return new s(e, t); "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred); var r = this;
            setTimeout(function() { r.check() }) }

        function f(e) { this.img = e }

        function c(e) { this.src = e, v[e] = this } var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() { this.images = []; for (var e = 0, t = this.elements.length; t > e; e++) { var n = this.elements[e]; "IMG" === n.nodeName && this.addImage(n); var i = n.nodeType; if (i && (1 === i || 9 === i || 11 === i))
                    for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) { var f = r[o];
                        this.addImage(f) } } }, s.prototype.addImage = function(e) { var t = new f(e);
            this.images.push(t) }, s.prototype.check = function() {
            function e(e, r) { return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0 } var t = this,
                n = 0,
                i = this.images.length; if (this.hasAnyBroken = !1, !i) return this.complete(), void 0; for (var r = 0; i > r; r++) { var o = this.images[r];
                o.on("confirm", e), o.check() } }, s.prototype.progress = function(e) { this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded; var t = this;
            setTimeout(function() { t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e) }) }, s.prototype.complete = function() { var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0; var t = this;
            setTimeout(function() { if (t.emit(e, t), t.emit("always", t), t.jqDeferred) { var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t) } }) }, a && (a.fn.imagesLoaded = function(e, t) { var n = new s(this, e, t); return n.jqDeferred.promise(a(this)) }), f.prototype = new t, f.prototype.check = function() { var e = v[this.img.src] || new c(this.img.src); if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0; if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0; var t = this;
            e.on("confirm", function(e, n) { return t.confirm(e.isLoaded, n), !0 }), e.check() }, f.prototype.confirm = function(e, t) { this.isLoaded = e, this.emit("confirm", this, t) }; var v = {}; return c.prototype = new t, c.prototype.check = function() { if (!this.isChecked) { var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0 } }, c.prototype.handleEvent = function(e) { var t = "on" + e.type;
            this[t] && this[t](e) }, c.prototype.onload = function(e) { this.confirm(!0, "onload"), this.unbindProxyEvents(e) }, c.prototype.onerror = function(e) { this.confirm(!1, "onerror"), this.unbindProxyEvents(e) }, c.prototype.confirm = function(e, t) { this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t) }, c.prototype.unbindProxyEvents = function(e) { n.unbind(e.target, "load", this), n.unbind(e.target, "error", this) }, s });
! function(a, b, c, d) { var e = a(b);
    a.fn.lazyload = function(f) {
        function g() { var b = 0;
            i.each(function() { var c = a(this); if (!j.skip_invisible || c.is(":visible"))
                    if (a.abovethetop(this, j) || a.leftofbegin(this, j));
                    else if (a.belowthefold(this, j) || a.rightoffold(this, j)) { if (++b > j.failure_limit) return !1 } else c.trigger("appear"), b = 0 }) } var h, i = this,
            j = { threshold: 0, failure_limit: 0, event: "scroll", effect: "show", container: b, data_attribute: "original", skip_invisible: !0, appear: null, load: null, placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC" }; return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function() { return g() }), this.each(function() { var b = this,
                c = a(b);
            b.loaded = !1, (c.attr("src") === d || c.attr("src") === !1) && c.is("img") && c.attr("src", j.placeholder), c.one("appear", function() { if (!this.loaded) { if (j.appear) { var d = i.length;
                        j.appear.call(b, d, j) }
                    a("<img />").bind("load", function() { var d = c.attr("data-" + j.data_attribute);
                        c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0; var e = a.grep(i, function(a) { return !a.loaded }); if (i = a(e), j.load) { var f = i.length;
                            j.load.call(b, f, j) } }).attr("src", c.attr("data-" + j.data_attribute)) } }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function() { b.loaded || c.trigger("appear") }) }), e.bind("resize", function() { g() }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(b) { b.originalEvent && b.originalEvent.persisted && i.each(function() { a(this).trigger("appear") }) }), a(c).ready(function() { g() }), this }, a.belowthefold = function(c, f) { var g; return g = f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height(), g <= a(c).offset().top - f.threshold }, a.rightoffold = function(c, f) { var g; return g = f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width(), g <= a(c).offset().left - f.threshold }, a.abovethetop = function(c, f) { var g; return g = f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top, g >= a(c).offset().top + f.threshold + a(c).height() }, a.leftofbegin = function(c, f) { var g; return g = f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left, g >= a(c).offset().left + f.threshold + a(c).width() }, a.inviewport = function(b, c) { return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c)) }, a.extend(a.expr[":"], { "below-the-fold": function(b) { return a.belowthefold(b, { threshold: 0 }) }, "above-the-top": function(b) { return !a.belowthefold(b, { threshold: 0 }) }, "right-of-screen": function(b) { return a.rightoffold(b, { threshold: 0 }) }, "left-of-screen": function(b) { return !a.rightoffold(b, { threshold: 0 }) }, "in-viewport": function(b) { return a.inviewport(b, { threshold: 0 }) }, "above-the-fold": function(b) { return !a.belowthefold(b, { threshold: 0 }) }, "right-of-fold": function(b) { return a.rightoffold(b, { threshold: 0 }) }, "left-of-fold": function(b) { return !a.rightoffold(b, { threshold: 0 }) } }) }(jQuery, window, document);
$(window).on('load', function() { $('body').imagesLoaded(function() { $('.preloader-wave-effect').fadeOut();
        $('#preloader-wrapper').delay(200).fadeOut('slow') }) });
! function(a) { "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? a(require("jquery")) : a(jQuery) }(function(a) {
    function c(a) { return h.raw ? a : encodeURIComponent(a) }

    function d(a) { return h.raw ? a : decodeURIComponent(a) }

    function e(a) { return c(h.json ? JSON.stringify(a) : String(a)) }

    function f(a) { 0 === a.indexOf('"') && (a = a.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\")); try { return a = decodeURIComponent(a.replace(b, " ")), h.json ? JSON.parse(a) : a } catch (c) {} }

    function g(b, c) { var d = h.raw ? b : f(b); return a.isFunction(c) ? c(d) : d } var b = /\+/g,
        h = a.cookie = function(b, f, i) { if (arguments.length > 1 && !a.isFunction(f)) { if (i = a.extend({}, h.defaults, i), "number" == typeof i.expires) { var j = i.expires,
                        k = i.expires = new Date;
                    k.setTime(+k + 864e5 * j) } return document.cookie = [c(b), "=", e(f), i.expires ? "; expires=" + i.expires.toUTCString() : "", i.path ? "; path=" + i.path : "", i.domain ? "; domain=" + i.domain : "", i.secure ? "; secure" : ""].join("") } for (var l = b ? void 0 : {}, m = document.cookie ? document.cookie.split("; ") : [], n = 0, o = m.length; o > n; n++) { var p = m[n].split("="),
                    q = d(p.shift()),
                    r = p.join("="); if (b && b === q) { l = g(r, f); break }
                b || void 0 === (r = g(r)) || (l[q] = r) } return l };
    h.defaults = {}, a.removeCookie = function(b, c) { return void 0 === a.cookie(b) ? !1 : (a.cookie(b, "", a.extend({}, c, { expires: -1 })), !a.cookie(b)) } });
jQuery(document).ready(function($) {
    style_switcher = $('.style-customizer'), panelWidth = style_switcher.outerWidth(!0);
    $('.style-customizer .opener').on("click", function() {
        var $this = $(this);
        if ($(".style-customizer.closed").length > 0) { style_switcher.animate({ "right": "0px" });
            $(".style-customizer.closed").removeClass("closed");
            $(".style-customizer").addClass("opened") } else { $(".style-customizer.opened").removeClass("opened");
            $(".style-customizer").addClass("closed");
            style_switcher.animate({ "right": '-' + panelWidth }) }
        return !1
    });
    var link = $('link[data-style="styles"]'),
        link_no_cookie = $('link[data-style="styles-no-cookie"]');
    var tp_stylesheet = $.cookie('tp_stylesheet'),
        footer_bg = $.cookie('footer_bg'),
        customizer_mode = $.cookie('customizer_mode'),
        pattern = $.cookie('pattern');
    $(".style-customizer .selected").removeClass("selected");
    if (!($.cookie('tp_stylesheet'))) { $.cookie('tp_stylesheet', 'color-1', 30);
        tp_stylesheet = $.cookie('tp_stylesheet');
        $('.style-customizer .styleChange li[data-style="' + tp_stylesheet + '"]').addClass("selected") } else { if (link.length > 0) { link.attr('href', 'https://faceit.ir/static/css/color/' + tp_stylesheet + '.css');
            $('.style-customizer .styleChange li[data-style="' + tp_stylesheet + '"]').addClass("selected"); if ($(".swicher-title-page-dark").length > 0) { document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" + tp_stylesheet + ".png" } else { if ($("#logo_img").length > 0) { document.getElementById("logo_img").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png" }; if ($("#logo_dark_img").length > 0) { document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + tp_stylesheet + ".png" }; if ($("#logo-footer").length > 0) { document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png" } } } };
    if (!($.cookie('customizer_mode'))) { $.cookie('customizer_mode', 'wide-layout', 30);
        customizer_mode = $.cookie('customizer_mode');
        $(".wrapper").addClass(customizer_mode);
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected") } else { if (customizer_mode == "boxed-layout") { $(".wrapper").addClass(customizer_mode);
            $(".wrapper").removeClass("wide-layout");
            $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected");
            $('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected");
            $(".owl-carousel .container").css("marginLeft", "0") } else { $(".wrapper").addClass(customizer_mode);
            $(".wrapper").removeClass("boxed-layout");
            $("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");
            $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected");
            $('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected");
            $(".owl-carousel .container").css("marginLeft", "auto") } };
    if ((customizer_mode == "boxed-layout") && $.cookie('pattern')) { $('.style-customizer .patternChange li[data-style="' + pattern + '"]').addClass("selected");
        $("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");
        $("body").addClass(pattern) } else if (customizer_mode == "boxed-layout") { $("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");
        $('.style-customizer .patternChange li[data-style="pattern-0"]').addClass("selected") } else { $('.style-customizer .patternChange li.selected').removeClass("selected");
        $("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ") };
    $('.style-customizer .styleChange li').on('click', function() { if (link.length > 0) { var $this = $(this),
                tp_stylesheet = $this.data('style');
            $(".style-customizer .styleChange .selected").removeClass("selected");
            $this.addClass("selected");
            link.attr('href', 'https://faceit.ir/static/css/color/' + tp_stylesheet + '.css'); if ($(".swicher-title-page-dark").length > 0) { document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" + tp_stylesheet + ".png" } else { if ($("#logo_img").length > 0) { document.getElementById("logo_img").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png" }; if ($("#logo_dark_img").length > 0) { document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + tp_stylesheet + ".png" }; if ($("#logo-footer").length > 0) { document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png" } };
            $.cookie('tp_stylesheet', tp_stylesheet, 30) } else { var $this = $(this),
                tp_stylesheet_no_cookie = $this.data('style');
            $(".style-customizer .styleChange .selected").removeClass("selected");
            $this.addClass("selected");
            link_no_cookie.attr('href', 'https://faceit.ir/static/css/color/' + tp_stylesheet_no_cookie + '.css'); if ($(".swicher-title-page-dark").length > 0) { document.getElementById("logo_img").src = "images/customizer/logo/logo_dark_swicher-title_" + tp_stylesheet_no_cookie + ".png" } else { if ($("#logo_img").length > 0) { document.getElementById("logo_img").src = "images/customizer/logo/logo_" + tp_stylesheet_no_cookie + ".png" }; if ($("#logo_dark_img").length > 0) { document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + tp_stylesheet_no_cookie + ".png" }; if ($("#logo-footer").length > 0) { document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + tp_stylesheet_no_cookie + ".png" } } } });
    $('.style-customizer .patternChange li').on('click', function() { var $this = $(this),
            pattern = $this.data('style');
        $(".style-customizer .patternChange .selected").removeClass("selected");
        $this.addClass("selected");
        $("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");
        $("body").addClass(pattern);
        $(".wrapper").addClass("boxed-layout");
        $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected");
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected");
        $(".owl-carousel .container").css("marginLeft", "0");
        $(".style-customizer select").val("boxed-layout");
        $.cookie('pattern', pattern, 30);
        $.cookie('customizer_mode', 'boxed-layout', 30);
        $(window).trigger('resize') });
    $('.style-customizer .layoutstyle li.boxed-layout').on('click', function() {
        $(".wrapper").addClass("boxed-layout");
        $(".wrapper").removeClass("wide-layout");
        $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').addClass("selected");
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').removeClass("selected");
        $(".owl-carousel .container").css("marginLeft", "0");
        $.cookie('customizer_mode', 'boxed-layout', 30);
        if ($.cookie('pattern')) { var pattern = $.cookie('pattern');
            $('.style-customizer .patternChange li[data-style="' + pattern + '"]').addClass("selected");
            $("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");
            $("body").addClass(pattern) } else { $('.style-customizer .patternChange li[data-style="pattern-0"]').addClass("selected") }
        $(window).trigger('resize')
    });
    $('.style-customizer .layoutstyle li.wide-layout').on('click', function() { $(".wrapper").addClass("wide-layout");
        $(".wrapper").removeClass("boxed-layout");
        $("body").removeClass("pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");
        $("body").removeClass("");
        $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected");
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected");
        $(".owl-carousel .container").css("marginLeft", "auto");
        $('.style-customizer .patternChange li.selected').removeClass("selected");
        $.cookie('customizer_mode', 'wide-layout', 30);
        $(window).trigger('resize') });
    $('.style-customizer .resetAll li a.button-reset').on('click', function() { $.cookie('customizer_mode', 'wide-layout', 30);
        $(".wrapper").addClass("wide-layout");
        $(".wrapper").removeClass("boxed-layout");
        $('.style-customizer .layoutstyle li[data-style="boxed-layout"]').removeClass("selected");
        $('.style-customizer .layoutstyle li[data-style="wide-layout"]').addClass("selected");
        $(".owl-carousel .container").css("marginLeft", "auto");
        $('.style-customizer .patternChange li.selected').removeClass("selected");
        $.cookie('pattern', 'pattern-0', 30);
        $("body").removeClass("reset pattern-0 pattern-1 pattern-2 pattern-3 pattern-4 pattern-5  pattern-6  pattern-7  pattern-8 main-bg-1 main-bg-2 main-bg-3 main-bg-4 main-bg-5 main-bg-6 main-bg-7 main-bg-8 ");
        $(".style-customizer .patternChange .selected").removeClass("selected");
        $.cookie('tp_stylesheet', 'color-1', 30); var tp_stylesheet = 'color-1';
        $('.style-customizer .styleChange li.selected').removeClass("selected");
        $('.style-customizer .styleChange li[data-style="' + tp_stylesheet + '"]').addClass("selected");
        link.attr('href', 'https://faceit.ir/static/css/color/' + tp_stylesheet + '.css'); if ($("#logo_img").length > 0) { document.getElementById("logo_img").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png" }; if ($("#logo_dark_img").length > 0) { document.getElementById("logo_dark_img").src = "images/customizer/logo/dark/logo_" + tp_stylesheet + ".png" }; if ($("#logo-footer").length > 0) { document.getElementById("logo-footer").src = "images/customizer/logo/logo_" + tp_stylesheet + ".png" };
        $(window).trigger('resize');
        $('.desktopTopFixed').removeClass('desktopTopFixed') })
});
(function($) {
    "use strict";
    var submenu = $('.primary-menu > ul > li').has('.drop');
    if (submenu) { $('.dropdown').prev().append(' <i class="fa fa-angle-down"></i>') }
    $(".sidebar-menu-btn").on("click", function() { $(".sidebar-menu-inner").addClass("active") });
    $(".sidebar-menu > span").on("click", function() { $(".sidebar-menu-inner").removeClass("active") });
    $('.primary-menu').clone().appendTo('.sidebar-menu-inner');
    $('.sidebar-menu-inner li.drop > a').on('click', function() { $(this).siblings('.dropdown').slideToggle(500);
        $(this).toggleClass("active") });
    $('nav#mobile_dropdown').meanmenu({ meanMenuContainer: '.mobile-menu-area', meanMenuCloseSize: "18px", meanScreenWidth: "991" });
    $('.selectpicker').selectpicker();
    $('.datepicker').datepicker({ format: 'mm/dd/yyyy', startDate: '-3d' });
    new WOW().init();
    $.scrollUp({ scrollText: '<i class="fa fa-angle-up"></i>', easingType: 'linear', scrollSpeed: 900, animation: 'slide' });
    $('[data-toggle="tooltip"]').tooltip();
    $('#bkn').ticker({ effect: 'fadeIn', interval: 6000, controls: !0, duration: 800 });
    var owl = $('.owl-active-1');
    owl.owlCarousel({ items: 5, loop: !0, autoplay: !0, autoplayTimeout: 4000, autoplayHoverPause: !0, dots: !1, responsive: { 0: { items: 1, }, 480: { items: 2, }, 768: { items: 2, }, 992: { items: 3, }, 1167: { items: 4, }, 1366: { items: 4, }, 1400: { items: 5, } } });
    var owl = $('.owl-active-2');
    owl.owlCarousel({ items: 5, loop: !0, autoplay: !0, autoplayTimeout: 4000, autoplayHoverPause: !0, dots: !1, responsive: { 0: { items: 1, }, 480: { items: 1, }, 768: { items: 2, }, 992: { items: 3, }, 1167: { items: 3, }, 1366: { items: 4, }, 1400: { items: 4, } } });
    var owl = $('.owl-active-3');
    owl.owlCarousel({ items: 3, loop: !0, autoplay: !1, autoplayTimeout: 4000, autoplayHoverPause: !0, dots: !1, nav: !0, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], lazyLoad: !0, responsive: { 0: { items: 1, }, 480: { items: 1, }, 768: { items: 2, }, 992: { items: 3, }, 1167: { items: 3, }, 1366: { items: 3, }, 1400: { items: 3, } } });
    var owl = $('.owl-active-4');
    owl.owlCarousel({ items: 4, loop: !0, autoplay: !1, autoplayTimeout: 4000, autoplayHoverPause: !0, dots: !1, nav: !0, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], lazyLoad: !0, responsive: { 0: { items: 1, }, 480: { items: 1, }, 768: { items: 2, }, 992: { items: 3, }, 1167: { items: 4, }, 1366: { items: 4, }, 1400: { items: 4, } } });
    $('.slide-posts').owlCarousel({ items: 1, loop: !0, autoplay: !1, autoplayTimeout: 4000, dots: !1, nav: !0, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], });
    $('.post-thumbnail').eq(0).addClass('active');
    $('.slide-posts').on('changed.owl.carousel', function(event) {
        $('.post-thumbnail').removeClass('active');
        var sliders = 10;
        var currentItem = event.item.index - 2;
        if (currentItem >= sliders) { currentItem = 0 }
        $('.post-thumbnail').eq(currentItem).addClass('active')
    });
    $('.post-thumbnail a').on('click', function(event) { event.preventDefault();
        $('.post-thumbnail').removeClass('active'); var index = $('.post-thumbnail a').index(this);
        $('.post-thumbnail').eq(index).addClass('active');
        $('.slide-posts').trigger('to.owl.carousel', [index, 300, !0]) });
    var owl = $('.zm-sin-por-nav');
    owl.owlCarousel({ items: 5, loop: !0, autoplay: !1, autoplayTimeout: 4000, autoplayHoverPause: !0, dots: !1, nav: !1, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], lazyLoad: !0, responsive: { 0: { items: 2, }, 480: { items: 2, }, 768: { items: 3, }, 992: { items: 4, }, 1167: { items: 5, }, 1366: { items: 5, }, 1400: { items: 5, } } });
    $('.zm-sin-por-nav .zm-sin-pro').on('click', function() { $('.zm-sin-por-nav .zm-sin-pro').removeClass('is-select');
        $(this).addClass('is-select') });
    var owl = $('.owl-trending');
    owl.owlCarousel({ items: 1, loop: !0, autoplay: !1, autoplayTimeout: 4000, autoplayHoverPause: !0, dots: !0, nav: !1, navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'], lazyLoad: !0, responsive: { 0: { items: 1, }, 480: { items: 1, }, 768: { items: 1, }, 992: { items: 1, }, 1167: { items: 1, }, 1366: { items: 1, }, 1400: { items: 1, } } });
    var owl = $('.mega-caro-wrap');
    owl.owlCarousel({ items: 4, loop: !0, autoplay: !1, autoplayTimeout: 4000, autoplayHoverPause: !0, dots: !1, nav: !0, navText: [' <span class="prev page-numbers" >قبلی</span> ', '<span class="next page-numbers" >بعدی</span> '], lazyLoad: !0, responsive: { 0: { items: 1, }, 480: { items: 2, }, 768: { items: 3, }, 992: { items: 3, }, 1167: { items: 4, }, 1366: { items: 4, }, 1400: { items: 4, } } });
    $(".video-activetor").YouTubePopUp({ autoplay: 1 });
    $('.login-btn').on('click', function() {
        if ($(this).siblings('.login-form-wrap').hasClass('active')) { $(this).siblings('.login-form-wrap').removeClass('active').slideUp();
            $(this).removeClass('active') } else { $('.login-btn .login-form-wrap').removeClass('active').slideUp();
            $(this).addClass('active');
            $(this).siblings('.login-form-wrap').addClass('active').slideDown() }
    });
    $('.search-btn').on('click', function() {
        if ($(this).siblings('.search-form').hasClass('active')) { $(this).siblings('.search-form').removeClass('active').slideUp();
            $(this).removeClass('active'); if ($(this).find("i").hasClass('fa-search')) { $(this).find("i").removeClass('fa-search').addClass('fa-times') } else { $(this).find("i").removeClass('fa-times').addClass('fa-search') } } else { $('.search-btn .search-form').removeClass('active').slideUp();
            $('.search-btn .search-form').removeClass('active');
            $(this).addClass('active');
            $(this).siblings('.search-form').addClass('active').slideDown(); if ($(this).find("i").hasClass('fa-search')) { $(this).find("i").removeClass('fa-search').addClass('fa-times') } }
    });
    $('.mobile-search-btn').on('click', function() {
        if ($(this).siblings('.mobile-search-form').hasClass('active')) { $(this).siblings('.mobile-search-form').removeClass('active').slideUp();
            $(this).removeClass('active'); if ($(this).find("i").hasClass('fa-search')) { $(this).find("i").removeClass('fa-search').addClass('fa-times') } else { $(this).find("i").removeClass('fa-times').addClass('fa-search') } } else { $('.mobile-search-btn .mobile-search-form').removeClass('active').slideUp();
            $('.mobile-search-btn .mobile-search-form').removeClass('active');
            $(this).addClass('active');
            $(this).siblings('.mobile-search-form').addClass('active').slideDown(); if ($(this).find("i").hasClass('fa-search')) { $(this).find("i").removeClass('fa-search').addClass('fa-times') } }
    });
    $('#zm-archive').treeview({ animated: "normal", persist: "location", collapsed: !0, unique: !0, });
    $('.expand-archive').on('click', function() { $(this).siblings('ul').slideToggle("slow") });
    $('audio').audioPlayer();
    $('.zm-scrollbar, .sidebar-menu-inner').mCustomScrollbar();
    $('.cart-plus-minus').append('<div class="dec qtybutton">-</i></div><div class="inc qtybutton">+</div>');
    $('.qtybutton').on('click', function() {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") { var newVal = parseFloat(oldValue) + 1 } else { if (oldValue > 0) { var newVal = parseFloat(oldValue) - 1 } else { newVal = 0 } }
        $button.parent().find("input").val(newVal)
    });
    $('a[data-toggle="tab"]').on('shown.bs.tab', function(e) { $(".owl-carousel").trigger('refresh.owl.carousel') })
})(jQuery)