var Test = (function(){
  function Expect(actual) {
    return {
      toHaveBeenCalled: function() {
        return expect(actual).toHaveBeenCalled();
      },
      toBeTruthy: function() {
        return expect(actual).toBeTruthy();
      },
      toBeFalsy: function() {
        return expect(actual).toBeFalsy();
      },
      toEqual: function(expected) {
        return expect(actual).toEqual(expected);
      },
      toBeDefined: function() {
        return expect(actual).toBeDefined();
      },
      toBeUndefined: function() {
        return expect(actual).toBeUndefined();
      },
      toHaveBeenCalledTimes: function(expected) {
        return expect(actual).toHaveBeenCalledTimes(expected);
      }
    }
  }

  function Mock(){ }
  
  Mock.createFn = function(fn) {
    return {
      returnValue: function(value) {
        return jasmine.createSpy(fn).and.returnValue(value)
      }
    }
  }

  return {
    Mock: Mock,
    expect: Expect
  };
}());  