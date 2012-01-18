Timer
=======
simple timer for javascript

##Installation:
### in browser:
include timer would append a function called ```createTimer``` under ``window`` namespace.

### in nodeJS
require the file and get createTimer function.

    var createTimer = require(__dirname + '/timer');

##Usage:

    var timer = window.createTimer();
    timer.start();
    // do some stuff to be measured here.
    // ...
    // ...

    // stop the timer and get result
    timer.stop();
    console.log('total time elasped: ' + timer.getTimeInterval());

