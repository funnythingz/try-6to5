"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) {
  if (staticProps) Object.defineProperties(child, staticProps);
  if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
};

var Hoge = (function () {
  function Hoge() {
    console.log(this.putUnko());
  }

  _prototypeProperties(Hoge, null, {
    putUnko: {
      value: function putUnko() {
        this.unko = "unko";
        return this.unko;
      },
      writable: true,
      enumerable: true,
      configurable: true
    }
  });

  return Hoge;
})();
