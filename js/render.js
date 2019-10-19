'use strict';

(function () {
  var WIZARD_COUNT = 4;

  document.querySelector('.setup-similar').classList.remove('hidden');

  var insertWizardData = function (template, element) {
    var wizardElement = template.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = element.name;
    wizardElement.querySelector('.wizard-coat').style.fill = element.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = element.colorEyes;

    return wizardElement;
  };

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  window.renderWizards = function (wizards) {
    similarListElement.innerHTML = '';
    var wizardFragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARD_COUNT; i++) {
      wizardFragment.appendChild(insertWizardData(similarWizardTemplate, wizards[i]));
    }

    similarListElement.appendChild(wizardFragment);
  };
})();
