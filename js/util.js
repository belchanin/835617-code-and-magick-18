'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

  window.util = {
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    getRandomElem: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    WIZARD_COAT_COLORS: WIZARD_COAT_COLORS,
    WIZARD_EYE_COLORS: WIZARD_EYE_COLORS,
  };
})();
