(function() {
 
  'use strict';
 
  document.querySelector('.material-design-hamburger_icon').addEventListener(
    'click',
    function openClick() {  
      console.log ("öppna")     
      var child;
      
      document.body.classList.toggle('background-blur');
      this.parentNode.nextElementSibling.classList.toggle('menu-on');
 
      child = this.childNodes[1].classList;
 
      if (child.contains('material-design-hamburger_icon-to-arrow')) {
        child.remove('material-design-hamburger_icon-to-arrow');
        child.add('material-design-hamburger_icon-from-arrow');
      } else {
        child.remove('material-design-hamburger_icon-from-arrow');
        child.add('material-design-hamburger_icon-to-arrow');
      }
    });
})();