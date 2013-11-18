module("String manipulation");

test("Reverse the order of a string", function() {
  equal(string_reverse('hello world'), 'dlrow olleh');
  equal(string_reverse('1234567890'), '0987654321');
  equal(string_reverse('5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8'), '8df86ee7b1338fc6b0522860f3f39b9c4e16aab5');
});

test("Get a file extension from a filename", function() {
  equal(file_get_extension('jquery.js'), 'js');
  equal(file_get_extension('jquery.min.js'), 'js');
});

test("Parse and extract parts of a URL", function() {
  var url_a = parse_url('http://example.com:8000/foo#top');
  var url_b = parse_url('https://lumi.do/topic/Food');

  equal(url_a.hostname, 'example.com');
  equal(url_a.protocol, 'http');
  equal(url_a.path, '/foo');

  equal(url_b.hostname, 'lumi.do');
  equal(url_b.protocol, 'https');
  equal(url_b.path, '/topic/Food');
});

module("DOM manipulation");

test("Get the number of <li>s containing an <a> in #dom_test_list", function() {
  equal(dom_test_1(), 2);
});

test( "Get the 'test' HTML5 Data-Attribute of the 2nd <li> in #dom_test_list", function() {
  equal(dom_test_2(), 'foo');
});

test( "Get the text content of the last <li> in #dom_test_list", function() {
  equal(dom_test_3(), 'Refresh');
});
