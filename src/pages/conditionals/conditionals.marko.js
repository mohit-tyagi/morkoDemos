function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      __loadTemplate = __helpers.l,
      _____header_header_marko = __loadTemplate(require.resolve("./../header/header.marko"), require);

  return function render(data, out) {
    out.w('<!DOCTYPE html PUBLIC "-//IETF//DTD HTML 2.0//EN"> <HTML><HEAD><TITLE>Marko Demos</TITLE></HEAD><BODY>');
    __helpers.i(out, _____header_header_marko, {});

    out.w('<p> <strong>if as attribute</strong></p>');

    if (data.age < 50) {
      out.w('<div>You are less than 50 years old!</div>');
    }

    out.w('<p><strong>if as element</strong></p>');

    if (data.age < 50) {
      out.w('You are less than 50 years old!');
    }

    out.w('<p><strong>if-else-if as attribute</strong></p>');

    if (data.age < 50) {
      out.w('<div>You are less than 50 years old!</div>');
    }
    else if (data.age === 50) {
      out.w('<div>You are 50 years old</div>');
    }
    else {
      out.w('<div>You are over 50!</div>');
    }

    out.w('<p><strong>if-else-if as element</strong></p>');

    if (data.age < 50) {
      out.w('You are less than 50 years old!');
    }
    else if (data.age === 50) {
      out.w('You are 50 years old');
    }
    else {
      out.w('You are over 50!');
    }

    out.w('</BODY></HTML>');
  };
}
(module.exports = require("marko").c(__filename)).c(create);