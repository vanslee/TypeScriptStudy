"use strict";
const sym = Symbol();
const obj = { [sym]: "some value" };
console.log(obj[sym]); // 'some value'
