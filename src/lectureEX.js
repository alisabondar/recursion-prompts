var input = [1, 2, [3, [[4]]], 5];
// desired output = [1, 2, 3, 4, 5]

var flatten = function(input) {
  // declare result array
  var result = [];
  // if input is not array BASE CASE
  if (!Array.isArray(input)) {
    // this will return to the result = result.concat below
    // and will exit this EC
    return input;
  }
  // iterate through input array
  input.forEach(function(item)) {
    // invoke recursive func and accumulate result!
    // take advantage of transferring data between ECs
    result = result.concat(flatten(item));
  }
  return result;
}


// INNER FUNCTION APPROACH
var flatten = function(input) {
  // declare a result array
  var result = [];

  var innerFunction = function(array) {

    // BASE CASE
    if (!Array.isArray(array)) {
      result.push(array);
      // accumulate array here
      return;
      // stop innerFunc
    }

    // RECURSIVE CASE
    array.forEach(function(item) {
      // invoke recursive call
      // WITHOUT inner function erases result each time
      innerFunction(item);
    });
  }

  innerFunction(input);

  return result;
}

// EC 1
input = [1, 2, [3, [[4]]], 5]
result = [1, 2, 3, 4, 5]
  // begin to fill it after the ECs below execute

// EC 2
array = [1, 2, [3, [[4]]], 5]
// through each iteration item changes and is inputted as aray in innerFunc
item = 1 -> result.push(innerFunction(item))

// EC 3
array = 1 -> so 1 is returned to EC below in call stack (above)

// EC 3 #2
array = 2

// EC 3 #3
array = [3, [[4]]]
// new iteration
item = 3

// EC 4
array = 3

// EC 4 #2
array = [[4]] -> still an array: result.push(innerFunction(item))

// EC 5
array = [4] -> pass one more time

// EC 6
array = 4

// EC 3 #4
array = 5




// if we were to iterate normally
// how would we know how many nester iterations to have?
// use recursion!

// flatten should work for everything below
flatten([1, 2, [3, [[4]]], 5]);
Flatten([3, [[4]]]);
flatten([[4]]);
flatten([4]);
flatten(4);
