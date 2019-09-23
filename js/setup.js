'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COUNT = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var generateWizardsData = function (quantity) {
  var array = [];
  var newObject = {
    name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] + ' ' + WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
    coatColor: WIZARD_COAT_COLORS[Math.floor(Math.random() * WIZARD_COAT_COLORS.length)],
    eyesColor: WIZARD_EYE_COLORS[Math.floor(Math.random() * WIZARD_EYE_COLORS.length)]
  };

  for (var i = 0; i < quantity; i++) {
    array.push(newObject);
  }

  return array;
};

var insertWizardData = function (template) {
  var wizardElement = template.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizardFragment = document.createDocumentFragment();

for (var i = 0; i < WIZARD_COUNT; i++) {
  var wizards = generateWizardsData(WIZARD_COUNT);
  wizardFragment.appendChild(insertWizardData(similarWizardTemplate));
}

similarListElement.appendChild(wizardFragment);
