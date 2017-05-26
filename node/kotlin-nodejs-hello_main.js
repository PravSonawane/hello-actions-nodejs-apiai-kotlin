(function (_, Kotlin) {
  'use strict';
  function hello() {
    return 'hello';
  }
  _.hello = hello;
  Kotlin.defineModule('kotlin-nodejs-hello_main', _);
  return _;
}(module.exports, require('kotlin')));
