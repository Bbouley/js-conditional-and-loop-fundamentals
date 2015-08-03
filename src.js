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

  printBracketedNumbers: function(num){
    var string = '';
    for (var i = 0; i <= num; i++) {
      string = string.concat('['+i+']');
    }
    return string;
  },

  sumOfN: function(n){
    var num = 0;
    for (var i = 0; i <= n; i++) {
      num += i;
    }
    return num;
  },

  moviesFor: function(actor){

    switch(actor){
      case 'Robin Williams':
        return 'Jumanji, Hook, Good Will Hunting';
      case 'Sandra Bullock':
        return 'Gravity, The Lake House, The Blind Side';
      case 'Daniel Radcliffe':
        return 'All of the Harry Potters';
      default:
        return 'Please provide an actor or actress';
    }

  },

  joinWithForAndIndex: function(array){

  }

};

module.exports = yourCode;
