
$.fn.cssanimate = function(params, duration, delay, easing, callback) {
    
    var origin = undefined;
    var style = undefined;
    
    if (typeof duration === 'function') {
        callback = duration;
        duration = undefined;
    }
    
    if (typeof delay === 'function') {
        callback = delay;
        delay = undefined;
    }
    
    if (typeof easing === 'function') {
        callback = easing;
        easing = undefined;
    }
    
    if (params.duration) {
        duration = params.duration;
        delete params.duration;
    }
    
    if (params.delay) {
        delay = params.delay;
        delete params.delay;
    }
    
    if (params.easing) {
        easing = params.easing;
        delete params.easing;
    }
    
    if (params.origin) {
        origin = params.origin;
        delete params.origin;
    }
    
    if (params.style) {
        origin = params.style;
        delete params.style;
    }
    
    // keep 3d control parameter disable.
    // this.parent().css('-webkit-perspective', params.perspective || 'none');
    delete params.perspective;
    
    function animate() {
        new Style(this, params, duration, delay, easing, origin, style, callback);
    }
    
    /*
        wrap with setTimeout() due to following code.
        If not use setTimeout(), cssanimate would be executed 
        before setting attribute of width='100' to $('.any').
        
        $('.any').css("width", 100);
        $('.any').cssanimate({"width": 200}, duration, easing, complete);
    */
    setTimeout($.proxy(animate, this), 1);
    
    return this;
};