exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return (/[0-9]/).test(str);
  },

  containsRepeatingLetter : function(str) {
    return (/([a-z])\1/i).test(str);
  },

  endsWithVowel : function(str) {
    return (/[a|e|i|o|u]$/i).test(str);
  },

  captureThreeNumbers : function(str) {
    var result = str.match(/[0-9]{3}/)
    if (result == null) {
      return false
    } else {
      return result[0]
    }
  },

  matchesPattern : function(str) {
    return (/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/).test(str);
  },

  isUSD : function(str) {
    // We wrote this ourselves. We didn't use Google. Suck it.
    return (/^\$[0-9]{1,3}(\,[0-9]{3})*((\.[0-9]{2})|)$/).test(str);
  }
};
