
$.fn.translateX = function(x, duration, delay, easing, callback) {
    
    var params = {
        x: x
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.translateY = function(y, duration, delay, easing, callback) {
    
    var params = {
        y: y
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.translateZ = function(z, perspective, duration, delay, easing, callback) {
    
    var params = {
        z: z,
        perspective : perspective
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.translate = function(x, y, duration, delay, easing, callback) {
    
    var params = {
        x: x,
        y: y
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.translate3d = function(x, y, z, perspective, duration, delay, easing, callback) {
    
    var params = {
        x: x,
        y: y,
        z: z,
        perspective: perspective
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.scaleX = function(scalex, duration, delay, easing, callback) {
    
    var params = {
        scalex: scalex
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.scaleY = function(scaley, duration, delay, easing, callback) {
    
    var params = {
        scaley: scaley
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.scaleZ = function(scalez, perspective, duration, delay, easing, callback) {
    
    throw new Error('scaleZ is under untested');
    
    /*
    var params = {
        scalez: scalez,
        perspective: perspective
    };
    
    this.transit(params, duration, delay, easing, callback);
    */
};

$.fn.scale = function(scalex, scaley, duration, delay, easing, callback) {
    
    var params = {
        scalex: scalex,
        scaley: scaley
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.scale3d = function(scalex, scaley, scalez, perspective, duration, delay, easing, callback) {
    
    throw new Error('scale3d is under untested');
    
    /*
    var params = {
        scale: [scalex, scaley, scalez]
    };
    
    this.transit(params, duration, delay, easing, callback);
    */
};

$.fn.rotateX = function(rotatex, duration, delay, easing, callback) {
    
    var params = {
        rotatex: rotatex
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.rotateY = function(rotatey, duration, delay, easing, callback) {
    
    var params = {
        rotatey: rotatey
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.rotateZ = function(rotatez, duration, delay, easing, callback) {
    
    var params = {
        rotatez: rotatez
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.rotate = function(rotate, duration, delay, easing, callback) {
    
    var params = {
        rotate: rotate
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.rotate3d = function(x, y, z, rotate, duration, delay, easing, callback) {
    
    var params = {
        rotate: [x, y, z, rotate]
    };
    
    this.transit(params, duration, delay, easing, callback);
};



$.fn.skewX = function(skewx, duration, delay, easing, callback) {
    
    var params = {
        skewx: skewx
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.skewY = function(skewy, duration, delay, easing, callback) {
    
    var params = {
        skewy: skewy
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.skew = function(skewx, skewy, duration, delay, easing, callback) {
    
    var params = {
        skew: [skewx, skewy]
    };
    
    this.transit(params, duration, delay, easing, callback);
};

$.fn.perspective = function() {
    
    throw new Error('perspective function is not available');
};