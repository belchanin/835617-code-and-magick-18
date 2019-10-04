'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COUNT = 4;

  document.querySelector('.setup-similar').classList.remove('hidden');

  var generateWizardsData = function (quantity) {
    var array = [];

    for (var i = 0; i < quantity; i++) {
      var object = {
        name: window.util.getRandomElem(WIZARD_NAMES) + ' ' + window.util.getRandomElem(WIZARD_SURNAMES),
        coatColor: window.util.getRandomElem(window.util.WIZARD_COAT_COLORS),
        eyesColor: window.util.getRandomElem(window.util.WIZARD_EYE_COLORS)
      };
      array.push(object);
    }

    return array;
  };

  var insertWizardData = function (template, element) {
    var wizardElement = template.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = element.name;
    wizardElement.querySelector('.wizard-coat').style.fill = element.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = element.eyesColor;

    return wizardElement;
  };

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardFragment = document.createDocumentFragment();
  var wizards = generateWizardsData(WIZARD_COUNT);

  for (var i = 0; i < wizards.length; i++) {
    wizardFragment.appendChild(insertWizardData(similarWizardTemplate, wizards[i]));
  }

  similarListElement.appendChild(wizardFragment);
})();
