// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.shadow.alpha.1
// Description:Shadow colour alpha components are used
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("Shadow colour alpha components are used");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#0f0';
ctx.fillRect(0, 0, 100, 50);
ctx.shadowColor = 'rgba(255, 0, 0, 0.01)';
ctx.shadowOffsetY = 50;
ctx.fillRect(0, -50, 100, 50);
_assertPixelApprox(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255", 4);
t.done();

});
done();
