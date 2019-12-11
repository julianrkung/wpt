// DO NOT EDIT! This test has been generated by tools/gentest.py.
// OffscreenCanvas test in a worker:2d.state.saverestore.shadowBlur
// Description:save()/restore() works for shadowBlur
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("save()/restore() works for shadowBlur");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

// Test that restore() undoes any modifications
var old = ctx.shadowBlur;
ctx.save();
ctx.shadowBlur = 5;
ctx.restore();
_assertSame(ctx.shadowBlur, old, "ctx.shadowBlur", "old");

// Also test that save() doesn't modify the values
ctx.shadowBlur = 5;
old = ctx.shadowBlur;
    // we're not interested in failures caused by get(set(x)) != x (e.g.
    // from rounding), so compare against 'old' instead of against 5
ctx.save();
_assertSame(ctx.shadowBlur, old, "ctx.shadowBlur", "old");
ctx.restore();
t.done();

});
done();
