// The transform-origin has to applied to element before apply any other transformation.
// If not so, transform-origin of element would have shifted a little.
$.fn.origin = function(top, left) {
  $(this).queue(function() {
    $(this).css(Style.property('transform-origin'), str('{0} {1}').format(top, left));
    var i = 0;
    // We have to wait until css property is set.
    // If not so, next queue might be executed before setting css to dom.
    while (1) {
      if ($(this).css(Style.property('transform-origin'))) break;
      if (++i > 50) break; // avoid infinite loop
    }
    $(this).dequeue();
  });
  return this;
}