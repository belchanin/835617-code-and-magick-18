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

  var successGetHandler = function (wizards) {
    var wizardFragment = document.createDocumentFragment();

    for (var i = 0; i < WIZARD_COUNT; i++) {
      wizardFragment.appendChild(insertWizardData(similarWizardTemplate, wizards[i]));
    }

    similarListElement.appendChild(wizardFragment);
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '20px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successGetHandler, errorHandler);

  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');

  var successPostHandler = function () {
    userDialog.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), successPostHandler, errorHandler);
    evt.preventDefault();
  });
})();
