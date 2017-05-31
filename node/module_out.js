(function (_, Kotlin) {
  'use strict';
  function repeat(number) {
    return number;
  }
  _.repeat = repeat;
  Kotlin.defineModule('module_out', _);
  return _;
}(module.exports, require('kotlin')));
