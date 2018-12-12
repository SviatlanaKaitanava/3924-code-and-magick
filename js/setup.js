'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var setupUserName = setup.querySelector('.setup-user-name');
  var onFocus = false;

  var onPopupEscPress = function (evt) {
    window.util.isEscEvent(evt, closePopup);
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
    window.util.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
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

  var onLoad = function () {
    setup.classList.add('hidden');
  };

  var onError = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; position: absolute; font-size: 30px; width: 100%; padding: 20px;';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };


  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), onLoad, onError);
    evt.preventDefault();
  });
})();
