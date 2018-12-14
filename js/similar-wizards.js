'use strict';
(function () {

  var MAX_WIZARD = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var onLoad = function (wizards) {
    var fragment = document.createDocumentFragment();
    var randomWizards = window.util.shuffle(wizards).slice(0, MAX_WIZARD);

    randomWizards.forEach(function (wizard) {
      fragment.appendChild(renderWizard(wizard));
    });

    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var onError = function (errorMessage) {
    window.util.showError(errorMessage);
  };

  window.backend.load(onLoad, onError);
})();
