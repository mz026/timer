describe('createTimer', function() {
  var createTimer;
  beforeEach(function() {
    createTimer = require(__dirname + '/../timer');
    this.addMatchers({
      toBeFunction: function() {
        return typeof this.actual === 'function';
      }  
    });
  });
  it('should be pass', function() {
    expect(true).toBeTruthy();  
  });    

  it('should be a function', function() {
    expect(typeof createTimer).toEqual('function');
  });

  it('should returns an object', function() {
    expect(typeof createTimer()).toBe('object');
  });

  it('should have methods start, stop, getTimeInterval', function() {
    expect(createTimer().start).toBeFunction();
    expect(createTimer().stop).toBeFunction();
    expect(createTimer().getTimeInterval).toBeFunction();
  });

  it('should count correct time', function() {
    var myTimer = createTimer();

    myTimer.start();
    waits(500);
    runs(function() {
      myTimer.stop();  
    });

    runs(function() {
      console.log('timeInt', myTimer.getTimeInterval());
      expect(myTimer.getTimeInterval()).toBeGreaterThan(500); 
    });
  });
});
