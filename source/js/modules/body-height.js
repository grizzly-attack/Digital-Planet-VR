'use strict';

(function () {
  var setBodyHeight = function () {
    document.body.style.height = window.innerHeight + 'px';
  };
  setBodyHeight();
  window.addEventListener('resize', function() {
    setBodyHeight();
  });
})();
