'use strict';
(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

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
    random: function (max, min) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    showError: function (errorMessage) {
      var node = document.createElement('div');
      node.id = 'error-message';
      node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red; position: absolute; font-size: 30px; width: 100%; padding: 20px;';
      node.textContent = errorMessage;
      document.body.insertAdjacentElement('afterbegin', node);
    },
    shuffle: function (array) {
      var m = array.length;
      var t;
      var i;
      while (m) {
        i = Math.floor(Math.random() * m--);
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }
      return array;
    }
  };
})();
