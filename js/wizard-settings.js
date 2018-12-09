'use strict';
(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizardCoat = document.querySelector('.wizard-coat');
  var wizardEyes = document.querySelector('.wizard-eyes');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    var newColorCoat = document.querySelector('.setup-wizard-appearance input[name=coat-color]');
    newColorCoat.value = COAT_COLORS[window.util.random(5, 0)];
    wizardCoat.style.fill = newColorCoat.value;
  });

  wizardEyes.addEventListener('click', function () {
    var newColorEyes = document.querySelector('.setup-wizard-appearance input[name=eyes-color]');
    newColorEyes.value = EYES_COLORS[window.util.random(4, 0)];
    wizardEyes.style.fill = newColorEyes.value;
  });

  setupFireballWrap.addEventListener('click', function () {
    var newColorFireball = setupFireballWrap.querySelector('input');
    newColorFireball.value = FIREBALL_COLOR[window.util.random(4, 0)];
    setupFireballWrap.style.background = newColorFireball.value;
  });
})();
