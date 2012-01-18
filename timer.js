/**
 *  timer.js
 *  @author Yang-Hsing Lin
 *
 *  usage: 
 *  In browser:
 *
 *  var myTimer = window.createTimer();
 *
 *  myTimer.start();
 *  ...blablabla...
 *  myTimer.stop();
 *  console.log('time elapsed: ' + myTimer.getTimeInterval());
 */

(function() {
  var isBrowserEnv = typeof window == 'object';

  var createTimer = function() {
    var that = {}
      , startTime = null
      , endTime = null

    that.start = function () {
      var t = new Date();
      startTime = t.getTime();
    };

    that.stop = function() {
      var t = new Date();
      endTime = t.getTime();
    };
    that.getTimeInterval = function() {
      return endTime - startTime;
    };

    return that;
  };


  if (isBrowserEnv)
    window.createTimer = createTimer;
  else
    module.exports = createTimer;
})();
