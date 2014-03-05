// Fade and friction settings below

var $window = $(window);
var scrollFade = function ($element, friction, offset) {
  friction  = (friction  === undefined)? 0.5 : friction;
  offset = (offset === undefined)? 0 : offset;

  var parentHeight = $element.parent().outerHeight() * 0.5;
  var previousOpacity = Infinity;

  $window.scroll(function() {
    var scrollTop = Math.max(0, $window.scrollTop())
      , yOffset   = ($element.outerHeight() * -0.5) + scrollTop * friction
      , opacity   = 1 - (scrollTop / parentHeight - (parentHeight * offset))

    if (opacity < 0 && previousOpacity < 0) return;

    $element.css({
      transform: 'translate3d(0px,'+ yOffset +'px, 0)',
      opacity: opacity
    });

    previousOpacity = opacity;
  });
}

scrollFade($('header.container')
  , 0.5  // Friction (0 ~ 1): lower = none
  , 0    // Fade duration (0 ~ 1): lower = longer
);