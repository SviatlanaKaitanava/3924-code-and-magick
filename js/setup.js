'use strict';
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var setupUserName = setup.querySelector('.setup-user-name');
var onFocus = false;
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

var random = function (max, min) {
  return Math.floor(Math.random() * (max - min) + min);
};

var generateWizards = function (wizardNum) {
  var wizards = [];
  for (var i = 0; i < wizardNum; i++) {
    wizards[i] = {
      name: FIRST_NAMES[random(FIRST_NAMES.length, 0)] + ' ' + LAST_NAMES[random(LAST_NAMES.length, 0)],
      coatColor: COAT_COLORS[random(COAT_COLORS.length, 0)],
      eyesColor: EYES_COLORS[random(EYES_COLORS.length, 0)]
    };
  }

  return wizards;
};

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var renderAll = function () {
  var wizards = generateWizards(4);

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

};

document.querySelector('.setup-similar').classList.remove('hidden');
renderAll();

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  setup.style = '';
};

setupUserName.addEventListener('focus', function () {
  onFocus = true;
});
setupUserName.addEventListener('blur', function () {
  onFocus = false;
});

var closePopup = function () {
  if (onFocus === false) {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

setupUserName.addEventListener('invalid', function () {
  if (setupUserName.validity.tooShort) {
    setupUserName.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (setupUserName.validity.tooLong) {
    setupUserName.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (setupUserName.validity.valueMissing) {
    setupUserName.setCustomValidity('Обязательное поле');
  } else {
    setupUserName.setCustomValidity('');
  }
});

wizardCoat.addEventListener('click', function () {
  var newColorCoat = document.querySelector('.setup-wizard-appearance input[name=coat-color]');
  newColorCoat.value = COAT_COLORS[random(5, 0)];
  wizardCoat.style.fill = newColorCoat.value;
});

wizardEyes.addEventListener('click', function () {
  var newColorEyes = document.querySelector('.setup-wizard-appearance input[name=eyes-color]');
  newColorEyes.value = EYES_COLORS[random(4, 0)];
  wizardEyes.style.fill = newColorEyes.value;
});

setupFireballWrap.addEventListener('click', function () {
  var newColorFireball = setupFireballWrap.querySelector('input');
  newColorFireball.value = FIREBALL_COLOR[random(4, 0)];
  setupFireballWrap.style.background = newColorFireball.value;
});
