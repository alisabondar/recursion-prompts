var input = 'All my base are belong to you.';

var reverse = function(string) {
  if (string.length === 1) {
    return string[0];
  }
  // else {
  //   reverse(string.slice(0, string.length-1));
  // }
  // return '' + reverse(string.slice(0, string.length-1));
  return string[string.length-1] + reverse(string.slice(0, (string.length -2)));
};

console.log(input.slice(0, input.length-1));