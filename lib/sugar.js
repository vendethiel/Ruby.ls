// Sugar.LS 0.1.0
// Copyright (c) 2012 Nami-Doc
// Released under the MIT License
// raw.github.com/gkz/prelude-ls/master/LICNSE
// prelude.ls 0.6.0
// Copyright (c) 2012 George Zahariev
// Released under the MIT License
// raw.github.com/gkz/prelude-ls/master/LICNSE
var objToFunc, each, map, filter, reject, partition, find, first, head, tail, last, initial, empty, values, keys, length, cons, append, join, reverse, foldl, fold, foldl1, fold1, foldr, foldr1, unfoldr, andList, orList, any, all, unique, sort, sortBy, compare, sum, product, average, mean, concat, concatMap, listToObj, maximum, minimum, scanl, scan, scanl1, scan1, scanr, scanr1, replicate, take, drop, splitAt, takeWhile, dropWhile, span, breakIt, zip, zipWith, zipAll, zipAllWith, compose, curry, id, flip, fix, lines, unlines, words, unwords, max, min, negate, abs, signum, quot, rem, div, mod, recip, pi, tau, exp, sqrt, ln, pow, sin, tan, cos, asin, acos, atan, atan2, truncate, round, ceiling, floor, isItNaN, even, odd, gcd, lcm, toString$ = {}.toString, slice$ = [].slice;
exports.objToFunc = objToFunc = function(obj){
  return function(key){
    return obj[key];
  };
};
exports.each = each = curry$(function(f, xs){
  var i$, x, len$;
  if (toString$.call(xs).slice(8, -1) === 'Object') {
    for (i$ in xs) {
      x = xs[i$];
      f(x);
    }
  } else {
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      f(x);
    }
  }
  return xs;
});
exports.map = map = curry$(function(f, xs){
  var type, key, x, res$, i$, len$, result, results$ = {};
  if (toString$.call(f).slice(8, -1) !== 'Function') {
    f = objToFunc(f);
  }
  type = toString$.call(xs).slice(8, -1);
  if (type === 'Object') {
    for (key in xs) {
      x = xs[key];
      results$[key] = f(x);
    }
    return results$;
  } else {
    res$ = [];
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      res$.push(f(x));
    }
    result = res$;
    if (type === 'String') {
      return result.join('');
    } else {
      return result;
    }
  }
});
exports.filter = filter = curry$(function(f, xs){
  var type, key, x, res$, i$, len$, result, results$ = {};
  if (toString$.call(f).slice(8, -1) !== 'Function') {
    f = objToFunc(f);
  }
  type = toString$.call(xs).slice(8, -1);
  if (type === 'Object') {
    for (key in xs) {
      x = xs[key];
if (f(x)) {
        results$[key] = x;
      }
    }
    return results$;
  } else {
    res$ = [];
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      if (f(x)) {
        res$.push(x);
      }
    }
    result = res$;
    if (type === 'String') {
      return result.join('');
    } else {
      return result;
    }
  }
});
exports.reject = reject = curry$(function(f, xs){
  var type, key, x, res$, i$, len$, result, results$ = {};
  if (toString$.call(f).slice(8, -1) !== 'Function') {
    f = objToFunc(f);
  }
  type = toString$.call(xs).slice(8, -1);
  if (type === 'Object') {
    for (key in xs) {
      x = xs[key];
if (!f(x)) {
        results$[key] = x;
      }
    }
    return results$;
  } else {
    res$ = [];
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      if (!f(x)) {
        res$.push(x);
      }
    }
    result = res$;
    if (type === 'String') {
      return result.join('');
    } else {
      return result;
    }
  }
});
exports.partition = partition = curry$(function(f, xs){
  var type, passed, failed, key, x, i$, len$;
  if (toString$.call(f).slice(8, -1) !== 'Function') {
    f = objToFunc(f);
  }
  type = toString$.call(xs).slice(8, -1);
  if (type === 'Object') {
    passed = {};
    failed = {};
    for (key in xs) {
      x = xs[key];
      (f(x) ? passed : failed)[key] = x;
    }
  } else {
    passed = [];
    failed = [];
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      (f(x) ? passed : failed).push(x);
    }
    if (type === 'String') {
      passed = passed.join('');
      failed = failed.join('');
    }
  }
  return [passed, failed];
});
exports.find = find = curry$(function(f, xs){
  var i$, x, len$;
  if (toString$.call(f).slice(8, -1) !== 'Function') {
    f = objToFunc(f);
  }
  if (toString$.call(xs).slice(8, -1) === 'Object') {
    for (i$ in xs) {
      x = xs[i$];
      if (f(x)) {
        return x;
      }
    }
  } else {
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      if (f(x)) {
        return x;
      }
    }
  }
});
exports.head = head = exports.first = first = function(xs){
  if (!xs.length) {
    return;
  }
  return xs[0];
};
exports.tail = tail = function(xs){
  if (!xs.length) {
    return;
  }
  return xs.slice(1);
};
exports.last = last = function(xs){
  if (!xs.length) {
    return;
  }
  return xs[xs.length - 1];
};
exports.initial = initial = function(xs){
  if (!xs.length) {
    return;
  }
  return xs.slice(0, xs.length - 1);
};
exports.empty = empty = function(xs){
  var x;
  if (toString$.call(xs).slice(8, -1) === 'Object') {
    for (x in xs) {
      return false;
    }
    return true;
  }
  return !xs.length;
};
exports.values = values = function(obj){
  var i$, x, results$ = [];
  for (i$ in obj) {
    x = obj[i$];
    results$.push(x);
  }
  return results$;
};
exports.keys = keys = function(obj){
  var x, results$ = [];
  for (x in obj) {
    results$.push(x);
  }
  return results$;
};
exports.length = length = function(xs){
  if (toString$.call(xs).slice(8, -1) === 'Object') {
    xs = values(xs);
  }
  return xs.length;
};
exports.cons = cons = curry$(function(x, xs){
  if (toString$.call(xs).slice(8, -1) === 'String') {
    return x + xs;
  } else {
    return [x].concat(xs);
  }
});
exports.append = append = curry$(function(xs, ys){
  if (toString$.call(ys).slice(8, -1) === 'String') {
    return xs + ys;
  } else {
    return xs.concat(ys);
  }
});
exports.join = join = curry$(function(sep, xs){
  if (toString$.call(xs).slice(8, -1) === 'Object') {
    xs = values(xs);
  }
  return xs.join(sep);
});
exports.reverse = reverse = function(xs){
  if (toString$.call(xs).slice(8, -1) === 'String') {
    return xs.split('').reverse().join('');
  } else {
    return xs.slice().reverse();
  }
};
exports.fold = fold = exports.foldl = foldl = curry$(function(f, memo, xs){
  var i$, x, len$;
  if (toString$.call(xs).slice(8, -1) === 'Object') {
    for (i$ in xs) {
      x = xs[i$];
      memo = f(memo, x);
    }
  } else {
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      memo = f(memo, x);
    }
  }
  return memo;
});
exports.fold1 = fold1 = exports.foldl1 = foldl1 = curry$(function(f, xs){
  return fold(f, xs[0], xs.slice(1));
});
exports.foldr = foldr = curry$(function(f, memo, xs){
  return fold(f, memo, xs.reverse());
});
exports.foldr1 = foldr1 = curry$(function(f, xs){
  xs.reverse();
  return fold(f, xs[0], xs.slice(1));
});
exports.unfoldr = exports.unfold = unfoldr = curry$(function(f, b){
  var that;
  if ((that = f(b)) != null) {
    return [that[0]].concat(unfoldr(f, that[1]));
  } else {
    return [];
  }
});
exports.andList = andList = function(xs){
  return fold(function(memo, x){
    return memo && x;
  }, true, xs);
};
exports.orList = orList = function(xs){
  return fold(function(memo, x){
    return memo || x;
  }, false, xs);
};
exports.any = any = curry$(function(f, xs){
  if (toString$.call(f).slice(8, -1) !== 'Function') {
    f = objToFunc(f);
  }
  return fold(function(memo, x){
    return memo || f(x);
  }, false, xs);
});
exports.all = all = curry$(function(f, xs){
  if (toString$.call(f).slice(8, -1) !== 'Function') {
    f = objToFunc(f);
  }
  return fold(function(memo, x){
    return memo && f(x);
  }, true, xs);
});
exports.unique = unique = function(xs){
  var result, i$, x, len$;
  result = [];
  if (toString$.call(xs).slice(8, -1) === 'Object') {
    for (i$ in xs) {
      x = xs[i$];
      if (!in$(x, result)) {
        result.push(x);
      }
    }
  } else {
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      if (!in$(x, result)) {
        result.push(x);
      }
    }
  }
  if (toString$.call(xs).slice(8, -1) === 'String') {
    return result.join('');
  } else {
    return result;
  }
};
exports.sort = sort = function(xs){
  return xs.concat().sort(function(x, y){
    switch (false) {
    case !(x > y):
      return 1;
    case !(x < y):
      return -1;
    default:
      return 0;
    }
  });
};
exports.sortBy = sortBy = curry$(function(f, xs){
  if (!xs.length) {
    return [];
  }
  return xs.concat().sort(f);
});
exports.compare = compare = curry$(function(f, x, y){
  switch (false) {
  case !(f(x) > f(y)):
    return 1;
  case !(f(x) < f(y)):
    return -1;
  default:
    return 0;
  }
});
exports.sum = sum = function(xs){
  var result, i$, x, len$;
  result = 0;
  if (toString$.call(xs).slice(8, -1) === 'Object') {
    for (i$ in xs) {
      x = xs[i$];
      result += x;
    }
  } else {
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      result += x;
    }
  }
  return result;
};
exports.product = product = function(xs){
  var result, i$, x, len$;
  result = 1;
  if (toString$.call(xs).slice(8, -1) === 'Object') {
    for (i$ in xs) {
      x = xs[i$];
      result *= x;
    }
  } else {
    for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
      x = xs[i$];
      result *= x;
    }
  }
  return result;
};
exports.mean = mean = exports.average = average = function(xs){
  return sum(xs) / length(xs);
};
exports.concat = concat = function(xss){
  return fold(append, [], xss);
};
exports.concatMap = concatMap = curry$(function(f, xs){
  return concat(map(f, xs));
});
exports.listToObj = listToObj = function(xs){
  var result, i$, len$, x;
  result = {};
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    result[x[0]] = x[1];
  }
  return result;
};
exports.maximum = maximum = function(xs){
  return fold1(max, xs);
};
exports.minimum = minimum = function(xs){
  return fold1(min, xs);
};
exports.scan = scan = exports.scanl = scanl = curry$(function(f, memo, xs){
  var last, x;
  last = memo;
  if (toString$.call(xs).slice(8, -1) === 'Object') {
    return [memo].concat((function(){
      var i$, ref$, results$ = [];
      for (i$ in ref$ = xs) {
        x = ref$[i$];
        results$.push(last = f(last, x));
      }
      return results$;
    }()));
  } else {
    return [memo].concat((function(){
      var i$, ref$, len$, results$ = [];
      for (i$ = 0, len$ = (ref$ = xs).length; i$ < len$; ++i$) {
        x = ref$[i$];
        results$.push(last = f(last, x));
      }
      return results$;
    }()));
  }
});
exports.scan1 = scan1 = exports.scanl1 = scanl1 = curry$(function(f, xs){
  return scan(f, xs[0], xs.slice(1));
});
exports.scanr = scanr = curry$(function(f, memo, xs){
  xs.reverse();
  return scan(f, memo, xs).reverse();
});
exports.scanr1 = scanr1 = curry$(function(f, xs){
  xs.reverse();
  return scan(f, xs[0], xs.slice(1)).reverse();
});
exports.replicate = replicate = curry$(function(n, x){
  var result, i;
  result = [];
  i = 0;
  for (; i < n; ++i) {
    result.push(x);
  }
  return result;
});
exports.take = take = curry$(function(n, xs){
  switch (false) {
  case !(n <= 0):
    if (toString$.call(xs).slice(8, -1) === 'String') {
      return '';
    } else {
      return [];
    }
    break;
  case !!xs.length:
    return xs;
  default:
    return xs.slice(0, n);
  }
});
exports.drop = drop = curry$(function(n, xs){
  switch (false) {
  case !(n <= 0):
    return xs;
  case !!xs.length:
    return xs;
  default:
    return xs.slice(n);
  }
});
exports.splitAt = splitAt = curry$(function(n, xs){
  return [take(n, xs), drop(n, xs)];
});
exports.takeWhile = takeWhile = curry$(function(p, xs){
  var result, i$, len$, x;
  if (!xs.length) {
    return xs;
  }
  if (toString$.call(p).slice(8, -1) !== 'Function') {
    p = objToFunc(p);
  }
  result = [];
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (!p(x)) {
      break;
    }
    result.push(x);
  }
  if (toString$.call(xs).slice(8, -1) === 'String') {
    return result.join('');
  } else {
    return result;
  }
});
exports.dropWhile = dropWhile = curry$(function(p, xs){
  var i, i$, len$, x;
  if (!xs.length) {
    return xs;
  }
  if (toString$.call(p).slice(8, -1) !== 'Function') {
    p = objToFunc(p);
  }
  i = 0;
  for (i$ = 0, len$ = xs.length; i$ < len$; ++i$) {
    x = xs[i$];
    if (!p(x)) {
      break;
    }
    ++i;
  }
  return drop(i, xs);
});
exports.span = span = curry$(function(p, xs){
  return [takeWhile(p, xs), dropWhile(p, xs)];
});
exports.breakIt = breakIt = curry$(function(p, xs){
  return span(compose$([not$, p]), xs);
});
exports.zip = zip = curry$(function(xs, ys){
  var result, i, ref$, len$, zs, j, len1$, z, ref1$;
  result = [];
  for (i = 0, len$ = (ref$ = [xs, ys]).length; i < len$; ++i) {
    zs = ref$[i];
    for (j = 0, len1$ = zs.length; j < len1$; ++j) {
      z = zs[j];
      if (i === 0) {
        result.push([]);
      }
      if ((ref1$ = result[j]) != null) {
        ref1$.push(z);
      }
    }
  }
  return result;
});
exports.zipWith = zipWith = curry$(function(f, xs, ys){
  var i$, ref$, len$, zs, results$ = [];
  if (toString$.call(f).slice(8, -1) !== 'Function') {
    f = objToFunc(f);
  }
  if (!xs.length || !ys.length) {
    return [];
  } else {
    for (i$ = 0, len$ = (ref$ = zip.call(this, xs, ys)).length; i$ < len$; ++i$) {
      zs = ref$[i$];
      results$.push(f.apply(this, zs));
    }
    return results$;
  }
});
exports.zipAll = zipAll = function(){
  var xss, result, i, len$, xs, j, len1$, x, ref$;
  xss = slice$.call(arguments);
  result = [];
  for (i = 0, len$ = xss.length; i < len$; ++i) {
    xs = xss[i];
    for (j = 0, len1$ = xs.length; j < len1$; ++j) {
      x = xs[j];
      if (i === 0) {
        result.push([]);
      }
      if ((ref$ = result[j]) != null) {
        ref$.push(x);
      }
    }
  }
  return result;
};
exports.zipAllWith = zipAllWith = function(f){
  var xss, i$, ref$, len$, xs, results$ = [];
  xss = slice$.call(arguments, 1);
  if (toString$.call(f).slice(8, -1) !== 'Function') {
    f = objToFunc(f);
  }
  if (!xss[0].length || !xss[1].length) {
    return [];
  } else {
    for (i$ = 0, len$ = (ref$ = zipAll.apply(this, xss)).length; i$ < len$; ++i$) {
      xs = ref$[i$];
      results$.push(f.apply(this, xs));
    }
    return results$;
  }
};
exports.compose = compose = function(){
  var funcs;
  funcs = slice$.call(arguments);
  return function(){
    var args, i$, ref$, len$, f;
    args = arguments;
    for (i$ = 0, len$ = (ref$ = funcs).length; i$ < len$; ++i$) {
      f = ref$[i$];
      args = [f.apply(this, args)];
    }
    return args[0];
  };
};
exports.curry = curry = function(f){
  return curry$(f);
};
exports.id = id = function(x){
  return x;
};
exports.flip = flip = curry$(function(f, x, y){
  return f(y, x);
});
exports.fix = fix = function(f){
  return function(g, x){
    return function(){
      return f(g(g)).apply(null, arguments);
    };
  }(function(g, x){
    return function(){
      return f(g(g)).apply(null, arguments);
    };
  });
};
exports.lines = lines = function(str){
  if (!str.length) {
    return [];
  }
  return str.split('\n');
};
exports.unlines = unlines = function(strs){
  return strs.join('\n');
};
exports.words = words = function(str){
  if (!str.length) {
    return [];
  }
  return str.split(/[ ]+/);
};
exports.unwords = unwords = function(strs){
  return strs.join(' ');
};
exports.max = max = curry$(function(x, y){
  if (x > y) {
    return x;
  } else {
    return y;
  }
});
exports.min = min = curry$(function(x, y){
  if (x > y) {
    return y;
  } else {
    return x;
  }
});
exports.negate = negate = function(x){
  return -x;
};
exports.abs = abs = Math.abs;
exports.signum = signum = function(x){
  switch (false) {
  case !(x < 0):
    return -1;
  case !(x > 0):
    return 1;
  default:
    return 0;
  }
};
exports.quot = quot = curry$(function(x, y){
  return ~~(x / y);
});
exports.rem = rem = curry$(function(x, y){
  return x % y;
});
exports.div = div = curry$(function(x, y){
  return Math.floor(x / y);
});
exports.mod = mod = curry$(function(x, y){
  var ref$;
  return ((x) % (ref$ = y) + ref$) % ref$;
});
exports.recip = recip = function(x){
  return 1 / x;
};
exports.pi = pi = Math.PI;
exports.tau = tau = pi * 2;
exports.exp = exp = Math.exp;
exports.sqrt = sqrt = Math.sqrt;
exports.ln = ln = Math.log;
exports.pow = pow = curry$(function(x, y){
  return Math.pow(x, y);
});
exports.sin = sin = Math.sin;
exports.tan = tan = Math.tan;
exports.cos = cos = Math.cos;
exports.asin = asin = Math.asin;
exports.acos = acos = Math.acos;
exports.atan = atan = Math.atan;
exports.atan2 = atan2 = curry$(function(x, y){
  return Math.atan2(x, y);
});
exports.truncate = truncate = function(x){
  return ~~x;
};
exports.round = round = Math.round;
exports.ceiling = ceiling = Math.ceil;
exports.floor = floor = Math.floor;
exports.isItNaN = isItNaN = function(x){
  return x !== x;
};
exports.even = even = function(x){
  return x % 2 === 0;
};
exports.odd = odd = function(x){
  return x % 2 !== 0;
};
exports.gcd = gcd = curry$(function(x, y){
  var z;
  x = Math.abs(x);
  y = Math.abs(y);
  while (y !== 0) {
    z = x % y;
    x = y;
    y = z;
  }
  return x;
});
exports.lcm = lcm = curry$(function(x, y){
  return Math.abs(Math.floor(x / gcd(x, y) * y));
});
exports.installPrelude = function(target){
  var ref$;
  if (!((ref$ = target.prelude) != null && ref$.isInstalled)) {
    import$(target, exports);
    target.prelude.isInstalled = true;
  }
};
exports.prelude = exports;
function curry$(f, args){
  return f.length > 1 ? function(){
    var params = args ? args.concat() : [];
    return params.push.apply(params, arguments) < f.length && arguments.length ?
      curry$.call(this, f, params) : f.apply(this, params);
  } : f;
}
function in$(x, arr){
  var i = 0, l = arr.length >>> 0;
  while (i < l) if (x === arr[i++]) return true;
  return false;
}
function compose$(fs){
  return function(){
    var i, args = arguments;
    for (i = fs.length; i > 0; --i) { args = [fs[i-1].apply(this, args)]; }
    return args[0];
  };
}
function not$(x){ return !x; }
function import$(obj, src){
  var own = {}.hasOwnProperty;
  for (var key in src) if (own.call(src, key)) obj[key] = src[key];
  return obj;
}
var ref$, toString$ = {}.toString, slice$ = [].slice;
ref$ = Array.prototype;
ref$.find = function(it){
  var i$, len$, elem;
  switch (toString$.call(it).slice(8, -1)) {
  case 'Function':
    for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
      elem = this[i$];
      if (it(elem)) {
        return elem;
      }
    }
    break;
  case 'RegExp':
    for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
      elem = this[i$];
      if (it.exec(elem)) {
        return elem;
      }
    }
    break;
  default:
    for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
      elem = this[i$];
      if (it === elem) {
        return elem;
      }
    }
  }
};
ref$.findAll = function(it){
  var i$, len$, elem, results$ = [];
  switch (toString$.call(it).slice(8, -1)) {
  case 'Function':
    for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
      elem = this[i$];
      if (it(elem)) {
        results$.push(elem);
      }
    }
    return results$;
    break;
  case 'RegExp':
    for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
      elem = this[i$];
      if (it.exec(elem)) {
        results$.push(elem);
      }
    }
    return results$;
    break;
  default:
    for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
      elem = this[i$];
      if (it === elem) {
        results$.push(elem);
      }
    }
    return results$;
  }
};
ref$.findIndex = function(it){
  var i$, len$, idx, elem;
  switch (toString$.call(it).slice(8, -1)) {
  case 'Function':
    for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
      idx = i$;
      elem = this[i$];
      if (it(elem)) {
        return idx;
      }
    }
    break;
  case 'RegExp':
    for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
      idx = i$;
      elem = this[i$];
      if (it.exec(elem)) {
        return idx;
      }
    }
    break;
  default:
    for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
      idx = i$;
      elem = this[i$];
      if (it === elem) {
        return idx;
      }
    }
  }
};
ref$.findIndexes = function(it){
  var i$, len$, idx, elem, results$ = [];
  switch (toString$.call(it).slice(8, -1)) {
  case 'Function':
    for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
      idx = i$;
      elem = this[i$];
      if (it(elem)) {
        results$.push(idx);
      }
    }
    return results$;
    break;
  case 'RegExp':
    for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
      idx = i$;
      elem = this[i$];
      if (it.exec(elem)) {
        results$.push(idx);
      }
    }
    return results$;
    break;
  default:
    for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
      idx = i$;
      elem = this[i$];
      if (it === elem) {
        results$.push(idx);
      }
    }
    return results$;
  }
};
ref$.count = function(it){
  if (it == null) {
    return this.length;
  }
  return this.findAll(it).length;
};
ref$.removeAt = function(start, end){
  if (start == null) {
    return this;
  }
  if (end == null) {
    end = start;
  }
  this.splice(start, 1 + (end - start));
  return this;
};
ref$.include = function(el, idx){
  return this.clone().add(el, idx);
};
ref$.exclude = function(){
  var ref$;
  return (ref$ = this.clone()).remove.apply(ref$, arguments);
};
ref$.clone = function(){
  return [].concat(this);
};
ref$.unique = function(){
  return unique(this);
};
ref$.flatten = function(){
  var flat, flatten, i$, len$, elem;
  flat = [];
  flatten = this.flatten;
  for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
    elem = this[i$];
    if (/(Array|Collection|Arguments|Object)/.exec(toString$.call(elem).slice(8, -1))) {
      flat = flat.concat(elem.flatten());
    } else {
      flat.push(elem);
    }
  }
  return flat;
};
ref$.union = function(){
  var arrays, arr, i$, len$, array;
  arrays = slice$.call(arguments);
  arr = this.clone();
  for (i$ = 0, len$ = arrays.length; i$ < len$; ++i$) {
    array = arrays[i$];
    arr = arr.concat(array);
  }
  return arr.unique();
};
ref$.intersect = function(){
  var arrays, arr, l, i$, len$, elem, i, j$, len1$, array;
  arrays = slice$.call(arguments);
  arr = [];
  l = arrays.length;
  for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
    elem = this[i$];
    i = 0;
    for (j$ = 0, len1$ = arrays.length; j$ < len1$; ++j$) {
      array = arrays[j$];
      if (in$(elem, array)) {
        ++i;
      }
    }
    if (i === l) {
      arr.push(elem);
    }
  }
  return arr;
};
ref$.subtract = function(){
  var arrays, arr, l, i$, len$, elem, j$, len1$, array;
  arrays = slice$.call(arguments);
  arr = [];
  l = arrays.length;
  elem: for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
    elem = this[i$];
    for (j$ = 0, len1$ = arrays.length; j$ < len1$; ++j$) {
      array = arrays[j$];
      if (in$(elem, array)) {
        continue elem;
      }
    }
    arr.push(elem);
  }
  return arr;
};
ref$.at = function(it){
  var l, i$, len$, i, results$ = [];
  l = this.length;
  if (arguments[1] == null) {
    return this[it < 0 ? l + it : it];
  }
  for (i$ = 0, len$ = arguments.length; i$ < len$; ++i$) {
    i = arguments[i$];
    results$.push(this[i < 0 ? l + i : i]);
  }
  return results$;
};
ref$.first = function(it){
  if (it != null) {
    return this.slice(0, it);
  } else {
    return this[0];
  }
};
ref$.last = function(it){
  if (it != null) {
    return this.slice(it + 1);
  } else {
    return this[this.length - 1];
  }
};
ref$.min = function(){
  return fold1(curry$(function(x$, y$){
    return x$ < y$ ? x$ : y$;
  }), this);
};
ref$.max = function(){
  return fold1(curry$(function(x$, y$){
    return x$ > y$ ? x$ : y$;
  }), this);
};
ref$.least = function(it){
  return console.log(this.groupBy(it != null ? it : 'length'));
};
ref$.most = function(it){
  return console.log(this.groupBy(it != null ? it : 'length'));
};
ref$.sum = function(){
  return sum(this);
};
ref$.average = function(){
  return average(this);
};
ref$.inGroupsOf = function(num, fillWith){
  var ret, group, len, i, add;
  ret = [];
  group = [];
  len = this.length;
  if (num >= len) {
    return [this];
  }
  i = 0;
  for (; i < len; ++i) {
    group.push(this[i]);
    if ((i + 1) % num === 0) {
      ret.push(group);
      group = [];
    }
  }
  if (group.length) {
    if (arguments.length > 1) {
      add = abs(i % num - num);
      i = 0;
      for (; i < add; ++i) {
        group.push(fillWith);
      }
    }
    ret.push(group);
  }
  return ret;
};
ref$.isEmpty = function(){
  return !this.compact().length;
};
ref$.sortBy = function(f){
  return sortBy(toString$.call(f).slice(8, -1) === 'Function'
    ? f
    : function(it){
      return it[f];
    }, this);
};
ref$.randomize = function(){
  var arr, len, j, x;
  arr = this.concat(), len = arr.length;
  while (len) {
    j = parseInt(Math.random() * len);
    x = arr[--len];
    arr[len] = arr[j];
    arr[j] = x;
  }
  return arr;
};
ref$.sample = function(it){
  if (arguments.length) {
    return this.randomize().slice(0, it);
  } else {
    return this.randomize()[0];
  }
};
ref$.zip = function(){
  var arrays, i$, len$, k, v, lresult$, j$, len1$, array, that, results$ = [];
  arrays = slice$.call(arguments);
  arrays = [this].concat(arrays);
  for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
    k = i$;
    v = this[i$];
    lresult$ = [];
    for (j$ = 0, len1$ = arrays.length; j$ < len1$; ++j$) {
      array = arrays[j$];
      if (that = array[k]) {
        lresult$.push(that);
      }
    }
    results$.push(lresult$);
  }
  return results$;
};
ref$.each = function(it){
  return each(it, this);
};
ref$.add = function(el, idx){
  if (idx == null) {
    idx = this.length;
  }
  this.splice.apply(this, [idx, 0].concat(el));
  return this;
};
ref$.remove = function(){
  var vals, arr, i$, len$, value, i;
  vals = slice$.call(arguments);
  arr = this.clone();
  for (i$ = 0, len$ = vals.length; i$ < len$; ++i$) {
    value = vals[i$];
    i = 0;
    switch (toString$.call(value).slice(8, -1)) {
    case 'Function':
      while (i < arr.length) {
        if (value(arr[i])) {
          arr.splice(i, 1);
        } else {
          ++i;
        }
      }
      break;
    case 'RegExp':
      while (i < arr.length) {
        if (value.exec(arr[i])) {
          arr.splice(i, 1);
        } else {
          ++i;
        }
      }
      break;
    default:
      while (i < arr.length) {
        if (value === arr[i]) {
          arr.splice(i, 1);
        } else {
          ++i;
        }
      }
    }
  }
  return arr;
};
ref$.compact = function(){
  var ret, i$, len$, v, that;
  ret = [];
  for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
    v = this[i$];
    if (v != null) {
      if (toString$.call(v).slice(8, -1) === 'Array') {
        if (that = (v = v.compact()).length) {
          ret.push(that);
        }
      } else {
        ret.push(v);
      }
    }
  }
  return ret;
};
ref$.groupBy = function(f){
  var result, c, i$, len$, v, key$;
  result = {};
  if (toString$.call(f).slice(8, -1) !== 'Function') {
    c = f;
    f = function(it){
      return it[c];
    };
  }
  for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
    v = this[i$];
    (result[key$ = f(v)] || (result[key$] = [])).push(v);
  }
  return result;
};
function in$(x, arr){
  var i = -1, l = arr.length >>> 0;
  while (++i < l) if (x === arr[i] && i in arr) return true;
  return false;
}
function curry$(f, args){
  return f.length > 1 ? function(){
    var params = args ? args.concat() : [];
    return params.push.apply(params, arguments) < f.length && arguments.length ?
      curry$.call(this, f, params) : f.apply(this, params);
  } : f;
}