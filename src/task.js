function task(options) {
  
  var animateType = $.fn.tween.debug.animateType || (transitionEnd ? 'transition': 'animation');
  
  return function() {
    switch (animateType) {
      case 'transition': $.proxy(transit(options), this)(); break;
      case 'animation': $.proxy(animate(options), this)(); break;
    }
  }
}