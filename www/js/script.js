var mouseover = false;

$('#translateX .thumb .box').mouseover(function() {
    $(this).cssanimate({ x: 30 });
}).mouseout(function() {
    $(this).cssanimate(); // cssanimate() equals cssanimate({ x: 0 })
});

$('#translateY .thumb .box').mouseover(function() {
    $(this).cssanimate({ y: 30 });
}).mouseout(function() {
    $(this).cssanimate();
});

$('#translateXY .thumb .box').mouseover(function() {
    $(this).cssanimate({ x: 30, y: 30 });
}).mouseout(function() {
    $(this).cssanimate();
});

$('#rotateX .thumb .box').mouseover(function() {
    $(this).cssanimate({ rotatex: 180 });
}).mouseout(function() {
    $(this).cssanimate();
});

$('#rotateY .thumb .box').mouseover(function() {
    $(this).cssanimate({ rotatey: 180 });
}).mouseout(function() {
    $(this).cssanimate();
});

$('#rotateXYZ .thumb .box').mouseover(function() {
    $(this).cssanimate({ rotate: [1, 1, 0, 180] });
}).mouseout(function() {
    $(this).cssanimate();
});

$('#scaleX .thumb .box').mouseover(function() {
    $(this).cssanimate({ scalex: 4 });
}).mouseout(function() {
    $(this).cssanimate();
});

$('#scaleY .thumb .box').mouseover(function() {
    $(this).cssanimate({ scaley: 4 });
}).mouseout(function() {
    $(this).cssanimate();
});

$('#scaleXY .thumb .box').mouseover(function() {
    $(this).cssanimate({ scalex: 4, scaley: 4 });
}).mouseout(function() {
    $(this).cssanimate();
});

$('#skewX .thumb .box').mouseover(function() {
    $(this).cssanimate({ skewx: 45 });
}).mouseout(function() {
    $(this).cssanimate();
});

$('#skewY .thumb .box').mouseover(function() {
    $(this).cssanimate({ skewy: 45 });
}).mouseout(function() {
    $(this).cssanimate();
});

$('#skewXY .thumb .box').mouseover(function() {
    $(this).cssanimate({ skewx: 45, skewy: 45 });
}).mouseout(function() {
    $(this).cssanimate();
});

$('#opacity .thumb .box').mouseover(function() {
    $(this).cssanimate({ opacity: 0 });
}).mouseout(function() {
    $(this).cssanimate({ opacity: 1 });
});

$('#width .thumb .box').mouseover(function() {
    $(this).cssanimate({ width: 120 });
}).mouseout(function() {
    $(this).cssanimate({ width: 30 });
});

$('#radius .thumb .box').mouseover(function() {
    $(this).cssanimate({ "border-radius": 30 });
}).mouseout(function() {
    $(this).cssanimate({ "border-radius": 0 });
});

$('.method-chaine .box').mouseover(function() {
    $(this)
        .cssanimate({ x: 100, y: 0, scale: 0.5, rotatez: 90 })
        .cssanimate({ x: 100, y: 100, scale: 1, rotatez: 180 })
        .cssanimate({ x: -100, y: 100, scale: 0.5, rotatez: 270 })
        .cssanimate({ x: -100, y: 0, scale: 1, rotatez: 360 })
        .cssanimate({ x: 0, y: 0, scale: 1 })
}).mouseout(function() {
    $(this).cssanimate();
});

$('.transformation-origins .box').mouseover(function() {
    $(this).origin(0, 0).cssanimate({ rotatez: 45 })
}).mouseout(function() {
    $(this).cssanimate({ rotatez: 0 });
});

/*
$('#transitions .thumb').eq(0).mouseover(function() {
    mouseover = true;
    (function runner() {
        $('.box').cssanimate({ x: 30 });
        $('.box').cssanimate({ x: 0 }, function() {
            if (mouseover) runner();
        });
    })();
}).mouseout(function() {
    mouseover = false;
});
*/