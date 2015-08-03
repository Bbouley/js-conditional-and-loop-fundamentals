var yourCode = {

  commafy: function(n) {
    var start = '';
    for (var i = 1; i <= n; i++) {
      if (i === n) {
        start = start.concat(i);
      } else {
      start = start.concat(i + ',');
      }
    }
    return start;
  },

  joinToString: function(array) {
      var newArray = array.join(' and ');
      return newArray + (' oh my.');
    },

  printNumbers: function(num){
    return 'test';
  }

};

module.exports = yourCode;
