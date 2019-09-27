 'use strict';
 (function () {
    var element = document.getElementById('popup-phone');
    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };
    var mask = IMask(element, maskOptions);
})
();

