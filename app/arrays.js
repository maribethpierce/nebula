exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  removeWithoutCopy : function(arr, item) {
    for (var i = 0;i < arr.length ;i++) {
	      if (arr[i] === item) {
	        arr.splice(i, 1);
          i -= 1
	      }
	    }
	    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    var count = 0;
    for (i in arr) {
      if(arr[i]===item) {
        count += 1;
      }
    }
    return count;
  },

  duplicates : function(arr) {
    var result = [];
    for ( var i = 0; i < arr.length; i++) {
      // Searching current ahead of current position for duplicates
      if(jQuery.inArray(arr[i], arr, i + 1) !== -1) {
        // Searching destination to see if already recorded
        if(jQuery.inArray(arr[i], result, 0) === -1) {
          result.push(arr[i]);
        }
      }
    }
    return result;
  },

  square : function(arr) {
    for (i in arr) {
      arr[i] *= arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    result = [];
    for(i in arr) {
      if(arr[i] === target) {result.push(i)}
    }
    return result;
  }
};
