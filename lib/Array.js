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