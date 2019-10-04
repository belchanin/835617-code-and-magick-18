'use strict';

(function () {
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', 'e6e848'];

  var wizardCoatColor = document.querySelector('.setup-wizard .wizard-coat');
  var wizardCoatInput = document.querySelector('input[name = "coat-color"]');
  var wizardEyesColor = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardEyesInput = document.querySelector('input[name = "eyes-color"]');
  var wizardFireballColor = document.querySelector('.setup-fireball-wrap');
  var wizardFireballInput = document.querySelector('input[name = "fireball-color"]');

  var setColorAttrubutes = function (colors, element, field) {
    var color = window.util.getRandomElem(colors);

    element.style.fill = color;
    field.value = color;
  };

  wizardCoatColor.addEventListener('click', function () {
    setColorAttrubutes(window.util.WIZARD_COAT_COLORS, wizardCoatColor, wizardCoatInput);
  });

  wizardEyesColor.addEventListener('click', function () {
    setColorAttrubutes(window.util.WIZARD_EYE_COLORS, wizardEyesColor, wizardEyesInput);
  });

  wizardFireballColor.addEventListener('click', function () {
    var color = window.util.getRandomElem(WIZARD_FIREBALL_COLORS);
    wizardFireballColor.style.backgroundColor = color;
    wizardFireballInput.value = color;
  });
})();
