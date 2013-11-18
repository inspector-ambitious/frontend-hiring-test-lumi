// Reverse the order of a string
// Note: assuming the string_reverse function is not unicode aware.
function string_reverse(string) {
  return string.split('').reverse().join('');

// another implementation
//  var length = string.length,
//      half = Math.round(length/2),
//      i = half,
//      reverse = [];
//
//  for(;i >= 0; i--) {
//    reverse[length - i] = string.charAt(i);
//    reverse[i] = string.charAt(length - i);
//  }
//
//  return reverse.join('');
//
//
}

// Get a file extension from a filename
function file_get_extension(filename) {
  var array = filename.split('.'),
      length = array.length;

  if (length > 0) {
    return array[length - 1]
  }

}

// Parse and extract parts of a URL
// Note: the regexp is instantiated outside of the parse_url function
// for better performances.
var urlRe = /(\w+):\/\/([a-zA-Z0-9\.]+)(:[0-9]+)?([^#]+)/;
function parse_url(url) {
  var matches = url.match(urlRe);

  return {
    protocol: matches[1],
    hostname: matches[2],
    path: matches[matches.length - 1]
  };
}

// Get the number of <li>s containing an <a> in #dom_test_list
function dom_test_1() {
  // Note: if modern browsers only -> document.querySelectorAll('#dom_test_list > li')
  var lis = document.getElementById('dom_test_list').getElementsByTagName('li'),
      length = lis.length,
      i = 0,
      count = 0;

  for (; i < length; i++) {
    if (lis[i].getElementsByTagName('a').length > 0) {
      count++;
    }
  }

  return count;
}

// Get the "test" HTML5 Data-Attribute of the 2nd <li> in #dom_test_list
function dom_test_2() {
  // Note: if modern browsers only -> document.querySelectorAll('#dom_test_list > li[data-test]')
  var li = document.getElementById('dom_test_list').getElementsByTagName('li')[1];
  return li.dataset['test'];
}

// Get the text content of the last <li> in #dom_test_list
function dom_test_3() {
  // Note: if modern browsers only -> document.querySelectorAll('#dom_test_list > li')
  var lis = document.getElementById('dom_test_list').getElementsByTagName('li');
  return lis[lis.length - 1].textContent;
}
