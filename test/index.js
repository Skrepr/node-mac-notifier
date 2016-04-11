var Notification = require('../');
var assert = require('assert');

describe('Mac Notification', function() {
  it('should require an options argument', function() {
    assert.throws(function() {
      var notification = new Notification('hi');
    });
  });
  
  it('should have a title accessor', function() {
    var title = 'Hello OS X!';
    var notification = new Notification(title, {});
    assert.equal(notification.title, title);
  });
});