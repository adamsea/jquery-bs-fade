/**
 * Replacements for .fadeIn and .fadeOut that apply
 * CSS classes to fade and element and will show/hide
 * the element using CSS as well.  This is not a replacement
 * for the full functionality of .fadeIn and .fadeOut, as the
 * timing of the animation is not set in options but rather in CSS.
 */
(function($) {

    // From Bootstrap transition helper
    var transitionEvent = (function() {
        var name,
            el = document.createElement('bootstrap'),
            transEndEventNames = {
                WebkitTransition : 'webkitTransitionEnd',
                MozTransition    : 'transitionend',
                OTransition      : 'oTransitionEnd otransitionend',
                transition       : 'transitionend'
            };

        for (name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return transEndEventNames[name];
            }
        }

        return false;
    }());

    /**
     * jQuery.fn.cssFadeOut
     */
    $.fn.cssFadeOut = function(callback) {
        var $elem = $(this);
        $elem
            .removeClass('in')
            .one(transitionEvent, function() {
                $elem.addClass('hide');
                if (typeof callback === 'function') {
                    return callback.call(this);
                }
            });
        return $elem;
    };

    /**
     * jQuery.fn.cssFadeIn
     */
    $.fn.cssFadeIn = function(callback) {
        var $elem = $(this);
        $elem
            .removeClass('hide');
        window.requestAnimationFrame(function() {
            $elem
                .addClass('in')
                .one(transitionEvent, function() {
                    if (typeof callback === 'function') {
                        return callback.call(this);
                    }
                });
        });
        return $elem;
    };

}(window.jQuery));
