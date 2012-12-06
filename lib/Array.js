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
ref$.detect = function(it){
  return this.find(it);
};
ref$.keepIf = function(it){
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
ref$.grep = function(it){
  return this.keepIf(it);
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
  return this.keepIf(it).length;
};
ref$.deleteAt = function(start, end){
  if (start == null) {
    return this;
  }
  if (end == null) {
    end = start;
  }
  this.splice(start, 1 + (end - start));
  return this;
};
ref$.deleteIf = function(){
  return this.deleteAt.apply(this, arguments);
};
ref$.reject = function(){
  var ref$;
  return (ref$ = this.clone())['delete'].apply(ref$, arguments);
};
ref$.clone = function(){
  return [].concat(this);
};
ref$.uniq = function(){
  return unique(this);
};
ref$.uniqBy = function(it){
  var has, v, f;
  has = [];
  return (function(){
    var i$, len$, results$ = [];
    for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
      v = this[i$];
      if (!in$(f = it(v), has)) {
        has.push(f);
        results$.push(v);
      }
    }
    return results$;
  }.call(this)).uniq();
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
  return arr.uniq();
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
ref$.reverseEach = function(){
  return this.reverse().each.apply(this, arguments);
};
ref$.cycle = function(num, f){
  var i, len, results$ = [];
  i = 0;
  len = this.length;
  for (; i < num; ++i) {
    results$.push(f(this[i % len]));
  }
  return results$;
};
ref$.at = function(it){
  var l, i$, len$, i, results$ = [];
  l = this.length;
  if (arguments.length === 0) {
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
ref$.drop = function(it){
  return this.slice(it);
};
ref$.dropWhile = function(it){
  return dropWhile(it, this);
};
ref$.takeWhile = function(it){
  return takeWhile(it, this);
};
ref$.all = function(it){
  return all(it, this);
};
ref$.any = function(it){
  return any(it, this);
};
ref$.to = function(it){
  return this.slice(0, it != null
    ? it
    : this.length);
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
ref$.size = function(){
  return this.length;
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
  if (len === num) {
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
ref$.eachSlice = function(num, fn){
  return this.inGroupsOf(num).each(fn);
};
ref$.rotate = function(it){
  var i, len, results$ = [];
  it == null && (it = 1);
  i = 0;
  len = this.length;
  for (; i < len; ++i) {
    if (it >= len) {
      it = 0;
    }
    results$.push(this[it++]);
  }
  return results$;
};
ref$.isEmpty = function(){
  return !this.compact().length;
};
ref$.from = function(it){
  return this.slice(it);
};
ref$.to = function(it){
  return this.slice(0, it != null
    ? it
    : this.length);
};
ref$.take = function(it){
  return this.to(it);
};
ref$.sortBy = function(f){
  return sortBy(toString$.call(f).slice(8, -1) === 'Function'
    ? f
    : function(it){
      return it[f];
    }, this);
};
ref$.toQuery = function(it){
  var k, v;
  return (function(){
    var i$, len$, results$ = [];
    for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
      k = i$;
      v = this[i$];
      results$.push(it + "[]=" + encodeURIComponent(v));
    }
    return results$;
  }.call(this)).join('&');
};
ref$.randomize = function(){
  var arr, len, j, x;
  arr = this.clone(), len = arr.length;
  while (len) {
    j = parseInt(Math.random() * len);
    x = arr[--len];
    arr[len] = arr[j];
    arr[j] = x;
  }
  return arr;
};
ref$.sample = function(it){
  if (arguments[0] != null) {
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
ref$.collect = function(it){
  return map(it, this);
};
ref$.each = function(it){
  var i$, len$, k, v;
  for (i$ = 0, len$ = this.length; i$ < len$; ++i$) {
    k = i$;
    v = this[i$];
    it(v, k);
  }
};
ref$.eachWithIndex = function(it){
  this.each(it);
};
ref$.eachIndex = function(it){
  each(it, this.keys());
};
ref$.keys = function(){
  var k, own$ = {}.hasOwnProperty, results$ = [];
  for (k in this) if (own$.call(this, k)) {
    results$.push(k);
  }
  return results$;
};
ref$.fill = function(it){
  var i, len;
  i = 0;
  len = this.length;
  for (; i < len; ++i) {
    this[i] = it;
  }
  return this;
};
ref$.insert = function(idx, el){
  this.splice.apply(this, [idx, 0].concat(el));
  return this;
};
ref$['delete'] = function(){
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